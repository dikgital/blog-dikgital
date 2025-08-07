import { CMS_NAME } from "@/lib/constants";
import Link from "next/link";

export function CategoryIntro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h4 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        <Link href="/" className="hover:underline">
        Dikgital.
        </Link>
      </h4>
    </section>
  );
}
