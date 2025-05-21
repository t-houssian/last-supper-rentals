// pages/rent.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Rent: NextPage = () => (
  <>
    <Head>
      <title>Rent the Supra | Last Supper Rentals</title>
      <meta
        name="description"
        content="Book the 2026 Toyota Supra MKV Final Edition—$1,099/day—at Last Supper Rentals"
      />
    </Head>
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">Rent the Supra</h1>
      <p className="mb-6">
        Fill out the form below to book your dream ride.
      </p>
      {/* TODO: insert booking form here */}
      <Link href="/" className="mt-6 inline-block hover:underline">
        ← Back to Home
      </Link>
    </div>
  </>
);

export default Rent;
