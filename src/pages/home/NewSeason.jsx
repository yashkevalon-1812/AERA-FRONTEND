import React from 'react'
import defaultRackImg from '../../assets/new-season/rack-model.jpg'
import defaultCoatImg from '../../assets/new-season/coat-model.jpg'

export default function NewSeason({
  verticalTag = 'WEAR WHAT YOU FEEL',
  headerTag = 'NEW SEASON NEW STYLE',
  headline = {
    line1: 'THE NEW',
    line2: 'SEASON',
  },
  description = 'Textured layers, relaxed tailoring and everyday silhouettes designed for colder days.',
  button = {
    text: 'Explore New Collection',
    link: '#new-collection',
  },
  rackImage = {
    src: defaultRackImg,
    alt: 'Woman posing next to clothing rack in olive jumpsuit',
  },
  coatImage = {
    src: defaultCoatImg,
    alt: 'Model in grey double-breasted coat',
  },
  onExplore,
}) {
  const rackSrc = typeof rackImage === 'string' ? rackImage : (rackImage?.src || defaultRackImg)
  const rackAlt = rackImage?.alt || 'Woman posing next to clothing rack in olive jumpsuit'

  const coatSrc = typeof coatImage === 'string' ? coatImage : (coatImage?.src || defaultCoatImg)
  const coatAlt = coatImage?.alt || 'Model in grey double-breasted coat'

  const headlineLine1 = headline?.line1 || 'THE NEW'
  const headlineLine2 = headline?.line2 || 'SEASON'
  const buttonText = button?.text || 'Explore New Collection'
  const buttonLink = button?.link || '#new-collection'

  return (
    <section className="relative w-full max-w-[1920px] mx-auto bg-[#F8F5E8] overflow-hidden select-none">
      
      {/* ============================================================== */}
      {/* 1. Desktop & Tablet Layout (>= md): Pixel-Perfect Composition  */}
      {/* ============================================================== */}
      <div className="hidden md:block relative w-full aspect-[1024/484] min-h-[480px] max-h-[920px]">
        
        {/* 1A. Left Photo (Woman with clothing rack) */}
        <div className="absolute left-[4.2%] top-[3.9%] w-[34.1%] h-[90.1%] overflow-hidden">
          <img
            src={rackSrc}
            alt={rackAlt}
            className="w-full h-full object-cover object-center select-none"
            loading="lazy"
          />
        </div>

        {/* 1B. Vertical Side Text ("WEAR WHAT YOU FEEL") */}
        {verticalTag && (
          <div
            className="absolute left-[40.5%] top-[4.1%] z-10 font-bold  pointer-events-none select-none flex items-start"
            aria-hidden="true"
          >
            <span
              className="font-serif text-[#97173a] text-[10px] md:text-[11px] lg:text-[13px] xl:text-[15px] 2xl:text-[20px] tracking-[0.22em] uppercase whitespace-nowrap block [writing-mode:vertical-rl] rotate-180 font-weight-[700] leading-[1.2] text-left"
            >
              {verticalTag}
            </span>
          </div>
        )}

        {/* 1C. Top-Right Editorial Tag ("NEW SEASON NEW STYLE") */}
        {headerTag && (
          <div className="absolute right-[4.1%] top-[6.8%] z-10 font-bold text-right pointer-events-none select-none">
            <span className="font-serif text-[#97173a] text-[10px] md:text-[10.5px] lg:text-[12px] xl:text-[13.5px] 2xl:text-[18px] tracking-[0.16em] uppercase whitespace-nowrap  font-weight-[700]">
              {headerTag}
            </span>
          </div>
        )}

        {/* 1D. Right Photo (Model in grey wool coat) */}
        <div className="absolute right-[4.0%] top-[12.2%] w-[29.8%] h-[69.8%] overflow-hidden z-0">
          <img
            src={coatSrc}
            alt={coatAlt}
            className="w-full h-full object-cover object-center select-none"
            loading="lazy"
          />
        </div>

        {/* 1E. Overlapping Burgundy Editorial Card */}
        <div
          className="absolute left-[46.1%] bottom-[6.0%] w-[30.5%] h-[45.7%] bg-[#97173a] rounded-[20px] md:rounded-[24px] lg:rounded-[28px] xl:rounded-[34px] p-5 md:p-6 lg:p-7 xl:p-9 2xl:p-11 flex flex-col justify-between shadow-md z-20 pointer-events-auto"
        >
          {/* Headline */}
          <div>
            <h2 className="font-serif font-semibold text-[#b1bed1] text-[28px] md:text-[34px] lg:text-[46px] xl:text-[54px] 2xl:text-[72px] leading-[0.90] uppercase tracking-[-0.01em]">
              <span className="block">{headlineLine1}</span>
              <span className="block">{headlineLine2}</span>
            </h2>
          </div>

          {/* Subtitle */}
          {description && (
            <p className="font-sans font-normal text-[#b1bed1] text-[8.2px] md:text-[9.2px] lg:text-[11px] xl:text-[12.5px] 2xl:text-[17px] leading-[1.32] opacity-90 my-auto">
              {description}
            </p>
          )}

          {/* Action Link */}
          {buttonText && (
            <div>
              <a
                href={buttonLink}
                onClick={onExplore}
                className="inline-flex items-center text-[#b1bed1] hover:text-white font-sans font-normal text-[9.5px] md:text-[10.5px] lg:text-[12px] xl:text-[13.5px] 2xl:text-[17px] transition-colors duration-200 group cursor-pointer"
              >
                <span>{buttonText}</span>
                <span className="inline-block ml-1.5  transition-transform duration-200 group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
            </div>
          )}
        </div>

      </div>

      {/* ============================================================== */}
      {/* 2. Mobile Layout (< md): Adaptive Stacked Editorial Flow        */}
      {/* ============================================================== */}
      <div className="flex md:hidden flex-col px-5 py-8 gap-5">
        
        {/* Mobile Header Tag */}
        {headerTag && (
          <div className="text-center pt-1">
            <span className="font-serif text-[#97173a] text-[12px] tracking-[0.16em] uppercase">
              {headerTag}
            </span>
          </div>
        )}

        {/* Mobile Primary Visual */}
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xs">
          <img
            src={rackSrc}
            alt={rackAlt}
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
          {verticalTag && (
            <div className="absolute bottom-3 left-3 bg-[#F8F5E8]/90 backdrop-blur-xs px-2.5 py-1 rounded">
              <span className="font-serif text-[#97173a] text-[10px] tracking-[0.18em] uppercase">
                {verticalTag}
              </span>
            </div>
          )}
        </div>

        {/* Mobile Burgundy Card */}
        <div className="w-full bg-[#97173a] rounded-2xl p-6 flex flex-col gap-4 text-left shadow-md">
          <h2 className="font-playfair font-normal text-[#b1bed1] text-[32px] sm:text-[36px] leading-[1] uppercase tracking-tight">
            <span className="block">{headlineLine1}</span>
            <span className="block">{headlineLine2}</span>
          </h2>

          {description && (
            <p className="font-sans font-normal text-[#b1bed1] text-[13px] leading-relaxed opacity-90">
              {description}
            </p>
          )}

          {buttonText && (
            <div className="pt-1">
              <a
                href={buttonLink}
                onClick={onExplore}
                className="inline-flex items-center text-[#b1bed1] hover:text-white font-sans font-medium text-[13.5px] transition-colors group cursor-pointer"
              >
                <span>{buttonText}</span>
                <span className="inline-block ml-1.5 transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
            </div>
          )}
        </div>

        {/* Mobile Secondary Image (Portrait crop focusing on model) */}
        <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-xs">
          <img
            src={coatSrc}
            alt={coatAlt}
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
        </div>

      </div>

    </section>
  )
}
