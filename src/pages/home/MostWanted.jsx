import React from 'react'
import defaultCard1 from '../../assets/most-wanted/card-1.png'
import defaultCard2 from '../../assets/most-wanted/card-2.png'
import defaultCard3 from '../../assets/most-wanted/card-3.png'
import defaultCard4 from '../../assets/most-wanted/card-4.png'
import defaultCard5 from '../../assets/most-wanted/card-5.png'

export default function MostWanted({
  headline = 'MOST WANTED',
  items = [
    {
      id: 'most-wanted-1',
      title: 'Ivory Tailored Blazer',
      image: defaultCard1,
      alt: 'Model in ivory tailored blazer, yellow top, and pleated trousers',
      link: '#most-wanted-1',
    },
    {
      id: 'most-wanted-2',
      title: 'Relaxed Ribbed Knit',
      image: defaultCard2,
      alt: 'Model in cream textured knit sweater leaning against white wall',
      link: '#most-wanted-2',
    },
    {
      id: 'most-wanted-3',
      title: 'Pink Wrap Mini Dress',
      image: defaultCard3,
      alt: 'Model in pink ribbed wrap mini dress in studio',
      link: '#most-wanted-3',
    },
    {
      id: 'most-wanted-4',
      title: 'Marbled Halter Top',
      image: defaultCard4,
      alt: 'Model in marbled print crop top and high-waisted black trousers',
      link: '#most-wanted-4',
    },
    {
      id: 'most-wanted-5',
      title: 'Cropped Utility Jacket',
      image: defaultCard5,
      alt: 'Model in brown utility jacket, black mini skirt, and tall boots',
      link: '#most-wanted-5',
    },
  ],
  onItemClick,
}) {
  const card1 = items?.[0] || { id: 'most-wanted-1', image: defaultCard1, title: 'Look 1' }
  const card2 = items?.[1] || { id: 'most-wanted-2', image: defaultCard2, title: 'Look 2' }
  const card3 = items?.[2] || { id: 'most-wanted-3', image: defaultCard3, title: 'Look 3' }
  const card4 = items?.[3] || { id: 'most-wanted-4', image: defaultCard4, title: 'Look 4' }
  const card5 = items?.[4] || { id: 'most-wanted-5', image: defaultCard5, title: 'Look 5' }

  return (
    <section 
      aria-label="Most Wanted"
      className="w-full bg-[#F8F5E6] pt-[16px] pb-[18px] overflow-hidden select-none"
    >
      <div className="w-full max-w-[1920px] mx-auto bg-[#97173A] pt-[32px] md:pt-[41px] pb-[35px] md:pb-[43px] px-[20px] sm:px-[35px] md:px-[65px]">
        
        {/* ============================================================== */}
        {/* 1. Header: MOST WANTED                                         */}
        {/* Calibrated typography: Cormorant Garamond, #B0BACD ice blue    */}
        {/* ============================================================== */}
        <div className="text-center mb-[26px] md:mb-[31px]">
          <h2 className="font-serif font-medium text-[#B0BACD] uppercase tracking-[0.06em] leading-none text-[32px] sm:text-[38px] md:text-[44px] lg:text-[45px] xl:text-[56px]">
            {headline}
          </h2>
        </div>

        {/* ============================================================== */}
        {/* 2. Desktop 5-Card Perspective Layout (>= md)                   */}
        {/* Exact column fractions: 146 : 139 : 219 : 146 : 139           */}
        {/* ============================================================== */}
        <div className="hidden md:grid grid-cols-[146fr_139fr_219fr_146fr_139fr] gap-[26px] items-center">
          
          {/* Card 1 */}
          <div 
            className="flex items-center justify-center cursor-pointer group transition-all duration-500 hover:scale-[1.04]"
            onClick={() => onItemClick && onItemClick(card1)}
          >
            <img
              src={card1.image || defaultCard1}
              alt={card1.alt || card1.title}
              className="w-full h-auto object-contain pointer-events-none drop-shadow-sm"
            />
          </div>

          {/* Card 2 */}
          <div 
            className="flex items-center justify-center cursor-pointer group transition-all duration-500 hover:scale-[1.04]"
            onClick={() => onItemClick && onItemClick(card2)}
          >
            <img
              src={card2.image || defaultCard2}
              alt={card2.alt || card2.title}
              className="w-full h-auto object-contain pointer-events-none drop-shadow-sm"
            />
          </div>

          {/* Card 3: Center Hero Card */}
          <div 
            className="flex items-center justify-center cursor-pointer group transition-all duration-500 hover:scale-[1.04]"
            onClick={() => onItemClick && onItemClick(card3)}
          >
            <img
              src={card3.image || defaultCard3}
              alt={card3.alt || card3.title}
              className="w-full h-auto object-contain pointer-events-none drop-shadow-md"
            />
          </div>

          {/* Card 4 */}
          <div 
            className="flex items-center justify-center cursor-pointer group transition-all duration-500 hover:scale-[1.04]"
            onClick={() => onItemClick && onItemClick(card4)}
          >
            <img
              src={card4.image || defaultCard4}
              alt={card4.alt || card4.title}
              className="w-full h-auto object-contain pointer-events-none drop-shadow-sm"
            />
          </div>

          {/* Card 5 */}
          <div 
            className="flex items-center justify-center cursor-pointer group transition-all duration-500 hover:scale-[1.04]"
            onClick={() => onItemClick && onItemClick(card5)}
          >
            <img
              src={card5.image || defaultCard5}
              alt={card5.alt || card5.title}
              className="w-full h-auto object-contain pointer-events-none drop-shadow-sm"
            />
          </div>

        </div>

        {/* ============================================================== */}
        {/* 3. Mobile Swipeable Carousel (< md)                            */}
        {/* ============================================================== */}
        <div className="flex md:hidden overflow-x-auto snap-x snap-mandatory gap-4 px-2 pb-2 no-scrollbar items-center">
          {[card1, card2, card3, card4, card5].map((card, idx) => (
            <div 
              key={card.id || idx}
              className={`snap-center flex-shrink-0 cursor-pointer transition-transform duration-300 ${
                idx === 2 ? 'w-[68vw] max-w-[280px]' : 'w-[54vw] max-w-[220px]'
              }`}
              onClick={() => onItemClick && onItemClick(card)}
            >
              <img
                src={card.image}
                alt={card.alt || card.title}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
