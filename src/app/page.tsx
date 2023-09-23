import {
  Home as HomeIcon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react";
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
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Hot hits Brasil
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Aniver Funk
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              My Playlist
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Top Brasil
            </a>
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
          <div className="grid grid-cols-3 gap-4 mt-4">
            <a
              href="#"
              className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image src="/album.jpg" width={104} height={104} alt="ANTI" />
              <strong>ANTI</strong>
              <button className="w-12 h-12 invisible group-hover:visible flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image src="/album.jpg" width={104} height={104} alt="ANTI" />
              <strong>ANTI</strong>
              <button className="w-12 h-12 invisible group-hover:visible flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image src="/album.jpg" width={104} height={104} alt="ANTI" />
              <strong>ANTI</strong>
              <button className="w-12 h-12 invisible group-hover:visible flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image src="/album.jpg" width={104} height={104} alt="ANTI" />
              <strong>ANTI</strong>
              <button className="w-12 h-12 invisible group-hover:visible flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image src="/album.jpg" width={104} height={104} alt="ANTI" />
              <strong>ANTI</strong>
              <button className="w-12 h-12 invisible group-hover:visible flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image src="/album.jpg" width={104} height={104} alt="ANTI" />
              <strong>ANTI</strong>
              <button className="w-12 h-12 invisible group-hover:visible flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8">
                <Play />
              </button>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>
    </div>
  );
}
