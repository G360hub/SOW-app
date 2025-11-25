import { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, MessageCircle, Share2, Award, CheckCircle, Filter, TrendingUp, Plus } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

type Tab = 'feed' | 'challenges' | 'experts';

const posts = [
  {
    id: 1,
    user: {
      name: "Sarah Green",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      isExpert: false,
      badge: "🌱"
    },
    time: "2 hours ago",
    content: "My tomatoes are finally thriving! 🍅 The frost protection tips from this community really saved them last week. Thank you all!",
    images: ["https://images.unsplash.com/photo-1748432171507-c1d62fe2e859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b21hdG8lMjBwbGFudCUyMGdyb3dpbmd8ZW58MXx8fHwxNzYzODAxNTc2fDA&ixlib=rb-4.1.0&q=80&w=1080"],
    likes: 142,
    comments: 24,
    isLiked: false
  },
  {
    id: 2,
    user: {
      name: "Dr. Plant Expert",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Expert",
      isExpert: true,
      badge: "🏆"
    },
    time: "4 hours ago",
    content: "Question from @mike: 'Help! My Monstera leaves are turning yellow.' Answer: This is usually from overwatering. Check the soil moisture and reduce watering frequency. Let the top 2 inches dry out between waterings.",
    images: [],
    likes: 89,
    comments: 15,
    isLiked: true
  },
  {
    id: 3,
    user: {
      name: "Garden Enthusiast",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Garden",
      isExpert: false,
      badge: "🌻"
    },
    time: "6 hours ago",
    content: "My succulent collection is growing! Just added these beauties to the family. Any care tips for beginners?",
    images: ["https://images.unsplash.com/photo-1621512367176-03782e847fa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjdWxlbnQlMjBwbGFudHN8ZW58MXx8fHwxNzYzODQxNDE3fDA&ixlib=rb-4.1.0&q=80&w=1080"],
    likes: 67,
    comments: 12,
    isLiked: false
  },
  {
    id: 4,
    user: {
      name: "Urban Gardener",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Urban",
      isExpert: false,
      badge: "🌿"
    },
    time: "8 hours ago",
    content: "Look at these gorgeous leaves! Finally figured out the right lighting for my plants. Patience really pays off! 🌿",
    images: ["https://images.unsplash.com/photo-1650731900879-b5f25088ff31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFudCUyMGxlYXZlcyUyMGdyZWVufGVufDF8fHx8MTc2Mzg3OTE0NHww&ixlib=rb-4.1.0&q=80&w=1080"],
    likes: 203,
    comments: 31,
    isLiked: true
  }
];

const challenges = [
  {
    id: 1,
    title: "Spring Bloom Challenge",
    description: "Share your most beautiful spring blooms",
    participants: 234,
    endDate: "Nov 30",
    icon: "🌸",
    color: "pink"
  },
  {
    id: 2,
    title: "Succulent Sunday",
    description: "Show off your succulent collection",
    participants: 189,
    endDate: "Nov 26",
    icon: "🌵",
    color: "green"
  },
  {
    id: 3,
    title: "Garden Glow-Up",
    description: "Before & after transformations",
    participants: 156,
    endDate: "Dec 5",
    icon: "✨",
    color: "yellow"
  }
];

const experts = [
  {
    id: 1,
    name: "Dr. Green Thumb",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=DrGreen",
    specialty: "Indoor Plants",
    followers: 1234,
    answers: 456
  },
  {
    id: 2,
    name: "Master Gardener Lee",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lee",
    specialty: "Vegetable Gardens",
    followers: 987,
    answers: 321
  },
  {
    id: 3,
    name: "Botanist Sam",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sam",
    specialty: "Plant Diseases",
    followers: 756,
    answers: 234
  }
];

