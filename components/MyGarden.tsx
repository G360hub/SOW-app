import React, { useState } from 'react';
import { Plus, Search, Grid3x3, List, TrendingUp, Droplets, Sun, AlertCircle, ChevronLeft, Check } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function MyGarden() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedPlant, setSelectedPlant] = useState<number | null>(null);

  const plants = [
    {
      id: 1,
      name: 'Monstera Deliciosa',
      nickname: 'Big Leaf',
      image: 'https://images.unsplash.com/photo-1605260346600-f98d9cf022a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZXBsYW50cyUyMGluZG9vcnxlbnwxfHx8fDE3NjM4Nzk0NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      health: 95,
      lastWatered: '2 days ago',
      nextWater: 'in 3 days',
      location: 'Living Room',
      daysOwned: 45,
      needsFrost: false,
    },
    {
      id: 2,
      name: 'Succulent Mix',
      nickname: 'Desert Trio',
      image: 'https://images.unsplash.com/photo-1654609678730-d241a2b2eb8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjdWxlbnQlMjBwbGFudHMlMjBjb2xsZWN0aW9ufGVufDF8fHx8MTc2Mzg3OTQ0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      health: 88,
      lastWatered: '5 days ago',
      nextWater: 'in 2 days',
      location: 'Balcony',
      daysOwned: 120,
      needsFrost: true,
    },
    {
      id: 3,
      name: 'Garden Tomatoes',
      nickname: 'Summer Harvest',
      image: 'https://images.unsplash.com/photo-1735583697864-9dbbaedee928?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJkZW4lMjBwbGFudHMlMjBzdW5saWdodHxlbnwxfHx8fDE3NjM4Nzk0NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      health: 92,
      lastWatered: '1 day ago',
      nextWater: 'today',
      location: 'Garden',
      daysOwned: 60,
      needsFrost: true,
    },
    {
      id: 4,
      name: 'Cherry Blossom',
      nickname: 'Spring Beauty',
      image: 'https://images.unsplash.com/photo-1617836250803-24873f080562?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVycnklMjBibG9zc29tcyUyMHNwcmluZ3xlbnwxfHx8fDE3NjM4Nzk0NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      health: 78,
      lastWatered: '3 days ago',
      nextWater: 'tomorrow',
      location: 'Front Yard',
      daysOwned: 180,
      needsFrost: false,
    },
  ];

  const careLogs = [
    { date: 'Nov 21', action: 'Watered', icon: Droplets, color: 'text-blue-500' },
    { date: 'Nov 18', action: 'Fertilized', icon: TrendingUp, color: 'text-green-500' },
    { date: 'Nov 15', action: 'Pruned', icon: Check, color: 'text-purple-500' },
  ];

  if (selectedPlant !== null) {
    const plant = plants.find(p => p.id === selectedPlant);
    if (!plant) return null;

    return (
      <div className="min-h-screen bg-[#F5F7FA] pb-24">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-4 py-4 flex items-center gap-4">
          <button
            onClick={() => setSelectedPlant(null)}
            className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <h3 className="text-gray-900 flex-1">{plant.nickname}</h3>
        </div>

        {/* Plant Image */}
        <div className="relative h-80">
          <ImageWithFallback
            src={plant.image}
            alt={plant.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <h2 className="text-white mb-1">{plant.name}</h2>
            <p className="text-white/90 text-sm">{plant.location}</p>
          </div>
        </div>

        {/* Frost Protection Panel */}
        {plant.needsFrost && (
          <div className="px-4 -mt-6 relative z-10">
            <div className="bg-gradient-to-r from-[#FFD54F] to-[#FFB74D] rounded-2xl p-4 shadow-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-orange-700" />
                <div className="flex-1">
                  <h4 className="text-gray-900 mb-1">Frost Protection Needed</h4>
                  <p className="text-sm text-gray-800 mb-3">
                    Temperature dropping below safe range tonight
                  </p>
                  <button className="bg-white text-gray-900 px-4 py-2 rounded-xl text-sm hover:shadow-md transition-all">
                    Mark as Protected
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Health Indicator */}
        <div className="px-4 mt-6">
          <div className="bg-white rounded-2xl p-5 shadow-md">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-gray-900">Plant Health</h4>
              <span className="text-[#7CB342] text-2xl">{plant.health}%</span>
            </div>
            <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="absolute inset-0 bg-gradient-to-r from-[#7CB342] to-[#2E8B57] rounded-full"
                style={{ width: `${plant.health}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              {plant.health >= 90 ? 'Thriving!' : plant.health >= 70 ? 'Healthy' : 'Needs attention'}
            </p>
          </div>
        </div>

        {/* Care Info */}
        <div className="px-4 mt-6">
          <h4 className="mb-3 text-gray-900">Care Schedule</h4>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white rounded-2xl p-4 shadow-md">
              <div className="flex items-center gap-2 mb-2">
                <div className="bg-blue-100 p-2 rounded-xl">
                  <Droplets className="w-5 h-5 text-blue-500" />
                </div>
                <span className="text-sm text-gray-600">Watering</span>
              </div>
              <p className="text-gray-900">Next {plant.nextWater}</p>
              <p className="text-xs text-gray-500 mt-1">Last: {plant.lastWatered}</p>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-md">
              <div className="flex items-center gap-2 mb-2">
                <div className="bg-yellow-100 p-2 rounded-xl">
                  <Sun className="w-5 h-5 text-yellow-500" />
                </div>
                <span className="text-sm text-gray-600">Sunlight</span>
              </div>
              <p className="text-gray-900">6-8 hours</p>
              <p className="text-xs text-gray-500 mt-1">Bright, indirect</p>
            </div>
          </div>
        </div>

        {/* Growth Timeline */}
        <div className="px-4 mt-6">
          <h4 className="mb-3 text-gray-900">Growth Journey</h4>
          <div className="bg-white rounded-2xl p-5 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600">Days in your garden</span>
              <span className="text-[#2E8B57] text-xl">{plant.daysOwned}</span>
            </div>
            <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
              <div
                className="absolute inset-0 bg-gradient-to-r from-[#7CB342] to-[#2E8B57] rounded-full"
                style={{ width: `${Math.min((plant.daysOwned / 365) * 100, 100)}%` }}
              ></div>
            </div>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>Day 1</span>
              <span>1 Year</span>
            </div>
          </div>
        </div>

        {/* Care Logs */}
        <div className="px-4 mt-6 mb-6">
          <h4 className="mb-3 text-gray-900">Care History</h4>
          <div className="bg-white rounded-2xl p-5 shadow-md">
            <div className="space-y-4">
              {careLogs.map((log, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="bg-gray-100 p-2 rounded-xl">
                    <log.icon className={`w-5 h-5 ${log.color}`} />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900">{log.action}</p>
                    <p className="text-xs text-gray-500">{log.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F7FA] pb-24">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-gray-900">My Garden</h3>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-xl transition-colors ${
                viewMode === 'grid' ? 'bg-[#2E8B57] text-white' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Grid3x3 className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-xl transition-colors ${
                viewMode === 'list' ? 'bg-[#2E8B57] text-white' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search your plants..."
            className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2E8B57]"
          />
        </div>
      </div>

      {/* Collections */}
      <div className="px-4 pt-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-gray-900">All Plants ({plants.length})</h4>
          <button className="text-[#2E8B57] text-sm">Add Collection</button>
        </div>

        {viewMode === 'grid' ? (
          <div className="grid grid-cols-2 gap-4">
            {plants.map((plant) => (
              <div
                key={plant.id}
                onClick={() => setSelectedPlant(plant.id)}
                className="bg-white rounded-2xl overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition-all"
              >
                <div className="relative h-40">
                  <ImageWithFallback
                    src={plant.image}
                    alt={plant.name}
                    className="w-full h-full object-cover"
                  />
                  {plant.needsFrost && (
                    <div className="absolute top-2 right-2 bg-[#FFD54F] p-2 rounded-full">
                      <AlertCircle className="w-4 h-4 text-orange-700" />
                    </div>
                  )}
                  <div className="absolute bottom-2 left-2 right-2 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1">
                    <div className="flex items-center gap-1">
                      <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#7CB342] rounded-full"
                          style={{ width: `${plant.health}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-700">{plant.health}%</span>
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <h4 className="text-sm text-gray-900 mb-1 truncate">{plant.nickname}</h4>
                  <p className="text-xs text-gray-600 truncate">{plant.name}</p>
                  <div className="mt-2 flex items-center gap-1 text-xs text-gray-500">
                    <Droplets className="w-3 h-3" />
                    <span>{plant.nextWater}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {plants.map((plant) => (
              <div
                key={plant.id}
                onClick={() => setSelectedPlant(plant.id)}
                className="bg-white rounded-2xl overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition-all"
              >
                <div className="flex gap-4 p-4">
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <ImageWithFallback
                      src={plant.image}
                      alt={plant.name}
                      className="w-full h-full object-cover rounded-xl"
                    />
                    {plant.needsFrost && (
                      <div className="absolute -top-1 -right-1 bg-[#FFD54F] p-1 rounded-full">
                        <AlertCircle className="w-3 h-3 text-orange-700" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-gray-900 mb-1">{plant.nickname}</h4>
                    <p className="text-sm text-gray-600 mb-2">{plant.name}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Droplets className="w-3 h-3" />
                        {plant.nextWater}
                      </span>
                      <span className="flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        {plant.health}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-24 right-6 w-14 h-14 bg-gradient-to-r from-[#2E8B57] to-[#7CB342] text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center animate-float">
        <Plus className="w-6 h-6" />
      </button>
    </div>
  );
}
