"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { label: "Showcase", href: "/showcase" },
    { label: "Studio", href: "/studio" },
    { label: "Services", href: "/services" },
    { label: "Approach", href: "/approach" },
    { label: "Connect", href: "/connect" },
  ];

  return (
    <nav className="hidden md:flex bg-[#1f1f1f] border border-white rounded-2xl px-6 py-2 gap-6 items-center shadow-inner mr-4">
      {links.map(({ label, href }) => {
        const isActive = pathname === href;

        return (
          <Link
            key={label}
            href={href}
            className={`relative text-sm font-semibold px-2 py-1 transition-colors duration-200 ${
              isActive ? "text-[#f5a623]" : "text-white hover:text-[#f5a623]"
            }`}
          >
            {label}
            <span
              className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full ${
                isActive ? "bg-[#f5a623]" : "bg-[#f5a623] opacity-40"
              }`}
            />
          </Link>
        );
      })}
    </nav>
  );
}
