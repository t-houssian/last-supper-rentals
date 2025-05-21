import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-dark-green/75"></div>
      <div className="relative z-10 max-w-3xl mx-auto text-center text-neon-green flex flex-col items-center justify-center h-full px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          Drive Your Dream Today
        </h1>
        <p className="text-lg mb-8">
          Rent jaw-dropping sports cars and live like a legend for the day.
        </p>
        <div className="flex space-x-4">
          <Link href="/rent" className="px-6 py-3 bg-neon-green text-dark-green font-semibold rounded-lg hover:bg-white transition">
            Rent Now
          </Link>
          <Link href="/about" className="px-6 py-3 border border-neon-green text-neon-green rounded-lg hover:bg-neon-green hover:text-dark-green transition">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
