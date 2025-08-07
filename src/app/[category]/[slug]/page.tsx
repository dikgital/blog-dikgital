import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, getPostsByCategory } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/_components/container";
import HeaderNav from "@/app/_components/header-nav";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
import { Breadcrumb } from "@/app/_components/breadcrumb";
import { ShareButtons } from "@/app/_components/share-buttons";
import { TableOfContents } from "@/app/_components/table-of-contents";
import { RelatedArticles } from "@/app/_components/related-articles";
import ArticleSchema from "@/app/_components/jsonld/article-schema";
import { headers } from "next/headers";

type Props = {
  params: {
    category: string;
    slug: string;
  };
};

export default async function Post({ params }: Props) {
  const post = getPostBySlug(params.slug, params.category); // ✅ ambil post yang sedang dibuka

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  const relatedPosts = getPostsByCategory(params.category)
    .filter((p) => p.slug && p.slug !== params.slug && p.title) // tambahkan pengecekan slug dan title
    .slice(0, 3); // ✅ ambil maksimal 3 post lain dari kategori yang sama

  // Ambil domain saat ini
  const rawHeaders = headers();
  const headersObj: Record<string, string> = {};
  rawHeaders.forEach((value: string, key: string) => {
  headersObj[key.toLowerCase()] = value;
  });

  const host = headersObj["host"] || "localhost:3000";
  const protocol = headersObj["x-forwarded-proto"] || "http";
  const baseUrl = `${protocol}://${host}`;

  // Buat JSON-LD schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}/${params.category}/${params.slug}`,
    },
    "headline": post.title,
    "description": post.excerpt,
    "image": `${baseUrl}${post.coverImage}`,
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "url": `${baseUrl}/tentang`,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Dikgital",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/assets/logo/logo-nav.svg`,
      },
    },
    "datePublished": new Date(post.date).toISOString(),
  };


  return (
    <>
      {/* Inject JSON-LD langsung */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    <main>
      <Container>
        <HeaderNav />
        <Breadcrumb category={params.category} title={post.title} />
        <PostHeader
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
          readingTime={post.readingTime}
        />

        <div className="lg:grid lg:grid-cols-[250px_1fr] lg:gap-12">
          {/* Sidebar Table of Contents */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-auto pr-4">
              <TableOfContents />
            </div>
          </aside>

          {/* Konten Artikel */}
          <article className="mb-32">
            {/* Table of Contents Mobile */}
            <div className="lg:hidden">
              <TableOfContents />
            </div>

            <PostBody content={content} />

            <div className="flex justify-center">
              <ShareButtons title={post.title} />
            </div>
          </article>
        </div>

        {/* More Stories Section */}
        {relatedPosts.length > 0 && (
          <RelatedArticles posts={relatedPosts} />
        )}
      </Container>
    </main>
    </>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug, params.category);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Diki Atmodjo`;

  return {
    title,
    description: post.excerpt,
    openGraph: {
      title,
      description: post.excerpt,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts
    .filter((post) => !!post.category && !!post.slug)
    .map((post) => ({
      category: post.category,
      slug: post.slug,
    }));
}
