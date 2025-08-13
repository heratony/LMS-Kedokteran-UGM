"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function PelatihanPage() {
  const [role, setRole] = useState("dokter");
  const [date, setDate] = useState("");
  const [form, setForm] = useState({
    nama: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-center text-green-700 text-2xl font-bold mb-10">Pelatihan Offline</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Jadwal */}
        <section>
          <h2 className="text-green-700 font-semibold mb-6 text-lg">Jadwal Pembelajaran Offline</h2>

          <div className="relative ml-6">
            {/* Garis vertikal timeline */}
            <div className="absolute top-5 left-3 w-0.5 h-full bg-gray-300"></div>

            {/* Item 1 */}
            <div className="mb-10 relative pl-6">
              <span className="absolute left-0 top-1 w-4 h-4 rounded-full bg-green-700"></span>
              <p className="text-gray-600">
                <strong>senin, 11 Agustus 2025</strong>
                <br />
                10:00 - 14:00 WIB
                <br />
                Gedung Matahari
              </p>
            </div>

            {/* Item 2 */}
            <div className="mb-10 relative pl-6">
              <span className="absolute left-0 top-1 w-4 h-4 rounded-full bg-green-700"></span>
              <p className="text-gray-600">
                <strong>senin, 18 Agustus 2025</strong>
                <br />
                09:00 - 11:00 WIB
                <br />
                Gedung Awan
              </p>
            </div>
          </div>
        </section>

        {/* Form Daftar */}
        <section>
          <form className="border border-gray-300 rounded-md p-6 shadow-sm max-w-md mx-auto">
            <h2 className="text-green-700 font-semibold mb-6 text-lg text-center">Daftar Sekarang!</h2>

            <input
              type="text"
              name="nama"
              placeholder="nama lengkap"
              value={form.nama}
              onChange={handleChange}
              className="w-full mb-4 px-3 py-2 border text-gray-500 border-gray-400 rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="email"
              value={form.email}
              onChange={handleChange}
              className="w-full mb-4 px-3 py-2 border text-gray-500 border-gray-400 rounded"
              required
            />

            <div className="mb-4 flex gap-8 items-center justify-left">
              {["dokter", "perawat"].map((val) => {
                const isSelected = role === val;
                return (
                  <motion.label
                    key={val}
                    htmlFor={val}
                    initial={{ scale: 1 }}
                    animate={{
                      fontWeight: isSelected ? 700 : 400,
                      color: isSelected ? "#6B46C1" : "#9CA3AF", // purple-600 if selected, gray-400 if not
                      scale: isSelected ? 1.05 : 1,
                    }}
                    whileHover={{ scale: 1.1, color: "#805AD5" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex items-center gap-2 cursor-pointer select-none"
                  >
                    <input
                      type="radio"
                      id={val}
                      name="role"
                      value={val}
                      checked={isSelected}
                      onChange={() => setRole(val)}
                      className="accent-purple-600"
                    />
                    <span className="capitalize">{val}</span>
                  </motion.label>
                );
              })}
            </div>

            <label htmlFor="date" className="block text-black font-semibold mb-1">
              pilih hari
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full mb-4 px-3 py-2 border border-purple-600 text-black rounded"
              required
            />

            <button
              type="submit"
              className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800 transition"
            >
              Daftar
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
