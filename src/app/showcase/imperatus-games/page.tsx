"use client";

import Header from "@/components/header";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import Imperatus from "@/components/img/imperatus-games.png";
import ImperatusCategories from "@/components/img/imperatus-categories.png";
import ImperatusFiltering from "@/components/img/imperatus-filtering.png";
import ImperatusLogin from "@/components/img/imperatus-login.png";
import ImperatusAdmin from "@/components/img/imperatus-admin.png";
import Footer from "@/components/footer";

export default function ImperatusGames() {
  const [selectedImage, setSelectedImage] = useState<null | {
    src: string | StaticImageData;
    alt: string;
  }>(null);

  return (
    <>
      <Header />
      <main className="min-h-screen text-white bg-black">
        {/* Hero */}
        <section className="bg-gradient-to-b from-black via-[#0f0f0f] to-[#1a1a1a] py-20 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-[#f5a623] mb-4">
              Built for Battle. Designed to Win.
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              A full-scale digital transformation of Imperatus Games—featuring
              custom design, tailored eCommerce, and an immersive brand
              experience built for collectors and newcomers alike.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="bg-[#f7f3eb] text-black py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#222] mb-6">
              Project Overview
            </h2>
            <p className="text-gray-700 text-base md:text-lg mb-10 max-w-3xl">
              Imperatus Games needed a modern digital platform to support their
              launch as both an online retailer. The challenge was to build a
              fully custom commerce platform that reflected their unique brand
              and supported complex product structures, filtering, preorders,
              and more.
            </p>
            <div className="rounded-lg shadow-md overflow-hidden inline-block">
              <Image
                src={Imperatus}
                alt="Imperatus project overview"
                className="block"
                width={Imperatus.width}
                height={Imperatus.height}
              />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-[#1e1e1e] text-white py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#f5a623] mb-12 text-center">
              What We Delivered
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
              {[
                {
                  title: "Custom eCommerce Engine",
                  desc: "Designed around collectible logic—variants, rarities, preorders, and more.",
                },
                {
                  title: "Admin CMS",
                  desc: "Complete control over products, promotions, orders, and inventory.",
                },
                {
                  title: "Branded Experience",
                  desc: "Tailored UI and visual language true to the tabletop gaming space.",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="bg-[#121212] p-6 rounded-xl border border-[#2a2a2a] hover:border-[#f5a623] transition"
                >
                  <h3 className="font-bold text-lg mb-2 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-white/70">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visual Highlights */}
        <section className="bg-[#f2eee9] text-black py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#222] mb-8">
              Visual Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  src: ImperatusCategories,
                  title: "Advanced Category Navigation",
                  desc: "A robust and intuitive category system with deep filtering tailored for collectors and casual buyers.",
                },
                {
                  src: ImperatusFiltering,
                  title: "Custom Product Structure",
                  desc: "Support for preorders, variants, rarities, and dynamic pricing—all fully integrated.",
                },
                {
                  src: ImperatusLogin,
                  title: "User-Centric Login Experience",
                  desc: "A seamless login and account management system that enhances user engagement.",
                },
                {
                  src: ImperatusAdmin,
                  title: "Streamlined Admin Panel",
                  desc: "A custom admin dashboard to manage inventory, discounts, orders, and more.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <div
                    className="w-full aspect-[4/3] relative rounded-lg overflow-hidden shadow-md max-w-sm mx-auto cursor-pointer"
                    onClick={() =>
                      setSelectedImage({ src: item.src, alt: item.title })
                    }
                  >
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-[#222]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1 max-w-xs">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modal Popup */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4">
            <div className="relative w-full max-w-4xl aspect-video rounded-lg overflow-hidden">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-10 right-0 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-bold hover:bg-[#f5a623] transition z-10"
              >
                ×
              </button>
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}

        {/* Tech Stack */}
        <section className="bg-[#141414] text-white py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#f5a623] mb-8">
              Under the Hood
            </h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-white/80 text-sm">
              <li>→ React & TypeScript</li>
              <li>→ GraphQL API</li>
              <li>→ Prisma ORM</li>
              <li>→ Custom Admin Panel</li>
              <li>→ Stripe Payments</li>
              <li>→ S3 Image Storage</li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 text-center bg-black border-t border-[#292929]">
          <h3 className="text-2xl md:text-3xl font-display uppercase text-white mb-4">
            Have a bold idea?
          </h3>
          <p className="text-white/70 mb-6 text-sm">
            Let’s build something iconic together.
          </p>
          <a
            href="/connect"
            className="inline-block bg-[#f5a623] text-black px-6 py-3 rounded-full font-semibold hover:bg-white transition"
          >
            Start Your Project
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
