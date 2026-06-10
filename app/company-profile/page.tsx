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
            Premium Indonesian
            <br />
            Vanilla & Cinnamon
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

      {/* PAGE 3 */}
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
    </>
  );
}