import React, { useState } from 'react';
import { Settings, Award, TrendingUp, Camera, Leaf, Users, Bell, Shield, HelpCircle, LogOut } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SettingsScreen } from './SettingsScreen';
import { AllBadgesScreen } from './AllBadgesScreen';
import { NotificationSettingsScreen } from './NotificationSettingsScreen';
import { PrivacySecurityScreen } from './PrivacySecurityScreen';
import { HelpSupportScreen } from './HelpSupportScreen';
import { StatListScreen } from './StatListScreen';

export function Profile() {
  const [showSettings, setShowSettings] = useState(false);
  const [showAllBadges, setShowAllBadges] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [showStatList, setShowStatList] = useState<'plants' | 'identified' | 'following' | null>(null);

  const stats = [
    { label: 'Plants', value: '24', icon: Leaf, color: 'text-[#7CB342]' },
    { label: 'Identified', value: '156', icon: Camera, color: 'text-[#FFD54F]' },
    { label: 'Following', value: '342', icon: Users, color: 'text-[#2E8B57]' },
  ];

  const badges = [
    { name: 'Plant Parent', icon: '🌱', earned: true, rarity: 'Common' },
    { name: 'Master Gardener', icon: '🏆', earned: true, rarity: 'Rare' },
    { name: 'Frost Warrior', icon: '❄️', earned: true, rarity: 'Epic' },
    { name: 'Community Helper', icon: '🤝', earned: false, rarity: 'Rare' },
    { name: 'Perfect Streak', icon: '🔥', earned: false, rarity: 'Legendary' },
    { name: 'Expert Identifier', icon: '🔍', earned: false, rarity: 'Epic' },
  ];

  const activities = [
    { date: 'Nov 22', action: 'Identified Cherry Blossom', icon: Camera },
    { date: 'Nov 21', action: 'Watered 3 plants', icon: TrendingUp },
    { date: 'Nov 20', action: 'Helped 2 community members', icon: Users },
    { date: 'Nov 19', action: 'Earned "Frost Warrior" badge', icon: Award },
  ];

  const settings = [
    { label: 'Notification Settings', icon: Bell, color: 'text-[#FFD54F]' },
    { label: 'Privacy & Security', icon: Shield, color: 'text-[#2E8B57]' },
    { label: 'Help & Support', icon: HelpCircle, color: 'text-[#7CB342]' },
  ];

  return (
    <div className="min-h-screen bg-[#F5F7FA] pb-24">
      {/* Modals */}
      {showSettings && <SettingsScreen onClose={() => setShowSettings(false)} />}
      {showAllBadges && <AllBadgesScreen onClose={() => setShowAllBadges(false)} />}
      {showNotifications && <NotificationSettingsScreen onClose={() => setShowNotifications(false)} />}
      {showPrivacy && <PrivacySecurityScreen onClose={() => setShowPrivacy(false)} />}
      {showHelp && <HelpSupportScreen onClose={() => setShowHelp(false)} />}
      {showStatList && <StatListScreen type={showStatList} onClose={() => setShowStatList(null)} />}

      {/* Header with Garden Gate Design */}
      <div className="relative bg-gradient-to-br from-[#2E8B57] to-[#7CB342] pb-20 overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1513906029980-32d13afe6d8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBnYXJkZW4lMjBwZW9wbGV8ZW58MXx8fHwxNzYzNzc4NTI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Garden background"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        
        <div className="relative z-10 px-4 pt-6 pb-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-white">Profile</h3>
            <button 
              onClick={() => setShowSettings(true)}
              className="p-2 bg-white/20 rounded-xl hover:bg-white/30 transition-colors"
            >
              <Settings className="w-6 h-6 text-white" />
            </button>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-4xl mb-4 shadow-lg">
              👨‍🌾
            </div>
            <h2 className="text-white mb-1">Alex Garden</h2>
            <p className="text-white/90 text-sm mb-4">@alexgarden</p>
            
            {/* Streak */}
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
              <span className="text-2xl">🔥</span>
              <span className="text-white">12 day streak</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="px-4 -mt-16 relative z-20 mb-6">
        <div className="grid grid-cols-3 gap-3">
          {stats.map((stat, index) => (
            <button
              key={index}
              onClick={() => setShowStatList(stat.label.toLowerCase() as 'plants' | 'identified' | 'following')}
              className="bg-white rounded-2xl p-4 text-center shadow-md hover:shadow-lg transition-all"
            >
              <stat.icon className={`w-6 h-6 ${stat.color} mx-auto mb-2`} />
              <div className="text-xl text-gray-900">{stat.value}</div>
              <div className="text-xs text-gray-600">{stat.label}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Achievement Badges */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-gray-900">Achievement Badges</h4>
          <button 
            onClick={() => setShowAllBadges(true)}
            className="text-[#2E8B57] text-sm"
          >
            View All
          </button>
        </div>
        
        <div className="bg-white rounded-2xl p-5 shadow-md">
          <div className="grid grid-cols-3 gap-4">
            {badges.map((badge, index) => (
              <div key={index} className="text-center">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto mb-2 ${
                    badge.earned
                      ? 'bg-gradient-to-br from-[#FFD54F] to-[#FFB74D]'
                      : 'bg-gray-200 grayscale'
                  }`}
                >
                  {badge.icon}
                </div>
                <p className={`text-xs ${badge.earned ? 'text-gray-900' : 'text-gray-400'}`}>
                  {badge.name}
                </p>
                <p className="text-xs text-gray-500 mt-1">{badge.rarity}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Activity Timeline */}
      <div className="px-4 mb-6">
        <h4 className="mb-3 text-gray-900">Recent Activity</h4>
        <div className="bg-white rounded-2xl p-5 shadow-md">
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="bg-[#7CB342]/10 p-2 rounded-xl">
                  <activity.icon className="w-5 h-5 text-[#7CB342]" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Frost Alert Settings */}
      <div className="px-4 mb-6">
        <h4 className="mb-3 text-gray-900">Frost Alert Settings</h4>
        <div className="bg-white rounded-2xl p-5 shadow-md space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-[#FFD54F]" />
              <span className="text-gray-900">Push Notifications</span>
            </div>
            <button className="w-12 h-6 bg-[#2E8B57] rounded-full relative">
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-[#FFD54F]" />
              <span className="text-gray-900">Email Alerts</span>
            </div>
            <button className="w-12 h-6 bg-gray-300 rounded-full relative">
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
            </button>
          </div>

          <div className="pt-3 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-2">Alert Threshold</p>
            <div className="flex items-center gap-2">
              <input
                type="range"
                min="20"
                max="40"
                defaultValue="32"
                className="flex-1"
              />
              <span className="text-gray-900 w-12 text-center">32°F</span>
            </div>
          </div>
        </div>
      </div>

      {/* Settings */}
      <div className="px-4 mb-6">
        <h4 className="mb-3 text-gray-900">Settings</h4>
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <button
            onClick={() => setShowNotifications(true)}
            className="w-full flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors border-b border-gray-100"
          >
            <Bell className="w-5 h-5 text-[#FFD54F]" />
            <span className="text-gray-900 flex-1 text-left">Notification Settings</span>
            <span className="text-gray-400">›</span>
          </button>
          
          <button
            onClick={() => setShowPrivacy(true)}
            className="w-full flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors border-b border-gray-100"
          >
            <Shield className="w-5 h-5 text-[#2E8B57]" />
            <span className="text-gray-900 flex-1 text-left">Privacy & Security</span>
            <span className="text-gray-400">›</span>
          </button>
          
          <button
            onClick={() => setShowHelp(true)}
            className="w-full flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors"
          >
            <HelpCircle className="w-5 h-5 text-[#7CB342]" />
            <span className="text-gray-900 flex-1 text-left">Help & Support</span>
            <span className="text-gray-400">›</span>
          </button>
        </div>
      </div>

      {/* Logout */}
      <div className="px-4 pb-6">
        <button className="w-full flex items-center justify-center gap-3 bg-white text-red-500 py-4 rounded-2xl shadow-md hover:shadow-lg transition-all">
          <LogOut className="w-5 h-5" />
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
}