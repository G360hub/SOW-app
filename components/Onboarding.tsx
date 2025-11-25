import React, { useState } from 'react';
import { Leaf, MapPin, Bell, Users, Camera, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface OnboardingProps {
  onComplete: () => void;
}

export function Onboarding({ onComplete }: OnboardingProps) {
  const [step, setStep] = useState(0);
  const [location, setLocation] = useState('');

  const slides = [
    {
      icon: Camera,
      title: 'Identify Any Plant',
      description: 'Snap a photo and instantly discover plant species with our advanced AI recognition',
      color: 'text-[#2E8B57]',
      bgColor: 'bg-[#2E8B57]/10',
    },
    {
      icon: Leaf,
      title: 'Track Your Garden',
      description: 'Monitor plant health, growth timelines, and get personalized care reminders',
      color: 'text-[#7CB342]',
      bgColor: 'bg-[#7CB342]/10',
    },
    {
      icon: Bell,
      title: 'Frost Protection',
      description: 'Receive instant alerts about temperature drops to protect your plants',
      color: 'text-[#FFD54F]',
      bgColor: 'bg-[#FFD54F]/20',
    },
    {
      icon: Users,
      title: 'Join the Community',
      description: 'Connect with fellow gardeners, share tips, and celebrate your growing journey',
      color: 'text-[#2E8B57]',
      bgColor: 'bg-[#2E8B57]/10',
    },
  ];

  const handleNext = () => {
    if (step < slides.length - 1) {
      setStep(step + 1);
    } else if (step === slides.length - 1) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  const currentSlide = slides[step];

  if (step === slides.length) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#2E8B57] to-[#7CB342] flex flex-col items-center justify-center p-6 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        
        <div className="w-full max-w-md relative z-10">
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center justify-center w-16 h-16 bg-[#2E8B57]/10 rounded-full mx-auto mb-6">
              <MapPin className="w-8 h-8 text-[#2E8B57]" />
            </div>
            
            <h2 className="text-center mb-2">Set Your Location</h2>
            <p className="text-center text-gray-600 mb-6">
              Help us provide accurate frost alerts and climate-specific plant recommendations
            </p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-2 text-gray-700">City or Zip Code</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter your location"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#2E8B57] focus:outline-none transition-colors"
                />
              </div>
              
              <button
                onClick={onComplete}
                className="w-full bg-gradient-to-r from-[#2E8B57] to-[#7CB342] text-white py-4 rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                Get Started
                <ChevronRight className="w-5 h-5" />
              </button>
              
              <button
                onClick={onComplete}
                className="w-full text-gray-600 py-2 text-sm hover:text-gray-800 transition-colors"
              >
                Skip for now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2E8B57] to-[#7CB342] flex flex-col relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1617836250803-24873f080562?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVycnklMjBibG9zc29tcyUyMHNwcmluZ3xlbnwxfHx8fDE3NjM4Nzk0NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Logo */}
      <div className="relative z-10 pt-12 px-6">
        <div className="flex items-center justify-center gap-2">
          <Leaf className="w-8 h-8 text-white" />
          <h1 className="text-white">SOW</h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 relative z-10">
        <div className="w-full max-w-md">
          {/* Icon */}
          <div className={`flex items-center justify-center w-24 h-24 ${currentSlide.bgColor} rounded-full mx-auto mb-8 animate-bloom`}>
            <currentSlide.icon className={`w-12 h-12 ${currentSlide.color}`} />
          </div>

          {/* Text */}
          <h2 className="text-white text-center mb-4">{currentSlide.title}</h2>
          <p className="text-white/90 text-center mb-12 px-4">
            {currentSlide.description}
          </p>

          {/* Dots */}
          <div className="flex justify-center gap-2 mb-12">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all ${
                  index === step
                    ? 'w-8 bg-white'
                    : 'w-2 bg-white/40'
                }`}
              />
            ))}
          </div>

          {/* Button */}
          <button
            onClick={handleNext}
            className="w-full bg-white text-[#2E8B57] py-4 rounded-xl hover:shadow-xl transition-all flex items-center justify-center gap-2"
          >
            {step === slides.length - 1 ? 'Continue' : 'Next'}
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
