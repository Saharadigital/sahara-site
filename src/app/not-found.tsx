import Footer from "@/components/footer";
import Header from "@/components/header";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col justify-center items-center bg-[#121212] text-white px-6 text-center">
        <h1 className="text-6xl font-display font-extrabold mb-4">404</h1>
        <h2 className="text-2xl font-display font-semibold mb-4">
          Page Not Found
        </h2>
        <p className="text-sm text-gray-400 font-body mb-8 max-w-md">
          Sorry, we couldn’t find the page you’re looking for. It might have
          been removed or moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#f5a623] text-black px-6 py-3 rounded-full font-body font-semibold hover:bg-[#e69a12] transition"
        >
          Go Back Home
        </Link>
      </main>
      <Footer />
    </>
  );
}
