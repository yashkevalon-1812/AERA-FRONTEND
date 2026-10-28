import React from 'react'
import defaultMenImage from '../../assets/dual-banners/men.jpg'
import defaultWomenImage from '../../assets/dual-banners/women.jpg'

export default function DualPromotionBanner({
  men = {
    eyebrow: "MEN'S EDIT",
    headline: 'THE MODERN MAN',
    subtitle: [
      'Refined Essentials. Relaxed Silhouettes.',
      'Made For Every Day.',
    ],
    promo: {
      discount: '20% OFF',
      tag: 'SELECTED STYLES',
    },
    link: '#mens-edit',
    image: defaultMenImage,
    alt: "Men's Edit - The Modern Man",
  },
  women = {
    eyebrow: "WOMEN'S EDIT",
    headline: {
      line1: 'THE NEW',
      line2: 'FEMININE',
    },
    subtitle: [
      'Modern Silhouettes, Effortless Layers And',
      'Pieces Designed To Be Remembered.',
    ],
    promo: {
      discount: '20% OFF',
      tag: 'SELECTED STYLES',
    },
    link: '#womens-edit',
    image: defaultWomenImage,
    alt: "Women's Edit - The New Feminine",
  },
  onShopMen,
  onShopWomen,
}) {
  const menSubtitleLines = Array.isArray(men?.subtitle)
    ? men.subtitle
    : typeof men?.subtitle === 'string'
    ? men.subtitle.split('\n')
    : [
        'Refined Essentials. Relaxed Silhouettes.',
        'Made For Every Day.',
      ]

  const womenSubtitleLines = Array.isArray(women?.subtitle)
    ? women.subtitle
    : typeof women?.subtitle === 'string'
    ? women.subtitle.split('\n')
    : [
        'Modern Silhouettes, Effortless Layers And',
        'Pieces Designed To Be Remembered.',
      ]

  const womenLine1 = women?.headline?.line1 || (typeof women?.headline === 'string' ? women.headline : 'THE NEW')
  const womenLine2 = women?.headline?.line2 || (typeof women?.headline === 'string' ? '' : 'FEMININE')

  return (
    <section className="relative w-full max-w-[1920px] mx-auto overflow-hidden select-none">
      
      {/* ============================================================== */}
      {/* 1. Desktop & Tablet Layout (>= md): Exact 50/50 Split Canvas  */}
      {/* Proportions calibrated to 1024x400 reference: aspect-[1024/400] */}
      {/* ============================================================== */}
      <div className="hidden md:grid grid-cols-2 relative w-full aspect-[1024/400]">
        
        {/* ============================================================ */}
        {/* LEFT BANNER: MEN'S EDIT                                      */}
        {/* ============================================================ */}
        <div 
          className="relative w-full h-full overflow-hidden bg-[#EAECEE] group cursor-pointer"
          onClick={onShopMen}
        >
          {/* Background and Model Image */}
          <img
            src={men?.image || defaultMenImage}
            alt={men?.alt || "Men's Edit"}
            className="absolute inset-0 w-full h-full object-cover object-right pointer-events-none"
          />

          {/* Eyebrow: y=116 (28.75%), x=44 (8.59%) */}
          <p 
            className="absolute font-sans font-normal uppercase text-[#554D48] tracking-[0.1em] text-[8px] lg:text-[10px] xl:text-[12px] leading-none"
            style={{ top: '28.75%', left: '8.59%' }}
          >
            {men?.eyebrow || "MEN'S EDIT"}
          </p>

          {/* Headline: y=139 (34.25%), x=44 (8.59%) */}
          <h3 
            className="absolute font-serif font-normal text-[#2E2824] uppercase text-[24.5px] lg:text-[33px] xl:text-[40px] leading-none tracking-[0.01em]"
            style={{ top: '34.25%', left: '8.59%' }}
          >
            {men?.headline || 'THE MODERN MAN'}
          </h3>

          {/* Subtitle: y=191 (47.00%), x=44 (8.59%) */}
          <div 
            className="absolute font-serif font-normal text-[#554D48] text-[10.5px] lg:text-[13px] xl:text-[15px] leading-[1.38]"
            style={{ top: '47.00%', left: '8.59%' }}
          >
            {menSubtitleLines.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>

          {/* Promotion: y=234 (57.50%), x=44 (8.59%) */}
          <div 
            className="absolute flex items-baseline leading-none"
            style={{ top: '57.50%', left: '8.59%' }}
          >
            <span className="font-serif font-medium text-[#2E2824] text-[19.5px] lg:text-[24px] xl:text-[29px] leading-none">
              {men?.promo?.discount || '20% OFF'}
            </span>
            <span className="font-sans font-normal uppercase text-[#554D48] text-[8.5px] lg:text-[10.5px] xl:text-[11.8px] tracking-[0.14em] leading-none ml-2">
              {men?.promo?.tag || 'SELECTED STYLES'}
            </span>
          </div>

          {/* Circular Button: y=271 (67.75%), x=44 (8.59%) */}
          <a
            href={men?.link || '#mens-edit'}
            onClick={(e) => {
              if (onShopMen) {
                e.preventDefault()
                onShopMen()
              }
            }}
            aria-label={men?.eyebrow || "Shop Men's Edit"}
            className="absolute w-[14px] h-[14px] lg:w-[18px] lg:h-[18px] xl:w-[22px] xl:h-[22px] rounded-full border border-[#2E2824]/80 flex items-center justify-center text-[#2E2824] group-hover:bg-[#2E2824] group-hover:text-white group-hover:border-[#2E2824] transition-all duration-300"
            style={{ top: '67.75%', left: '8.59%' }}
          >
            <svg
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[7.5px] h-[7.5px] lg:w-[9.5px] lg:h-[9.5px] xl:w-[11.5px] xl:h-[11.5px] stroke-current stroke-[1.4]"
            >
              <path d="M3 8H13M9.5 4.5L13 8L9.5 11.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* ============================================================ */}
        {/* RIGHT BANNER: WOMEN'S EDIT                                   */}
        {/* ============================================================ */}
        <div 
          className="relative w-full h-full overflow-hidden bg-[#B2C3D5] group cursor-pointer"
          onClick={onShopWomen}
        >
          {/* Background and Model Image */}
          <img
            src={women?.image || defaultWomenImage}
            alt={women?.alt || "Women's Edit"}
            className="absolute inset-0 w-full h-full object-cover object-right pointer-events-none"
          />

          {/* Eyebrow: y=95 (23.50%), x=45 (8.79%) */}
          <p 
            className="absolute font-sans font-normal uppercase text-[#3D3530] tracking-[0.1em] text-[8px] lg:text-[10px] xl:text-[12px] leading-none"
            style={{ top: '23.50%', left: '8.79%' }}
          >
            {women?.eyebrow || "WOMEN'S EDIT"}
          </p>

          {/* Headline Line 1: y=118 (28.25%), x=45 (8.79%) */}
          <h3 
            className="absolute font-serif font-normal text-[#2E2824] uppercase text-[24.5px] lg:text-[33px] xl:text-[40px] tracking-normal leading-none"
            style={{ top: '28.25%', left: '8.79%' }}
          >
            {womenLine1}
          </h3>

          {/* Headline Line 2: y=160 (38.75%), x=45 (8.79%) */}
          {womenLine2 && (
            <h3 
              className="absolute font-serif font-normal text-[#2E2824] uppercase text-[24.5px] lg:text-[33px] xl:text-[40px] tracking-normal leading-none"
              style={{ top: '38.75%', left: '8.79%' }}
            >
              {womenLine2}
            </h3>
          )}

          {/* Subtitle: y=212 (52.25%), x=45 (8.79%) */}
          <div 
            className="absolute font-serif font-normal text-[#3D3530] text-[10.5px] lg:text-[13px] xl:text-[15px] leading-[1.35]"
            style={{ top: '52.25%', left: '8.79%' }}
          >
            {womenSubtitleLines.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>

          {/* Promotion: y=255 (63.00%), x=45 (8.79%) */}
          <div 
            className="absolute flex items-baseline leading-none"
            style={{ top: '63.00%', left: '8.79%' }}
          >
            <span className="font-serif font-medium text-[#2E2824] text-[19.5px] lg:text-[24px] xl:text-[29px] leading-none">
              {women?.promo?.discount || '20% OFF'}
            </span>
            <span className="font-sans font-normal uppercase text-[#3D3530] text-[8.5px] lg:text-[10.5px] xl:text-[11.8px] tracking-[0.14em] leading-none ml-2">
              {women?.promo?.tag || 'SELECTED STYLES'}
            </span>
          </div>

          {/* Circular Button: y=291 (72.50%), x=45 (8.79%) */}
          <a
            href={women?.link || '#womens-edit'}
            onClick={(e) => {
              if (onShopWomen) {
                e.preventDefault()
                onShopWomen()
              }
            }}
            aria-label={women?.eyebrow || "Shop Women's Edit"}
            className="absolute w-[14px] h-[14px] lg:w-[18px] lg:h-[18px] xl:w-[22px] xl:h-[22px] rounded-full border border-[#2E2824]/80 flex items-center justify-center text-[#2E2824] group-hover:bg-[#2E2824] group-hover:text-white group-hover:border-[#2E2824] transition-all duration-300"
            style={{ top: '72.50%', left: '8.79%' }}
          >
            <svg
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[7.5px] h-[7.5px] lg:w-[9.5px] lg:h-[9.5px] xl:w-[11.5px] xl:h-[11.5px] stroke-current stroke-[1.4]"
            >
              <path d="M3 8H13M9.5 4.5L13 8L9.5 11.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

      </div>

      {/* ============================================================== */}
      {/* 2. Mobile Layout (< md): Clean Stacked Editorial Cards        */}
      {/* ============================================================== */}
      <div className="block md:hidden w-full flex flex-col">
        
        {/* Mobile Left Banner: MEN'S EDIT */}
        <div 
          className="relative w-full aspect-[512/400] overflow-hidden bg-[#EAECEE] cursor-pointer"
          onClick={onShopMen}
        >
          <img
            src={men?.image || defaultMenImage}
            alt={men?.alt || "Men's Edit"}
            className="absolute inset-0 w-full h-full object-cover object-right"
          />
          <p 
            className="absolute font-sans font-normal uppercase text-[#554D48] tracking-[0.1em] text-[8px] leading-none"
            style={{ top: '28.75%', left: '8.59%' }}
          >
            {men?.eyebrow || "MEN'S EDIT"}
          </p>
          <h3 
            className="absolute font-serif font-normal text-[#2E2824] uppercase text-[24.5px] leading-none tracking-normal"
            style={{ top: '34.50%', left: '8.59%' }}
          >
            {men?.headline || 'THE MODERN MAN'}
          </h3>
          <div 
            className="absolute font-serif font-normal text-[#554D48] text-[10.5px] leading-[1.38]"
            style={{ top: '47.00%', left: '8.59%' }}
          >
            {menSubtitleLines.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>
          <div 
            className="absolute flex items-baseline leading-none"
            style={{ top: '57.75%', left: '8.59%' }}
          >
            <span className="font-serif font-medium text-[#2E2824] text-[18px] leading-none">
              {men?.promo?.discount || '20% OFF'}
            </span>
            <span className="font-sans font-normal uppercase text-[#554D48] text-[8.5px] tracking-[0.14em] leading-none ml-2">
              {men?.promo?.tag || 'SELECTED STYLES'}
            </span>
          </div>
          <div 
            className="absolute w-[15px] h-[15px] rounded-full border border-[#2E2824]/80 flex items-center justify-center text-[#2E2824]"
            style={{ top: '67.75%', left: '8.59%' }}
          >
            <svg viewBox="0 0 16 16" fill="none" className="w-[8px] h-[8px] stroke-current stroke-[1.4]">
              <path d="M3 8H13M9.5 4.5L13 8L9.5 11.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Mobile Right Banner: WOMEN'S EDIT */}
        <div 
          className="relative w-full aspect-[512/400] overflow-hidden bg-[#B2C3D5] cursor-pointer"
          onClick={onShopWomen}
        >
          <img
            src={women?.image || defaultWomenImage}
            alt={women?.alt || "Women's Edit"}
            className="absolute inset-0 w-full h-full object-cover object-right"
          />
          <p 
            className="absolute font-sans font-normal uppercase text-[#3D3530] tracking-[0.1em] text-[8px] leading-none"
            style={{ top: '23.50%', left: '8.79%' }}
          >
            {women?.eyebrow || "WOMEN'S EDIT"}
          </p>
          <h3 
            className="absolute font-serif font-normal text-[#2E2824] uppercase text-[24.5px] leading-none tracking-normal"
            style={{ top: '28.75%', left: '8.79%' }}
          >
            {womenLine1}
          </h3>
          {womenLine2 && (
            <h3 
              className="absolute font-serif font-normal text-[#2E2824] uppercase text-[24.5px] leading-none tracking-normal"
              style={{ top: '38.75%', left: '8.79%' }}
            >
              {womenLine2}
            </h3>
          )}
          <div 
            className="absolute font-serif font-normal text-[#3D3530] text-[10.5px] leading-[1.38]"
            style={{ top: '52.25%', left: '8.79%' }}
          >
            {womenSubtitleLines.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>
          <div 
            className="absolute flex items-baseline leading-none"
            style={{ top: '63.00%', left: '8.79%' }}
          >
            <span className="font-serif font-medium text-[#2E2824] text-[18px] leading-none">
              {women?.promo?.discount || '20% OFF'}
            </span>
            <span className="font-sans font-normal uppercase text-[#3D3530] text-[8.5px] tracking-[0.14em] leading-none ml-2">
              {women?.promo?.tag || 'SELECTED STYLES'}
            </span>
          </div>
          <div 
            className="absolute w-[15px] h-[15px] rounded-full border border-[#2E2824]/80 flex items-center justify-center text-[#2E2824]"
            style={{ top: '72.50%', left: '8.79%' }}
          >
            <svg viewBox="0 0 16 16" fill="none" className="w-[8px] h-[8px] stroke-current stroke-[1.4]">
              <path d="M3 8H13M9.5 4.5L13 8L9.5 11.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

      </div>

    </section>
  )
}
