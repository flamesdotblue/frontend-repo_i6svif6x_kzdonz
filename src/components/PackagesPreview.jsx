const packages = [
  {
    title: "Cultural Heritage Tours",
    desc: "Explore Kathmandu, Bhaktapur, and Patan — UNESCO gems and living museums.",
    image:
      "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Adventure Trekking",
    desc: "Everest Base Camp, Annapurna Circuit and more bucket‑list treks.",
    image:
      "https://images.unsplash.com/photo-1607672561022-b75aa0f18e00?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Jungle Safaris",
    desc: "Encounter wildlife in Chitwan and Bardia on jeep or canoe safaris.",
    image:
      "https://images.unsplash.com/photo-1614882722767-4411a2dff2fc?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Scenic Helicopter Rides",
    desc: "Soar over the Himalayas for once‑in‑a‑lifetime aerial views.",
    image:
      "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Adventure Sports",
    desc: "Paragliding, rafting, and bungee jumping for thrill seekers.",
    image:
      "https://images.unsplash.com/photo-1505839673365-e3971f8d9184?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Pilgrimage Tours",
    desc: "Journey to Lumbini, Pashupatinath, and Muktinath.",
    image:
      "https://images.unsplash.com/photo-1559027615-5eeaaeac03d7?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function PackagesPreview() {
  return (
    <section id="packages" className="py-16 bg-gradient-to-b from-white to-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Featured Destinations & Packages</h2>
            <p className="text-gray-600 mt-1">Handpicked experiences across Nepal for every kind of traveler.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-block text-[#1E90FF] hover:underline">Need help choosing?</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <article key={pkg.title} className="group rounded-xl overflow-hidden bg-white shadow hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg">{pkg.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{pkg.desc}</p>
                <button className="mt-4 w-full bg-[#A0522D] text-white py-2 rounded-md hover:opacity-95">Book Now</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
