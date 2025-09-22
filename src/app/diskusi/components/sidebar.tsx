import { TrendingUp, Calendar, Clock } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const trendingTopics = [
  "#Patofisiologi COVID-19",
  "#Teknik Suturing",
  "#EKG Interpretation",
  "#Farmakologi Antibiotik",
  "#Anatomi Sistem Saraf",
]

const offlineEvents = [
  {
    title: "Workshop EKG Dasar",
    date: "15 Januari 2024",
    time: "09:00 - 16:00",
    location: "Ruang Seminar A",
    slotsLeft: 15,
  },
  {
    title: "Pelatihan Suturing",
    date: "22 Januari 2024",
    time: "13:00 - 17:00",
    location: "Lab Keterampilan",
    slotsLeft: 8,
  },
]

export function Sidebar() {
  return (
    <div className="space-y-6">
      {/* Trending Topics */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-yellow-600" />
          <h3 className="font-semibold text-gray-800">Topik Trending</h3>
        </div>
        <div className="space-y-2">
          {trendingTopics.map((topic, index) => (
            <div key={index} className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer transition-colors">
              {topic}
            </div>
          ))}
        </div>
      </Card>

      {/* Offline Events */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-5 h-5 text-green-600" />
          <h3 className="font-semibold text-gray-800">Jadwal Pelatihan Offline</h3>
        </div>
        <div className="space-y-4">
          {offlineEvents.map((event, index) => (
            <div key={index} className="border-l-4 border-green-500 pl-4 py-2">
              <h4 className="font-medium text-gray-900 mb-1">{event.title}</h4>
              <div className="text-sm text-gray-600 space-y-1">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{event.time}</span>
                </div>
                <div className="text-xs text-gray-500">{event.location}</div>
              </div>
              <Badge className="mt-2 bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
                {event.slotsLeft} slot tersisa
              </Badge>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
