"use client";

import Image from "next/image";

const colors = {
  darkGreen: "#071c12",
  forestGreen: "#022b17",
  cream: "#F5F1E8",
  gold: "#c29027",
  textDark: "#1F1F1F",
};

export default function CompanyProfile() {
  return (
    <main style={{ backgroundColor: colors.cream }}>

      {/* HERO */}

      <section className="relative h-[80vh] flex items-center">

        <Image
          src="/cinnamon-bg.jpeg"
          alt="Delvora Origins"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">

          <Image
            src="/Logo_Delvora2.png"
            alt="Delvora Origins"
            width={260}
            height={120}
            className="mb-10"
          />

          <h1 className="text-5xl md:text-7xl font-light leading-tight">
            Company Profile
          </h1>

          <p className="mt-6 text-xl max-w-2xl">
            Connecting carefully selected Indonesian spices and
            agricultural commodities with global buyers through
            trusted sourcing and export solutions.
          </p>

        </div>
      </section>

      {/* ABOUT */}

      <section className="py-24 max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2
              className="text-4xl mb-8"
              style={{ color: colors.darkGreen }}
            >
              About Delvora Origins
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Delvora Origins is an Indonesian sourcing and export
              company focused on premium spices and agricultural
              commodities. We work directly with trusted suppliers
              and farming communities to ensure quality,
              consistency, and reliable supply for international
              buyers.
            </p>
          </div>

          <Image
            src="/cinnamon.jpeg"
            alt="Cinnamon"
            width={700}
            height={500}
            className="rounded-3xl shadow-xl"
          />

        </div>

      </section>

      {/* WHY INDONESIA */}

      <section
        className="py-24"
        style={{ backgroundColor: "#ffffff" }}
      >

        <div className="max-w-6xl mx-auto px-6">

          <h2
            className="text-4xl text-center mb-14"
            style={{ color: colors.darkGreen }}
          >
            Why Indonesia
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl mb-4">
                Rich Agricultural Heritage
              </h3>

              <p>
                Indonesia is one of the world's leading producers
                of cinnamon, vanilla, cloves, nutmeg, and many
                other spices.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl mb-4">
                Diverse Growing Regions
              </h3>

              <p>
                Multiple islands and climates allow consistent
                production throughout the year.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl mb-4">
                Global Export Experience
              </h3>

              <p>
                Indonesian spices have been traded internationally
                for centuries and remain highly sought after.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* PRODUCTS */}

      <section className="py-24 max-w-6xl mx-auto px-6">

        <h2
          className="text-4xl text-center mb-16"
          style={{ color: colors.darkGreen }}
        >
          Product Portfolio
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/cinnamon-hero.jpg"
              alt="Cinnamon"
              width={700}
              height={500}
              className="w-full h-[300px] object-cover"
            />
            <div className="p-8 bg-white">
              <h3 className="text-2xl mb-4">
                Cinnamon
              </h3>

              <p>
                Cassia cinnamon sourced from leading Indonesian
                producing regions.
              </p>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/vanilla_bg.jpeg"
              alt="Vanilla"
              width={700}
              height={500}
              className="w-full h-[300px] object-cover"
            />
            <div className="p-8 bg-white">
              <h3 className="text-2xl mb-4">
                Vanilla
              </h3>

              <p>
                Carefully selected Indonesian vanilla beans for
                food, bakery, and flavor industries.
              </p>
            </div>
          </div>

        </div>

      </section>

      {/* WHY WORK WITH US */}

      <section
        className="py-24 text-white"
        style={{ backgroundColor: colors.darkGreen }}
      >

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl text-center mb-14">
            Why Work With Us
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>
              <h3 className="text-2xl mb-3">Reliable Sourcing</h3>
            </div>

            <div>
              <h3 className="text-2xl mb-3">Quality Control</h3>
            </div>

            <div>
              <h3 className="text-2xl mb-3">Export Support</h3>
            </div>

            <div>
              <h3 className="text-2xl mb-3">Buyer Focused</h3>
            </div>

          </div>

        </div>

      </section>

      {/* CONTACT */}

      <section className="py-24 text-center">

        <h2
          className="text-4xl mb-6"
          style={{ color: colors.darkGreen }}
        >
          Let's Connect
        </h2>

        <p className="mb-10 text-lg">
          Looking for reliable Indonesian spice suppliers?
        </p>

        <a
          href="/Delvora-Origins-Company-Profile.pdf"
          className="px-10 py-4 rounded-xl text-white font-semibold"
          style={{ backgroundColor: colors.gold }}
        >
          Download Company Profile
        </a>

      </section>

    </main>
  );
}