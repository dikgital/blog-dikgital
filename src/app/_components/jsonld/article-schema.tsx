type Props = {
  url: string;
  title: string;
  description: string;
  image: string;
  author: string;
  datePublished: string;
};

export default function ArticleSchema({
  url,
  title,
  description,
  image,
  author,
  datePublished,
}: Props) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url,
    },
    "headline": title,
    "description": description,
    "image": image,
    "author": {
      "@type": "Person",
      "name": author,
      "url": "/tentang",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Dikgital",
      "logo": {
        "@type": "ImageObject",
        "url": `${url.startsWith("http") ? url.split("/")[0] + "//" + url.split("/")[2] : ""}/public/assets/logo/logo-nav.svg`,
      },
    },
    "datePublished": new Date(datePublished).toISOString(),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
