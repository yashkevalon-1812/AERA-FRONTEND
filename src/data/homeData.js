import heroImage from '../assets/hero.png'
import rackModelImage from '../assets/new-season/rack-model.jpg'
import coatModelImage from '../assets/new-season/coat-model.jpg'

import card1Image from '../assets/new-arrivals/card-1.jpg'
import card2Image from '../assets/new-arrivals/card-2.jpg'
import card3Image from '../assets/new-arrivals/card-3.jpg'
import card4Image from '../assets/new-arrivals/card-4.jpg'
import card5Image from '../assets/new-arrivals/card-5.jpg'

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
      text: 'Explore New Collection',
      link: '#new-collection',
    },
    rackImage: {
      src: rackModelImage,
      alt: 'Woman posing next to clothing rack in olive jumpsuit',
    },
    coatImage: {
      src: coatModelImage,
      alt: 'Model in grey double-breasted coat',
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
        alt: 'Model posing in cream mock neck top and black wide-leg trousers',
        category: 'For Her',
        title: 'Pleated Trouser',
        link: '#shop-trouser',
      },
      {
        id: 2,
        image: card2Image,
        alt: 'Couple modeling matching white oversized graphic t-shirts with cargo shorts',
        category: 'For Couple',
        title: 'Oversized Tshirt',
        link: '#shop-oversized-tshirt',
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
}
