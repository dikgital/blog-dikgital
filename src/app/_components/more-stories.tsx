import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";

type Props = {
  posts: Post[];
};

export function MoreStories({ posts }: Props) {
  // Filter ketat dulu
  const validPosts = posts.filter(
    (post) => typeof post.slug === "string" && post.slug.trim() !== "" &&
              typeof post.category === "string" && post.category.trim() !== ""
  );

  return (
    <section>
      <h2 className="mb-8 text-3xl md:text-5xl font-bold tracking-tighter leading-tight">
        Artikel lainnya
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
        {validPosts.map((post, index) => (
          <div key={`${post.category}-${post.slug}-${index}`}>
            <PostPreview
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
