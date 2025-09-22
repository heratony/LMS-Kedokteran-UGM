import MateriHeroSection from "./components/hero-section"
import MateriGrid from "./components/grid"

export default function MateriPage() {
  return (
    <div className=" bg-white rounded-tl-[45px] rounded-tr-[45px] -mt-8 relative z-10 shadow-gray-200">
      <MateriHeroSection />
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Semua Materi</h2>
        <MateriGrid />
      </main>
    </div>
  )
}
