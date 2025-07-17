import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";
import Imperatus from "@/components/img/imperatus-games.png";

export default function Showcase() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b">
        <section className="relative h-[65vh] md:h-[80vh] w-full">
          <Image
            src={Imperatus}
            alt="Featured Project"
            fill
            className="object-cover opacity-95"
            priority
          />
          <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-6">
            <h2 className="text-4xl md:text-6xl font-display font-extrabold uppercase tracking-wide text-[#f5a623]">
              Built for Battle.
            </h2>
            <h3 className="text-4xl md:text-3xl font-display font-extrabold uppercase tracking-wide text-[#f5a623]">
              {" "}
              Designed to Win.
            </h3>
            <p className="mt-4 max-w-2xl text-white/80 text-sm md:text-base font-body">
              A full-scale digital transformation of Imperatus Games—featuring
              custom design, tailored eCommerce, and an immersive brand
              experience built for collectors and newcomers alike.
            </p>
            <a
              href="/showcase/imperatus-games"
              className="mt-6 inline-block bg-[#f5a623] text-black px-6 py-3 rounded-full font-semibold hover:bg-white transition"
            >
              Read More
            </a>
          </div>
        </section>

        <section className="py-24 px-6 max-w-7xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-display uppercase font-extrabold text-center text-[#f5a623] mb-12">
            Recent Work
          </h3>

          {
            // Uncomment to test populated case
            // [{ title: "Eclipse Labs", img: "/projects/eclipse.png" },
            // { title: "Nova Commerce", img: "/projects/nova.png" },
            // { title: "Ion AI", img: "/projects/ion.png" }]
            ([] as { title: string; img: string }[]).length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                {([] as { title: string; img: string }[])
                  // [{ title: "Eclipse Labs", img: "/projects/eclipse.png" },
                  // { title: "Nova Commerce", img: "/projects/nova.png" },
                  // { title: "Ion AI", img: "/projects/ion.png" }]
                  .map((project) => (
                    <div
                      key={project.title}
                      className="bg-[#1a1a1a] border border-[#292929] hover:border-[#f5a623] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all"
                    >
                      <div className="relative h-56 w-full">
                        <Image
                          src={project.img}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="text-lg font-display font-semibold text-white">
                          {project.title}
                        </h4>
                      </div>
                    </div>
                  ))}
              </div>
            ) : (
              <div className="bg-[#1a1a1a] border border-[#292929] rounded-xl p-10 max-w-3xl mx-auto text-center shadow-md hover:shadow-lg transition-all">
                <h4 className="text-2xl font-display font-bold text-white mb-4">
                  Your Project Could Be Here
                </h4>
                <p className="text-white/70 mb-6">
                  We&#39;re currently partnering with select clients to build
                  standout digital experiences. If you&apos;re looking for a
                  bold, bespoke solution — let’s talk.
                </p>
                <a
                  href="/connect"
                  className="inline-block bg-[#f5a623] text-black px-6 py-3 rounded-full font-semibold hover:bg-white transition"
                >
                  Start Your Project
                </a>
              </div>
            )
          }
        </section>

        {/* Process / How We Work */}
        <section className="py-24 px-6 max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-extrabold uppercase font-display text-center mb-12 text-[#f5a623]">
            How We Build
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {[
              {
                title: "Discovery",
                desc: "Workshops, research, and insight gathering to align vision.",
              },
              {
                title: "Design",
                desc: "Bold, accessible interfaces designed for real people.",
              },
              {
                title: "Delivery",
                desc: "Fast, scalable code ready for launch.",
              },
            ].map((step) => (
              <div
                key={step.title}
                className="bg-[#1a1a1a] p-6 rounded-xl border border-[#292929]"
              >
                <h4 className="font-display text-xl text-white font-bold mb-2">
                  {step.title}
                </h4>
                <p className="text-sm text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section className="bg-[#121212] py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg italic text-gray-300">
              “Sahara Digital took our product to a level we didn’t think was
              possible. Their eye for detail and technical ability are
              unmatched.”
            </p>
            <div className="mt-4 text-[#f5a623] font-semibold uppercase text-sm">
              — Client Name, CEO @ Company
            </div>
          </div>
        </section>

        {/* Call To Action */}
        <section className="py-20 px-6 text-center bg-black border-t border-[#292929]">
          <h4 className="text-2xl font-display uppercase text-white mb-4">
            Have a bold idea?
          </h4>
          <p className="text-gray-400 mb-6 text-sm">
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
