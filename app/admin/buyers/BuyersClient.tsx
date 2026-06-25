"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function BuyersClient() {
  const [buyers, setBuyers] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);

  const [form, setForm] = useState({
    company: "",
    website: "",
    number: "",
    email: "",
    country: "",
    interest: "",
    notes: "",
    tags: "",
    status: "Lead",
  });

  // FETCH BUYERS
  async function fetchBuyers() {
    const { data } = await supabase
      .from("buyers")
      .select("*")
      .order("company", { ascending: true });

    setBuyers(data || []);
  }

  useEffect(() => {
    fetchBuyers();
  }, []);

  // ADD BUYER
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    let error;

      if (editingId) {
      const result = await supabase
        .from("buyers")
        .update(form)
        .eq("id", editingId);

      error = result.error;
    } else {
      const result = await supabase
        .from("buyers")
        .insert([form]);

      error = result.error;
    }

    if (error) {
      alert(error.message);
      return;
    }

    setForm({
      company: "",
      website: "",
      number: "",
      email: "",
      country: "",
      interest: "",
      notes: "",
      tags: "",
      status: "Lead",
    });

    fetchBuyers();
  }

  // TOGGLE STATUS
  async function toggleStatus(id: number, currentStatus: string) {
    const newStatus =
      currentStatus === "Contacted" ? "Lead" : "Contacted";

    const { error } = await supabase
      .from("buyers")
      .update({ status: newStatus })
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    fetchBuyers();
  }

  async function deleteBuyer(id: number) {
  const confirmed = window.confirm(
    "Delete this buyer permanently?"
  );

  if (!confirmed) return;

  const { error } = await supabase
    .from("buyers")
    .delete()
    .eq("id", id);

  if (error) {
    alert(error.message);
    return;
  }

  fetchBuyers();
}
  function editBuyer(b: any) {
    setEditingId(b.id);

    setForm({
    company: b.company || "",
    website: b.website || "",
    number: b.number || "",
    email: b.email || "",
    country: b.country || "",
    interest: b.interest || "",
    notes: b.notes || "",
    tags: b.tags || "",
    status: b.status || "Lead",
    });
  }

  // EXPORT CSV
  function exportCSV() {
    const headers = [
      "Company",
      "Website",
      "Number",
      "Email",
      "Country",
      "Interest",
      "Notes",
      "Tags",
      "Status",
    ];

    const rows = buyers.map((b) => [
      b.company,
      b.website,
      b.number,
      b.email,
      b.country,
      b.interest,
      b.notes,
      b.tags,
      b.status,
    ]);

    const BOM = "\uFEFF";

    const csv =
      BOM +
      [headers, ...rows]
        .map((r) =>
          r.map((v) => `"${String(v || "").replace(/"/g, '""')}"`).join(";")
        )
        .join("\n");

    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "buyers.csv";
    a.click();
  }

  return (
    <main
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative px-6"
      style={{ backgroundImage: "url('/why_indonesia.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 w-full max-w-6xl">

        {/* HEADER */}
        <div className="text-center text-white mb-10">
          <p className="text-[#B68D40] tracking-[0.35em] uppercase text-sm">
            Delvora Origins
          </p>

          <h1 className="text-4xl font-light mt-3">
            Buyer CRM
          </h1>

          <p className="text-white/70 mt-2">
            Export leads management system
          </p>
        </div>

        {/* CARD */}
        <div className="grid md:grid-cols-2 gap-8 bg-white/95 backdrop-blur-md p-8 rounded-3xl shadow-2xl">

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              className="w-full border rounded-xl px-4 py-3"
              placeholder="Company"
              value={form.company}
              onChange={(e) =>
                setForm({ ...form, company: e.target.value })
              }
            />

            <input
              className="w-full border rounded-xl px-4 py-3"
              placeholder="Website"
              value={form.website}
              onChange={(e) =>
                setForm({ ...form, website: e.target.value })
              }
            />

             <input
              className="w-full border rounded-xl px-4 py-3"
              placeholder="Number"
              value={form.number}
              onChange={(e) =>
                setForm({ ...form, number: e.target.value })
              }
            />

            <input
              className="w-full border rounded-xl px-4 py-3"
              placeholder="Email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            <input
              className="w-full border rounded-xl px-4 py-3"
              placeholder="Country"
              value={form.country}
              onChange={(e) =>
                setForm({ ...form, country: e.target.value })
              }
            />

            <input
              className="w-full border rounded-xl px-4 py-3"
              placeholder="Interest"
              value={form.interest}
              onChange={(e) =>
                setForm({ ...form, interest: e.target.value })
              }
            />

            <textarea
              className="w-full border rounded-xl px-4 py-3"
              placeholder="Notes"
              value={form.notes}
              onChange={(e) =>
                setForm({ ...form, notes: e.target.value })
              }
            />

            <input
              className="w-full border rounded-xl px-4 py-3"
              placeholder="Tags (bakery, importer, hotel)"
              value={form.tags}
              onChange={(e) =>
                setForm({ ...form, tags: e.target.value })
              }
            />

            <button className="w-full bg-[#B68D40] text-white py-3 rounded-xl">
              Save Buyer
            </button>
          </form>

          {/* LIST */}
          <div>

            <div className="flex gap-2 mb-4">
              <input
                className="w-full border rounded-xl px-4 py-3"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <button
                onClick={exportCSV}
                className="px-4 py-3 bg-black text-white rounded-xl text-sm"
              >
                Export
              </button>
            </div>

            <div className="space-y-4 max-h-[500px] overflow-y-auto">

              {buyers
                .filter((b) => {
                  const k = search.toLowerCase();
                  return (
                    b.company?.toLowerCase().includes(k) ||
                    b.email?.toLowerCase().includes(k) ||
                    b.country?.toLowerCase().includes(k)
                  );
                })
                .map((b) => (
                  <div key={b.id} className="border rounded-2xl p-4">

                    <h3 className="font-medium">{b.company}</h3>

                  {b.website && (
                    <a
                      href={
                        b.website.startsWith("http")
                          ? b.website
                          : `https://${b.website}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-[#B68D40] hover:underline"
                 >
                  {b.website}
                </a>
              )}

              {b.number && (
                <p className="text-sm text-[#B68D40] font-medium">
                  {b.number}
                </p>
              )}

              <p className="text-sm text-gray-500">
                {b.country} • {b.email}
              </p>

                    <p className="text-xs text-gray-400 mt-1">
                      {b.interest}
                    </p>

                    <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                      {b.notes}
                    </p>

                    {b.tags && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {b.tags.split(",").map((t: string, i: number) => (
                          <span
                            key={i}
                            className="text-[10px] bg-gray-100 px-2 py-1 rounded-lg"
                          >
                            {t.trim()}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center gap-2 mt-3">

                      <button
                        onClick={() => toggleStatus(b.id, b.status)}
                        className="text-xs px-3 py-1 rounded-lg bg-[#B68D40] text-white"
                      >
                        {b.status === "Contacted"
                          ? "Mark Lead"
                          : "Mark Contacted"}
                      </button>

                      <button
                        onClick={() => editBuyer(b)}
                        className="text-xs px-3 py-1 rounded-lg bg-black text-white"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => deleteBuyer(b.id)}
                        className="text-xs px-3 py-1 rounded-lg bg-red-600 text-white"
                      >
                        Delete
                      </button>

                      <span className="text-xs px-2 py-1 bg-gray-100 rounded-lg">
                        {b.status}
                      </span>

                    </div>

                  </div>
                ))}

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}