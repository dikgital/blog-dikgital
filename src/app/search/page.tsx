import { getSearchIndex } from "@/lib/searchIndex";
import SearchBox from "@/app/_components/SearchBox";

export default function SearchPage() {
  const index = getSearchIndex();
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <span className="text-2xl font-bold mb-6">Kamu ingin cari apa?</span>
      <SearchBox index={index} />
    </main>
  );
}
