import Link from "next/link"

interface MateriCardProps {
  title: string
  bgImage: string
  href: string
}

export default function MateriCard({ title, bgImage, href }: MateriCardProps) {
  return (
    <Link href={href} passHref>
      <div className="relative h-58 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
          style={{ backgroundImage: `url('${bgImage}')` }}
        ></div>

        <div className="absolute inset-0 bg-black/20"></div>

        <div className="absolute top-40">
          <div className="bg-yellow-100 px-4 h-20 py-2 w-122 rounded-md">
            <h3 className="text-black font-semibold text-center">{title}</h3>
          </div>
        </div>
      </div>
    </Link>
  )
}
