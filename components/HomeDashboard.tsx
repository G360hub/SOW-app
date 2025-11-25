import React, { useState } from 'react';
import { AlertTriangle, ThermometerSnowflake, TrendingUp, Users, Award, ChevronRight, Heart, MessageCircle, Share2, Shield, Sprout, Home, Wind } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HomeDashboard() {
  const [showProtectionTips, setShowProtectionTips] = useState(false);

  const stats = [
    { label: 'Plants', value: '24', icon: '🌱', color: 'bg-[#7CB342]/10' },
    { label: 'Identified', value: '156', icon: '📸', color: 'bg-[#FFD54F]/20' },
    { label: 'Streak', value: '12d', icon: '🔥', color: 'bg-[#2E8B57]/10' },
  ];

  const communityPosts = [
    {
      id: 1,
      user: 'Sarah Green',
      avatar: '👩‍🌾',
      time: '2h ago',
      text: 'My tomatoes are finally thriving! Thanks for all the watering tips 🍅',
      image: 'https://images.unsplash.com/photo-1735583697864-9dbbaedee928?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJkZW4lMjBwbGFudHMlMjBzdW5saWdodHxlbnwxfHx8fDE3NjM4Nzk0NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      likes: 42,
      comments: 8,
    },
    {
      id: 2,
      user: 'Mike Chen',
      avatar: '👨‍🌾',
      time: '5h ago',
      text: 'Can anyone identify this beautiful flower I found on my hike?',
      image: 'https://images.unsplash.com/photo-1617836250803-24873f080562?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVycnklMjBibG9zc29tcyUyMHNwcmluZ3xlbnwxfHx8fDE3NjM4Nzk0NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      likes: 67,
      comments: 15,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F7FA] pb-24">
      {/* Seasonal Header */}
      <div className="relative h-48 bg-gradient-to-br from-[#2E8B57] to-[#7CB342] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1617836250803-24873f080562?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVycnklMjBibG9zc29tcyUyMHNwcmluZ3xlbnwxfHx8fDE3NjM4Nzk0NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Spring"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 p-6">
          <h3 className="text-white mb-1">Good morning! 🌸</h3>
          <p className="text-white/90 text-sm">Spring is in full bloom</p>
        </div>
      </div>

      {/* Alert Center */}
      <div className="px-4 -mt-12 relative z-20">
        <div className="bg-gradient-to-r from-[#FFD54F] to-[#FFB74D] rounded-2xl p-4 shadow-lg">
          <div className="flex items-start gap-3">
            <div className="bg-white/90 p-2 rounded-xl">
              <ThermometerSnowflake className="w-6 h-6 text-[#2E8B57]" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="text-gray-900">Frost Alert</h4>
                <AlertTriangle className="w-4 h-4 text-orange-600" />
              </div>
              <p className="text-sm text-gray-800 mb-2">
                Temperature dropping to 28°F tonight. Protect your tender plants!
              </p>
              <button
                className="text-sm text-[#2E8B57] flex items-center gap-1 hover:underline"
                onClick={() => setShowProtectionTips(!showProtectionTips)}
              >
                {showProtectionTips ? 'Hide' : 'View'} Protection Tips
                <ChevronRight className={`w-4 h-4 transition-transform ${showProtectionTips ? 'rotate-90' : ''}`} />
              </button>
              {showProtectionTips && (
                <div className="mt-3 bg-white/80 backdrop-blur-sm rounded-xl p-3 space-y-2">
                  <div className="flex items-start gap-2 text-sm text-gray-800">
                    <Shield className="w-4 h-4 text-[#2E8B57] flex-shrink-0 mt-0.5" />
                    <span>Cover plants with frost cloth or blankets before sunset</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-800">
                    <Sprout className="w-4 h-4 text-[#7CB342] flex-shrink-0 mt-0.5" />
                    <span>Move potted plants indoors or to sheltered areas</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-800">
                    <Home className="w-4 h-4 text-[#FFB74D] flex-shrink-0 mt-0.5" />
                    <span>Ensure soil is moist but not waterlogged (helps retain heat)</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-800">
                    <Wind className="w-4 h-4 text-[#2E8B57] flex-shrink-0 mt-0.5" />
                    <span>Avoid pruning until spring to maintain plant hardiness</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats Garden */}
      <div className="px-4 mt-6">
        <h4 className="mb-3 text-gray-900">Your Garden at a Glance</h4>
        <div className="grid grid-cols-3 gap-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.color} rounded-2xl p-4 text-center`}
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl text-gray-900 mb-1">{stat.value}</div>
              <div className="text-xs text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Plant Hero */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-gray-900">Plant of the Day</h4>
          <Award className="w-5 h-5 text-[#FFD54F]" />
        </div>
        <div className="bg-white rounded-2xl overflow-hidden shadow-md">
          <div className="relative h-48">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1605260346600-f98d9cf022a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZXBsYW50cyUyMGluZG9vcnxlbnwxfHx8fDE3NjM4Nzk0NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Monstera Deliciosa"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 right-3 bg-[#FFD54F] text-gray-900 px-3 py-1 rounded-full text-xs">
              Popular
            </div>
          </div>
          <div className="p-4">
            <h4 className="mb-1">Monstera Deliciosa</h4>
            <p className="text-sm text-gray-600 mb-3">
              The Swiss Cheese Plant - Perfect for bright, indirect light
            </p>
            <button className="text-[#2E8B57] text-sm flex items-center gap-1">
              Learn Care Tips
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Community Feed Preview */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-gray-900">Community Highlights</h4>
          <button className="text-[#2E8B57] text-sm flex items-center gap-1">
            See All
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-4">
          {communityPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-md">
              <div className="p-4 pb-3">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#7CB342]/10 rounded-full flex items-center justify-center text-xl">
                    {post.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="text-gray-900">{post.user}</div>
                    <div className="text-xs text-gray-500">{post.time}</div>
                  </div>
                </div>
                <p className="text-gray-800 mb-3">{post.text}</p>
              </div>
              
              <ImageWithFallback
                src={post.image}
                alt="Post"
                className="w-full h-56 object-cover"
              />
              
              <div className="p-4 pt-3 flex items-center gap-6">
                <button className="flex items-center gap-2 text-gray-600 hover:text-[#E57373] transition-colors">
                  <Heart className="w-5 h-5" />
                  <span className="text-sm">{post.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-[#2E8B57] transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-sm">{post.comments}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-[#2E8B57] transition-colors ml-auto">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}