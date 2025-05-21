import { NextPage } from "next";
import Head from "next/head";

const About: NextPage = () => (
  <>
    <Head>
      <title>About | Last Supper Rentals</title>
      <meta name="description" content="Learn more about Last Supper Rentals." />
    </Head>
    <main className="pb-16">
      <section className="pt-24">
        <div className="max-w-3xl mx-auto bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-lg space-y-6">
          <h2 className="text-4xl font-bold text-neon-green text-center">
            About Us
          </h2>
          <p className="leading-relaxed text-neon-green">
            Welcome to Last Supper Rentals—where speed meets swagger! We’re not your average car rental company. We’re the key to your dream ride, whether you’re cruising the coast, rolling up to an event, or just want to feel like a legend for the day.
          </p>
          <p className="leading-relaxed text-neon-green">
            Our garage is packed with jaw-dropping sports cars—think roaring Supras, exotic Lotuses, and more horsepower than your heart can handle. We make it easy to turn your “what if” into “hell yes” with simple booking, flexible rentals, and a team that’s as excited about cars as you are.
          </p>
          <p className="leading-relaxed text-neon-green">
            So go ahead, treat yourself. Life’s too short to drive boring.
          </p>
        </div>
      </section>
    </main>
  </>
);

export default About;