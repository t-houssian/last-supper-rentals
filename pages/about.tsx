// pages/about.tsx
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const About: NextPage = () => (
  <>
    <Head>
      <title>About | Last Supper Rentals</title>
      <meta name="description" content="Learn more about Last Supper Rentals." />
    </Head>

    {/* Hero‐Style Banner */}
    <section
      className="relative bg-cover bg-center h-64"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-dark-green/80" />
      <div className="relative z-10 flex items-center justify-center h-full">
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-neon-green">
          About Us
        </h2>
      </div>
    </section>

    {/* Content Grid */}
    <main className="container mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Text Block */}
      <div className="space-y-8">
        <h3 className="text-3xl font-extrabold tracking-tight text-white">
          Who We Are
        </h3>
        <p className="text-lg leading-relaxed text-gray-200">
          Welcome to Last Supper Rentals—where speed meets swagger! We’re not
          your average car rental company. We’re the key to your dream ride,
          whether you’re cruising the coast, rolling up to an event, or simply
          making every drive legendary.
        </p>
        <p className="text-lg leading-relaxed text-gray-200">
          Our garage is stocked with jaw-dropping sports cars—roaring Supras,
          sleek Lotuses, and more horsepower than your heart can handle. We
          make it effortless to turn your “what if” into “hell yes” with
          simple booking, flexible rentals, and a team that shares your
          passion for performance.
        </p>
        <p className="text-lg leading-relaxed text-gray-200">
          So go ahead—treat yourself. Life’s too short to drive boring.
        </p>
        <a
          href="/rent"
          className="inline-block mt-4 bg-accent hover:bg-accent-light text-primary font-bold py-3 px-6 rounded-full transition-transform transform hover:-translate-y-1"
        >
          Book Your Ride
        </a>
      </div>

      {/* Image Block */}
      <div className="flex justify-center">
        <Image
          src="/supra.png"
          alt="Luxury supercar"
          width={600}
          height={400}
          className="rounded-2xl shadow-2xl"
        />
      </div>
    </main>
  </>
);

export default About;
