import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-700"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <nav className="space-y-5 mt-10">
            <a
              href=""
              className="flex items-center gap-2 text-sm font-semibold text-zinc-200"
            >
              {" "}
              <HomeIcon />
              Home
            </a>
            <a
              href=""
              className="flex items-center gap-2 text-sm font-semibold text-zinc-200"
            >
              {" "}
              <Search /> Search
            </a>
            <a
              href=""
              className="flex items-center gap-2 text-sm font-semibold text-zinc-200"
            >
              <Library />
              Your library
            </a>
          </nav>
          <nav className="mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-3">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Hot hits Brasil</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Aniver Funk</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">My Playlist</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Top Brasil</a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>
          <h1 className="font-semibold text-text-3xl mt-10">Good Afternoon</h1>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white/10 rounded-">
              <Image src="/album.jpg" width={80} height={80} alt="ANTI"/>
            </div>
            <div className="bg-white/10 rounded-">
              <Image src="/album.jpg" width={80} height={80} alt="ANTI"/>
            </div>
            <div className="bg-white/10 rounded-">
              <Image src="/album.jpg" width={80} height={80} alt="ANTI"/>
            </div>
            <div className="bg-white/10 rounded-">
              <Image src="/album.jpg" width={80} height={80} alt="ANTI"/>
            </div>
            <div className="bg-white/10 rounded-">
              <Image src="/album.jpg" width={80} height={80} alt="ANTI"/>
            </div>
            <div className="bg-white/10 rounded-">
              <Image src="/album.jpg" width={80} height={80} alt="ANTI"/>
            </div>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>
    </div>
  );
}
