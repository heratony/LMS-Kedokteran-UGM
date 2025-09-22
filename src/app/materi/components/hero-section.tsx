import Link from "next/link"
import { X } from "lucide-react"

export default function MateriHeroSection() {
  return (
    <section
      className="relative h-80 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-green-400/80 to-green-600/80"></div>

      <Link
        href="/"
        className="absolute top-10 right-4 z-10  hover:bg-black rounded-full p-2 transition-colors"
      >
        <X className="w-6 h-6 text-white" />
      </Link>

      <div className="relative container mx-auto px-4 h-full flex items-center justify-between">
        <div className="text-white">
          <h1 className="text-4xl font-bold mb-4">Selamat Belajar!</h1>
          <p className="text-lg opacity-90">Mulai perjalanan pembelajaran Anda</p>
        </div>

        <div className="hidden md:block">
          <img src="/images/student-laptop.png" alt="Student with laptop" className="w-48 h-48 object-contain" />
        </div>
      </div>
    </section>
  )
}
