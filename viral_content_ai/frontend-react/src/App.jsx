import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import ThemeToggle from './components/ThemeToggle'
import OpeningAnimation from './components/OpeningAnimation'
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Dashboard'
import Upload from './pages/Upload'
import Results from './pages/Results'

function App() {
  const [showContent, setShowContent] = useState(false)
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    setTheme(savedTheme)
    document.documentElement.className = savedTheme

    const timer = setTimeout(() => {
      setShowContent(true)
    }, 2200)

    return () => clearTimeout(timer)
  }, [])

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme)
    document.documentElement.className = newTheme
    localStorage.setItem('theme', newTheme)
  }

  return (
    <Router>
      <ThemeToggle currentTheme={theme} onThemeChange={handleThemeChange} />
      <OpeningAnimation show={!showContent} />
      
      <div 
        className={`transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}
      >
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/upload/:projectId" element={<Upload />} />
          <Route path="/results/:projectId" element={<Results />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
