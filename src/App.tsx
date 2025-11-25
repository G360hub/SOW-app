import React, { useState, useEffect } from 'react';
import { Onboarding } from './components/Onboarding';
import { HomeDashboard } from './components/HomeDashboard';
import { IdentifyTab } from './components/IdentifyTab';
import { MyGarden } from './components/MyGarden';
import { CommunityHub } from './components/CommunityHub';
import { Profile } from './components/Profile';
import { BottomNav } from './components/BottomNav';
import { SearchScreen } from './components/SearchScreen';
import { InstallPrompt } from './components/InstallPrompt';
import { registerServiceWorker, requestPersistentStorage } from './utils/pwa';

export default function App() {
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [activeTab, setActiveTab] = useState('home');
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    // Register service worker for PWA functionality (only in production)
    const initPWA = async () => {
      try {
        await registerServiceWorker();
        await requestPersistentStorage();
      } catch (error) {
        // PWA features not available in this environment
        console.log('PWA features not available');
      }
    };
    
    initPWA();
    
    // Handle network status changes
    const handleOnline = () => {
      console.log('App is online');
      // Sync any pending data when coming back online
    };
    
    const handleOffline = () => {
      console.log('App is offline');
      // Show offline indicator if needed
    };
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (showOnboarding) {
    return <Onboarding onComplete={() => setShowOnboarding(false)} />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomeDashboard />;
      case 'identify':
        return <IdentifyTab />;
      case 'garden':
        return <MyGarden />;
      case 'community':
        return <CommunityHub />;
      case 'profile':
        return <Profile />;
      default:
        return <HomeDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      {showSearch && <SearchScreen onClose={() => setShowSearch(false)} />}
      <InstallPrompt />
      {renderContent()}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}