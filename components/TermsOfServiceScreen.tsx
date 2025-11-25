import React from 'react';
import { ChevronLeft, FileText, AlertTriangle, CreditCard, Shield, Gavel } from 'lucide-react';

interface TermsOfServiceScreenProps {
  onClose: () => void;
}

export function TermsOfServiceScreen({ onClose }: TermsOfServiceScreenProps) {
  return (
    <div className="fixed inset-0 bg-[#F5F7FA] z-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4 flex items-center gap-4">
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
          aria-label="Go back"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h3 className="text-gray-900">Terms of Service</h3>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-4 pt-6">
          {/* Header */}
          <div className="bg-gradient-to-br from-[#2E8B57]/10 to-[#7CB342]/10 rounded-2xl p-6 mb-6 border-2 border-[#7CB342]/20">
            <div className="flex items-center gap-3 mb-3">
              <FileText className="w-8 h-8 text-[#2E8B57]" />
              <h3 className="text-gray-900">Terms of Service for SOW</h3>
            </div>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Last Updated:</strong> November 24, 2024
            </p>
            <p className="text-sm text-[#E57373]">
              <strong>PLEASE READ THESE TERMS OF SERVICE CAREFULLY BEFORE USING SOW.</strong>
            </p>
          </div>

          {/* Section 1 */}
          <div className="bg-white rounded-2xl p-5 shadow-md mb-4">
            <h4 className="text-gray-900 mb-3">1. Acceptance of Terms</h4>
            <p className="text-sm text-gray-700">
              By downloading, accessing, or using the Sow plant identification application ("the App"), you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, do not use the App.
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-white rounded-2xl p-5 shadow-md mb-4">
            <h4 className="text-gray-900 mb-3">2. Description of Service</h4>
            <p className="text-sm text-gray-700 mb-3">Sow provides:</p>
            <ul className="space-y-2 text-sm text-gray-700 mb-3">
              <li className="flex gap-2">
                <span className="text-[#7CB342]">•</span>
                <span>AI-powered plant identification technology</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#7CB342]">•</span>
                <span>Gardening advice and care recommendations</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#7CB342]">•</span>
                <span>Community features for sharing plant photos and advice</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#7CB342]">•</span>
                <span>Weather and frost alert services</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#7CB342]">•</span>
                <span>Subscription-based premium features ("Sow Pro")</span>
              </li>
            </ul>
            <div className="bg-[#FFD54F]/10 border border-[#FFD54F]/30 rounded-xl p-3">
              <p className="text-sm text-gray-800">
                <strong>You acknowledge that plant identification is not 100% accurate and should not be relied upon for critical health or safety decisions.</strong>
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-white rounded-2xl p-5 shadow-md mb-4">
            <h4 className="text-gray-900 mb-3">3. User Accounts</h4>
            <div className="space-y-3 text-sm text-gray-700">
              <div>
                <strong className="text-gray-900">Eligibility:</strong> You must be at least 13 years old to use Sow. If you are under 18, you represent that you have your parent or guardian's permission to use the App.
              </div>
              <div>
                <strong className="text-gray-900">Account Security:</strong> You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="bg-white rounded-2xl p-5 shadow-md mb-4">
            <div className="flex items-center gap-2 mb-3">
              <CreditCard className="w-5 h-5 text-[#FFD54F]" />
              <h4 className="text-gray-900">4. Subscription and Billing (Sow Pro)</h4>
            </div>
            
            <div className="space-y-3 text-sm text-gray-700">
              <div>
                <strong className="text-gray-900">Free Trial:</strong> Sow may offer a 14-day free trial after which your subscription will automatically convert to a paid subscription unless canceled at least 24 hours before the trial period ends.
              </div>
              
              <div>
                <strong className="text-gray-900">Subscription Plans:</strong>
                <ul className="mt-2 space-y-1 ml-4">
                  <li className="flex gap-2">
                    <span className="text-[#7CB342]">•</span>
                    <span>Monthly: $5.99/month</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#7CB342]">•</span>
                    <span>Annual: $39.99/year</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#7CB342]">•</span>
                    <span>Lifetime: $119.99 (one-time payment)</span>
                  </li>
                </ul>
              </div>

              <div>
                <strong className="text-gray-900">Payment:</strong> Payments are processed through third-party platforms (Apple App Store, Google Play Store, or other payment processors). You agree to their terms and conditions.
              </div>

              <div>
                <strong className="text-gray-900">Cancellation:</strong> You may cancel your subscription at any time through your device's subscription settings. Cancellation will take effect at the end of the current billing cycle.
              </div>

              <div>
                <strong className="text-gray-900">Refunds:</strong> All payments are non-refundable, except as required by law or as otherwise specified in our refund policy.
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div className="bg-white rounded-2xl p-5 shadow-md mb-4">
            <h4 className="text-gray-900 mb-3">5. User Content and Conduct</h4>
            <p className="text-sm text-gray-700 mb-2"><strong>You agree not to:</strong></p>
            <ul className="space-y-2 text-sm text-gray-700 mb-3">
              <li className="flex gap-2">
                <span className="text-[#E57373]">✗</span>
                <span>Upload harmful, illegal, or inappropriate content</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#E57373]">✗</span>
                <span>Harass, threaten, or intimidate other users</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#E57373]">✗</span>
                <span>Impersonate any person or entity</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#E57373]">✗</span>
                <span>Upload content that infringes on intellectual property rights</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#E57373]">✗</span>
                <span>Use the App for any commercial purposes without authorization</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#E57373]">✗</span>
                <span>Attempt to reverse engineer, hack, or interfere with the App</span>
              </li>
            </ul>
            <div className="bg-[#7CB342]/10 border border-[#7CB342]/30 rounded-xl p-3">
              <p className="text-sm text-gray-800">
                <strong>You retain ownership</strong> of the photos and content you upload, but you grant Sow a worldwide, royalty-free license to use, modify, and display this content to provide and improve our services.
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <div className="bg-white rounded-2xl p-5 shadow-md mb-4">
            <h4 className="text-gray-900 mb-3">6. Intellectual Property</h4>
            <p className="text-sm text-gray-700">
              The Sow App, including its AI technology, design, logo, and all content (excluding user-generated content), is the property of Sow and protected by intellectual property laws.
            </p>
          </div>

          {/* Section 7 - Critical */}
          <div className="bg-[#E57373]/10 border-2 border-[#E57373]/30 rounded-2xl p-5 mb-4">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-6 h-6 text-[#E57373]" />
              <h4 className="text-gray-900">7. Disclaimer of Warranties</h4>
            </div>
            <p className="text-sm text-gray-800 mb-3">
              <strong>THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND. WE DO NOT GUARANTEE THAT:</strong>
            </p>
            <ul className="space-y-2 text-sm text-gray-700 mb-3">
              <li className="flex gap-2">
                <span className="text-[#E57373]">•</span>
                <span>Plant identifications will be 100% accurate</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#E57373]">•</span>
                <span>The App will be error-free or uninterrupted</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#E57373]">•</span>
                <span>Gardening advice will produce specific results</span>
              </li>
            </ul>
            <div className="bg-white rounded-xl p-3 border-2 border-[#E57373]">
              <p className="text-sm text-gray-900">
                <strong>CRITICAL SAFETY NOTICE:</strong> Never consume or use plants based solely on Sow's identification or recommendations. Always consult multiple reliable sources and professionals before using any plant for medicinal or culinary purposes.
              </p>
            </div>
          </div>

          {/* Section 8 */}
          <div className="bg-white rounded-2xl p-5 shadow-md mb-4">
            <h4 className="text-gray-900 mb-3">8. Limitation of Liability</h4>
            <p className="text-sm text-gray-700 mb-3">
              TO THE FULLEST EXTENT PERMITTED BY LAW, SOW SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES RESULTING FROM:
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex gap-2">
                <span className="text-[#7CB342]">•</span>
                <span>Your use or inability to use the App</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#7CB342]">•</span>
                <span>Inaccurate plant identifications</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#7CB342]">•</span>
                <span>Actions taken based on gardening advice</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#7CB342]">•</span>
                <span>Unauthorized access to your information</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#7CB342]">•</span>
                <span>Any other matter relating to the App</span>
              </li>
            </ul>
          </div>

          {/* Section 9 */}
          <div className="bg-white rounded-2xl p-5 shadow-md mb-4">
            <h4 className="text-gray-900 mb-3">9. Indemnification</h4>
            <p className="text-sm text-gray-700">
              You agree to indemnify and hold harmless Sow and its affiliates from any claims, damages, or expenses arising from your use of the App, your violation of these terms, or your violation of any rights of another.
            </p>
          </div>

          {/* Section 10 */}
          <div className="bg-white rounded-2xl p-5 shadow-md mb-4">
            <h4 className="text-gray-900 mb-3">10. Termination</h4>
            <p className="text-sm text-gray-700">
              We may suspend or terminate your account at any time for violation of these terms. You may terminate your account at any time through the App settings.
            </p>
          </div>

          {/* Section 11 */}
          <div className="bg-white rounded-2xl p-5 shadow-md mb-4">
            <h4 className="text-gray-900 mb-3">11. Third-Party Services</h4>
            <p className="text-sm text-gray-700">
              The App may integrate with or link to third-party services (weather data, payment processors, etc.). We are not responsible for these services and encourage you to review their terms and policies.
            </p>
          </div>

          {/* Section 12 */}
          <div className="bg-white rounded-2xl p-5 shadow-md mb-4">
            <h4 className="text-gray-900 mb-3">12. Modifications to Terms</h4>
            <p className="text-sm text-gray-700">
              We reserve the right to modify these terms at any time. We will notify you of significant changes through the App or via email. Continued use after changes constitutes acceptance of the modified terms.
            </p>
          </div>

          {/* Section 13 */}
          <div className="bg-white rounded-2xl p-5 shadow-md mb-4">
            <div className="flex items-center gap-2 mb-3">
              <Gavel className="w-5 h-5 text-[#2E8B57]" />
              <h4 className="text-gray-900">13. Governing Law</h4>
            </div>
            <p className="text-sm text-gray-700">
              These terms shall be governed by the laws of [Your State/Country], without regard to its conflict of law provisions.
            </p>
          </div>

          {/* Section 14 */}
          <div className="bg-white rounded-2xl p-5 shadow-md mb-4">
            <h4 className="text-gray-900 mb-3">14. Dispute Resolution</h4>
            <p className="text-sm text-gray-700">
              Most concerns can be resolved quickly by contacting us at support@sowapp.com. If we cannot resolve a dispute informally, you agree to resolve any claim through binding arbitration or small claims court rather than in courts of general jurisdiction.
            </p>
          </div>

          {/* Section 15 - Contact */}
          <div className="bg-gradient-to-br from-[#2E8B57]/10 to-[#7CB342]/10 rounded-2xl p-5 border-2 border-[#7CB342]/20 mb-4">
            <h4 className="text-gray-900 mb-3">15. Contact Information</h4>
            <p className="text-sm text-gray-700 mb-3">
              For questions about these Terms of Service, please contact us at:
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#2E8B57]" />
                <a href="mailto:legal@sowapp.com" className="text-[#2E8B57]">legal@sowapp.com</a>
              </div>
            </div>
          </div>

          {/* Agreement Notice */}
          <div className="bg-gradient-to-br from-[#FFD54F]/20 to-[#FFB74D]/10 border-2 border-[#FFD54F]/30 rounded-2xl p-4 mb-4">
            <p className="text-sm text-gray-900">
              <strong>By using Sow, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</strong>
            </p>
          </div>

          {/* Legal Notice */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4">
            <p className="text-xs text-blue-800">
              <strong>Legal Notice:</strong> This is a template Terms of Service and should be reviewed by a qualified legal professional to ensure compliance with all applicable laws and regulations in your jurisdiction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
