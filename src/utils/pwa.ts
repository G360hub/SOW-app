// PWA Installation and Service Worker utilities

export interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

// Register service worker
export const registerServiceWorker = async (): Promise<ServiceWorkerRegistration | null> => {
  if ('serviceWorker' in navigator) {
    try {
      // Check if we're in a secure context and not in an iframe preview environment
      const isSecureContext = window.isSecureContext;
      const isIframePreview = window.location.hostname.includes('figma.site') || 
                             window.location.hostname.includes('localhost') ||
                             window !== window.top;
      
      // Skip service worker registration in iframe preview environments
      if (isIframePreview) {
        console.log('Service Worker registration skipped in preview environment');
        return null;
      }
      
      if (!isSecureContext) {
        console.log('Service Worker requires HTTPS');
        return null;
      }
      
      const registration = await navigator.serviceWorker.register('/service-worker.js', {
        scope: '/',
      });
      
      console.log('Service Worker registered successfully:', registration.scope);
      
      // Check for updates every hour
      setInterval(() => {
        registration.update();
      }, 60 * 60 * 1000);
      
      return registration;
    } catch (error) {
      console.log('Service Worker registration skipped:', error instanceof Error ? error.message : 'Unknown error');
      return null;
    }
  }
  return null;
};

// Request notification permission
export const requestNotificationPermission = async (): Promise<NotificationPermission> => {
  if ('Notification' in window) {
    const permission = await Notification.requestPermission();
    return permission;
  }
  return 'denied';
};

// Subscribe to push notifications
export const subscribeToPushNotifications = async (
  registration: ServiceWorkerRegistration,
  vapidPublicKey: string
): Promise<PushSubscription | null> => {
  try {
    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(vapidPublicKey),
    });
    return subscription;
  } catch (error) {
    console.error('Failed to subscribe to push notifications:', error);
    return null;
  }
};

// Helper function to convert VAPID key
function urlBase64ToUint8Array(base64String: string): Uint8Array {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

// Check if app is running as PWA
export const isPWA = (): boolean => {
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    (window.navigator as any).standalone ||
    document.referrer.includes('android-app://')
  );
};

// Check if device is iOS
export const isIOS = (): boolean => {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
};

// Check if device is Android
export const isAndroid = (): boolean => {
  return /Android/.test(navigator.userAgent);
};

// Request persistent storage
export const requestPersistentStorage = async (): Promise<boolean> => {
  if (navigator.storage && navigator.storage.persist) {
    const isPersisted = await navigator.storage.persist();
    console.log(`Persistent storage granted: ${isPersisted}`);
    return isPersisted;
  }
  return false;
};

// Check storage quota
export const checkStorageQuota = async (): Promise<{
  usage: number;
  quota: number;
  percentUsed: number;
} | null> => {
  if (navigator.storage && navigator.storage.estimate) {
    const estimate = await navigator.storage.estimate();
    const usage = estimate.usage || 0;
    const quota = estimate.quota || 0;
    const percentUsed = (usage / quota) * 100;
    
    return {
      usage,
      quota,
      percentUsed,
    };
  }
  return null;
};

// Background sync
export const registerBackgroundSync = async (
  registration: ServiceWorkerRegistration,
  tag: string
): Promise<void> => {
  if ('sync' in registration) {
    try {
      await registration.sync.register(tag);
      console.log(`Background sync registered: ${tag}`);
    } catch (error) {
      console.error('Background sync registration failed:', error);
    }
  }
};

// Share API
export const canShare = (): boolean => {
  return navigator.share !== undefined;
};

export const shareContent = async (data: {
  title?: string;
  text?: string;
  url?: string;
  files?: File[];
}): Promise<boolean> => {
  if (canShare()) {
    try {
      await navigator.share(data);
      return true;
    } catch (error) {
      if ((error as Error).name !== 'AbortError') {
        console.error('Share failed:', error);
      }
      return false;
    }
  }
  return false;
};

// Vibration API
export const vibrate = (pattern: number | number[]): boolean => {
  if ('vibrate' in navigator) {
    navigator.vibrate(pattern);
    return true;
  }
  return false;
};

// Wake Lock API (keep screen on)
export const requestWakeLock = async (): Promise<WakeLockSentinel | null> => {
  if ('wakeLock' in navigator) {
    try {
      const wakeLock = await (navigator as any).wakeLock.request('screen');
      console.log('Wake lock acquired');
      return wakeLock;
    } catch (error) {
      console.error('Wake lock request failed:', error);
      return null;
    }
  }
  return null;
};

// Network status
export const getNetworkStatus = (): {
  online: boolean;
  effectiveType?: string;
  downlink?: number;
  rtt?: number;
} => {
  const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
  
  return {
    online: navigator.onLine,
    effectiveType: connection?.effectiveType,
    downlink: connection?.downlink,
    rtt: connection?.rtt,
  };
};

// Add to home screen prompt
export let deferredPrompt: BeforeInstallPromptEvent | null = null;

export const setupInstallPrompt = (): void => {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e as BeforeInstallPromptEvent;
  });
  
  window.addEventListener('appinstalled', () => {
    console.log('PWA was installed');
    deferredPrompt = null;
  });
};

export const showInstallPrompt = async (): Promise<boolean> => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    deferredPrompt = null;
    return outcome === 'accepted';
  }
  return false;
};

export const canInstallPWA = (): boolean => {
  return deferredPrompt !== null;
};