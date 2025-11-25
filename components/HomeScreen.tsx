import { motion } from 'motion/react';
import { AlertTriangle, ThermometerSnowflake, TrendingUp, Users, Heart, MessageCircle, Plus, Sun, Cloud } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const posts = [
  {
    id: 1,
    user: "Sarah Green",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    time: "2 hours ago",
    content: "My tomatoes are finally thriving! 🍅 The frost protection tips from the community really saved them last week.",
    image: "https://images.unsplash.com/photo-1748432171507-c1d62fe2e859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b21hdG8lMjBwbGFudCUyMGdyb3dpbmd8ZW58MXx8fHwxNzYzODAxNTc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    likes: 42,
    comments: 8
  },
  {
    id: 2,
    user: "Mike Plant",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
    time: "5 hours ago",
    content: "Just identified this beauty! The app says it's a Monstera Deliciosa. Can anyone confirm?",
    image: "https://images.unsplash.com/photo-1650731900879-b5f25088ff31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFudCUyMGxlYXZlcyUyMGdyZWVufGVufDF8fHx8MTc2Mzg3OTE0NHww&ixlib=rb-4.1.0&q=80&w=1080",
    likes: 28,
    comments: 5
  }
];

export function HomeScreen() {
  const currentSeason = "Spring";
  const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric' });

  return (
    <div className="h-full bg-gradient-to-b from-[#2E8B57]/10 to-white">
      {/* Seasonal Header */}
      <div className="relative h-48 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(https://images.unsplash.com/photo-1617836250803-24873f080562?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVycnklMjBibG9zc29tJTIwc3ByaW5nfGVufDF8fHx8MTc2MzgyOTY2Mnww&ixlib=rb-4.1.0&q=80&w=1080)` 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2E8B57]/70 to-[#2E8B57]/90" />
        
        {/* Floating Petals Animation */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-pink-200 rounded-full opacity-60"
            initial={{ y: -20, x: Math.random() * 300, opacity: 0 }}
            animate={{ 
              y: 200, 
              x: Math.random() * 300 + 20,
              opacity: [0, 0.6, 0],
              rotate: 360 
            }}
            transition={{ 
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5
            }}
          />
        ))}
        
        <div className="relative h-full flex flex-col justify-center px-6 pt-12">
          <div className="flex items-center gap-2 mb-2">
            <Sun className="w-5 h-5 text-[#FFD54F]" />
            <p className="text-white/90">{currentDate}</p>
          </div>
          <h1 className="text-white mb-1">Good Morning! 🌸</h1>
          <p className="text-white/90">Welcome to {currentSeason}</p>
        </div>
      </div>

      <div className="px-6 pb-24">
        {/* Frost Alert */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl p-4 shadow-lg -mt-6 mb-6 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 opacity-20">
            <ThermometerSnowflake className="w-32 h-32 text-white" />
          </div>
          <div className="relative flex items-start gap-4">
            <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-white mb-1">Frost Alert Tonight</h3>
              <p className="text-white/90 text-sm mb-3">
                Temperature dropping to 28°F. Protect sensitive plants!
              </p>
              <button className="bg-white text-blue-600 px-4 py-2 rounded-full text-sm">
                View Tips
              </button>
            </div>
          </div>
        </motion.div>

        {/* Quick Stats Garden */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <motion.div
            whileTap={{ scale: 0.95 }}
            className="bg-white rounded-2xl p-4 shadow-md border border-[#7CB342]/20"
          >
            <div className="bg-[#7CB342]/10 w-10 h-10 rounded-xl flex items-center justify-center mb-2">
              <TrendingUp className="w-5 h-5 text-[#7CB342]" />
            </div>
            <p className="text-gray-500 text-xs mb-1">Plants</p>
            <p className="text-[#2E8B57]">24</p>
          </motion.div>

          <motion.div
            whileTap={{ scale: 0.95 }}
            className="bg-white rounded-2xl p-4 shadow-md border border-[#FFD54F]/20"
          >
            <div className="bg-[#FFD54F]/10 w-10 h-10 rounded-xl flex items-center justify-center mb-2">
              <Users className="w-5 h-5 text-[#FFD54F]" />
            </div>
            <p className="text-gray-500 text-xs mb-1">Following</p>
            <p className="text-[#2E8B57]">142</p>
          </motion.div>

          <motion.div
            whileTap={{ scale: 0.95 }}
            className="bg-white rounded-2xl p-4 shadow-md border border-pink-300/20"
          >
            <div className="bg-pink-50 w-10 h-10 rounded-xl flex items-center justify-center mb-2">
              <Heart className="w-5 h-5 text-pink-500" />
            </div>
            <p className="text-gray-500 text-xs mb-1">Streak</p>
            <p className="text-[#2E8B57]">7 days</p>
          </motion.div>
        </div>

        {/* Featured Plant Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-[#7CB342] to-[#2E8B57] rounded-3xl p-6 shadow-lg mb-6 relative overflow-hidden"
        >
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
          <div className="relative">
            <p className="text-white/90 text-sm mb-2">🏆 Plant of the Week</p>
            <h3 className="text-white mb-2">Cherry Blossom Care</h3>
            <p className="text-white/80 text-sm mb-4">
              Learn expert tips for maintaining healthy cherry blossoms this spring season.
            </p>
            <button className="bg-white text-[#2E8B57] px-5 py-2 rounded-full text-sm shadow-lg">
              Read Guide
            </button>
          </div>
        </motion.div>

        {/* Community Feed Preview */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-[#2E8B57]">Community Feed</h2>
          <button className="text-[#7CB342] text-sm">See All</button>
        </div>

        <div className="space-y-4">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-3xl shadow-md overflow-hidden"
            >
              {/* Post Header */}
              <div className="p-4 flex items-center gap-3">
                <ImageWithFallback
                  src={post.avatar}
                  alt={post.user}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <p className="text-[#2E8B57]">{post.user}</p>
                  <p className="text-gray-500 text-sm">{post.time}</p>
                </div>
              </div>

              {/* Post Content */}
              <div className="px-4 pb-3">
                <p className="text-gray-700">{post.content}</p>
              </div>

              {/* Post Image */}
              <ImageWithFallback
                src={post.image}
                alt="Post"
                className="w-full h-64 object-cover"
              />

              {/* Post Actions */}
              <div className="p-4 flex items-center gap-6">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center gap-2 text-gray-600"
                >
                  <Heart className="w-5 h-5" />
                  <span className="text-sm">{post.likes}</span>
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center gap-2 text-gray-600"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-sm">{post.comments}</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
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
