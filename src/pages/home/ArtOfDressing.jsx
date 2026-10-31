import React from 'react'
import defaultSitImg from '../../assets/art-of-dressing/sit.jpg'
import defaultSkirtImg from '../../assets/art-of-dressing/skirt.jpg'
import defaultCoffeeImg from '../../assets/art-of-dressing/coffee.jpg'
import defaultTallImg from '../../assets/art-of-dressing/tall.jpg'

export default function ArtOfDressing({
  eyebrow = 'A CONSIDERED WARDROBE',
  title = {
    line1: 'THE ART',
    line2: 'OF DRESSING',
  },
  quote = '“Fashion is not about more. It’s about finding what feels right and looks good on you.”',
  button = {
    text: 'DISCOVER OUR STORY',
    link: '#story',
  },
  images = {
    sit: { src: defaultSitImg, alt: 'Woman in brown leather jacket and wide blue jeans' },
    skirt: { src: defaultSkirtImg, alt: 'Model in brown bomber jacket and white bubble mini skirt' },
    coffee: { src: defaultCoffeeImg, alt: 'Woman holding coffee cup and brown suede handbag' },
    tall: { src: defaultTallImg, alt: 'Model in white top and baggy blue jeans with hands in hair' },
  },
  onDiscover,
}) {
  const line1 = title?.line1 || 'THE ART'
  const line2 = title?.line2 || 'OF DRESSING'

  const sitSrc = images?.sit?.src || images?.sit || defaultSitImg
  const sitAlt = images?.sit?.alt || 'Woman in brown leather jacket and wide blue jeans'

  const skirtSrc = images?.skirt?.src || images?.skirt || defaultSkirtImg
  const skirtAlt = images?.skirt?.alt || 'Model in brown bomber jacket and white bubble mini skirt'

  const coffeeSrc = images?.coffee?.src || images?.coffee || defaultCoffeeImg
  const coffeeAlt = images?.coffee?.alt || 'Woman holding coffee cup and brown suede handbag'

  const tallSrc = images?.tall?.src || images?.tall || defaultTallImg
  const tallAlt = images?.tall?.alt || 'Model in white top and baggy blue jeans with hands in hair'

  const formatQuote = (q) => {
    if (typeof q === 'string' && q.includes('finding what feels right')) {
      return (
        <>
          “Fashion is not about more. It’s about<br className="hidden md:inline" />
          finding what feels right and looks good<br className="hidden md:inline" />
          on you.”
        </>
      )
    }
    return q
  }

  return (
    <section className="relative w-full max-w-[1920px] mx-auto bg-[#F8F5E6] overflow-hidden select-none">
      
      {/* ============================================================== */}
      {/* 1. Desktop & Tablet Layout (>= md): Full-Screen Fluid Scale     */}
      {/* ============================================================== */}
      <div className="hidden md:block relative w-full aspect-[1024/483] min-h-[480px] max-h-[920px] [container-type:inline-size]">
        
        {/* Eyebrow Label */}
        {eyebrow && (
          <div className="absolute left-[4.20%] top-[19.0%] z-20 pointer-events-none">
            <span 
              className="font-sans font-medium text-[#97173A] uppercase block leading-none"
              style={{ 
                fontSize: 'clamp(6.2px, 0.63cqw, 12px)', 
                letterSpacing: '0.07em' 
              }}
            >
              {eyebrow}
            </span>
          </div>
        )}

        {/* Headline Line 1 ("THE ART") */}
        <div className="absolute left-[4.20%] top-[23.6%] z-20 pointer-events-none">
          <h2 
            className="font-serif font-medium text-[#97173A] uppercase leading-none whitespace-nowrap"
            style={{ 
              fontSize: 'clamp(52.5px, 5.13cqw, 98.5px)', 
              letterSpacing: '-0.015em' 
            }}
          >
            {line1}
          </h2>
        </div>

        {/* Headline Line 2 ("OF DRESSING") - Asymmetrically Indented */}
        <div className="absolute left-[7.85%] top-[36.6%] z-20 pointer-events-none">
          <h2 
            className="font-serif font-medium text-[#97173A] uppercase leading-none whitespace-nowrap"
            style={{ 
              fontSize: 'clamp(52.5px, 5.13cqw, 98.5px)', 
              letterSpacing: '-0.015em' 
            }}
          >
            {line2}
          </h2>
        </div>

        {/* Subtitle Quote - 3 lines matching Figma reference */}
        {quote && (
          <div 
            className="absolute left-[4.20%] top-[53.0%] z-20 pointer-events-none"
            style={{ width: 'clamp(230px, 22.8cqw, 440px)' }}
          >
            <p 
              className="font-serif font-normal text-[#97173A] tracking-normal"
              style={{ 
                fontSize: 'clamp(14px, 1.44cqw, 27.6px)', 
                lineHeight: 'clamp(16px, 1.62cqw, 31px)' 
              }}
            >
              {formatQuote(quote)}
            </p>
          </div>
        )}

        {/* CTA Button */}
        {button?.text && (
          <div className="absolute left-[4.20%] top-[67.9%] z-20 pointer-events-auto">
            <a
              href={button?.link || '#story'}
              onClick={onDiscover}
              className="inline-flex items-center justify-center bg-[#97173A] hover:bg-[#821331] text-[#B0BACD] hover:text-white font-sans font-medium tracking-[0.08em] uppercase transition-all duration-200 shadow-xs hover:shadow-[0_0_12px_rgba(255,255,255,0.45)] group cursor-pointer"
              style={{ 
                width: 'clamp(162px, 15.82cqw, 305px)', 
                height: 'clamp(31px, 3.03cqw, 58px)', 
                fontSize: 'clamp(8.5px, 0.92cqw, 17.5px)',
                borderRadius: 'clamp(4px, 0.39cqw, 8px)',
                gap: 'clamp(6px, 0.58cqw, 12px)'
              }}
            >
              <span>{button?.text}</span>
              <span 
                className="inline-block transition-transform duration-200 group-hover:translate-x-1"
                style={{ fontSize: 'clamp(11px, 1.08cqw, 21px)' }}
              >
                &rarr;
              </span>
            </a>
          </div>
        )}

        {/* Right Fashion Arch Collage (Exact 609:423 ratio, 59.47% x 87.58%) */}
        <div className="absolute left-[36.52%] top-[6.83%] w-[59.47%] h-[87.58%] z-10">
          <div className="relative w-full h-full">
            
            {/* 1. Tall Girl on Right (Curved top-right arch) */}
            <div className="absolute right-0 top-0 w-[48.93%] h-full overflow-hidden rounded-tr-[clamp(75px,14.6vw,280px)] rounded-tl-none rounded-br-none rounded-bl-none shadow-xs z-10">
              <img
                src={tallSrc}
                alt={tallAlt}
                className="w-full h-full object-cover object-center select-none"
                loading="lazy"
              />
            </div>

            {/* 2. Top Sitting Girl (Arch top-left) */}
            <div className="absolute left-[16.09%] top-0 w-[30.71%] h-[60.99%] overflow-hidden rounded-tl-[clamp(42px,8.3vw,160px)] rounded-tr-none rounded-br-none rounded-bl-none shadow-xs z-10">
              <img
                src={sitSrc}
                alt={sitAlt}
                className="w-full h-full object-cover object-center select-none"
                loading="lazy"
              />
            </div>

            {/* 3. Bottom-Center Coffee Girl (Arch top-left) */}
            <div className="absolute left-[25.94%] bottom-0 w-[20.85%] h-[32.86%] overflow-hidden rounded-tl-[clamp(24px,4.7vw,90px)] rounded-tr-none rounded-br-none rounded-bl-none shadow-xs z-10">
              <img
                src={coffeeSrc}
                alt={coffeeAlt}
                className="w-full h-full object-cover object-center select-none"
                loading="lazy"
              />
            </div>

            {/* 4. Bottom-Left Bubble Skirt (Square rectangle, layered over Sit) */}
            <div className="absolute left-0 top-[49.65%] w-[21.68%] h-[40.90%] overflow-hidden rounded-none shadow-xs z-20">
              <img
                src={skirtSrc}
                alt={skirtAlt}
                className="w-full h-full object-cover object-center select-none"
                loading="lazy"
              />
            </div>

          </div>
        </div>

      </div>

      {/* ============================================================== */}
      {/* 2. Mobile Layout (< md): Adaptive Stacked Editorial Flow        */}
      {/* ============================================================== */}
      <div className="flex md:hidden flex-col px-5 py-8 gap-6 text-left">
        
        {/* Eyebrow & Title */}
        <div>
          {eyebrow && (
            <span className="font-sans font-medium text-[#97173A] text-[9px] tracking-[0.1em] uppercase block leading-none mb-3">
              {eyebrow}
            </span>
          )}
          <h2 className="font-serif font-medium text-[#97173A] text-[50px] uppercase tracking-[-0.015em] leading-[0.95]">
            <span className="block">{line1}</span>
            <span className="block ml-6">{line2}</span>
          </h2>
        </div>

        {/* Mobile Collage */}
        <div className="relative w-full aspect-[609/423] min-h-[260px]">
          {/* Tall */}
          <div className="absolute right-0 top-0 w-[48.93%] h-full overflow-hidden rounded-tr-[80px] shadow-xs z-10">
            <img src={tallSrc} alt={tallAlt} className="w-full h-full object-cover object-center" loading="lazy" />
          </div>
          {/* Sit */}
          <div className="absolute left-[16.09%] top-0 w-[30.71%] h-[60.99%] overflow-hidden rounded-tl-[45px] shadow-xs z-10">
            <img src={sitSrc} alt={sitAlt} className="w-full h-full object-cover object-center" loading="lazy" />
          </div>
          {/* Coffee */}
          <div className="absolute left-[25.94%] bottom-0 w-[20.85%] h-[32.86%] overflow-hidden rounded-tl-[26px] shadow-xs z-10">
            <img src={coffeeSrc} alt={coffeeAlt} className="w-full h-full object-cover object-center" loading="lazy" />
          </div>
          {/* Skirt */}
          <div className="absolute left-0 top-[49.65%] w-[21.68%] h-[40.90%] overflow-hidden rounded-none shadow-xs z-20">
            <img src={skirtSrc} alt={skirtAlt} className="w-full h-full object-cover object-center" loading="lazy" />
          </div>
        </div>

        {/* Quote & CTA */}
        <div className="flex flex-col gap-4">
          {quote && (
            <p className="font-serif font-normal text-[#97173A] text-[13px] leading-[1.4]">
              {formatQuote(quote)}
            </p>
          )}

          {button?.text && (
            <a
              href={button?.link || '#story'}
              onClick={onDiscover}
              className="inline-flex items-center justify-center gap-2 bg-[#97173A] hover:bg-[#821331] text-[#B0BACD] hover:text-white text-[10px] font-sans font-medium tracking-[0.08em] uppercase h-[36px] px-5 rounded-[4px] transition-all duration-200 shadow-xs hover:shadow-md w-fit group cursor-pointer"
            >
              <span>{button?.text}</span>
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 text-[12px]">
                &rarr;
              </span>
            </a>
          )}
        </div>

      </div>

    </section>
  )
}
