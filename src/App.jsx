import { useState, useEffect } from 'react'
import AnnouncementBar from './components/AnnouncementBar'
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import CartDrawer from './components/CartDrawer'
import WishlistModal from './components/WishlistModal'
import SearchModal from './components/SearchModal'
import MobileMenu from './components/MobileMenu'
import { siteConfig } from './data/siteConfig'
import { homeData } from './data/homeData'

export default function App() {
  const [activeNav, setActiveNav] = useState('HOME')
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isWishlistOpen, setIsWishlistOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchInitialQuery, setSearchInitialQuery] = useState('')

  // 100% Dynamic Cart State (Starts empty, persists in localStorage if available)
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('aera_cart')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  // 100% Dynamic Wishlist State (Starts empty, persists in localStorage if available)
  const [wishlistItems, setWishlistItems] = useState(() => {
    try {
      const saved = localStorage.getItem('aera_wishlist')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  // Synchronize cart with localStorage
  useEffect(() => {
    try {
      localStorage.setItem('aera_cart', JSON.stringify(cartItems))
    } catch {}
  }, [cartItems])

  // Synchronize wishlist with localStorage
  useEffect(() => {
    try {
      localStorage.setItem('aera_wishlist', JSON.stringify(wishlistItems))
    } catch {}
  }, [wishlistItems])

  const handleUpdateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id)
      return
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    )
  }

  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const handleAddToCart = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id)
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: (i.quantity || 1) + 1 } : i
        )
      }
      return [...prev, { ...item, quantity: 1 }]
    })
    setIsWishlistOpen(false)
    setIsCartOpen(true)
  }

  const handleRemoveFromWishlist = (id) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id))
  }

  const handleOpenSearch = (q = '') => {
    setSearchInitialQuery(q)
    setIsSearchOpen(true)
  }

  const handleShopNow = () => {
    setActiveNav('COLLECTION')
  }

  return (
    <div className="min-h-screen bg-[#F8F5E8] flex flex-col font-sans select-none overflow-x-hidden">
      {/* 1. Dynamic Burgundy Announcement Bar */}
      <AnnouncementBar message={siteConfig.announcement?.message} />

      {/* 2. Dynamic Ivory Navbar */}
      <Navbar
        brandName={siteConfig.brand?.name}
        navLinks={siteConfig.navigation}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={cartItems.reduce((acc, i) => acc + (i.quantity || 1), 0)}
        wishlistCount={wishlistItems.length}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSearch={handleOpenSearch}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      {/* 3. Main Page Content (Home page driven by dynamic data) */}
      <main className="flex-1 flex flex-col">
        {activeNav === 'HOME' ? (
          <Home data={homeData} onShopNow={handleShopNow} />
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center p-12 text-center">
            <h2 className="font-serif text-3xl font-semibold text-[#171515] mb-2">
              {activeNav}
            </h2>
            <p className="text-sm text-[#7D7668] mb-6 max-w-md">
              The {activeNav.toLowerCase()} page is part of the Autumn / Winter 2026 collection.
            </p>
            <button
              onClick={() => setActiveNav('HOME')}
              className="bg-[#97173a] text-white text-xs font-semibold px-6 py-2.5 rounded-lg hover:bg-[#7e122f] transition-colors cursor-pointer"
            >
              Return to Home
            </button>
          </div>
        )}
      </main>

      {/* 4. Interactive Drawers and Modals */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={() => alert('Proceeding to encrypted checkout...')}
      />

      <WishlistModal
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistItems={wishlistItems}
        onRemoveFromWishlist={handleRemoveFromWishlist}
        onAddToCart={handleAddToCart}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        initialQuery={searchInitialQuery}
      />

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        onOpenSearch={handleOpenSearch}
      />
    </div>
  )
}
