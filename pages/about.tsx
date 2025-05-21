import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const About: NextPage = () => (
  <>
    <Head>
      <title>About | Last Supper Rentals</title>
      <meta name="description" content="Learn more about Last Supper Rentals." />
    </Head>

    {/* Hero-style Banner */}
    <section
      className="relative bg-cover bg-center h-64"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-dark-green/80" />
      <h2 className="relative z-10 text-center text-4xl md:text-5xl font-extrabold text-neon-green pt-20">
        About Us
      </h2>
    </section>

    {/* Content Grid */}
    <main className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 py-16 items-center">
      {/* Text Block */}
      <div className="space-y-6">
        <p className="leading-relaxed text-lg text-neon-green">
          Welcome to Last Supper Rentals—where speed meets swagger! We’re not your
          average car rental company. We’re the key to your dream ride, whether
          you’re cruising the coast, rolling up to an event, or just want to feel
          like a legend for the day.
        </p>
        <p className="leading-relaxed text-lg text-neon-green">
          Our garage is packed with jaw-dropping sports cars—think roaring
          Supras, exotic Lotuses, and more horsepower than your heart can handle.
          We make it effortless to turn your “what if” into “hell yes” with
          simple booking, flexible rentals, and a team that’s as excited about
          cars as you are.
        </p>
        <p className="leading-relaxed text-lg text-neon-green">
          So go ahead, treat yourself. Life’s too short to drive boring.
        </p>
      </div>

      {/* Image Block */}
      <div className="flex justify-center">
        <Image
          src="/supra.png"
          alt="Luxury supercar"
          width={600}
          height={400}
          className="rounded-lg shadow-2xl"
        />
      </div>
    </main>
  </>
);

export default About;
