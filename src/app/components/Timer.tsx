"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useState } from "react"

export default function Timer() {
  const [time, setTime] = useState({
    days: 3,
    hours: 12,
    minutes: 54,
    seconds: 36,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { days, hours, minutes, seconds } = prev

        if (seconds > 0) {
          seconds--
        } else if (minutes > 0) {
          seconds = 59
          minutes--
        } else if (hours > 0) {
          seconds = 59
          minutes = 59
          hours--
        } else if (days > 0) {
          seconds = 59
          minutes = 59
          hours = 23
          days--
        }

        return { days, hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="bg-green-200 w-full max-w-md ml-5">
      <CardContent className="p-3">
        <div className="flex justify-between text-center">
          <div className="flex-1">
            <div className="text-2xl font-bold text-gray-800">
              {String(time.days).padStart(2, "0")}
            </div>
            <div className="text-xs text-gray-600">Days</div>
          </div>
          <div className="flex-1">
            <div className="text-2xl font-bold text-gray-800">
              {String(time.hours).padStart(2, "0")}
            </div>
            <div className="text-xs text-gray-600">Hours</div>
          </div>
          <div className="flex-1">
            <div className="text-2xl font-bold text-gray-800">
              {String(time.minutes).padStart(2, "0")}
            </div>
            <div className="text-xs text-gray-600">Minutes</div>
          </div>
          <div className="flex-1">
            <div className="text-2xl font-bold text-gray-800">
              {String(time.seconds).padStart(2, "0")}
            </div>
            <div className="text-xs text-gray-600">Seconds</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
