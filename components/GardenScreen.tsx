import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Search, Grid3x3, List, Droplets, Sun, TrendingUp, AlertCircle, Calendar, Leaf } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

type ViewMode = 'grid' | 'list';
type DetailView = 'overview' | 'details';

const plants = [
  {
    id: 1,
    name: "Monstera Deliciosa",
    nickname: "Monty",
    image: "https://images.unsplash.com/photo-1650731900879-b5f25088ff31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFudCUyMGxlYXZlcyUyMGdyZWVufGVufDF8fHx8MTc2Mzg3OTE0NHww&ixlib=rb-4.1.0&q=80&w=1080",
    health: 95,
    daysOwned: 45,
    nextWater: "Tomorrow",
    status: "healthy"
  },
  {
    id: 2,
    name: "Succulent Mix",
    nickname: "Desert Friends",
    image: "https://images.unsplash.com/photo-1621512367176-03782e847fa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjdWxlbnQlMjBwbGFudHN8ZW58MXx8fHwxNzYzODQxNDE3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    health: 88,
    daysOwned: 120,
    nextWater: "In 5 days",
    status: "healthy"
  },
  {
    id: 3,
    name: "Tomato Plant",
    nickname: "Tommy",
    image: "https://images.unsplash.com/photo-1748432171507-c1d62fe2e859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b21hdG8lMjBwbGFudCUyMGdyb3dpbmd8ZW58MXx8fHwxNzYzODAxNTc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    health: 78,
    daysOwned: 30,
    nextWater: "Today",
    status: "needs-attention"
  },
  {
    id: 4,
    name: "Peace Lily",
    nickname: "Lily",
    image: "https://images.unsplash.com/photo-1650731900879-b5f25088ff31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFudCUyMGxlYXZlcyUyMGdyZWVufGVufDF8fHx8MTc2Mzg3OTE0NHww&ixlib=rb-4.1.0&q=80&w=1080",
    health: 92,
    daysOwned: 60,
    nextWater: "In 2 days",
    status: "healthy"
  }
];

