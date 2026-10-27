import React, { useState } from 'react'
import defaultBottomsImg from '../../assets/shop-the-edit/bottoms.jpg'
import defaultDressesImg from '../../assets/shop-the-edit/dresses.jpg'
import defaultTopsImg from '../../assets/shop-the-edit/tops.jpg'

const defaultCards = [
  {
    id: 'bottoms',
    category: 'BOTTOMS',
    image: defaultBottomsImg,
    alt: 'Model in cropped black jacket and black split front trousers',
    link: '#bottoms',
  },
  {
    id: 'dresses',
    category: 'DRESSES',
    image: defaultDressesImg,
    alt: 'Model in cream sleeveless flared maxi dress with red handbag',
    link: '#dresses',
  },
  {
    id: 'tops',
    category: 'TOPS',
    image: defaultTopsImg,
    alt: 'Model in white structured pointed-collar blouse and brown trousers',
    link: '#tops',
  },
]

export default function ShopTheEdit({
  title = {
    line1: 'SHOP',
    line2: 'THE EDIT',
  },
  description = [
    'Discover thoughtfully styled pieces',
    'that make every outfit feel',
    'effortlessly chic. Shop the edit and',
    'find your next wardrobe favourite.',
  ],
  button = {
    text: 'Shop Now',
    link: '#shop-edit',
  },
  cards = defaultCards,
  initialActiveId = 'tops',
  onShopNow,
  onCardClick,
}) {
  const [activeId, setActiveId] = useState(initialActiveId)
  const cardList = cards && cards.length > 0 ? cards : defaultCards

  const line1 = title?.line1 || 'SHOP'
  const line2 = title?.line2 || 'THE EDIT'
  const buttonText = button?.text || 'Shop Now'
  const buttonLink = button?.link || '#shop-edit'

  const activeIndex = cardList.findIndex((c) => c.id === activeId)
  const currentIndex = activeIndex >= 0 ? activeIndex : 2

  // Exact desktop proportional coordinates matching 1024x435 reference
  // Standard card width: 13.43% (137.5px), Active card width: 30.27% (310px), Gap: 2.83% (29px), Left margin: 4.20% (43px)
  const getDesktopCardStyle = (index) => {
    const isActive = index === currentIndex
    const stdW = 13.43
    const actW = 30.27
    const gap = 2.83
    let leftPct = 4.20

    for (let i = 0; i < index; i++) {
      leftPct += (i === currentIndex ? actW : stdW) + gap
    }

    return {
      left: `${leftPct.toFixed(2)}%`,
      width: `${isActive ? actW : stdW}%`,
      top: '9.89%',
      height: '83.68%',
    }
  }

  const descLines = Array.isArray(description)
    ? description
    : typeof description === 'string'
    ? description.split('\n')
    : [
        'Discover thoughtfully styled pieces',
        'that make every outfit feel',
        'effortlessly chic. Shop the edit and',
        'find your next wardrobe favourite.',
      ]

  return (
    <section className="relative w-full max-w-[1920px] mx-auto bg-[#F0EDDE] overflow-hidden select-none">
      
      {/* ============================================================== */}
      {/* 1. Desktop & Tablet Layout (>= md): Full-Screen Fluid Scale     */}
      {/* ============================================================== */}
      <div className="hidden md:block relative w-full aspect-[1024/435] min-h-[435px] max-h-[850px]">
        
        {/* 1A. 3 Interactive Capsule Lookbook Cards */}
        {cardList.slice(0, 3).map((card, index) => {
          const isActive = card.id === activeId
          const cardStyle = getDesktopCardStyle(index)
          const imgSrc = typeof card.image === 'string' ? card.image : (card.image?.src || card.image)
          const imgAlt = card.alt || card.category

          return (
            <div
              key={card.id}
              onClick={() => {
                setActiveId(card.id)
                if (onCardClick) onCardClick(card)
              }}
              style={cardStyle}
              className={`absolute overflow-hidden rounded-[16px] transition-all duration-500 ease-out cursor-pointer shadow-xs hover:shadow-md ${
                isActive ? 'z-20' : 'z-10 hover:opacity-95'
              }`}
            >
              <img
                src={imgSrc}
                alt={imgAlt}
                className="w-full h-full object-cover object-center select-none"
                loading="lazy"
              />

              {/* Active Card Labels & Actions */}
              {isActive && (
                <>
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />
                  <div className="absolute inset-x-0 bottom-0 px-[7.7%] pb-[6.8%] flex items-end justify-between pointer-events-auto">
                    <span className="font-serif font-normal text-white text-[clamp(14px,1.75vw,26px)] tracking-[0.14em] uppercase block leading-none">
                      {card.category}
                    </span>
                    <a
                      href={card.link || '#shop'}
                      onClick={(e) => {
                        e.stopPropagation()
                        if (onCardClick) onCardClick(card)
                      }}
                      className="font-sans font-normal text-white/95 hover:text-white transition-colors text-[clamp(10px,1.17vw,17px)] inline-flex items-center gap-1.5 leading-none cursor-pointer group/btn"
                    >
                      <span>Shop</span>
                      <span className="inline-block transition-transform duration-200 group-hover/btn:translate-x-1 text-[clamp(11px,1.25vw,19px)]">
                        &rarr;
                      </span>
                    </a>
                  </div>
                </>
              )}
            </div>
          )
        })}

        {/* 1B. Right Editorial Headline Line 1 ("SHOP") */}
        <div className="absolute right-[4.20%] top-[20.9%] z-20 pointer-events-none text-right">
          <h2 className="font-serif font-normal text-[#171515] text-[clamp(30px,3.8vw,70px)] uppercase leading-none tracking-normal">
            {line1}
          </h2>
        </div>

        {/* 1C. Right Editorial Headline Line 2 ("THE EDIT") */}
        <div className="absolute right-[4.20%] top-[32.6%] z-20 pointer-events-none text-right">
          <h2 className="font-serif font-normal text-[#97173A] text-[clamp(30px,3.8vw,70px)] uppercase leading-none tracking-normal whitespace-nowrap">
            {line2}
          </h2>
        </div>

        {/* 1D. Description Paragraph (Right-Aligned, Exact Line Breaks) */}
        {descLines && (
          <div className="absolute right-[4.10%] top-[49.5%] z-20 pointer-events-none text-right">
            <p className="font-serif font-normal text-[#222222] text-[clamp(10px,1.14vw,17px)] leading-[1.38] opacity-95">
              {descLines.map((line, idx) => (
                <span key={idx} className="block whitespace-nowrap">
                  {line}
                </span>
              ))}
            </p>
          </div>
        )}

        {/* 1E. CTA "Shop Now" Button */}
        {buttonText && (
          <div className="absolute right-[4.10%] top-[70.80%] z-20 pointer-events-auto text-right">
            <a
              href={buttonLink}
              onClick={onShopNow}
              className="inline-flex items-center justify-center bg-[#97173A] hover:bg-[#801431] text-white text-[clamp(9.5px,1.07vw,15px)] font-sans font-medium w-[clamp(88px,8.98vw,145px)] h-[clamp(28px,2.83vw,46px)] rounded-[4px] transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer"
            >
              <span>{buttonText}</span>
            </a>
          </div>
        )}

      </div>

      {/* ============================================================== */}
      {/* 2. Mobile Layout (< md): Adaptive Stacked Editorial Flow        */}
      {/* ============================================================== */}
      <div className="flex md:hidden flex-col px-5 py-8 gap-6 text-right">
        
        {/* Mobile Headline */}
        <div>
          <h2 className="font-serif font-normal text-[36px] uppercase leading-none tracking-normal">
            <span className="block text-[#171515]">{line1}</span>
            <span className="block text-[#97173A] mt-1.5">{line2}</span>
          </h2>
        </div>

        {/* Mobile Cards Row */}
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-2">
          {cardList.map((card) => {
            const isActive = card.id === activeId
            const imgSrc = typeof card.image === 'string' ? card.image : (card.image?.src || card.image)
            const imgAlt = card.alt || card.category

            return (
              <div
                key={card.id}
                onClick={() => {
                  setActiveId(card.id)
                  if (onCardClick) onCardClick(card)
                }}
                className={`relative shrink-0 h-[280px] rounded-[16px] overflow-hidden transition-all duration-300 ${
                  isActive ? 'w-[200px] shadow-md' : 'w-[110px] opacity-90'
                }`}
              >
                <img
                  src={imgSrc}
                  alt={imgAlt}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                {isActive && (
                  <>
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-3 flex items-center justify-between text-white">
                      <span className="font-serif text-[13px] tracking-wider uppercase">
                        {card.category}
                      </span>
                      <span className="text-[11px]">&rarr;</span>
                    </div>
                  </>
                )}
              </div>
            )
          })}
        </div>

        {/* Description & Action */}
        <div className="flex flex-col items-end gap-4">
          {descLines && (
            <p className="font-serif font-normal text-[#222222] text-[12.5px] leading-relaxed max-w-[280px]">
              {descLines.join(' ')}
            </p>
          )}

          {buttonText && (
            <a
              href={buttonLink}
              onClick={onShopNow}
              className="inline-flex items-center justify-center bg-[#97173A] hover:bg-[#801431] text-white text-[11px] font-sans font-medium px-5 h-[32px] rounded-[4px] shadow-xs"
            >
              <span>{buttonText}</span>
            </a>
          )}
        </div>

      </div>

    </section>
  )
}
