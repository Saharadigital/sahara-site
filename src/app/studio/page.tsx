import Footer from "@/components/footer";
import Header from "@/components/header";
import { Code2, LayoutDashboard, PenTool, Briefcase } from "lucide-react";

export default function Studio() {
  return (
    <main className=" relative min-h-screen bg-gradient-to-b from-black via-[#0f0f0f] to-[#1a1a1a] text-white">
      <Header />
      <section className="relative py-24 px-6 max-w-6xl mx-auto overflow-hidden">
        <div className="text-center mb-16">
          <div className="h-1 w-24 bg-[#f5a623] mx-auto mb-6 rounded-full" />
          <h1 className="text-4xl md:text-5xl font-display font-extrabold uppercase tracking-wide">
            The Studio
          </h1>
          <p className="text-gray-400 mt-4 font-body text-lg">
            A small, focused design and development studio with big vision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div>
            <h2 className="text-2xl font-bold font-display mb-4">Philosophy</h2>
            <p className="text-gray-300 text-sm font-body leading-relaxed">
              We believe in clarity, creativity, and technical excellence. Every
              line of code and every pixel we push has purpose. We’re not a
              factory — we’re a workshop, shaping meaningful digital
              experiences.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold font-display mb-4">
              Why Sahara?
            </h2>
            <p className="text-gray-300 text-sm font-body leading-relaxed">
              Sahara is vast, bold, and resilient — just like the ideas we bring
              to life. We chose this name to reflect the atmosphere we aim to
              create: immersive, confident, and beautifully simple.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold font-display mb-4">
              How We Work
            </h2>
            <p className="text-gray-300 text-sm font-body leading-relaxed">
              We operate lean and sharp — no bloated teams, no unnecessary
              meetings. Just honest collaboration, clear feedback loops, and a
              deep commitment to quality from start to launch.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#121212]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="h-1 w-24 bg-[#FFFFFF] mx-auto mb-6 rounded-full" />
          <h2 className="text-3xl font-display font-extrabold uppercase text-[#f5a623] mb-10">
            What Drives Us
          </h2>
          <div className="grid md:grid-cols-3 gap-10 text-left">
            {[
              {
                title: "Precision",
                desc: "From layout grids to GraphQL queries — we sweat the small stuff.",
              },
              {
                title: "Partnership",
                desc: "We work closely, transparently, and with intent. No egos, no fluff.",
              },
              {
                title: "Possibility",
                desc: "We treat every project as an opportunity to build something iconic.",
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="text-xl font-semibold font-display mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 font-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        role="region"
        aria-labelledby="services-heading"
        className="bg-gradient-to-b from-white via-[#fdf8ee] to-[#f2eee9] py-24 text-black"
      >
        <div className="text-center mb-12">
          <div className="h-1 w-24 bg-[#f5a623] mx-auto mb-6 rounded-full" />
          <h2
            id="services-heading"
            className="text-3xl md:text-4xl font-display uppercase font-extrabold tracking-wide"
          >
            What We Do
          </h2>
          <p className="text-sm text-gray-600 mt-2 font-body">
            Bringing bold design and clean code to every digital touchpoint.
          </p>
        </div>

        {/* User Stories Section */}
        <section className="mt-10 max-w-5xl mx-auto px-6 mb-20">
          <h3 className="text-2xl font-display font-extrabold mb-6 text-black text-left">
            We Design Around Real User Stories
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "As a new visitor...",
                body: "I want to understand what this product does within 5 seconds, so I can decide whether it’s worth exploring.",
              },
              {
                title: "As a returning customer...",
                body: "I want to reorder quickly without hunting through menus, so I can get back to work faster.",
              },
              {
                title: "As a mobile user...",
                body: "I want to check availability and book in two taps, so I don’t get frustrated and bounce.",
              },
            ].map((story) => (
              <div
                key={story.title}
                className="bg-white p-5 rounded-xl border border-gray-200 hover:border-[#f5a623] shadow-sm hover:shadow-lg transition-all"
              >
                <h4 className="text-black font-semibold mb-2">{story.title}</h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {story.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Services Grid */}
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
                "Hands-on technical leadership, consulting, or delivery to move faster and build smarter.",
              icon: Briefcase,
            },
          ].map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-gray-200 p-8 rounded-xl shadow-sm hover:shadow-lg hover:border-[#f5a623] transition-all text-left"
              >
                <Icon className="w-10 h-10 text-[#f5a623] mb-4" />
                <h3 className="text-xl font-display font-bold mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-700 font-body leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-6 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="h-1 w-24 bg-[#FFFFFF] mx-auto mb-6 rounded-full" />
          <h2 className="text-2xl md:text-3xl font-display font-extrabold uppercase text-[#f5a623] mb-8">
            We Build With
          </h2>
          <p className="text-gray-400 text-sm mb-10 max-w-2xl mx-auto font-body">
            Our stack is lean, proven, and modern. We only ship what’s stable,
            scalable, and secure.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm uppercase tracking-wide text-white/70">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind",
              "Styled Components",
              "GraphQL",
              "Prisma",
              "Amazon AWS",
              "Heroku",
              "PostgreSQL",
              "Stripe",
              "Node.js",
              "Vercel",
            ].map((tech) => (
              <span
                key={tech}
                className="bg-[#1a1a1a] border border-[#292929] px-4 py-2 rounded-full hover:border-[#f5a623] transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center bg-black border-t border-[#292929]">
        <h4 className="text-2xl font-display uppercase text-white mb-4">
          Let’s build something iconic
        </h4>
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
      <Footer />
    </main>
  );
}
