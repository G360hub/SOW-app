import React, { useState } from 'react';
import { Crown, Check, X, BookOpen, AlertCircle, Camera, Leaf, Star, Sparkles, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProSubscriptionProps {
  onClose: () => void;
  onSubscribe: (plan: 'monthly' | 'annual' | 'lifetime') => void;
}

export function ProSubscription({ onClose, onSubscribe }: ProSubscriptionProps) {
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'annual' | 'lifetime'>('annual');

  const plans = [
    {
      id: 'monthly' as const,
      name: 'Monthly',
      price: '$5.99',
      period: '/month',
      description: 'Flexible month-to-month',
      badge: null,
      savings: null,
      details: 'Cancel anytime',
      color: 'border-gray-300',
      bgColor: 'bg-white',
    },
    {
      id: 'annual' as const,
      name: 'Annual',
      price: '$39.99',
      period: '/year',
      description: '$3.33/month',
      badge: 'MOST POPULAR - BEST VALUE',
      savings: 'Save 44% vs monthly',
      details: 'Pay for 7 months, get 5 free',
      color: 'border-[#FFD54F]',
      bgColor: 'bg-gradient-to-br from-[#FFD54F]/10 to-[#FFB74D]/10',
    },
    {
      id: 'lifetime' as const,
      name: 'Lifetime',
      price: '$119.99',
      period: 'one-time',
      description: 'Never pay again',
      badge: 'VIP STATUS',
      savings: 'Ultimate savings',
      details: 'Equivalent to 20 months',
      color: 'border-[#2E8B57]',
      bgColor: 'bg-gradient-to-br from-[#2E8B57]/10 to-[#7CB342]/10',
    },
  ];

  const features = [
    {
      icon: BookOpen,
      title: '250+ Plant Histories',
      description: 'Ancient remedies, rituals & fascinating stories',
      color: 'text-[#8D6E63]',
    },
    {
      icon: AlertCircle,
      title: 'Advanced Frost Alerts',
      description: 'Hourly updates & custom plant-specific warnings',
      color: 'text-[#FFD54F]',
    },
    {
      icon: Camera,
      title: 'Unlimited Identifications',
      description: 'Scan as many plants as you want',
      color: 'text-[#7CB342]',
    },
    {
      icon: Leaf,
      title: 'Expert Care Plans',
      description: 'Personalized schedules for each plant',
      color: 'text-[#2E8B57]',
    },
    {
      icon: Star,
      title: 'Priority Support',
      description: 'Get help from botanical experts',
      color: 'text-[#FFB74D]',
    },
    {
      icon: Sparkles,
      title: 'Exclusive Challenges',
      description: 'Access VIP seasonal events & badges',
      color: 'text-[#7CB342]',
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 animate-bloom">
      <div className="bg-[#F5F7FA] w-full max-w-2xl rounded-t-3xl sm:rounded-3xl max-h-[95vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-br from-[#2E8B57] to-[#7CB342] px-6 pt-6 pb-8 relative overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1617836250803-24873f080562?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVycnklMjBibG9zc29tcyUyMHNwcmluZ3xlbnwxfHx8fDE3NjM4Nzk0NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover opacity-10"
          />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors z-10"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div className="relative z-10 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-[#FFD54F] to-[#FFB74D] rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
              <Crown className="w-8 h-8 text-gray-900" />
            </div>
            <h2 className="text-white mb-2">Upgrade to SOW Pro</h2>
            <p className="text-white/90 text-sm">
              Unlock the full power of plant wisdom
            </p>
          </div>
        </div>

        {/* Trial Banner */}
        <div className="mx-6 -mt-4 relative z-20">
          <div className="bg-gradient-to-r from-[#FFD54F] to-[#FFB74D] rounded-2xl p-4 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="bg-white/90 p-2 rounded-xl">
                <Sparkles className="w-6 h-6 text-[#2E8B57]" />
              </div>
              <div className="flex-1">
                <h4 className="text-gray-900">Start Your 14-Day Free Trial</h4>
                <p className="text-sm text-gray-800">
                  Cancel anytime. No commitment required.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="px-6 pt-8 pb-6">
          <h3 className="text-gray-900 mb-4 text-center">Choose Your Plan</h3>
          
          <div className="space-y-4">
            {plans.map((plan) => (
              <button
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`w-full ${plan.bgColor} border-3 ${
                  selectedPlan === plan.id ? plan.color : 'border-gray-200'
                } rounded-2xl p-5 transition-all hover:shadow-lg relative overflow-hidden`}
              >
                {plan.badge && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-[#FFD54F] to-[#FFB74D] text-gray-900 px-3 py-1 rounded-bl-xl rounded-tr-xl text-xs">
                    {plan.badge}
                  </div>
                )}

                <div className="flex items-center gap-4">
                  {/* Radio Button */}
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      selectedPlan === plan.id
                        ? 'border-[#2E8B57] bg-[#2E8B57]'
                        : 'border-gray-300'
                    }`}
                  >
                    {selectedPlan === plan.id && (
                      <Check className="w-4 h-4 text-white" />
                    )}
                  </div>

                  {/* Plan Details */}
                  <div className="flex-1 text-left">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-2xl text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 text-sm">{plan.period}</span>
                    </div>
                    <p className="text-sm text-gray-700 mb-1">{plan.description}</p>
                    {plan.savings && (
                      <p className="text-xs text-[#2E8B57]">✓ {plan.savings}</p>
                    )}
                    <p className="text-xs text-gray-600 mt-1">{plan.details}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Value Proposition */}
          <div className="mt-6 bg-white rounded-2xl p-4 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">☕</span>
              <p className="text-sm text-gray-900">
                {selectedPlan === 'monthly' && 'Less than your daily coffee'}
                {selectedPlan === 'annual' && 'Just $2.66 saved monthly - Best Value!'}
                {selectedPlan === 'lifetime' && 'Pay once, enjoy forever'}
              </p>
            </div>
            <p className="text-xs text-gray-600">
              {selectedPlan === 'annual' && 'Your annual subscription pays for itself if it saves just one plant from frost'}
              {selectedPlan === 'monthly' && 'For the price of one seed packet per month, unlock ancient plant wisdom'}
              {selectedPlan === 'lifetime' && 'Lifetime = 2 years of Pro features for price of 1.5 years'}
            </p>
          </div>
        </div>

        {/* What's Included */}
        <div className="px-6 pb-8">
          <h4 className="text-gray-900 mb-4">What's Included in Pro</h4>
          <div className="space-y-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
                <div className={`p-2 rounded-xl bg-gray-50 ${feature.color}`}>
                  <feature.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="text-gray-900 text-sm mb-1">{feature.title}</h4>
                  <p className="text-xs text-gray-600">{feature.description}</p>
                </div>
                <Check className="w-5 h-5 text-[#7CB342] flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>

        {/* Social Proof */}
        <div className="px-6 pb-6">
          <div className="bg-gradient-to-br from-[#2E8B57]/10 to-[#7CB342]/10 rounded-2xl p-5 border-2 border-[#7CB342]/20">
            <div className="flex items-center gap-2 mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 text-[#FFD54F] fill-[#FFD54F]" />
              ))}
            </div>
            <p className="text-sm text-gray-800 mb-2 italic">
              "SOW Pro transformed my gardening! The plant lore feature is absolutely fascinating, and the frost alerts saved my tomatoes."
            </p>
            <p className="text-xs text-gray-600">- Sarah G., Master Gardener</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4">
          <button
            onClick={() => onSubscribe(selectedPlan)}
            className="w-full bg-gradient-to-r from-[#2E8B57] to-[#7CB342] text-white py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 mb-3"
          >
            <span>Start Free Trial - Then {plans.find(p => p.id === selectedPlan)?.price}</span>
            <ChevronRight className="w-5 h-5" />
          </button>
          
          <p className="text-xs text-gray-600 text-center">
            Free for 14 days, then {plans.find(p => p.id === selectedPlan)?.price} {plans.find(p => p.id === selectedPlan)?.period}. Cancel anytime.
          </p>
        </div>

        {/* Limited Time Offer (Optional) */}
        <div className="px-6 pb-6">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-orange-200 rounded-2xl p-4">
            <div className="flex items-start gap-3">
              <div className="bg-orange-500 p-2 rounded-full">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="text-gray-900 mb-1">🌱 Launch Special</h4>
                <p className="text-sm text-gray-700">
                  First 5,000 users get Lifetime Access for only <strong>$99.99</strong> (save $20)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="px-6 pb-8 text-center space-y-2">
          <button className="text-sm text-gray-600 hover:text-gray-800 transition-colors">
            Restore Purchases
          </button>
          <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
            <button className="hover:text-gray-700">Terms of Service</button>
            <span>•</span>
            <button className="hover:text-gray-700">Privacy Policy</button>
          </div>
        </div>
      </div>
    </div>
  );
}
