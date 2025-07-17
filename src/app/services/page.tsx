import { Briefcase, Code2, LayoutDashboard, PenTool } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white via-[#fdf8ee] to-[#f2eee9] text-text">
        <section className="py-24 px-6 text-center">
          <div className="h-1 w-24 bg-[#f5a623] mx-auto mb-6 rounded-full" />
          <h1 className="text-4xl md:text-5xl font-display font-extrabold uppercase mb-4">
            Our Services
          </h1>
          <p className="max-w-xl mx-auto text-sm text-gray-600 font-body">
            Built to help you move faster, design better, and deliver smarter.
          </p>
        </section>

        <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6 pb-24">
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
                "Fast, accessible, SEO-friendly code built to scale and perform.",
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
                "Hands-on technical leadership, consulting, and delivery across codebases and teams.",
              icon: Briefcase,
            },
          ].map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-gray-200 p-8 rounded-xl shadow-md hover:shadow-lg transition-all text-left"
              >
                <Icon className="w-10 h-10 text-[#f5a623] mb-4" />
                <h2 className="text-xl font-display font-bold mb-2">
                  {service.title}
                </h2>
                <p className="text-sm text-gray-700 font-body leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </section>
      </main>
      <Footer />
    </>
  );
}
