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
