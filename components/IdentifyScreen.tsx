import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Image as ImageIcon, Sparkles, AlertTriangle, CheckCircle, Info, ThermometerSun } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

type ViewMode = 'camera' | 'results';

export function IdentifyScreen() {
  const [viewMode, setViewMode] = useState<ViewMode>('camera');
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setViewMode('results');
    }, 2000);
  };

  const handleRetake = () => {
    setViewMode('camera');
  };

  return (
    <div className="h-full bg-white">
      <AnimatePresence mode="wait">
        {viewMode === 'camera' ? (
          <CameraView key="camera" onScan={handleScan} isScanning={isScanning} />
        ) : (
          <ResultsView key="results" onRetake={handleRetake} />
        )}
      </AnimatePresence>
    </div>
  );
}

function CameraView({ onScan, isScanning }: { onScan: () => void; isScanning: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-full relative"
    >
      {/* Camera Preview */}
      <div className="relative h-full bg-gradient-to-b from-gray-900 to-gray-800">
        {/* Simulated Camera Feed */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ 
            backgroundImage: `url(https://images.unsplash.com/photo-1650731900879-b5f25088ff31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFudCUyMGxlYXZlcyUyMGdyZWVufGVufDF8fHx8MTc2Mzg3OTE0NHww&ixlib=rb-4.1.0&q=80&w=1080)` 
          }}
        />

        {/* Header */}
        <div className="relative pt-14 pb-6 px-6 bg-gradient-to-b from-black/50 to-transparent">
          <h1 className="text-white mb-1">Identify Plant</h1>
          <p className="text-white/80 text-sm">Point camera at plant leaves or flowers</p>
        </div>

        {/* Leaf Frame Viewfinder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ 
              scale: isScanning ? [1, 1.05, 1] : 1,
              rotate: isScanning ? [0, 2, -2, 0] : 0
            }}
            transition={{ duration: 0.5, repeat: isScanning ? Infinity : 0 }}
            className="relative w-72 h-72"
          >
            {/* Organic Leaf-Shaped Frame */}
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full"
              style={{ filter: 'drop-shadow(0 0 20px rgba(124, 195, 66, 0.4))' }}
            >
              <path
                d="M100,20 Q150,40 170,80 Q180,120 160,150 Q140,170 100,180 Q60,170 40,150 Q20,120 30,80 Q50,40 100,20 Z"
                fill="none"
                stroke={isScanning ? "#FFD54F" : "#7CB342"}
                strokeWidth="3"
                strokeDasharray={isScanning ? "5,5" : "0"}
              />
              {/* Corner Markers */}
              <circle cx="100" cy="20" r="6" fill="#7CB342" />
              <circle cx="170" cy="80" r="6" fill="#7CB342" />
              <circle cx="160" cy="150" r="6" fill="#7CB342" />
              <circle cx="40" cy="150" r="6" fill="#7CB342" />
            </svg>

            {/* Center Focus Point */}
            <motion.div
              animate={{ scale: isScanning ? [1, 1.3, 1] : 1, opacity: isScanning ? [0.5, 1, 0.5] : 1 }}
              transition={{ duration: 1, repeat: isScanning ? Infinity : 0 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <div className="w-2 h-2 bg-[#7CB342] rounded-full" />
            </motion.div>
          </motion.div>
        </div>

        {/* Scanning Animation */}
        {isScanning && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              animate={{ y: [-150, 150] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-full h-1 bg-gradient-to-r from-transparent via-[#7CB342] to-transparent"
              style={{ filter: 'blur(2px)' }}
            />
          </motion.div>
        )}

        {/* Bottom Controls */}
        <div className="absolute bottom-0 left-0 right-0 pb-28 px-6">
          <div className="flex items-center justify-center gap-6">
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="bg-white/20 backdrop-blur-md p-4 rounded-2xl"
            >
              <ImageIcon className="w-6 h-6 text-white" />
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={onScan}
              disabled={isScanning}
              className={`w-20 h-20 rounded-full flex items-center justify-center shadow-2xl ${
                isScanning ? 'bg-[#FFD54F]' : 'bg-[#7CB342]'
              }`}
            >
              {isScanning ? (
                <Sparkles className="w-8 h-8 text-white" />
              ) : (
                <Camera className="w-8 h-8 text-white" />
              )}
            </motion.button>

            <div className="w-14" />
          </div>

          {isScanning && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white text-center mt-6"
            >
              Analyzing plant...
            </motion.p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ResultsView({ onRetake }: { onRetake: () => void }) {
  const confidenceScore = 94;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="h-full overflow-y-auto"
    >
      {/* Plant Image */}
      <div className="relative h-64">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1650731900879-b5f25088ff31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFudCUyMGxlYXZlcyUyMGdyZWVufGVufDF8fHx8MTc2Mzg3OTE0NHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Identified Plant"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />
        
        <button
          onClick={onRetake}
          className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm text-[#2E8B57] px-4 py-2 rounded-full text-sm shadow-lg"
        >
          ← Retake
        </button>
      </div>

      <div className="px-6 pb-32 -mt-8 relative">
        {/* Result Card */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl p-6 mb-6"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-6 h-6 text-[#7CB342]" />
                <span className="text-[#7CB342]">Match Found</span>
              </div>
              <h2 className="text-[#2E8B57] mb-1">Monstera Deliciosa</h2>
              <p className="text-gray-600 text-sm">Swiss Cheese Plant</p>
            </div>
          </div>

          {/* Confidence Meter */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 text-sm">Confidence Score</span>
              <span className="text-[#2E8B57]">{confidenceScore}%</span>
            </div>
            <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${confidenceScore}%` }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#7CB342] to-[#2E8B57] rounded-full"
              />
            </div>
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#7CB342]/10 rounded-2xl p-4">
              <p className="text-gray-600 text-xs mb-1">Care Level</p>
              <p className="text-[#2E8B57]">Easy</p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-4">
              <p className="text-gray-600 text-xs mb-1">Light</p>
              <p className="text-[#2E8B57]">Indirect</p>
            </div>
          </div>
        </motion.div>

        {/* Safety Warning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-orange-50 border-2 border-orange-200 rounded-3xl p-4 mb-6"
        >
          <div className="flex items-start gap-3">
            <div className="bg-orange-500 p-2 rounded-xl">
              <AlertTriangle className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-orange-900 mb-2">Safety Warning</h3>
              <p className="text-orange-800 text-sm mb-3">
                Mildly toxic to pets and humans if ingested. Keep away from children and animals.
              </p>
              <button className="text-orange-600 text-sm flex items-center gap-1">
                <Info className="w-4 h-4" />
                View Look-Alikes
              </button>
            </div>
          </div>
        </motion.div>

        {/* Climate Compatibility */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-6 mb-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white p-3 rounded-xl shadow-md">
              <ThermometerSun className="w-6 h-6 text-[#7CB342]" />
            </div>
            <div>
              <h3 className="text-[#2E8B57] mb-1">Climate Compatibility</h3>
              <p className="text-gray-600 text-sm">Perfect for your zone (7a)</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-600 text-sm">Temperature Range</span>
              <span className="text-[#2E8B57] text-sm">65-85°F</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 text-sm">Humidity</span>
              <span className="text-[#2E8B57] text-sm">60-80%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 text-sm">Frost Tolerance</span>
              <span className="text-orange-600 text-sm">None (Indoor only)</span>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="bg-[#2E8B57] text-white py-4 rounded-full shadow-lg"
          >
            Add to Garden
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="bg-white border-2 border-[#2E8B57] text-[#2E8B57] py-4 rounded-full shadow-lg"
          >
            Share
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
