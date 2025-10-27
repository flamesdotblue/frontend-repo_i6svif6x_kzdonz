import { MapPin, Star } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden rounded-b-3xl">
        <img
          src="https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=2000&auto=format&fit=crop"
          alt="Himalayan range in Nepal"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <p className="uppercase tracking-widest text-white/80 text-sm mb-3">Discover Nepal</p>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              Explore the Roof of the World — Your Gateway to Nepal’s Wonders!
            </h1>
            <p className="mt-4 text-white/90 text-base md:text-lg">
              From towering peaks to vibrant cities, craft your perfect journey with local guides, trusted experiences, and round‑the‑clock support.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#explore"
                className="bg-[#1E90FF] hover:bg-[#1877d8] text-white px-5 py-3 rounded-md shadow"
              >
                Start Exploring
              </a>
              <a
                href="#packages"
                className="bg-white/90 hover:bg-white text-gray-900 px-5 py-3 rounded-md shadow"
              >
                View Packages
              </a>
            </div>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { icon: <Star className="w-4 h-4" />, label: "Trusted Experiences" },
                { icon: <MapPin className="w-4 h-4" />, label: "Local Guides" },
                { icon: <span className="font-bold">24/7</span>, label: "Support" },
                { icon: <span className="font-bold">✔</span>, label: "Custom Itineraries" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-white/15 backdrop-blur rounded-md px-3 py-2"
                >
                  <span className="text-[#1E90FF] bg-white rounded p-1 inline-flex items-center justify-center">
                    {item.icon}
                  </span>
                  <span className="text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
