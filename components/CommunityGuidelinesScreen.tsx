import React from 'react';
import { ChevronLeft, Heart, Users, Shield, CheckCircle, XCircle, AlertTriangle, Camera, Award, Mail } from 'lucide-react';

interface CommunityGuidelinesScreenProps {
  onClose: () => void;
}

export function CommunityGuidelinesScreen({ onClose }: CommunityGuidelinesScreenProps) {
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
        <h3 className="text-gray-900">Community Guidelines</h3>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-4 pt-6">
          {/* Header */}
          <div className="bg-gradient-to-br from-[#7CB342]/20 to-[#2E8B57]/10 rounded-2xl p-6 mb-6 border-2 border-[#7CB342]/30">
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-8 h-8 text-[#2E8B57]" />
              <h3 className="text-gray-900">Welcome to Sow's Community! 🌿</h3>
            </div>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Last Updated:</strong> November 24, 2024
            </p>
            <p className="text-sm text-gray-700">
              Our community is a space for plant lovers to connect, learn, and grow together. These guidelines help ensure Sow remains a safe, respectful, and enriching environment for everyone.
            </p>
          </div>

          {/* Core Values */}
          <div className="mb-6">
            <h4 className="text-gray-900 mb-3">Our Core Values</h4>
            
            <div className="space-y-3">
              {/* Value 1 */}
              <div className="bg-white rounded-2xl p-5 shadow-md">
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="w-5 h-5 text-[#E57373]" />
                  <h4 className="text-gray-900">1. Cultivate Kindness</h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-[#7CB342]">•</span>
                    <span>Treat all members with respect and patience</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#7CB342]">•</span>
                    <span>Remember there are beginners and experts here—be supportive of all skill levels</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#7CB342]">•</span>
                    <span>Offer constructive advice, not criticism</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#7CB342]">•</span>
                    <span>Assume good intentions in all interactions</span>
                  </li>
                </ul>
              </div>

              {/* Value 2 */}
              <div className="bg-white rounded-2xl p-5 shadow-md">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-5 h-5 text-[#FFD54F]" />
                  <h4 className="text-gray-900">2. Share Knowledge Safely</h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-[#7CB342]">•</span>
                    <span>Always include clear disclaimers: "I'm not a professional, but..."</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#7CB342]">•</span>
                    <span>Never encourage consuming or using plants without proper verification</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#7CB342]">•</span>
                    <span>Cite sources when sharing scientific or medical information</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#7CB342]">•</span>
                    <span>Acknowledge when something is personal experience vs. proven fact</span>
                  </li>
                </ul>
              </div>

              {/* Value 3 */}
              <div className="bg-white rounded-2xl p-5 shadow-md">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-[#2E8B57]" />
                  <h4 className="text-gray-900">3. Grow Together</h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-[#7CB342]">•</span>
                    <span>Celebrate each other's gardening successes</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#7CB342]">•</span>
                    <span>Share both failures and successes—we learn from both</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#7CB342]">•</span>
                    <span>Help identify plants when you can, but be honest about uncertainty</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#7CB342]">•</span>
                    <span>Welcome new members and make them feel included</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* What We Encourage */}
          <div className="bg-gradient-to-br from-[#7CB342]/10 to-[#2E8B57]/5 rounded-2xl p-5 border-2 border-[#7CB342]/20 mb-4">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle className="w-6 h-6 text-[#7CB342]" />
              <h4 className="text-gray-900">What We Encourage ✅</h4>
            </div>
            
            <div className="space-y-3">
              <div>
                <h4 className="text-sm text-gray-900 mb-2">🌟 Positive Contributions:</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-[#7CB342]">•</span>
                    <span>High-quality photos of plants with clear details</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#7CB342]">•</span>
                    <span>Detailed care experiences and what worked for you</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#7CB342]">•</span>
                    <span>Helpful answers to gardening questions</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#7CB342]">•</span>
                    <span>Before-and-after plant transformation stories</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#7CB342]">•</span>
                    <span>Regional gardening tips specific to your area</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#7CB342]">•</span>
                    <span>Scientific and well-researched information</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm text-gray-900 mb-2">🏆 Community Recognition:</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex gap-2">
                    <Award className="w-4 h-4 text-[#FFD54F] mt-0.5" />
                    <span>"Expert Answer" badges for particularly helpful responses</span>
                  </li>
                  <li className="flex gap-2">
                    <Award className="w-4 h-4 text-[#7CB342] mt-0.5" />
                    <span>"Plant Parent" achievements for successful care stories</span>
                  </li>
                  <li className="flex gap-2">
                    <Award className="w-4 h-4 text-[#2E8B57] mt-0.5" />
                    <span>"Community Helper" status for active, positive members</span>
                  </li>
                  <li className="flex gap-2">
                    <Award className="w-4 h-4 text-[#FFB74D] mt-0.5" />
                    <span>Seasonal challenges and gardening projects</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* What We Don't Allow */}
          <div className="bg-[#E57373]/10 border-2 border-[#E57373]/30 rounded-2xl p-5 mb-4">
            <div className="flex items-center gap-2 mb-3">
              <XCircle className="w-6 h-6 text-[#E57373]" />
              <h4 className="text-gray-900">What We Don't Allow ❌</h4>
            </div>

            <div className="space-y-3">
              <div>
                <h4 className="text-sm text-gray-900 mb-2">Prohibited Content:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-[#E57373]">✗</span>
                    <div>
                      <strong>Dangerous Advice:</strong> Suggestions to consume toxic plants or unsafe remedies
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#E57373]">✗</span>
                    <div>
                      <strong>Medical Claims:</strong> "This plant cures [disease]" without scientific backing
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#E57373]">✗</span>
                    <div>
                      <strong>Harassment:</strong> Bullying, hate speech, or personal attacks
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#E57373]">✗</span>
                    <div>
                      <strong>Spam:</strong> Repeated promotional content or off-topic posts
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#E57373]">✗</span>
                    <div>
                      <strong>Misinformation:</strong> Deliberately false plant identification or care advice
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#E57373]">✗</span>
                    <div>
                      <strong>Inappropriate Content:</strong> Offensive, sexual, or violent material
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#E57373]">✗</span>
                    <div>
                      <strong>Privacy Violations:</strong> Sharing others' personal information
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-3">
                <h4 className="text-sm text-gray-900 mb-2">Plant Identification Etiquette:</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-[#7CB342]">•</span>
                    <span>Don't guess if you're uncertain—it's okay to say "I don't know"</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#7CB342]">•</span>
                    <span>Always mention when an identification is uncertain</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#7CB342]">•</span>
                    <span>Use the "Look-alike Warning" feature for potentially dangerous plants</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#7CB342]">•</span>
                    <span>Respect that even experts can be wrong sometimes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Safety First */}
          <div className="bg-gradient-to-br from-[#FFD54F]/20 to-[#FFB74D]/10 border-2 border-[#FFD54F]/40 rounded-2xl p-5 mb-4">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-6 h-6 text-[#FFB74D]" />
              <h4 className="text-gray-900">Safety First: Critical Rules</h4>
            </div>

            <div className="space-y-3">
              <div>
                <h4 className="text-sm text-gray-900 mb-2">⚠️ Plant Consumption Warnings:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-[#FFB74D]">•</span>
                    <span>Never advise someone to eat a plant based solely on app identification</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#FFB74D]">•</span>
                    <span>Always include: "Consult multiple reliable sources before consuming any plant"</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#FFB74D]">•</span>
                    <span>Use trigger words that alert moderators: "eat," "drink," "tea," "medicine"</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#FFB74D]">•</span>
                    <span>Report any posts that encourage unsafe plant use</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-3 border-2 border-[#E57373]">
                <h4 className="text-sm text-gray-900 mb-2">⚠️ Emergency Situations:</h4>
                <p className="text-sm text-gray-700 mb-2">
                  If someone posts about plant poisoning symptoms, allergic reactions, or other medical emergencies:
                </p>
                <div className="bg-[#E57373]/10 rounded-lg p-2">
                  <p className="text-sm text-gray-900">
                    <strong>Respond with:</strong> "This sounds serious—please contact poison control or seek medical attention immediately. Here are emergency resources: [List local emergency contacts]"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Photo Standards */}
          <div className="bg-white rounded-2xl p-5 shadow-md mb-4">
            <div className="flex items-center gap-2 mb-3">
              <Camera className="w-5 h-5 text-[#7CB342]" />
              <h4 className="text-gray-900">Photo and Content Standards</h4>
            </div>

            <div className="space-y-3 text-sm text-gray-700">
              <div>
                <h4 className="text-sm text-gray-900 mb-2">Quality Matters:</h4>
                <ul className="space-y-1">
                  <li className="flex gap-2">
                    <span className="text-[#7CB342]">•</span>
                    <span>Post clear, well-lit plant photos</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#7CB342]">•</span>
                    <span>Include multiple angles when possible (leaves, flowers, stem, overall plant)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#7CB342]">•</span>
                    <span>Describe your location and growing conditions</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#7CB342]">•</span>
                    <span>Credit sources when sharing others' content</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm text-gray-900 mb-2">Original Content Preferred:</h4>
                <ul className="space-y-1">
                  <li className="flex gap-2">
                    <span className="text-[#7CB342]">•</span>
                    <span>Share your own plants and experiences when possible</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#7CB342]">•</span>
                    <span>Give credit when reposting others' content</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#7CB342]">•</span>
                    <span>Don't claim professional photography as your own</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Reporting */}
          <div className="bg-white rounded-2xl p-5 shadow-md mb-4">
            <h4 className="text-gray-900 mb-3">Reporting and Moderation</h4>
            
            <div className="space-y-3 text-sm text-gray-700">
              <div>
                <h4 className="text-sm text-gray-900 mb-2">How to Report:</h4>
                <p className="mb-2">Use the report feature for:</p>
                <ul className="space-y-1">
                  <li className="flex gap-2">
                    <span className="text-[#E57373]">•</span>
                    <span>Unsafe advice</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#E57373]">•</span>
                    <span>Harassment or bullying</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#E57373]">•</span>
                    <span>Spam or scams</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#E57373]">•</span>
                    <span>Inappropriate content</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#E57373]">•</span>
                    <span>Misinformation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#7CB342]/10 rounded-xl p-3">
                <h4 className="text-sm text-gray-900 mb-2">Our Moderation Approach:</h4>
                <ul className="space-y-1">
                  <li className="flex gap-2">
                    <span className="text-[#7CB342]">1.</span>
                    <span><strong>First violation:</strong> Warning and content removal</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#7CB342]">2.</span>
                    <span><strong>Repeat violations:</strong> Temporary suspension</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#7CB342]">3.</span>
                    <span><strong>Severe violations:</strong> Immediate and permanent ban</span>
                  </li>
                </ul>
                <p className="mt-2 text-xs text-gray-600">
                  We reserve the right to remove any content that violates these guidelines.
                </p>
              </div>
            </div>
          </div>

          {/* Expert Verification */}
          <div className="bg-gradient-to-br from-[#FFD54F]/20 to-[#FFB74D]/10 rounded-2xl p-5 border-2 border-[#FFD54F]/30 mb-4">
            <div className="flex items-center gap-2 mb-3">
              <Award className="w-6 h-6 text-[#FFD54F]" />
              <h4 className="text-gray-900">Expert Verification</h4>
            </div>

            <div className="space-y-3 text-sm text-gray-700">
              <div>
                <h4 className="text-sm text-gray-900 mb-2">Becoming a Verified Expert:</h4>
                <p className="mb-2">We offer verification for:</p>
                <ul className="space-y-1">
                  <li className="flex gap-2">
                    <span className="text-[#FFD54F]">•</span>
                    <span>Professional botanists and horticulturists</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#FFD54F]">•</span>
                    <span>Certified master gardeners</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#FFD54F]">•</span>
                    <span>Academic researchers in relevant fields</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#FFD54F]">•</span>
                    <span>Professional landscapers and nursery owners</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-3">
                <h4 className="text-sm text-gray-900 mb-2">Verified experts get:</h4>
                <ul className="space-y-1">
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-[#7CB342] mt-0.5" />
                    <span>Special badge on their profile</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-[#7CB342] mt-0.5" />
                    <span>Priority in community answers</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-[#7CB342] mt-0.5" />
                    <span>Opportunities to lead workshops</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-[#7CB342] mt-0.5" />
                    <span>Increased visibility for their contributions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Conflict Resolution */}
          <div className="bg-white rounded-2xl p-5 shadow-md mb-4">
            <h4 className="text-gray-900 mb-3">Conflict Resolution</h4>
            
            <div className="space-y-3 text-sm text-gray-700">
              <div>
                <h4 className="text-sm text-gray-900 mb-2">Disagreeing Respectfully:</h4>
                <div className="space-y-2">
                  <div className="bg-[#7CB342]/10 rounded-lg p-2 flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#7CB342] mt-0.5 flex-shrink-0" />
                    <span>"I've had a different experience with this plant..."</span>
                  </div>
                  <div className="bg-[#7CB342]/10 rounded-lg p-2 flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#7CB342] mt-0.5 flex-shrink-0" />
                    <span>"The research I've seen suggests..."</span>
                  </div>
                  <div className="bg-[#7CB342]/10 rounded-lg p-2 flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#7CB342] mt-0.5 flex-shrink-0" />
                    <span>"In my region, we find that..."</span>
                  </div>
                  <div className="bg-[#E57373]/10 rounded-lg p-2 flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-[#E57373] mt-0.5 flex-shrink-0" />
                    <span>Avoid: "You're wrong" or "That's stupid"</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm text-gray-900 mb-2">Handling Disagreements:</h4>
                <ul className="space-y-1">
                  <li className="flex gap-2">
                    <span className="text-[#7CB342]">•</span>
                    <span>Focus on the gardening topic, not the person</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#7CB342]">•</span>
                    <span>Cite reliable sources when possible</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#7CB342]">•</span>
                    <span>Agree to disagree when appropriate</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#7CB342]">•</span>
                    <span>Report if a discussion becomes personal or hostile</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Commercial Content */}
          <div className="bg-white rounded-2xl p-5 shadow-md mb-4">
            <h4 className="text-gray-900 mb-3">Commercial Content Policy</h4>
            
            <div className="space-y-3 text-sm text-gray-700">
              <div>
                <h4 className="text-sm text-gray-900 mb-2">Allowed with Disclosure:</h4>
                <ul className="space-y-1">
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-[#7CB342] mt-0.5" />
                    <span>Nursery owners sharing their plants</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-[#7CB342] mt-0.5" />
                    <span>Gardening bloggers sharing their content</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-[#7CB342] mt-0.5" />
                    <span>Authors promoting relevant books</span>
                  </li>
                </ul>
                <p className="mt-2 text-xs bg-[#FFD54F]/10 rounded-lg p-2">
                  <strong>Must include:</strong> #affiliate or #ad when appropriate
                </p>
              </div>

              <div>
                <h4 className="text-sm text-gray-900 mb-2">Not Allowed:</h4>
                <ul className="space-y-1">
                  <li className="flex gap-2">
                    <XCircle className="w-4 h-4 text-[#E57373] mt-0.5" />
                    <span>Direct sales in posts or comments</span>
                  </li>
                  <li className="flex gap-2">
                    <XCircle className="w-4 h-4 text-[#E57373] mt-0.5" />
                    <span>Multi-level marketing promotions</span>
                  </li>
                  <li className="flex gap-2">
                    <XCircle className="w-4 h-4 text-[#E57373] mt-0.5" />
                    <span>Unsolicited business solicitations</span>
                  </li>
                  <li className="flex gap-2">
                    <XCircle className="w-4 h-4 text-[#E57373] mt-0.5" />
                    <span>Fake reviews or incentivized ratings</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-br from-[#2E8B57]/10 to-[#7CB342]/10 rounded-2xl p-5 border-2 border-[#7CB342]/20 mb-4">
            <h4 className="text-gray-900 mb-3">Need Help?</h4>
            <p className="text-sm text-gray-700 mb-3">Contact our moderation team:</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-[#2E8B57]">•</span>
                <span><strong>In-app:</strong> Use the "Report" feature or "Help & Support"</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#2E8B57]" />
                <a href="mailto:community@sowapp.com" className="text-[#2E8B57]">community@sowapp.com</a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2E8B57]">•</span>
                <span><strong>Response time:</strong> We aim to address reports within 24 hours</span>
              </li>
            </ul>
          </div>

          {/* Footer */}
          <div className="bg-gradient-to-br from-[#FFD54F]/20 to-[#FFB74D]/10 border-2 border-[#FFD54F]/30 rounded-2xl p-4 mb-4">
            <p className="text-sm text-gray-900 text-center">
              <strong>Remember: We're all here because we love plants. Let's grow together in kindness, knowledge, and respect. 🌿</strong>
            </p>
          </div>

          {/* Agreement Notice */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4">
            <p className="text-xs text-blue-800">
              By participating in the Sow community, you agree to follow these guidelines. Violations may result in content removal or account restrictions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
