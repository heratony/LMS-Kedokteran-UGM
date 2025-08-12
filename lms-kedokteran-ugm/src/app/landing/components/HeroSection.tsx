"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center px-6 lg:px-20"
      style={{
        background: "linear-gradient(90deg, #5eff8bff 0%, #f6af2cff 50%, #ffed4dff 100%)",
      }}
    >
      <div className="max-w-[1440px] w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side */}
        <motion.div className="text-left" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug text-black">
            Solusi Cerdas untuk Keunggulan Medis: <br />
            Ventilator Pintar & LMS Interaktif.
          </h1>
          <p className="text-gray-800 mt-4 text-base sm:text-lg">Menghadirkan solusi terintegrasi yang menghubungkan perawatan kritis dan pelatihan medis, dirancang untuk membentuk masa depan layanan kesehatan.</p>

          <div className="mt-6 flex gap-4">
            {/* Tombol Login */}
            <Link
              href="/login"
              className="bg-white text-black px-6 py-2 rounded-full shadow-md font-medium 
               hover:bg-green-400 hover:text-white transition duration-300"
            >
              login
            </Link>

            {/* Tombol Daftar */}
            <Link
              href="/register"
              className="bg-white text-black px-6 py-2 rounded-full shadow-md font-medium 
               hover:bg-yellow-400 hover:text-black transition duration-300"
            >
              daftar sekarang
            </Link>
          </div>

          {/* Disclaimer */}
          <p className="mt-3 text-xs text-gray-700 italic">*Materi ini disusun untuk keperluan pengajaran dan pelatihan. Tidak untuk digunakan sebagai panduan medis langsung pada pasien.</p>
        </motion.div>

        {/* Right Side */}
        <motion.div className="flex justify-center lg:justify-end" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image src="/Images/landingPage/her.png" alt="Ventilator & LMS" width={500} height={500} className="object-contain" priority />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
