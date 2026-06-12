"use client";

export default function CompanyProfile() {
  return (
    <>
      {/* PAGE 1 */}
      <main
        style={{
          height: "100vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.88), rgba(0,0,0,0.45)), url('/cinnamon-hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: "90px",
            maxWidth: "1400px",
            transform: "translateY(-30px)",
          }}
        >
          <img
            src="/Logo_Delvora2.png"
            alt="Delvora Origins"
            style={{
              width: "300px",
              marginBottom: "30px",
              marginLeft: "-28px",
            }}
          />

          <p
            style={{
              color: "#D4AF37",
              letterSpacing: "8px",
              fontSize: "22px",
              margin: 0,
              marginBottom: "24px",
            }}
          >
            COMPANY PROFILE
          </p>

          <div
            style={{
              width: "90px",
              height: "2px",
              background: "#D4AF37",
              marginBottom: "40px",
            }}
          />

          <h1
            style={{
              color: "#F8F6F2",
              fontFamily: "Georgia, serif",
              fontSize: "80px",
              lineHeight: "1.2",
              fontWeight: 500,
              margin: 0,
            }}
          >
            Sourcing Indonesian Spices
            <br />
            for Global Markets
          </h1>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "55px",
            }}
          >
            <div
              style={{
                width: "90px",
                height: "2px",
                background: "#D4AF37",
                marginRight: "25px",
              }}
            />

            <p
              style={{
                color: "#F5F0E6",
                fontSize: "24px",
                margin: 0,
              }}
            >
              Rooted in Nature, Growing Prosperity.
            </p>

            <div
              style={{
                width: "1px",
                height: "28px",
                background: "#D4AF37",
                marginLeft: "25px",
                marginRight: "25px",
              }}
            />

            <p
              style={{
                color: "#D4AF37",
                fontSize: "28px",
                letterSpacing: "4px",
                margin: 0,
              }}
            >
              2026
            </p>
          </div>
        </div>
      </main>
    
    {/* PAGE 2 */}

<section
  style={{
    height: "100vh",
    background: "#F5F0E6",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "70px 90px",
    gap: "60px",
  }}
