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
    <section className="relative w-full max-w-[1920px] mx-auto overflow-hidden bg-[#F8F5E8] aspect-[1024/481] min-h-[480px] max-h-[920px] flex flex-col justify-end">
      
      {/* 1. Large Decorative Background Wordmark: A E R A — Exact Proportional Scale */}
      {wordmark && (
        <div 
          className="absolute top-[8%] left-1/2 -translate-x-1/2 w-full max-w-[1550px] text-center pointer-events-none select-none z-0 overflow-hidden"
          aria-hidden="true"
        >
          <span className="font-serif font-medium text-[clamp(65px,19vw,360px)] leading-[100%] tracking-[clamp(22px,7.2vw,140px)] pl-[clamp(22px,7.2vw,140px)] uppercase text-[#E8E2D0] opacity-85 inline-block whitespace-nowrap">
            {wordmark}
          </span>
        </div>
      )}

      {/* 2. Desktop Models Image — Grounded on bottom edge, horizontally centered */}
      <div className="hidden md:flex absolute bottom-0 left-1/2 -translate-x-1/2 h-[96%] w-auto max-w-[85%] items-end justify-center pointer-events-none z-10">
        <img
          src={imgSrc}
          alt={imgAlt}
          className="h-full w-auto max-w-none object-contain object-bottom select-none"
          loading="eager"
        />
      </div>

      {/* 3. Desktop & Tablet Overlays (>= md) — Pixel-aligned to Reference Composition */}
      <div className="hidden md:flex relative z-20 w-full max-w-[1920px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 pb-2.5 sm:pb-3 md:pb-3.5 lg:pb-4 xl:pb-5 items-end justify-between pointer-events-none">
        
        {/* Bottom-Left: Supporting Copy & Shop Now Button */}
        <div className="pointer-events-auto max-w-[360px] lg:max-w-[400px] xl:max-w-[450px] text-left mb-2 sm:mb-2.5 md:mb-3 lg:mb-12">
          <div className="text-[#97173a] font-inter font-normal text-[17px] leading-[24px] tracking-normal mb-3 lg:mb-3.5 select-text">
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
              className="inline-flex items-center justify-center bg-[#97173a] hover:bg-[#7e122f] text-white font-poppins font-normal text-[16px] leading-[150%] capitalize px-6 xl:px-7 py-2.5 rounded-lg transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer tracking-normal"
            >
              {buttonText}
            </button>
          )}
        </div>

        {/* Bottom-Right: Seasonal Tag & Editorial Headline */}
        <div className="pointer-events-auto text-right flex flex-col items-end">
          {/* Overhead Seasonal Tag */}
          {seasonTag && (
            <div className="font-poppins font-normal text-[10px] sm:text-[11.5px] md:text-[12px] lg:text-[13px] xl:text-[14px] leading-[150%] tracking-[4px] lg:tracking-[5px] uppercase text-[#97173a] opacity-100 rotate-0 mb-1 lg:mb-1.5 xl:mb-2 select-text whitespace-nowrap text-right">
              {seasonTag}
            </div>
          )}

          {/* Main Headline (Two Lines, Right-Aligned overlapping right model) */}
          <h1 className="font-playfair font-bold text-[#97173a] text-[52px] sm:text-[68px] md:text-[84px] lg:text-[100px] xl:text-[116px] 2xl:text-[108px] leading-[100%] uppercase tracking-[-0.015em] select-none m-0 text-right mb-[-35px] mr-[-10px]">
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
            <span className="font-poppins font-normal text-[11px] leading-[150%] tracking-[4px] uppercase text-[#97173a] opacity-100 rotate-0 block mb-1 text-center">
              {seasonTag}
            </span>
          )}
          <h1 className="font-playfair font-bold text-[#97173a] text-[34px] sm:text-[42px] leading-[100%] uppercase tracking-tight m-0">
            {headline.line1} {headline.line2}
          </h1>
        </div>

        {/* Mobile Models Image */}
        <div className="w-full flex-1 flex items-center justify-center my-2 pointer-events-none">
          <img
            src={imgSrc}
            alt={imgAlt}
            className="max-h-[46vh] w-auto max-w-[94%] object-contain select-none"
            loading="eager"
          />
        </div>

        {/* Bottom Copy & Button */}
        <div className="pointer-events-auto text-center z-20">
          <div className="text-[#97173a] font-inter font-normal text-[16px] sm:text-[18px] md:text-[20px] leading-[22px] md:leading-[24px] mb-2.5">
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
              className="inline-flex items-center justify-center bg-[#97173a] hover:bg-[#7e122f] text-white font-poppins font-normal text-[16px] leading-[150%] capitalize px-6 py-2.5 rounded-lg transition-colors shadow-xs cursor-pointer"
            >
              {buttonText}
            </button>
          )}
        </div>

      </div>

    </section>
  )
}
