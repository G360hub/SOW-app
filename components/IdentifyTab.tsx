import React, { useState } from 'react';
import { Camera, Image, AlertCircle, ThumbsUp, CloudSnow, Sun, Droplets, ChevronLeft, BookOpen, Lock, Crown, Sparkles, Zap, Grid3x3 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ProSubscription } from './ProSubscription';

export function IdentifyTab() {
  const [showResults, setShowResults] = useState(false);
  const [isProUser, setIsProUser] = useState(false); // Toggle to demo free vs pro
  const [showProModal, setShowProModal] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);

  const handleScan = () => {
    setIsScanning(true);
    setScanProgress(0);
    
    // Simulate scanning animation
    const interval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsScanning(false);
            setShowResults(true);
          }, 300);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleSubscribe = (plan: 'monthly' | 'annual' | 'lifetime') => {
    console.log('Subscribing to plan:', plan);
    // In production, integrate with payment processor
    setIsProUser(true);
    setShowProModal(false);
  };

  if (showResults) {
    return (
      <div className="min-h-screen bg-[#F5F7FA] pb-24">
        {/* Pro Subscription Modal */}
        {showProModal && (
          <ProSubscription
            onClose={() => setShowProModal(false)}
            onSubscribe={handleSubscribe}
          />
        )}

        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-4 py-4 flex items-center gap-4">
          <button
            onClick={() => setShowResults(false)}
            className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <h3 className="text-gray-900">Identification Results</h3>
        </div>

        {/* Scanned Image */}
        <div className="px-4 pt-4">
          <div className="relative rounded-2xl overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1719557553335-b7c74581daad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFudCUyMGlkZW50aWZpY2F0aW9uJTIwbGVhZnxlbnwxfHx8fDE3NjM4Nzk0NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Scanned plant"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>

        {/* Confidence Meter */}
        <div className="px-4 mt-6">
          <div className="bg-white rounded-2xl p-5 shadow-md">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="text-gray-900 mb-1">Monstera Deliciosa</h3>
                <p className="text-sm text-gray-600">Swiss Cheese Plant</p>
              </div>
              <div className="flex items-center gap-2 bg-[#7CB342]/10 px-3 py-2 rounded-xl">
                <ThumbsUp className="w-5 h-5 text-[#7CB342]" />
                <span className="text-[#7CB342]">98%</span>
              </div>
            </div>
            
            <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#7CB342] to-[#2E8B57] rounded-full" style={{ width: '98%' }}></div>
            </div>
            <p className="text-xs text-gray-500 mt-2">High confidence match</p>
          </div>
        </div>

        {/* Safety Warning */}
        <div className="px-4 mt-4">
          <div className="bg-[#7CB342]/10 border-2 border-[#7CB342] rounded-2xl p-4">
            <div className="flex items-start gap-3">
              <div className="bg-[#7CB342] p-2 rounded-xl">
                <ThumbsUp className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="text-gray-900 mb-1">Safe for Humans</h4>
                <p className="text-sm text-gray-700">
                  Non-toxic to humans but mildly toxic to pets if ingested
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Climate Compatibility */}
        <div className="px-4 mt-6">
          <h4 className="mb-3 text-gray-900">Climate Compatibility</h4>
          <div className="bg-white rounded-2xl p-5 shadow-md">
            <div className="flex items-center gap-2 mb-4">
              <Sun className="w-5 h-5 text-[#FFD54F]" />
              <span className="text-gray-900">Thrives in your zone (USDA 10-12)</span>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="bg-[#FFD54F]/20 p-3 rounded-xl mb-2 inline-flex">
                  <Sun className="w-6 h-6 text-[#FFD54F]" />
                </div>
                <p className="text-xs text-gray-600">Bright, indirect</p>
              </div>
              <div className="text-center">
                <div className="bg-[#2E8B57]/10 p-3 rounded-xl mb-2 inline-flex">
                  <Droplets className="w-6 h-6 text-[#2E8B57]" />
                </div>
                <p className="text-xs text-gray-600">Moderate water</p>
              </div>
              <div className="text-center">
                <div className="bg-red-100 p-3 rounded-xl mb-2 inline-flex">
                  <CloudSnow className="w-6 h-6 text-red-500" />
                </div>
                <p className="text-xs text-gray-600">Keep above 50°F</p>
              </div>
            </div>
          </div>
        </div>

        {/* Look-alike Comparison */}
        <div className="px-4 mt-6 mb-6">
          <h4 className="mb-3 text-gray-900">Similar Plants to Watch For</h4>
          <div className="bg-white rounded-2xl p-5 shadow-md">
            <div className="flex items-start gap-3 mb-4">
              <AlertCircle className="w-5 h-5 text-[#FFB74D] mt-1" />
              <div className="flex-1">
                <h4 className="text-gray-900 mb-1">Philodendron</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Often confused with Monstera due to similar leaf shape
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="border-2 border-[#2E8B57] rounded-xl p-2">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1605260346600-f98d9cf022a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZXBsYW50cyUyMGluZG9vcnxlbnwxfHx8fDE3NjM4Nzk0NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Your plant"
                  className="w-full h-24 object-cover rounded-lg mb-2"
                />
                <p className="text-xs text-center text-[#2E8B57]">Your Plant ✓</p>
              </div>
              <div className="border-2 border-gray-300 rounded-xl p-2">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1605260346600-f98d9cf022a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZXBsYW50cyUyMGluZG9vcnxlbnwxfHx8fDE3NjM4Nzk0NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Similar plant"
                  className="w-full h-24 object-cover rounded-lg mb-2"
                />
                <p className="text-xs text-center text-gray-600">Philodendron</p>
              </div>
            </div>
          </div>
        </div>

        {/* Plant Lore & Ancient Uses - NEW PREMIUM FEATURE */}
        <div className="px-4 mt-6 mb-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#8D6E63]" />
              <h4 className="text-gray-900">Plant Lore & Ancient Uses</h4>
            </div>
            {!isProUser && (
              <div className="flex items-center gap-1 bg-gradient-to-r from-[#FFD54F] to-[#FFB74D] px-2 py-1 rounded-full">
                <Crown className="w-3 h-3 text-gray-900" />
                <span className="text-xs text-gray-900">Pro</span>
              </div>
            )}
          </div>

          <div className="bg-gradient-to-br from-[#FFF9E6] to-white rounded-2xl overflow-hidden shadow-md border-2 border-[#8D6E63]/20">
            {/* Pro Toggle Demo Button */}
            <div className="bg-[#8D6E63]/10 px-4 py-2 border-b border-[#8D6E63]/20">
              <button
                onClick={() => setIsProUser(!isProUser)}
                className="text-xs text-[#8D6E63] flex items-center gap-1"
              >
                <Sparkles className="w-3 h-3" />
                {isProUser ? 'Viewing as Pro User (tap to see Free)' : 'Viewing as Free User (tap to see Pro)'}
              </button>
            </div>

            {isProUser ? (
              // PRO USER VIEW - Full Access
              <div className="p-5">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#8D6E63]/20">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#FFD54F] to-[#FFB74D] rounded-full flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-gray-900" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-gray-900">The Secret Knowledge Garden</h4>
                    <p className="text-xs text-gray-600">Unlock the hidden history of plants</p>
                  </div>
                </div>

                {/* Ancient Remedies */}
                <div className="mb-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">🏺</span>
                    <h4 className="text-gray-900">Ancient Remedies</h4>
                  </div>
                  <div className="bg-white rounded-xl p-4 space-y-3 border border-[#8D6E63]/10">
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 bg-[#2E8B57]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs">🇨🇳</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">Traditional Chinese Medicine</p>
                        <p className="text-xs text-gray-600 mt-1">Used for respiratory health and air purification properties</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 bg-[#2E8B57]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs">🌎</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">Indigenous Practices</p>
                        <p className="text-xs text-gray-600 mt-1">Tropical cultures valued for natural air quality improvement</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Historical Cuisine */}
                <div className="mb-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">🍳</span>
                    <h4 className="text-gray-900">Historical Cuisine</h4>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-[#8D6E63]/10">
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 bg-[#7CB342]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs">🇲🇽</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">Mexican Tradition</p>
                        <p className="text-xs text-gray-600 mt-1">Young fruits occasionally used in traditional dishes (with proper preparation)</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Practical Crafts */}
                <div className="mb-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">🧵</span>
                    <h4 className="text-gray-900">Practical Uses</h4>
                  </div>
                  <div className="bg-white rounded-xl p-4 space-y-2 border border-[#8D6E63]/10">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-[#7CB342]">•</span>
                      <span>Large leaves used for natural umbrellas and shelter</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-[#7CB342]">•</span>
                      <span>Fibers extracted for traditional rope-making</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-[#7CB342]">•</span>
                      <span>Leaves used as natural food wrapping material</span>
                    </div>
                  </div>
                </div>

                {/* Ritual & Spiritual */}
                <div className="mb-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">🌿</span>
                    <h4 className="text-gray-900">Ritual & Spiritual</h4>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-[#8D6E63]/10">
                    <p className="text-sm text-gray-700 mb-2">
                      In Mesoamerican cultures, Monstera held spiritual significance as a symbol of respect and honor
                    </p>
                    <p className="text-xs text-gray-600">
                      The unique leaf perforations were seen as windows to the divine
                    </p>
                  </div>
                </div>

                {/* Historical Anecdotes */}
                <div className="mb-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">📜</span>
                    <h4 className="text-gray-900">Did You Know?</h4>
                  </div>
                  <div className="bg-gradient-to-br from-[#FFD54F]/20 to-[#FFB74D]/10 rounded-xl p-4 border border-[#FFD54F]/30">
                    <p className="text-sm text-gray-800 mb-2">
                      The Monstera's fenestrated leaves puzzled botanists for centuries. In the 1700s, it was believed the holes allowed hurricane winds to pass through without tearing the leaves!
                    </p>
                    <p className="text-xs text-gray-600 italic">
                      Modern research confirms this adaptive advantage in tropical storms.
                    </p>
                  </div>
                </div>

                {/* Safety Disclaimer */}
                <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h4 className="text-red-900 mb-1">Important Medical Disclaimer</h4>
                      <p className="text-xs text-red-800">
                        Historical uses are for educational purposes only. Always consult healthcare professionals before using any plant medicinally. Some traditional preparations may be toxic without proper processing.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Gamification - Lore Collector Badge */}
                <div className="mt-5 bg-gradient-to-r from-[#2E8B57]/10 to-[#7CB342]/10 rounded-xl p-4 border-2 border-[#7CB342]/30">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#FFD54F] to-[#FFB74D] rounded-full flex items-center justify-center animate-bloom">
                      <span className="text-2xl">📚</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-gray-900 mb-1">Badge Unlocked!</h4>
                      <p className="text-sm text-gray-700">"Ancient Wisdom Seeker"</p>
                      <p className="text-xs text-gray-600 mt-1">Discovered 1 of 250+ plant histories</p>
                    </div>
                  </div>
                </div>

                {/* Share This Lore */}
                <button className="w-full mt-4 bg-white border-2 border-[#2E8B57] text-[#2E8B57] py-3 rounded-xl hover:bg-[#2E8B57]/5 transition-all flex items-center justify-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  <span>Share This Plant's Story</span>
                </button>
              </div>
            ) : (
              // FREE USER VIEW - Teaser
              <div className="p-5">
                {/* Basic Facts (Free Tier) */}
                <div className="mb-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">🏺</span>
                    <h4 className="text-gray-900">Traditional Uses</h4>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-[#8D6E63]/10">
                    <div className="flex items-start gap-2 mb-3">
                      <div className="w-6 h-6 bg-[#2E8B57]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs">🌎</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">Air Purification</p>
                        <p className="text-xs text-gray-600 mt-1">Valued in traditional practices for indoor air quality</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 bg-[#2E8B57]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs">🧵</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">Natural Materials</p>
                        <p className="text-xs text-gray-600 mt-1">Large leaves used for shelter and crafts</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Locked Premium Content */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl p-6 border-2 border-dashed border-gray-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/95 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-[#FFD54F] to-[#FFB74D] rounded-full flex items-center justify-center mx-auto mb-3 animate-float">
                          <Lock className="w-8 h-8 text-gray-900" />
                        </div>
                        <h4 className="text-gray-900 mb-2">Discover 15+ Hidden Secrets</h4>
                        <p className="text-sm text-gray-700 mb-4 px-4">
                          Unlock ancient remedies, historical anecdotes, ritual uses, and fascinating stories from herbalists
                        </p>
                        <button
                          onClick={() => setShowProModal(true)}
                          className="bg-gradient-to-r from-[#FFD54F] to-[#FFB74D] text-gray-900 px-6 py-3 rounded-xl hover:shadow-lg transition-all inline-flex items-center gap-2"
                        >
                          <Crown className="w-5 h-5" />
                          <span>Upgrade to SOW Pro</span>
                        </button>
                      </div>
                    </div>
                    
                    {/* Blurred preview content */}
                    <div className="blur-sm pointer-events-none">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xl">🍳</span>
                        <h4 className="text-gray-900">Historical Cuisine</h4>
                      </div>
                      <div className="bg-white rounded-xl p-4 mb-4">
                        <p className="text-sm text-gray-700">Mexican traditional dishes...</p>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xl">🌿</span>
                        <h4 className="text-gray-900">Ritual & Spiritual</h4>
                      </div>
                      <div className="bg-white rounded-xl p-4 mb-4">
                        <p className="text-sm text-gray-700">Mesoamerican spiritual significance...</p>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xl">📜</span>
                        <h4 className="text-gray-900">Historical Anecdotes</h4>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Benefits List */}
                <div className="mt-4 bg-white rounded-xl p-4 border border-[#8D6E63]/10">
                  <p className="text-sm text-gray-900 mb-3">With SOW Pro, you'll unlock:</p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex items-center gap-2">
                      <span className="text-[#7CB342]">✓</span>
                      <span>250+ researched plant histories</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#7CB342]">✓</span>
                      <span>Ancient remedies & medicinal uses</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#7CB342]">✓</span>
                      <span>Cultural ceremonies & spiritual practices</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#7CB342]">✓</span>
                      <span>Historical anecdotes & fascinating facts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#7CB342]">✓</span>
                      <span>Lore Collector badges & achievements</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Action Button */}
        <div className="px-4 pb-6">
          <button className="w-full bg-gradient-to-r from-[#2E8B57] to-[#7CB342] text-white py-4 rounded-xl shadow-lg hover:shadow-xl transition-all">
            Add to My Garden
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F7FA] pb-24 flex flex-col">
      {/* Scanning Animation Overlay */}
      {isScanning && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="text-center px-6">
            {/* Animated Plant Growing */}
            <div className="relative w-32 h-32 mx-auto mb-6">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Rotating seeds/leaves animation */}
                  <div className="animate-spin">
                    <Sparkles className="w-16 h-16 text-[#7CB342]" />
                  </div>
                  {/* Pulsing center */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 bg-[#FFD54F] rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
              {/* Floating leaf particles */}
              <div className="absolute inset-0 pointer-events-none">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="absolute animate-leaf-fall"
                    style={{
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.3}s`,
                    }}
                  >
                    <div className="text-2xl">🍃</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Progress Text */}
            <div className="mb-6">
              <h3 className="text-white mb-2">
                {scanProgress < 30 && 'Analyzing leaf patterns...'}
                {scanProgress >= 30 && scanProgress < 60 && 'Checking flower database...'}
                {scanProgress >= 60 && scanProgress < 90 && 'Matching species...'}
                {scanProgress >= 90 && 'Almost there...'}
              </h3>
              <p className="text-white/80 text-sm">Processing your plant</p>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full max-w-xs mx-auto">
              <div className="relative h-2 bg-white/20 rounded-full overflow-hidden">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-[#7CB342] to-[#2E8B57] rounded-full transition-all duration-200"
                  style={{ width: `${scanProgress}%` }}
                ></div>
              </div>
              <p className="text-white/60 text-sm mt-2">{scanProgress}%</p>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4">
        <h3 className="text-gray-900">Identify Plant</h3>
      </div>

      {/* Camera Viewfinder */}
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[#2E8B57]/20 to-[#7CB342]/20 flex items-center justify-center">
          {/* Leaf Frame Overlay */}
          <div className="absolute inset-0 border-4 border-dashed border-[#2E8B57] rounded-3xl m-8 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Camera className="w-10 h-10 text-[#2E8B57]" />
              </div>
              <p className="text-gray-700 mb-2">Position plant in frame</p>
              <p className="text-sm text-gray-500">
                Center leaves for best results
              </p>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 w-full max-w-md">
          <div className="bg-white rounded-2xl p-5 shadow-md">
            <h4 className="text-gray-900 mb-3">Tips for Best Results</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#7CB342]">✓</span>
                <span>Use natural lighting when possible</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#7CB342]">✓</span>
                <span>Include leaves, flowers, or distinctive features</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#7CB342]">✓</span>
                <span>Get close but keep the entire plant part visible</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="px-6 pb-6 space-y-3">
        <button
          onClick={handleScan}
          className="w-full bg-gradient-to-r from-[#2E8B57] to-[#7CB342] text-white py-5 rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3"
        >
          <Camera className="w-6 h-6" />
          <span>Take Photo</span>
        </button>
        
        <button className="w-full bg-white text-[#2E8B57] py-4 rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-3 border-2 border-[#2E8B57]">
          <Image className="w-5 h-5" />
          <span>Choose from Gallery</span>
        </button>
      </div>
    </div>
  );
}