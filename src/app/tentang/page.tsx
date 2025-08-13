import Container from "@/app/_components/container";
import HeaderNav from "@/app/_components/header-nav";
import Footer from "@/app/_components/footer";
import type { Metadata } from "next";
import { getSearchIndex } from "@/lib/searchIndex";

export const metadata: Metadata = {
  title: "Tentang Diki Atmodjo",
  description: "Tentang siapa Diki Atmodjo, seorang web & SEO consultant based in Bali. Cari tahu apa spesialisasinya di bidang Web dan SEO.",
};

export default function TentangPage() {
  const searchIndex = getSearchIndex();
  return (
    <main>
      <Container>
        <HeaderNav searchIndex={searchIndex} />
        <section className="prose lg:prose-lg mx-auto my-12 w-full lg:w-[75%]">
          <h1 className="text-3xl lg:text-5xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-left">Tentang Diki Atmodjo</h1>
          <img className="mb-12 w-[200px] h-auto rounded-full" src="/assets/blog/authors/diki.jpg"/>
          <p className="mb-10 text-lg">Halo, saya <strong>Diki Atmodjo</strong>.</p>
          <p className="mb-10 text-lg">Perjalanan saya di dunia digital dimulai dari <strong>desain grafis</strong>. Bertahun-tahun saya menghabiskan waktu untuk&nbsp;mengatur penggunaan warna, tipografi, dan layout agar setiap karya punya cerita visual yang pas.</p>
          <p className="mb-10 text-lg">Tapi seiring waktu, saya menyadari satu hal penting: <strong>desain yang indah saja belum cukup</strong>.</p>
          <p className="mb-10 text-lg">Sama seperti rumah&nbsp;indah tapi tersembunyi di hutan. Nggak akan ada yang akan datang kalau mereka nggak tahu alamatnya.</p>
          <p className="mb-10 text-lg">Dari situlah saya mulai mendalami <strong>Website dan</strong>&nbsp;<strong>SEO</strong>.</p>
          <p className="mb-10 text-lg">Sekarang, saya bekerja sebagai <strong>Web &amp; SEO Consultant</strong>, menggabungkan kepekaan desain untuk <strong>UI/UX</strong> dengan strategi SEO yang solid. Fokus saya meliputi <strong>Topic Authority SEO strategy</strong>, <strong><a className="hover:underline" href="/category/technical-seo">Technical SEO</a></strong>, serta optimasi struktur web yang rapi, cepat, dan mudah diakses.</p>
          <p className="mb-10 text-lg">Saya juga senang mengulik sisi teknis: <strong>HTML, CSS, Tailwind</strong>, dan berbagai CMS seperti <strong>WordPress</strong> &amp; <strong>Webflow</strong>. Belakangan, saya rajin memanfaatkan <strong>Python</strong>, terutama untuk mengintegrasikannya dengan API <strong>Google</strong> dan <strong>OpenAI</strong>, sehingga&nbsp;daily task SEO bisa otomatis, efisien, dan <em>scalable</em>.</p>
          <p className="mb-10 text-lg">Dari sisi website modern, saya juga sedang mempelajari penggunaan <strong>Next.JS</strong>.</p>
          <p className="mb-10 text-lg">Selain bekerja di lapangan, saya juga dipercaya menjadi <strong>lecturer SEO</strong> di beberapa platform edutech, membagikan pengalaman dan wawasan kepada para profesional dan pebisnis yang ingin mengembangkan kehadiran digitalnya.</p>
          <p className="mb-10 text-lg">Selama ini, saya sudah menangani berbagai niche, mulai dari <strong>property &amp; tourism</strong>, <strong>B2B SaaS</strong>, hingga <strong>International SEO</strong>. Bagi saya, setiap website adalah rumah digital yang perlu dibangun kokoh, didesain indah, dan mudah ditemukan oleh &ldquo;tamu&rdquo; yang tepat.</p>
          <p className="mb-10 text-lg">Kalau kamu punya visi untuk membangun rumah digital seperti itu, saya akan senang sekali membantu mewujudkannya.</p>
          <p className="mb-10 text-lg">Connect denganku di <a className="hover:underline" href="https://www.linkedin.com/in/dikiatmodjo" target="_blank" rel="noopener noreferrer"><strong>LinkedIn</strong></a>!</p>
        </section>
      </Container>
    </main>
  );
}
