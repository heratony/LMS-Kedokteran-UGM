import { Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

interface HeaderProps {
  search: string;
  setSearch: (val: string) => void;
}

export function Header({ search, setSearch }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-green-600">Forum Diskusi Kedokteran</h1>
            <p className="text-gray-600 text-sm mt-1">Platform diskusi untuk mahasiswa dan profesional kedokteran</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Cari diskusi..."
                className="pl-10 w-64"
                value={search}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
              />
            </div>
            <Link href="/diskusi/create">
              <Button className="bg-green-600 hover:bg-green-700">
                <Plus className="w-4 h-4 mr-2" />
                Buat Diskusi
              </Button>
            </Link>
            <Link href="/">
              <Button className="bg-green-600 hover:bg-green-700">
                Kembali
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
