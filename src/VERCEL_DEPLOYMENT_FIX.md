# Vercel 404 Error - Fix Guide

## 🔧 Your Issue: 404 Not Found

The 404 error at https://sow-app-two.vercel.app/ means Vercel can't find your app files. This happens when the build configuration doesn't match your project structure.

---

## ✅ **Solution: Update & Redeploy**

### **Option 1: Re-upload with vercel.json (Recommended)**

I've created a `vercel.json` file in your project that tells Vercel exactly how to build your app.

**Steps:**
1. **Download your updated code** from Figma Make (with the new `vercel.json` file)
2. **Delete your current GitHub repository** (or update it):
   ```bash
   cd /path/to/SOW-app
   git add vercel.json
   git commit -m "Add Vercel configuration"
   git push
   ```
3. **Vercel will auto-deploy** the update
4. Wait 2-3 minutes for the build
5. Your app should work! ✅

---

### **Option 2: Update Vercel Settings Manually**

If you don't want to re-upload:

1. Go to: https://vercel.com/dashboard
2. Click your **sow-app** project
3. Go to **Settings** → **General**
4. Scroll to **"Build & Development Settings"**
5. Change to:
   ```
   Framework Preset: Vite
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   Node.js Version: 18.x (or latest)
   ```
6. Click **"Save"**
7. Go to **"Deployments"** tab
8. Click **"..."** on latest deployment → **"Redeploy"**

---

## 🔍 **Common Deployment Issues**

### **Issue: "Command not found"**
**Cause:** Missing package.json or wrong build command  
**Fix:** Make sure you uploaded ALL files from Figma Make, including:
- `package.json`
- `package-lock.json` or `yarn.lock`
- `vite.config.js` or `vite.config.ts`
- `index.html`
- All source files

### **Issue: "Build failed"**
**Cause:** Dependencies not installing  
**Fix:** Check build logs in Vercel dashboard:
1. Go to **Deployments** tab
2. Click on the failed deployment
3. Read the error messages
4. Common fixes:
   - Update Node version in settings
   - Check for missing dependencies

### **Issue: Still 404 after rebuild**
**Cause:** SPA routing not configured  
**Fix:** The `vercel.json` file I created handles this with rewrites

---

## 📋 **What vercel.json Does**

The configuration file I created tells Vercel:

```json
{
  "buildCommand": "npm run build",        // How to build your app
  "outputDirectory": "dist",              // Where the built files are
  "framework": "vite",                    // What framework you're using
  "rewrites": [                           // Handle SPA routing
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

**The rewrites section is crucial** - it ensures all routes (like `/home`, `/identify`) serve your `index.html`, allowing React Router to work properly.

---

## 🚀 **Expected Result After Fix**

Once configured correctly, you should see:
- ✅ App loads at https://sow-app-two.vercel.app/
- ✅ Onboarding screen appears
- ✅ Navigation works
- ✅ All screens accessible
- ✅ PWA features enabled (install prompt, offline mode)

---

## 🆘 **Still Not Working?**

If you still get 404 after trying both options, check:

### **1. Verify Files Were Uploaded**
In your GitHub repo, you should see:
- ✅ `App.tsx`
- ✅ `index.html` (in root or public folder)
- ✅ `package.json`
- ✅ `vite.config.js` or `vite.config.ts`
- ✅ `components/` folder
- ✅ `styles/` folder
- ✅ `vercel.json`

### **2. Check Vercel Build Logs**
1. Go to Vercel dashboard
2. Click your project
3. Go to **Deployments** tab
4. Click the latest deployment
5. Scroll through the build log
6. Look for errors (red text)
7. Share the error with me if stuck!

### **3. Project Structure**
Your project should look like:
```
sow-app/
├── index.html              ← Must be here!
├── package.json            ← Must be here!
├── vercel.json             ← New file I created
├── vite.config.js/ts       ← Build config
├── App.tsx                 ← Main component
├── components/             ← All components
├── styles/                 ← CSS files
├── utils/                  ← Utility functions
└── public/                 ← Static assets
    ├── manifest.json
    └── service-worker.js
```

---

## 🎯 **Next Steps**

1. **Download updated code** from Figma Make (includes `vercel.json`)
2. **Update GitHub** repository with new files
3. **Wait for auto-deploy** or manually redeploy
4. **Test your app** at https://sow-app-two.vercel.app/

---

## 💡 **Pro Tips**

### **Custom Domain (Optional)**
Once your app works, you can add a custom domain:
1. Buy domain (e.g., sowapp.com from Namecheap ~$12/year)
2. In Vercel: Settings → Domains → Add
3. Follow DNS instructions
4. Your app will be at sowapp.com!

### **Preview Deployments**
Every time you push to GitHub:
- Vercel auto-builds and deploys
- You get a preview URL
- Main site only updates when you're ready

### **Environment Variables**
When you add Supabase later:
1. Settings → Environment Variables
2. Add your API keys securely
3. Rebuild to apply

---

## 📞 **Need Help?**

If you're still stuck, tell me:
1. ✅ Did you upload the `vercel.json` file?
2. ✅ What does the Vercel build log say?
3. ✅ Can you see all files in your GitHub repo?
4. ✅ What Framework Preset is selected in Vercel settings?

I'll help you debug! 🌱
