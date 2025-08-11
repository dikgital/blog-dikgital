import Footer from "@/app/_components/footer";
import GTM from "@/app/_components/GTM";
import { HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import cn from "classnames";
import { headers } from "next/headers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const host = headersList.get('host') || '';
  
  // Check if accessing via Vercel subdomain
  const isVercelDomain = host.includes('.vercel.app') || 
                        host.includes('blog-dikgital-dikgitals-projects') ||
                        host.includes('blog-dikgital-git-main-dikgitals-projects');
  
  return {
    title: `Dikgital: Artikel Seputar Python dan AI untuk Technical SEO`,
    description: `Insights dan tips seputar Technical SEO dan Python untuk SEO dari Diki Atmodjo.`,
    applicationName: 'Dikgital',
    keywords: ['Technical SEO', 'Python', 'AI', 'SEO', 'Diki Atmodjo'],
    authors: [{ name: 'Diki Atmodjo', url: 'https://dikgital.com' }],
    creator: 'Diki Atmodjo',
    openGraph: {
      images: [HOME_OG_IMAGE_URL],
      siteName: 'Dikgital',
      type: 'website',
    },
    // Robots directive - eksplisit
    robots: isVercelDomain 
      ? { 
          index: false, 
          follow: false, 
          noarchive: true, 
          nosnippet: true 
        }
      : { 
          index: true, 
          follow: true 
        },
  };
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
              "image": "https://dikgital.com/assets/blog/authors/diki.jpg",
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
        <meta name="theme-color" content="#1D1D1D" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body
        className={cn(inter.className, "dark:bg-slate-900 dark:text-slate-400")}
      >
        <GTM />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}