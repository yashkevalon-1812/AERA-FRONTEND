import { useState } from 'react'
import { Search, Heart, ShoppingBag, User, Menu, X } from 'lucide-react'

export default function Navbar({
  brandName = 'AERA',
  navLinks = [],
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

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (searchValue.trim() && onOpenSearch) {
      onOpenSearch(searchValue)
    }
  }

  return (
    <header className="relative w-full max-w-[1920px] h-[78px] opacity-100 mx-auto bg-[#F8F5E8] border-b border-[#ECE7D6]/60 sticky top-0 z-30 transition-all flex items-center">
      <div className="w-full h-[78px] px-6 sm:px-8 md:px-10 lg:px-6 xl:px-16 flex items-center justify-between relative">
        
        {/* Left: Dynamic Navigation Links */}
        <nav className="hidden lg:flex items-center gap-3.5 xl:gap-8 flex-1">
          {navLinks.map((link) => {
            const isActive = activeNav === link.id
            return (
              <button
                key={link.id}
                onClick={() => setActiveNav(link.id)}
                className={`text-[11.5px] xl:text-[12.5px] font-medium tracking-[0.10em] xl:tracking-[0.16em] uppercase transition-colors duration-200 cursor-pointer ${
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

        {/* Center: Dynamic Brand Logo (Exact Figma CSS: 96x36, Cormorant Garamond 600, 36px, letter-spacing: 0px) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
          <button
            onClick={() => setActiveNav('HOME')}
            className="w-[96px] h-[36px] opacity-100 cursor-pointer group flex items-center justify-center select-none"
            aria-label={`${brandName} Home`}
          >
            <span className="font-serif font-semibold text-[36px] leading-[36px] tracking-[0px] uppercase w-[96px] h-[36px] inline-block text-center opacity-100 text-[#171515] group-hover:text-[#97173a] transition-colors">
              {brandName}
            </span>
          </button>
        </div>

        {/* Right: Search + Action Icons */}
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
              className="w-32 md:w-44 lg:w-48 xl:w-52 h-[34px] pl-3.5 pr-8 bg-[#F3EFE0]/80 border border-[#E4DEC9] rounded-full text-xs font-sans text-[#171515] placeholder-[#9E9788] focus:outline-none focus:border-[#97173a] focus:bg-white transition-all"
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
