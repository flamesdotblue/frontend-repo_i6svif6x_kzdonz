import { Globe, Phone } from "lucide-react";
import Chatbot from "./Chatbot";

export default function Header() {
  return (
    <>
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            <a href="#home" className="flex items-center gap-2 font-semibold text-[#1E90FF]">
              <Globe className="w-6 h-6" />
              <span className="text-lg">NepalExplore</span>
            </a>
            <nav className="hidden md:flex items-center gap-8 text-gray-700">
              <a href="#explore" className="hover:text-[#1E90FF] transition-colors">Explore</a>
              <a href="#packages" className="hover:text-[#1E90FF] transition-colors">Packages</a>
              <a href="#contact" className="hover:text-[#1E90FF] transition-colors">Contact</a>
            </nav>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#1E90FF] text-white px-4 py-2 rounded-md shadow hover:shadow-md transition-shadow"
            >
              <Phone className="w-4 h-4" />
              <span>24/7 Support</span>
            </a>
          </div>
        </div>
      </header>
      <Chatbot />
    </>
  );
}
