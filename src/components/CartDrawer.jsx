import { X, Trash2, ShoppingBag, ArrowRight } from 'lucide-react'

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems = [],
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}) {
  if (!isOpen) return null

  const subtotal = cartItems.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
    0
  )
  const freeShippingThreshold = 1900
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100)
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal)

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#F8F5E8] shadow-2xl flex flex-col border-l border-[#E2DCB] text-[#171515]">
          
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-[#E8E2D0] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag size={20} className="text-[#97173a]" />
              <h2 className="font-serif text-xl sm:text-2xl font-semibold tracking-wider uppercase text-[#171515]">
                Shopping Bag
              </h2>
              <span className="text-xs bg-[#97173a]/10 text-[#97173a] font-semibold px-2 py-0.5 rounded-full">
                {cartItems.reduce((acc, i) => acc + (i.quantity || 1), 0)}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-[#171515] hover:text-[#97173a] transition-colors rounded-full hover:bg-black/5 cursor-pointer"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>

          {/* Free Shipping Progress */}
          <div className="bg-[#97173a]/5 px-5 sm:px-6 py-3 border-b border-[#E8E2D0]/60">
            <p className="text-xs text-[#97173a] font-medium mb-1.5">
              {remainingForFreeShipping === 0 ? (
                <span className="font-semibold text-emerald-700">
                  🎉 You have unlocked Free Shipping!
                </span>
              ) : (
                <>
                  Add <span className="font-bold">₹{remainingForFreeShipping}</span> more for Free Shipping
                </>
              )}
            </p>
            <div className="w-full bg-[#E8E2D0] h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-[#97173a] h-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Item List */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <ShoppingBag size={48} strokeWidth={1.2} className="text-[#C8C0AA] mb-4" />
                <p className="font-serif text-lg text-[#171515] mb-1">Your bag is empty</p>
                <p className="text-xs text-[#7D7668] max-w-xs mb-6">
                  Explore our Autumn / Winter 2026 collection and curate your wardrobe.
                </p>
                <button
                  onClick={onClose}
                  className="bg-[#97173a] text-white text-xs font-semibold px-6 py-2.5 rounded-lg hover:bg-[#7e122f] transition-colors cursor-pointer"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
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
                          onClick={() => onRemoveItem(item.id)}
                          className="text-[#999] hover:text-[#97173a] transition-colors p-0.5 cursor-pointer"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                      <p className="text-xs text-[#7D7668] mt-0.5">
                        {item.size ? `Size: ${item.size}` : 'Standard Size'}
                      </p>
                    </div>

                    <div className="flex justify-between items-center mt-3">
                      <div className="flex items-center border border-[#DFD7C2] rounded-md bg-white">
                        <button
                          onClick={() => onUpdateQuantity(item.id, (item.quantity || 1) - 1)}
                          className="px-2 py-0.5 text-xs text-[#171515] hover:bg-[#F8F5E8] cursor-pointer"
                        >
                          -
                        </button>
                        <span className="px-2.5 py-0.5 text-xs font-medium">
                          {item.quantity || 1}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, (item.quantity || 1) + 1)}
                          className="px-2 py-0.5 text-xs text-[#171515] hover:bg-[#F8F5E8] cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                      <span className="font-serif font-semibold text-[#97173a] text-sm">
                        ₹{(item.price || 0) * (item.quantity || 1)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="p-5 sm:p-6 border-t border-[#E8E2D0] bg-white/50 space-y-3">
              <div className="flex justify-between items-center text-sm font-sans">
                <span className="text-[#6B6557]">Subtotal</span>
                <span className="font-serif text-lg font-bold text-[#171515]">
                  ₹{subtotal}
                </span>
              </div>
              <div className="flex justify-between items-center text-xs text-[#6B6557]">
                <span>Shipping</span>
                <span>{subtotal >= freeShippingThreshold ? 'FREE' : '₹150'}</span>
              </div>
              <div className="border-t border-[#E8E2D0]/60 pt-3 flex justify-between items-center">
                <span className="font-semibold text-[#171515]">Total</span>
                <span className="font-serif text-xl font-bold text-[#97173a]">
                  ₹{subtotal + (subtotal >= freeShippingThreshold ? 0 : 150)}
                </span>
              </div>
              <button
                onClick={onCheckout}
                className="w-full mt-3 bg-[#97173a] hover:bg-[#7e122f] text-white py-3 rounded-lg font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm hover:shadow-md"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight size={16} />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}
