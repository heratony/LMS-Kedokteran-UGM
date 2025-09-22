import Header from "./components/Header"
import UserProfile from "./components/User-Profile"
import Timer from "./components/Timer"
import ProgressSection from "./components/Progress-Section"
import CourseGrid from "./components/Course-Grid"

export default function HomePage() {
  return (
    <div className=" bg-yellow-500">
      {/* Header full image */}
      <Header />

      {/* Konten dengan bg putih dan sudut atas melengkung */}
      <main className="bg-white rounded-tl-[45px] rounded-tr-[45px] -mt-8 relative z-10 shadow-gray-200">
        <div className="container mx-auto px-2 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left Column */}
            <div className="lg:col-span-1 space-y-6">
              <UserProfile />
              <Timer />
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <ProgressSection />
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <CourseGrid />
          </div>
        </div>
      </main>
    </div>
  )
}
