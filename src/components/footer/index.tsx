import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-white border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10 text-sm">
        {/* Logo */}
        <div className="col-span-2">
          <div className="text-2xl font-display font-extrabold uppercase leading-tight tracking-tight">
            <Link href="/">
              <div>
                <span className="block">SAHARA</span>
                <div className="flex items-center gap-1 mt-1">
                  <span className="w-4 h-4 rounded-full bg-[#f5a623] animate-pulse shadow-inner shadow-yellow-200/30" />
                  <span>DIGITAL</span>
                </div>
              </div>
            </Link>
          </div>
          <p className="text-gray-400 mt-4 max-w-xs leading-relaxed font-body">
            A focused studio building immersive digital experiences with clarity
            and boldness.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-white font-bold mb-4 font-display uppercase text-sm tracking-widest">
            Navigation
          </h4>
          <ul className="space-y-2 text-gray-400 font-body">
            {["Showcase", "Studio", "Approach", "Connect"].map((label) => (
              <li key={label}>
                <Link
                  href={`/${label.toLowerCase()}`}
                  className="hover:text-[#f5a623] transition"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold mb-4 font-display uppercase text-sm tracking-widest">
            Contact
          </h4>
          <ul className="space-y-2 text-gray-400 font-body">
            <li>
              <a
                href="mailto:hello@saharadigital.co.uk"
                className="hover:text-[#f5a623]"
              >
                hello@saharadigital.co.uk
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/nathan-scott"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#f5a623]"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <span>Based in the UK</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 py-6 border-t border-[#1a1a1a] font-body">
        © {new Date().getFullYear()} Sahara Digital. All rights reserved.
      </div>
    </footer>
  );
}
