import Header from "./components/Header";
import Hero from "./components/Hero";
import PackagesPreview from "./components/PackagesPreview";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Header />
      <main>
        <Hero />
        <section id="explore" className="py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 p-6 rounded-2xl border bg-white shadow-sm">
                <h2 className="text-xl md:text-2xl font-bold">Why Choose Us</h2>
                <ul className="mt-4 grid sm:grid-cols-2 gap-4 text-gray-700">
                  <li className="p-4 rounded-lg bg-[#f1f8ff] border border-[#cfe6ff]">
                    <p className="font-semibold text-[#1E90FF]">Local Guides</p>
                    <p className="text-sm mt-1">Travel with experts born and raised in Nepal’s regions.</p>
                  </li>
                  <li className="p-4 rounded-lg bg-[#fff7f1] border border-[#ffe1c9]">
                    <p className="font-semibold text-[#A0522D]">Customizable Itineraries</p>
                    <p className="text-sm mt-1">Tailor every day of your trip to match your pace and interests.</p>
                  </li>
                  <li className="p-4 rounded-lg bg-[#f1fff6] border border-[#c9f5d6]">
                    <p className="font-semibold text-emerald-700">Trusted Experiences</p>
                    <p className="text-sm mt-1">Highly rated tours with excellent safety and service standards.</p>
                  </li>
                  <li className="p-4 rounded-lg bg-[#f5f1ff] border border-[#e0d7ff]">
                    <p className="font-semibold text-indigo-700">24/7 Support</p>
                    <p className="text-sm mt-1">We’re with you every step — before, during, and after your trip.</p>
                  </li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="#packages" className="bg-[#1E90FF] text-white px-4 py-2 rounded-md">View Packages</a>
                  <a href="#contact" className="bg-[#A0522D] text-white px-4 py-2 rounded-md">Contact Us</a>
                </div>
              </div>
              <div className="p-0 lg:p-2">
                <div className="rounded-2xl overflow-hidden border shadow-sm h-full min-h-[320px]">
                  <iframe
                    title="Kathmandu HQ Map"
                    src="https://www.google.com/maps?q=Kathmandu&output=embed"
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <PackagesPreview />
      </main>
      <Footer />
    </div>
  );
}
