import React from 'react'
import defaultEverydayMinimalImage from '../../assets/trending-now/everyday-minimal.png'
import defaultAfterDarkImage from '../../assets/trending-now/after-dark.png'
import defaultSoftStructureImage from '../../assets/trending-now/soft-structure.png'

export default function TrendingNow({
  headline = {
    line1: 'TRENDING',
    line2: 'NOW',
  },
  description = [
    'The pieces defining',
    'the season, time and',
    'events of your life.',
  ],
  items = [
    {
      id: 'everyday-minimal',
      title: 'EVERYDAY MINIMAL',
      image: defaultEverydayMinimalImage,
      alt: 'Everyday Minimal - Model in red knit polo and cream trousers',
      link: '#everyday-minimal',
    },
    {
      id: 'after-dark',
      title: 'AFTER DARK',
      image: defaultAfterDarkImage,
      alt: 'After Dark - Model in white bubble mini dress on stairs',
      link: '#after-dark',
    },
    {
      id: 'soft-structure',
      title: 'SOFT STRUCTURE',
      image: defaultSoftStructureImage,
      alt: 'Soft Structure - Model in oversized tailored coat and pleated trousers',
      link: '#soft-structure',
    },
  ],
  onItemClick,
}) {
  const line1 = headline?.line1 || 'TRENDING'
  const line2 = headline?.line2 || 'NOW'

  const descLines = Array.isArray(description)
    ? description
    : typeof description === 'string'
    ? description.split('\n')
    : [
        'The pieces defining',
        'the season, time and',
        'events of your life.',
      ]

  const item1 = items?.[0] || {
    id: 'everyday-minimal',
    title: 'EVERYDAY MINIMAL',
    image: defaultEverydayMinimalImage,
    alt: 'Everyday Minimal',
    link: '#everyday-minimal',
  }

  const item2 = items?.[1] || {
    id: 'after-dark',
    title: 'AFTER DARK',
    image: defaultAfterDarkImage,
    alt: 'After Dark',
    link: '#after-dark',
  }

  const item3 = items?.[2] || {
    id: 'soft-structure',
    title: 'SOFT STRUCTURE',
    image: defaultSoftStructureImage,
    alt: 'Soft Structure',
    link: '#soft-structure',
  }

  return (
    <section 
      aria-label="Trending Now"
      className="w-full bg-[#F8F5E6] pt-[33px] pb-[35px] px-[20px] sm:px-[30px] md:px-[43px] overflow-hidden select-none"
    >
      <div className="max-w-[1920px] mx-auto">
        
        {/* ============================================================== */}
        {/* 1. Desktop & Tablet Layout (>= md): Exact 3-Column Geometry    */}
        {/* Column 1: Heading (top) + Everyday Minimal (bottom)            */}
        {/* Column 2: After Dark (full height)                             */}
        {/* Column 3: Soft Structure (top) + Editorial Description (bottom)*/}
        {/* ============================================================== */}
        <div className="hidden md:grid grid-cols-[282fr_323fr_282fr] gap-[26px] items-stretch">
          
          {/* COLUMN 1 */}
          <div className="flex flex-col justify-between h-full">
            {/* Heading: TRENDING NOW */}
            <div className="pt-[14px]">
              <h2 className="font-serif font-medium text-[#9A1F40] uppercase tracking-[0.025em] leading-[1.25] text-[47px] xl:text-[60px] 2xl:text-[76px]">
                <span className="block">{line1}</span>
                <span className="block">{line2}</span>
              </h2>
            </div>

            {/* Card 1: EVERYDAY MINIMAL (flush with bottom of col 2) */}
            <div 
              className="relative w-full aspect-[282/275] overflow-hidden bg-[#2D2A28] group cursor-pointer luxury-shine-card"
              onClick={() => onItemClick && onItemClick(item1)}
              aria-label={item1.title}
            >
              <img
                src={item1.image || defaultEverydayMinimalImage}
                alt={item1.alt || item1.title}
                className="w-full h-full object-cover brightness-[1.06] contrast-[1.02] group-hover:scale-105 group-hover:brightness-[1.16] transition-all duration-700 ease-out"
              />
              <div className="shine-glow" />
              <div className="shine-ambient" />
              <div className="shine-beam" />
            </div>
          </div>

          {/* COLUMN 2: Full Height AFTER DARK */}
          <div className="h-full flex flex-col justify-start">
            <div 
              className="relative w-full aspect-[323/416] overflow-hidden bg-[#2D2A28] group cursor-pointer luxury-shine-card"
              onClick={() => onItemClick && onItemClick(item2)}
              aria-label={item2.title}
            >
              <img
                src={item2.image || defaultAfterDarkImage}
                alt={item2.alt || item2.title}
                className="w-full h-full object-cover brightness-[1.06] contrast-[1.02] group-hover:scale-105 group-hover:brightness-[1.16] transition-all duration-700 ease-out"
              />
              <div className="shine-glow" />
              <div className="shine-ambient" />
              <div className="shine-beam" />
            </div>
          </div>

          {/* COLUMN 3: SOFT STRUCTURE (top) + Description (bottom) */}
          <div className="h-full flex flex-col justify-start">
            {/* Card 3: SOFT STRUCTURE (flush with top of col 2) */}
            <div 
              className="relative w-full aspect-[282/294] overflow-hidden bg-[#2D2A28] group cursor-pointer luxury-shine-card"
              onClick={() => onItemClick && onItemClick(item3)}
              aria-label={item3.title}
            >
              <img
                src={item3.image || defaultSoftStructureImage}
                alt={item3.alt || item3.title}
                className="w-full h-full object-cover brightness-[1.06] contrast-[1.02] group-hover:scale-105 group-hover:brightness-[1.16] transition-all duration-700 ease-out"
              />
              <div className="shine-glow" />
              <div className="shine-ambient" />
              <div className="shine-beam" />
            </div>

            {/* Editorial Description Text */}
            <div className="mt-[33px]">
              <div className="font-sans font-normal text-[#9A1F40] leading-[1.4] text-[17.5px] xl:text-[22px] 2xl:text-[26px]">
                {descLines.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* ============================================================== */}
        {/* 2. Mobile Layout (< md): Clean Responsive Editorial Stack      */}
        {/* ============================================================== */}
        <div className="flex md:hidden flex-col gap-6">
          {/* Mobile Heading */}
          <div>
            <h2 className="font-serif font-medium text-[#9A1F40] uppercase tracking-[0.025em] leading-[1.2] text-[36px] sm:text-[42px]">
              <span className="block">{line1}</span>
              <span className="block">{line2}</span>
            </h2>
          </div>

          {/* Mobile Cards Stack */}
          <div className="flex flex-col gap-5">
            {/* Card 1 */}
            <div 
              className="relative w-full aspect-[282/275] overflow-hidden bg-[#2D2A28] group cursor-pointer luxury-shine-card"
              onClick={() => onItemClick && onItemClick(item1)}
              aria-label={item1.title}
            >
              <img
                src={item1.image || defaultEverydayMinimalImage}
                alt={item1.alt || item1.title}
                className="w-full h-full object-cover brightness-[1.06] contrast-[1.02] group-hover:scale-105 group-hover:brightness-[1.16] transition-all duration-700 ease-out"
              />
              <div className="shine-glow" />
              <div className="shine-ambient" />
              <div className="shine-beam" />
            </div>

            {/* Card 2 */}
            <div 
              className="relative w-full aspect-[323/416] overflow-hidden bg-[#2D2A28] group cursor-pointer luxury-shine-card"
              onClick={() => onItemClick && onItemClick(item2)}
              aria-label={item2.title}
            >
              <img
                src={item2.image || defaultAfterDarkImage}
                alt={item2.alt || item2.title}
                className="w-full h-full object-cover brightness-[1.06] contrast-[1.02] group-hover:scale-105 group-hover:brightness-[1.16] transition-all duration-700 ease-out"
              />
              <div className="shine-glow" />
              <div className="shine-ambient" />
              <div className="shine-beam" />
            </div>

            {/* Card 3 */}
            <div 
              className="relative w-full aspect-[282/294] overflow-hidden bg-[#2D2A28] group cursor-pointer luxury-shine-card"
              onClick={() => onItemClick && onItemClick(item3)}
              aria-label={item3.title}
            >
              <img
                src={item3.image || defaultSoftStructureImage}
                alt={item3.alt || item3.title}
                className="w-full h-full object-cover brightness-[1.06] contrast-[1.02] group-hover:scale-105 group-hover:brightness-[1.16] transition-all duration-700 ease-out"
              />
              <div className="shine-glow" />
              <div className="shine-ambient" />
              <div className="shine-beam" />
            </div>

            {/* Description Text */}
            <div className="pt-2">
              <div className="font-sans font-normal text-[#9A1F40] leading-[1.4] text-[16px]">
                {descLines.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
