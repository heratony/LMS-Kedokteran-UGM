import CourseCard from "./Course-Card"

export default function CourseGrid() {
  const courses = [
    {
      id: 1,
      title: "Materi",
      image: "/materi-image.jpg",
      buttonText: "Mulai Belajar",
      buttonVariant: "default" as const,
      href: "/materi",
    },
    {
      id: 2,
      title: "LMS",
      image: "/lms-image.jpg",
      buttonText: "Mulai Belajar",
      buttonVariant: "default" as const,
      href: "/lms",
    },
    {
      id: 3,
      title: "Simulator",
      image: "/ventilator-image.jpg",
      buttonText: "Mulai Belajar",
      buttonVariant: "default" as const,
      href: "/ventilator",
    },
    {
      id: 4,
      title: "Forum Chat",
      image: "/forum-chat-image.jpg",
      buttonText: "Mulai Chat",
      buttonVariant: "secondary" as const,
      href: "/diskusi",
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          title={course.title}
          image={course.image}
          buttonText={course.buttonText}
          href={course.href}
        />
      ))}
    </div>
  )
}
