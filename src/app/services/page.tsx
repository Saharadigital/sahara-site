import { Briefcase, Code2, LayoutDashboard, PenTool } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white via-[#fdf8ee] to-[#f2eee9] text-text">
        {/* Intro Section */}
        <section className="py-24 px-6 text-center">
          <div className="h-1 w-24 bg-[#f5a623] mx-auto mb-6 rounded-full" />
          <h1 className="text-4xl md:text-5xl font-display font-extrabold uppercase mb-4">
            Our Services
          </h1>
          <p className="max-w-2xl mx-auto text-base text-gray-700 font-body leading-relaxed">
            We partner with founders, marketers, and product teams to design,
            build, and refine digital experiences that perform. Whether
            you&#39;re launching something new or improving what exists, we
            bring sharp thinking and precision execution.
          </p>
        </section>

        {/* Services Grid */}
        <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6 pb-24">
          {[
            {
              title: "Web Design",
              description:
                "Modern, mobile-first designs tailored to your brand’s voice. Every pixel crafted to inspire trust and drive interaction.",
              icon: LayoutDashboard,
            },
            {
              title: "Web Development",
              description:
                "Clean, scalable code that performs. Built with accessibility, performance, and long-term maintainability in mind.",
              icon: Code2,
            },
            {
              title: "Product Design",
              description:
                "UX and UI design that turns ideas into interfaces. We map user journeys, wireframe flows, and prototype fast.",
              icon: PenTool,
            },
            {
              title: "Precision Support",
              description:
                "Need a dev in the room during a strategy call? Want technical oversight without hiring full-time? We plug in where it counts.",
              icon: Briefcase,
            },
            {
              title: "Performance Optimization",
              description:
                "Audits, Core Web Vitals fixes, and technical tuning to make your site feel instantaneous — even on slow connections.",
              icon: Code2,
            },
            {
              title: "CMS Integration",
              description:
                "We work with headless CMS platforms like Sanity and Contentful to give you editing power without compromising speed.",
              icon: LayoutDashboard,
            },
            {
              title: "Brand Systems",
              description:
                "We help define scalable design systems and front-end libraries that bring cohesion to every page and product.",
              icon: PenTool,
            },
            {
              title: "Ongoing Retainers",
              description:
                "Flexible retainers for teams who want consistent updates, new features, or expert support as they grow.",
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

        {/* Mid Section Divider */}
        <section className="py-20 px-6 bg-[#121212] text-center text-white">
          <div className="max-w-3xl mx-auto">
            <div className="h-1 w-24 bg-white mx-auto mb-6 rounded-full" />
            <h2 className="text-3xl font-display font-extrabold uppercase text-[#f5a623] mb-4">
              Built to Scale
            </h2>
            <p className="text-sm text-gray-300 font-body">
              We don’t just design and build. We tune, optimize, and support
              your product through launch and beyond.
            </p>
          </div>
        </section>

        {/* How We Work */}
        <section className="pt-24 pb-24 px-6 text-center">
          <div className="h-1 w-24 bg-[#f5a623] mx-auto mb-6 rounded-full" />
          <h2 className="text-2xl font-display font-bold mb-6">How We Work</h2>
          <p className="text-base text-gray-700 font-body leading-relaxed mb-4">
            Every project is grounded in collaboration. We don’t just build what
            you ask for — we ask the hard questions that sharpen the outcome.
            From rapid sprints to long-term retainers, we adapt to how you move.
          </p>
          <p className="text-base text-gray-700 font-body leading-relaxed">
            Need a dev in the room during strategy? Want to hand off a whole
            build? We slot in where we’re most useful — and deliver where it
            matters most.
          </p>
        </section>

        {/* CTA Section (Dark) */}
        <section className="py-20 px-6 text-center bg-black border-t border-[#292929]">
          <h2 className="text-2xl font-display uppercase text-white mb-4">
            Let’s build something iconic
          </h2>
          <p className="text-gray-400 mb-6 text-sm">
            If you’ve got vision, we’ve got the tools and the time.
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
