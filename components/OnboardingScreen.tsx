import { useState } from 'react';
import { motion } from 'motion/react';
import { Sprout, Camera, Users, Bell, MapPin, ChevronRight } from 'lucide-react';

interface OnboardingScreenProps {
  onComplete: () => void;
}

const slides = [
  {
    title: "Welcome to SOW",
    subtitle: "Your Digital Garden Sanctuary",
    description: "Discover, identify, and nurture plants while connecting with a thriving gardening community.",
    icon: Sprout,
    color: "#2E8B57",
    bgImage: "https://images.unsplash.com/photo-1617836250803-24873f080562?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVycnklMjBibG9zc29tJTIwc3ByaW5nfGVufDF8fHx8MTc2MzgyOTY2Mnww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Identify Any Plant",
    subtitle: "AI-Powered Recognition",
    description: "Snap a photo and instantly identify plants with confidence scores and safety warnings for look-alikes.",
    icon: Camera,
    color: "#7CB342",
    bgImage: "https://images.unsplash.com/photo-1650731900879-b5f25088ff31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFudCUyMGxlYXZlcyUyMGdyZWVufGVufDF8fHx8MTc2Mzg3OTE0NHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Grow Together",
    subtitle: "Join the Community",
    description: "Share your garden journey, get expert advice, and participate in seasonal challenges with fellow plant lovers.",
    icon: Users,
    color: "#FFD54F",
    bgImage: "https://images.unsplash.com/photo-1513906029980-32d13afe6d8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBnYXJkZW4lMjBwZW9wbGV8ZW58MXx8fHwxNzYzNzc4NTI2fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Stay Protected",
    subtitle: "Frost Alerts & Care Reminders",
    description: "Enable location access to receive frost warnings and personalized care tips for your climate zone.",
    icon: Bell,
    color: "#2E8B57",
    bgImage: "https://images.unsplash.com/photo-1598920710727-e6c74781538c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5mbG93ZXIlMjBnYXJkZW58ZW58MXx8fHwxNzYzNzkxODU0fDA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export function OnboardingScreen({ onComplete }: OnboardingScreenProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [locationEnabled, setLocationEnabled] = useState(false);

  const isLastSlide = currentSlide === slides.length - 1;

  const handleNext = () => {
    if (isLastSlide) {
      onComplete();
    } else {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const handleSkip = () => {
    onComplete();
  };

  const handleEnableLocation = () => {
    setLocationEnabled(true);
    setTimeout(() => {
      onComplete();
    }, 300);
  };

  const current = slides[currentSlide];
  const Icon = current.icon;

  return (
    <div className="h-full bg-white relative overflow-hidden">
      {/* Background Image with Overlay */}
      <motion.div
        key={currentSlide}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${current.bgImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-white" />
      </motion.div>

      {/* Content */}
      <div className="relative h-full flex flex-col">
        {/* Skip Button */}
        {!isLastSlide && (
          <div className="absolute top-12 right-6 z-10">
            <button
              onClick={handleSkip}
              className="text-white/90 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm"
            >
              Skip
            </button>
          </div>
        )}

        {/* Icon and Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-8 pb-32">
          <motion.div
            key={`icon-${currentSlide}`}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", duration: 0.8 }}
            className="mb-8"
          >
            <div 
              className="w-24 h-24 rounded-full flex items-center justify-center shadow-2xl"
              style={{ backgroundColor: current.color }}
            >
              <Icon className="w-12 h-12 text-white" />
            </div>
          </motion.div>

          <motion.div
            key={`title-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-4"
          >
            <h1 className="text-white mb-2">
              {current.title}
            </h1>
            <p className="text-white/90">
              {current.subtitle}
            </p>
          </motion.div>

          <motion.p
            key={`desc-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white/80 text-center max-w-sm"
          >
            {current.description}
          </motion.p>

          {/* Location Setup for Last Slide */}
          {isLastSlide && !locationEnabled && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onClick={handleEnableLocation}
              className="mt-8 bg-white text-[#2E8B57] px-8 py-4 rounded-full flex items-center gap-3 shadow-lg"
            >
              <MapPin className="w-5 h-5" />
              Enable Location
            </motion.button>
          )}
        </div>

        {/* Bottom Section */}
        <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[40px] px-8 py-8 shadow-2xl">
          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mb-6">
            {slides.map((_, index) => (
              <motion.div
                key={index}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'w-8 bg-[#2E8B57]' 
                    : 'w-2 bg-gray-300'
                }`}
                layoutId={`dot-${index}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <motion.button
            onClick={handleNext}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-[#2E8B57] text-white py-4 rounded-full flex items-center justify-center gap-2 shadow-lg"
          >
            {isLastSlide ? 'Get Started' : 'Continue'}
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
