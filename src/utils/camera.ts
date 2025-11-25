// Camera and media utilities for mobile devices

export interface CameraOptions {
  facingMode?: 'user' | 'environment';
  width?: number;
  height?: number;
  aspectRatio?: number;
}

// Check if camera is available
export const isCameraAvailable = (): boolean => {
  return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
};

// Request camera permission and get stream
export const getCameraStream = async (options: CameraOptions = {}): Promise<MediaStream | null> => {
  if (!isCameraAvailable()) {
    console.error('Camera not available on this device');
    return null;
  }

  const constraints: MediaStreamConstraints = {
    video: {
      facingMode: options.facingMode || 'environment',
      width: options.width ? { ideal: options.width } : { ideal: 1920 },
      height: options.height ? { ideal: options.height } : { ideal: 1080 },
      aspectRatio: options.aspectRatio || 16 / 9,
    },
    audio: false,
  };

  try {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    return stream;
  } catch (error) {
    console.error('Error accessing camera:', error);
    return null;
  }
};

// Capture photo from stream
export const capturePhoto = (
  stream: MediaStream,
  canvas: HTMLCanvasElement
): string | null => {
  const video = document.createElement('video');
  video.srcObject = stream;
  video.play();

  return new Promise((resolve) => {
    video.onloadedmetadata = () => {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext('2d');
      
      if (context) {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageDataUrl = canvas.toDataURL('image/jpeg', 0.9);
        resolve(imageDataUrl);
      } else {
        resolve(null);
      }
      
      video.pause();
      video.srcObject = null;
    };
  });
};

// Stop camera stream
export const stopCameraStream = (stream: MediaStream): void => {
  stream.getTracks().forEach((track) => track.stop());
};

// Switch camera (front/back)
export const switchCamera = async (
  currentStream: MediaStream,
  currentFacingMode: 'user' | 'environment'
): Promise<MediaStream | null> => {
  stopCameraStream(currentStream);
  const newFacingMode = currentFacingMode === 'user' ? 'environment' : 'user';
  return getCameraStream({ facingMode: newFacingMode });
};

// File input for selecting photos from gallery
export const selectPhotoFromGallery = (): Promise<File | null> => {
  return new Promise((resolve) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.capture = 'environment';
    
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      resolve(file || null);
    };
    
    input.click();
  });
};

// Convert File to base64
export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};

// Compress image
export const compressImage = (
  imageDataUrl: string,
  maxWidth: number = 1200,
  quality: number = 0.8
): Promise<string> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = imageDataUrl;
    
    img.onload = () => {
      const canvas = document.createElement('canvas');
      let { width, height } = img;
      
      if (width > maxWidth) {
        height = (height * maxWidth) / width;
        width = maxWidth;
      }
      
      canvas.width = width;
      canvas.height = height;
      
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg', quality));
      } else {
        resolve(imageDataUrl);
      }
    };
  });
};

// Get image dimensions
export const getImageDimensions = (imageUrl: string): Promise<{ width: number; height: number }> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => resolve({ width: img.width, height: img.height });
    img.onerror = reject;
  });
};

// Check if device has multiple cameras
export const hasMultipleCameras = async (): Promise<boolean> => {
  if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
    return false;
  }
  
  try {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const videoDevices = devices.filter((device) => device.kind === 'videoinput');
    return videoDevices.length > 1;
  } catch (error) {
    console.error('Error enumerating devices:', error);
    return false;
  }
};

// Get available cameras
export const getAvailableCameras = async (): Promise<MediaDeviceInfo[]> => {
  if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
    return [];
  }
  
  try {
    const devices = await navigator.mediaDevices.enumerateDevices();
    return devices.filter((device) => device.kind === 'videoinput');
  } catch (error) {
    console.error('Error getting available cameras:', error);
    return [];
  }
};
