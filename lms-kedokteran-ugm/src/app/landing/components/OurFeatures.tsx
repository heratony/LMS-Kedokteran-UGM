// components/OurFeatures.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    icon: "/Images/landingPage/bookmark.png",
    title: "Modul Pembelajaran",
    desc: "Materi disusun per bab dan dilengkapi dengan video pelatihan, pre-test, serta post-test, untuk mendukung proses belajar yang terstruktur dan efektif.",
  },
  {
    icon: "/Images/landingPage/monitor.png",
    title: "Simulasi Ventilator",
    desc: "Latihan interaktif yang mensimulasikan penggunaan ventilator secara realistis, membantu memahami fungsi dan pengoperasian alat secara aman.",
  },
  {
    icon: "/Images/landingPage/chatroom.png",
    title: "Forum Chat",
    desc: "Ruang diskusi untuk tanya jawab, berbagi pengetahuan, dan kolaborasi antar peserta dan instruktur.",
  },
];

export default function OurFeatures() {
  return (
    <section className="w-full py-16 px-6 lg:px-20 bg-white">
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Tag */}
        <span className="bg-green-100 text-black px-6 py-2 rounded-full text-sm font-medium">
          our features
        </span>

        {/* Title */}
        <h2 className="mt-6 text-3xl lg:text-4xl font-bold text-black">
          Solusi belajar dan simulasi medis dalam satu platform.
        </h2>

        {/* Subtitle */}
        <p className="mt-2 text-gray-500">
          Fitur interaktif untuk mendukung pembelajaran dan pelatihan medis secara praktis.
        </p>
      </div>

      {/* Features */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-xl p-8 flex flex-col items-center text-center border border-gray-200 shadow-sm"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              whileHover={{ rotate: 5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Image
                src={feature.icon}
                alt={feature.title}
                width={50}
                height={50}
                className="mb-4"
              />
            </motion.div>
            <h3 className="text-lg font-semibold text-black">{feature.title}</h3>
            <p className="text-gray-700 mt-2">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
