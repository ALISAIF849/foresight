# 🚀 Setup Instructions

## Step 1: Install Node.js
Make sure you have Node.js 16+ installed:
```bash
node --version
```

If not installed, download from: https://nodejs.org/

## Step 2: Navigate to Project
```bash
cd viral_content_ai/frontend-react
```

## Step 3: Install Dependencies
```bash
npm install
```

This will install:
- React 18
- Vite
- Tailwind CSS
- Framer Motion
- All dev dependencies

## Step 4: Start Development Server
```bash
npm run dev
```

Open your browser to: `http://localhost:5173`

## Step 5: Customize YouTube Video (Optional)

Edit `src/components/BentoAddons.jsx` line 48:

```jsx
src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=YOUR_VIDEO_ID&controls=0"
```

Replace `YOUR_VIDEO_ID` with your actual YouTube video ID.

## 🎨 What You'll See

1. **Opening Animation** - "Create once. Be everywhere."
2. **Hero Section** - Original design preserved
3. **Bento Showcase** - NEW section with:
   - Large YouTube video card
   - Creator card with floating emoji
   - Analytics dashboard with stats
   - Social media preview cards
4. **Product Demo** - Platform previews
5. **Features Grid** - 6 feature cards
6. **Final CTA** - Call to action

## 🎯 Key Features

✅ Exact same design as original HTML version
✅ Bento section added below Hero (non-destructive)
✅ Framer Motion animations (fade in on scroll)
✅ Hover effects on all cards
✅ Fully responsive (mobile/tablet/desktop)
✅ Theme switcher (Light/Dark/Reeler/Romantic)
✅ YouTube video autoplay, muted, loop, no controls

## 🔧 Build for Production

```bash
npm run build
```

Output will be in `dist/` folder.

## 📱 Responsive Breakpoints

- Mobile: < 768px (1 column)
- Tablet: 768px - 1024px (6 columns)
- Desktop: > 1024px (12 columns)

## 🎨 Premium SaaS Feel

The design includes:
- Soft gradient glows with pulse animation
- Smooth hover lifts (translateY -8px)
- Rounded corners (rounded-3xl)
- Professional shadows (shadow-xl)
- Staggered animations on scroll
- Polished transitions throughout

## 🐛 Troubleshooting

**Port already in use?**
```bash
npm run dev -- --port 3000
```

**Dependencies not installing?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build errors?**
```bash
npm run build -- --debug
```

## 📚 Learn More

- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
