export default function OpeningAnimation({ show }) {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-[9999] overflow-hidden transition-all duration-800 ${
        show ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'
      }`}
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="text-center animate-[quoteEnter_2.2s_cubic-bezier(0.22,1,0.36,1)_forwards]">
        <h1 
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight"
          style={{ color: 'var(--text-primary)' }}
        >
          Create once.
        </h1>
        <h2 
          className="text-2xl md:text-3xl font-medium opacity-70"
          style={{ color: 'var(--text-primary)' }}
        >
          Be everywhere.
        </h2>
      </div>
    </div>
  )
}
