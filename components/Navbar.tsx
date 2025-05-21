/* components/Navbar.tsx */
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-lg">
      <div className="flex items-center justify-between mx-auto max-w-7xl px-4 md:px-8 py-4">
        {/* Logo + Brand moved flush-left */}
        <Link href="/" className="flex items-center space-x-2 lg:pl-0 pl-2">
          <Image
            src="/logo.png"
            alt="Last Supper Rentals"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-xl font-extrabold text-dark-green">
            Last Supper Rentals
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-gray-700">
          <Link href="/" className="hover:text-neon-green transition">
            Home
          </Link>
          <Link href="/rent" className="hover:text-neon-green transition">
            Rent Supra
          </Link>
          <Link href="/about" className="hover:text-neon-green transition">
            About
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neon-green"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <XIcon className="h-6 w-6 text-gray-800" />
          ) : (
            <MenuIcon className="h-6 w-6 text-gray-800" />
          )}
        </button>
      </div>

      {/* Mobile Slide-In Panel */}
      <div
        className={`fixed inset-y-0 right-0 z-40 w-64 transform bg-white shadow-xl transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-6 py-4 flex items-center justify-between">
          <span className="text-lg font-bold text-dark-green">Menu</span>
          <button
            className="p-1 focus:outline-none"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <XIcon className="h-5 w-5 text-gray-600" />
          </button>
        </div>
        <nav className="mt-2 flex flex-col space-y-1 px-4">
          <Link
            href="/"
            className="block px-4 py-2 rounded hover:bg-gray-100 transition"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/rent"
            className="block px-4 py-2 rounded hover:bg-gray-100 transition"
            onClick={() => setOpen(false)}
          >
            Rent Supra
          </Link>
          <Link
            href="/about"
            className="block px-4 py-2 rounded hover:bg-gray-100 transition"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
        </nav>
      </div>

      {/* Overlay behind slide-in (for click-to-close) */}
      {open && <div className="fixed inset-0 bg-black/25 z-30" onClick={() => setOpen(false)} />}    
    </header>
  );
}