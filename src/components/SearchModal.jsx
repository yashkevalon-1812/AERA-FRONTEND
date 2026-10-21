import { useState, useEffect, useRef } from 'react'
import { Search, X, ArrowRight } from 'lucide-react'

export default function SearchModal({
  isOpen,
  onClose,
  initialQuery = '',
  onSelectProduct,
}) {
  const [query, setQuery] = useState(initialQuery)
  const inputRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      setQuery(initialQuery)
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [isOpen, initialQuery])

  if (!isOpen) return null

  const quickCategories = ['Silk Shirts', 'Pleated Trousers', 'Evening Dresses', 'Sequined Skirts', 'Ties & Blouses']

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex items-start justify-center pt-20 px-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />
      <div className="relative w-full max-w-2xl bg-[#F8F5E8] rounded-2xl shadow-2xl border border-[#DFD7C2] p-6 z-10 text-[#171515]">
        <div className="flex items-center gap-3 border-b border-[#DFD7C2] pb-4">
          <Search size={20} className="text-[#97173a]" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search silhouettes, styles, collections..."
            className="flex-1 bg-transparent border-none text-base sm:text-lg font-serif placeholder-[#9E9788] focus:outline-none text-[#171515]"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-[#9E9788] hover:text-[#171515] cursor-pointer"
            >
              <X size={16} />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 text-[#171515] hover:text-[#97173a] rounded-full hover:bg-black/5 cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        <div className="pt-4">
          <p className="text-xs font-semibold tracking-wider uppercase text-[#7D7668] mb-2.5">
            Suggested Searches
          </p>
          <div className="flex flex-wrap gap-2">
            {quickCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setQuery(cat)}
                className="text-xs bg-white/70 hover:bg-[#97173a] hover:text-white border border-[#DFD7C2] px-3 py-1.5 rounded-full transition-colors cursor-pointer text-[#171515]"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {query.trim() && (
          <div className="mt-6 pt-4 border-t border-[#DFD7C2]/60">
            <p className="text-xs text-[#7D7668] mb-3">
              Press Enter to view all results for "<span className="font-semibold text-[#171515]">{query}</span>"
            </p>
            <button
              onClick={onClose}
              className="w-full bg-[#97173a] text-white py-2.5 rounded-lg text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-[#7e122f] transition-colors cursor-pointer"
            >
              <span>Explore Collection</span>
              <ArrowRight size={14} />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
