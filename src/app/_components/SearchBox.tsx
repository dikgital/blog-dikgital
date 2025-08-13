"use client";

import { useMemo, useState } from "react";
import Fuse from "fuse.js";

type SearchItem = {
  title: string;
  content: string;
  url: string;
};

type SearchBoxProps = {
  index: SearchItem[];
};

// Tipe hasil minimal (cukup yang kamu pakai di UI)
type Hit = { item: SearchItem; score?: number };

export default function SearchBox({ index }: SearchBoxProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Hit[]>([]);

  // Memoize supaya Fuse nggak dibuat ulang setiap render
  const fuse = useMemo(
    () =>
      new Fuse<SearchItem>(index, {
        keys: ["title", "content"],
        threshold: 0.3,
        ignoreLocation: true,
        includeScore: true,
      }),
    [index]
  );

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setQuery(value);

    if (!value.trim()) {
      setResults([]);
      return;
    }

    const hits: Hit[] = fuse.search(value).map(r => ({
      item: r.item,
      score: r.score,
    }));
    setResults(hits);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Cari artikel..."
        className="w-full p-2 border rounded"
        value={query}
        onChange={handleSearch}
      />

      {query && (
        <ul className="mt-4">
          {results.map(({ item }) => (
            <li key={item.url}>
              <a href={item.url} className="text-blue-600 hover:underline">
                {item.title}
              </a>
            </li>
          ))}
          {results.length === 0 && <p>Tidak ada hasil</p>}
        </ul>
      )}
    </div>
  );
}
