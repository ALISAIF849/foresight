# 🌳 Component Tree

```
App.jsx
├── ThemeToggle.jsx
│   └── Theme selector dropdown (Light/Dark/Reeler/Romantic)
│
├── OpeningAnimation.jsx
│   └── Netflix-style opening quote
│
└── Main Content (fades in after animation)
    │
    ├── Hero.jsx ⭐ UNCHANGED
    │   ├── Gradient orbs background
    │   ├── Left column: Heading + CTA button
    │   └── Right column: Floating dashboard preview
    │
    ├── BentoAddons.jsx 🆕 NEW SECTION
    │   ├── Gradient glow background (pulsing)
    │   └── Bento Grid (12 columns)
    │       ├── Large Video Card (col-span-7, row-span-2)
    │       │   ├── YouTube iframe (autoplay, muted, loop)
    │       │   └── Gradient overlay with text
    │       │
    │       ├── Creator Card (col-span-5)
    │       │   ├── Purple gradient background
    │       │   ├── Floating emoji animation
    │       │   └── Creator messaging
    │       │
    │       ├── Analytics Dashboard (col-span-5)
    │       │   ├── Header with icon
    │       │   └── 4 stat cards (2x2 grid)
    │       │       └── Each with hover scale effect
    │       │
    │       └── Social Media Preview (col-span-7)
    │           ├── Header with icon
    │           └── 3 platform cards
    │               ├── Instagram (9:16 ratio)
    │               ├── TikTok (9:16 ratio)
    │               └── YouTube (9:16 ratio)
    │
    ├── ProductDemo.jsx
    │   ├── Section heading
    │   ├── Main video placeholder
    │   └── 3 platform preview cards
    │       ├── Instagram Reel
    │       ├── YouTube Short
    │       └── TikTok
    │
    ├── Features.jsx
    │   ├── Section heading
    │   └── 6 feature cards (3 columns)
    │       ├── Auto Clips
    │       ├── AI Blog
    │       ├── Multi-Language
    │       ├── Hashtag Engine
    │       ├── Thumbnail Studio
    │       └── Voiceover Mode
    │
    └── FinalCTA.jsx
        ├── Large heading
        └── CTA button
```

## 🎯 Component Responsibilities

### App.jsx
- Main container
- Theme state management
- Opening animation timing
- Component orchestration

### ThemeToggle.jsx
- Theme selection UI
- LocalStorage persistence
- CSS variable updates

### OpeningAnimation.jsx
- Netflix-style entrance
- Fade out after 2.2s
- Quote animation

### Hero.jsx ⭐
- **UNCHANGED from original**
- Main value proposition
- Floating dashboard preview
- Gradient orb backgrounds

### BentoAddons.jsx 🆕
- **NEW ADD-ON SECTION**
- Bento grid layout
- YouTube video embed
- Analytics showcase
- Platform previews
- Framer Motion animations

### ProductDemo.jsx
- Content transformation demo
- Platform-specific previews
- Video placeholder

### Features.jsx
- Feature grid
- 6 capability cards
- Hover animations

### FinalCTA.jsx
- Final call to action
- Large heading
- CTA button

## 🎨 Animation Strategy

### Scroll-based Animations (Framer Motion)
- `useInView` hook detects when section enters viewport
- `initial={{ opacity: 0, y: 40 }}` - Start state
- `animate={{ opacity: 1, y: 0 }}` - End state
- Staggered children for sequential reveals

### Hover Animations
- `whileHover={{ y: -8 }}` - Lift effect on cards
- `whileHover={{ scale: 1.05 }}` - Scale effect on small items
- Smooth transitions with cubic-bezier easing

### Background Animations
- Gradient glow pulse (8s infinite)
- Floating animation (6s infinite)
- CSS keyframes for performance

## 📱 Responsive Behavior

### Desktop (> 1024px)
- 12-column grid
- Video card: 7 columns, 2 rows
- Creator card: 5 columns
- Analytics: 5 columns
- Social: 7 columns

### Tablet (768px - 1024px)
- 6-column grid
- All cards span full width (6 columns)
- Stacked vertically

### Mobile (< 768px)
- 1-column grid
- All cards full width
- Optimized spacing
- Smaller text sizes

## 🎭 Theme System

Themes use CSS variables:
- `--bg-primary` - Main background
- `--bg-secondary` - Card backgrounds
- `--text-primary` - Main text
- `--text-secondary` - Secondary text
- `--border` - Border colors
- `--shadow` - Shadow colors
- `--accent` - Accent color

All components use these variables for seamless theme switching.
