import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  category: string;
  slug: string;
  readingTime?: string;
};

export function PostPreviewNoHeadings({
  title,
  coverImage,
  date,
  category,
  slug,
  readingTime,
}: Props) {
  return (
    <div>
      <div className="mb-3">
        <CoverImage slug={slug} title={title} category={category} src={coverImage} />
      </div>
      <span className="text-xl mb-5 leading-snug">
        <Link href={`/${category}/${slug}`} className="hover:underline">
          {title}
        </Link>
      </span>
      <div className="text-sm mb-4 mt-3">
        <DateFormatter dateString={date} />
        {readingTime && ` · ${readingTime}`}
      </div>
    </div>
  );
}
