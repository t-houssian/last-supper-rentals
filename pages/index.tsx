// pages/index.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import Hero from '../components/Hero';
import CarCard from '../components/CarCard';

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
      <h1 className="text-5xl font-bold mb-6 text-center">
        Welcome to Last Supper Rentals
      </h1>
      <p className="text-xl mb-10 max-w-2xl text-center">
        Speed meets swagger! Turn your “what if” into “hell yes” with our
        jaw-dropping sports cars.
      </p>
      <CarCard
        title="2026 Toyota Supra MKV Final Edition"
        imageSrc="/supra.png"
        pricePerDay={1099}
        href="/rent"
      />
    </main>
  </>
);

export default Home;
