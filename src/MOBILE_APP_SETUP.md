# SOW Mobile App - Complete Setup Guide

## 📱 Overview

SOW is now configured as a **Progressive Web App (PWA)** with full mobile capabilities. This document outlines the complete setup for transforming SOW into a fully functioning mobile application.

## ⚠️ Preview Environment Note

**Service Worker Limitations in Preview:**
- The PWA service worker is automatically disabled in Figma Make's preview environment
- Install prompts won't appear in preview mode
- All PWA features will work normally when deployed to production (Vercel, Netlify, etc.)
- The app gracefully degrades in preview - all UI features work perfectly without PWA

## ✅ Current Implementation Status

### Implemented Features

#### 1. **Progressive Web App (PWA) Infrastructure**
- ✅ App manifest (`/public/manifest.json`)
- ✅ Service worker for offline functionality (`/public/service-worker.js`)
- ✅ Install prompt component
- ✅ Caching strategies (network-first for API, cache-first for assets)
- ✅ Background sync capabilities
- ✅ Push notification handlers

#### 2. **Mobile Utilities**
- ✅ PWA utilities (`/utils/pwa.ts`)
  - Service worker registration
  - Notification permissions
  - Install prompts
  - Storage management
  - Share API
  - Wake lock
  - Network status monitoring

- ✅ Camera utilities (`/utils/camera.ts`)
  - Camera stream access
  - Photo capture
  - Image compression
  - Front/back camera switching
  - Gallery selection

- ✅ Geolocation utilities (`/utils/geolocation.ts`)
  - GPS positioning
  - Location tracking
  - Distance calculations
  - Reverse geocoding
  - Location persistence

#### 3. **Mobile-Optimized UI**
- ✅ Responsive design (mobile-first)
- ✅ Touch-friendly interactions
- ✅ Bottom navigation
- ✅ Swipe gestures ready
- ✅ Modal screens with proper z-indexing
- ✅ Organic shapes and botanical aesthetics

---

## 🔧 Backend Requirements (Required for Full Mobile App)

To make SOW a fully functioning mobile app with real data, you need to implement the following backend services:

### Required Backend Features

#### 1. **User Authentication & Profiles**
- User registration and login
- Social authentication (Google, Apple, Facebook)
- Password reset
- Profile management
- User preferences storage

#### 2. **Database**
- **Users table**: profiles, settings, preferences
- **Plants table**: user's plant collection
- **Identifications table**: plant ID history with images
- **Community posts table**: posts, comments, likes
- **Badges table**: earned achievements
- **Frost alerts table**: location-based alerts
- **Notifications table**: push notification queue

#### 3. **File Storage**
- Plant photos (user-uploaded)
- Identification images
- Profile pictures
- Community post images

#### 4. **Real-time Features**
- Frost alert push notifications
- Community post notifications
- Badge unlock notifications
- Watering reminders

#### 5. **External API Integrations**
- **Plant Identification API** (e.g., Plant.id, Flora Incognita)
- **Weather API** for frost alerts (e.g., OpenWeatherMap, Weather API)
- **Payment Processing** for subscriptions (Stripe, RevenueCat)
- **Email Service** for notifications (SendGrid, Resend)

#### 6. **Backend Services**
- RESTful API or GraphQL endpoints
- WebSocket server for real-time features
- Background jobs for:
  - Weather monitoring
  - Frost alert calculations
  - Scheduled notifications
  - Data synchronization

---

## 🚀 Recommended Backend: Supabase

**Supabase** is ideal for SOW because it provides:

### ✅ Built-in Features
- **PostgreSQL Database**: Relational data storage
- **Authentication**: Email, OAuth, magic links
- **File Storage**: S3-compatible storage for images
- **Real-time subscriptions**: WebSocket connections
- **Row Level Security**: Data privacy and security
- **Edge Functions**: Serverless backend logic
- **REST & GraphQL APIs**: Auto-generated from database

### 📊 Database Schema Example

