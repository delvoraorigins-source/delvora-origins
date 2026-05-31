import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#07120B] text-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-[#07120B]/90 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Delvora"
              width={42}
              height={42}
            />
            <div>
              <h1 className="text-[#D4AF37] tracking-[4px]">
                DELVORA
              </h1>
              <p className="text-xs tracking-[6px] text-[#D4AF37]">
                ORIGINS
              </p>
            </div>
          </div>

          <div className="hidden md:flex gap-8 text-sm">
            <a href="#about">About</a>
            <a href="#products">Products</a>
            <a href="#values">Values</a>
            <a href="#contact">Contact</a>
          </div>

          <button className="bg-[#D4AF37] text-black px-5 py-2 rounded">
            Request Catalogue
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-40 pb-32">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-6xl md:text-7xl leading-tight font-light">
              Premium Indonesian
              <br />
              Spices for
              <span className="text-[#D4AF37]">
                {" "}Global Markets
              </span>
            </h1>

            <p className="mt-8 text-gray-300 text-lg">
              Connecting the richness of Indonesia's natural origins
              with partners worldwide.
            </p>

            <div className="flex gap-4 mt-10">
              <button className="bg-[#D4AF37] text-black px-8 py-4 rounded">
                Request Catalogue
              </button>

              <button className="border border-[#D4AF37] px-8 py-4 rounded">
                Contact Us
              </button>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1600"
              alt=""
              className="w-full h-[500px] object-cover"
            />
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-[#0B1C12] py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-center">

          <div>
            <h3 className="text-[#D4AF37] text-xl">
              100%
            </h3>
            <p>Indonesian Origin</p>
          </div>

          <div>
            <h3 className="text-[#D4AF37] text-xl">
              Premium
            </h3>
            <p>Cinnamon & Vanilla</p>
          </div>

          <div>
            <h3 className="text-[#D4AF37] text-xl">
              Export Ready
            </h3>
            <p>Documentation</p>
          </div>

          <div>
            <h3 className="text-[#D4AF37] text-xl">
              Sustainable
            </h3>
            <p>Sourcing Network</p>
          </div>

        </div>
      </section>

      {/* PRODUCTS */}
      <section
        id="products"
        className="bg-[#F3EEE5] text-black py-24"
      >
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-center text-4xl mb-14">
            OUR PRODUCTS
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=1200"
                className="h-72 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl mb-2">
                  CINNAMON
                </h3>
                <p>
                  Premium Indonesian cassia cinnamon.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1625944524162-0f7868bb9f92?q=80&w=1200"
                className="h-72 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl mb-2">
                  VANILLA
                </h3>
                <p>
                  Premium Indonesian vanilla beans.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="bg-white text-black py-24"
      >
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">

          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200"
            className="rounded-3xl"
          />

          <div>
            <h2 className="text-5xl mb-6">
              ABOUT DELVORA ORIGINS
            </h2>

            <p className="text-lg leading-8">
              Delvora Origins is an Indonesian export company
              specializing in premium cinnamon, vanilla and
              agricultural commodities for global markets.
            </p>
          </div>

        </div>
      </section>

      {/* VALUES */}
      <section
        id="values"
        className="bg-[#0B1C12] py-24"
      >
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-center text-4xl mb-16">
            OUR VALUES
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              "Integrity",
              "Quality",
              "Sustainability",
              "Partnership",
            ].map((item) => (
              <div
                key={item}
                className="border border-[#D4AF37]/20 p-8 rounded-xl text-center"
              >
                <h3 className="text-[#D4AF37] text-xl">
                  {item}
                </h3>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 text-center">
        <h2 className="text-6xl text-[#D4AF37]">
          Rooted in Nature.
          <br />
          Growing Prosperity.
        </h2>
      </section>

    </main>
  );
}