import Footer from "@/app/_components/footer";
import { HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import cn from "classnames";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Dikgital: Artikel Seputar Python dan AI untuk Technical SEO`,
  description: `Insights dan tips seputar Python SEO dan Technical SEO dari Diki Atmodjo.`,
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
  robots: {
  index: process.env.VERCEL_URL?.includes('.vercel.app') ? false : true,
  follow: true,
  googleBot: {
  index: process.env.VERCEL_URL?.includes('.vercel.app') ? false : true,
  follow: true,
      }
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Person",
              "name": "Diki Atmodjo",
              "url": "https://dikgital.com",
              "image": "https://dikgital.com/public/assets/blog/authors/diki.jpg",
              "sameAs": "https://www.linkedin.com/in/dikiatmodjo/",
              "jobTitle": "SEO Consultant"
            }),
          }}
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#1D1D1D"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#1D1D1D" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body
        className={cn(inter.className, "dark:bg-slate-900 dark:text-slate-400")}
      >
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
