import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { Post } from "@/interfaces/post";
import readingTime from 'reading-time';

const postsDirectory = join(process.cwd(), "_posts");

// ✅ Membaca nama-nama file di folder _posts
export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

// ✅ Membaca file post tunggal tanpa tergantung pada getAllPosts
function readPostFile(slug: string): Post | null {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);

  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const estimatedReadingTime = readingTime(content).text; // ← tambahkan ini

  return {
    ...(data as Omit<Post, "slug" | "content">),
    slug: realSlug,
    content,
    category: data.category, // ✅ pastikan kategori masuk eksplisit
    readingTime: estimatedReadingTime,
  };
}

// ✅ Mengambil semua post, urut terbaru ke lama
export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => readPostFile(slug))
    .filter((post): post is Post => !!post && !!post.date)
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

  return posts;
}

// ✅ Ambil post berdasarkan slug + optional category
export function getPostBySlug(
  slug: string,
  category?: string
): Post | undefined {
  const post = readPostFile(slug);

  if (!post) return undefined;

  if (category && post.category !== category) return undefined;

  return post;
}

// ✅ Ambil semua post berdasarkan kategori tertentu
export function getPostsByCategory(category: string): Post[] {
  return getAllPosts().filter(
    (post) => post.category?.toLowerCase() === category.toLowerCase()
  );
}
