import React from 'react';
import { Home, Camera, Leaf, Users, User } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'identify', label: 'Identify', icon: Camera },
    { id: 'garden', label: 'Garden', icon: Leaf },
    { id: 'community', label: 'Community', icon: Users },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-50">
      <div className="flex items-center justify-around max-w-2xl mx-auto">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center gap-1 py-2 px-3 rounded-xl transition-all ${
                isActive
                  ? 'text-[#2E8B57]'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <div className={`relative ${isActive ? 'animate-bloom' : ''}`}>
                <Icon
                  className={`w-6 h-6 ${
                    isActive ? 'fill-[#2E8B57]/20' : ''
                  }`}
                />
                {isActive && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#2E8B57] rounded-full"></div>
                )}
              </div>
              <span className="text-xs">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
