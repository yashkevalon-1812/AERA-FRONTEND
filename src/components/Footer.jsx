import React from 'react'
import defaultFooterBg from '../assets/footer/footer-bg.jpg'

export default function Footer({
  brandName = 'AERA',
  primaryNav = [
    { label: 'NEW COLLECTIONS', link: '#new-collections' },
    { label: 'EVERYDAY ESSENTIALS', link: '#everyday-essentials' },
    { label: 'MODERN CLASSICS', link: '#modern-classics' },
  ],
  secondaryNav = [
    { label: 'ABOUT', link: '#about' },
    { label: 'HELP', link: '#help' },
    { label: 'CONTACT', link: '#contact' },
    { label: 'COLLECTION', link: '#collection' },
    { label: 'SHOP GUIDE', link: '#shop-guide' },
  ],
  socialLinks = [
    { platform: 'pinterest', url: 'https://pinterest.com', label: 'Pinterest' },
    { platform: 'instagram', url: 'https://instagram.com', label: 'Instagram' },
    { platform: 'facebook', url: 'https://facebook.com', label: 'Facebook' },
  ],
  legalLinks = [
    { label: 'PRIVACY', link: '#privacy' },
    { label: 'TERMS', link: '#terms' },
    { label: 'RETURNS', link: '#returns' },
  ],
  copyright = '© 2026 BRAND NAME',
  backgroundImage = defaultFooterBg,
  onNavClick,
}) {
  return (
    <footer 
      aria-label="Footer"
      className="relative w-full bg-[#615249] overflow-hidden select-none"
    >
      <div className="relative w-full max-w-[1920px] mx-auto @container min-h-[380px] md:min-h-0 md:aspect-[1024/358]">
        {/* Photographic Background of Model on Studio Floor */}
        <img
          src={backgroundImage || defaultFooterBg}
          alt="AERA Luxury Footwear & Editorial Autumn Winter"
          className="absolute inset-0 w-full h-full object-cover object-left md:object-center pointer-events-none select-none"
          loading="lazy"
        />

        {/* ============================================================== */}
        {/* DESKTOP & TABLET ARCHITECTURE (>= md): Calibrated fluid layout */}
        {/* ============================================================== */}
        <div className="hidden md:block absolute inset-0 w-full h-full pointer-events-auto">
          {/* 1. Header: AERA Wordmark (top: 14.25%, centered at 50%, font weight 600, w=134px) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[14.25%] z-10 text-center whitespace-nowrap">
            <h2 className="font-serif font-semibold text-[#EFEBDD] uppercase tracking-[0.07em] leading-none text-[clamp(28px,4.39cqw,72px)]">
              {brandName}
            </h2>
          </div>

          {/* 2. Primary Navigation Row (top: 32.68%, gap: 68px at 1024, Inter 600, 10px, tracking 0.08em) */}
          <nav 
            aria-label="Primary Footer Navigation"
            className="absolute left-1/2 -translate-x-1/2 top-[32.68%] z-10 flex items-center justify-center gap-[clamp(20px,6.64cqw,110px)] whitespace-nowrap"
          >
            {primaryNav.map((item, idx) => (
              <a
                key={idx}
                href={item.link || '#'}
                onClick={(e) => {
                  if (onNavClick) {
                    e.preventDefault()
                    onNavClick(item)
                  }
                }}
                className="font-inter font-semibold text-[#C7BEB5] hover:text-white transition-colors duration-200 uppercase tracking-[0.09em] text-[clamp(7.5px,0.98cqw,15px)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* 3. Editorial Horizontal Divider Line (top: 43.85%, left: 4.2%, right: 20.2%) */}
          <div 
            className="absolute left-[4.20%] right-[20.21%] top-[43.85%] h-[1px] bg-white/20 z-10 pointer-events-none"
          />

          {/* 4. Secondary Navigation Row: ABOUT | HELP | CONTACT | COLLECTION | SHOP GUIDE (top: 51.00%, Cormorant Garamond 500, 11.3px, tracking 0.05em, gap 44px) */}
          <nav 
            aria-label="Secondary Footer Navigation"
            className="absolute left-1/2 -translate-x-1/2 top-[51.00%] z-10 flex items-center justify-center gap-[clamp(16px,4.30cqw,75px)] whitespace-nowrap"
          >
            {secondaryNav.map((item, idx) => (
              <a
                key={idx}
                href={item.link || '#'}
                onClick={(e) => {
                  if (onNavClick) {
                    e.preventDefault()
                    onNavClick(item)
                  }
                }}
                className="font-serif font-medium text-[#EFEBDD] hover:text-white transition-colors duration-200 uppercase tracking-[0.05em] text-[clamp(9.5px,1.10cqw,18px)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* 5. Social Media Icons (top: 63.41%, centered, gap: 28px) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[63.41%] z-10 flex items-center justify-center gap-[clamp(14px,2.73cqw,42px)] text-[#EFEBDD]">
            {/* Pinterest */}
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pinterest"
              className="text-[#EFEBDD] hover:text-white hover:scale-110 transition-all duration-200"
            >
              <svg 
                className="w-[clamp(15px,1.85cqw,26px)] h-[clamp(15px,1.85cqw,26px)]" 
                viewBox="0 0 20 20" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="10" cy="10" r="8.8" stroke="currentColor" strokeWidth="1.2" />
                <path 
                  d="M9.1 14.8c.2-.9.6-2.6.6-2.6s-.2-.3-.2-.8c0-.8.5-1.4 1-1.4.5 0 .7.4.7.8 0 .5-.3 1.2-.5 1.9-.1.6.3 1 .9 1 1.1 0 1.9-1.2 1.9-2.9 0-1.5-1.1-2.6-2.7-2.6-1.8 0-2.9 1.4-2.9 2.8 0 .6.2 1.1.5 1.4.1.1.1.1 0 .3l-.2.7c0 .1-.1.2-.2.1-.8-.4-1.2-1.6-1.2-2.5 0-2.1 1.5-4 4.4-4 2.3 0 4.1 1.7 4.1 3.9 0 2.3-1.5 4.2-3.5 4.2-.7 0-1.3-.4-1.6-.8l-.4 1.7c-.2.6-.6 1.4-.9 1.9" 
                  fill="currentColor" 
                />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-[#EFEBDD] hover:text-white hover:scale-110 transition-all duration-200"
            >
              <svg 
                className="w-[clamp(16px,1.95cqw,27px)] h-[clamp(16px,1.95cqw,27px)]" 
                viewBox="0 0 20 20" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="2" y="2" width="16" height="16" rx="4.8" stroke="currentColor" strokeWidth="1.2" />
                <circle cx="10" cy="10" r="4.2" stroke="currentColor" strokeWidth="1.2" />
                <circle cx="14.8" cy="5.2" r="1.1" fill="currentColor" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-[#EFEBDD] hover:text-white hover:scale-110 transition-all duration-200"
            >
              <svg 
                className="w-[clamp(14px,1.66cqw,24px)] h-[clamp(14px,1.66cqw,24px)]" 
                viewBox="0 0 20 20" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="2" y="2" width="16" height="16" rx="3.5" stroke="currentColor" strokeWidth="1.2" />
                <path 
                  d="M12.5 7.2h-1.6c-.6 0-.9.4-.9.9V9.5H12.5l-.3 2.5H10v5.5H7.5V12H6V9.5h1.5V7.8c0-1.7 1-2.8 2.7-2.8h2.3V7.2z" 
                  fill="currentColor" 
                />
              </svg>
            </a>
          </div>

          {/* 6. Legal Row: PRIVACY | TERMS | RETURNS (top: 77.09%, gap: 28px, Inter 400, 7px, tracking 0.04em) */}
          <nav 
            aria-label="Legal Navigation"
            className="absolute left-1/2 -translate-x-1/2 top-[77.09%] z-10 flex items-center justify-center gap-[clamp(12px,2.73cqw,42px)] whitespace-nowrap"
          >
            {legalLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.link || '#'}
                onClick={(e) => {
                  if (onNavClick) {
                    e.preventDefault()
                    onNavClick(item)
                  }
                }}
                className="font-inter font-normal text-[#B5AAA1] hover:text-white transition-colors duration-200 uppercase tracking-[0.04em] text-[clamp(5.5px,0.68cqw,11px)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* 7. Copyright Line (top: 85.47%, centered, Inter 400, 7px, tracking 0.05em) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[85.47%] z-10 text-center whitespace-nowrap">
            <p className="font-inter font-normal text-[#A89E96] uppercase tracking-[0.05em] text-[clamp(5.5px,0.68cqw,11px)] leading-none">
              {copyright}
            </p>
          </div>
        </div>

        {/* ============================================================== */}
        {/* MOBILE ARCHITECTURE (< md): Elegant stacked luxury card        */}
        {/* ============================================================== */}
        <div className="md:hidden relative z-10 flex flex-col items-center justify-between h-full px-6 py-8 text-center bg-black/25">
          {/* Mobile Wordmark */}
          <div className="pt-2">
            <h2 className="font-serif font-semibold text-[#EFEBDD] uppercase tracking-[0.08em] text-3xl">
              {brandName}
            </h2>
          </div>

          {/* Mobile Primary Nav */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 py-3">
            {primaryNav.map((item, idx) => (
              <a
                key={idx}
                href={item.link || '#'}
                className="font-sans font-medium text-[#C7BEB5] text-[10px] tracking-wider uppercase hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Divider */}
          <div className="w-full max-w-[280px] h-[1px] bg-white/20 my-1" />

          {/* Mobile Secondary Nav */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 py-2">
            {secondaryNav.map((item, idx) => (
              <a
                key={idx}
                href={item.link || '#'}
                className="font-serif font-medium text-[#EFEBDD] text-xs tracking-wider uppercase hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Socials */}
          <div className="flex items-center justify-center gap-5 py-3 text-[#EFEBDD]">
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="w-5 h-5">
              <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
                <circle cx="10" cy="10" r="8.8" stroke="currentColor" strokeWidth="1.2" />
                <path d="M9.1 14.8c.2-.9.6-2.6.6-2.6s-.2-.3-.2-.8c0-.8.5-1.4 1-1.4.5 0 .7.4.7.8 0 .5-.3 1.2-.5 1.9-.1.6.3 1 .9 1 1.1 0 1.9-1.2 1.9-2.9 0-1.5-1.1-2.6-2.7-2.6-1.8 0-2.9 1.4-2.9 2.8 0 .6.2 1.1.5 1.4.1.1.1.1 0 .3l-.2.7c0 .1-.1.2-.2.1-.8-.4-1.2-1.6-1.2-2.5 0-2.1 1.5-4 4.4-4 2.3 0 4.1 1.7 4.1 3.9 0 2.3-1.5 4.2-3.5 4.2-.7 0-1.3-.4-1.6-.8l-.4 1.7c-.2.6-.6 1.4-.9 1.9" fill="currentColor" />
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-5 h-5">
              <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
                <rect x="2" y="2" width="16" height="16" rx="4.8" stroke="currentColor" strokeWidth="1.2" />
                <circle cx="10" cy="10" r="4.2" stroke="currentColor" strokeWidth="1.2" />
                <circle cx="14.8" cy="5.2" r="1.1" fill="currentColor" />
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-5 h-5">
              <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
                <rect x="2" y="2" width="16" height="16" rx="3.5" stroke="currentColor" strokeWidth="1.2" />
                <path d="M12.5 7.2h-1.6c-.6 0-.9.4-.9.9V9.5H12.5l-.3 2.5H10v5.5H7.5V12H6V9.5h1.5V7.8c0-1.7 1-2.8 2.7-2.8h2.3V7.2z" fill="currentColor" />
              </svg>
            </a>
          </div>

          {/* Mobile Legal & Copyright */}
          <div className="pt-2 flex flex-col items-center gap-1.5">
            <div className="flex items-center gap-3 text-[9px] text-[#B5AAA1] tracking-wider uppercase">
              {legalLinks.map((item, idx) => (
                <a key={idx} href={item.link || '#'} className="hover:text-white">
                  {item.label}
                </a>
              ))}
            </div>
            <p className="text-[8px] text-[#A89E96] tracking-wider uppercase">
              {copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