>
  {/* WATERMARK VANILLA */}
  <div
    style={{
      position: "absolute",
      top: "-120px",
      right: "-120px",
      width: "550px",
      height: "550px",
      backgroundImage: "url('/Vanilla_Background.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      pointerEvents: "none",
      opacity: 0.15,
      zIndex: 0,
    }}
  />

  {/* WATERMARK CINNAMON */}
  <div
    style={{
      position: "absolute",
      bottom: "-120px",
      left: "-120px",
      width: "500px",
      height: "500px",
      backgroundImage: "url('/Cinnamon_Background.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      pointerEvents: "none",
      opacity: 0.15,
      zIndex: 0,
    }}
  />

  {/* LEFT CONTENT */}
  <div
    style={{
      flex: 1,
      maxWidth: "700px",
      position: "relative",
      zIndex: 2,
    }}
  >
    <p
      style={{
        color: "#B08A2E",
        letterSpacing: "6px",
        fontSize: "18px",
        marginBottom: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      ABOUT DELVORA
    </p>

    <div
      style={{
        width: "90px",
        height: "2px",
        background: "#B08A2E",
        marginBottom: "35px",
      }}
    />

    <h2
      style={{
        color: "#07120B",
        fontSize: "50px",
        lineHeight: "1.2",
        margin: 0,
        marginBottom: "30px",
        fontFamily: "Georgia, serif",
        fontWeight: 250,
      }}
    >
      Bringing Indonesia's  
      <br />
      Natural Treasures to 
      <br />
      Global Market
    </h2>

    <p
      style={{
        color: "#555",
        fontSize: "18px",
        lineHeight: "1.8",
        marginBottom: "50px",
        fontFamily: "Arial, sans-serif",
        textAlign: "justify",
      }}
    >
      Delvora Origins is an Indonesian sourcing and export company
      specializing in premium vanilla and cinnamon. We connect
      international buyers with carefully selected products sourced
      from trusted producers across Indonesia, ensuring quality,
      consistency, and long-term partnerships.
    </p>

    {/* VALUE CARDS */}
    <div
      style={{
        display: "flex",
        gap: "20px",
      }}
    >
      <div
        style={{
          padding: "24px",
          background: "#fff",
          borderRadius: "18px",
          minWidth: "170px",
          boxShadow: "none",
        }}
      >
        <div
          style={{
            color: "#D4AF37",
            fontSize: "34px",
            marginBottom: "10px",
            textAlign: "center",
          }}
        >
          🌿
        </div>

        <div
          style={{
            color: "#07120B",
            lineHeight: "1.5",
            textAlign: "center",
          }}
        >
          Indonesia
          <br />
          Origin
        </div>
      </div>

      <div
        style={{
          padding: "24px",
          background: "#fff",
          borderRadius: "18px",
          minWidth: "170px",
          boxShadow: "none",
        }}
      >
        <div
          style={{
            color: "#D4AF37",
            fontSize: "34px",
            marginBottom: "10px",
            textAlign: "center",
          }}
        >
          📋
        </div>

        <div
          style={{
            color: "#07120B",
            lineHeight: "1.5",
            textAlign: "center",
          }}
        >
          Quality
          <br />
          Commitment
        </div>
      </div>

      <div
        style={{
          padding: "24px",
          background: "#fff",
          borderRadius: "18px",
          minWidth: "170px",
          boxShadow: "none",
        }}
      >
        <div
          style={{
            color: "#D4AF37",
            fontSize: "34px",
            marginBottom: "10px",
            textAlign: "center",
          }}
        >
          🌍
        </div>

        <div
          style={{
            color: "#07120B",
            lineHeight: "1.5",
            textAlign: "center",
          }}
        >
          Export
          <br />
          Ready
        </div>
      </div>
    </div>
  </div>

  {/* RIGHT SIDE IMAGES */}
  <div
    style={{
      width: "42%",
      height: "650px",
      display: "grid",
      gridTemplateColumns: "1.2fr 1fr",
      gap: "18px",
      position: "relative",
      zIndex: 2,
    }}
  >
    {/* LARGE LEFT IMAGE */}
    <div
      style={{
        gridRow: "1 / span 2",
        overflow: "hidden",
        borderRadius: "24px",
        boxShadow: "none",
      }}
    >
      <img
        src="/vanilla-2.jpeg"
        alt="Vanilla"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>

    {/* TOP RIGHT */}
    <div
      style={{
        overflow: "hidden",
        borderRadius: "24px",
        boxShadow: "none",
      }}
    >
      <img
        src="/cinnamon-2.jpeg"
        alt="Cinnamon"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>

    {/* BOTTOM RIGHT */}
    <div
      style={{
        overflow: "hidden",
        borderRadius: "24px",
        boxShadow: "none",
      }}
    >
      <img
        src="/cinnamon-3.jpeg"
        alt="Hero"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
         }}
        />
      </div>
    </div>
  </section>

{/* PAGE 3 */}
<section
  style={{
    position: "relative",
    height: "100vh",
    overflow: "hidden",
    WebkitPrintColorAdjust: "exact",
    printColorAdjust: "exact",
  }}
