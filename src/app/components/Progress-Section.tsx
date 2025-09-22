import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function ProgressSection() {
  const progressData = [
    { subject: "Materi", progress: 85 },
    { subject: "Post-test", progress: 60 },
    { subject: "Video", progress: 75 },
  ]

  return (
    <Card className="bg-white w-240 h-45"> {/* fixed ukuran */}
      <div className="h-full w-full flex flex-col">
        {/* Header */}
        <CardHeader className="p-3 pb-1">
          <CardTitle className="text-sm font-semibold">Your Progress</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 p-3 pt-0 space-y-2">
          {progressData.map((item, index) => (
            <div key={index} className="space-y-1 w-full">
              <div className="flex justify-between items-center w-full">
                <span className="text-xs font-medium text-gray-700">{item.subject}</span>
                <span className="text-xs text-gray-500">{item.progress}%</span>
              </div>
              <Progress value={item.progress} className="h-1.5 w-full" />
            </div>
          ))}
        </CardContent>
      </div>
    </Card>
  )
}
