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

    {/* Hero Section */}
    <Hero />

    {/* Flagship Section */}
    <main className="container mx-auto px-6 py-16">
      {/* Heading */}
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-4xl font-extrabold tracking-tight text-white">
          Our Flagship Ride
        </h2>
        <p className="mt-2 max-w-xl text-gray-300">
          Experience the perfect blend of power, precision, and prestige.
        </p>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="relative group overflow-hidden rounded-2xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          
          {/* 🌫️ Glass overlay, behind the content */}
          <div
            className="
              absolute inset-0 
              bg-white/10 backdrop-blur-sm 
              transition-opacity duration-300 
              group-hover:bg-white/20
              z-0
            "
          />

          {/* 🚗 Your CarCard sits above the overlay */}
          <div className="relative z-10">
            <CarCard
              title="2026 Toyota Supra MKV Final Edition"
              imageSrc="/supra.png"
              pricePerDay={1099}
              href="/rent"
            />
          </div>
        </div>
      </div>
    </main>
  </>
);

export default Home;
