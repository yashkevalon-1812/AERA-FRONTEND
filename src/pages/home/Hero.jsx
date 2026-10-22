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
  return (
    <section className="relative w-full max-w-[1920px] h-[1126px] opacity-100 rotate-0 mx-auto overflow-hidden bg-[#F8F5E8] flex flex-col justify-end">
      
      {/* 1. Large Decorative Background Wordmark: A E R A — 100% Tailwind CSS */}
      {wordmark && (
        <div 
          className="absolute top-[70px] left-1/2 -translate-x-1/2 w-[1483px] h-[484px] text-center pointer-events-none select-none z-0 overflow-hidden"
          aria-hidden="true"
        >
          <span className="font-serif font-medium text-[clamp(80px,20.833vw,400px)] leading-[100%] tracking-[clamp(28px,7.448vw,143px)] pl-[clamp(28px,7.448vw,143px)] uppercase text-[#E8E2D0] opacity-85 inline-block whitespace-nowrap">
            {wordmark}
          </span>
        </div>
      )}

      {/* 2. Desktop Models Image — 100% Tailwind CSS */}
      <div className="hidden md:flex absolute top-[200px] left-[326px] w-[1273px] h-[926px] opacity-100 rotate-0 items-end justify-center pointer-events-none z-10">
        <img
          src={modelImage.src}
          alt={modelImage.alt}
          className="w-[1000px] h-[926px] max-w-[1273px] max-h-[926px] object-contain object-bottom opacity-100 rotate-0 mr-[30%] mb-[27%] select-none"
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

        {/* Bottom-Right: Seasonal Tag & Editorial Headline (Right-aligned as in Image 2) */}
        <div className="pointer-events-auto text-right self-end flex flex-col items-end">
          {/* Overhead Seasonal Tag */}
          {seasonTag && (
            <div className="font-poppins font-normal text-[14px] leading-[150%] tracking-[5px] uppercase text-[#97173a] opacity-100 rotate-0 mb-1.5 lg:mb-2 xl:mb-2.5 select-text whitespace-nowrap text-right">
              {seasonTag}
            </div>
          )}

          {/* Main Headline (Two Lines, Right-Aligned) */}
          <h1 className="font-serif font-bold text-[#97173a] text-[56px] md:text-[68px] lg:text-[84px] xl:text-[98px] 2xl:text-[104px] leading-[0.88] uppercase tracking-[-0.015em] select-none m-0 text-right">
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
