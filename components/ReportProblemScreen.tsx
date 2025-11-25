import React, { useState } from 'react';
import { ChevronLeft, AlertCircle, Bug, Smartphone, Image as ImageIcon, Shield, MessageSquare, User, CheckCircle, Camera } from 'lucide-react';

interface ReportProblemScreenProps {
  onClose: () => void;
}

export function ReportProblemScreen({ onClose }: ReportProblemScreenProps) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [attachedImages, setAttachedImages] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const categories = [
    { id: 'bug', label: 'Bug or Error', icon: Bug, color: 'from-red-400 to-red-500' },
    { id: 'identification', label: 'Plant ID Issue', icon: MessageSquare, color: 'from-[#7CB342] to-[#2E8B57]' },
    { id: 'account', label: 'Account Problem', icon: User, color: 'from-blue-400 to-blue-500' },
    { id: 'payment', label: 'Payment Issue', icon: Shield, color: 'from-[#FFD54F] to-[#FFB74D]' },
    { id: 'feature', label: 'Feature Request', icon: Smartphone, color: 'from-purple-400 to-purple-500' },
    { id: 'other', label: 'Other', icon: AlertCircle, color: 'from-gray-400 to-gray-500' },
  ];

  const handleSubmit = () => {
    // In a real app, this would send the report to the backend
    setSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  const handleImageAttach = () => {
    // In a real app, this would open the device's file picker
    // For now, we'll simulate adding a placeholder
    setAttachedImages(prev => [...prev, `image-${prev.length + 1}.jpg`]);
  };

  const removeImage = (index: number) => {
    setAttachedImages(prev => prev.filter((_, i) => i !== index));
  };

  if (submitted) {
    return (
      <div className="fixed inset-0 bg-[#F5F7FA] z-50 flex flex-col items-center justify-center px-4">
        <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-xl">
          <div className="w-20 h-20 bg-gradient-to-br from-[#7CB342] to-[#2E8B57] rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-gray-900 mb-2">Report Submitted!</h3>
          <p className="text-gray-600 mb-4">
            Thank you for helping us improve SOW. We'll review your report and get back to you within 24-48 hours.
          </p>
          <div className="text-sm text-gray-500">
            Closing automatically...
          </div>
        </div>
      </div>
    );
  }

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
        <h3 className="text-gray-900">Report a Problem</h3>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-4 pt-6">
          {/* Header Info */}
          <div className="bg-gradient-to-br from-[#2E8B57]/10 to-[#7CB342]/10 rounded-2xl p-5 mb-6 border-2 border-[#7CB342]/20">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-[#2E8B57] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-gray-900 mb-1">We're Here to Help</h4>
                <p className="text-sm text-gray-700">
                  Tell us what's wrong and we'll work to fix it. Your feedback helps make SOW better for everyone.
                </p>
              </div>
            </div>
          </div>

          {/* Category Selection */}
          <div className="mb-6">
            <label className="block text-gray-900 mb-3">
              What type of problem are you experiencing? <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`p-4 rounded-2xl border-2 transition-all ${
                    selectedCategory === category.id
                      ? 'border-[#2E8B57] bg-[#2E8B57]/5'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div
                    className={`w-10 h-10 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mx-auto mb-2`}
                  >
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className={`text-sm ${
                    selectedCategory === category.id ? 'text-gray-900' : 'text-gray-700'
                  }`}>
                    {category.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <label className="block text-gray-900 mb-2">
              Describe the problem <span className="text-red-500">*</span>
            </label>
            <p className="text-sm text-gray-600 mb-2">
              Please include as much detail as possible: what happened, when it happened, and what you expected to happen.
            </p>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Example: When I try to identify a plant, the app crashes after I take a photo..."
              className="w-full h-40 bg-white border-2 border-gray-200 rounded-2xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-[#2E8B57] focus:outline-none resize-none"
            />
            <div className="text-xs text-gray-500 mt-1">
              {description.length}/500 characters
            </div>
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block text-gray-900 mb-2">
              Your email address <span className="text-red-500">*</span>
            </label>
            <p className="text-sm text-gray-600 mb-2">
              We'll use this to follow up on your report.
            </p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              className="w-full bg-white border-2 border-gray-200 rounded-2xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-[#2E8B57] focus:outline-none"
            />
          </div>

          {/* Attach Screenshots */}
          <div className="mb-6">
            <label className="block text-gray-900 mb-2">
              Attach screenshots (optional)
            </label>
            <p className="text-sm text-gray-600 mb-3">
              Screenshots help us understand the problem better.
            </p>
            
            {/* Attached Images */}
            {attachedImages.length > 0 && (
              <div className="flex flex-wrap gap-3 mb-3">
                {attachedImages.map((image, index) => (
                  <div
                    key={index}
                    className="relative w-20 h-20 bg-gray-100 rounded-xl border-2 border-gray-200 flex items-center justify-center"
                  >
                    <ImageIcon className="w-8 h-8 text-gray-400" />
                    <button
                      onClick={() => removeImage(index)}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs"
                      aria-label="Remove image"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}

            <button
              onClick={handleImageAttach}
              className="w-full bg-white border-2 border-dashed border-gray-300 rounded-2xl px-4 py-6 flex flex-col items-center justify-center gap-2 hover:border-[#2E8B57] hover:bg-[#2E8B57]/5 transition-colors"
            >
              <Camera className="w-8 h-8 text-gray-400" />
              <span className="text-sm text-gray-600">
                Tap to attach images
              </span>
              <span className="text-xs text-gray-500">
                Up to 5 images, max 10MB each
              </span>
            </button>
          </div>

          {/* Device Info Notice */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4 mb-6">
            <div className="flex items-start gap-3">
              <Smartphone className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm text-blue-900 mb-1">Automatic Device Info</h4>
                <p className="text-xs text-blue-800">
                  We'll automatically include your device model, OS version, and app version to help diagnose the issue.
                </p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={!selectedCategory || !description.trim() || !email.trim()}
            className={`w-full py-4 rounded-2xl text-white transition-all ${
              !selectedCategory || !description.trim() || !email.trim()
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-gradient-to-r from-[#2E8B57] to-[#7CB342] hover:shadow-lg active:scale-[0.98]'
            }`}
          >
            Submit Report
          </button>

          {/* Help Text */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 mb-2">
              Need immediate help?
            </p>
            <a
              href="mailto:support@sowapp.com"
              className="text-sm text-[#2E8B57] hover:underline"
            >
              Email us directly at support@sowapp.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
