import React from 'react'

import mangoLogo from '../../assets/brands/mango.png'
import mangoLogo2x from '../../assets/brands/mango@2x.png'
import hmLogo from '../../assets/brands/hm.png'
import hmLogo2x from '../../assets/brands/hm@2x.png'
import bershkaLogo from '../../assets/brands/bershka.png'
import bershkaLogo2x from '../../assets/brands/bershka@2x.png'
import onlyLogo from '../../assets/brands/only.png'
import onlyLogo2x from '../../assets/brands/only@2x.png'
import nextLogo from '../../assets/brands/next.png'
import nextLogo2x from '../../assets/brands/next@2x.png'
import cosLogo from '../../assets/brands/cos.png'
import cosLogo2x from '../../assets/brands/cos@2x.png'

const BRAND_ITEMS = [
  { name: 'MANGO', logo: mangoLogo, logo2x: mangoLogo2x, height: 14, width: 73 },
  { name: 'H&M', logo: hmLogo, logo2x: hmLogo2x, height: 20, width: 28 },
  { name: 'Bershka', logo: bershkaLogo, logo2x: bershkaLogo2x, height: 16, width: 62 },
  { name: 'ONLY', logo: onlyLogo, logo2x: onlyLogo2x, height: 12, width: 50 },
  { name: 'NEXT', logo: nextLogo, logo2x: nextLogo2x, height: 12, width: 49 },
  { name: 'COS', logo: cosLogo, logo2x: cosLogo2x, height: 15, width: 36 },
]

// Repeat 4 sets per half so Half A is ~4000px wide (covers all displays up to 4K seamlessly)
const HALF_SET = [...BRAND_ITEMS, ...BRAND_ITEMS, ...BRAND_ITEMS, ...BRAND_ITEMS]

export default function BrandBar() {
  return (
    <div 
      aria-label="Brand Partners"
      className="w-full bg-[#97173A] text-white select-none overflow-hidden h-[37px] flex items-center relative z-10"
    >
      <style>{`
        @keyframes marquee-left-to-right {
          0% {
            transform: translate3d(-50%, 0, 0);
          }
          100% {
            transform: translate3d(0%, 0, 0);
          }
        }
        .brand-marquee-track {
          display: flex;
          width: max-content;
          align-items: center;
          animation: marquee-left-to-right 50s linear infinite;
          will-change: transform;
        }
        .brand-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Infinite Left-to-Right Scrolling Track */}
      <div className="brand-marquee-track flex items-center">
        {/* Half A */}
        <div className="flex items-center flex-nowrap">
          {HALF_SET.map((brand, idx) => (
            <div
              key={`half-a-${idx}`}
              className="flex-shrink-0 flex items-center justify-center w-[165px] transition-opacity duration-200 hover:opacity-100 opacity-95 cursor-pointer"
            >
              <img
                src={brand.logo}
                srcSet={`${brand.logo2x} 2x`}
                alt={brand.name}
                className="select-none pointer-events-none object-contain"
                style={{ height: `${brand.height}px`, width: 'auto' }}
                loading="eager"
              />
            </div>
          ))}
        </div>

        {/* Half B (Duplicate for seamless loop) */}
        <div className="flex items-center flex-nowrap">
          {HALF_SET.map((brand, idx) => (
            <div
              key={`half-b-${idx}`}
              className="flex-shrink-0 flex items-center justify-center w-[165px] transition-opacity duration-200 hover:opacity-100 opacity-95 cursor-pointer"
            >
              <img
                src={brand.logo}
                srcSet={`${brand.logo2x} 2x`}
                alt={brand.name}
                className="select-none pointer-events-none object-contain"
                style={{ height: `${brand.height}px`, width: 'auto' }}
                loading="eager"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
