import heroImage from '../assets/hero.png'
import rackModelImage from '../assets/new-season/rack-model.jpg'
import coatModelImage from '../assets/new-season/coat-model.jpg'

import card1Image from '../assets/new-arrivals/card-1.jpg'
import card2Image from '../assets/new-arrivals/card-2.jpg'
import card3Image from '../assets/new-arrivals/card-3.jpg'
import card4Image from '../assets/new-arrivals/card-4.jpg'
import card5Image from '../assets/new-arrivals/card-5.jpg'

import sitImage from '../assets/art-of-dressing/sit.jpg'
import skirtImage from '../assets/art-of-dressing/skirt.jpg'
import coffeeImage from '../assets/art-of-dressing/coffee.jpg'
import tallImage from '../assets/art-of-dressing/tall.jpg'

import bottomsImage from '../assets/shop-the-edit/bottoms.jpg'
import dressesImage from '../assets/shop-the-edit/dresses.jpg'
import topsImage from '../assets/shop-the-edit/tops.jpg'

import menBannerImage from '../assets/dual-banners/men.jpg'
import womenBannerImage from '../assets/dual-banners/women.jpg'

import everydayMinimalImage from '../assets/trending-now/everyday-minimal.jpg'
import afterDarkImage from '../assets/trending-now/after-dark.jpg'
import softStructureImage from '../assets/trending-now/soft-structure.jpg'

import mostWantedCard1 from '../assets/most-wanted/card-1.png'
import mostWantedCard2 from '../assets/most-wanted/card-2.png'
import mostWantedCard3 from '../assets/most-wanted/card-3.png'
import mostWantedCard4 from '../assets/most-wanted/card-4.png'
import mostWantedCard5 from '../assets/most-wanted/card-5.png'

import wearWhatBannerImage from '../assets/wear-what/wear-what-banner.jpg'

