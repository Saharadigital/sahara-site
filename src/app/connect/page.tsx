"use client";

import { useState } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Connect() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    telephone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(false);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({
          fullname: "",
          email: "",
          telephone: "",
          message: "",
        });
      } else {
        const data = await res.json();
        setError(data.error || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to send message.");
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-black via-[#0f0f0f] to-[#1a1a1a] text-white">
        <section className="py-24 px-6 text-center max-w-3xl mx-auto">
          <div className="h-1 w-24 bg-[#f5a623] mx-auto mb-6 rounded-full" />
          <h1 className="text-4xl md:text-5xl font-display font-extrabold mb-4">
            Let&#39;s Connect
          </h1>
          <p className="text-gray-400 mb-10 text-lg font-body">
            Whether you’ve got a project, an idea, or just want to chat — drop
            us a message and we’ll get back to you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div>
              <label className="block text-sm mb-1 font-semibold">Name</label>
              <input
                name="fullname"
                type="text"
                placeholder="Your name"
                value={formData.fullname}
                onChange={handleChange}
                required
                className="w-full bg-[#1f1f1f] border border-[#333] rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f5a623]"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 font-semibold">Email</label>
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[#1f1f1f] border border-[#333] rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f5a623]"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 font-semibold">
                Contact Number
              </label>
              <input
                name="telephone"
                type="tel"
                placeholder="Optional"
                value={formData.telephone}
                onChange={handleChange}
                className="w-full bg-[#1f1f1f] border border-[#333] rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f5a623]"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 font-semibold">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Tell us about your project..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-[#1f1f1f] border border-[#333] rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f5a623]"
              />
            </div>

            <button
              type="submit"
              className="mt-4 bg-[#f5a623] hover:bg-[#e89f1e] text-black font-semibold px-6 py-3 rounded-full transition-all"
            >
              Send Message
            </button>

            {submitted && (
              <p className="text-green-500 mt-4">Message sent successfully!</p>
            )}
            {error && <p className="text-red-500 mt-4">{error}</p>}
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
