@echo off
echo ========================================
echo   Viral Content AI - React Frontend
echo ========================================
echo.

echo Checking Node.js installation...
node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js is not installed!
    echo Please install Node.js from: https://nodejs.org/
    pause
    exit /b 1
)

echo Node.js found!
node --version
echo.

echo Checking if dependencies are installed...
if not exist "node_modules\" (
    echo Installing dependencies...
    call npm install
    if errorlevel 1 (
        echo ERROR: Failed to install dependencies!
        pause
        exit /b 1
    )
    echo.
    echo Dependencies installed successfully!
    echo.
) else (
    echo Dependencies already installed.
    echo.
)

echo ========================================
echo   Starting Development Server...
echo ========================================
echo.
echo Server will start at: http://localhost:5173
echo.
echo What you'll see:
echo   - Opening animation (Netflix-style)
echo   - Hero section
echo   - Bento Showcase (NEW: YouTube video, analytics, social)
echo   - Product demo
echo   - Features grid
echo   - Final CTA
echo.
echo Theme Switcher: Click emoji button (top-right)
echo   - Light, Dark, Reeler, Romantic themes
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.

call npm run dev