```sql
-- Users (handled by Supabase Auth)
-- Extended user profile
CREATE TABLE profiles (
  id UUID REFERENCES auth.users PRIMARY KEY,
  username TEXT UNIQUE,
  display_name TEXT,
  bio TEXT,
  avatar_url TEXT,
  location JSONB,
  subscription_tier TEXT DEFAULT 'free',
  subscription_expires_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Plants in user's garden
CREATE TABLE plants (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles NOT NULL,
  name TEXT NOT NULL,
  scientific_name TEXT,
  nickname TEXT,
  image_url TEXT,
  care_instructions JSONB,
  health_status TEXT,
  last_watered TIMESTAMP,
  watering_frequency INTEGER,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Plant identifications
CREATE TABLE identifications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles NOT NULL,
  image_url TEXT NOT NULL,
  plant_name TEXT,
  scientific_name TEXT,
  confidence DECIMAL,
  identification_data JSONB,
  location JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Community posts
CREATE TABLE posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles NOT NULL,
  content TEXT NOT NULL,
  image_urls TEXT[],
  likes_count INTEGER DEFAULT 0,
  comments_count INTEGER DEFAULT 0,
  plant_tag TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Frost alerts
CREATE TABLE frost_alerts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles NOT NULL,
  location JSONB NOT NULL,
  alert_time TIMESTAMP NOT NULL,
  temperature DECIMAL,
  sent BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- User badges
CREATE TABLE user_badges (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles NOT NULL,
  badge_id TEXT NOT NULL,
  earned_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, badge_id)
);
```

---

## 📲 Mobile App Deployment Options

### Option 1: PWA (Current Implementation)
**Best for**: Quick deployment, cross-platform access

- ✅ **No app store approval needed**
- ✅ **Works on iOS, Android, and desktop**
- ✅ **Instant updates**
- ✅ **Single codebase**
- ⚠️ Limited access to some native features
- ⚠️ Requires users to "install" from browser

**How to deploy:**
1. Deploy to hosting (Vercel, Netlify, Cloudflare Pages)
2. Ensure HTTPS is enabled
3. Users visit URL and install via browser

### Option 2: Native Mobile Apps (React Native)
**Best for**: App store presence, full native features

Using **Capacitor** or **React Native**:
- ✅ Full native API access
- ✅ App store distribution
- ✅ Better offline performance
- ⚠️ Separate iOS/Android builds
- ⚠️ App store approval process
- ⚠️ Larger development effort

### Option 3: Hybrid (PWA + Native Wrapper)
**Best for**: Both web and app store distribution

Using **Capacitor**:
```bash
npm install @capacitor/core @capacitor/cli
npx cap init SOW com.sowapp.mobile
npx cap add ios
npx cap add android
```

---

## 🔔 Push Notifications Setup

### 1. **Get VAPID Keys** (for web push)
```bash
npx web-push generate-vapid-keys
```

### 2. **Store keys in environment**
```env
VITE_VAPID_PUBLIC_KEY=your_public_key
VAPID_PRIVATE_KEY=your_private_key (server-side only)
```

### 3. **Subscribe users**
```typescript
import { subscribeToPushNotifications } from './utils/pwa';

const registration = await navigator.serviceWorker.ready;
const subscription = await subscribeToPushNotifications(
  registration,
  import.meta.env.VITE_VAPID_PUBLIC_KEY
);

// Send subscription to backend
await fetch('/api/push/subscribe', {
  method: 'POST',
  body: JSON.stringify(subscription),
});
```

### 4. **Send notifications from backend**
```typescript
// Using web-push library
import webpush from 'web-push';

webpush.setVapidDetails(
  'mailto:support@sowapp.com',
  process.env.VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY
);

const payload = JSON.stringify({
  title: 'Frost Alert! ❄️',
  body: 'Temperatures dropping to 32°F tonight. Protect your plants!',
  url: '/?action=home',
  tag: 'frost-alert',
});

await webpush.sendNotification(subscription, payload);
```

---

## 🌐 API Integration Examples

### Plant Identification API

**Option 1: Plant.id**
```typescript
const identifyPlant = async (imageBase64: string) => {
  const response = await fetch('https://api.plant.id/v2/identify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Api-Key': process.env.PLANT_ID_API_KEY,
    },
    body: JSON.stringify({
      images: [imageBase64],
      modifiers: ['crops_fast', 'similar_images'],
      plant_details: ['common_names', 'taxonomy', 'wiki_description'],
    }),
  });
  
  return await response.json();
};
```

### Weather/Frost Alert API

