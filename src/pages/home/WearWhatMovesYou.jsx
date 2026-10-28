import React from 'react'
import defaultBannerImage from '../../assets/wear-what/wear-what-banner.jpg'

export default function WearWhatMovesYou({
  heading = {
    line1: 'WEAR WHAT',
    line2: 'MOVES YOU',
  },
  subtitle = [
    'Pieces Designed To Become Part Of The Way',
    'You Move, Live And Express Yourself.',
  ],
  button = {
    text: 'DISCOVER OUR STORY',
    link: '#our-story',
  },
  bannerImage = defaultBannerImage,
  onDiscoverStory,
}) {
  const line1 = heading?.line1 || 'WEAR WHAT'
  const line2 = heading?.line2 || 'MOVES YOU'

  const subLines = Array.isArray(subtitle)
    ? subtitle
    : typeof subtitle === 'string'
    ? subtitle.split('\n')
    : [
        'Pieces Designed To Become Part Of The Way',
        'You Move, Live And Express Yourself.',
      ]

  return (
    <section 
      aria-label="Wear What Moves You"
      className="w-full bg-[#F8F5E6] py-[28px] sm:py-[34px] md:py-[42px] px-[16px] sm:px-[30px] md:px-[48px] overflow-hidden select-none"
    >
      <div className="max-w-[1920px] mx-auto @container">
        {/* Banner Card Container: responsive aspect ratio for luxury mobile & exact 930:273 ratio for desktop */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[21/9] md:aspect-[930/273] rounded-2xl md:rounded-[16px] overflow-hidden bg-[#2D2A28] shadow-sm">
          {/* Background Photography Banner */}
          <img
            src={bannerImage || defaultBannerImage}
            alt="Wear What Moves You - AERA Autumn Winter Editorial"
            className="w-full h-full object-cover object-center select-none pointer-events-none"
            loading="lazy"
          />

          {/* Subtle mobile vignette gradient to ensure 100% text contrast on very small viewports */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent md:hidden pointer-events-none" />

          {/* 1. Heading: WEAR WHAT MOVES YOU */}
          {/* Exact reference match on desktop (>= md): left 54.62%, top 25.64%, w=212px, h=52px */}
          <div 
            className="absolute left-[50%] md:left-[54.62%] top-[20%] md:top-[25.64%] z-10 pointer-events-none"
            style={{ transform: 'translate3d(0,0,0)' }}
          >
            <h2 className="font-michroma font-normal text-white uppercase tracking-[0.016em] leading-[1.3] md:leading-[1.41] text-[15px] sm:text-[18px] md:text-[clamp(11px,2.41cqw,48px)] drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)] md:drop-shadow-none">
              <span className="block whitespace-nowrap">{line1}</span>
              <span className="block whitespace-nowrap">{line2}</span>
            </h2>
          </div>

          {/* 2. Editorial Subtitle */}
          {/* Exact reference match on desktop (>= md): left 5.70%, top 60.8%, w=237px, h=26px */}
          <div 
            className="absolute left-[5.70%] top-[58%] md:top-[60.8%] z-10 pointer-events-none"
            style={{ transform: 'translate3d(0,0,0)' }}
          >
            <div className="text-[#FAF8F5] font-sans font-normal leading-[1.26] tracking-[0.005em] text-[10px] sm:text-[11px] md:text-[clamp(8px,1.19cqw,18px)] drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)] md:drop-shadow-none">
              {subLines.map((line, idx) => (
                <p key={idx} className="whitespace-nowrap">{line}</p>
              ))}
            </div>
          </div>

          {/* 3. Interactive Pill Button */}
          {/* Exact reference match on desktop (>= md): left 5.59%, top 74.36% (y=248px), w=146px, h=31px */}
          <div 
            className="absolute left-[5.59%] top-[74%] md:top-[74.36%] z-10"
            style={{ transform: 'translate3d(0,0,0)' }}
          >
            <a
              href={button?.link || '#our-story'}
              onClick={(e) => {
                if (onDiscoverStory) {
                  e.preventDefault()
                  onDiscoverStory()
                }
              }}
              className="inline-flex items-center justify-between w-auto md:w-[clamp(110px,15.698cqw,240px)] h-[28px] sm:h-[30px] md:h-[clamp(24px,3.333cqw,52px)] bg-[#F5EFE3] hover:bg-white text-[#1F1D1B] font-sans font-medium uppercase tracking-[0.05em] rounded-[6px] transition-all duration-300 shadow-sm hover:shadow group px-3 md:px-[clamp(8px,1.18cqw,18px)] text-[9px] sm:text-[9.5px] md:text-[clamp(7.5px,1.02cqw,14px)] leading-none"
              aria-label={button?.text || 'Discover Our Story'}
            >
              <span>{button?.text || 'DISCOVER OUR STORY'}</span>
              <svg 
                className="w-[11px] h-[11px] md:w-[clamp(9px,1.2cqw,15px)] md:h-[clamp(9px,1.2cqw,15px)] transition-transform duration-300 group-hover:translate-x-0.5 ml-2" 
                viewBox="0 0 16 16" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path 
                  d="M2.5 8H13.5M13.5 8L9 3.5M13.5 8L9 12.5" 
                  stroke="currentColor" 
                  strokeWidth="1.3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
