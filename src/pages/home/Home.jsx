import Hero from './Hero'
import { homeData as defaultHomeData } from '../../data/homeData'

export default function Home({
  data = defaultHomeData,
  onShopNow,
}) {
  const { hero } = data || {}

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

      {/* All upcoming Home page sections will be imported and added here */}
    </div>
  )
}
