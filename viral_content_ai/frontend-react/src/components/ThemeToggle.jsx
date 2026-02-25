import { useState } from 'react'

const themes = [
  { id: 'light', emoji: '☀️', name: 'Light' },
  { id: 'dark', emoji: '🌙', name: 'Dark' },
  { id: 'reeler', emoji: '📸', name: 'Reeler' },
  { id: 'romantic', emoji: '💕', name: 'Romantic' },
]

export default function ThemeToggle({ currentTheme, onThemeChange }) {
  const [isOpen, setIsOpen] = useState(false)

  const currentEmoji = themes.find(t => t.id === currentTheme)?.emoji || '🎨'

  return (
    <div className="fixed top-6 right-6 z-[1000]">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110"
          style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border)',
            boxShadow: '0 4px 12px var(--shadow)',
          }}
        >
          {currentEmoji}
        </button>

        {isOpen && (
          <div
            className="absolute top-[60px] right-0 min-w-[180px] rounded-2xl p-2 transition-all duration-300"
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border)',
              boxShadow: '0 8px 32px var(--shadow)',
            }}
          >
            {themes.map((theme) => (
              <div
                key={theme.id}
                onClick={() => {
                  onThemeChange(theme.id)
                  setIsOpen(false)
                }}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 ${
                  currentTheme === theme.id ? 'bg-blue-50' : ''
                }`}
                style={{
                  color: 'var(--text-primary)',
                }}
                onMouseEnter={(e) => {
                  if (currentTheme !== theme.id) {
                    e.currentTarget.style.background = 'var(--bg-primary)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentTheme !== theme.id) {
                    e.currentTarget.style.background = 'transparent'
                  }
                }}
              >
                <span className="text-xl">{theme.emoji}</span>
                <span className="text-[0.95rem] font-medium">{theme.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
