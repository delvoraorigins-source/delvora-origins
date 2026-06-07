"use client";

import Image from "next/image";

const colors = {
darkGreen: "#071c12",
forestGreen: "#022b17",
cream: "#F5F1E8",
gold: "#c29027",
textDark: "#1F1F1F",
};

export default function Home() {
return (
<main style={{ backgroundColor: colors.cream }}>

  {/* HERO */}
  <section className="relative min-h-screen overflow-hidden">

    <Image
      src="/cinnamon-hero.jpg"
      alt="Hero"
      fill
      priority
      className="object-cover"
    />

    <div className="absolute inset-0 bg-black/60" />

    {/* HEADER */}
    <div className="absolute top-5 left-8 right-8 z-[9999] flex justify-between items-start">

      <Image
        src="/Logo_v2.jpeg"
        alt="Logo"
        width={200}
        height={200}
        className="object-contain"
      />

      <details className="absolute top-0 right-0">
        <summary className="list-none cursor-pointer text-white text-5xl select-none">
          ⋮
        </summary>

        <div
          className="absolute right-0 mt-4 rounded-2xl p-5 min-w-[250px] shadow-2xl"
          style={{ backgroundColor: colors.darkGreen }}
        >
          <a href="#about" className="block py-3 text-white">
            About Delvora Origins
          </a>

          <a href="#products" className="block py-3 text-white">
            Our Products
          </a>

          <a href="#articles" className="block py-3 text-white">
            Articles
          </a>

          <a href="#contact" className="block py-3 text-white">
            Contact Us
          </a>
        </div>
      </details>

    </div>

    {/* TEXT */}
    <div className="relative z-10 flex items-center min-h-screen px-6">
      <div className="max-w-3xl text-white">

        <p
          className="uppercase tracking-[0.35em] mb-6"
          style={{ color: colors.gold }}
        >
        </p>

        <h1 className="text-5xl md:text-8xl leading-tight font-light">
          Indonesian
          <br />
          Spice Sourcing &
          <br />
          <span style={{ color: colors.gold }}>
            Exports
          </span>
        </h1>

        <p className="mt-8 text-lg text-white/90 max-w-2xl">
          Connecting carefully selected Indonesian spices and agricultural commodities 
          with global buyers through trusted sourcing and export solutions.
        </p>

        <div className="flex gap-4 mt-10 flex-wrap">

          <a
            href="mailto:info@delvoraorigins.com?subject=Catalogue Request"
            className="px-8 py-4 rounded-xl text-white font-semibold inline-block"
            style={{ backgroundColor: colors.gold }}
          >
            Request Catalog
          </a>

          <a
            href="#contact"
            className="px-8 py-4 rounded-xl border text-white inline-block"
            style={{ borderColor: colors.gold }}
          >
            Contact Us
          </a>

        </div>

      </div>
    </div>

  </section>

  {/* ABOUT */}
  <section
    id="about"
    className="py-28"
    style={{ backgroundColor: colors.darkGreen }}
  >
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

      <div>

        <p
          className="uppercase tracking-[0.3em] mb-4"
          style={{ color: colors.gold }}
        >
          About Delvora Origins
        </p>

        <h2 className="text-3xl text-white font-light leading-tight">
          Connecting Indonesian Origins
          With Global Demand
        </h2>

        <div
          className="w-24 h-[2px] my-8"
          style={{ backgroundColor: colors.gold }}
        />

        <p className="text-white/80 text-lg">
          Delvora Origins specializes in sourcing and exporting Indonesian spices and agricultural products. 
          We work closely with trusted suppliers to deliver quality products and reliable export solutions for international markets.
        </p>

      </div>

      <div className="grid grid-cols-2 gap-5">

        <div className="p-8 rounded-2xl text-center" style={{ backgroundColor: colors.forestGreen }}>
          <h3 className="text-2xl mb-2" style={{ color: colors.gold }}>🌿</h3>
          <p className="text-white/80">Indonesian Origins</p>
        </div>

        <div className="p-8 rounded-2xl text-center" style={{ backgroundColor: colors.forestGreen }}>
          <h3 className="text-2xl mb-2" style={{ color: colors.gold }}>🤝</h3>
          <p className="text-white/80">Trusted Suppliers</p>
        </div>

        <div className="p-8 rounded-2xl text-center" style={{ backgroundColor: colors.forestGreen }}>
          <h3 className="text-2xl mb-2" style={{ color: colors.gold }}>📋</h3>
          <p className="text-white/80">Quality Commitment</p>
        </div>

        <div className="p-8 rounded-2xl text-center" style={{ backgroundColor: colors.forestGreen }}>
          <h3 className="text-2xl mb-2" style={{ color: colors.gold }}>🌍</h3>
          <p className="text-white/80">Global Connection</p>
        </div>

      </div>

    </div>
  </section>


{/* PRODUCTS */}
<section id="products" className="py-28">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">
      <p
        className="uppercase tracking-[0.3em]"
        style={{ color: colors.gold }}
      >
        Selected Indonesian Spices
      </p>

      <h2
        className="text-5xl mt-4"
        style={{ color: colors.textDark }}
      >
        Our Products
      </h2>
    </div>

    <div className="grid md:grid-cols-2 gap-10">

      {/* CINNAMON */}
      <div className="bg-white rounded-3xl overflow-hidden shadow-xl">

        <Image
          src="/cinnamon.jpeg"
          alt="Indonesian Cinnamon"
          width={800}
          height={600}
          className="w-full h-[420px] object-cover"
        />

        <div className="p-8">

          <h3
            className="text-3xl mb-4"
            style={{ color: colors.darkGreen }}
          >
            Indonesian Cinnamon
          </h3>

          <p className="text-gray-600 mb-6">
            Indonesian cinnamon sourced from carefully selected suppliers and farming communities.
            Available in various grades and forms to meet international food, beverage, and industrial requirements.
          </p>

          <div className="space-y-2 text-sm text-gray-700">

            <p><strong>Origin:</strong> Indonesia</p>
            <p><strong>Type:</strong> Cassia Cinnamon, Ceylon Cinnamon</p>
            <p><strong>Product Form:</strong> Cinnamon Sticks, Broken Stick Cinnamon, Cinnamon Cut</p>
            <p><strong>Moisture:</strong> 10%-13%</p>
            <p><strong>Packaging:</strong> Export-grade packaging available according to product specifications</p>
            <p><strong>Available Grades:</strong> AA, A, KA, KB, KC</p>

          </div>

        </div>

      </div>

      {/* VANILLA */}
      <div className="bg-white rounded-3xl overflow-hidden shadow-xl">

        <Image
          src="/vanilla.jpeg"
          alt="Indonesian Vanilla"
          width={800}
          height={600}
          className="w-full h-[420px] object-cover"
        />

        <div className="p-8">

          <h3
            className="text-3xl mb-4"
            style={{ color: colors.darkGreen }}
          >
            Indonesian Vanilla
          </h3>

          <p className="text-gray-600 mb-6">
            Indonesian vanilla beans sourced from trusted farmers, known from their rich aroma and natural flavor.
            Suitable for food manufacturing, extraction, and culinary applications.
          </p>

          <div className="space-y-2 text-sm text-gray-700">

            <p><strong>Origin:</strong> Indonesia</p>
            <p><strong>Grade:</strong> Gourmet Grade, Extract Grade</p>
            <p><strong>Moisture:</strong> 25–35%</p>
            <p><strong>Length:</strong> 12–20 cm</p>
            <p><strong>Packaging:</strong> Vacuum packed to help maintain product quality and aroma during transportation</p>
            <p><strong>Supply Capacity:</strong> Seasonal Availability</p>

          </div>

        </div>

      </div>

    </div>

  </div>
</section>


  {/* ARTICLES */}

<section id="articles" className="py-28 bg-[#faf8f2]">

  <div className="max-w-7xl mx-auto px-6">

<div className="text-center mb-16">
  <p
    className="uppercase tracking-[0.3em]"
    style={{ color: colors.gold }}
  >
    Knowledge & Insights
  </p>

  <h2 className="text-5xl mt-4">
    Articles
  </h2>
</div>

<div className="grid md:grid-cols-3 gap-8">

  <a
    href="/articles/cinnamon-export-guide"
    className="bg-white rounded-3xl p-8 shadow-lg block hover:shadow-2xl transition"
  >
    <h3 className="text-2xl mb-4">
      Indonesian Cinnamon Export Guide
    </h3>

    <p className="text-gray-600">
      Indonesian cinnamon remains one of the most sought-after spices worldwide.
    </p>

    <p className="mt-6 font-semibold" style={{ color: colors.gold }}>
      Read Article →
    </p>
  </a>

  <a
    href="/articles/vanilla-bean-grades"
    className="bg-white rounded-3xl p-8 shadow-lg block hover:shadow-2xl transition"
  >
    <h3 className="text-2xl mb-4">
      Understanding Vanilla Bean Grades
    </h3>

    <p className="text-gray-600">
      Learn how vanilla beans are classified for international trade.
    </p>

    <p className="mt-6 font-semibold" style={{ color: colors.gold }}>
      Read Article →
    </p>
  </a>

  <a
    href="/articles/export-quality-control-process"
    className="bg-white rounded-3xl p-8 shadow-lg block hover:shadow-2xl transition"
  >
    <h3 className="text-2xl mb-4">
      Export Quality Control Process
    </h3>

    <p className="text-gray-600">
      Discover how quality is maintained from sourcing to shipment.
    </p>

    <p className="mt-6 font-semibold" style={{ color: colors.gold }}>
      Read Article →
    </p>
  </a>

</div>

  </div>

</section>


  {/* CONTACT */}
  <section id="contact" className="py-28 bg-white">

    <div className="max-w-3xl mx-auto px-6">

      <div className="text-center mb-12">
        <p className="uppercase tracking-[0.3em]" style={{ color: colors.gold }}>
          Get In Touch
        </p>

        <h2 className="text-5xl mt-4" style={{ color: colors.textDark }}>
          Contact Us
        </h2>
      </div>

      <form className="space-y-5">

        <input type="text" placeholder="Your Name" className="w-full border border-gray-300 rounded-xl p-4" />

        <input type="email" placeholder="Your Email" className="w-full border border-gray-300 rounded-xl p-4" />

        <input type="text" placeholder="Company Name" className="w-full border border-gray-300 rounded-xl p-4" />

        <textarea rows={6} placeholder="Tell us about your requirements..." className="w-full border border-gray-300 rounded-xl p-4" />

        <button
          type="submit"
          className="px-8 py-4 rounded-xl text-white font-semibold"
          style={{ backgroundColor: colors.gold }}
        >
          Send Inquiry
        </button>

      </form>

    </div>

  </section>

  {/* FOOTER */}
  <footer
    className="py-16 text-white"
    style={{ backgroundColor: "#071c12" }}
  >
    <div className="max-w-7xl mx-auto px-6">

      <div className="flex flex-col md:flex-row justify-between gap-10">

        <div>
          <h3 className="text-3xl" style={{ color: colors.gold }}>
            Delvora Origins
          </h3>

          <p className="mt-4 text-white/60 max-w-md">
            Finest Indonesian spices and agricultural commodities for global markets.
          </p>
        </div>

        <div>
          <p className="text-white/70">
            info@delvoraorigins.com
          </p>

          <p className="mt-2 text-white/70">
            Yogyakarta, Indonesia
          </p>

          <p className="mt-2 text-white/70">
            +62-8179-08-2023
          </p>
        </div>

      </div>

    </div>
  </footer>

</main>

);
}