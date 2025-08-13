"use client";

import { useEffect } from "react";
import SearchBox from "./SearchBox";

type SearchItem = {
  title: string;
  content: string;
  url: string;
};

interface SearchModalProps {
  searchIndex: SearchItem[];
  onClose: () => void;
}

export default function SearchModal({ searchIndex, onClose }: SearchModalProps) {
  // Tutup modal kalau user tekan ESC
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl mx-4 p-6 relative">
        {/* Tombol Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-4">Cari Artikel</h2>
        <SearchBox index={searchIndex} />
      </div>
    </div>
  );
}