"use client"

import { useEffect, useState } from "react"
import { MessageCircle, Users } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

type Discussion = {
  id: number;
  title: string;
  description?: string;
  content?: string;
  author: string;
  authorInitials?: string;
  timeAgo?: string;
  timestamp?: string;
  lastActivity?: string;
  replies: number;
  tags: string[];
};

const defaultDiscussions: Discussion[] = [
  {
    id: 1,
    title: "Bagaimana cara membaca EKG dengan benar?",
    description:
      "Saya masih kesulitan dalam menginterpretasi hasil EKG pasien. Adakah tips atau metode yang mudah dipahami untuk pemula?",
    author: "dr. Sarah",
    authorInitials: "DS",
    timeAgo: "2 jam lalu",
    lastActivity: "30 menit lalu",
    replies: 15,
    tags: ["Klinik", "Terjawab"],
  },
  {
    id: 2,
    title: "Patofisiologi COVID-19 pada sistem respirasi",
    description:
      "Diskusi mendalam mengenai bagaimana SARS-CoV-2 mempengaruhi sistem pernapasan dan komplikasi yang dapat terjadi.",
    author: "Muhammad Ali",
    authorInitials: "MA",
    timeAgo: "5 jam lalu",
    lastActivity: "1 jam lalu",
    replies: 23,
    tags: ["Patologi"],
  },
  {
    id: 3,
    title: "Teknik suturing yang efektif untuk luka dalam",
    description:
      "Sharing pengalaman dan teknik jahit yang baik untuk berbagai jenis luka, terutama luka dalam yang memerlukan pendekatan khusus.",
    author: "dr. Budi",
    authorInitials: "DB",
    timeAgo: "6 jam lalu",
    lastActivity: "2 jam lalu",
    replies: 8,
    tags: ["Klinik"],
  },
]

interface DiscussionListProps {
  search: string;
}

export function DiscussionList({ search }: DiscussionListProps) {
  const [discussions, setDiscussions] = useState<Discussion[]>(defaultDiscussions)

  useEffect(() => {
    const savedDiscussions = localStorage.getItem("discussions")
    if (savedDiscussions) {
      const parsedDiscussions = JSON.parse(savedDiscussions)
      // Combine new discussions with default ones, avoiding duplicates
      const combinedDiscussions: Discussion[] = [
        ...parsedDiscussions,
        ...defaultDiscussions.filter(
          (defaultDisc) => !parsedDiscussions.some((saved: Discussion) => saved.id === defaultDisc.id),
        ),
      ];
      setDiscussions(combinedDiscussions)
    }
  }, [])

  const getAuthorInitials = (author: string) => {
    return author
      .split(" ")
      .map((name) => name.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2)
  }

  const filteredDiscussions = discussions.filter(discussion =>
    discussion.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Users className="w-5 h-5 text-green-600" />
        <h2 className="text-xl font-semibold text-gray-800">Diskusi Terbaru</h2>
      </div>

      <div className="space-y-4">
        {filteredDiscussions.map((discussion) => (
          <Card key={discussion.id} className="p-6 hover:shadow-md transition-shadow cursor-pointer">
            <div className="space-y-3">
              <div className="flex gap-2">
                {(Array.isArray(discussion.tags) ? discussion.tags : [discussion.tags]).map(
                  (tag) => (
                    <Badge
                      key={discussion.id + '-' + tag}
                      variant={tag === "Terjawab" ? "default" : "secondary"}
                      className={tag === "Terjawab" ? "bg-green-600 hover:bg-green-700" : ""}
                    >
                      {tag}
                    </Badge>
                  ),
                )}
              </div>

              <h3 className="text-lg font-semibold text-gray-900 hover:text-green-600 transition-colors">
                {discussion.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {discussion.description ?? discussion.content ?? ""}
              </p>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-3">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-green-100 text-green-700 text-xs">
                      {discussion.authorInitials ?? getAuthorInitials(discussion.author)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-sm">
                    <span className="font-medium text-gray-900">{discussion.author}</span>
                    <span className="text-gray-500 ml-2">
                      {discussion.timeAgo ?? discussion.timestamp ?? ""}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    <span>{discussion.replies}</span>
                  </div>
                  <span>Terakhir: {discussion.lastActivity ?? discussion.timestamp ?? ""}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
