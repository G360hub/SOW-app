import React, { useState, useEffect } from 'react';
import { Download, X, Smartphone, Zap, Cloud, Bell } from 'lucide-react';
import { canInstallPWA, showInstallPrompt, setupInstallPrompt, isPWA, isIOS } from '../utils/pwa';

export function InstallPrompt() {
  const [showPrompt, setShowPrompt] = useState(false);
  const [showIOSInstructions, setShowIOSInstructions] = useState(false);

  useEffect(() => {
    // Set up install prompt listener
    setupInstallPrompt();

    // Check if we should show the prompt
    const hasSeenPrompt = localStorage.getItem('hasSeenInstallPrompt');
    const isAlreadyInstalled = isPWA();
    const isPreviewEnvironment = window.location.hostname.includes('figma.site');
    
    // Don't show install prompt in preview environments
    if (isPreviewEnvironment) {
      return;
    }
    
    if (!hasSeenPrompt && !isAlreadyInstalled) {
      // Show prompt after a short delay
      setTimeout(() => {
        if (canInstallPWA()) {
          setShowPrompt(true);
        } else if (isIOS()) {
          setShowPrompt(true);
          setShowIOSInstructions(true);
        }
      }, 3000);
    }
  }, []);

  const handleInstall = async () => {
    const installed = await showInstallPrompt();
    if (installed) {
      localStorage.setItem('hasSeenInstallPrompt', 'true');
      setShowPrompt(false);
    }
  };

  const handleDismiss = () => {
    localStorage.setItem('hasSeenInstallPrompt', 'true');
    setShowPrompt(false);
  };

  if (!showPrompt) {
    return null;
  }

  if (showIOSInstructions) {
    return (
      <div className="fixed bottom-20 left-4 right-4 z-50 animate-in slide-in-from-bottom">
        <div className="bg-gradient-to-br from-[#2E8B57] to-[#7CB342] rounded-3xl p-6 shadow-2xl border-2 border-white/20">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-[#2E8B57]" />
              </div>
              <div>
                <h4 className="text-white mb-1">Install SOW</h4>
                <p className="text-sm text-white/80">
                  Add to your home screen
                </p>
              </div>
            </div>
            <button
              onClick={handleDismiss}
              className="p-2 hover:bg-white/10 rounded-xl transition-colors"
              aria-label="Dismiss"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          <div className="bg-white/10 rounded-2xl p-4 mb-4 backdrop-blur-sm">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-white flex-shrink-0">
                1
              </div>
              <p className="text-sm text-white">
                Tap the <strong>Share</strong> button at the bottom of your browser
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-white flex-shrink-0">
                2
              </div>
              <p className="text-sm text-white">
                Select <strong>"Add to Home Screen"</strong> from the menu
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="text-center">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Zap className="w-5 h-5 text-[#FFD54F]" />
              </div>
              <p className="text-xs text-white/80">Fast</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Cloud className="w-5 h-5 text-white" />
              </div>
              <p className="text-xs text-white/80">Offline</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Bell className="w-5 h-5 text-white" />
              </div>
              <p className="text-xs text-white/80">Alerts</p>
            </div>
          </div>

          <button
            onClick={handleDismiss}
            className="w-full py-3 bg-white text-[#2E8B57] rounded-xl transition-all active:scale-95"
          >
            Got it!
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-20 left-4 right-4 z-50 animate-in slide-in-from-bottom">
      <div className="bg-gradient-to-br from-[#2E8B57] to-[#7CB342] rounded-3xl p-6 shadow-2xl border-2 border-white/20">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center">
              <Download className="w-6 h-6 text-[#2E8B57]" />
            </div>
            <div>
              <h4 className="text-white mb-1">Install SOW App</h4>
              <p className="text-sm text-white/80">
                Get the full mobile experience
              </p>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="p-2 hover:bg-white/10 rounded-xl transition-colors"
            aria-label="Dismiss"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="text-center">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-2">
              <Zap className="w-5 h-5 text-[#FFD54F]" />
            </div>
            <p className="text-xs text-white/80">Instant access</p>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-2">
              <Cloud className="w-5 h-5 text-white" />
            </div>
            <p className="text-xs text-white/80">Works offline</p>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-2">
              <Bell className="w-5 h-5 text-white" />
            </div>
            <p className="text-xs text-white/80">Frost alerts</p>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleDismiss}
            className="flex-1 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all active:scale-95"
          >
            Not now
          </button>
          <button
            onClick={handleInstall}
            className="flex-1 py-3 bg-white text-[#2E8B57] rounded-xl hover:shadow-lg transition-all active:scale-95"
          >
            Install
          </button>
        </div>
      </div>
    </div>
  );
}