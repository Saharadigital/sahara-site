import "./globals.css";
import { Cinzel, Barlow } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cinzel",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-barlow",
});

export const metadata = {
  title: "Sahara Digital",
  description: "Elegant web presence",
  icons: {
    icon: "/favicon.svg", // or .png if you prefer
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cinzel.variable} ${barlow.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
