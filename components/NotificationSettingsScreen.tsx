import React, { useState } from 'react';
import { ChevronLeft, Bell, MessageCircle, Heart, Award, AlertTriangle, Leaf } from 'lucide-react';

interface NotificationSettingsScreenProps {
  onClose: () => void;
}

export function NotificationSettingsScreen({ onClose }: NotificationSettingsScreenProps) {
  const [settings, setSettings] = useState({
    pushNotifications: true,
    emailNotifications: false,
    frostAlerts: true,
    waterReminders: true,
    communityLikes: true,
    communityComments: true,
    newFollowers: false,
    badgeUnlocks: true,
    plantHealth: true,
    weeklyDigest: false,
  });

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const notificationGroups = [
    {
      title: 'General',
      icon: Bell,
      color: 'text-[#FFD54F]',
      items: [
        { key: 'pushNotifications' as const, label: 'Push Notifications', description: 'Receive notifications on your device' },
        { key: 'emailNotifications' as const, label: 'Email Notifications', description: 'Get updates via email' },
      ],
    },
    {
      title: 'Plant Care',
      icon: Leaf,
      color: 'text-[#7CB342]',
      items: [
        { key: 'frostAlerts' as const, label: 'Frost Alerts', description: 'Temperature warnings for your plants' },
        { key: 'waterReminders' as const, label: 'Watering Reminders', description: 'When your plants need water' },
        { key: 'plantHealth' as const, label: 'Plant Health Updates', description: 'Health status changes' },
      ],
    },
    {
      title: 'Community',
      icon: MessageCircle,
      color: 'text-[#2E8B57]',
      items: [
        { key: 'communityLikes' as const, label: 'Likes on Posts', description: 'When someone likes your content' },
        { key: 'communityComments' as const, label: 'Comments & Replies', description: 'New comments on your posts' },
        { key: 'newFollowers' as const, label: 'New Followers', description: 'When someone follows you' },
      ],
    },
    {
      title: 'Achievements',
      icon: Award,
      color: 'text-[#FFB74D]',
      items: [
        { key: 'badgeUnlocks' as const, label: 'Badge Unlocks', description: 'New achievement earned' },
        { key: 'weeklyDigest' as const, label: 'Weekly Digest', description: 'Summary of your week in gardening' },
      ],
    },
  ];

  const ToggleSwitch = ({ enabled, onToggle }: { enabled: boolean; onToggle: () => void }) => (
    <button
      onClick={onToggle}
      className={`w-12 h-6 rounded-full relative transition-colors ${
        enabled ? 'bg-[#2E8B57]' : 'bg-gray-300'
      }`}
      aria-label={enabled ? 'Enabled' : 'Disabled'}
    >
      <div
        className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
          enabled ? 'right-1' : 'left-1'
        }`}
      ></div>
    </button>
  );

  return (
    <div className="fixed inset-0 bg-[#F5F7FA] z-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4 flex items-center gap-4">
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
          aria-label="Go back"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h3 className="text-gray-900">Notification Settings</h3>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-4 pt-6">
          {notificationGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <group.icon className={`w-5 h-5 ${group.color}`} />
                <h4 className="text-gray-900">{group.title}</h4>
              </div>

              <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                {group.items.map((item, itemIndex) => (
                  <div
                    key={item.key}
                    className={`p-4 ${
                      itemIndex !== group.items.length - 1 ? 'border-b border-gray-100' : ''
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-gray-900">{item.label}</span>
                      <ToggleSwitch
                        enabled={settings[item.key]}
                        onToggle={() => toggleSetting(item.key)}
                      />
                    </div>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Frost Alert Customization */}
          <div className="bg-gradient-to-br from-[#FFD54F]/20 to-[#FFB74D]/10 rounded-2xl p-5 border-2 border-[#FFD54F]/30">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-[#FFB74D]" />
              <h4 className="text-gray-900">Frost Alert Settings</h4>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-700 mb-2">Alert Threshold</label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="20"
                    max="40"
                    defaultValue="32"
                    className="flex-1"
                  />
                  <span className="text-gray-900 w-12 text-center bg-white px-2 py-1 rounded-lg">32°F</span>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">Alert Timing</label>
                <select className="w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-[#2E8B57] focus:outline-none">
                  <option>12 hours before</option>
                  <option>24 hours before</option>
                  <option>48 hours before</option>
                </select>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Night alerts (10pm - 6am)</span>
                <ToggleSwitch
                  enabled={true}
                  onToggle={() => {}}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
