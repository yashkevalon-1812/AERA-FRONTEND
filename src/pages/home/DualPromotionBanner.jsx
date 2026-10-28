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
      {/* Fluid proportional cqw engine: scales continuously across all  */}
      {/* screen sizes (1024px reference -> 1920px Figma 64px headline)  */}
      {/* ============================================================== */}
      <div className="hidden md:grid grid-cols-2 relative w-full aspect-[1024/400]">
        
        {/* ============================================================ */}
        {/* LEFT BANNER: MEN'S EDIT                                      */}
        {/* ============================================================ */}
        <div 
          className="relative w-full h-full overflow-hidden bg-[#EAECEE] group cursor-pointer"
          style={{ containerType: 'inline-size' }}
          onClick={onShopMen}
        >
          {/* Background and Model Image */}
          <img
            src={men?.image || defaultMenImage}
            alt={men?.alt || "Men's Edit"}
            className="absolute inset-0 w-full h-full object-cover object-right pointer-events-none"
          />

          {/* Eyebrow: y=114 (28.50%), x=44 (8.59%) */}
          <p 
            className="absolute font-sans font-medium uppercase text-[#615249] tracking-[0.06em] leading-none"
            style={{ 
              top: '28.50%', 
              left: '8.59%',
              fontSize: 'clamp(8px, 1.56cqw, 15px)'
            }}
          >
            {men?.eyebrow || "MEN'S EDIT"}
          </p>

          {/* Headline: THE MODERN MAN
              Calibrated exact match:
              font-family: Cormorant Garamond;
              font-weight: 500 (Medium);
              line-height: 100%;
              letter-spacing: 0px;
              text-transform: uppercase;
              Fluid scaling: 34px at 1024px -> 64px at 1920px (Figma spec)
          */}
          <h3 
            className="absolute font-serif font-medium text-[#615249] uppercase leading-none tracking-[0px] whitespace-nowrap"
            style={{ 
              top: '33.50%', 
              left: '8.59%',
              fontSize: 'clamp(24px, 6.64cqw, 64px)'
            }}
          >
            {men?.headline || 'THE MODERN MAN'}
          </h3>

          {/* Subtitle: y=189 (47.00%), x=44 (8.59%) */}
          <div 
            className="absolute font-sans font-normal text-[#615249] leading-[1.38]"
            style={{ 
              top: '47.00%', 
              left: '8.59%',
              fontSize: 'clamp(10px, 2.05cqw, 20px)'
            }}
          >
            {menSubtitleLines.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>

          {/* Promotion: y=229 (57.25%), x=44 (8.59%) */}
          <div 
            className="absolute flex items-baseline leading-none text-[#615249]"
            style={{ top: '57.25%', left: '8.59%' }}
          >
            <span 
              className="font-serif font-medium leading-none"
              style={{ fontSize: 'clamp(18px, 4.69cqw, 45px)' }}
            >
              {men?.promo?.discount || '20% OFF'}
            </span>
            <span 
              className="font-serif font-medium uppercase tracking-[0.1em] leading-none ml-2"
              style={{ fontSize: 'clamp(8px, 2.05cqw, 20px)' }}
            >
              {men?.promo?.tag || 'SELECTED STYLES'}
            </span>
          </div>

          {/* Circular Button: y=268 (67.00%), x=44 (8.59%) */}
          <a
            href={men?.link || '#mens-edit'}
            onClick={(e) => {
              if (onShopMen) {
                e.preventDefault()
                onShopMen()
              }
            }}
            aria-label={men?.eyebrow || "Shop Men's Edit"}
            className="absolute rounded-full border border-[#615249] flex items-center justify-center text-[#615249] group-hover:bg-[#615249] group-hover:text-white group-hover:border-[#615249] transition-all duration-300"
            style={{ 
              top: '67.00%', 
              left: '8.59%',
              width: 'clamp(16px, 3.125cqw, 30px)',
              height: 'clamp(16px, 3.125cqw, 30px)'
            }}
          >
            <svg
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current stroke-[1.4]"
              style={{
                width: 'clamp(8px, 1.56cqw, 15px)',
                height: 'clamp(8px, 1.56cqw, 15px)'
              }}
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
          style={{ containerType: 'inline-size' }}
          onClick={onShopWomen}
        >
          {/* Background and Model Image */}
          <img
            src={women?.image || defaultWomenImage}
            alt={women?.alt || "Women's Edit"}
            className="absolute inset-0 w-full h-full object-cover object-right pointer-events-none"
          />

          {/* Eyebrow: y=94 (23.50%), x=44 (8.59%) */}
          <p 
            className="absolute font-sans font-medium uppercase text-[#615249] tracking-[0.06em] leading-none"
            style={{ 
              top: '23.50%', 
              left: '8.59%',
              fontSize: 'clamp(8px, 1.56cqw, 15px)'
            }}
          >
            {women?.eyebrow || "WOMEN'S EDIT"}
          </p>

          {/* Headline Line 1: y=114 (28.50%), x=44 (8.59%) */}
          <h3 
            className="absolute font-serif font-medium text-[#615249] uppercase tracking-[0px] leading-none whitespace-nowrap"
            style={{ 
              top: '28.50%', 
              left: '8.59%',
              fontSize: 'clamp(24px, 6.64cqw, 64px)'
            }}
          >
            {womenLine1}
          </h3>

          {/* Headline Line 2: y=156 (39.00%), x=44 (8.59%) */}
          {womenLine2 && (
            <h3 
              className="absolute font-serif font-medium text-[#615249] uppercase tracking-[0px] leading-none whitespace-nowrap"
              style={{ 
                top: '39.00%', 
                left: '8.59%',
                fontSize: 'clamp(24px, 6.64cqw, 64px)'
              }}
            >
              {womenLine2}
            </h3>
          )}

          {/* Subtitle: y=207 (51.75%), x=44 (8.59%) */}
          <div 
            className="absolute font-sans font-normal text-[#615249] leading-[1.38]"
            style={{ 
              top: '51.75%', 
              left: '8.59%',
              fontSize: 'clamp(10px, 2.05cqw, 20px)'
            }}
          >
            {womenSubtitleLines.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>

          {/* Promotion: y=250 (62.50%), x=44 (8.59%) */}
          <div 
            className="absolute flex items-baseline leading-none text-[#615249]"
            style={{ top: '62.50%', left: '8.59%' }}
          >
            <span 
              className="font-serif font-medium leading-none"
              style={{ fontSize: 'clamp(18px, 4.69cqw, 45px)' }}
            >
              {women?.promo?.discount || '20% OFF'}
            </span>
            <span 
              className="font-serif font-medium uppercase tracking-[0.1em] leading-none ml-2"
              style={{ fontSize: 'clamp(8px, 2.05cqw, 20px)' }}
            >
              {women?.promo?.tag || 'SELECTED STYLES'}
            </span>
          </div>

          {/* Circular Button: y=289 (72.25%), x=44 (8.59%) */}
          <a
            href={women?.link || '#womens-edit'}
            onClick={(e) => {
              if (onShopWomen) {
                e.preventDefault()
                onShopWomen()
              }
            }}
            aria-label={women?.eyebrow || "Shop Women's Edit"}
            className="absolute rounded-full border border-[#615249] flex items-center justify-center text-[#615249] group-hover:bg-[#615249] group-hover:text-white group-hover:border-[#615249] transition-all duration-300"
            style={{ 
              top: '72.25%', 
              left: '8.59%',
              width: 'clamp(16px, 3.125cqw, 30px)',
              height: 'clamp(16px, 3.125cqw, 30px)'
            }}
          >
            <svg
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current stroke-[1.4]"
              style={{
                width: 'clamp(8px, 1.56cqw, 15px)',
                height: 'clamp(8px, 1.56cqw, 15px)'
              }}
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
          className="relative w-full aspect-[512/400] overflow-hidden bg-[#EAECEE] group cursor-pointer"
          style={{ containerType: 'inline-size' }}
          onClick={onShopMen}
        >
          <img
            src={men?.image || defaultMenImage}
            alt={men?.alt || "Men's Edit"}
            className="absolute inset-0 w-full h-full object-cover object-right pointer-events-none"
          />
          <p 
            className="absolute font-sans font-medium uppercase text-[#615249] tracking-[0.06em] leading-none"
            style={{ 
              top: '28.50%', 
              left: '8.59%',
              fontSize: 'clamp(8px, 1.56cqw, 15px)'
            }}
          >
            {men?.eyebrow || "MEN'S EDIT"}
          </p>
          <h3 
            className="absolute font-serif font-medium text-[#615249] uppercase leading-none tracking-[0px] whitespace-nowrap"
            style={{ 
              top: '33.50%', 
              left: '8.59%',
              fontSize: 'clamp(20px, 6.64cqw, 34px)'
            }}
          >
            {men?.headline || 'THE MODERN MAN'}
          </h3>
          <div 
            className="absolute font-sans font-normal text-[#615249] leading-[1.38]"
            style={{ 
              top: '47.00%', 
              left: '8.59%',
              fontSize: 'clamp(9px, 2.05cqw, 14px)'
            }}
          >
            {menSubtitleLines.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>
          <div 
            className="absolute flex items-baseline leading-none text-[#615249]"
            style={{ top: '57.25%', left: '8.59%' }}
          >
            <span 
              className="font-serif font-medium leading-none"
              style={{ fontSize: 'clamp(16px, 4.69cqw, 26px)' }}
            >
              {men?.promo?.discount || '20% OFF'}
            </span>
            <span 
              className="font-serif font-medium uppercase tracking-[0.1em] leading-none ml-2"
              style={{ fontSize: 'clamp(8px, 2.05cqw, 12px)' }}
            >
              {men?.promo?.tag || 'SELECTED STYLES'}
            </span>
          </div>
          <div 
            className="absolute rounded-full border border-[#615249] flex items-center justify-center text-[#615249] group-hover:bg-[#615249] group-hover:text-white group-hover:border-[#615249] transition-all duration-300"
            style={{ 
              top: '67.00%', 
              left: '8.59%',
              width: 'clamp(15px, 3.125cqw, 22px)',
              height: 'clamp(15px, 3.125cqw, 22px)'
            }}
          >
            <svg 
              viewBox="0 0 16 16" 
              fill="none" 
              className="stroke-current stroke-[1.4]"
              style={{
                width: 'clamp(7px, 1.56cqw, 11px)',
                height: 'clamp(7px, 1.56cqw, 11px)'
              }}
            >
              <path d="M3 8H13M9.5 4.5L13 8L9.5 11.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Mobile Right Banner: WOMEN'S EDIT */}
        <div 
          className="relative w-full aspect-[512/400] overflow-hidden bg-[#B2C3D5] group cursor-pointer"
          style={{ containerType: 'inline-size' }}
          onClick={onShopWomen}
        >
          <img
            src={women?.image || defaultWomenImage}
            alt={women?.alt || "Women's Edit"}
            className="absolute inset-0 w-full h-full object-cover object-right pointer-events-none"
          />
          <p 
            className="absolute font-sans font-medium uppercase text-[#615249] tracking-[0.06em] leading-none"
            style={{ 
              top: '23.50%', 
              left: '8.59%',
              fontSize: 'clamp(8px, 1.56cqw, 15px)'
            }}
          >
            {women?.eyebrow || "WOMEN'S EDIT"}
          </p>
          <h3 
            className="absolute font-serif font-medium text-[#615249] uppercase leading-none tracking-[0px] whitespace-nowrap"
            style={{ 
              top: '28.50%', 
              left: '8.59%',
              fontSize: 'clamp(20px, 6.64cqw, 34px)'
            }}
          >
            {womenLine1}
          </h3>
          {womenLine2 && (
            <h3 
              className="absolute font-serif font-medium text-[#615249] uppercase leading-none tracking-[0px] whitespace-nowrap"
              style={{ 
                top: '39.00%', 
                left: '8.59%',
                fontSize: 'clamp(20px, 6.64cqw, 34px)'
              }}
            >
              {womenLine2}
            </h3>
          )}
          <div 
            className="absolute font-sans font-normal text-[#615249] leading-[1.38]"
            style={{ 
              top: '51.75%', 
              left: '8.59%',
              fontSize: 'clamp(9px, 2.05cqw, 14px)'
            }}
          >
            {womenSubtitleLines.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>
          <div 
            className="absolute flex items-baseline leading-none text-[#615249]"
            style={{ top: '62.50%', left: '8.59%' }}
          >
            <span 
              className="font-serif font-medium leading-none"
              style={{ fontSize: 'clamp(16px, 4.69cqw, 26px)' }}
            >
              {women?.promo?.discount || '20% OFF'}
            </span>
            <span 
              className="font-serif font-medium uppercase tracking-[0.1em] leading-none ml-2"
              style={{ fontSize: 'clamp(8px, 2.05cqw, 12px)' }}
            >
              {women?.promo?.tag || 'SELECTED STYLES'}
            </span>
          </div>
          <div 
            className="absolute rounded-full border border-[#615249] flex items-center justify-center text-[#615249] group-hover:bg-[#615249] group-hover:text-white group-hover:border-[#615249] transition-all duration-300"
            style={{ 
              top: '72.25%', 
              left: '8.59%',
              width: 'clamp(15px, 3.125cqw, 22px)',
              height: 'clamp(15px, 3.125cqw, 22px)'
            }}
          >
            <svg 
              viewBox="0 0 16 16" 
              fill="none" 
              className="stroke-current stroke-[1.4]"
              style={{
                width: 'clamp(7px, 1.56cqw, 11px)',
                height: 'clamp(7px, 1.56cqw, 11px)'
              }}
            >
              <path d="M3 8H13M9.5 4.5L13 8L9.5 11.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

      </div>

    </section>
  )
}
