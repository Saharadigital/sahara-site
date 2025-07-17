import "./globals.css";
import Hero from "@/components/hero";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Briefcase, Code2, LayoutDashboard, PenTool } from "lucide-react";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white via-[#fdf8ee] to-[#f2eee9] text-text">
        <Hero />
        <section
          role="region"
          aria-labelledby="services-heading"
          className="bg-gradient-to-b from-[#2a2a2a] via-[#1f1f1f] to-[#1a1a1a] pt-24 pb-8 text-white"
        >
          <div className="text-center mb-12">
            <div className="h-1 w-24 bg-[#f5a623] mx-auto mb-6 rounded-full" />
            <h2
              id="services-heading"
              className="text-3xl md:text-4xl font-display uppercase font-extrabold tracking-wide"
            >
              What We Do
            </h2>
            <p className="text-sm text-gray-400 mt-2 font-body">
              Bringing bold design and clean code to every digital touchpoint.
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
            {[
              {
                title: "Web Design",
                description:
                  "Immersive, responsive websites crafted to reflect your brand.",
                icon: LayoutDashboard,
              },
              {
                title: "Web Development",
                description:
                  "Fast, accessible, SEO-friendly code built to scale.",
                icon: Code2,
              },
              {
                title: "Product Design",
                description:
                  "From idea to interface—complete user-first product journeys.",
                icon: PenTool,
              },
              {
                title: "Precision Support",
                description:
                  "“Hands-on technical leadership to move faster, build smarter, and raise the bar.",
                icon: Briefcase,
              },
            ].map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#2a2a2a] p-8 rounded-xl border border-[#3a3a3a] hover:border-[#f5a623] transition-all shadow-md hover:shadow-lg"
                >
                  <Icon className="w-10 h-10 text-[#f5a623] mb-4" />
                  <h3 className="text-xl font-display font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-300 font-body leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="bg-[#121212] py-24 px-6 text-white">
          <div className="text-center mb-16">
            <div className="h-1 w-24 bg-[#f5a623] mx-auto mb-6 rounded-full" />
            <h2 className="text-3xl md:text-4xl font-display uppercase font-extrabold tracking-wide">
              Testimonials
            </h2>
            <p className="text-sm text-gray-400 mt-2 font-body">
              Real words from people we&#39;ve worked with.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
            {[
              {
                name: "Alex Morgan",
                role: "Founder, Horizon Studio",
                quote:
                  "Working with Sahara was game-changing. The clarity, speed, and quality were beyond anything we expected.",
              },
              {
                name: "Priya Nair",
                role: "Head of Product, Nova",
                quote:
                  "They just get it. From UX to performance, the end result felt tailored and tight. No wasted moves.",
              },
              {
                name: "Daniel Cho",
                role: "Creative Director, Frame & Co.",
                quote:
                  "Sahara combines design sensibility with technical precision. Total professionals — and fun to work with.",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-[#1a1a1a] p-6 rounded-xl border border-[#292929] hover:border-[#f5a623] shadow-md hover:shadow-lg transition-all"
              >
                <p className="text-sm text-gray-300 font-body leading-relaxed italic mb-6">
                  “{t.quote}”
                </p>
                <div className="text-sm text-gray-400 font-body">
                  <span className="block font-semibold text-white">
                    {t.name}
                  </span>
                  <span className="text-xs">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
