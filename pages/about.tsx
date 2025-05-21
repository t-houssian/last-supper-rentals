import { NextPage } from "next";
import Head from "next/head";

const About: NextPage = () => (
  <>
    <Head>
      <title>About | Last Supper Rentals</title>
      <meta name="description" content="Learn more about Last Supper Rentals." />
    </Head>
    <main className="mt-24 mb-12 max-w-3xl mx-auto px-6 text-gray-800">
      <h2 className="text-4xl font-bold text-center text-dark-green mb-6">
        About Us
      </h2>
      <p className="mb-4">
        Welcome to Last Supper Rentals—where speed meets swagger! We’re not your average car rental company. We’re the key to your dream ride, whether you’re cruising the coast, rolling up to an event, or just want to feel like a legend for the day.
      </p>
      <p className="mb-4">
        Our garage is packed with jaw-dropping sports cars—think roaring Supras, exotic Lotuses, and more horsepower than your heart can handle. We make it easy to turn your “what if” into “hell yes” with simple booking, flexible rentals, and a team that’s as excited about cars as you are.
      </p>
      <p>
        So go ahead, treat yourself. Life’s too short to drive boring.
      </p>
    </main>
  </>
);

export default About;
