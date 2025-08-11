import { Post } from "@/interfaces/post";
import { PostPreviewNoHeadings } from "./post-preview-no-heading";

type Props = {
  posts: Post[];
};

export function RelatedArticles({ posts }: Props) {
  // Filter ketat dulu
  const validPosts = posts.filter(
    (post) => typeof post.slug === "string" && post.slug.trim() !== "" &&
              typeof post.category === "string" && post.category.trim() !== ""
  );

  return (
    <section className="mt-8">
      <div className="mb-8">
      <span className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight">
        Artikel terkait
      </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
        {validPosts.map((post, index) => (
          <div key={`${post.category}-${post.slug}-${index}`}>
            <PostPreviewNoHeadings
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              readingTime={post.readingTime}
              slug={post.slug}
              category={post.category}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
