import Container from "@/app/_components/container";
import type { Metadata } from "next";
import { HeroPost } from "@/app/_components/hero-post";
import HeaderNav from "@/app/_components/header-nav";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";

export const metadata: Metadata = {
  title: "Dikgital: Artikel Seputar Python dan AI untuk Technical SEO",
  description: "Insights dan tips seputar Python SEO dan Technical SEO dari Diki Atmodjo.",
};

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
        <HeaderNav />
        <section className="mb-8 md:mb-16 md:w-[50%]">
          <h1 className="mb-8 text-3xl md:text-5xl font-bold tracking-tighter leading-tight">Kumpulan artikel tentang Technical SEO dan Python SEO</h1>
          <p>Insights dan tips seputar Technical SEO dan juga apa yang bisa kita lakukan dengan Python untuk SEO tasks kita.</p>
        </section>
        <hr className="mb-8 md:mb-16 h-[2px] bg-gray-700"/>
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          readingTime={heroPost.readingTime}
          author={heroPost.author}
          category={heroPost.category} // 👈 ini wajib ditambahkan
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}