>
  {/* BACKGROUND IMAGE */}
  <img
    src="/why_indonesia.jpeg"
    alt=""
    style={{
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
    }}
  />

  {/* OVERLAY */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(to right, rgba(245,240,230,0.88) 0%, rgba(245,240,230,0.65) 50%, rgba(245,240,230,0.30) 72%, rgba(0,0,0,0.12) 100%)",
      WebkitPrintColorAdjust: "exact",
      printColorAdjust: "exact",
    }}
  />

  {/* CONTENT */}
  <div
    style={{
      position: "relative",
      zIndex: 2,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "80px 60px 60px",
    }}
  >
    {/* TOP */}
    <div
      style={{
        maxWidth: "620px",
        marginBottom: "20px",
      }}
    >
      <p
        style={{
          color: "#B08A2E",
          letterSpacing: "6px",
          fontSize: "18px",
          marginBottom: "18px",
        }}
      >
        WHY INDONESIA?
      </p>

      <div
        style={{
          width: "90px",
          height: "2px",
          background: "#B08A2E",
          marginBottom: "40px",
        }}
      />

      <h1
        style={{
          color: "#0c2214",
          fontSize: "50px",
          fontFamily: "Georgia, serif",
          lineHeight: "1.2",
          margin: 0,
          marginBottom: "25px",
        }}
      >
        Indonesia's
        <br />
        Natural Heritage
      </h1>

      <p
        style={{
          color: "#1f1f1f",
          fontSize: "18px",
          lineHeight: "1.9",
          margin: 0,
          textAlign: "justify",
        }}
      >
        Blessed with fertile volcanic landscapes, an ideal tropical
        climate, and agricultural knowledge passed down through
        generations, Indonesia is recognized as one of the world's
        richest regions for natural resources and agricultural
        excellence. For centuries, our volcanic soil, enriched by the
        earth's finest natural minerals, has nurtured a diverse
        ecosystem capable of producing world-class commodities.
      </p>
    </div>

    {/* BOTTOM */}
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        background: "rgba(7,38,22,0.88)",
        borderRadius: "30px",
        overflow: "hidden",
        WebkitPrintColorAdjust: "exact",
        printColorAdjust: "exact",
      }}
    >
      {[
        {
          title: "Natural Blessing",
          text: "Fertile soil and tropical climates support diverse agricultural production.",
        },
        {
          title: "Generational Expertise",
          text: "Traditional farming knowledge preserved across generations.",
        },
        {
          title: "Premium Origins",
          text: "Globally recognized for rich agricultural heritage and natural abundance.",
        },
        {
          title: "Global Contribution",
          text: "Supplying agricultural products to international markets.",
        },
      ].map((item, index) => (
        <div
          key={item.title}
          style={{
            padding: "38px 28px",
            borderRight:
              index !== 3
                ? "1px solid rgba(212,175,55,0.18)"
                : "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h3
            style={{
              color: "#D4AF37",
              fontSize: "24px",
              fontFamily: "Georgia, serif",
              margin: 0,
              marginBottom: "18px",
              textAlign: "center",
              lineHeight: "1.2",
            }}
          >
            {item.title}
          </h3>

          <p
            style={{
              color: "#F5F0E6",
              fontSize: "15px",
              lineHeight: "1.8",
              margin: 0,
              textAlign: "center",
            }}
          >
            {item.text}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* PAGE 4 */}

<section
  style={{
    height: "100vh",
    background: "#e1dacb",
    position: "relative",
    overflow: "hidden",
    padding: "70px 80px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  }}
>
  {/* GOLD WATERMARK */}
  <div
    style={{
      position: "absolute",
      top: "-150px",
      right: "-150px",
      width: "500px",
      height: "500px",
      borderRadius: "50%",
      background: "rgba(212,175,55,0.08)",
      filter: "blur(120px)",
      zIndex: 0,
    }}
  />

  {/* HEADER */}
  <div
    style={{
      textAlign: "center",
      marginBottom: "70px",
      position: "relative",
      zIndex: 2,
    }}
  >
    <p
      style={{
        color: "#B08A2E",
        letterSpacing: "6px",
        fontSize: "18px",
        marginBottom: "20px",
      }}
    >
      VISION & MISSION
    </p>

    <div
      style={{
        width: "90px",
        height: "2px",
        background: "#B08A2E",
        margin: "0 auto 35px",
      }}
    />

    <h2
      style={{
        color: "#10341d",
        fontSize: "50px",
        lineHeight: "1.2",
        fontFamily: "Georgia, serif",
        margin: 0,
      }}
    >
      Building Trusted & Sustainable
      <br /> 
      Global Partnerships
    </h2>
  </div>

  {/* CONTENT */}
  <div
    style={{
      display: "flex",
      alignItems: "stretch",
      gap: "20px",
      position: "relative",
      zIndex: 2,
    }}
  >
    {/* VISION */}
    <div
      style={{
        flex: 1,
        background: "#edebe6",
        borderRadius: "28px",
        padding: "50px",
        boxShadow: "none",
      }}
    >
      <div
        style={{
          color: "#D4AF37",
          fontSize: "40px",
          marginBottom: "20px",
        }}
      >
        ✦
      </div>

      <h3
        style={{
          color: "#755623",
          fontSize: "34px",
          fontFamily: "Georgia, serif",
          marginBottom: "25px",
          marginTop: 0,
        }}
      >
        Vision
      </h3>

      <p
        style={{
          color: "#7e6e17",
          fontSize: "18px",
          lineHeight: "1.9",
          textAlign: "justify",
          margin: 0,
        }}
      >
        To be a trusted global partner, bringing Indonesia's finest 
        natural products to the world through 
        quality, integrity, and sustainability.
      </p>
    </div>

    {/* CENTER LOGO */}
    <div
      style={{
        width: "80px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src="/Logo_Delvora2.png"
        alt="Delvora"
        style={{
          width: "160px",
          opacity: 0.15,
        }}
      />
    </div>

    {/* MISSION */}
    <div
      style={{
        flex: 1,
        background: "#0e301a",
        borderRadius: "28px",
        padding: "50px",
        boxShadow: "none",
      }}
    >
      <div
        style={{
          color: "#e1dacb",
          fontSize: "40px",
          marginBottom: "20px",
        }}
      >
        ✦
      </div>

      <h3
        style={{
          color: "#e1dacb",
          fontSize: "34px",
          fontFamily: "Georgia, serif",
          marginBottom: "25px",
          marginTop: 0,
        }}
      >
        Mission
      </h3>

      <ul
        style={{
          color: "#e1dacb",
          fontSize: "18px",
          lineHeight: "2",
          paddingLeft: "0px",
          margin: 0,
        }}
      >
        <li>• Deliver premium-quality Indonesian vanilla and cinnamon.</li>
        <li>• Build long-term and transparent relationships with buyers.</li>
        <li>• Support responsible and sustainable sourcing practices.</li>
        <li>• Promote Indonesian excellence worldwide.</li>
      </ul>
    </div>
  </div>
</section>

       {/* PAGE 5 */}
      <section
        style={{
          height: "100vh",
          background: "#0c2214",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "70px 90px",
          gap: "60px",
        }}
      >
        <div
          style={{
            width: "30%",
            height: "72%",
            overflow: "hidden",
            borderRadius: "28px",
            marginTop: "50px",
          }}
        >
          <img
            src="/vanilla_bg.jpeg"
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        <div
          style={{
            flex: 1,
            textAlign: "center",
            maxWidth: "950px",
          }}
        >
          <p
            style={{
              color: "#D4AF37",
              letterSpacing: "6px",
              fontSize: "18px",
            }}
          >
            OUR PRODUCTS
          </p>

          <div
            style={{
              width: "90px",
              height: "2px",
              background: "#D4AF37",
              margin: "25px auto 35px",
            }}
          />

          <h2
            style={{
              color: "#F5F0E6",
              fontSize: "50px",
              lineHeight: "1.2",
              fontFamily: "Georgia, serif",
              margin: 0,
              marginBottom: "40px",
            }}
          >
            Finest Indonesian
            <br />
            Vanilla & Cinnamon
          </h2>

          <p
            style={{
              color: "#CFC8BB",
              fontSize: "18px",
              lineHeight: "1.9",
              textAlign: "center",
            }}
          >
            We carefully source our products from trusted regions
            across Indonesia, where generations of expertise and
            ideal growing conditions ensure exceptional quality.
            Each product is prepared to meet international standards,
            delivering reliability and consistency to global partners.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "30px",
              marginTop: "40px",
              textAlign: "left",
            }}
          >
            {/* VANILLA */}
            <div
              style={{
                flex: 1,
                minWidth: "350px",
                border: "1px solid rgba(212,175,55,0.25)",
                borderRadius: "18px",
                padding: "28px 32px",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              <h4
                style={{
                  color: "#D4AF37",
                  margin: "0 0 10px",
                  fontSize: "14px",
                  letterSpacing: "3px",
                }}
              >
                VANILLA
              </h4>

              <p style={{ color: "#F5F0E6", margin: "8px 0", fontSize: "13px" }}>
                Origin: Indonesia
              </p>
              <p style={{ color: "#F5F0E6", margin: "8px 0", fontSize: "13px" }}>
                Length: 12–20 cm
              </p>
              <p style={{ color: "#F5F0E6", margin: "8px 0", fontSize: "13px" }}>
                Moisture: 25–35%
              </p>
              <p style={{ color: "#F5F0E6", margin: "8px 0", fontSize: "13px" }}>
                Grades: Gourmet Grade & Extract Grade
              </p>
              <p style={{ color: "#F5F0E6", margin: "8px 0", fontSize: "13px" }}>
                Packaging: Vacuum Packed
              </p>
              <p style={{ color: "#F5F0E6", margin: "8px 0", fontSize: "13px" }}>
                Quality: Premium Export Quality
              </p>
            </div>

            {/* CINNAMON */}
            <div
              style={{
                flex: 1,
                minWidth: "320px",
                border: "1px solid rgba(212,175,55,0.25)",
                borderRadius: "18px",
                padding: "28px 32px",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              <h4
                style={{
                  color: "#D4AF37",
                  margin: "0 0 16px",
                  fontSize: "14px",
                  letterSpacing: "3px",
                }}
              >
                CINNAMON
              </h4>

              <p style={{ color: "#F5F0E6", margin: "8px 0", fontSize: "13px" }}>
                Origin: Indonesia
              </p>
              <p style={{ color: "#F5F0E6", margin: "8px 0", fontSize: "13px" }}>
                Type: Cassia & Ceylon Cinnamon
              </p>
              <p style={{ color: "#F5F0E6", margin: "8px 0", fontSize: "13px" }}>
                Forms: Sticks, Broken Sticks, Cut
              </p>
              <p style={{ color: "#F5F0E6", margin: "8px 0", fontSize: "13px" }}>
                Moisture: 10–13%
              </p>
              <p style={{ color: "#F5F0E6", margin: "8px 0", fontSize: "13px" }}>
                Grades: AA, A, KA, KB, KC
              </p>
              <p style={{ color: "#F5F0E6", margin: "8px 0", fontSize: "13px" }}>
                Packaging: Export-grade packaging
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            width: "30%",
            height: "72%",
            overflow: "hidden",
            borderRadius: "28px",
            marginTop: "50px",
          }}
        >
          <img
            src="/cinnamon_pckg.jpeg"
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </section>
    
      {/* PAGE 6 */}
      <section
        style={{
          height: "100vh",
          background: "#F5F0E6",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "80px 100px",
          gap: "80px",
        }}
      >
        {/* LEFT */}
        <div
          style={{
            flex: 1.1,
            maxWidth: "700px",
          }}
        >
          <p
            style={{
              color: "#B08A2E",
              letterSpacing: "6px",
              fontSize: "18px",
              marginBottom: "25px",
            }}
          >
            SOURCING & QUALITY CONTROL
          </p>

          <div
            style={{
              width: "90px",
              height: "2px",
              background: "#B08A2E",
              marginBottom: "35px",
            }}
          />

          <h2
            style={{
              color: "#0c2214",
              fontSize: "52px",
              lineHeight: "1.2",
              fontFamily: "Georgia, serif",
              margin: 0,
              marginBottom: "35px",
            }}
          >
            Consistent Quality
            <br />
            Through Controlled
            <br />
            Sourcing
          </h2>

          <p
            style={{
              color: "#4A4A4A",
              fontSize: "18px",
              lineHeight: "1.9",
              marginBottom: "28px",
            }}
          >
            Delvora Origins ensures that every product is sourced and
            handled through a controlled and transparent supply chain
            to maintain consistent export quality.
          </p>

          <p
            style={{
              color: "#4A4A4A",
              fontSize: "18px",
              lineHeight: "1.9",
              textAlign: "Justify",
            }}
          >
            Our sourcing process includes collaboration with selected
            farmers and trusted local suppliers across Indonesia.
            We prioritize raw materials that meet our internal quality
            expectations before entering the production and export
            pipeline.
          </p>
        </div>

        {/* RIGHT */}
        <div
          style={{
            flex: 0.9,
            display: "flex",
            flexDirection: "column",
            gap: "22px",
          }}
        >
          {[
            "Initial Sorting at Source Level",
            "Drying & Moisture Control",
            "Manual Inspection for Grade Consistency",
            "Final Checking Before Shipment",
          ].map((item, index) => (
            <div
              key={index}
              style={{
                background: "#ffffff",
                padding: "20px 28px",
                borderRadius: "18px",
                border: "1px solid rgba(176,138,46,0.25)",
                display: "flex",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "#073a1a",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 600,
                  fontSize: "18px",
                }}
              >
                {index + 1}
              </div>

              <p
                style={{
                  margin: 0,
                  color: "#0e301a",
                  fontSize: "18px",
                  fontWeight: 500,
                }}
              >
                {item}
              </p>
            </div>
          ))}

          <div
            style={{
              marginTop: "12px",
              padding: "30px",
              borderRadius: "20px",
              background: "#123b21",
            }}
          >
            <p
              style={{
                color: "#F5F0E6",
                lineHeight: "1.8",
                fontSize: "16px",
                margin: 0,
                textAlign: "justify",
              }}
            >
              Packaging is carried out according to export standards to
              ensure product safety and quality preservation during
              international shipping. Through this integrated sourcing
              and quality control system, Delvora Origins aims to deliver
              reliable Indonesian spice products that meet international
              buyer expectations.
            </p>
          </div>
        </div>
      </section>

{/* PAGE 7 */}
<section
  style={{
    height: "100vh",
    background: "#e1dacb",
    padding: "80px 100px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  }}
>
  <p
    style={{
      color: "#B08A2E",
      letterSpacing: "6px",
      textAlign: "center",
      fontSize: "18px",
      marginBottom: "20px",
    }}
  >
    HOW WE WORK
  </p>

  <div
    style={{
      width: "90px",
      height: "2px",
      background: "#B08A2E",
      margin: "0 auto 35px",
    }}
  />

  <h2
    style={{
      color: "#0c2214",
      textAlign: "center",
      fontSize: "50px",
      lineHeight: "1.15",
      fontFamily: "Georgia, serif",
      marginBottom: "25px",
    }}
  >
    A Simple & Transparent
    <br />
    Business Process
  </h2>

  <p
    style={{
      color: "#555",
      textAlign: "center",
      fontSize: "18px",
      lineHeight: "1.8",
      maxWidth: "850px",
      margin: "0 auto 80px",
    }}
  >
    From inquiry to shipment preparation, we follow a structured
    process to ensure clear communication, quality consistency,
    and smooth business transactions.
  </p>

  {/* TIMELINE */}
  <div
    style={{
      position: "relative",
      display: "grid",
      gridTemplateColumns: "repeat(6, 1fr)",
      gap: "20px",
      alignItems: "start",
    }}
  >
    {/* LINE */}
    <div
      style={{
        position: "absolute",
        top: "28px",
        left: "8%",
        right: "8%",
        height: "2px",
        background: "#D4AF37",
        zIndex: 1,
      }}
    />

    {[
      {
        no: "1",
        title: "Inquiry",
        text: "Share your product requirements and sourcing needs.",
      },
      {
        no: "2",
        title: "Discussion",
        text: "Discuss specifications, grades, packaging, and order details.",
      },
      {
        no: "3",
        title: "Quotation",
        text: "Receive product specifications and a customized quotation.",
      },
      {
        no: "4",
        title: "Confirmation",
        text: "Confirm quantity, pricing, and commercial terms.",
      },
      {
        no: "5",
        title: "Processing",
        text: "Products are prepared, inspected, and packed.",
      },
      {
        no: "6",
        title: "Shipment",
        text: "Final documentation and shipment arrangements.",
      },
    ].map((step) => (
      <div
        key={step.no}
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            background: "#123b21",
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 25px",
            fontWeight: 700,
            fontSize: "20px",
            border: "3px solid #F5F0E6",
          }}
        >
          {step.no}
        </div>

        <h4
          style={{
            color: "#0c2214",
            fontSize: "18px",
            marginBottom: "12px",
          }}
        >
          {step.title}
        </h4>

        <p
          style={{
            color: "#666",
            fontSize: "14px",
            lineHeight: "1.7",
            margin: 0,
            padding: "0 8px",
          }}
        >
          {step.text}
        </p>
      </div>
    ))}
  </div>
</section>

{/* PAGE 8 */}
<section
  style={{
    height: "100vh",
    background: "#0c2214",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "60px 120px",
    position: "relative",
    overflow: "hidden",
  }}
>
  {/* WATERMARK */}
  <div
    style={{
      position: "absolute",
      right: "-100px",
      bottom: "-120px",
      fontSize: "320px",
      fontWeight: "bold",
      color: "rgba(212,175,55,0.04)",
      lineHeight: 1,
      pointerEvents: "none",
      userSelect: "none",
    }}
  >
    D
  </div>

  {/* LEFT */}
  <div
    style={{
      maxWidth: "650px",
      zIndex: 2,
    }}
  >
    <p
      style={{
        color: "#D4AF37",
        letterSpacing: "6px",
        fontSize: "18px",
        marginBottom: "25px",
      }}
    >
      CONTACT & PARTNERSHIP
    </p>

    <div
      style={{
        width: "90px",
        height: "2px",
        background: "#D4AF37",
        marginBottom: "35px",
      }}
    />

    <h2
      style={{
        color: "#F5F0E6",
        fontSize: "50px",
        lineHeight: "1.1",
        fontFamily: "Georgia, serif",
        margin: 0,
        marginBottom: "35px",
      }}
    >
      Let's Build
      <br />
      A Reliable Partnership
    </h2>

    <p
      style={{
        color: "#CFC8BB",
        fontSize: "18px",
        lineHeight: "1.9",
        margin: 0,
      }}
    >
      Delvora Origins welcomes inquiries from importers,
      distributors, food manufacturers, and business partners
      worldwide. We are committed to providing transparent
      communication, responsible sourcing, and reliable export
      solutions from Indonesia.
    </p>
  </div>

  {/* RIGHT */}
  <div
    style={{
      width: "420px",
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(212,175,55,0.18)",
      borderRadius: "28px",
      padding: "45px",
      backdropFilter: "blur(10px)",
      zIndex: 2,
    }}
  >
    {[
      {
        title: "EMAIL",
        value: "info@delvoraorigins.com",
      },
      {
        title: "WEBSITE",
        value: "www.delvoraorigins.com",
      },
      {
        title: "WHATSAPP",
        value: "+62 8191 880 8008",
      },
      {
        title: "LOCATION",
        value: "Indonesia",
      },
    ].map((item, index) => (
      <div
        key={index}
        style={{
          paddingBottom: "24px",
          marginBottom: "24px",
          borderBottom:
            index !== 3
              ? "1px solid rgba(212,175,55,0.12)"
              : "none",
        }}
      >
        <p
          style={{
            color: "#D4AF37",
            fontSize: "16px",
            letterSpacing: "3px",
            margin: 0,
            marginBottom: "10px",
          }}
        >
          {item.title}
        </p>

        <p
          style={{
            color: "#F5F0E6",
            fontSize: "18px",
            margin: 0,
            lineHeight: "1.5",
          }}
        >
          {item.value}
        </p>
      </div>
    ))}
  </div>

  {/* FOOTER TAGLINE */}
  <div
    style={{
      position: "absolute",
      bottom: "45px",
      left: "50%",
      transform: "translateX(-50%)",
      color: "#D4AF37",
      fontSize: "18px",
      fontStyle: "italic",
      letterSpacing: "1px",
    }}
  >
    Rooted in Nature, Growing Prosperity.
  </div>
</section>
    </>
  );
}