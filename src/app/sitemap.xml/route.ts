import { getAllPosts } from "@/lib/api";

export async function GET() {
  const posts = getAllPosts();

  // Ambil kategori unik
  const categories = Array.from(
    new Set(posts.map((post) => post.category).filter(Boolean))
  );

  // Buat URL untuk semua post
  const postUrls = posts.map((post) => {
    const path = `/${post.category}/${post.slug}`;
    const lastmod = new Date(post.date).toISOString().split("T")[0];

    return `
      <url>
        <loc>https://dikgital.com${path}</loc>
        <lastmod>${lastmod}</lastmod>
      </url>
    `;
  });

  // Buat URL untuk semua kategori, dengan lastmod = tanggal terbaru dari post dalam kategori
  const categoryUrls = categories.map((category) => {
    const postsInCategory = posts.filter((post) => post.category === category);

    // Urutkan descending, ambil tanggal terbaru
    const latestPost = postsInCategory.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )[0];

    const lastmod = new Date(latestPost.date).toISOString().split("T")[0];
    const path = `/category/${category}`;

    return `
      <url>
        <loc>https://dikgital.com${path}</loc>
        <lastmod>${lastmod}</lastmod>
      </url>
    `;
  });

  const homepageLastmod = new Date().toISOString().split("T")[0];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://dikgital.com/</loc>
      <lastmod>${homepageLastmod}</lastmod>
    </url>
    ${postUrls.join("")}
    ${categoryUrls.join("")}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