**Using OpenWeatherMap:**
```typescript
const getFrostAlert = async (lat: number, lon: number) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.OPENWEATHER_API_KEY}&units=imperial`
  );
  
  const data = await response.json();
  
  // Check for freezing temperatures in next 48 hours
  const frostAlerts = data.list.filter((forecast: any) => 
    forecast.main.temp <= 32
  );
  
  return frostAlerts;
};
```

---

## 🎨 App Icons & Screenshots

### Required Icons
Place in `/public/icons/`:
- `icon-72x72.png`
- `icon-96x96.png`
- `icon-128x128.png`
- `icon-144x144.png`
- `icon-152x152.png`
- `icon-192x192.png` (Android)
- `icon-384x384.png`
- `icon-512x512.png` (Android)
- `icon-1024x1024.png` (iOS)

### Icon Design Guidelines
- **Background**: Forest green gradient (#2E8B57 to #7CB342)
- **Icon**: White or leaf green plant/leaf symbol
- **Style**: Rounded corners (20% radius)
- **Safe area**: Keep important elements in center 80%

### App Screenshots
Place in `/public/screenshots/`:
- `home.png` - Dashboard with frost alerts
- `identify.png` - Camera screen
- `garden.png` - Plant collection
- `community.png` - Community feed

**Dimensions:**
- iOS: 1170x2532 (iPhone 13 Pro)
- Android: 1080x1920 (standard)

---

## 📋 Environment Variables

Create `.env` file:
```env
# Supabase
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key

# Plant Identification
VITE_PLANT_ID_API_KEY=your_plant_id_key

# Weather API
VITE_OPENWEATHER_API_KEY=your_weather_key

# Push Notifications
VITE_VAPID_PUBLIC_KEY=your_vapid_public_key

# Payments (Stripe)
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key

# App Config
VITE_APP_URL=https://sowapp.com
VITE_APP_ENV=production
```

---

## 🚀 Deployment Checklist

### Pre-Deployment
- [ ] Backend database setup (Supabase recommended)
- [ ] API keys configured
- [ ] Environment variables set
- [ ] App icons generated (all sizes)
- [ ] Screenshots created
- [ ] Service worker tested
- [ ] Offline functionality verified
- [ ] Push notifications configured

### PWA Deployment
- [ ] Deploy to hosting (Vercel/Netlify)
- [ ] HTTPS enabled
- [ ] Manifest linked in HTML
- [ ] Service worker registered
- [ ] Test on iOS Safari
- [ ] Test on Android Chrome
- [ ] Test install prompt

### Native App Deployment (Optional)
- [ ] Capacitor configured
- [ ] iOS build tested
- [ ] Android build tested
- [ ] App store assets prepared
- [ ] Privacy policy updated
- [ ] Submit to App Store
- [ ] Submit to Google Play

---

## 🔐 Security Considerations

### User Data Protection
- Enable Row Level Security in Supabase
- Validate all user inputs
- Sanitize uploaded images
- Implement rate limiting
- Use secure authentication tokens

### Privacy
- Collect minimal user data
- Request permissions clearly
- Provide data export
- Allow account deletion
- Comply with GDPR/CCPA

### API Keys
- Never expose private keys in client
- Use environment variables
- Rotate keys regularly
- Monitor API usage

---

## 📊 Analytics & Monitoring

### Recommended Tools
- **Sentry**: Error tracking
- **Google Analytics 4**: User analytics
- **Mixpanel**: Product analytics
- **Firebase Analytics**: Mobile events
- **Supabase Logs**: Backend monitoring

---

## 🎯 Next Steps

1. **Immediate**: Set up Supabase project and connect authentication
2. **Week 1**: Implement plant identification API integration
3. **Week 2**: Set up weather/frost alert system
4. **Week 3**: Implement payment processing
5. **Week 4**: Testing and PWA deployment
6. **Future**: Native app builds for app stores

---

## 📞 Support & Resources

- **Supabase Docs**: https://supabase.com/docs
- **PWA Guide**: https://web.dev/progressive-web-apps/
- **Capacitor Docs**: https://capacitorjs.com/docs
- **Plant.id API**: https://web.plant.id/
- **OpenWeather API**: https://openweathermap.org/api

---

## ✨ Conclusion

SOW is **ready for mobile deployment** as a PWA! The frontend is fully implemented with:
- Responsive, mobile-optimized UI
- Offline capabilities
- Install prompts
- Camera and location access
- Push notification support

**To make it fully functional**, you need to:
1. Connect to a backend (Supabase recommended)
2. Integrate plant identification API
3. Set up weather/frost alert system
4. Implement payment processing
5. Configure push notifications

The infrastructure is in place — now it's time to connect the backend services! 🌱