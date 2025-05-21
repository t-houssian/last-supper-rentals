import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero";
import CarCard from "../components/CarCard";

const Home: NextPage = () => (
  <>
    <Head>
      <title>Last Supper Rentals</title>
      <meta
        name="description"
        content="Rent your dream supercar—2026 Toyota Supra MKV Final Edition—for $1099/day."
      />
    </Head>

    <Hero />

    <main className="max-w-7xl mx-auto px-6 py-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {/* Section Heading */}
      <div className="sm:col-span-2 lg:col-span-3 text-center space-y-4">
        <h1 className="text-5xl font-bold text-neon-green">
          Welcome to Last Supper Rentals
        </h1>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
          Unleash adrenaline and elegance in every turn—choose from our curated
          fleet of supercars and redefine your drive.
        </p>
      </div>

      {/* Example Car Cards */}
      <CarCard
        title="2026 Toyota Supra MKV Final Edition"
        imageSrc="/supra.png"
        pricePerDay={1099}
        href="/rent"
      />
      {/* …add more <CarCard /> items here… */}
    </main>
  </>
);

export default Home;
