"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function DescriptionSection() {
  return (
    <section className="bg-white py-16 px-6 lg:px-20 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Kiri: Teks */}
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-black leading-snug">
            Pembelajaran Medis Interaktif <br /> untuk Masa Depan Kesehatan
          </h2>
          <p className="mt-4 text-gray-600">
            <span className="italic">From zero to skillful!</span> <br />
            Bukan sekadar platform pembelajaran, kami menyediakan solusi lengkap
            mulai dari materi interaktif, simulasi praktis, evaluasi terstruktur,
            hingga pelaporan kemajuan untuk memastikan kompetensi Anda tercapai
            secara optimal.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-green-700 font-semibold">Simulasi Praktis</h3>
              <p className="text-gray-600 text-sm">
                Latihan langsung melalui simulasi ventilator dan skenario medis realistis.
              </p>
            </div>
            <div>
              <h3 className="text-green-700 font-semibold">Pembelajaran Bertahap</h3>
              <p className="text-gray-600 text-sm">
                Materi disusun dari dasar hingga tingkat lanjutan agar pembelajaran lebih terarah.
              </p>
            </div>
          </div>

          {/* Tombol */}
          <div className="mt-8 flex items-center">
            <button className="flex items-center gap-3 bg-gray-200 hover:bg-gray-300 text-black font-semibold px-5 py-2 rounded-full">
              Mulai Belajar
              <span className="bg-white p-1 rounded-full">
                <ArrowRight size={18} />
              </span>
            </button>
          </div>
        </div>

        {/* Right Images (Zigzag Stack) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full h-[400px] flex items-center justify-center"
        >
          {/* Image 1 */}
          <Image
            src="/Images/landingPage/desc1.png"
            alt="Gambar 1"
            width={220}
            height={300}
            className="absolute top-0 left-1/2 -translate-x-[90%] rounded-lg shadow-lg"
            priority
          />
          {/* Image 2 */}
          <Image
            src="/Images/landingPage/desc2.png"
            alt="Gambar 2"
            width={220}
            height={300}
            className="absolute top-16 left-1/2 -translate-x-[20%] rounded-lg shadow-lg"
            priority
          />
          {/* Image 3 */}
          <Image
            src="/Images/landingPage/desc3.png"
            alt="Gambar 3"
            width={220}
            height={300}
            className="absolute top-32 left-1/2 -translate-x-[65%] rounded-lg shadow-lg"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
