import React from 'react';
import { ChevronLeft, Shield, Eye, Lock, MapPin, Mail } from 'lucide-react';

interface PrivacyPolicyScreenProps {
  onClose: () => void;
}

export function PrivacyPolicyScreen({ onClose }: PrivacyPolicyScreenProps) {
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
        <h3 className="text-gray-900">Privacy Policy</h3>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-4 pt-6">
          {/* Header */}
          <div className="bg-gradient-to-br from-[#2E8B57]/10 to-[#7CB342]/10 rounded-2xl p-6 mb-6 border-2 border-[#7CB342]/20">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="w-8 h-8 text-[#2E8B57]" />
              <h3 className="text-gray-900">Privacy Policy for SOW</h3>
            </div>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Last Updated:</strong> November 24, 2024
            </p>
            <p className="text-sm text-gray-700">
              Welcome to SOW! This privacy policy explains how we collect, use, disclose, and safeguard your information when you use our plant identification and gardening application.
            </p>
          </div>

          {/* Section 1 */}
          <div className="bg-white rounded-2xl p-5 shadow-md mb-4">
            <h4 className="text-gray-900 mb-3">1. Information We Collect</h4>
            
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-[#7CB342]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs text-[#7CB342]">A</span>
                  </div>
                  <h4 className="text-sm text-gray-900">Information You Provide Directly:</h4>
                </div>
                <ul className="ml-8 space-y-2 text-sm text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-[#7CB342]">•</span>
                    <div>
                      <strong>Account Information:</strong> When you create an account, we collect your username, email address, and password.
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#7CB342]">•</span>
                    <div>
                      <strong>User Content:</strong> This includes the photos you upload for plant identification, the plants you save to "My Garden," your care notes, journal entries, and any posts, comments, or messages you submit to the community features.
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#7CB342]">•</span>
                    <div>
                      <strong>Payment Information:</strong> For SOW Pro subscriptions, payment is processed by third-party platforms (e.g., Apple App Store, Google Play Store, Stripe). We do not store your full credit card details on our servers. We receive only confirmation of your payment and your subscription details.
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-[#7CB342]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs text-[#7CB342]">B</span>
                  </div>
                  <h4 className="text-sm text-gray-900">Information Collected Automatically:</h4>
                </div>
                <ul className="ml-8 space-y-2 text-sm text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-[#7CB342]">•</span>
                    <div>
                      <strong>Usage Data:</strong> We collect data about how you interact with the App, such as the features you use, the plants you identify, the time spent on the App, and your interactions with other users.
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#7CB342]">•</span>
                    <div>
                      <strong>Device Information:</strong> We collect your device type, operating system, unique device identifiers, and mobile network information.
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#7CB342]">•</span>
                    <div className="bg-[#FFD54F]/10 p-3 rounded-xl border border-[#FFD54F]/30 -ml-2">
                      <div className="flex items-start gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-[#FFB74D] flex-shrink-0 mt-0.5" />
                        <strong className="text-gray-900">Location Data (Crucial for Core Features):</strong>
                      </div>
                      <p className="mb-2">
                        With your explicit permission, we collect your <strong>approximate or precise location</strong>.
                      </p>
                      <p className="mb-2">
                        <strong>Why?</strong> This is essential for providing accurate plant identification (by narrowing down species native to your area), sending you localized frost and weather alerts, and showing you relevant hardiness zone information.
                      </p>
                      <p className="text-xs text-gray-600">
                        You can disable location services in your device settings, but this will limit these core features.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-[#7CB342]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs text-[#7CB342]">C</span>
                  </div>
                  <h4 className="text-sm text-gray-900">Plant Identification Data:</h4>
                </div>
                <p className="ml-8 text-sm text-gray-700">
                  The photos you submit for identification are processed by our AI and machine learning models to identify plants. These images may be stored to help us improve the accuracy of our identification services.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-white rounded-2xl p-5 shadow-md mb-4">
            <h4 className="text-gray-900 mb-3">2. How We Use Your Information</h4>
            <p className="text-sm text-gray-700 mb-3">We use the information we collect to:</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex gap-2">
                <span className="text-[#7CB342]">•</span>
                <div><strong>Provide and Maintain the Service:</strong> Identify plants, manage your garden collections, and facilitate community interactions.</div>
              </li>
              <li className="flex gap-2">
                <span className="text-[#7CB342]">•</span>
                <div><strong>Personalize Your Experience:</strong> Show you plants and content relevant to your location and interests.</div>
              </li>
              <li className="flex gap-2">
                <span className="text-[#7CB342]">•</span>
                <div><strong>Send Critical Alerts:</strong> Deliver frost, heat, and plant care reminders you have requested.</div>
              </li>
              <li className="flex gap-2">
                <span className="text-[#7CB342]">•</span>
                <div><strong>Improve and Develop Our Services:</strong> Train and improve our AI identification models (using anonymized and aggregated data where possible).</div>
              </li>
              <li className="flex gap-2">
                <span className="text-[#7CB342]">•</span>
                <div><strong>Process Your Payments:</strong> Manage your SOW Pro subscription.</div>
              </li>
              <li className="flex gap-2">
                <span className="text-[#7CB342]">•</span>
                <div><strong>Communicate with You:</strong> Send you service-related announcements and respond to your support requests.</div>
              </li>
              <li className="flex gap-2">
                <span className="text-[#7CB342]">•</span>
                <div><strong>Ensure Safety and Security:</strong> Detect and prevent fraud, abuse, and illegal activities.</div>
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="bg-white rounded-2xl p-5 shadow-md mb-4">
            <h4 className="text-gray-900 mb-3">3. How We Share Your Information</h4>
            <p className="text-sm text-gray-700 mb-3">
              <strong>We do not sell your personal data.</strong> We may share your information in the following limited circumstances:
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex gap-2">
                <span className="text-[#7CB342]">•</span>
                <div><strong>With Your Consent:</strong> For example, when you publicly post a plant photo and comment to the community feed.</div>
              </li>
              <li className="flex gap-2">
                <span className="text-[#7CB342]">•</span>
                <div><strong>Service Providers:</strong> We share data with trusted third-party vendors who perform services for us, such as cloud hosting, data analysis, payment processing, and customer support. These partners are bound by strict data protection obligations.</div>
              </li>
              <li className="flex gap-2">
                <span className="text-[#7CB342]">•</span>
                <div><strong>For Legal Reasons:</strong> We may disclose information if required by law, such as to comply with a subpoena or similar legal process.</div>
              </li>
              <li className="flex gap-2">
                <span className="text-[#7CB342]">•</span>
                <div><strong>Academic Research (Anonymized):</strong> We may share aggregated, non-personally identifiable plant data with academic or research institutions to contribute to botanical and ecological science.</div>
              </li>
              <li className="flex gap-2">
                <span className="text-[#7CB342]">•</span>
                <div><strong>Business Transfers:</strong> In the event of a merger, sale, or acquisition, user information may be transferred as a business asset.</div>
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="bg-white rounded-2xl p-5 shadow-md mb-4">
            <h4 className="text-gray-900 mb-3">4. Your Choices and Controls</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex gap-2">
                <span className="text-[#7CB342]">•</span>
                <div><strong>Account Information:</strong> You can review and update your account information at any time in the "Profile" tab.</div>
              </li>
              <li className="flex gap-2">
                <span className="text-[#7CB342]">•</span>
                <div><strong>Location Services:</strong> You can enable or disable location services via your device settings.</div>
              </li>
              <li className="flex gap-2">
                <span className="text-[#7CB342]">•</span>
                <div><strong>Push Notifications:</strong> You can manage your alert and notification preferences in the App's settings.</div>
              </li>
              <li className="flex gap-2">
                <span className="text-[#7CB342]">•</span>
                <div><strong>Data Deletion:</strong> You can delete your account and associated data at any time through the App settings or by contacting us. This will remove your personal information, including your garden data and community posts.</div>
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="bg-white rounded-2xl p-5 shadow-md mb-4">
            <h4 className="text-gray-900 mb-3">5. Data Security</h4>
            <p className="text-sm text-gray-700">
              We implement robust security measures designed to protect your personal information from unauthorized access, alteration, or destruction. However, no electronic transmission or storage method is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          {/* Section 6 */}
          <div className="bg-white rounded-2xl p-5 shadow-md mb-4">
            <h4 className="text-gray-900 mb-3">6. Children's Privacy</h4>
            <p className="text-sm text-gray-700">
              SOW is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we learn we have collected such information, we will delete it immediately.
            </p>
          </div>

          {/* Section 7 */}
          <div className="bg-white rounded-2xl p-5 shadow-md mb-4">
            <h4 className="text-gray-900 mb-3">7. Changes to This Privacy Policy</h4>
            <p className="text-sm text-gray-700">
              We may update this policy from time to time. We will notify you of any changes by posting the new policy in the App and updating the "Last Updated" date. Your continued use of the App after any change signifies your acceptance of the updated policy.
            </p>
          </div>

          {/* Section 8 */}
          <div className="bg-white rounded-2xl p-5 shadow-md mb-4">
            <h4 className="text-gray-900 mb-3">8. International Data Transfers</h4>
            <p className="text-sm text-gray-700">
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with this policy.
            </p>
          </div>

          {/* Section 9 - Contact */}
          <div className="bg-gradient-to-br from-[#2E8B57]/10 to-[#7CB342]/10 rounded-2xl p-5 border-2 border-[#7CB342]/20 mb-4">
            <h4 className="text-gray-900 mb-3">9. Contact Us</h4>
            <p className="text-sm text-gray-700 mb-3">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Mail className="w-4 h-4 text-[#2E8B57]" />
                <a href="mailto:privacy@sowapp.com" className="text-[#2E8B57]">privacy@sowapp.com</a>
              </div>
            </div>
          </div>

          {/* Legal Notice */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4">
            <p className="text-xs text-blue-800">
              <strong>Legal Notice:</strong> This policy is a template and should be reviewed by a qualified legal professional to ensure it complies with all applicable laws in your region, such as the GDPR (General Data Protection Regulation) in Europe or the CCPA (California Consumer Privacy Act) in California.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
