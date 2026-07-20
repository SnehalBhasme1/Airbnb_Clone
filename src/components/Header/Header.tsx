import { Globe, Menu, Search, UserCircle } from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-20 max-w-[1120px] items-center justify-between">
        
        {/* Logo */}
       <div className="flex items-center">
  <Image
    src="/images/download.png"
    alt="Airbnb Logo"
    width={65}
    height={25}
    priority
  />
</div>

        {/* Search Bar */}
        <button className="flex items-center rounded-full border border-gray-300 bg-white py-2 pl-5 pr-2 shadow-sm transition hover:shadow-md">
          <span className="text-sm font-semibold">Anywhere</span>

          <div className="mx-4 h-5 w-px bg-gray-300"></div>

          <span className="text-sm font-semibold">Any week</span>

          <div className="mx-4 h-5 w-px bg-gray-300"></div>

          <span className="text-sm text-gray-500">Add guests</span>

          <div className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#FF385C] text-white">
            <Search size={14} strokeWidth={3} />
          </div>
        </button>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          <button className="rounded-full px-4 py-3 text-sm font-medium transition hover:bg-gray-100">
            Airbnb your home
          </button>

          <button className="rounded-full p-3 transition hover:bg-gray-100">
            <Globe size={18} />
          </button>

          <button className="flex items-center gap-3 rounded-full border border-gray-300 px-3 py-2 shadow-sm transition hover:shadow-md">
            <Menu size={18} />
            <UserCircle size={30} className="text-gray-500" />
          </button>
        </div>
      </div>
    </header>
  );
}