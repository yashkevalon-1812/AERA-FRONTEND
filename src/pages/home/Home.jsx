import Hero from './Hero'
import NewSeason from './NewSeason'
import { homeData as defaultHomeData } from '../../data/homeData'

export default function Home({
  data = defaultHomeData,
  onShopNow,
  onExploreNewSeason,
}) {
  const { hero, newSeason } = data || {}

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

      {/* All upcoming Home page sections will be imported and added here */}
    </div>
  )
}
