import React, { useState } from 'react';
import { ChevronLeft, HelpCircle, ExternalLink, Search } from 'lucide-react';
import { PrivacyPolicyScreen } from './PrivacyPolicyScreen';
import { TermsOfServiceScreen } from './TermsOfServiceScreen';
import { CommunityGuidelinesScreen } from './CommunityGuidelinesScreen';
import { ReportProblemScreen } from './ReportProblemScreen';

interface HelpSupportScreenProps {
  onClose: () => void;
}

export function HelpSupportScreen({ onClose }: HelpSupportScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsOfService, setShowTermsOfService] = useState(false);
  const [showCommunityGuidelines, setShowCommunityGuidelines] = useState(false);
  const [showReportProblem, setShowReportProblem] = useState(false);

  const faqCategories = [
    {
      title: 'Getting Started',
      icon: '🌱',
      questions: [
        { q: 'How do I identify a plant?', a: 'Tap the camera icon, take a clear photo of the plant, and our AI will identify it within seconds.' },
        { q: 'How accurate is plant identification?', a: 'Our AI has 98% accuracy for common plants. For best results, capture clear images in good lighting.' },
        { q: 'Can I use SOW offline?', a: 'Basic features work offline, but identification requires internet connection.' },
      ],
    },
    {
      title: 'Plant Care',
      icon: '💧',
      questions: [
        { q: 'How do frost alerts work?', a: 'We monitor weather in your location and alert you 12-24 hours before frost temperatures.' },
        { q: 'How often should I water my plants?', a: 'Each plant has custom care instructions. Check the individual plant page in your garden.' },
        { q: 'What do the health indicators mean?', a: 'Health scores are based on care frequency, environmental conditions, and growth patterns.' },
      ],
    },
    {
      title: 'SOW Pro',
      icon: '👑',
      questions: [
        { q: 'What does SOW Pro include?', a: 'Unlimited identifications, plant lore & history, advanced frost alerts, expert care plans, and more.' },
        { q: 'Can I cancel my subscription?', a: 'Yes, cancel anytime from your profile settings. You keep Pro benefits until the end of your billing period.' },
        { q: 'Is there a free trial?', a: 'Yes! All new users get 14 days of SOW Pro free.' },
      ],
    },
    {
      title: 'Community',
      icon: '🤝',
      questions: [
        { q: 'How do I join challenges?', a: 'Navigate to the Community tab, select Challenges, and tap \"Join Challenge\" on any active event.' },
        { q: 'How do badges work?', a: 'Earn badges by completing activities like identifying plants, helping others, and maintaining plant health.' },
        { q: 'Can I message other users?', a: 'Yes, tap on any user profile and select \"Message\" to start a conversation.' },
      ],
    },
  ];

  return (
    <div className="fixed inset-0 bg-[#F5F7FA] z-50 flex flex-col">
      {/* Privacy Policy Modal */}
      {showPrivacyPolicy && <PrivacyPolicyScreen onClose={() => setShowPrivacyPolicy(false)} />}
      {/* Terms of Service Modal */}
      {showTermsOfService && <TermsOfServiceScreen onClose={() => setShowTermsOfService(false)} />}
      {/* Community Guidelines Modal */}
      {showCommunityGuidelines && <CommunityGuidelinesScreen onClose={() => setShowCommunityGuidelines(false)} />}
      {/* Report Problem Modal */}
      {showReportProblem && <ReportProblemScreen onClose={() => setShowReportProblem(false)} />}

      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
            aria-label="Go back"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <h3 className="text-gray-900">Help & Support</h3>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search help articles..."
            className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2E8B57]"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-4 pt-6">
          {/* FAQ */}
          <div className="mb-8">
            <h4 className="text-gray-900 mb-4">Frequently Asked Questions</h4>
            <div className="space-y-6">
              {faqCategories.map((category, catIndex) => (
                <div key={catIndex}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{category.icon}</span>
                    <h4 className="text-gray-900">{category.title}</h4>
                  </div>
                  <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                    {category.questions.map((item, qIndex) => (
                      <details
                        key={qIndex}
                        className={`group ${
                          qIndex !== category.questions.length - 1 ? 'border-b border-gray-100' : ''
                        }`}
                      >
                        <summary className="p-4 cursor-pointer hover:bg-gray-50 transition-colors list-none">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-900">{item.q}</span>
                            <HelpCircle className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
                          </div>
                        </summary>
                        <div className="px-4 pb-4">
                          <p className="text-sm text-gray-700 leading-relaxed">{item.a}</p>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-8">
            <h4 className="text-gray-900 mb-4">Useful Resources</h4>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <button 
                onClick={() => setShowPrivacyPolicy(true)}
                className="w-full p-4 border-b border-gray-100 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="text-gray-900">Privacy Policy</span>
                <ExternalLink className="w-5 h-5 text-gray-400" />
              </button>
              <button 
                onClick={() => setShowTermsOfService(true)}
                className="w-full p-4 border-b border-gray-100 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="text-gray-900">Terms of Service</span>
                <ExternalLink className="w-5 h-5 text-gray-400" />
              </button>
              <button 
                onClick={() => setShowCommunityGuidelines(true)}
                className="w-full p-4 border-b border-gray-100 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="text-gray-900">Community Guidelines</span>
                <ExternalLink className="w-5 h-5 text-gray-400" />
              </button>
              <button 
                onClick={() => setShowReportProblem(true)}
                className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="text-gray-900">Report a Problem</span>
                <ExternalLink className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>

          {/* App Info */}
          <div className="bg-gray-100 rounded-2xl p-4 text-center">
            <p className="text-sm text-gray-600 mb-1">SOW - Plant Identification App</p>
            <p className="text-xs text-gray-500">Version 1.0.0 (Build 100)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
