// src/app/components/Navbar.jsx
'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow fixed w-full z-20">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* ...logo & links... */}

        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          {open ? '✕' /* × close */ : '☰' /* hamburger */}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-white shadow-lg">
          {/* mobile links… */}
        </nav>
      )}
    </header>
  );
}
