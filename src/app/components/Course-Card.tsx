import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

interface CourseCardProps {
  title: string
  image: string
  buttonText: string
  href: string
}

export default function CourseCard({ title, image, buttonText, href }: CourseCardProps) {
  return (
    <Card className="bg-white hover:shadow-lg transition-shadow duration-200 min-w-[320px] max-w-[320px] w-full">
      <CardContent className="p-8">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="relative w-32 h-32 mb-2">
            <Image src={image || "/placeholder.svg"} alt={title} fill className="object-contain" sizes="128px" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <Link href={href}>
            <Button className="px-8 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-green-500 hover:from-yellow-500 hover:to-green-600 text-white font-medium transition-all duration-200">
              {buttonText}
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
