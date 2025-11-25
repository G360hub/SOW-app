import React, { useState } from 'react';
import { ChevronLeft, Shield, Lock, Eye, EyeOff, Download, Trash2, AlertCircle, FileText } from 'lucide-react';
import { PrivacyPolicyScreen } from './PrivacyPolicyScreen';
import { TermsOfServiceScreen } from './TermsOfServiceScreen';

interface PrivacySecurityScreenProps {
  onClose: () => void;
}

export function PrivacySecurityScreen({ onClose }: PrivacySecurityScreenProps) {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsOfService, setShowTermsOfService] = useState(false);
  const [settings, setSettings] = useState({
    profileVisibility: 'public',
    showActivity: true,
    showGarden: true,
    allowMessages: true,
    showLocation: false,
    dataCollection: true,
  });

  const toggleSetting = (key: keyof typeof settings) => {
    if (typeof settings[key] === 'boolean') {
      setSettings(prev => ({ ...prev, [key]: !prev[key] }));
    }
  };

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
      {/* Privacy Policy Modal */}
      {showPrivacyPolicy && <PrivacyPolicyScreen onClose={() => setShowPrivacyPolicy(false)} />}

      {/* Terms of Service Modal */}
      {showTermsOfService && <TermsOfServiceScreen onClose={() => setShowTermsOfService(false)} />}

      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4 flex items-center gap-4">
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
          aria-label="Go back"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h3 className="text-gray-900">Privacy & Security</h3>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-4 pt-6">
          {/* Privacy Settings */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Eye className="w-5 h-5 text-[#2E8B57]" />
              <h4 className="text-gray-900">Privacy</h4>
            </div>

            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="p-4 border-b border-gray-100">
                <label className="block text-gray-900 mb-3">Profile Visibility</label>
                <select 
                  value={settings.profileVisibility}
                  onChange={(e) => setSettings(prev => ({ ...prev, profileVisibility: e.target.value }))}
                  className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-[#2E8B57] focus:outline-none"
                >
                  <option value="public">Public - Anyone can see</option>
                  <option value="followers">Followers only</option>
                  <option value="private">Private - Only you</option>
                </select>
              </div>

              <div className="p-4 border-b border-gray-100">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-gray-900">Show Activity Status</span>
                  <ToggleSwitch
                    enabled={settings.showActivity}
                    onToggle={() => toggleSetting('showActivity')}
                  />
                </div>
                <p className="text-sm text-gray-600">Let others see when you're active</p>
              </div>

              <div className="p-4 border-b border-gray-100">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-gray-900">Show Garden Collection</span>
                  <ToggleSwitch
                    enabled={settings.showGarden}
                    onToggle={() => toggleSetting('showGarden')}
                  />
                </div>
                <p className="text-sm text-gray-600">Display your plants publicly</p>
              </div>

              <div className="p-4 border-b border-gray-100">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-gray-900">Allow Direct Messages</span>
                  <ToggleSwitch
                    enabled={settings.allowMessages}
                    onToggle={() => toggleSetting('allowMessages')}
                  />
                </div>
                <p className="text-sm text-gray-600">Let others message you</p>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-gray-900">Show Location</span>
                  <ToggleSwitch
                    enabled={settings.showLocation}
                    onToggle={() => toggleSetting('showLocation')}
                  />
                </div>
                <p className="text-sm text-gray-600">Display your city on profile</p>
              </div>
            </div>
          </div>

          {/* Security Settings */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Lock className="w-5 h-5 text-[#FFB74D]" />
              <h4 className="text-gray-900">Security</h4>
            </div>

            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <button className="w-full p-4 border-b border-gray-100 flex items-center justify-between hover:bg-gray-50 transition-colors">
                <div className="text-left">
                  <span className="text-gray-900 block">Change Password</span>
                  <p className="text-sm text-gray-600">Update your account password</p>
                </div>
                <span className="text-gray-400">›</span>
              </button>

              <button className="w-full p-4 border-b border-gray-100 flex items-center justify-between hover:bg-gray-50 transition-colors">
                <div className="text-left">
                  <span className="text-gray-900 block">Two-Factor Authentication</span>
                  <p className="text-sm text-gray-600">Add extra security to your account</p>
                </div>
                <span className="text-gray-400">›</span>
              </button>

              <button className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                <div className="text-left">
                  <span className="text-gray-900 block">Connected Devices</span>
                  <p className="text-sm text-gray-600">Manage logged-in devices</p>
                </div>
                <span className="text-gray-400">›</span>
              </button>
            </div>
          </div>

          {/* Data & Storage */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="w-5 h-5 text-[#7CB342]" />
              <h4 className="text-gray-900">Data & Storage</h4>
            </div>

            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="p-4 border-b border-gray-100">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-gray-900">Analytics & Improvements</span>
                  <ToggleSwitch
                    enabled={settings.dataCollection}
                    onToggle={() => toggleSetting('dataCollection')}
                  />
                </div>
                <p className="text-sm text-gray-600">Help us improve SOW with usage data</p>
              </div>

              <button className="w-full p-4 border-b border-gray-100 flex items-center justify-between hover:bg-gray-50 transition-colors">
                <div className="text-left flex items-center gap-3">
                  <Download className="w-5 h-5 text-[#2E8B57]" />
                  <div>
                    <span className="text-gray-900 block">Download My Data</span>
                    <p className="text-sm text-gray-600">Get a copy of your information</p>
                  </div>
                </div>
                <span className="text-gray-400">›</span>
              </button>

              <button className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                <div className="text-left flex items-center gap-3">
                  <Trash2 className="w-5 h-5 text-red-500" />
                  <div>
                    <span className="text-red-600 block">Delete Account</span>
                    <p className="text-sm text-gray-600">Permanently remove your account</p>
                  </div>
                </div>
                <span className="text-gray-400">›</span>
              </button>
            </div>
          </div>

          {/* Important Notice */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4 mb-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-blue-900 mb-1">Your Privacy Matters</h4>
                <p className="text-sm text-blue-800 mb-3">
                  SOW is designed for plant care and community sharing. We never collect PII or store sensitive personal data.
                </p>
                <div className="space-y-2">
                  <button
                    onClick={() => setShowPrivacyPolicy(true)}
                    className="flex items-center gap-2 text-sm text-[#2E8B57] hover:underline"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Read Full Privacy Policy</span>
                  </button>
                  <button
                    onClick={() => setShowTermsOfService(true)}
                    className="flex items-center gap-2 text-sm text-[#2E8B57] hover:underline"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Read Terms of Service</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}