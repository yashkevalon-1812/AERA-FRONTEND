export default function Hero({ onShopNow }) {
  return (
    <section className="relative w-full overflow-hidden bg-[#F8F5E8] flex flex-col justify-end min-h-[600px] sm:min-h-[700px] md:min-h-[760px] lg:min-h-[calc(100vh-88px)] max-h-[1080px]">
      
      {/* 1. Large Decorative Background Wordmark: A E R A */}
      <div 
        className="absolute top-[6%] sm:top-[9%] md:top-[12%] lg:top-[13%] left-1/2 -translate-x-1/2 w-full text-center select-none pointer-events-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <span className="font-serif text-[28vw] sm:text-[24vw] md:text-[21vw] lg:text-[20vw] xl:text-[280px] 2xl:text-[320px] font-normal tracking-[0.24em] text-[#E8E2D0] uppercase leading-none block whitespace-nowrap opacity-85">
          AERA
        </span>
      </div>

      {/* 2. Desktop Models (Centered & Anchored to the Bottom) */}
      <div className="hidden md:flex absolute inset-x-0 bottom-0 top-[8%] lg:top-[5%] items-end justify-center pointer-events-none z-10">
        <img
          src="/hero.png"
          alt="AERA Autumn Winter 2026 Collection"
          className="h-[88%] lg:h-[93%] xl:h-[96%] w-auto max-w-[84%] lg:max-w-[78%] xl:max-w-[1160px] object-contain object-bottom select-none"
          loading="eager"
        />
      </div>

      {/* 3. Desktop & Tablet Overlays (>= md) — Matching Figma Reference 1:1 */}
      <div className="hidden md:flex relative z-20 w-full max-w-[1720px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20 pb-8 md:pb-12 lg:pb-14 items-end justify-between pointer-events-none">
        
        {/* Bottom-Left: Supporting Copy & Shop Now Button */}
        <div className="pointer-events-auto max-w-[280px] lg:max-w-[320px] xl:max-w-[340px] text-left">
          <p className="text-[#97173a] text-[13px] lg:text-[14px] font-sans font-medium leading-[1.42] tracking-normal mb-3.5 select-text">
            New silhouettes. Refined essentials.<br />
            A wardrobe made for the season ahead.
          </p>

          <button
            onClick={onShopNow}
            className="inline-flex items-center justify-center bg-[#97173a] hover:bg-[#7e122f] text-white text-[12.5px] font-semibold px-6 py-2.5 rounded-lg transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer tracking-normal"
          >
            Shop Now
          </button>
        </div>

        {/* Bottom-Right: Seasonal Tag & Editorial Headline */}
        <div className="pointer-events-auto text-left self-end">
          {/* Overhead Tag */}
          <div className="mb-1.5 lg:mb-2">
            <span className="text-[#97173a] text-[11px] lg:text-[12px] font-sans font-semibold tracking-[0.28em] uppercase block">
              AUTUMN / WINTER 2026
            </span>
          </div>

          {/* Main Headline (Two Lines, Left-Aligned) */}
          <h1 className="font-serif font-bold text-[#97173a] text-[58px] md:text-[68px] lg:text-[84px] xl:text-[98px] 2xl:text-[112px] leading-[0.88] uppercase tracking-[-0.015em] select-none m-0">
            <span className="block">DRESSED</span>
            <span className="block">FOR NOW</span>
          </h1>
        </div>

      </div>

      {/* 4. Mobile Layout (< md): Elegant editorial stacked flow (No overlap on faces or clothing) */}
      <div className="flex md:hidden flex-col items-center justify-between min-h-[calc(100vh-95px)] relative z-20 px-5 pt-3 pb-6 pointer-events-none">
        
        {/* Top Tag & Title */}
        <div className="pointer-events-auto text-center z-20 pt-1">
          <span className="text-[#97173a] text-[10px] font-sans font-semibold tracking-[0.26em] uppercase block mb-1">
            AUTUMN / WINTER 2026
          </span>
          <h1 className="font-serif font-bold text-[#97173a] text-[34px] sm:text-[40px] leading-[0.92] uppercase tracking-tight m-0">
            DRESSED FOR NOW
          </h1>
        </div>

        {/* Mobile Models Image */}
        <div className="w-full flex-1 flex items-center justify-center my-2 pointer-events-none">
          <img
            src="/hero.png"
            alt="AERA Autumn Winter 2026 Collection"
            className="max-h-[46vh] w-auto max-w-[94%] object-contain select-none"
            loading="eager"
          />
        </div>

        {/* Bottom Copy & Button */}
        <div className="pointer-events-auto text-center z-20">
          <p className="text-[#97173a] text-[12px] font-sans font-medium leading-[1.35] mb-2.5">
            New silhouettes. Refined essentials.<br />
            A wardrobe made for the season ahead.
          </p>
          <button
            onClick={onShopNow}
            className="inline-flex items-center justify-center bg-[#97173a] hover:bg-[#7e122f] text-white text-xs font-semibold px-6 py-2.5 rounded-lg transition-colors shadow-xs cursor-pointer"
          >
            Shop Now
          </button>
        </div>

      </div>

    </section>
  )
}
