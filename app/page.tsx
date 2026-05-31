import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#F5F0E6]">

      {/* HERO */}
      <section className="relative h-screen overflow-hidden">

        <Image
          src="/cinnamon-hero.jpg"
          alt="Cinnamon"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#03150D]/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-10 h-full flex items-center">

          <div className="max-w-2xl text-white">

            <h1 className="text-7xl leading-tight font-light">
              Premium Indonesian
              <br />
              Spices for
              <br />
              <span className="text-[#D4AF37]">
                Global Markets
              </span>
            </h1>

            <p className="mt-6 text-xl text-gray-200">
              Connecting the richness of Indonesia's natural origins
              with partners worldwide.
            </p>

            <div className="flex gap-4 mt-10">
              <button className="bg-[#D4AF37] text-black px-8 py-4">
                Request Catalogue
              </button>

              <button className="border border-[#D4AF37] px-8 py-4">
                Contact Us
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-center text-4xl text-[#0A1C12] mb-12">
            OUR PRODUCTS
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Cinnamon */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">

              <Image
                src="/cinnamon.jpg"
                alt="Cinnamon"
                width={800}
                height={600}
                className="w-full h-[320px] object-cover"
              />

              <div className="p-8">

                <h3 className="text-3xl text-[#0A1C12]">
                  CINNAMON
                </h3>

                <p className="mt-4 text-gray-700">
                  Cassia Cinnamon in various grades and specifications
                  to meet global market standards.
                </p>

              </div>
            </div>

            {/* Vanilla */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">

              <Image
                src="/vanilla.jpg"
                alt="Vanilla"
                width={800}
                height={600}
                className="w-full h-[320px] object-cover"
              />

              <div className="p-8">

                <h3 className="text-3xl text-[#0A1C12]">
                  VANILLA
                </h3>

                <p className="mt-4 text-gray-700">
                  Premium Indonesian vanilla beans with rich aroma,
                  natural curing process and export quality.
                </p>

              </div>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}