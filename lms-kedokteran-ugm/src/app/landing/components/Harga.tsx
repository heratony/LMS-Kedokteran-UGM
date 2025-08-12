// app/pricing/page.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState<"lms" | "lmsVentilator">("lms");

  const plans = {
    lms: [
      {
        title: "Basic",
        price: "Rp 250.000 / bulan",
        features: ["Akses modul pembelajaran", "Video per bab", "Pre-test & Post-test"],
      },
      {
        title: "Pro",
        price: "Rp 450.000 / bulan",
        features: ["Semua di Basic", "Akses forum diskusi", "Sertifikat kelulusan"],
      },
      {
        title: "Enterprise",
        price: "Rp 750.000 / bulan",
        features: ["Semua di Pro", "Akses tak terbatas", "Pendampingan instruktur"],
      },
    ],
    lmsVentilator: [
      {
        title: "Basic Plus",
        price: "Rp 350.000 / bulan",
        features: ["Akses LMS", "Simulasi ventilator", "Pre-test & Post-test"],
      },
      {
        title: "Pro Plus",
        price: "Rp 550.000 / bulan",
        features: ["Semua di Basic Plus", "Akses forum diskusi", "Sertifikat kelulusan"],
      },
      {
        title: "Enterprise Plus",
        price: "Rp 900.000 / bulan",
        features: ["Semua di Pro Plus", "Pendampingan instruktur", "Kustomisasi pelatihan"],
      },
    ],
  };

  const activePlans = plans[activeTab];

  return (
    <section className="w-full py-16 px-6 lg:px-20 bg-white">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-8">
          Harga Langganan
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("lms")}
            className={`px-6 py-2 rounded-full font-medium transition ${
              activeTab === "lms"
                ? "bg-green-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            LMS
          </button>
          <button
            onClick={() => setActiveTab("lmsVentilator")}
            className={`px-6 py-2 rounded-full font-medium transition ${
              activeTab === "lmsVentilator"
                ? "bg-green-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            LMS & Ventilator
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activePlans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{
                scale: 1.03,
                backgroundColor: "#f0fdf4",
                boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
              }}
              className="border border-gray-200 rounded-2xl p-8 text-left transition-colors duration-300 bg-white cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-2 text-black">{plan.title}</h3>
              <p className="text-2xl font-bold text-green-600 mb-6">{plan.price}</p>
              <ul className="space-y-3 text-gray-700">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-600 mr-2">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition">
                Pilih Paket
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
