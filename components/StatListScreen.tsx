import React from 'react';
import { ChevronLeft, Leaf, Camera, Users, Calendar, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface StatListScreenProps {
  type: 'plants' | 'identified' | 'following';
  onClose: () => void;
}

export function StatListScreen({ type, onClose }: StatListScreenProps) {
  const plantsData = [
    { id: 1, name: 'Monstera Deliciosa', nickname: 'Big Leaf', addedDate: 'Oct 15, 2024', health: 95, image: 'https://images.unsplash.com/photo-1605260346600-f98d9cf022a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZXBsYW50cyUyMGluZG9vcnxlbnwxfHx8fDE3NjM4Nzk0NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { id: 2, name: 'Succulent Mix', nickname: 'Desert Trio', addedDate: 'Sep 12, 2024', health: 88, image: 'https://images.unsplash.com/photo-1654609678730-d241a2b2eb8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjdWxlbnQlMjBwbGFudHMlMjBjb2xsZWN0aW9ufGVufDF8fHx8MTc2Mzg3OTQ0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { id: 3, name: 'Garden Tomatoes', nickname: 'Summer Harvest', addedDate: 'Aug 5, 2024', health: 92, image: 'https://images.unsplash.com/photo-1735583697864-9dbbaedee928?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJkZW4lMjBwbGFudHMlMjBzdW5saWdodHxlbnwxfHx8fDE3NjM4Nzk0NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { id: 4, name: 'Cherry Blossom', nickname: 'Spring Beauty', addedDate: 'Jul 22, 2024', health: 78, image: 'https://images.unsplash.com/photo-1617836250803-24873f080562?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVycnklMjBibG9zc29tcyUyMHNwcmluZ3xlbnwxfHx8fDE3NjM4Nzk0NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { id: 5, name: 'Snake Plant', nickname: 'Night Guardian', addedDate: 'Jul 10, 2024', health: 100, image: 'https://images.unsplash.com/photo-1605260346600-f98d9cf022a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZXBsYW50cyUyMGluZG9vcnxlbnwxfHx8fDE3NjM4Nzk0NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
  ];

  const identifiedData = [
    { id: 1, name: 'Monstera Deliciosa', date: 'Nov 22, 2024', confidence: 98, location: 'Living Room', image: 'https://images.unsplash.com/photo-1605260346600-f98d9cf022a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZXBsYW50cyUyMGluZG9vcnxlbnwxfHx8fDE3NjM4Nzk0NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { id: 2, name: 'Cherry Blossom', date: 'Nov 21, 2024', confidence: 95, location: 'Park Trail', image: 'https://images.unsplash.com/photo-1617836250803-24873f080562?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVycnklMjBibG9zc29tcyUyMHNwcmluZ3xlbnwxfHx8fDE3NjM4Nzk0NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { id: 3, name: 'Succulent (Echeveria)', date: 'Nov 20, 2024', confidence: 92, location: 'Garden Center', image: 'https://images.unsplash.com/photo-1654609678730-d241a2b2eb8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjdWxlbnQlMjBwbGFudHMlMjBjb2xsZWN0aW9ufGVufDF8fHx8MTc2Mzg3OTQ0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { id: 4, name: 'Pothos', date: 'Nov 19, 2024', confidence: 99, location: 'Friend\'s House', image: 'https://images.unsplash.com/photo-1605260346600-f98d9cf022a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZXBsYW50cyUyMGluZG9vcnxlbnwxfHx8fDE3NjM4Nzk0NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { id: 5, name: 'Tomato Plant', date: 'Nov 18, 2024', confidence: 97, location: 'Backyard', image: 'https://images.unsplash.com/photo-1735583697864-9dbbaedee928?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJkZW4lMjBwbGFudHMlMjBzdW5saWdodHxlbnwxfHx8fDE3NjM4Nzk0NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
  ];

  const followingData = [
    { id: 1, name: 'Sarah Green', username: '@sarahgreen', avatar: '👩‍🌾', plants: 42, followers: 1234, verified: true },
    { id: 2, name: 'Mike Chen', username: '@mikechen', avatar: '👨‍🌾', plants: 28, followers: 856, verified: false },
    { id: 3, name: 'Emma Rose', username: '@emmarose', avatar: '👩‍🦰', plants: 67, followers: 2103, verified: true },
    { id: 4, name: 'Garden Expert', username: '@gardenexpert', avatar: '🌿', plants: 156, followers: 5421, verified: true },
    { id: 5, name: 'Plant Parent', username: '@plantparent', avatar: '🌱', plants: 34, followers: 623, verified: false },
  ];

  const getTitle = () => {
    switch (type) {
      case 'plants': return 'My Plants';
      case 'identified': return 'Identified Plants';
      case 'following': return 'Following';
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'plants': return <Leaf className="w-6 h-6 text-[#7CB342]" />;
      case 'identified': return <Camera className="w-6 h-6 text-[#FFD54F]" />;
      case 'following': return <Users className="w-6 h-6 text-[#2E8B57]" />;
    }
  };

  return (
    <div className="fixed inset-0 bg-[#F5F7FA] z-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="flex items-center gap-4 mb-3">
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
            aria-label="Go back"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <div className="flex items-center gap-3">
            {getIcon()}
            <h3 className="text-gray-900">{getTitle()}</h3>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-br from-[#2E8B57]/10 to-[#7CB342]/10 rounded-xl p-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-700">Total:</span>
            <span className="text-gray-900">
              {type === 'plants' && `${plantsData.length} plants`}
              {type === 'identified' && `${identifiedData.length} identifications`}
              {type === 'following' && `${followingData.length} users`}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-4 pt-6">
          {type === 'plants' && (
            <div className="space-y-3">
              {plantsData.map((plant, index) => (
                <div key={plant.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all">
                  <div className="flex gap-4 p-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#7CB342]/10 rounded-full flex items-center justify-center">
                      <span className="text-sm text-[#7CB342]">{index + 1}</span>
                    </div>
                    <div className="relative w-20 h-20 flex-shrink-0">
                      <ImageWithFallback
                        src={plant.image}
                        alt={plant.name}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-gray-900 mb-1 truncate">{plant.nickname}</h4>
                      <p className="text-sm text-gray-600 mb-2 truncate">{plant.name}</p>
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{plant.addedDate}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          <span>{plant.health}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {type === 'identified' && (
            <div className="space-y-3">
              {identifiedData.map((item, index) => (
                <div key={item.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all">
                  <div className="flex gap-4 p-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#FFD54F]/20 rounded-full flex items-center justify-center">
                      <span className="text-sm text-gray-900">{index + 1}</span>
                    </div>
                    <div className="relative w-20 h-20 flex-shrink-0">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-gray-900 mb-1 truncate">{item.name}</h4>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#7CB342] rounded-full"
                            style={{ width: `${item.confidence}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-[#7CB342]">{item.confidence}%</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{item.date}</span>
                        </div>
                        <span className="truncate">{item.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {type === 'following' && (
            <div className="space-y-3">
              {followingData.map((user, index) => (
                <div key={user.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all">
                  <div className="flex gap-4 p-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#2E8B57]/10 rounded-full flex items-center justify-center">
                      <span className="text-sm text-[#2E8B57]">{index + 1}</span>
                    </div>
                    <div className="w-12 h-12 bg-[#7CB342]/10 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                      {user.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-gray-900 truncate">{user.name}</h4>
                        {user.verified && (
                          <div className="bg-[#2E8B57] rounded-full p-0.5 flex-shrink-0">
                            <TrendingUp className="w-3 h-3 text-white" />
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-2 truncate">{user.username}</p>
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span>{user.plants} plants</span>
                        <span>•</span>
                        <span>{user.followers.toLocaleString()} followers</span>
                      </div>
                    </div>
                    <button className="flex-shrink-0 px-4 py-2 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors text-sm">
                      Following
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
