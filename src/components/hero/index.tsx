"use client";

import Image from "next/image";
import Link from "next/link";
import HeroLogo from "@/components/img/hero-desert.png";

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] bg-black text-white overflow-hidden">
      {/* Background Image */}
      <Image
        src={HeroLogo}
        alt="Desert at dusk"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-start h-full px-8 md:px-16 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold uppercase font-display tracking-tight">
          Sahara Digital
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-xl text-gray-300 font-body">
          Engineering unforgettable digital experiences with clean code and
          elegance.
        </p>
        <div className="mt-6 flex gap-4">
          <Link
            href="/connect"
            className="bg-[#f5a623] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#e09e20] transition"
          >
            Work With Us
          </Link>
          <Link
            href="/showcase"
            className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
          >
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
