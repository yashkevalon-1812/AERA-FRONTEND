import React, { useState } from 'react'
import defaultCard1 from '../../assets/new-arrivals/card-1.jpg'
import defaultCard2 from '../../assets/new-arrivals/card-2.jpg'
import defaultCard3 from '../../assets/new-arrivals/card-3.jpg'
import defaultCard4 from '../../assets/new-arrivals/card-4.jpg'
import defaultCard5 from '../../assets/new-arrivals/card-5.jpg'

const defaultItems = [
  {
    id: 1,
    image: defaultCard1,
    alt: 'Model posing in cream mock neck top and black wide-leg trousers',
    category: 'For Her',
    title: 'Pleated Trouser',
    link: '#shop-trouser',
  },
  {
    id: 2,
    image: defaultCard2,
    alt: 'Couple modeling matching white oversized graphic t-shirts with cargo shorts',
    category: 'For Couple',
    title: 'Oversized Tshirt',
    link: '#shop-oversized-tshirt',
  },
  {
    id: 3,
    image: defaultCard3,
    alt: 'Model in black knitwear and beige trousers sitting on studio stool',
    category: 'For Him',
    title: 'Minimalist Knitwear',
    link: '#shop-knitwear',
  },
  {
    id: 4,
    image: defaultCard4,
    alt: 'Model in chocolate brown satin halter top and wide-leg trousers with sunglasses',
    category: 'For Her',
    title: 'Satin Halter Top',
    link: '#shop-halter',
  },
  {
    id: 5,
    image: defaultCard5,
    alt: 'Model in terracotta linen button-down shirt and beige trousers',
    category: 'For Him',
    title: 'Linen Button-down',
    link: '#shop-linen',
  },
]

