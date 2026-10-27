import Hero from './Hero'
import NewSeason from './NewSeason'
import NewArrivals from './NewArrivals'
import ArtOfDressing from './ArtOfDressing'
import BrandBar from './BrandBar'
import ShopTheEdit from './ShopTheEdit'
import { homeData as defaultHomeData } from '../../data/homeData'

export default function Home({
  data = defaultHomeData,
  onShopNow,
  onExploreNewSeason,
  onViewAllArrivals,
  onArrivalItemClick,
  onDiscoverStory,
  onShopTheEdit,
  onEditCardClick,
}) {
  const { hero, newSeason, newArrivals, artOfDressing, brandTicker, shopTheEdit } = data || {}

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

      {/* 4. The Art of Dressing Editorial Section */}
      <ArtOfDressing
        eyebrow={artOfDressing?.eyebrow}
        title={artOfDressing?.title}
        quote={artOfDressing?.quote}
        button={artOfDressing?.button}
        images={artOfDressing?.images}
        onDiscover={onDiscoverStory}
      />

      {/* 5. Brand Partners Ribbon */}
      <BrandBar brands={brandTicker?.brands} />

      {/* 6. Shop The Edit Lookbook Section */}
      <ShopTheEdit
        title={shopTheEdit?.title}
        description={shopTheEdit?.description}
        button={shopTheEdit?.button}
        cards={shopTheEdit?.cards}
        onShopNow={onShopTheEdit}
        onCardClick={onEditCardClick}
      />

      {/* All upcoming Home page sections will be imported and added here */}
    </div>
  )
}
