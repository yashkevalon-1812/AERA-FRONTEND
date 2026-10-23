import heroImage from '../assets/hero.png'
import rackModelImage from '../assets/new-season/rack-model.jpg'
import coatModelImage from '../assets/new-season/coat-model.jpg'

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
}