export const homeData = {
  hero: {
    wordmark: 'AERA',
    seasonTag: 'AUTUMN / WINTER 2026',
    headline: {
      line1: 'DRESSED',
      line2: 'FOR NOW',
    },
    description: [
      'New silhouettes. Refined essentials.',
      'A wardrobe made for the season ahead.',
    ],
    button: {
      text: 'Shop Now',
      action: 'shop-now',
    },
    modelImage: {
      src: heroImage,
      alt: 'AERA Autumn Winter 2026 Collection',
    },
  },
  newSeason: {
    verticalTag: 'WEAR WHAT YOU FEEL.',
    headerTag: 'NEW SEASON NEW STYLE',
    headline: {
      line1: 'THE NEW',
      line2: 'SEASON',
    },
    description:
      'Textured layers, relaxed tailoring and everyday silhouettes designed for colder days.',
    button: {
      text: 'Explore Collection',
      link: '#collection',
    },
    rackImage: {
      src: rackModelImage,
      alt: 'Model in olive silk dress standing next to a minimalist clothing rack with neutral garments on wooden hangers',
    },
    coatImage: {
      src: coatModelImage,
      alt: 'Model wearing a tailored dark wool trench coat with structured lapels standing against a textured limestone wall',
    },
  },
  newArrivals: {
    title: 'New Arrivals',
    tagline: 'THE LATEST PIECES, JUST IN.',
    viewAll: {
      text: 'VIEW ALL',
      link: '#view-all',
    },
    activeSlide: 2,
    items: [
      {
        id: 1,
        image: card1Image,
        alt: 'Model in beige knitted high-neck sweater with tailored cream trousers in minimalist studio',
        category: 'For Her',
        title: 'High-Neck Cashmere',
        link: '#shop-cashmere',
      },
      {
        id: 2,
        image: card2Image,
        alt: 'Model in charcoal double-breasted oversized tailored wool coat walking on city pavement',
        category: 'New Season',
        title: 'Tailored Wool Coat',
        link: '#shop-coat',
      },
      {
        id: 3,
        image: card3Image,
        alt: 'Model in black knitwear and beige trousers sitting on studio stool',
        category: 'For Him',
        title: 'Minimalist Knitwear',
        link: '#shop-knitwear',
      },
      {
        id: 4,
        image: card4Image,
        alt: 'Model in chocolate brown satin halter top and wide-leg trousers with sunglasses',
        category: 'For Her',
        title: 'Satin Halter Top',
        link: '#shop-halter',
      },
      {
        id: 5,
        image: card5Image,
        alt: 'Model in terracotta linen button-down shirt and beige trousers',
        category: 'For Him',
        title: 'Linen Button-down',
        link: '#shop-linen',
      },
    ],
  },
  artOfDressing: {
    eyebrow: 'A CONSIDERED WARDROBE',
    title: {
      line1: 'THE ART',
      line2: 'OF DRESSING',
    },
    quote: '“Fashion is not about more. It’s about finding what feels right and looks good on you.”',
    button: {
      text: 'DISCOVER OUR STORY',
      link: '#story',
    },
    images: {
      sit: { src: sitImage, alt: 'Woman in brown leather jacket and wide blue jeans' },
      skirt: { src: skirtImage, alt: 'Model in brown bomber jacket and white bubble mini skirt' },
      coffee: { src: coffeeImage, alt: 'Woman holding coffee cup and brown suede handbag' },
      tall: { src: tallImage, alt: 'Model in white top and baggy blue jeans with hands in hair' },
    },
  },
  brandTicker: {
    brands: [
      { name: 'MANGO', style: 'font-sans font-bold tracking-[0.2em] text-[13px] sm:text-[15px] md:text-[17px]' },
      { name: 'H&M', style: 'font-serif italic font-semibold tracking-wider text-[16px] sm:text-[19px] md:text-[22px]' },
      { name: 'Bershka', style: 'font-sans font-medium tracking-wide text-[13px] sm:text-[15px] md:text-[16px]' },
      { name: 'ONLY', style: 'font-sans font-black tracking-tight text-[15px] sm:text-[17px] md:text-[19px]' },
      { name: 'NEXT', style: 'font-sans font-light tracking-[0.26em] text-[12px] sm:text-[14px] md:text-[15px]' },
      { name: 'COS', style: 'font-sans font-bold tracking-[0.3em] text-[13px] sm:text-[15px] md:text-[17px]' },
    ],
  },
  shopTheEdit: {
    title: {
      line1: 'SHOP',
      line2: 'THE EDIT',
    },
    description: [
      'Discover thoughtfully styled pieces',
      'that make every outfit feel',
      'effortlessly chic. Shop the edit and',
      'find your next wardrobe favourite.',
    ],
    button: {
      text: 'Shop Now',
      link: '#shop-edit',
    },
    cards: [
      {
        id: 'bottoms',
        category: 'BOTTOMS',
        image: bottomsImage,
        alt: 'Model in cropped black jacket and black split front trousers',
        link: '#bottoms',
      },
      {
        id: 'dresses',
        category: 'DRESSES',
        image: dressesImage,
        alt: 'Model in cream sleeveless flared maxi dress with red handbag',
        link: '#dresses',
      },
      {
        id: 'tops',
        category: 'TOPS',
        image: topsImage,
        alt: 'Model in white structured pointed-collar blouse and brown skirt',
        link: '#tops',
      },
    ],
  },
  dualPromotion: {
    men: {
      eyebrow: "MEN'S EDIT",
      headline: 'THE MODERN MAN',
      subtitle: [
        'Refined Essentials. Relaxed Silhouettes.',
        'Made For Every Day.',
      ],
      promo: {
        discount: '20% OFF',
        tag: 'SELECTED STYLES',
      },
      link: '#mens-edit',
      image: menBannerImage,
      alt: "Men's Edit - The Modern Man",
    },
    women: {
      eyebrow: "WOMEN'S EDIT",
      headline: {
        line1: 'THE NEW',
        line2: 'FEMININE',
      },
      subtitle: [
        'Modern Silhouettes, Effortless Layers And',
        'Pieces Designed To Be Remembered.',
      ],
      promo: {
        discount: '20% OFF',
        tag: 'SELECTED STYLES',
      },
      link: '#womens-edit',
      image: womenBannerImage,
      alt: "Women's Edit - The New Feminine",
    },
  },
  trendingNow: {
    headline: {
      line1: 'TRENDING',
      line2: 'NOW',
    },
    description: [
      'The pieces defining',
      'the season, time and',
      'events of your life.',
    ],
    items: [
      {
        id: 'everyday-minimal',
        title: 'EVERYDAY MINIMAL',
        image: everydayMinimalImage,
        alt: 'Everyday Minimal - Model in red knit polo and cream trousers',
        link: '#everyday-minimal',
      },
      {
        id: 'after-dark',
        title: 'AFTER DARK',
        image: afterDarkImage,
        alt: 'After Dark - Model in white bubble mini dress on stairs',
        link: '#after-dark',
      },
      {
        id: 'soft-structure',
        title: 'SOFT STRUCTURE',
        image: softStructureImage,
        alt: 'Soft Structure - Model in oversized tailored coat and pleated trousers',
        link: '#soft-structure',
      },
    ],
  },
  mostWanted: {
    headline: 'MOST WANTED',
    items: [
      {
        id: 'most-wanted-1',
        title: 'Ivory Tailored Blazer',
        image: mostWantedCard1,
        alt: 'Model in ivory tailored blazer, yellow top, and pleated trousers',
        link: '#most-wanted-1',
      },
      {
        id: 'most-wanted-2',
        title: 'Relaxed Ribbed Knit',
        image: mostWantedCard2,
        alt: 'Model in cream textured knit sweater leaning against white wall',
        link: '#most-wanted-2',
      },
      {
        id: 'most-wanted-3',
        title: 'Pink Wrap Mini Dress',
        image: mostWantedCard3,
        alt: 'Model in pink ribbed wrap mini dress in studio',
        link: '#most-wanted-3',
      },
      {
        id: 'most-wanted-4',
        title: 'Marbled Halter Top',
        image: mostWantedCard4,
        alt: 'Model in marbled print crop top and high-waisted black trousers',
        link: '#most-wanted-4',
      },
      {
        id: 'most-wanted-5',
        title: 'Cropped Utility Jacket',
        image: mostWantedCard5,
        alt: 'Model in brown utility jacket, black mini skirt, and tall boots',
        link: '#most-wanted-5',
      },
    ],
  },
  wearWhatMovesYou: {
    heading: {
      line1: 'WEAR WHAT',
      line2: 'MOVES YOU',
    },
    subtitle: [
      'Pieces Designed To Become Part Of The Way',
      'You Move, Live And Express Yourself.',
    ],
    button: {
      text: 'DISCOVER OUR STORY',
      link: '#our-story',
    },
    bannerImage: wearWhatBannerImage,
  },
}
