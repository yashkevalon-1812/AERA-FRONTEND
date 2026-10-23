import Hero from './Hero'
import NewSeason from './NewSeason'
import NewArrivals from './NewArrivals'
import { homeData as defaultHomeData } from '../../data/homeData'

export default function Home({
  data = defaultHomeData,
  onShopNow,
  onExploreNewSeason,
  onViewAllArrivals,
  onArrivalItemClick,
}) {
  const { hero, newSeason, newArrivals } = data || {}

  return (
    <div className="w-full flex-1 flex flex-col">
      {/* 1. Dynamic Hero Section */}
      <Hero
        wordmark={hero?.wordmark}
        seasonTag={hero?.seasonTag}
        headline={hero?.headline}
        description={hero?.description}
        buttonText={hero?.button?.text}
        modelImage={hero?.modelImage}
        onShopNow={onShopNow}
      />

      {/* 2. New Season Editorial Section */}
      <NewSeason
        verticalTag={newSeason?.verticalTag}
        headerTag={newSeason?.headerTag}
        headline={newSeason?.headline}
        description={newSeason?.description}
        button={newSeason?.button}
        rackImage={newSeason?.rackImage}
        coatImage={newSeason?.coatImage}
        onExplore={onExploreNewSeason}
      />

      {/* 3. New Arrivals Carousel Section */}
      <NewArrivals
        title={newArrivals?.title}
        tagline={newArrivals?.tagline}
        viewAll={newArrivals?.viewAll}
        activeSlide={newArrivals?.activeSlide}
        items={newArrivals?.items}
        onViewAll={onViewAllArrivals}
        onItemClick={onArrivalItemClick}
      />

      {/* All upcoming Home page sections will be imported and added here */}
    </div>
  )
}