export function CommunityScreen() {
  const [activeTab, setActiveTab] = useState<Tab>('feed');
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set([2, 4]));

  const toggleLike = (postId: number) => {
    setLikedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  return (
    <div className="h-full bg-gradient-to-b from-[#7CB342]/10 to-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#7CB342] to-[#2E8B57] pt-14 pb-6 px-6 rounded-b-[40px] shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-white mb-1">Community</h1>
            <p className="text-white/90 text-sm">Connect with plant lovers</p>
          </div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl"
          >
            <Filter className="w-5 h-5 text-white" />
          </motion.button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('feed')}
            className={`flex-1 py-3 rounded-2xl transition-all ${
              activeTab === 'feed'
                ? 'bg-white text-[#2E8B57] shadow-lg'
                : 'bg-white/20 text-white'
            }`}
          >
            Feed
          </button>
          <button
            onClick={() => setActiveTab('challenges')}
            className={`flex-1 py-3 rounded-2xl transition-all ${
              activeTab === 'challenges'
                ? 'bg-white text-[#2E8B57] shadow-lg'
                : 'bg-white/20 text-white'
            }`}
          >
            Challenges
          </button>
          <button
            onClick={() => setActiveTab('experts')}
            className={`flex-1 py-3 rounded-2xl transition-all ${
              activeTab === 'experts'
                ? 'bg-white text-[#2E8B57] shadow-lg'
                : 'bg-white/20 text-white'
            }`}
          >
            Experts
          </button>
        </div>
      </div>

      <div className="pb-32">
        {/* Feed Tab */}
        {activeTab === 'feed' && (
          <div className="px-6 pt-6 space-y-4">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-md overflow-hidden"
              >
                {/* Post Header */}
                <div className="p-4 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <ImageWithFallback
                        src={post.user.avatar}
                        alt={post.user.name}
                        className="w-12 h-12 rounded-full"
                      />
                      <div className="absolute -bottom-1 -right-1 text-lg">
                        {post.user.badge}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-[#2E8B57]">{post.user.name}</p>
                        {post.user.isExpert && (
                          <CheckCircle className="w-4 h-4 text-blue-500" />
                        )}
                      </div>
                      <p className="text-gray-500 text-xs">{post.time}</p>
                    </div>
                  </div>
                </div>

                {/* Post Content */}
                <div className="px-4 pb-3">
                  <p className="text-gray-700">{post.content}</p>
                </div>

                {/* Post Images */}
                {post.images.length > 0 && (
                  <div className="grid grid-cols-1 gap-1">
                    {post.images.map((image, idx) => (
                      <ImageWithFallback
                        key={idx}
                        src={image}
                        alt={`Post image ${idx + 1}`}
                        className="w-full h-64 object-cover"
                      />
                    ))}
                  </div>
                )}

                {/* Post Actions */}
                <div className="p-4 flex items-center gap-6">
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => toggleLike(post.id)}
                    className="flex items-center gap-2"
                  >
                    <motion.div
                      animate={{
                        scale: likedPosts.has(post.id) ? [1, 1.3, 1] : 1
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Heart
                        className={`w-5 h-5 ${
                          likedPosts.has(post.id)
                            ? 'fill-pink-500 text-pink-500'
                            : 'text-gray-600'
                        }`}
                      />
                    </motion.div>
                    <span
                      className={`text-sm ${
                        likedPosts.has(post.id) ? 'text-pink-500' : 'text-gray-600'
                      }`}
                    >
                      {post.likes + (likedPosts.has(post.id) ? (post.isLiked ? 0 : 1) : (post.isLiked ? -1 : 0))}
                    </span>
                  </motion.button>
                  
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-2 text-gray-600"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-sm">{post.comments}</span>
                  </motion.button>

                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-2 text-gray-600 ml-auto"
                  >
                    <Share2 className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Challenges Tab */}
        {activeTab === 'challenges' && (
          <div className="px-6 pt-6">
            <div className="bg-gradient-to-br from-[#FFD54F]/20 to-[#7CB342]/20 rounded-3xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#FFD54F] p-3 rounded-2xl">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-[#2E8B57]">Your Progress</h3>
                  <p className="text-gray-600 text-sm">3 challenges active</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="text-center">
                  <p className="text-[#2E8B57] text-xl">12</p>
                  <p className="text-gray-600 text-xs">Completed</p>
                </div>
                <div className="text-center">
                  <p className="text-[#2E8B57] text-xl">456</p>
                  <p className="text-gray-600 text-xs">Points</p>
                </div>
                <div className="text-center">
                  <p className="text-[#2E8B57] text-xl">#23</p>
                  <p className="text-gray-600 text-xs">Rank</p>
                </div>
              </div>
            </div>

            <h2 className="text-[#2E8B57] mb-4">Active Challenges</h2>
            <div className="space-y-4">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={challenge.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-3xl shadow-md p-6"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-4xl">{challenge.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-[#2E8B57] mb-1">{challenge.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">
                        {challenge.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          {challenge.participants} participating
                        </span>
                        <span>Ends {challenge.endDate}</span>
                      </div>
                    </div>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 rounded-2xl ${
                      challenge.color === 'pink'
                        ? 'bg-pink-500'
                        : challenge.color === 'green'
                        ? 'bg-[#7CB342]'
                        : 'bg-[#FFD54F]'
                    } text-white shadow-lg`}
                  >
                    Join Challenge
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Experts Tab */}
        {activeTab === 'experts' && (
          <div className="px-6 pt-6">
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-6 mb-6">
              <h3 className="text-[#2E8B57] mb-2">Ask an Expert</h3>
              <p className="text-gray-600 text-sm mb-4">
                Get verified answers from certified horticulturists and master gardeners
              </p>
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="w-full bg-[#2E8B57] text-white py-3 rounded-2xl shadow-lg"
              >
                Ask a Question
              </motion.button>
            </div>

            <h2 className="text-[#2E8B57] mb-4">Featured Experts</h2>
            <div className="space-y-4">
              {experts.map((expert, index) => (
                <motion.div
                  key={expert.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-3xl shadow-md p-6"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative">
                      <ImageWithFallback
                        src={expert.avatar}
                        alt={expert.name}
                        className="w-16 h-16 rounded-full"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-blue-500 p-1.5 rounded-full">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[#2E8B57] mb-1">{expert.name}</h3>
                      <p className="text-gray-600 text-sm mb-2">{expert.specialty}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>{expert.followers} followers</span>
                        <span>{expert.answers} answers</span>
                      </div>
                    </div>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-[#7CB342]/10 text-[#7CB342] py-3 rounded-2xl"
                  >
                    Follow
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Floating Action Button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-24 right-8 bg-[#7CB342] text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center z-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
      >
        <Plus className="w-6 h-6" />
      </motion.button>
    </div>
  );
}
