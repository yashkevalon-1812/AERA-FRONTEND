import React from 'react'

const defaultBrands = [
  { name: 'MANGO', style: 'font-sans font-bold tracking-[0.22em] text-[13px] sm:text-[14px] md:text-[15px]' },
  { name: 'H&M', style: 'font-serif italic font-bold tracking-wider text-[17px] sm:text-[19px] md:text-[21px]' },
  { name: 'Bershka', style: 'font-sans font-medium tracking-wide text-[13.5px] sm:text-[15px] md:text-[16px]' },
  { name: 'ONLY', style: 'font-sans font-black tracking-tight text-[15px] sm:text-[16.5px] md:text-[18px]' },
  { name: 'NEXT', style: 'font-sans font-light tracking-[0.24em] text-[12.5px] sm:text-[14px] md:text-[15px]' },
  { name: 'COS', style: 'font-sans font-bold tracking-[0.28em] text-[13px] sm:text-[14.5px] md:text-[16px]' },
]

export default function BrandBar({ brands = defaultBrands }) {
  const brandList = brands && brands.length > 0 ? brands : defaultBrands

  return (
    <div className="w-full bg-[#97173A] text-white select-none overflow-hidden h-[37px] flex items-center">
      <div className="w-full max-w-[1920px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 h-full flex items-center">
        
        {/* Evenly Spaced Brand Row */}
        <div className="w-full flex items-center justify-between gap-4 sm:gap-6 md:gap-8 flex-nowrap overflow-x-auto no-scrollbar">
          {brandList.map((brand, idx) => (
            <div
              key={idx}
              className="flex-1 min-w-fit text-center flex items-center justify-center transition-opacity hover:opacity-85 cursor-default"
            >
              <span className={`${brand.style || 'font-sans font-bold'} text-white block leading-none whitespace-nowrap`}>
                {brand.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
