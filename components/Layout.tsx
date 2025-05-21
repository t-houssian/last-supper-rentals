import React, { ReactNode } from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Last Supper Rentals</title>
    </Head>

    <Navbar />

    {/* 
      Use flex-col so main grows,
      and footer sits at the bottom
    */}
    <div className="pt-20 px-4 md:px-6 min-h-screen bg-dark-green text-neon-green flex flex-col">
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  </>
);

export default Layout;
