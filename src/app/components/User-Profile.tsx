import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function UserProfile() {
  return (
    <div className="flex items-center ml-5 space-x-2">
      <Avatar className="h-8 w-8">
        <AvatarImage src="/profile-avatar.jpg" alt="Jane Doe" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <div>
        <h3 className="font-medium text-sm text-gray-900">Jane Doe</h3>
        <p className="text-xs text-gray-500">Mahasiswa</p>
      </div>
    </div>
  )
}
