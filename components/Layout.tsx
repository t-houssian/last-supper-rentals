// components/Layout.tsx
import React, { ReactNode } from 'react';
import Head from 'next/head';
import Navbar from "./Navbar";

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
    <div className="min-h-screen bg-dark-green text-neon-green">
      {children}
    </div>
  </>
);

export default Layout;
