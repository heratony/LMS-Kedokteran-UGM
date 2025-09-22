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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LoginPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [activeTab, setActiveTab] = useState("mahasiswa")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate login process
    console.log("Login attempt:", { ...formData, userType: activeTab })

    // Store user session
    localStorage.setItem(
      "userSession",
      JSON.stringify({
        email: formData.email,
        userType: activeTab,
        loginTime: new Date().toISOString(),
      }),
    )

    // Redirect to forum
    router.push("/")
  }

  return (
    <div className="min-h-screen flex">
      {/* Left side - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <Image src="/doctor/doctor.png" alt="Medical Professional" fill className="object-cover" priority />
      </div>

      {/* Right side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md space-y-8">
          {/* Logo and Title */}
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">LMS</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">E-Learning</h1>
            <p className="text-gray-600 mt-2">Portal Pembelajran Kesehatan </p>
          </div>

          {/* Login Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger
                value="mahasiswa"
                className="data-[state=active]:bg-green-500 data-[state=active]:text-white"
              >
                Mahasiswa
              </TabsTrigger>
              <TabsTrigger value="admin" className="data-[state=active]:bg-green-500 data-[state=active]:text-white">
                Admin
              </TabsTrigger>
            </TabsList>

            <TabsContent value="mahasiswa">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-green-600">Login Mahasiswa</CardTitle>
                  <CardDescription>Masuk ke akun mahasiswa Anda</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="masukkan email Anda"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="masukkan password Anda"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="text-right">
                      <Link href="#" className="text-sm text-green-600 hover:underline">
                        Lupa password?
                      </Link>
                    </div>
                    <Button type="submit" className="w-full bg-green-500 hover:bg-green-600">
                      Login
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="admin">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-green-600">Login Admin</CardTitle>
                  <CardDescription>Masuk ke panel admin</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="admin-email">Email</Label>
                      <Input
                        id="admin-email"
                        name="email"
                        type="email"
                        placeholder="masukkan email admin"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="admin-password">Password</Label>
                      <Input
                        id="admin-password"
                        name="password"
                        type="password"
                        placeholder="masukkan password admin"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="text-right">
                      <Link href="#" className="text-sm text-green-600 hover:underline">
                        Lupa password?
                      </Link>
                    </div>
                    <Button type="submit" className="w-full bg-green-500 hover:bg-green-600">
                      Login
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Register Link */}
          <div className="text-center">
            <p className="text-gray-600">
              Belum punya akun?{" "}
              <Link href="/register" className="text-green-600 hover:underline font-medium">
                Daftar sekarang
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
