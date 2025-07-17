import Navigation from "../navigation";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-6 bg-[#1f1f1f] text-white px-0">
      <div className="flex items-center justify-between w-full">
        <Link
          href="/"
          className="leading-tight text-2xl md:text-2xl font-extrabold uppercase font-display tracking-tight pl-2"
        >
          <div>
            SAHARA
            <div className="flex items-center gap-1">
              <span className="relative w-6 h-6 rounded-full bg-[#f5a623] inline-block animate-pulse shadow-inner shadow-yellow-200/30" />
              <span>DIGITAL</span>
            </div>
          </div>
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
