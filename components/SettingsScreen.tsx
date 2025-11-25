import React, { useState } from 'react';
import { ChevronLeft, User, Mail, MapPin, Calendar, Edit, Camera, Image as ImageIcon } from 'lucide-react';

interface SettingsScreenProps {
  onClose: () => void;
}

export function SettingsScreen({ onClose }: SettingsScreenProps) {
  const [showPhotoSelector, setShowPhotoSelector] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState('👨‍🌾');

  const avatarOptions = ['👨‍🌾', '👩‍🌾', '🧑‍🌾', '👨‍🦰', '👩‍🦰', '👨‍🦱', '👩‍🦱', '🧔', '👩‍🦳', '👨‍🦳', '🌱', '🌿', '🌻', '🌸', '🌺', '🌷'];

  const handleAvatarSelect = (avatar: string) => {
    setSelectedAvatar(avatar);
    setShowPhotoSelector(false);
  };

  return (
    <div className="fixed inset-0 bg-[#F5F7FA] z-50 flex flex-col">
      {/* Photo Selector Modal */}
      {showPhotoSelector && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-900">Choose Profile Photo</h3>
              <button
                onClick={() => setShowPhotoSelector(false)}
                className="text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>

            {/* Upload Options */}
            <div className="space-y-3 mb-6">
              <button className="w-full flex items-center gap-3 p-4 bg-[#2E8B57]/10 rounded-xl hover:bg-[#2E8B57]/20 transition-colors">
                <Camera className="w-6 h-6 text-[#2E8B57]" />
                <div className="text-left">
                  <div className="text-gray-900">Take Photo</div>
                  <div className="text-sm text-gray-600">Use camera</div>
                </div>
              </button>

              <button className="w-full flex items-center gap-3 p-4 bg-[#7CB342]/10 rounded-xl hover:bg-[#7CB342]/20 transition-colors">
                <ImageIcon className="w-6 h-6 text-[#7CB342]" />
                <div className="text-left">
                  <div className="text-gray-900">Choose from Gallery</div>
                  <div className="text-sm text-gray-600">Select existing photo</div>
                </div>
              </button>
            </div>

            {/* Avatar Options */}
            <div>
              <h4 className="text-gray-900 mb-3">Or choose an avatar</h4>
              <div className="grid grid-cols-4 gap-3">
                {avatarOptions.map((avatar, index) => (
                  <button
                    key={index}
                    onClick={() => handleAvatarSelect(avatar)}
                    className={`w-full aspect-square rounded-2xl flex items-center justify-center text-4xl transition-all ${
                      selectedAvatar === avatar
                        ? 'bg-gradient-to-br from-[#2E8B57] to-[#7CB342] scale-110'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    {avatar}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => setShowPhotoSelector(false)}
              className="w-full mt-6 bg-gradient-to-r from-[#2E8B57] to-[#7CB342] text-white py-3 rounded-xl"
            >
              Done
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4 flex items-center gap-4">
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
          aria-label="Go back"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h3 className="text-gray-900">Account Settings</h3>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-4 pt-6">
          {/* Profile Picture */}
          <div className="text-center mb-6">
            <div className="w-24 h-24 bg-gradient-to-br from-[#2E8B57] to-[#7CB342] rounded-full flex items-center justify-center text-4xl mx-auto mb-4 shadow-lg">
              {selectedAvatar}
            </div>
            <button className="text-[#2E8B57] text-sm flex items-center gap-1 mx-auto" onClick={() => setShowPhotoSelector(true)}>
              <Edit className="w-4 h-4" />
              Change Photo
            </button>
          </div>

          {/* Account Information */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-4 shadow-md">
              <label className="block text-sm text-gray-600 mb-2">Full Name</label>
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  defaultValue="Alex Garden"
                  className="flex-1 text-gray-900 outline-none"
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-md">
              <label className="block text-sm text-gray-600 mb-2">Username</label>
              <div className="flex items-center gap-3">
                <span className="text-gray-400">@</span>
                <input
                  type="text"
                  defaultValue="alexgarden"
                  className="flex-1 text-gray-900 outline-none"
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-md">
              <label className="block text-sm text-gray-600 mb-2">Email</label>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  defaultValue="alex@garden.com"
                  className="flex-1 text-gray-900 outline-none"
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-md">
              <label className="block text-sm text-gray-600 mb-2">Location</label>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  defaultValue="San Francisco, CA"
                  className="flex-1 text-gray-900 outline-none"
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-md">
              <label className="block text-sm text-gray-600 mb-2">Member Since</label>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-gray-400" />
                <span className="text-gray-900">March 2024</span>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <button className="w-full mt-6 bg-gradient-to-r from-[#2E8B57] to-[#7CB342] text-white py-4 rounded-xl shadow-lg hover:shadow-xl transition-all">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}