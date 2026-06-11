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
              lineHeight: "1.05",
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
    background: "#e1dacb",
    position: "relative",
    overflow: "hidden",
    padding: "70px 90px",
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
        color: "#7a6627",
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
        background: "#7a6627",
        margin: "0 auto 35px",
      }}
    />

    <h2
      style={{
        color: "#10341d",
        fontSize: "50px",
        lineHeight: "1.5",
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
        boxShadow: "0 20px 50px rgba(0,0,0,0.06)",
      }}
    >
      <div
        style={{
          color: "#D4AF37",
          fontSize: "42px",
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
        padding: "35px",
        boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
      }}
    >
      <div
        style={{
          color: "#c7a625",
          fontSize: "40px",
          marginBottom: "20px",
        }}
      >
        ✦
      </div>

      <h3
        style={{
          color: "#F5F0E6",
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
          color: "#D8D2C7",
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


      {/* PAGE 3 */}

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
      opacity: 0.30,
      filter:
        "sepia(100%) saturate(400%) brightness(1.1) contrast(0.8)",
      pointerEvents: "none",
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
      opacity: 0.40,
      filter:
        "sepia(100%) saturate(400%) brightness(1.1) contrast(0.8)",
      pointerEvents: "none",
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
        color: "#bb9d3b",
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
        background: "#D4AF37",
        marginBottom: "35px",
      }}
    />

    <h2
      style={{
        color: "#07120B",
        fontSize: "60px",
        lineHeight: "1.08",
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
        fontSize: "20px",
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
          boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
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
          boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
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
          boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
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
        boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
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
        boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
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
        boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
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

      {/* PAGE 4 */}
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
            width: "28%",
            height: "78%",
            overflow: "hidden",
            borderRadius: "28px",
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
            maxWidth: "650px",
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
              fontSize: "45px",
              lineHeight: "1.1",
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
              fontSize: "20px",
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
        </div>

        <div
          style={{
            width: "28%",
            height: "78%",
            overflow: "hidden",
            borderRadius: "28px",
          }}
        >
          <img
            src="/cinnamon_bg.jpeg"
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </section>

            {/* PAGE 5 */}
      <section
        style={{
          height: "100vh",
          background: "#102818",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "70px 90px",
          gap: "50px",
        }}
      >
        {/* Cinnamon */}
        <div
          style={{
            flex: 1,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(212,175,55,0.25)",
            borderRadius: "28px",
            overflow: "hidden",
          }}
        >
          <img
            src="/cinnamon_bg.jpeg"
            alt="Indonesian Cinnamon"
            style={{
              width: "100%",
              height: "260px",
              objectFit: "cover",
            }}
          />

          <div
            style={{
              padding: "30px",
            }}
          >
            <h3
              style={{
                color: "#D4AF37",
                fontSize: "30px",
                fontFamily: "Georgia, serif",
                marginBottom: "20px",
              }}
            >
              Indonesian Cinnamon
            </h3>

            <div
              style={{
                color: "#D8D2C7",
                fontSize: "17px",
                lineHeight: "2",
              }}
            >
              <p><strong>Origin:</strong> Indonesia</p>
              <p><strong>Type:</strong> Cassia & Ceylon Cinnamon</p>
              <p><strong>Forms:</strong> Sticks, Broken Sticks, Cut</p>
              <p><strong>Moisture:</strong> 10–13%</p>
              <p><strong>Grades:</strong> AA, A, KA, KB, KC</p>
              <p><strong>Packaging:</strong> Export-grade packaging</p>
            </div>
          </div>
        </div>

        {/* Center Title */}
        <div
          style={{
            width: "280px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#D4AF37",
              letterSpacing: "6px",
              fontSize: "16px",
            }}
          >
            PRODUCT DETAILS
          </p>

          <div
            style={{
              width: "80px",
              height: "2px",
              background: "#D4AF37",
              margin: "25px auto",
            }}
          />

          <h2
            style={{
              color: "#F5F0E6",
              fontSize: "42px",
              lineHeight: "1.2",
              fontFamily: "Georgia, serif",
              margin: 0,
            }}
          >
            Product
            <br />
            Specifications
          </h2>

          <p
            style={{
              color: "#CFC8BB",
              marginTop: "25px",
              lineHeight: "1.8",
              fontSize: "16px",
            }}
          >
            Export-quality Indonesian ingredients sourced from trusted origins and prepared to meet international market requirements.
          </p>
        </div>

        {/* Vanilla */}
        <div
          style={{
            flex: 1,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(212,175,55,0.25)",
            borderRadius: "28px",
            overflow: "hidden",
          }}
        >
          <img
            src="/vanilla_bg.jpeg"
            alt="Indonesian Vanilla"
            style={{
              width: "100%",
              height: "260px",
              objectFit: "cover",
            }}
          />

          <div
            style={{
              padding: "30px",
            }}
          >
            <h3
              style={{
                color: "#D4AF37",
                fontSize: "30px",
                fontFamily: "Georgia, serif",
                marginBottom: "20px",
              }}
            >
              Indonesian Vanilla
            </h3>

            <div
              style={{
                color: "#D8D2C7",
                fontSize: "17px",
                lineHeight: "2",
              }}
            >
              <p><strong>Origin:</strong> Indonesia</p>
              <p><strong>Length:</strong> 12–20 cm</p>
              <p><strong>Moisture:</strong> 25–35%</p>
              <p><strong>Grades:</strong> Gourmet Grade & Extract Grade</p>
              <p><strong>Packaging:</strong> Vacuum Packed</p>
              <p><strong>Quality:</strong> Premium Export Quality</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}