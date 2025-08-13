import { getAllPosts } from "@/lib/api";

export function getSearchIndex() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    title: post.title,
    content: post.content,
    url: `/${post.category}/${post.slug}`,
  }));
}
