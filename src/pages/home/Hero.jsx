import heroImage from '../../assets/hero.png'

export default function Hero({
  wordmark = 'AERA',
  seasonTag = 'AUTUMN / WINTER 2026',
  headline = { line1: 'DRESSED', line2: 'FOR NOW' },
  description = [
    'New silhouettes. Refined essentials.',
    'A wardrobe made for the season ahead.',
  ],
  buttonText = 'Shop Now',
  modelImage = {
    src: heroImage,
    alt: 'AERA Autumn Winter 2026 Collection',
  },
  onShopNow,
}) {
  const imgSrc = typeof modelImage === 'string'
    ? modelImage
    : (modelImage?.src || heroImage)
  const imgAlt = modelImage?.alt || 'AERA Autumn Winter 2026 Collection'

  return (
    <section 
      style={{
        width: '100%',
        maxWidth: '1920px',
        height: '1126px',
        opacity: 1,
        transform: 'rotate(0deg)',
      }}
      className="relative w-full max-w-[1920px] mx-auto overflow-hidden bg-[#F8F5E8] flex flex-col justify-end h-[1126px]"
    >
      
      {/* 1. Large Decorative Background Wordmark: A E R A — Exact Figma CSS */}
      {wordmark && (
        <div 
          style={{
            position: 'absolute',
            top: '110px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
            textAlign: 'center',
            pointerEvents: 'none',
            userSelect: 'none',
            zIndex: 0,
            overflow: 'hidden',
          }}
          aria-hidden="true"
        >
          <span 
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 500,
              fontSize: 'clamp(80px, 20.833vw, 400px)',
              lineHeight: '100%',
              letterSpacing: 'clamp(28px, 7.448vw, 143px)',
              paddingLeft: 'clamp(28px, 7.448vw, 143px)',
              textTransform: 'uppercase',
              color: '#E8E2D0',
              opacity: 0.85,
              display: 'inline-block',
              whiteSpace: 'nowrap',
            }}
          >
            {wordmark}
          </span>
        </div>
      )}

      {/* 2. Desktop Models Image — Exact Figma CSS: width: 1273px; height: 926px; top: 200px; left: 326px; angle: 0deg; opacity: 1; */}
      <div 
        style={{
          width: '1273px',
          height: '926px',
          top: '200px',
          left: '326px',
          opacity: 1,
          transform: 'rotate(0deg)',
        }}
        className="hidden md:flex absolute items-end justify-center pointer-events-none z-10"
      >
        <img
          src={modelImage.src}
          alt={modelImage.alt}
          style={{
            width: '1273px',
            height: '926px',
            maxWidth: '1273px',
            maxHeight: '926px',
            objectFit: 'contain',
            objectPosition: 'bottom center',
            opacity: 1,
            transform: 'rotate(0deg)',
          }}
          className="w-full h-full select-none"
          loading="eager"
        />
      </div>

      {/* 3. Desktop & Tablet Overlays (>= md) */}
      <div className="hidden md:flex relative z-20 w-full max-w-[1840px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20 pb-8 md:pb-10 lg:pb-12 xl:pb-14 items-end justify-between pointer-events-none">
        
        {/* Bottom-Left: Supporting Copy & Shop Now Button */}
        <div className="pointer-events-auto max-w-[280px] lg:max-w-[320px] xl:max-w-[350px] text-left">
          <div className="text-[#97173a] text-[13px] lg:text-[14px] xl:text-[14.5px] font-sans font-medium leading-[1.42] tracking-normal mb-3.5 select-text">
            {Array.isArray(description) ? (
              description.map((line, idx) => (
                <span key={idx} className="block">
                  {line}
                </span>
              ))
            ) : (
              <span>{description}</span>
            )}
          </div>

          {buttonText && (
            <button
              onClick={onShopNow}
              className="inline-flex items-center justify-center bg-[#97173a] hover:bg-[#7e122f] text-white text-[12px] xl:text-[12.5px] font-semibold px-6 xl:px-7 py-2.5 rounded-lg transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer tracking-normal"
            >
              {buttonText}
            </button>
          )}
        </div>

        {/* Bottom-Right: Seasonal Tag & Editorial Headline */}
        <div className="pointer-events-auto text-left self-end">
          {/* Overhead Tag */}
          {seasonTag && (
            <div className="mb-1 lg:mb-1.5 xl:mb-2">
              <span className="text-[#97173a] text-[10.5px] lg:text-[11.5px] xl:text-[12px] font-sans font-semibold tracking-[0.28em] uppercase block">
                {seasonTag}
              </span>
            </div>
          )}

          {/* Main Headline (Two Lines, Left-Aligned) */}
          <h1 className="font-serif font-bold text-[#97173a] text-[56px] md:text-[68px] lg:text-[84px] xl:text-[98px] 2xl:text-[104px] leading-[0.88] uppercase tracking-[-0.015em] select-none m-0">
            <span className="block">{headline.line1}</span>
            <span className="block">{headline.line2}</span>
          </h1>
        </div>

      </div>

      {/* 4. Mobile Layout (< md): Clean adaptive flow without overlapping faces or clothing */}
      <div className="flex md:hidden flex-col items-center justify-between min-h-[calc(100vh-113px)] relative z-20 px-5 pt-3 pb-6 pointer-events-none">
        
        {/* Top Tag & Title */}
        <div className="pointer-events-auto text-center z-20 pt-1">
          {seasonTag && (
            <span className="text-[#97173a] text-[10px] font-sans font-semibold tracking-[0.26em] uppercase block mb-1">
              {seasonTag}
            </span>
          )}
          <h1 className="font-serif font-bold text-[#97173a] text-[34px] sm:text-[40px] leading-[0.92] uppercase tracking-tight m-0">
            {headline.line1} {headline.line2}
          </h1>
        </div>

        {/* Mobile Models Image */}
        <div className="w-full flex-1 flex items-center justify-center my-2 pointer-events-none">
          <img
            src={modelImage.src}
            alt={modelImage.alt}
            className="max-h-[46vh] w-auto max-w-[94%] object-contain select-none"
            loading="eager"
          />
        </div>

        {/* Bottom Copy & Button */}
        <div className="pointer-events-auto text-center z-20">
          <div className="text-[#97173a] text-[12px] font-sans font-medium leading-[1.35] mb-2.5">
            {Array.isArray(description) ? (
              description.map((line, idx) => (
                <span key={idx} className="block">
                  {line}
                </span>
              ))
            ) : (
              <span>{description}</span>
            )}
          </div>
          {buttonText && (
            <button
              onClick={onShopNow}
              className="inline-flex items-center justify-center bg-[#97173a] hover:bg-[#7e122f] text-white text-xs font-semibold px-6 py-2.5 rounded-lg transition-colors shadow-xs cursor-pointer"
            >
              {buttonText}
            </button>
          )}
        </div>

      </div>

    </section>
  )
}