export function GardenScreen() {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [selectedPlant, setSelectedPlant] = useState<number | null>(null);
  const [detailView, setDetailView] = useState<DetailView>('overview');

  if (selectedPlant !== null) {
    return (
      <PlantDetailView
        plant={plants.find(p => p.id === selectedPlant)!}
        onBack={() => setSelectedPlant(null)}
        detailView={detailView}
        setDetailView={setDetailView}
      />
    );
  }

  return (
    <div className="h-full bg-gradient-to-b from-[#7CB342]/10 to-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#2E8B57] to-[#7CB342] pt-14 pb-8 px-6 rounded-b-[40px] shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-white mb-1">My Garden</h1>
            <p className="text-white/90 text-sm">{plants.length} plants growing</p>
          </div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl"
          >
            <Plus className="w-6 h-6 text-white" />
          </motion.button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search your plants..."
            className="w-full bg-white rounded-2xl pl-12 pr-4 py-3 text-gray-700 placeholder-gray-400 shadow-lg"
          />
        </div>
      </div>

      <div className="px-6 pt-6 pb-24">
        {/* View Toggle */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-xl">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-lg transition-all ${
                viewMode === 'grid' 
                  ? 'bg-white text-[#2E8B57] shadow-md' 
                  : 'text-gray-500'
              }`}
            >
              <Grid3x3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 rounded-lg transition-all ${
                viewMode === 'list' 
                  ? 'bg-white text-[#2E8B57] shadow-md' 
                  : 'text-gray-500'
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>

          <button className="text-[#7CB342] text-sm">Filter</button>
        </div>

        {/* Plants Grid/List */}
        <AnimatePresence mode="wait">
          {viewMode === 'grid' ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-2 gap-4"
            >
              {plants.map((plant, index) => (
                <motion.div
                  key={plant.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedPlant(plant.id)}
                  className="bg-white rounded-3xl overflow-hidden shadow-md cursor-pointer"
                >
                  <div className="relative h-40">
                    <ImageWithFallback
                      src={plant.image}
                      alt={plant.name}
                      className="w-full h-full object-cover"
                    />
                    {plant.status === 'needs-attention' && (
                      <div className="absolute top-2 right-2 bg-orange-500 p-1.5 rounded-full">
                        <AlertCircle className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-[#2E8B57] mb-1">{plant.nickname}</h3>
                    <p className="text-gray-500 text-xs mb-3">{plant.name}</p>
                    
                    {/* Health Bar */}
                    <div className="mb-2">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-gray-500">Health</span>
                        <span className="text-[#7CB342]">{plant.health}%</span>
                      </div>
                      <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-[#7CB342] to-[#2E8B57] rounded-full"
                          style={{ width: `${plant.health}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-gray-600 text-xs">
                      <Droplets className="w-3 h-3 text-blue-500" />
                      <span>{plant.nextWater}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              {plants.map((plant, index) => (
                <motion.div
                  key={plant.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedPlant(plant.id)}
                  className="bg-white rounded-3xl p-4 shadow-md flex items-center gap-4 cursor-pointer"
                >
                  <ImageWithFallback
                    src={plant.image}
                    alt={plant.name}
                    className="w-20 h-20 rounded-2xl object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-[#2E8B57] mb-1">{plant.nickname}</h3>
                    <p className="text-gray-500 text-sm mb-2">{plant.name}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-600">
                      <span className="flex items-center gap-1">
                        <Droplets className="w-3 h-3 text-blue-500" />
                        {plant.nextWater}
                      </span>
                      <span className="flex items-center gap-1">
                        <TrendingUp className="w-3 h-3 text-[#7CB342]" />
                        {plant.health}%
                      </span>
                    </div>
                  </div>
                  {plant.status === 'needs-attention' && (
                    <AlertCircle className="w-5 h-5 text-orange-500" />
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function PlantDetailView({ 
  plant, 
  onBack,
  detailView,
  setDetailView 
}: { 
  plant: typeof plants[0]; 
  onBack: () => void;
  detailView: DetailView;
  setDetailView: (view: DetailView) => void;
}) {
  return (
    <div className="h-full bg-white overflow-y-auto">
      {/* Plant Image Header */}
      <div className="relative h-72">
        <ImageWithFallback
          src={plant.image}
          alt={plant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />
        
        <button
          onClick={onBack}
          className="absolute top-14 left-6 bg-white/90 backdrop-blur-sm text-[#2E8B57] px-4 py-2 rounded-full text-sm shadow-lg"
        >
          ← Back
        </button>

        {plant.status === 'needs-attention' && (
          <div className="absolute top-14 right-6 bg-orange-500 px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
            <AlertCircle className="w-4 h-4 text-white" />
            <span className="text-white text-sm">Needs Care</span>
          </div>
        )}
      </div>

      <div className="px-6 pb-32 -mt-8 relative">
        {/* Info Card */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-3xl shadow-2xl p-6 mb-6"
        >
          <h1 className="text-[#2E8B57] mb-1">{plant.nickname}</h1>
          <p className="text-gray-600 mb-4">{plant.name}</p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <div className="bg-[#7CB342]/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Calendar className="w-6 h-6 text-[#7CB342]" />
              </div>
              <p className="text-gray-500 text-xs">Days Owned</p>
              <p className="text-[#2E8B57]">{plant.daysOwned}</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Droplets className="w-6 h-6 text-blue-500" />
              </div>
              <p className="text-gray-500 text-xs">Next Water</p>
              <p className="text-[#2E8B57]">{plant.nextWater}</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-50 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Sun className="w-6 h-6 text-yellow-500" />
              </div>
              <p className="text-gray-500 text-xs">Sunlight</p>
              <p className="text-[#2E8B57]">Indirect</p>
            </div>
          </div>

          {/* Health Indicator */}
          <div className="bg-gradient-to-r from-[#7CB342]/10 to-[#2E8B57]/10 rounded-2xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 text-sm">Plant Health</span>
              <span className="text-[#2E8B57]">{plant.health}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${plant.health}%` }}
                transition={{ duration: 1 }}
                className="h-full bg-gradient-to-r from-[#7CB342] to-[#2E8B57] rounded-full"
              />
            </div>
          </div>
        </motion.div>

        {/* Frost Protection Alert */}
        {plant.id === 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl p-4 shadow-lg mb-6"
          >
            <div className="flex items-start gap-3">
              <div className="bg-white/20 p-2 rounded-xl">
                <AlertCircle className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-white mb-1">Frost Protection Needed</h3>
                <p className="text-white/90 text-sm mb-3">
                  Temperature dropping tonight. Bring indoors or cover plant.
                </p>
                <button className="bg-white text-blue-600 px-4 py-2 rounded-full text-sm">
                  View Protection Tips
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Care Log Tabs */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setDetailView('overview')}
            className={`flex-1 py-3 rounded-2xl transition-all ${
              detailView === 'overview'
                ? 'bg-[#2E8B57] text-white shadow-lg'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setDetailView('details')}
            className={`flex-1 py-3 rounded-2xl transition-all ${
              detailView === 'details'
                ? 'bg-[#2E8B57] text-white shadow-lg'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            Care Log
          </button>
        </div>

        {/* Growth Timeline */}
        {detailView === 'overview' ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-6"
          >
            <h3 className="text-[#2E8B57] mb-4">Growth Timeline</h3>
            <div className="space-y-4">
              {[
                { date: 'Nov 20', event: 'New leaf spotted', icon: Leaf, color: 'green' },
                { date: 'Nov 15', event: 'Watered', icon: Droplets, color: 'blue' },
                { date: 'Nov 10', event: 'Fertilized', icon: TrendingUp, color: 'yellow' },
                { date: 'Nov 5', event: 'Health check', icon: TrendingUp, color: 'green' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className={`bg-${item.color}-100 p-2 rounded-xl`}>
                    <item.icon className={`w-4 h-4 text-${item.color}-600`} />
                  </div>
                  <div className="flex-1">
                    <p className="text-[#2E8B57] text-sm">{item.event}</p>
                    <p className="text-gray-500 text-xs">{item.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-4">
              <p className="text-gray-600 text-sm">Last watered: 3 days ago</p>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-4">
              <p className="text-gray-600 text-sm">Last fertilized: 10 days ago</p>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-4">
              <p className="text-gray-600 text-sm">Soil check: Moist</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