export default function NewArrivals({
  title = 'New Arrivals',
  tagline = 'THE LATEST PIECES, JUST IN.',
  viewAll = {
    text: 'VIEW ALL',
    link: '#view-all',
  },
  activeSlide: initialSlide = 2,
  items = defaultItems,
  onViewAll,
  onItemClick,
}) {
  const [activeSlide, setActiveSlide] = useState(initialSlide)
  const productItems = items && items.length > 0 ? items : defaultItems

  // Calculate percentage coordinates for desktop 5-card layout
  // Matching 1024x436 reference composition:
  // Card 1: 43px..220px (left: 4.2%, w: 17.3%)
  // Card 2 (Active): 220px..452px (left: 21.5%, w: 22.7%, top: 22.9%, h: 67.2%)
  // Card 3: 452px..628px (left: 44.1%, w: 17.2%)
  // Card 4: 628px..805px (left: 61.3%, w: 17.3%)
  // Card 5: 805px..982px (left: 78.6%, w: 17.3%)

  const activeIndex = Math.min(Math.max(activeSlide - 1, 0), productItems.length - 1)
  const activeProduct = productItems[activeIndex] || productItems[1]

  const getDesktopCardStyle = (index) => {
    const isActive = index === activeIndex
    
    // Exact 1024 baseline coordinates when activeIndex is 1 (Card 2)
    if (activeIndex === 1) {
      if (index === 0) return { left: '4.2%', width: '17.3%', top: '31.0%', height: '51.1%', zIndex: 10 }
      if (index === 1) return { left: '21.5%', width: '22.7%', top: '22.9%', height: '67.2%', zIndex: 20 }
      if (index === 2) return { left: '44.1%', width: '17.2%', top: '31.0%', height: '51.1%', zIndex: 10 }
      if (index === 3) return { left: '61.3%', width: '17.3%', top: '31.0%', height: '51.1%', zIndex: 10 }
      if (index === 4) return { left: '78.6%', width: '17.3%', top: '31.0%', height: '51.1%', zIndex: 10 }
    }

    // Dynamic general formula for arbitrary active index
    const stdWidthPct = 17.26
    const actWidthPct = 22.66
    let leftPct = 4.20
    for (let i = 0; i < index; i++) {
      leftPct += i === activeIndex ? actWidthPct : stdWidthPct
    }

    return {
      left: `${leftPct.toFixed(2)}%`,
      width: `${isActive ? actWidthPct : stdWidthPct}%`,
      top: isActive ? '22.9%' : '31.0%',
      height: isActive ? '67.2%' : '51.1%',
      zIndex: isActive ? 20 : 10,
    }
  }

  return (
    <section className="relative w-full max-w-[1920px] mx-auto bg-[#84463b] overflow-hidden select-none">
      
      {/* ============================================================== */}
      {/* 1. Desktop & Tablet Layout (>= md): Pixel-Perfect Strip       */}
      {/* ============================================================== */}
      <div className="hidden md:block relative w-full aspect-[1024/436] min-h-[440px] max-h-[820px]">
        
        {/* 1A. Top-Left Section Title ("New Arrivals") */}
        <div className="absolute left-[4.2%] top-[8.9%] z-10 pointer-events-none select-none">
          <h2 className="font-serif font-normal text-[#F8F5E8] text-[26px] md:text-[30px] lg:text-[35px] xl:text-[42px] 2xl:text-[48px] tracking-normal leading-none">
            {title}
          </h2>
        </div>

        {/* 1B. Top-Right Subtitle & View All Action */}
        <div className="absolute right-[4.1%] top-[10.8%] z-10 text-right flex flex-col items-end pointer-events-auto">
          {tagline && (
            <span className="font-sans font-normal text-[#F8F5E8]/80 text-[8px] md:text-[9px] lg:text-[10px] xl:text-[11.5px] 2xl:text-[13px] tracking-[0.14em] uppercase block leading-tight">
              {tagline}
            </span>
          )}
          {viewAll?.text && (
            <a
              href={viewAll?.link || '#view-all'}
              onClick={onViewAll}
              className="font-sans font-medium text-[#F8F5E8] hover:text-white transition-colors text-[9.5px] md:text-[10.5px] lg:text-[12px] xl:text-[13.5px] 2xl:text-[15px] tracking-[0.06em] uppercase inline-flex items-center gap-1.5 mt-1 cursor-pointer group"
            >
              <span>{viewAll?.text}</span>
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                &rarr;
              </span>
            </a>
          )}
        </div>

        {/* 1C. Cards Filmstrip */}
        {productItems.slice(0, 5).map((item, index) => {
          const isActive = index === activeIndex
          const cardStyle = getDesktopCardStyle(index)
          const imgSrc = typeof item.image === 'string' ? item.image : (item.image?.src || item.image)
          const imgAlt = item.alt || item.title || `Lookbook image ${index + 1}`

          return (
            <div
              key={item.id || index}
              onClick={() => setActiveSlide(index + 1)}
              style={cardStyle}
              className={`absolute overflow-hidden transition-all duration-300 cursor-pointer ${
                isActive ? 'shadow-2xl' : 'hover:opacity-95'
              }`}
            >
              <img
                src={imgSrc}
                alt={imgAlt}
                className="w-full h-full object-cover object-center select-none"
                loading="lazy"
              />

              {/* Active Card Text Overlay (Render for cards other than Card 2 which has embedded original text) */}
              {isActive && index !== 1 && (
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 md:p-4 lg:p-5 bg-gradient-to-t from-black/80 via-black/35 to-transparent flex flex-col justify-end text-left pointer-events-auto">
                  {item.category && (
                    <span className="font-sans font-normal text-white/90 text-[8.5px] md:text-[9.5px] lg:text-[11px] xl:text-[12px] tracking-wide mb-0.5">
                      {item.category}
                    </span>
                  )}
                  {item.title && (
                    <h3 className="font-sans font-semibold text-white text-[14px] md:text-[16px] lg:text-[18px] xl:text-[21px] leading-tight mb-1.5 tracking-tight">
                      {item.title}
                    </h3>
                  )}
                  <a
                    href={item.link || '#shop'}
                    onClick={(e) => {
                      e.stopPropagation()
                      if (onItemClick) onItemClick(item, e)
                    }}
                    className="font-sans font-normal text-white hover:text-white/80 transition-colors text-[10px] md:text-[11px] lg:text-[12px] xl:text-[13px] inline-flex items-center gap-1 group/shop cursor-pointer w-fit"
                  >
                    <span>Shop</span>
                    <span className="inline-block transition-transform duration-200 group-hover/shop:translate-x-1">
                      &rarr;
                    </span>
                  </a>
                </div>
              )}

              {/* Accessible interactive Shop link for Card 2 */}
              {isActive && index === 1 && (
                <a
                  href={item.link || '#shop'}
                  onClick={(e) => {
                    e.stopPropagation()
                    if (onItemClick) onItemClick(item, e)
                  }}
                  aria-label="Shop Oversized Tshirt"
                  className="absolute left-[6%] bottom-[5%] w-[40%] h-[15%] cursor-pointer z-30"
                />
              )}
            </div>
          )
        })}

        {/* 1D. Bottom-Right Pagination & Progress Track */}
        <div className="absolute right-[4.1%] bottom-[8.5%] z-20 flex items-center gap-4 lg:gap-5 pointer-events-auto">
          
          {/* Progress Bar Track */}
          <div className="relative w-[110px] md:w-[130px] lg:w-[147px] h-[2px] bg-[#d9d9d9] overflow-hidden">
            <div
              className="h-full bg-[#7ebcff] transition-all duration-300"
              style={{
                width:
                  activeSlide === 1
                    ? '33.3%'
                    : activeSlide === 2
                    ? '66.7%'
                    : activeSlide === 3
                    ? '83.3%'
                    : '100%',
              }}
            />
          </div>

          {/* Slide Numbers */}
          <div className="flex items-center gap-2.5 lg:gap-3.5">
            {[1, 2, 3, 4].map((num) => {
              const isActive = num === activeSlide
              return (
                <button
                  key={num}
                  type="button"
                  onClick={() => setActiveSlide(num)}
                  aria-label={`Go to slide ${num}`}
                  className={`transition-all duration-200 cursor-pointer select-none leading-none flex items-center justify-center ${
                    isActive
                      ? 'font-sans font-bold text-[#F8F5E8] text-[18px] md:text-[20px] lg:text-[22px]'
                      : 'font-sans font-normal text-[#b6c3d1] hover:text-white text-[11px] md:text-[12px] lg:text-[13px]'
                  }`}
                >
                  {num}
                </button>
              )
            })}
          </div>

        </div>

      </div>

      {/* ============================================================== */}
      {/* 2. Mobile Layout (< md): Adaptive Prominent Carousel Flow      */}
      {/* ============================================================== */}
      <div className="flex md:hidden flex-col px-5 py-8 gap-5 text-left">
        
        {/* Mobile Header */}
        <div className="flex items-end justify-between border-b border-[#F8F5E8]/15 pb-4">
          <div>
            <span className="font-sans font-normal text-[#F8F5E8]/80 text-[10px] tracking-[0.16em] uppercase block mb-1">
              {tagline}
            </span>
            <h2 className="font-serif font-normal text-[#F8F5E8] text-[28px] tracking-normal leading-none">
              {title}
            </h2>
          </div>
          {viewAll?.text && (
            <a
              href={viewAll?.link || '#view-all'}
              onClick={onViewAll}
              className="font-sans font-medium text-[#F8F5E8] text-[12px] tracking-[0.08em] uppercase inline-flex items-center gap-1 group pb-0.5 cursor-pointer"
            >
              <span>{viewAll?.text}</span>
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
            </a>
          )}
        </div>

        {/* Mobile Featured Active Card */}
        <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-xl">
          <img
            src={
              typeof activeProduct.image === 'string'
                ? activeProduct.image
                : (activeProduct.image?.src || activeProduct.image)
            }
            alt={activeProduct.alt || activeProduct.title}
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />

          {/* If activeIndex !== 1, render text overlay */}
          {activeIndex !== 1 ? (
            <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end">
              <span className="font-sans font-normal text-white/90 text-[11px] tracking-wide mb-1">
                {activeProduct.category}
              </span>
              <h3 className="font-sans font-semibold text-white text-[20px] leading-tight mb-2 tracking-tight">
                {activeProduct.title}
              </h3>
              <a
                href={activeProduct.link || '#shop'}
                onClick={(e) => onItemClick && onItemClick(activeProduct, e)}
                className="font-sans font-normal text-white text-[13px] inline-flex items-center gap-1.5 cursor-pointer w-fit"
              >
                <span>Shop</span>
                <span>&rarr;</span>
              </a>
            </div>
          ) : (
            <a
              href={activeProduct.link || '#shop'}
              onClick={(e) => onItemClick && onItemClick(activeProduct, e)}
              aria-label="Shop Oversized Tshirt"
              className="absolute left-[6%] bottom-[5%] w-[45%] h-[15%] cursor-pointer z-30"
            />
          )}
        </div>

        {/* Mobile Thumbnail Selectors */}
        <div className="grid grid-cols-5 gap-2 pt-1">
          {productItems.slice(0, 5).map((item, idx) => {
            const isSelected = idx === activeIndex
            const thumbSrc = typeof item.image === 'string' ? item.image : (item.image?.src || item.image)
            return (
              <button
                key={item.id || idx}
                type="button"
                onClick={() => setActiveSlide(idx + 1)}
                className={`relative aspect-[3/4] rounded-md overflow-hidden transition-all duration-200 cursor-pointer ${
                  isSelected ? 'ring-2 ring-white scale-102 shadow-md' : 'opacity-60 hover:opacity-90'
                }`}
              >
                <img
                  src={thumbSrc}
                  alt={item.title}
                  className="w-full h-full object-cover object-center"
                />
              </button>
            )
          })}
        </div>

        {/* Mobile Pagination Bar */}
        <div className="flex items-center justify-between pt-2">
          <div className="relative flex-1 mr-6 h-[2px] bg-[#d9d9d9]">
            <div
              className="h-full bg-[#7ebcff] transition-all duration-300"
              style={{ width: `${Math.min((activeSlide / 4) * 100, 100)}%` }}
            />
          </div>
          <div className="flex items-center gap-3">
            {[1, 2, 3, 4].map((num) => {
              const isActive = num === activeSlide
              return (
                <button
                  key={num}
                  type="button"
                  onClick={() => setActiveSlide(num)}
                  className={`transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'font-bold text-[#F8F5E8] text-[18px]'
                      : 'font-normal text-[#b6c3d1] text-[13px]'
                  }`}
                >
                  {num}
                </button>
              )
            })}
          </div>
        </div>

      </div>

    </section>
  )
}
