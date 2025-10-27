import { Globe, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0b1220] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold">Get in Touch</h3>
            <p className="text-white/80 mt-2 max-w-prose">
              Planning a trip to Nepal? Our local experts are here for you 24/7.
              Reach out for custom itineraries, quick questions, or group deals.
            </p>
            <div className="mt-6 space-y-3">
              <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> +977-1-5551234, +977-980-1234567</p>
              <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> hello@nepalexplore.com, support@nepalexplore.com</p>
              <p className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Kathmandu, Nepal</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://wa.me/9779801234567"
                target="_blank"
                rel="noreferrer"
                className="bg-[#1E90FF] hover:bg-[#1877d8] text-white px-5 py-2 rounded-md shadow"
              >
                Chat Now on WhatsApp
              </a>
              <a
                href="#packages"
                className="bg-white text-gray-900 px-5 py-2 rounded-md shadow hover:bg-white/90"
              >
                Explore Packages
              </a>
            </div>
            <div className="mt-8 flex items-center gap-4 text-white/80">
              <a href="#" aria-label="Facebook" className="hover:text-white">Fb</a>
              <a href="#" aria-label="Instagram" className="hover:text-white">Ig</a>
              <a href="#" aria-label="YouTube" className="hover:text-white">Yt</a>
            </div>
          </div>
          <div>
            <div className="w-full h-72 rounded-lg overflow-hidden shadow-lg border border-white/10">
              <iframe
                title="Kathmandu Office Map"
                src="https://www.google.com/maps?q=Kathmandu&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="mt-3 text-sm text-white/70">
              Our headquarters are located in central Kathmandu for easy access.
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-sm text-white/70">
          <p>© {new Date().getFullYear()} NepalExplore. All rights reserved.</p>
          <p className="flex items-center gap-2"><Globe className="w-4 h-4" /> Explore. Experience. Elevate.</p>
        </div>
      </div>
    </footer>
  );
}
