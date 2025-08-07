import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";
import { type Author } from "@/interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
  readingTime?: string;
};

export function PostHeader({ title, coverImage, date, author, readingTime }: Props) {
  return (
    <section className="pb-0 md:pb-20">
      {/* Judul */}
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-4">
        {title}
      </h1>

      {/* Author + Date */}
      <div className="flex flex-row md:items-center text-sm text-gray-600 mb-6 gap-2 md:gap-4">
        <div className="flex items-center gap-2">
          <img
            src={author.picture}
            className="w-8 h-8 rounded-full"
            alt={author.name}
          />
          <span>{author.name}</span>
        </div>
        <span className="inline">•</span>
        <DateFormatter dateString={date} />
        <span className="inline">•</span>
        <div>{readingTime && ` · ${readingTime}`}</div>
      </div>

      {/* Cover Image */}
      <CoverImage title={title} src={coverImage} category={""} slug={""} />
    </section>
  );
}
