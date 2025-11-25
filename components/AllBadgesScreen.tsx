import React, { useState } from 'react';
import { ChevronLeft, Award, Lock } from 'lucide-react';

interface AllBadgesScreenProps {
  onClose: () => void;
}

export function AllBadgesScreen({ onClose }: AllBadgesScreenProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'earned' | 'locked'>('all');

  const allBadges = [
    { name: 'Plant Parent', icon: '🌱', earned: true, rarity: 'Common', description: 'Add your first plant to the garden' },
    { name: 'Master Gardener', icon: '🏆', earned: true, rarity: 'Rare', description: 'Successfully care for 20+ plants' },
    { name: 'Frost Warrior', icon: '❄️', earned: true, rarity: 'Epic', description: 'Save plants from 5 frost warnings' },
    { name: 'Ancient Wisdom Seeker', icon: '📚', earned: true, rarity: 'Rare', description: 'Unlock plant lore for 10 species' },
    { name: 'Community Helper', icon: '🤝', earned: false, rarity: 'Rare', description: 'Help 50 community members' },
    { name: 'Perfect Streak', icon: '🔥', earned: false, rarity: 'Legendary', description: 'Maintain a 30-day care streak' },
    { name: 'Expert Identifier', icon: '🔍', earned: false, rarity: 'Epic', description: 'Identify 100 different species' },
    { name: 'Green Thumb', icon: '👍', earned: false, rarity: 'Common', description: 'Keep all plants healthy for 1 week' },
    { name: 'Diversity Champion', icon: '🌈', earned: false, rarity: 'Rare', description: 'Grow 10 different plant families' },
    { name: 'Night Owl', icon: '🦉', earned: false, rarity: 'Common', description: 'Water plants after 9 PM 5 times' },
    { name: 'Early Bird', icon: '🐦', earned: false, rarity: 'Common', description: 'Check your garden before 6 AM' },
    { name: 'Social Butterfly', icon: '🦋', earned: false, rarity: 'Rare', description: 'Make 20 community posts' },
    { name: 'Knowledge Seeker', icon: '📖', earned: false, rarity: 'Epic', description: 'Read 50 plant histories' },
    { name: 'Challenge Master', icon: '🎯', earned: false, rarity: 'Legendary', description: 'Complete 10 seasonal challenges' },
    { name: 'Rare Collector', icon: '💎', earned: false, rarity: 'Legendary', description: 'Own 5 rare plant species' },
  ];

  const categories = [
    { id: 'all' as const, label: 'All', count: allBadges.length },
    { id: 'earned' as const, label: 'Earned', count: allBadges.filter(b => b.earned).length },
    { id: 'locked' as const, label: 'Locked', count: allBadges.filter(b => !b.earned).length },
  ];

  const filteredBadges = allBadges.filter(badge => {
    if (activeCategory === 'earned') return badge.earned;
    if (activeCategory === 'locked') return !badge.earned;
    return true;
  });

  const rarityColors: Record<string, string> = {
    'Common': 'bg-gray-500',
    'Rare': 'bg-blue-500',
    'Epic': 'bg-purple-500',
    'Legendary': 'bg-yellow-500',
  };

  return (
    <div className="fixed inset-0 bg-[#F5F7FA] z-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
            aria-label="Go back"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <h3 className="text-gray-900">Achievement Badges</h3>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex-1 py-2 px-4 rounded-xl transition-all ${
                activeCategory === category.id
                  ? 'bg-[#2E8B57] text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              <span className="text-sm">{category.label}</span>
              <span className="text-xs ml-1">({category.count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-4 pt-6">
          {/* Progress Summary */}
          <div className="bg-gradient-to-br from-[#2E8B57]/10 to-[#7CB342]/10 rounded-2xl p-5 mb-6 border-2 border-[#7CB342]/20">
            <div className="flex items-center gap-3 mb-3">
              <Award className="w-6 h-6 text-[#FFD54F]" />
              <div className="flex-1">
                <h4 className="text-gray-900">Your Progress</h4>
                <p className="text-sm text-gray-600">
                  {allBadges.filter(b => b.earned).length} of {allBadges.length} badges earned
                </p>
              </div>
            </div>
            <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="absolute inset-0 bg-gradient-to-r from-[#7CB342] to-[#2E8B57] rounded-full"
                style={{ width: `${(allBadges.filter(b => b.earned).length / allBadges.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Badges Grid */}
          <div className="grid grid-cols-2 gap-4">
            {filteredBadges.map((badge, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-5 shadow-md ${
                  !badge.earned ? 'opacity-75' : ''
                }`}
              >
                <div className="text-center">
                  <div
                    className={`w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto mb-3 relative ${
                      badge.earned
                        ? 'bg-gradient-to-br from-[#FFD54F] to-[#FFB74D]'
                        : 'bg-gray-200 grayscale'
                    }`}
                  >
                    {badge.icon}
                    {!badge.earned && (
                      <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center">
                        <Lock className="w-8 h-8 text-white" />
                      </div>
                    )}
                  </div>
                  
                  <h4 className={`text-sm mb-2 ${badge.earned ? 'text-gray-900' : 'text-gray-600'}`}>
                    {badge.name}
                  </h4>
                  
                  <p className="text-xs text-gray-600 mb-3 min-h-[2.5rem]">
                    {badge.description}
                  </p>
                  
                  <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs text-white ${rarityColors[badge.rarity]}`}>
                    <span>{badge.rarity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredBadges.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-12 h-12 text-gray-400" />
              </div>
              <h4 className="text-gray-900 mb-2">No badges yet</h4>
              <p className="text-gray-600 text-sm">
                Keep gardening to unlock achievements!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
