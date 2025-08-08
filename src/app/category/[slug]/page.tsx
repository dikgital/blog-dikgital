import { notFound } from "next/navigation";
import Container from "@/app/_components/container";
import HeaderNav from "@/app/_components/header-nav";
import { HeroPost } from "@/app/_components/hero-post";
import { MoreStories } from "@/app/_components/more-stories";
import { getPostsByCategory, getAllPosts } from "@/lib/api";
import type { Metadata } from "next";
import { Breadcrumb } from "@/app/_components/breadcrumb";

// ✅ Ubah type Props - params sekarang jadi Promise
type Props = {
  params: Promise<{ slug: string }>;
};

// ✅ generateStaticParams tetap sama, gak perlu diubah
export async function generateStaticParams() {
  const posts = getAllPosts();
  const categories = Array.from(new Set(posts.map((p) => p.category)));
  return categories.map((cat) => ({ slug: cat }));
}

// ✅ Metadata dinamis per kategori - tambah await params
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; // ✅ Await params untuk dapetin slug
  const categoryName = slug.replace(/-/g, " ");

  return {
    title: `Kategori: ${categoryName}`,
    description: `Artikel dalam kategori ${categoryName}`,
    openGraph: {
      title: `Kategori: ${categoryName}`,
      description: `Artikel dalam kategori ${categoryName}`,
    },
  };
}

// ✅ Halaman utama untuk kategori - tambah async dan await params
export default async function CategoryPage({ params }: Props) {
  const { slug } = await params; // ✅ Await params untuk dapetin slug
  
  const posts = getPostsByCategory(slug);

  if (!posts || posts.length === 0) {
    notFound();
  }

  const heroPost = posts[0];
  const morePosts = posts.slice(1);

  return (
    <main>
      <Container>
        <HeaderNav />
        <Breadcrumb category={slug} />
        <h1 className="text-3xl font-bold mb-10">
          Semua artikel dengan topik {slug.replace(/-/g, " ")}
        </h1>
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          category={slug} // ✅ category-nya dikirim terpisah
          slug={heroPost.slug} // ✅ cukup slug-nya saja
          excerpt={heroPost.excerpt}
          readingTime={heroPost.readingTime}
        />
        {morePosts.length > 0 && (
          <MoreStories
            posts={morePosts.map((post) => ({
              ...post,
              category: slug, // ✅ tambahkan ini
            }))}
          />
        )}
      </Container>
    </main>
  );
}