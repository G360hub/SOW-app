import React, { useState } from 'react';
import { Search, X, Mic, Filter, TrendingUp, Clock, Leaf, Sprout, Flower2, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface SearchScreenProps {
  onClose: () => void;
}

export function SearchScreen({ onClose }: SearchScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);

  const quickCategories = [
    { id: 'houseplants', label: 'Houseplants', icon: '🌿', color: 'bg-[#7CB342]/10 text-[#7CB342]' },
    { id: 'vegetables', label: 'Vegetables', icon: '🍅', color: 'bg-[#E57373]/10 text-[#E57373]' },
    { id: 'flowers', label: 'Flowers', icon: '🌸', color: 'bg-[#FFD54F]/20 text-[#FFB74D]' },
    { id: 'herbs', label: 'Herbs', icon: '🌿', color: 'bg-[#2E8B57]/10 text-[#2E8B57]' },
  ];

  const filters = [
    { id: 'easy', label: 'Easy Care', icon: '😊' },
    { id: 'low-light', label: 'Low Light', icon: '🌙' },
    { id: 'pet-safe', label: 'Pet Safe', icon: '🐾' },
    { id: 'air-purifying', label: 'Air Purifying', icon: '💨' },
  ];

  const recentSearches = [
    'Monstera Deliciosa',
    'Snake Plant',
    'Pothos',
  ];

  const trendingPlants = [
    { 
      name: 'Monstera Deliciosa', 
      type: 'Houseplant',
      image: 'https://images.unsplash.com/photo-1605260346600-f98d9cf022a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZXBsYW50cyUyMGluZG9vcnxlbnwxfHx8fDE3NjM4Nzk0NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      water: 'Moderate',
      light: 'Bright, indirect',
      difficulty: 'Easy',
    },
    { 
      name: 'Succulent Mix', 
      type: 'Houseplant',
      image: 'https://images.unsplash.com/photo-1654609678730-d241a2b2eb8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjdWxlbnQlMjBwbGFudHMlMjBjb2xsZWN0aW9ufGVufDF8fHx8MTc2Mzg3OTQ0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      water: 'Low',
      light: 'Full sun',
      difficulty: 'Easy',
    },
    { 
      name: 'Cherry Blossom', 
      type: 'Tree',
      image: 'https://images.unsplash.com/photo-1617836250803-24873f080562?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVycnklMjBibG9zc29tcyUyMHNwcmluZ3xlbnwxfHx8fDE3NjM4Nzk0NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      water: 'Moderate',
      light: 'Full sun',
      difficulty: 'Moderate',
    },
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.length > 0) {
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setShowResults(false);
  };

  return (
    <div className="fixed inset-0 bg-[#F5F7FA] z-50 flex flex-col">
      {/* Header with Search Bar */}
      <div className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
            aria-label="Close search"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>
          
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search plants..."
              className="w-full pl-12 pr-20 py-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2E8B57] transition-all"
              autoFocus
              aria-label="Search for plants"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
              {searchQuery && (
                <button
                  onClick={handleClearSearch}
                  className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4 text-gray-600" />
                </button>
              )}
              <button
                className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                aria-label="Voice search"
              >
                <Mic className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex gap-2 overflow-x-auto pb-2 -mb-2 scrollbar-hide">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(activeFilter === filter.id ? null : filter.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                activeFilter === filter.id
                  ? 'bg-[#2E8B57] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span>{filter.icon}</span>
              <span className="text-sm">{filter.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {showResults ? (
          // Search Results
          <div className="px-4 pt-6 pb-24">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-gray-900">Results for "{searchQuery}"</h4>
              <button className="text-[#2E8B57] text-sm flex items-center gap-1">
                <Filter className="w-4 h-4" />
                Filter
              </button>
            </div>

            {/* Loading Skeleton */}
            {searchQuery.length < 3 ? (
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white rounded-2xl p-4 shadow-sm animate-pulse">
                    <div className="flex gap-4">
                      <div className="w-24 h-24 bg-gray-200 rounded-xl"></div>
                      <div className="flex-1 space-y-3">
                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                        <div className="flex gap-2">
                          <div className="h-6 bg-gray-200 rounded w-16"></div>
                          <div className="h-6 bg-gray-200 rounded w-16"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // Actual Results
              <div className="space-y-4">
                {trendingPlants
                  .filter(plant => plant.name.toLowerCase().includes(searchQuery.toLowerCase()))
                  .map((plant, index) => (
                  <button
                    key={index}
                    className="w-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="flex gap-4 p-4">
                      <div className="relative w-24 h-24 flex-shrink-0">
                        <ImageWithFallback
                          src={plant.image}
                          alt={plant.name}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </div>
                      <div className="flex-1 text-left">
                        <h4 className="text-gray-900 mb-1">{plant.name}</h4>
                        <p className="text-sm text-gray-600 mb-3">{plant.type}</p>
                        <div className="flex gap-2 flex-wrap">
                          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                            💧 {plant.water}
                          </span>
                          <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">
                            ☀️ {plant.light}
                          </span>
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                            {plant.difficulty}
                          </span>
                        </div>
                      </div>
                      <button 
                        className="flex-shrink-0 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        aria-label="Save to wishlist"
                      >
                        <Heart className="w-5 h-5 text-gray-400" />
                      </button>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : (
          // Default Search Screen
          <div className="px-4 pt-6 pb-24">
            {/* Quick Categories */}
            <div className="mb-8">
              <h4 className="text-gray-900 mb-4">Browse by Category</h4>
              <div className="grid grid-cols-2 gap-3">
                {quickCategories.map((category) => (
                  <button
                    key={category.id}
                    className={`${category.color} rounded-2xl p-5 text-left hover:shadow-md transition-all`}
                  >
                    <div className="text-3xl mb-2">{category.icon}</div>
                    <h4 className="text-sm">{category.label}</h4>
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Searches */}
            {recentSearches.length > 0 && (
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-gray-600" />
                    <h4 className="text-gray-900">Recent Searches</h4>
                  </div>
                  <button className="text-[#2E8B57] text-sm">Clear</button>
                </div>
                <div className="space-y-2">
                  {recentSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => handleSearch(search)}
                      className="w-full flex items-center gap-3 p-3 bg-white rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      <Search className="w-5 h-5 text-gray-400" />
                      <span className="flex-1 text-left text-gray-900">{search}</span>
                      <X className="w-4 h-4 text-gray-400" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Trending Plants */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-[#FFD54F]" />
                <h4 className="text-gray-900">Trending in Your Region</h4>
              </div>
              <div className="space-y-4">
                {trendingPlants.map((plant, index) => (
                  <button
                    key={index}
                    className="w-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="flex gap-4 p-4">
                      <div className="relative w-24 h-24 flex-shrink-0">
                        <ImageWithFallback
                          src={plant.image}
                          alt={plant.name}
                          className="w-full h-full object-cover rounded-xl"
                        />
                        {index === 0 && (
                          <div className="absolute top-2 right-2 bg-[#FFD54F] text-gray-900 text-xs px-2 py-1 rounded-full">
                            #1
                          </div>
                        )}
                      </div>
                      <div className="flex-1 text-left">
                        <h4 className="text-gray-900 mb-1">{plant.name}</h4>
                        <p className="text-sm text-gray-600 mb-3">{plant.type}</p>
                        <div className="flex gap-2 flex-wrap">
                          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                            💧 {plant.water}
                          </span>
                          <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">
                            ☀️ {plant.light}
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Seasonal Suggestions */}
            <div className="mt-8">
              <h4 className="text-gray-900 mb-4">🌸 Spring Planting Favorites</h4>
              <div className="bg-gradient-to-br from-[#2E8B57]/10 to-[#7CB342]/10 rounded-2xl p-5 border-2 border-[#7CB342]/20">
                <div className="flex items-start gap-3">
                  <Flower2 className="w-6 h-6 text-[#7CB342]" />
                  <div>
                    <h4 className="text-gray-900 mb-1">Perfect Time for Cherry Blossoms</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      These beautiful spring bloomers are thriving in your area right now
                    </p>
                    <button className="text-[#2E8B57] text-sm flex items-center gap-1">
                      Explore Spring Plants →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
