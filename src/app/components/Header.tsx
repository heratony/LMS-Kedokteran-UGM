import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="relative w-full h-40">
      {/* Gambar background pakai Next/Image */}
      <Image
        src="/bg.jpg"
        alt="Background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay putih biar teks tetap jelas */}
      <div className="absolute inset-0 bg-white/60"></div>

      {/* Konten */}
      <div className="relative flex items-center justify-center h-full">
        <h1 className="text-4xl font-bold text-green-600 text-center mb-10">
          E-Learning
        </h1>
      </div>
    </header>
  );
}
