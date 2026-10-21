import { X, Search } from 'lucide-react'

export default function MobileMenu({
  isOpen,
  onClose,
  activeNav,
  setActiveNav,
  onOpenSearch,
}) {
  if (!isOpen) return null

  const navLinks = [
    { id: 'HOME', label: 'HOME' },
    { id: 'COLLECTION', label: 'COLLECTION' },
    { id: 'ABOUT US', label: 'ABOUT US' },
    { id: 'BLOG', label: 'BLOG' },
    { id: 'CONTACT US', label: 'CONTACT US' },
  ]

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />
      <div className="fixed inset-y-0 left-0 w-[280px] sm:w-[320px] bg-[#F8F5E8] shadow-2xl p-6 flex flex-col justify-between border-r border-[#E2DCB] text-[#171515]">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-[#E8E2D0]">
            <span className="font-serif text-2xl font-bold tracking-[0.25em] text-[#171515]">
              AERA
            </span>
            <button
              onClick={onClose}
              className="p-1.5 text-[#171515] hover:text-[#97173a] transition-colors rounded-full hover:bg-black/5 cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>

          {/* Search Trigger */}
          <div className="mt-5 mb-6">
            <button
              onClick={() => {
                onClose()
                if (onOpenSearch) onOpenSearch('')
              }}
              className="w-full flex items-center justify-between px-3.5 py-2.5 bg-white/70 border border-[#DFD7C2] rounded-full text-xs text-[#7D7668] cursor-pointer"
            >
              <span>Search silhouettes...</span>
              <Search size={14} className="text-[#97173a]" />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => {
              const isActive = activeNav === link.id
              return (
                <button
                  key={link.id}
                  onClick={() => {
                    setActiveNav(link.id)
                    onClose()
                  }}
                  className={`text-left text-sm font-medium tracking-[0.18em] uppercase py-1.5 transition-colors cursor-pointer ${
                    isActive
                      ? 'text-[#97173a] font-bold border-l-2 border-[#97173a] pl-2.5'
                      : 'text-[#171515] hover:text-[#97173a]'
                  }`}
                >
                  {link.label}
                </button>
              )
            })}
          </nav>
        </div>

        {/* Footer info */}
        <div className="pt-6 border-t border-[#E8E2D0] text-xs text-[#7D7668] space-y-2">
          <p className="font-serif text-sm text-[#171515]">Autumn / Winter 2026</p>
          <p>Free Shipping on Order Above ₹1900</p>
        </div>
      </div>
    </div>
  )
}
