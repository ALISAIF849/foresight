# 📦 Complete Installation Guide

## Prerequisites

### 1. Install Node.js
Download and install Node.js 16+ from: https://nodejs.org/

**Verify installation:**
```bash
node --version
npm --version
```

You should see version numbers like:
```
v18.17.0
9.6.7
```

## Installation Methods

### Method 1: Quick Start (Windows)

Double-click `START.bat` in the `frontend-react` folder.

This will:
1. Check Node.js installation
2. Install dependencies automatically
3. Start the development server
4. Open at http://localhost:5173

### Method 2: Manual Installation (All Platforms)

#### Step 1: Navigate to Project
```bash
cd viral_content_ai/frontend-react
```

#### Step 2: Install Dependencies
```bash
npm install
```

This installs:
- react (18.2.0)
- react-dom (18.2.0)
- framer-motion (11.0.0)
- vite (5.0.0)
- tailwindcss (3.4.1)
- autoprefixer (10.4.17)
- postcss (8.4.33)

**Installation time:** ~2-3 minutes

#### Step 3: Start Development Server
```bash
npm run dev
```

**Output:**
```
  VITE v5.0.0  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

#### Step 4: Open Browser
Navigate to: `http://localhost:5173`

## Troubleshooting

### Issue: "npm: command not found"
**Solution:** Node.js is not installed or not in PATH
- Reinstall Node.js from https://nodejs.org/
- Restart your terminal/command prompt

### Issue: "Port 5173 already in use"
**Solution:** Use a different port
```bash
npm run dev -- --port 3000
```

### Issue: Dependencies fail to install
**Solution:** Clear cache and reinstall
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Issue: "Cannot find module 'vite'"
**Solution:** Dependencies not installed
```bash
npm install
```

### Issue: Blank page in browser
**Solution:** Check console for errors
- Open browser DevTools (F12)
- Check Console tab for errors
- Ensure all dependencies installed correctly

### Issue: Styles not loading
**Solution:** Rebuild Tailwind
```bash
npm run dev
```
Tailwind rebuilds automatically in dev mode.

## Verify Installation

### 1. Check File Structure
Ensure these files exist:
```
frontend-react/
├── node_modules/        ✓ Should exist after npm install
├── src/
│   ├── components/      ✓ 7 component files
│   ├── App.jsx          ✓
│   ├── main.jsx         ✓
│   └── index.css        ✓
├── package.json         ✓
└── vite.config.js       ✓
```

### 2. Check Dependencies
```bash
npm list --depth=0
```

Should show:
```
├── react@18.2.0
├── react-dom@18.2.0
├── framer-motion@11.0.0
├── vite@5.0.0
├── tailwindcss@3.4.1
└── ...
```

### 3. Test Build
```bash
npm run build
```

Should create `dist/` folder with optimized files.

### 4. Test Preview
```bash
npm run preview
```

Should serve production build at http://localhost:4173

## Development Workflow

### Daily Development
```bash
npm run dev
```
- Hot module replacement (HMR)
- Instant updates on file save
- Fast refresh for React components

### Building for Production
```bash
npm run build
```
- Optimized bundle
- Minified code
- Output in `dist/` folder

### Preview Production Build
```bash
npm run preview
```
- Test production build locally
- Verify optimizations

## Environment Setup

### VS Code (Recommended)

**Install Extensions:**
1. ES7+ React/Redux/React-Native snippets
2. Tailwind CSS IntelliSense
3. Prettier - Code formatter
4. ESLint

**Settings:**
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "tailwindCSS.experimental.classRegex": [
    ["className\\s*=\\s*['\"`]([^'\"`]*)['\"`]"]
  ]
}
```

### Other Editors

**WebStorm:** Built-in React support
**Sublime Text:** Install Babel syntax highlighting
**Atom:** Install language-babel package

## Next Steps

### 1. Customize YouTube Video
Edit `src/components/BentoAddons.jsx` line 48:
```jsx
src="https://www.youtube.com/embed/YOUR_VIDEO_ID?..."
```

### 2. Adjust Colors
Edit CSS variables in `src/index.css`:
```css
:root {
    --bg-primary: #F5F5F7;
    --accent: #0071E3;
    /* ... */
}
```

### 3. Add New Components
Create new files in `src/components/`
Import in `App.jsx`

### 4. Deploy
See deployment section in README.md

## Performance Tips

### Development
- Use `npm run dev` for fast HMR
- Keep DevTools open to monitor performance
- Use React DevTools extension

### Production
- Always run `npm run build` before deploying
- Enable gzip compression on server
- Use CDN for static assets
- Enable caching headers

## Getting Help

### Documentation
- React: https://react.dev
- Vite: https://vitejs.dev
- Tailwind: https://tailwindcss.com
- Framer Motion: https://www.framer.com/motion

### Common Commands
```bash
npm install              # Install dependencies
npm run dev              # Start dev server
npm run build            # Build for production
npm run preview          # Preview production build
npm list                 # List installed packages
npm outdated             # Check for updates
npm update               # Update packages
```

## Success Checklist

- [ ] Node.js installed (v16+)
- [ ] Dependencies installed (`node_modules/` exists)
- [ ] Dev server starts without errors
- [ ] Browser opens to http://localhost:5173
- [ ] Opening animation plays
- [ ] Theme switcher works
- [ ] All sections visible
- [ ] Bento showcase section appears below hero
- [ ] Hover effects work
- [ ] Responsive on mobile
- [ ] Build completes successfully

If all checked, you're ready to develop! 🚀
