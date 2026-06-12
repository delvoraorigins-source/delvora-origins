"use client";

import { useState } from "react";

export default function RequestCompanyProfile() {
const [fullName, setFullName] = useState("");
const [companyName, setCompanyName] = useState("");
const [email, setEmail] = useState("");
const [country, setCountry] = useState("");
const [loading, setLoading] = useState(false);

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
}}
>
<div
style={{
position: "absolute",
inset: 0,
background:
"linear-gradient(rgba(245,240,230,0.82), rgba(245,240,230,0.82))",
}}
/>

  <div
    style={{
      position: "relative",
      zIndex: 2,
      width: "560px",
      background: "#ffffff",
      borderRadius: "30px",
      padding: "55px",
      boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
    }}
  >
    <div
      style={{
        textAlign: "center",
        marginBottom: "20px",
      }}
    >
      <img
        src="/Logo_Delvora2.png"
        alt="Delvora Origins"
        style={{
          width: "110px",
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
        marginTop: "10px",
        marginBottom: "15px",
      }}
    >
      Request Company Profile
    </h1>

    <p
      style={{
        color: "#666",
        textAlign: "center",
        lineHeight: "1.8",
        marginBottom: "35px",
      }}
    >
      Please provide your business information and receive our company
      profile directly in your inbox.
    </p>

    <form
      onSubmit={async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
          const response = await fetch(
            "/api/request-company-profile",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                fullName,
                companyName,
                email,
                country,
              }),
            }
          );

          const result = await response.json();

          if (result.success) {
            alert("Company Profile sent successfully!");

            setFullName("");
            setCompanyName("");
            setEmail("");
            setCountry("");
          } else {
            alert("Something went wrong.");
          }
        } catch (error) {
          alert("Something went wrong.");
        } finally {
          setLoading(false);
        }
      }}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
      }}
    >
      <input
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        style={inputStyle}
      />

      <input
        placeholder="Company Name"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        style={inputStyle}
      />

      <input
        placeholder="Business Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={inputStyle}
      />

      <input
        placeholder="Country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        style={inputStyle}
      />

      <button
        type="submit"
        disabled={loading}
        style={{
          marginTop: "10px",
          background: loading
            ? "#6f7d72"
            : "#10341d",
          color: "#fff",
          border: "none",
          padding: "16px",
          borderRadius: "14px",
          cursor: loading
            ? "not-allowed"
            : "pointer",
          fontSize: "16px",
          fontWeight: 600,
          opacity: loading ? 0.85 : 1,
          transition: "all 0.3s ease",
        }}
      >
        {loading
          ? "Sending Company Profile..."
          : "Get Company Profile"}
      </button>
    </form>
  </div>
</main>

);
}

const inputStyle = {
width: "100%",
padding: "15px 18px",
borderRadius: "12px",
border: "1px solid #ddd",
fontSize: "15px",
outline: "none",
};
