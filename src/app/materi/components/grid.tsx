import MateriCard from "./card"

const materiData = [
  { id: 1, title: "Materi Bab 1", bgImage: "/materi/bg.jpeg" ,href:"/materi/pdf-1"},
  { id: 2, title: "Materi Bab 2", bgImage: "/materi/bg.jpeg" ,href:"#"},
  { id: 3, title: "Materi Bab 3", bgImage: "/materi/bg.jpeg" ,href:"#"},
  { id: 4, title: "Materi Bab 4", bgImage: "/materi/bg.jpeg" ,href:"#"},
  { id: 5, title: "Materi Bab 5", bgImage: "/materi/bg.jpeg" ,href:"#"},
  { id: 6, title: "Materi Bab 6", bgImage: "/materi/bg.jpeg" ,href:"#"},
  { id: 7, title: "Materi Bab 7", bgImage: "/materi/bg.jpeg" ,href:"#"},

]

export default function MateriGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {materiData.map((materi) => (
        <MateriCard key={materi.id} title={materi.title} bgImage={materi.bgImage} href={materi.href} />
      ))}
    </div>
  )
}
