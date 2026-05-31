export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D1B12] text-white">
      {/* Hero */}
      <section className="px-8 py-24 max-w-7xl mx-auto">
        <h1 className="text-6xl font-light leading-tight max-w-4xl">
          Premium Indonesian Spices for
          <span className="text-[#D4AF37]"> Global Markets</span>
        </h1>

        <p className="mt-6 text-lg text-gray-300 max-w-2xl">
          Connecting the richness of Indonesia’s natural origins with
          international partners worldwide.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-[#D4AF37] text-black px-6 py-3 rounded-lg font-medium">
            Request Catalogue
          </button>

          <button className="border border-[#D4AF37] px-6 py-3 rounded-lg">
            Contact Us
          </button>
        </div>
      </section>

      {/* About */}
      <section className="bg-white text-black py-20">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl mb-6">About Delvora Origins</h2>

          <p className="text-lg leading-relaxed">
            Delvora Origins is an Indonesian export-oriented company
            specializing in premium natural products including vanilla
            and cinnamon. Based in Yogyakarta, we connect Indonesia's
            finest agricultural resources with international markets,
            ensuring quality, sustainability, and long-term partnerships.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 max-w-6xl mx-auto px-8">
        <h2 className="text-4xl mb-10">Our Products</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#13251A] p-8 rounded-xl">
            <h3 className="text-2xl text-[#D4AF37]">
              Vanilla
            </h3>

            <p className="mt-4 text-gray-300">
              Premium Indonesian vanilla beans with rich aroma,
              high moisture content, and exceptional quality.
            </p>
          </div>

          <div className="bg-[#13251A] p-8 rounded-xl">
            <h3 className="text-2xl text-[#D4AF37]">
              Cinnamon
            </h3>

            <p className="mt-4 text-gray-300">
              High-quality Indonesian cinnamon sourced directly
              from trusted farming regions.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 text-center">
        <h3 className="text-2xl text-[#D4AF37]">
          Delvora Origins
        </h3>

        <p className="mt-2 text-gray-400">
          Rooted in Nature, Growing Prosperity
        </p>

        <p className="mt-4 text-gray-500">
          hello@delvoraorigins.com
        </p>
      </footer>
    </main>
  );
}