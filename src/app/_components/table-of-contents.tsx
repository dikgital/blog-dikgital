"use client";

import { useEffect, useState } from "react";
import { X, List } from "lucide-react"; // pakai lucide-react untuk icon (opsional)

type Heading = {
  id: string;
  text: string;
  level: number;
};

export function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h2, h3"));

    const newHeadings = elements.map((el) => ({
      id: el.id,
      text: el.textContent || "",
      level: el.tagName === "H3" ? 3 : 2,
    }));

    setHeadings(newHeadings);
  }, []);

  if (headings.length === 0) return null;

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block sticky top-24 left-[5%] w-75 max-h-[80vh] overflow-y-auto p-4 border rounded-lg bg-white shadow text-sm">
        <span className="font-bold text-base mb-2">Daftar Isi</span>
        <ul className="space-y-1">
          {headings.map((heading) => (
            <li
              key={heading.id}
              className={heading.level === 3 ? "ml-4 text-gray-600" : ""}
            >
              <a href={`#${heading.id}`} className="hover:underline">
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {/* Mobile: Floating Button + Modal */}
      <div className="lg:hidden">
        {/* Floating TOC Button */}
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-4 z-50 bg-black text-white p-3 rounded-full shadow-lg"
          aria-label="Buka Daftar Isi"
        >
          <List className="w-5 h-5" />
        </button>

        {/* Modal ToC */}
        {open && (
          <div className="fixed inset-0 z-50 bg-white p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Daftar Isi</h2>
              <button onClick={() => setOpen(false)} aria-label="Tutup">
                <X className="w-5 h-5" />
              </button>
            </div>
            <ul className="space-y-2">
              {headings.map((heading) => (
                <li
                  key={heading.id}
                  className={heading.level === 3 ? "ml-4 text-gray-600" : ""}
                >
                  <a
                    href={`#${heading.id}`}
                    className="block hover:underline"
                    onClick={() => setOpen(false)} // close on click
                  >
                    {heading.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
