"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const HeaderNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white mb-12 mt-0 px-4 py-4 w-full">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <span className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight flex items-center gap-2">
          <Link href="/" className="hover:underline flex items-center gap-2">
            {/* Logo responsive */}
              <div className="relative w-[45px] h-[45px] md:w-[64px] md:h-[64px]">
                <Image
                src="/assets/logo/logo-nav.svg"
                alt="Logo"
                fill
                sizes="(min-width: 768px) 64px, 45px"
                className="object-contain"
                />
              </div>
              <span className="hidden md:inline">dikgital.</span>
          </Link>
        </span>

        {/* Hamburger icon (only on mobile) */}
        <button
        className="md:hidden text-2xl"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
        >
        {isOpen ? "✕" : "☰"}
        </button>


        {/* Nav links (desktop only) */}
        <nav className="hidden md:flex gap-6 text-sm md:text-base">
          <Link href="/category/technical-seo" className="hover:underline">
            Technical SEO
          </Link>
          <Link href="/category/python-seo" className="hover:underline">
            Python SEO
          </Link>
          <Link href="/category/istilah-seo" className="hover:underline">
            Istilah
          </Link>
          <Link href="/tentang" className="hover:underline">
            Tentang
          </Link>
        </nav>
      </div>

      {/* Mobile menu (visible only if isOpen) */}
      {isOpen && (
        <nav className="mt-4 flex flex-col gap-2 text-sm md:hidden">
          <Link href="/category/technical-seo" className="hover:underline">
            Technical SEO
          </Link>
          <Link href="/category/python-seo" className="hover:underline">
            Python SEO
          </Link>
          <Link href="/category/istilah-seo" className="hover:underline">
            Istilah
          </Link>
          <Link href="/tentang" className="hover:underline">
            Tentang
          </Link>
        </nav>
      )}
    </header>
  );
};

export default HeaderNav;
