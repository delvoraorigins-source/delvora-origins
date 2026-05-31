import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#07120B] text-white overflow-hidden">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-[#D4AF37]/10">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

          <div className="flex items-center gap-3">
            <Image
              src="/Logo.jpeg"
              alt="Delvora"
              width={48}
              height={48}
            />

            <div>
              <h1 className="text-[#D4AF37] tracking-[4px] text-lg">
                DELVORA
              </h1>
              <p className="text-xs tracking-[6px] text-[#D4AF37]/80">
                ORIGINS
              </p>
            </div>
          </div>

          <div className="hidden md:flex gap-10 text-sm text-white/80">
            <a href="#about">About</a>
            <a href="#products">Products</a>
            <a href="#contact">Contact</a>
          </div>

        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1599909535318-67429f3b85ac?q=80&w=2000')",
          }}
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#07120B] via-[#07120B]/70 to-transparent" />

        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#D4AF37]/10 blur-[180px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-8">

          <div className="max-w-3xl">

            <p className="text-[#D4AF37] uppercase tracking-[6px] mb-6">
              Indonesian Premium Export
            </p>

            <h1 className="text-6xl md:text-8xl leading-none font-light">
              Premium
              <br />
              Cinnamon &
              <br />
              Vanilla
            </h1>

            <p className="mt-8 text-xl text-white/70 max-w-xl leading-8">
              Bringing the richness of Indonesian spices
              to international markets through quality,
              integrity and sustainable sourcing.
            </p>

            <div className="mt-10 flex gap-4">
              <button className="bg-[#D4AF37] text-black px-8 py-4 rounded-full font-medium">
                Request Catalogue
              </button>

              <button className="border border-white/20 px-8 py-4 rounded-full">
                Contact Us
              </button>
            </div>

          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="bg-[#0A160E] border-y border-[#D4AF37]/10">

        <div className="max-w-7xl mx-auto px-8 py-12 grid md:grid-cols-4 gap-8">

          <div>
            <h3 className="text-4xl text-[#D4AF37]">100%</h3>
            <p className="text-white/60 mt-2">
              Indonesian Origin
            </p>
          </div>

          <div>
            <h3 className="text-4xl text-[#D4AF37]">Premium</h3>
            <p className="text-white/60 mt-2">
              Export Quality
            </p>
          </div>

          <div>
            <h3 className="text-4xl text-[#D4AF37]">Global</h3>
            <p className="text-white/60 mt-2">
              International Market
            </p>
          </div>

          <div>
            <h3 className="text-4xl text-[#D4AF37]">Trusted</h3>
            <p className="text-white/60 mt-2">
              Sustainable Sourcing
            </p>
          </div>

        </div>

      </section>

      {/* PRODUCTS */}
      <section
        id="products"
        className="py-28 bg-gradient-to-b from-[#07120B] to-[#0F2015]"
      >

        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-center text-5xl mb-16">
            Our Products
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="group overflow-hidden rounded-[32px] bg-white/5 border border-white/10">

              <img
                src="https://images.unsplash.com/photo-1599909535318-67429f3b85ac?q=80&w=1200"
                alt="Cinnamon"
                className="h-[450px] w-full object-cover group-hover:scale-105 duration-700"
              />

              <div className="p-8">
                <h3 className="text-3xl text-[#D4AF37]">
                  Cinnamon
                </h3>

                <p className="mt-4 text-white/70">
                  Premium Indonesian cassia cinnamon
                  sourced directly from trusted growers.
                </p>
              </div>

            </div>

            <div className="group overflow-hidden rounded-[32px] bg-white/5 border border-white/10">

              <img
                src="https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1200"
                alt="Vanilla"
                className="h-[450px] w-full object-cover group-hover:scale-105 duration-700"
              />

              <div className="p-8">
                <h3 className="text-3xl text-[#D4AF37]">
                  Vanilla
                </h3>

                <p className="mt-4 text-white/70">
                  Hand-selected premium vanilla beans
                  for international food industries.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="py-32 bg-[#F6F1E8] text-black"
      >

        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">

          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400"
            alt=""
            className="rounded-[40px]"
          />

          <div>

            <p className="uppercase tracking-[6px] text-[#8F6B18] mb-4">
              About Delvora Origins
            </p>

            <h2 className="text-6xl leading-tight">
              Rooted in Nature.
              Growing Prosperity.
            </h2>

            <p className="mt-8 text-lg leading-9 text-black/70">
              Delvora Origins connects Indonesian
              agricultural excellence with global
              demand through premium cinnamon,
              vanilla and sustainable sourcing
              partnerships.
            </p>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="relative py-32 text-center">

        <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/10 via-transparent to-[#D4AF37]/10" />

        <div className="relative z-10">

          <h2 className="text-6xl text-[#D4AF37]">
            Let's Grow Together
          </h2>

          <p className="mt-6 text-white/60">
            Partner with Delvora Origins for premium Indonesian exports.
          </p>

        </div>

      </section>

    </main>
  );
}