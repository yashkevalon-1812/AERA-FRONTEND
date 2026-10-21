import { useState } from 'react'
import { Search, Heart, ShoppingBag, User, Menu, X } from 'lucide-react'

export default function Navbar({
  activeNav,
  setActiveNav,
  onOpenCart,
  cartCount = 0,
  wishlistCount = 0,
  onOpenWishlist,
  onOpenSearch,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) {
  const [searchValue, setSearchValue] = useState('')

  const navLinks = [
    { id: 'HOME', label: 'HOME' },
    { id: 'COLLECTION', label: 'COLLECTION' },
    { id: 'ABOUT US', label: 'ABOUT US' },
    { id: 'BLOG', label: 'BLOG' },
    { id: 'CONTACT US', label: 'CONTACT US' },
  ]

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (searchValue.trim() && onOpenSearch) {
      onOpenSearch(searchValue)
    }
  }

  return (
    <header className="w-full bg-[#F8F5E8] border-b border-[#ECE7D6]/60 sticky top-0 z-30 transition-all">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 h-16 sm:h-[68px] flex items-center justify-between">
        
        {/* Left: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-8 flex-1">
          {navLinks.map((link) => {
            const isActive = activeNav === link.id
            return (
              <button
                key={link.id}
                onClick={() => setActiveNav(link.id)}
                className={`text-[12.5px] font-medium tracking-[0.16em] uppercase transition-colors duration-200 cursor-pointer ${
                  isActive
                    ? 'text-[#97173a] font-semibold'
                    : 'text-[#171515] hover:text-[#97173a]'
                }`}
              >
                {link.label}
              </button>
            )
          })}
        </nav>

        {/* Mobile: Hamburger Button */}
        <div className="flex lg:hidden items-center flex-1">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1.5 -ml-1 text-[#171515] hover:text-[#97173a] transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} strokeWidth={1.75} /> : <Menu size={22} strokeWidth={1.75} />}
          </button>
        </div>

        {/* Center: Brand Logo */}
        <div className="flex-shrink-0 text-center">
          <button
            onClick={() => setActiveNav('HOME')}
            className="cursor-pointer group inline-block"
          >
            <span className="font-serif text-[28px] sm:text-[32px] tracking-[0.26em] font-semibold text-[#171515] group-hover:text-[#97173a] transition-colors leading-none">
              AERA
            </span>
          </button>
        </div>

        {/* Right: Search + Icons */}
        <div className="flex items-center justify-end gap-3 sm:gap-4 md:gap-5 flex-1">
          {/* Rounded Pill Search Bar */}
          <form
            onSubmit={handleSearchSubmit}
            className="hidden sm:flex items-center relative"
          >
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search.."
              className="w-32 md:w-44 lg:w-48 xl:w-52 h-8 sm:h-[34px] pl-3.5 pr-8 bg-[#F3EFE0]/80 border border-[#E4DEC9] rounded-full text-xs font-sans text-[#171515] placeholder-[#9E9788] focus:outline-none focus:border-[#97173a] focus:bg-white transition-all"
            />
            <button
              type="submit"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#7D7668] hover:text-[#97173a] transition-colors cursor-pointer"
              aria-label="Search"
            >
              <Search size={14} strokeWidth={2} />
            </button>
          </form>

          {/* Mobile search icon */}
          <button
            onClick={() => onOpenSearch && onOpenSearch('')}
            className="sm:hidden p-1.5 text-[#171515] hover:text-[#97173a] transition-colors cursor-pointer"
            aria-label="Open search"
          >
            <Search size={19} strokeWidth={1.6} />
          </button>

          {/* Wishlist Heart Icon */}
          <button
            onClick={onOpenWishlist}
            className="p-1.5 text-[#171515] hover:text-[#97173a] transition-colors relative cursor-pointer"
            aria-label="Wishlist"
          >
            <Heart size={19} strokeWidth={1.6} />
            {wishlistCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#97173a] text-white text-[9px] font-bold flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Shopping Bag / Cart Icon */}
          <button
            onClick={onOpenCart}
            className="p-1.5 text-[#171515] hover:text-[#97173a] transition-colors relative cursor-pointer"
            aria-label="Shopping Cart"
          >
            <ShoppingBag size={19} strokeWidth={1.6} />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#97173a] text-white text-[9px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* User Account Icon */}
          <button
            onClick={() => alert('Account profile: Sign in or view orders')}
            className="p-1.5 text-[#171515] hover:text-[#97173a] transition-colors cursor-pointer"
            aria-label="Account"
          >
            <User size={19} strokeWidth={1.6} />
          </button>
        </div>

      </div>
    </header>
  )
}
