import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Approach() {
  return (
    <>
      <Header />
      <main className="text-white">
        {/* Hero + 3-step approach */}
        <section className="bg-gradient-to-b from-black via-[#0f0f0f] to-[#1a1a1a] py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="h-1 w-24 bg-[#f5a623] mx-auto mb-6 rounded-full" />
              <h1 className="text-4xl md:text-5xl font-display font-extrabold uppercase tracking-wide">
                Our Approach
              </h1>
              <p className="text-gray-400 mt-4 font-body text-lg">
                Precision, intention, and creativity in every phase — here&#39;s
                how we do it.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10 mb-24">
              {[
                {
                  title: "1. Discover",
                  desc: "We listen, learn, and research deeply to understand your brand, audience, and challenges.",
                },
                {
                  title: "2. Design",
                  desc: "We craft immersive, user-first experiences with a sharp eye for aesthetics and usability.",
                },
                {
                  title: "3. Build",
                  desc: "Using clean, scalable code and the latest tech, we bring the vision to life — pixel-perfect.",
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className="bg-[#1a1a1a] p-6 rounded-xl border border-[#292929] hover:border-[#f5a623] transition-all shadow-md hover:shadow-lg"
                >
                  <h3 className="text-xl font-display font-bold mb-3 text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-300 font-body leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why it works */}
        <section className="bg-[#121212] py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-extrabold uppercase tracking-wide mb-4">
                Why It Works
              </h2>
              <p className="text-gray-400 text-lg font-body max-w-3xl mx-auto">
                Because we stay small, focused, and invested. You don’t get a
                bloated team or generic templates — you get a partner who crafts
                with care, codes with purpose, and adapts quickly.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              {[
                {
                  title: "Tailored Strategy",
                  desc: "We adapt our process to match your goals — no copy-paste templates.",
                },
                {
                  title: "Transparent Workflow",
                  desc: "You’ll always know what’s happening, what’s next, and why it matters.",
                },
                {
                  title: "Future-Proof Tech",
                  desc: "We only build with tech that’s stable, scalable, and maintainable.",
                },
                {
                  title: "High-End Design",
                  desc: "Visual clarity meets brand expression — always built with intent.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-[#1a1a1a] p-6 rounded-xl border border-[#292929] hover:border-[#f5a623] transition-all shadow-md hover:shadow-lg"
                >
                  <h3 className="text-lg font-display font-bold mb-2 text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-300 font-body leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What we value */}
        <section className="bg-[#0f0f0f] py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-extrabold uppercase tracking-wide mb-8">
                What We Value
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  title: "Clarity",
                  desc: "No fluff. Just honest, direct collaboration with clear outcomes.",
                },
                {
                  title: "Craft",
                  desc: "Everything we design and build is made to last — with precision and care.",
                },
                {
                  title: "Focus",
                  desc: "We go deep, not wide. Fewer clients. Sharper work.",
                },
              ].map((value, i) => (
                <div
                  key={i}
                  className="bg-[#1a1a1a] p-6 rounded-xl border border-[#292929] hover:border-[#f5a623] transition-all shadow-md hover:shadow-lg"
                >
                  <h3 className="text-lg font-display font-bold mb-2 text-white">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-300 font-body leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black border-t border-[#292929] py-24 px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h4 className="text-2xl font-display uppercase text-white mb-4">
              Ready to Work Together?
            </h4>
            <p className="text-gray-400 mb-6 text-sm">
              If our approach feels like the right fit, let’s talk.
            </p>
            <a
              href="/connect"
              className="inline-block bg-[#f5a623] text-black px-6 py-3 rounded-full font-semibold hover:bg-white transition"
            >
              Start Your Project
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
