"use client"

import type React from "react"
import { useState } from "react"
import { ArrowLeft, CheckCircle, XCircle, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { useRouter } from "next/navigation"

const categories = [
  "Klinik",
  "Terjawab",
  "Patologi",
  "Farmakologi",
  "Anatomi",
  "Fisiologi",
  "Bedah",
  "Penyakit Dalam",
  "Pediatri",
  "Obstetri & Ginekologi",
]

export default function CreateDiscussionPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    content: "",
  })
  const [published, setPublished] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.title && formData.category && formData.content) {
      // Simpan di localStorage (demo purposes)
      const newDiscussion = {
        id: Date.now(),
        title: formData.title,
        category: formData.category,
        content: formData.content,
        author: "dr. User",
        timestamp: "Baru saja",
        replies: 0,
        lastActivity: "Baru saja",
      }

      const existingDiscussions = JSON.parse(localStorage.getItem("discussions") || "[]")
      existingDiscussions.unshift(newDiscussion)
      localStorage.setItem("discussions", JSON.stringify(existingDiscussions))

      // ubah tombol jadi sukses
      setPublished(true)

      // redirect setelah 1.5 detik
      setTimeout(() => {
        router.push("/diskusi")
      }, 1500)
    }
  }

  const handleReset = () => {
    setFormData({ title: "", category: "", content: "" })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Forum
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-green-600 mb-2">Buat Diskusi Baru</h1>
          <p className="text-gray-600">Bagikan pertanyaan atau topik medis untuk didiskusikan bersama</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* FORM */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Form Diskusi</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Judul Diskusi <span className="text-red-500">*</span>
                    </label>
                    <Input
                      placeholder="Masukkan judul diskusi yang jelas dan deskriptif"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Kategori <span className="text-red-500">*</span>
                    </label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) => setFormData({ ...formData, category: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih kategori diskusi" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Isi Diskusi <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      placeholder="Jelaskan pertanyaan atau topik yang ingin Anda diskusikan. Berikan detail yang cukup agar anggota lain dapat memberikan respons yang bermanfaat."
                      rows={8}
                      value={formData.content}
                      onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                      required
                    />
                  </div>

                  {/* Tombol */}
                  <div className="flex gap-4">
                    {published ? (
                      <Button disabled className="bg-green-600 hover:bg-green-700">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Diskusi berhasil terpublikasi
                      </Button>
                    ) : (
                      <Button type="submit" className="bg-green-600 hover:bg-green-700">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Publikasikan Diskusi
                      </Button>
                    )}

                    <Button type="button" variant="outline" onClick={handleReset}>
                      Reset Form
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* SIDEBAR */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Panduan Diskusi</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="font-medium text-green-600">Dos</span>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1 ml-6">
                    <li>• Gunakan judul yang jelas dan spesifik</li>
                    <li>• Berikan konteks yang cukup</li>
                    <li>• Pilih kategori yang tepat</li>
                    <li>• Gunakan bahasa yang sopan</li>
                    <li>• Sertakan referensi jika ada</li>
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle className="w-4 h-4 text-red-600" />
                    <span className="font-medium text-red-600">Donts</span>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1 ml-6">
                    <li>• Jangan posting konten tidak relevan</li>
                    <li>• Hindari pertanyaan yang terlalu umum</li>
                    <li>• Jangan gunakan bahasa tidak pantas</li>
                    <li>• Hindari spam atau duplikasi</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-yellow-50 border-yellow-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-yellow-700">
                  <Lightbulb className="w-4 h-4" />
                  Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-yellow-700">
                  Diskusi yang berkualitas akan mendapat lebih banyak respons dan membantu komunitas belajar bersama.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
