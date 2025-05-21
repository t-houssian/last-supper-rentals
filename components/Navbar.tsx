import { useState } from "react";
import Link from "next/link";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-extrabold text-dark-green">
          Last Supper Rentals
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-neon-green">Home</Link>
          <Link href="/rent" className="hover:text-neon-green">Rent Supra</Link>
          <Link href="/about" className="hover:text-neon-green">About</Link>
        </nav>
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <XIcon className="w-6 h-6 text-gray-800" /> : <MenuIcon className="w-6 h-6 text-gray-800" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t">
          <Link href="/" className="block px-6 py-3 hover:bg-gray-100">Home</Link>
          <Link href="/rent" className="block px-6 py-3 hover:bg-gray-100">Rent Supra</Link>
          <Link href="/about" className="block px-6 py-3 hover:bg-gray-100">About</Link>
        </div>
      )}
    </header>
);
}
