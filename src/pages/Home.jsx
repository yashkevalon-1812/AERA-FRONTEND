import Hero from '../components/Hero'

export default function Home({ onShopNow }) {
  return (
    <div className="w-full flex-1 flex flex-col">
      {/* Hero Section */}
      <Hero onShopNow={onShopNow} />
    </div>
  )
}
