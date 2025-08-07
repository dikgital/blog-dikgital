import Container from "@/app/_components/container";
import HeaderNav from "@/app/_components/header-nav";
import Footer from "@/app/_components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Diki Atmodjo",
  description: "Cari tahu tentang siapa Diki Atmodjo dan apa spesialisasinya di bidang SEO",
};

export default function TentangPage() {
  return (
    <main>
      <Container>
        <HeaderNav />
        <section className="prose lg:prose-lg mx-auto my-12">
          <h1 className="text-3xl md:text-3xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">Siapa Diki Atmodjo?</h1>
          <p className="mb-12 text-2xl">
            Halo! Saya Diki Atmodjo!
          </p>

          <p className="mb-12">
            Saya adalah seorang digital enthusiast yang suka membagikan
            pengalaman, pemikiran, dan eksperimen saya dalam dunia teknologi,
            SEO, dan pengembangan web.
          </p>

          <p className="mb-12">
            Blog ini saya buat sebagai tempat dokumentasi pribadi sekaligus
            semoga bisa menjadi referensi bermanfaat bagi teman-teman yang
            berkutat di dunia digital.
          </p>

          <p className="mb-12">
            Saat ini saya sedang aktif mengembangkan berbagai proyek digital
            dan terus belajar hal-hal baru, terutama yang berkaitan dengan
            web-performance, SEO teknikal, dan AI tools.
          </p>

          <p className="mb-12">
            Jika kamu ingin berdiskusi, berkolaborasi, atau sekadar menyapa,
            jangan ragu untuk menghubungi saya melalui kontak yang tersedia di
            footer. Terima kasih sudah berkunjung!
          </p>
        </section>
      </Container>
    </main>
  );
}
