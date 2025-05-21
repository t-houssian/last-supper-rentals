import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Rent: NextPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Rent the Supra | Last Supper Rentals</title>
        <meta
          name="description"
          content="Book the 2026 Toyota Supra MKV Final Edition—$1,099/day—at Last Supper Rentals"
        />
      </Head>

      <div className="min-h-screen flex items-center justify-center bg-primary p-6">
        <div className="w-full max-w-lg bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
          <h1 className="text-3xl font-bold text-primary mb-6 text-center">
            Rent the Supra
          </h1>

          {submitted ? (
            <div className="text-center space-y-4">
              <p className="text-lg text-gray-700 dark:text-gray-200">
                🎉 Thanks! We’ll be in touch soon with your booking details.
              </p>
              <Link
                href="/"
                className="text-accent hover:underline"
              >
                ← Back to Home
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Full Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition"
                />
              </div>

              <input
                type="tel"
                name="phone"
                required
                placeholder="Phone Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-gray-700 dark:text-gray-300">Start Date</span>
                  <input
                    type="date"
                    name="start"
                    required
                    className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition"
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700 dark:text-gray-300">End Date</span>
                  <input
                    type="date"
                    name="end"
                    required
                    className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition"
                  />
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-light transition"
              >
                Book Now
              </button>
            </form>
          )}

          {!submitted && (
            <p className="mt-6 text-center text-sm text-gray-500">
              Need help?{' '}
              <Link
                href="/"
                className="hover:underline text-accent"
              >
                Contact us
              </Link>
              .
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Rent;
