"use client";

import { useState } from "react";

export default function RequestQuote() {
const [fullName, setFullName] = useState("");
const [companyName, setCompanyName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [country, setCountry] = useState("");
const [productRequested, setProductRequested] = useState("");
const [specifications, setSpecifications] = useState("");
const [quantity, setQuantity] = useState("");
const [destinationPort, setDestinationPort] = useState("");
const [incoterm, setIncoterm] = useState("");
const [packaging, setPackaging] = useState("");
const [requirements, setRequirements] = useState("");

const [isSubmitting, setIsSubmitting] = useState(false);
const [submitted, setSubmitted] = useState(false);

return (
<main
style={{
minHeight: "100vh",
backgroundImage: "url('/why_indonesia.jpeg')",
backgroundSize: "cover",
backgroundPosition: "center",
position: "relative",
display: "flex",
justifyContent: "center",
alignItems: "center",
padding: "40px 20px",
}}
>
<div
style={{
position: "absolute",
inset: 0,
background:
"linear-gradient(rgba(245,240,230,0.85), rgba(245,240,230,0.85))",
}}
/>

  <div
    style={{
      position: "relative",
      zIndex: 2,
      width: "700px",
      maxWidth: "100%",
      background: "#ffffff",
      borderRadius: "30px",
      padding: "55px",
      boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
    }}
  >
    <div style={{ textAlign: "center", marginBottom: "25px" }}>
      <img
        src="/Logo_Delvora2.png"
        alt="Delvora Origins"
        style={{
          width: "110px",
          height: "auto",
          marginBottom: "15px",
        }}
      />

      <p
        style={{
          color: "#B08A2E",
          letterSpacing: "4px",
          fontSize: "13px",
          margin: 0,
        }}
      >
        DELVORA ORIGINS
      </p>
    </div>

    <h1
      style={{
        color: "#10341d",
        fontSize: "42px",
        fontFamily: "Georgia, serif",
        textAlign: "center",
        marginBottom: "15px",
      }}
    >
      Request a Quote
    </h1>

    <p
      style={{
        color: "#666",
        textAlign: "center",
        lineHeight: "1.8",
        marginBottom: "40px",
      }}
    >
      Tell us about your sourcing requirements and our team will prepare a quotation tailored to your needs.
    </p>

    <form
      onSubmit={async (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        try {
          const response = await fetch("/api/request-quote", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              fullName,
              companyName,
              email,
              phone,
              country,
              productRequested,
              specifications,
              quantity,
              destinationPort,
              incoterm,
              packaging,
              requirements,
            }),
          });

          const result = await response.json();

          if (result.success) {
            setSubmitted(true);

            setFullName("");
            setCompanyName("");
            setEmail("");
            setPhone("");
            setCountry("");
            setProductRequested("");
            setSpecifications("");
            setQuantity("");
            setDestinationPort("");
            setIncoterm("");
            setPackaging("");
            setRequirements("");
          } else {
            alert("Something went wrong.");
          }
        } catch {
          alert("Something went wrong.");
        }

        setIsSubmitting(false);
      }}
    >
      <h3 style={sectionTitle}>Contact Information</h3>

      <input placeholder="Full Name *" value={fullName} onChange={(e) => setFullName(e.target.value)} style={inputStyle} />
      <input placeholder="Company Name *" value={companyName} onChange={(e) => setCompanyName(e.target.value)} style={inputStyle} />
      <input placeholder="Business Email *" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
      <input placeholder="Phone / WhatsApp Number *" value={phone} onChange={(e) => setPhone(e.target.value)} style={inputStyle} />
      <input placeholder="Country *" value={country} onChange={(e) => setCountry(e.target.value)} style={inputStyle} />

      <h3 style={sectionTitle}>Product Inquiry</h3>

      <select value={productRequested} onChange={(e) => setProductRequested(e.target.value)} style={inputStyle}>
        <option value="">Select Product</option>
        <option>Ceylon Cinnamon</option>
        <option>Cassia Cinnamon</option>
        <option>Vanilla Beans</option>
      </select>

      <input placeholder="Required Specifications *" value={specifications} onChange={(e) => setSpecifications(e.target.value)} style={inputStyle} />

      <select value={quantity} onChange={(e) => setQuantity(e.target.value)} style={inputStyle}>
        <option value="">Select Quantity</option>
        <option>Sample Request</option>
        <option>Less than 100 kg</option>
        <option>100–500 kg</option>
        <option>500 kg–1 MT</option>
        <option>More than 1 MT</option>
      </select>

      <h3 style={sectionTitle}>Shipping Information</h3>

      <input placeholder="Destination Port *" value={destinationPort} onChange={(e) => setDestinationPort(e.target.value)} style={inputStyle} />

      <select value={incoterm} onChange={(e) => setIncoterm(e.target.value)} style={inputStyle}>
        <option value="">Select Incoterm</option>
        <option>FOB</option>
        <option>CIF</option>
        <option>CFR</option>
        <option>EXW</option>
      </select>

      <input placeholder="Packaging Requirements *" value={packaging} onChange={(e) => setPackaging(e.target.value)} style={inputStyle} />

      <textarea
        placeholder="Additional Requirements"
        value={requirements}
        onChange={(e) => setRequirements(e.target.value)}
        style={{
          ...inputStyle,
          minHeight: "140px",
          resize: "vertical",
        }}
      />

      {submitted && (
        <p
          style={{
            color: "#10341d",
            fontWeight: 600,
            marginTop: "15px",
          }}
        >
          ✓ Request Submitted Successfully
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        style={{
          width: "100%",
          marginTop: "25px",
          background: isSubmitting ? "#777" : "#10341d",
          color: "#fff",
          border: "none",
          padding: "18px",
          borderRadius: "14px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: 600,
        }}
      >
        {isSubmitting ? "Sending..." : "Request Quote"}
      </button>
    </form>
  </div>
</main>

);
}

const sectionTitle = {
marginTop: "35px",
marginBottom: "15px",
color: "#10341d",
};

const inputStyle = {
width: "100%",
padding: "15px 18px",
borderRadius: "12px",
border: "1px solid #ddd",
fontSize: "15px",
marginBottom: "15px",
outline: "none",
};
