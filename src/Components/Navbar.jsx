"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-600">🎓 CollegeBooking</div>

        <div className="hidden md:flex gap-6 text-gray-700">
          <Link href="/">Home</Link>
          <Link href="/colleges">Colleges</Link>
          <Link href="/admission">Admission</Link>
          <Link href="/my-college">My College</Link>
        </div>

        <button
          className="md:hidden px-2 py-1 border rounded"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {/* Simple Hamburger Icon with 3 bars */}
          <div className="w-6 h-0.5 bg-gray-700 mb-1"></div>
          <div className="w-6 h-0.5 bg-gray-700 mb-1"></div>
          <div className="w-6 h-0.5 bg-gray-700"></div>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-2 text-gray-700">
          <Link href="/">Home</Link>
          <Link href="/colleges">Colleges</Link>
          <Link href="/admission">Admission</Link>
          <Link href="/my-college">My College</Link>
        </div>
      )}
    </nav>
  );
}
