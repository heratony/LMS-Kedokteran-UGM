"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProfilePopup() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true); // default terbuka untuk contoh

  const profile = {
    name: "Jane Doe",
    gender: "Female",
    profesi : "Dokter",
    memberId: "000011111111000000001",
    memberType: "PLATINUM",
    memberSince: "20 January 2026",
    memberPacket: "3 Months",
    memberActiveUntil: "20 May 2026",
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[500px] relative">
        {/* Tombol Close */}
        <button
          onClick={() => {
            setIsOpen(false);
            router.push("/dashboard"); // arahkan ke dashboard
          }}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>

        {/* Bagian Profil */}
        <div className="flex items-center gap-6">
          {/* Foto Profil */}
          <div className="w-28 h-28 rounded-full overflow-hidden shadow-md">
            <Image
              src="/Images/profile/profile.jpeg"
              alt="Profile"
              width={112}
              height={112}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Info Profil */}
          <div className="flex flex-col gap-3">
            <input
              type="text"
              value={profile.name}
              readOnly
              className="border rounded-md px-3 py-2 w-64 bg-gray-50 text-black "
            />
            <input
              type="text"
              value={profile.gender}
              readOnly
              className="border rounded-md px-3 py-2 w-64 bg-gray-50 text-black"
            />
            <input
              type="text"
              value={profile.profesi}
              readOnly
              className="border rounded-md px-3 py-2 w-64 bg-gray-10 text-black"
            />
          </div>
        </div>

        {/* Tombol */}
        <div className="flex gap-6 mt-6 justify-center">
          <button
            onClick={() => router.push("/dashboard/profile/editProfile")} // arahkan ke edit profile
            className="bg-green-700 hover:bg-green-800 text-white px-8 py-2 rounded-md shadow"
          >
            Edit Profile
          </button>
          <button
            onClick={() => router.push("/login")} // arahkan ke login
            className="bg-green-700 hover:bg-green-800 text-white px-8 py-2 rounded-md shadow"
          >
            Keluar
          </button>
        </div>

        {/* Member Card */}
        <div
          className="mt-8 rounded-xl shadow-lg relative overflow-hidden"
          style={{
            background: "linear-gradient(to right, #E6E0FF, #F5D1FF)",
          }}
        >
          {/* Header */}
          <div className="flex justify-between items-center px-4 pt-3 text-sm">
            <span className="bg-purple-300 px-3 py-1 rounded-tl-lg rounded-br-lg text-gray-800">
              Member card
            </span>
            <span className="text-gray-700">
              Active Until {profile.memberActiveUntil}
            </span>
          </div>

          {/* Card Body */}
          <div className="px-4 pb-4 mt-2">
            <h2 className="text-2xl font-bold tracking-widest text-purple-900">
              {profile.memberType}
            </h2>
            <p className="text-gray-700 mt-1">
              Member since {profile.memberSince}
            </p>
            <p className="text-gray-700">
              Packet member {profile.memberPacket}
            </p>
          </div>

          {/* Gambar Kubus */}
          <div className="absolute right-6 bottom-6 w-20 h-20">
            <Image
              src="/Images/profile/member1.png"
              alt="Cube"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
