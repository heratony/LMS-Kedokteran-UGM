"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CheckCircle } from "lucide-react"

export default function RegisterPage() {
  const router = useRouter()
  const [showSuccess, setShowSuccess] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    job: "",
    gender: "",
    email: "",
    password: "",
    phone: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleRadioChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()

    // Store registration data
    const registrationData = {
      ...formData,
      registrationDate: new Date().toISOString(),
    }

    // Save to localStorage (in real app, this would be sent to backend)
    const existingUsers = JSON.parse(localStorage.getItem("registeredUsers") || "[]")
    existingUsers.push(registrationData)
    localStorage.setItem("registeredUsers", JSON.stringify(existingUsers))

    // Show success message
    setShowSuccess(true)

    // Redirect to login after 3 seconds
    setTimeout(() => {
      router.push("/login")
    }, 3000)
  }

  if (showSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
              <h2 className="text-2xl font-bold text-gray-900">Pendaftaran Berhasil!</h2>
              <p className="text-gray-600">
                Akun Anda telah berhasil dibuat. Anda akan diarahkan ke halaman login dalam beberapa detik.
              </p>
              <div className="pt-4">
                <Button onClick={() => router.push("/login")} className="bg-green-500 hover:bg-green-600">
                  Lanjut ke Login
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex">
      {/* Left side - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <Image src="/doctor/doctor.png" alt="Medical Professional" fill className="object-cover" priority />
      </div>

      {/* Right side - Register Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-green-600">Daftar Akun</CardTitle>
              <CardDescription>Buat akun baru untuk bergabung</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleRegister} className="space-y-4">
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullName">Nama Lengkap</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    placeholder="masukkan nama lengkap"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Job Type */}
                <div className="space-y-3">
                  <Label>Pekerjaan</Label>
                  <RadioGroup value={formData.job} onValueChange={(value) => handleRadioChange("job", value)}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="dokter" id="dokter" />
                      <Label htmlFor="dokter">Dokter</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="perawat" id="perawat" />
                      <Label htmlFor="perawat">Perawat</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Gender */}
                <div className="space-y-3">
                  <Label>Jenis Kelamin</Label>
                  <RadioGroup value={formData.gender} onValueChange={(value) => handleRadioChange("gender", value)}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="pria" id="pria" />
                      <Label htmlFor="pria">Pria</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="wanita" id="wanita" />
                      <Label htmlFor="wanita">Wanita</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Alamat Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="masukkan alamat email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="buat password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone">Nomor HP</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="masukkan nomor HP"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-green-500 hover:bg-green-600">
                  Daftar
                </Button>
              </form>

              <div className="text-center mt-4">
                <p className="text-gray-600">
                  Sudah punya akun?{" "}
                  <Link href="/login" className="text-green-600 hover:underline font-medium">
                    Login sekarang
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
