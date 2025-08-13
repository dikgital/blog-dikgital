"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SearchModal from "./SearchModal";

// Tambahkan type untuk searchIndex
type SearchItem = {
  title: string;
  content: string;
  url: string;
};

interface HeaderNavProps {
  searchIndex: SearchItem[];
}

const HeaderNav = ({ searchIndex }: HeaderNavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white mb-12 mt-0 px-4 py-4 w-full">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <span className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight flex items-center gap-2">
            <Link href="/" className="hover:underline flex items-center gap-2">
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

          <div className="md:hidden flex items-center gap-4">
            {/* Search button */}
            <button
                onClick={() => setIsSearchOpen(true)}
                className="text-gray-600 hover:text-black text-xl"
                aria-label="Search"
            >
              <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 60 60"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23 s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92 c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17 s-17-7.626-17-17S14.61,6,23.984,6z"/>
              </svg>
            </button>

            {/* Hamburger icon (only on mobile) */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>

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
            <button
                onClick={() => setIsSearchOpen(true)}
                className="text-gray-600 hover:text-black text-xl"
                aria-label="Search"
            >
              <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 60 60"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23 s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92 c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17 s-17-7.626-17-17S14.61,6,23.984,6z"/>
              </svg>
            </button>
          </nav>
        </div>

        {/* Mobile menu */}
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

      {/* Search Modal */}
      {isSearchOpen && (
        <SearchModal 
          searchIndex={searchIndex}
          onClose={() => setIsSearchOpen(false)} 
        />
      )}
    </>
  );
};

export default HeaderNav;