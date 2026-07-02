"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Sacraments", href: "/contact" },
    { label: "Ministries", href: "/contact" },
    { label: "Bulletin", href: "/contact" },
    { label: "Resources", href: "/contact" },
    { label: "CST 100", href: "/contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 border-b border-gray-300"
      style={{ backgroundColor: "#e8e8e7" }}
    >
      <div className="px-6 py-3 flex items-center gap-6">
        <Link href="/" className="shrink-0">
          <Image
            src="/stTheresaLogo.png"
            alt="St Theresa Church"
            width={70}
            height={70}
          />
        </Link>

        <h3 className="flex-1 text-center text-2xl">
          Our Vision: A Christ-centred family evangelising with Love and
          Humility
        </h3>

        <div className="hidden md:flex items-center gap-4 text-base font-large shrink-0">
          <a href="/booking" className="hover:text-blue-600">
            Make a Booking
          </a>
          <a href="/profile" className="hover:text-blue-600">
            Profile
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="flex flex-col gap-1.5 w-8 h-8 items-center justify-center shrink-0"
        >
          <span
            className={`block w-6 h-0.5 bg-black transition-transform ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition-transform ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 pb-4 text-base font-medium max-h-96 overflow-y-auto">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2 hover:text-blue-600"
            >
              {link.label}
            </a>
          ))}

          <div className="md:hidden border-t border-gray-300 mt-2 pt-2 flex flex-col gap-1">
            <a
              href="/booking"
              onClick={() => setOpen(false)}
              className="py-2 hover:text-blue-600"
            >
              Make a Booking
            </a>
            <a
              href="/profile"
              onClick={() => setOpen(false)}
              className="py-2 hover:text-blue-600"
            >
              Profile / Login
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}