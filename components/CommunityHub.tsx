import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Award, TrendingUp, Users, Search, Filter } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CommunityHub() {
  const [activeTab, setActiveTab] = useState<'feed' | 'challenges'>('feed');

  const posts = [
    {
      id: 1,
      user: 'Sarah Green',
      avatar: '👩‍🌾',
      verified: true,
      time: '2 hours ago',
      text: 'Just harvested my first batch of heirloom tomatoes! 🍅 The patience was worth it. Tips: consistent watering schedule and plenty of morning sun made all the difference.',
      image: 'https://images.unsplash.com/photo-1735583697864-9dbbaedee928?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJkZW4lMjBwbGFudHMlMjBzdW5saWdodHxlbnwxfHx8fDE3NjM4Nzk0NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      likes: 342,
      comments: 47,
      badges: ['🏆 Master Gardener', '🍅 Tomato Expert'],
      liked: false,
    },
    {
      id: 2,
      user: 'Mike Chen',
      avatar: '👨‍🌾',
      verified: false,
      time: '5 hours ago',
      text: 'Found this beautiful flower on my morning hike! Can anyone help identify it? It was growing near a stream in partial shade.',
      image: 'https://images.unsplash.com/photo-1617836250803-24873f080562?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVycnklMjBibG9zc29tcyUyMHNwcmluZ3xlbnwxfHx8fDE3NjM4Nzk0NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      likes: 89,
      comments: 23,
      badges: [],
      liked: true,
    },
    {
      id: 3,
      user: 'Emma Rose',
      avatar: '👩‍🦰',
      verified: true,
      time: '1 day ago',
      text: 'My succulent collection is getting out of hand! 🌵 But I love every single one. Anyone else addicted to plant shopping?',
      image: 'https://images.unsplash.com/photo-1654609678730-d241a2b2eb8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjdWxlbnQlMjBwbGFudHMlMjBjb2xsZWN0aW9ufGVufDF8fHx8MTc2Mzg3OTQ0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      likes: 267,
      comments: 56,
      badges: ['🌵 Succulent Specialist'],
      liked: false,
    },
  ];

  const challenges = [
    {
      id: 1,
      title: 'Spring Blooms Challenge',
      description: 'Share photos of your spring flowers',
      participants: 1247,
      endsIn: '5 days',
      prize: '🏆 Featured Gardener Badge',
      color: 'from-pink-500 to-purple-500',
      icon: '🌸',
    },
    {
      id: 2,
      title: 'Herb Garden Challenge',
      description: 'Grow 3 different herbs from seed',
      participants: 856,
      endsIn: '12 days',
      prize: '🌿 Herb Master Badge',
      color: 'from-green-500 to-emerald-500',
      icon: '🌿',
    },
    {
      id: 3,
      title: 'Indoor Jungle',
      description: 'Create the ultimate indoor plant display',
      participants: 2103,
      endsIn: '3 days',
      prize: '🏆 Jungle King Badge',
      color: 'from-teal-500 to-cyan-500',
      icon: '🌴',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F7FA] pb-24">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4">
        <h3 className="text-gray-900 mb-4">Community</h3>
        
        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search posts, people, plants..."
            className="w-full pl-12 pr-12 py-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2E8B57]"
          />
          <button className="absolute right-4 top-1/2 -translate-y-1/2">
            <Filter className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('feed')}
            className={`flex-1 py-2 rounded-xl transition-all ${
              activeTab === 'feed'
                ? 'bg-[#2E8B57] text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            Feed
          </button>
          <button
            onClick={() => setActiveTab('challenges')}
            className={`flex-1 py-2 rounded-xl transition-all ${
              activeTab === 'challenges'
                ? 'bg-[#2E8B57] text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            Challenges
          </button>
        </div>
      </div>

      {activeTab === 'feed' ? (
        <div className="px-4 pt-6 space-y-6">
          {/* Trending Topics */}
          <div>
            <h4 className="text-gray-900 mb-3">🔥 Trending Topics</h4>
            <div className="grid grid-cols-2 gap-3">
              <button className="bg-gradient-to-br from-[#FFD54F]/20 to-[#FFB74D]/10 rounded-2xl p-4 text-left hover:shadow-md transition-all">
                <div className="text-2xl mb-2">🌱</div>
                <h4 className="text-sm text-gray-900 mb-1">Seed Starting</h4>
                <p className="text-xs text-gray-600">2.3k discussions</p>
              </button>
              
              <button className="bg-gradient-to-br from-[#7CB342]/20 to-[#2E8B57]/10 rounded-2xl p-4 text-left hover:shadow-md transition-all">
                <div className="text-2xl mb-2">💧</div>
                <h4 className="text-sm text-gray-900 mb-1">Watering Tips</h4>
                <p className="text-xs text-gray-600">1.8k discussions</p>
              </button>
              
              <button className="bg-gradient-to-br from-[#E57373]/20 to-[#EF5350]/10 rounded-2xl p-4 text-left hover:shadow-md transition-all">
                <div className="text-2xl mb-2">🍅</div>
                <h4 className="text-sm text-gray-900 mb-1">Veggie Gardens</h4>
                <p className="text-xs text-gray-600">3.1k discussions</p>
              </button>
              
              <button className="bg-gradient-to-br from-[#9C27B0]/20 to-[#7B1FA2]/10 rounded-2xl p-4 text-left hover:shadow-md transition-all">
                <div className="text-2xl mb-2">🌸</div>
                <h4 className="text-sm text-gray-900 mb-1">Spring Blooms</h4>
                <p className="text-xs text-gray-600">4.5k discussions</p>
              </button>
            </div>
          </div>

          {/* Posts Feed */}
          <div className="space-y-4">
            {posts.map((post) => (
              <div key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-md">
                {/* Post Header */}
                <div className="p-4 pb-3">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-12 h-12 bg-[#7CB342]/10 rounded-full flex items-center justify-center text-xl flex-shrink-0">
                      {post.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-900 truncate">{post.user}</span>
                        {post.verified && (
                          <div className="bg-[#2E8B57] rounded-full p-0.5">
                            <Award className="w-3 h-3 text-white" />
                          </div>
                        )}
                      </div>
                      <div className="text-xs text-gray-500">{post.time}</div>
                      {post.badges.length > 0 && (
                        <div className="flex gap-1 mt-1">
                          {post.badges.map((badge, idx) => (
                            <span key={idx} className="text-xs bg-[#FFD54F]/20 text-gray-700 px-2 py-0.5 rounded-full">
                              {badge}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-800">{post.text}</p>
                </div>

                {/* Post Image */}
                <ImageWithFallback
                  src={post.image}
                  alt="Post"
                  className="w-full h-72 object-cover"
                />

                {/* Post Actions */}
                <div className="p-4 pt-3">
                  <div className="flex items-center gap-6">
                    <button
                      className={`flex items-center gap-2 transition-colors ${
                        post.liked ? 'text-[#E57373]' : 'text-gray-600 hover:text-[#E57373]'
                      }`}
                    >
                      <Heart className={`w-6 h-6 ${post.liked ? 'fill-current' : ''}`} />
                      <span className="text-sm">{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-600 hover:text-[#2E8B57] transition-colors">
                      <MessageCircle className="w-6 h-6" />
                      <span className="text-sm">{post.comments}</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-600 hover:text-[#2E8B57] transition-colors ml-auto">
                      <Share2 className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="px-4 pt-6 space-y-4">
          <div className="bg-gradient-to-br from-[#2E8B57] to-[#7CB342] rounded-2xl p-6 text-white shadow-lg">
            <h4 className="text-white mb-2">Seasonal Challenges</h4>
            <p className="text-white/90 text-sm mb-4">
              Join challenges, earn badges, and connect with fellow gardeners
            </p>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Award className="w-4 h-4" />
                <span>12 Active</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>4.2K Participants</span>
              </div>
            </div>
          </div>

          {challenges.map((challenge) => (
            <div key={challenge.id} className="bg-white rounded-2xl overflow-hidden shadow-md">
              <div className={`h-32 bg-gradient-to-r ${challenge.color} relative`}>
                <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-20">
                  {challenge.icon}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white mb-1">{challenge.title}</h4>
                </div>
              </div>
              
              <div className="p-4">
                <p className="text-gray-800 mb-4">{challenge.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{challenge.participants} joined</span>
                  </div>
                  <span>Ends {challenge.endsIn}</span>
                </div>

                <div className="bg-[#FFD54F]/20 rounded-xl p-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-800">
                    <Award className="w-5 h-5 text-[#FFD54F]" />
                    <span>{challenge.prize}</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-[#2E8B57] to-[#7CB342] text-white py-3 rounded-xl hover:shadow-lg transition-all">
                  Join Challenge
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}