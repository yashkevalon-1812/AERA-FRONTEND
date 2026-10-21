import { X, Heart, ShoppingBag } from 'lucide-react'

export default function WishlistModal({
  isOpen,
  onClose,
  wishlistItems = [],
  onRemoveFromWishlist,
  onAddToCart,
}) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#F8F5E8] shadow-2xl flex flex-col border-l border-[#E2DCB] text-[#171515]">
          <div className="p-5 sm:p-6 border-b border-[#E8E2D0] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Heart size={20} className="text-[#97173a]" />
              <h2 className="font-serif text-xl sm:text-2xl font-semibold tracking-wider uppercase text-[#171515]">
                My Wishlist
              </h2>
              <span className="text-xs bg-[#97173a]/10 text-[#97173a] font-semibold px-2 py-0.5 rounded-full">
                {wishlistItems.length}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-[#171515] hover:text-[#97173a] transition-colors rounded-full hover:bg-black/5 cursor-pointer"
              aria-label="Close wishlist"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
            {wishlistItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <Heart size={44} strokeWidth={1.2} className="text-[#C8C0AA] mb-4" />
                <p className="font-serif text-lg text-[#171515] mb-1">Your wishlist is empty</p>
                <p className="text-xs text-[#7D7668] max-w-xs">
                  Save pieces you love to build your bespoke AERA wardrobe.
                </p>
              </div>
            ) : (
              wishlistItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-3.5 bg-white/70 rounded-xl border border-[#ECE6D5]"
                >
                  <img
                    src={item.image || '/hero_models_perfect.png'}
                    alt={item.name}
                    className="w-20 h-24 object-cover object-top rounded-lg bg-[#F8F5E8]"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="font-serif text-sm font-semibold text-[#171515]">
                          {item.name}
                        </h3>
                        <button
                          onClick={() => onRemoveFromWishlist(item.id)}
                          className="text-[#999] hover:text-[#97173a] transition-colors p-0.5 cursor-pointer"
                        >
                          <X size={15} />
                        </button>
                      </div>
                      <p className="font-serif font-semibold text-[#97173a] text-sm mt-1">
                        ₹{item.price}
                      </p>
                    </div>
                    <button
                      onClick={() => onAddToCart(item)}
                      className="mt-2 w-full bg-[#97173a] hover:bg-[#7e122f] text-white text-[11px] font-semibold py-1.5 px-3 rounded-md flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <ShoppingBag size={13} />
                      <span>Move to Bag</span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
