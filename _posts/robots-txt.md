---
title: "Memahami Fungsi robots.txt dan Cara Menyesuaikannya"
excerpt: "Panduan lengkap robots.txt: cara kerja, contoh wildcard, konfigurasi, daftar user-agent, serta cara menghindari kesalahan SEO teknis."
coverImage: "/assets/blog/robots-txt/robots-txt.webp"
date: "2025-08-06"
author:
  name: Diki Atmodjo
  picture: "/assets/blog/authors/diki.jpg"
ogImage:
  url: "/assets/blog/robots-txt/robots-txt.webp"
category: technical-seo
---

Kamu pasti sudah sering mengetahui tentang `robots.txt` saat dulu pertama kali belajar tentang SEO. Tapi apakah kamu tahu bagaimana cara kita mengoptimalkannya secara detail untuk mendukung strategi SEO kita?

Disini aku coba untuk sharing dari pengalamanku, apa yang biasa aku lakukan dengan `robots.txt` website yang aku handle. Semoga membantu!

## Apa itu file robots.txt dan untuk apa digunakan dalam SEO?

`robots.txt` adalah file teks sederhana yang ditempatkan di root direktori situs web (URL standard-nya: `https://example.com/robots.txt`) yang berfungsi sebagai “guidebook” bagi [bot crawler](/technical-seo/web-crawler) yang berisi instruksi, bagian mana dari situs yang boleh atau tidak boleh mereka akses.

Cara membuatnya juga sangat simpel, kamu bisa create `robots.txt` ini cukup dengan menggunakan program Notepad.

### Lalu Bagaimana robots.txt Bisa Mempengaruhi Proses Indexing sebuah Website?

Jika digunakan dengan tepat, `robots.txt` akan memfokuskan search engine untuk melakukan pengindeksan hanya pada halaman yang penting. 

Sebaliknya, kesalahan konfigurasi bisa menyebabkan halaman penting *(money pages)* justru tidak terindeks, sehingga merugikan visibilitas situs di hasil pencarian.

Nah si section berikut kita akan bahas tentang kesalahan-kesalahan instruksi pada `robots.txt`.

### Apa saja kesalahan umum yang sering terjadi ketika membuat file robots.txt?

#### Pemblokiran Semua Halaman

~~~
User Agent: *
Disallow: /
~~~

Instruksi seperti ini akan memblokir seluruh halaman dari proses crawling semua bot, termasuk Google.

#### Pemblokiran Folder atau File Penting

Memblokir folder penting seperti `wp-content` atau `wp-includes` pada situs WordPress yang justru berisi file penting untuk di-index.

Memblokir file `.js` yang diperlukan untuk proses rendering juga terkadang bisa terjadi. Khusus untuk kasus file `.js` ini, mungkin bisa lebih dipertimbangkan menggunakan [robots meta tag](/technical-seo/robots-meta-tag).

#### Penggunaan Wildcard (`*`) yang Kurang Tepat

Wildcard (`*`) dalam robots.txt digunakan sebagai karakter pengganti (wildcard) yang bisa mewakili satu atau lebih karakter dalam path URL. Biasanya digunakan untuk memblokir pola URL tertentu secara lebih fleksibel.

Selain `*`, simbol `$` juga biasa digunakan untuk menandai akhir URL.

**Contoh dasar:**

~~~
User-agent: *
Disallow: /search*
~~~

Artinya: semua URL yang diawali `/search` akan diblokir, seperti:

* `/search`

* `/search?q=produk`

* `/search-result`

**Contoh Penggunaan Wildcard (`*`) yang Kurang Tepat:**

#### 1. Terlalu luas dan tidak spesifik

`Disallow: /*.php`

Ini akan memblokir **semua halaman PHP**, termasuk yang penting seperti `/produk.php` atau `/checkout.php`, bahkan jika beberapa halaman tersebut ingin diindeks.

#### 2. Blokir semua halaman dengan parameter (tanpa pertimbangan)

`Disallow: /*?`

Ini akan memblokir **semua URL yang mengandung query string**, seperti:

* `/produk?id=123`

* `/artikel?lang=id`

Halaman dengan parameter seperti ini harus selalu didiskusikan dengan tim devs atau engineers, karena bisa saja halaman ini memang dimaksudkan untuk di index.

#### 3. Wildcard di awal path

`Disallow: *folder/`

Ini bukan sintaks yang valid di `robots.txt` wildcard hanya berfungsi di **tengah atau akhir path**, bukan sebagai pembuka.

#### 4. Salah pemahaman dengan trailing slash

`Disallow: /blog*/page/`

Ini akan tidak sesuai harapan jika tujuanmu hanya memblokir /blog/page/ saja, tapi bisa secara tidak sengaja memblokir `/blog-detail/page/`, `/blog/category/page/`, dan juga halaman lainnya yang mungkin ingin kamu index-kan.

## Langkah-langkah Melakukan Audit Robots.txt

### Bagaimana cara memulai audit pada file robots.txt?

1. Akses file `robots.txt` kamu melalui `www.example.com/robots.txt`.

2. Salin isinya dan akses [robots.txt checker online](https://technicalseo.com/tools/robots-txt/) untuk menganalisis struktur serta instruksi direktif yang digunakan.

3. Lihat file [sitemap](/technical-seo/xml-sitemap) kamu, dan cek apakah ada halaman-halaman penting yang ikut terblokir.

### Apa saja poin penting yang harus diperiksa dalam audit robots.txt?

* Apakah halaman penting secara SEO tidak diblokir?

* Apakah halaman sensitif (login, admin, cart, dll) sudah diblokir dari crawler publik?

* Apakah file JavaScript dan CSS yang dibutuhkan untuk rendering tidak diblokir?

* Tidak mutlak, tapi apakah ada alamat `Sitemap:` yang disertakan?

### Bagaimana cara menggunakan Google Search Console untuk membantu audit robots.txt?

Gunakan fitur **robots.txt Tester** di Google Search Console:

* Uji berbagai URL dari subdirectories yang berbeda untuk melihat apakah diblokir oleh file `robots.txt`.  

* Periksa error parsing atau direktif yang tidak dikenali.  

* Pastikan perubahan yang dilakukan bisa dibaca oleh Googlebot.

## Cara Menyesuaikan Robots.txt untuk Meningkatkan SEO

### Bagaimana cara mengedit file robots.txt agar lebih SEO-friendly?

* Prioritaskan halaman yang ingin diindeks dan pastikan tidak terblokir.

* Blokir halaman yang tidak memberikan nilai SEO, seperti halaman filter, halaman search result, login, atau halaman pencarian internal.

* Selalu cek URL list yang ada di sitemap untuk memudahkan proses crawling.

**Contoh:**

~~~
User-agent: * 
Disallow: /cart/ 
Disallow: /search/ 
Allow: /wp-content/uploads/ 

Sitemap: https://www.example.com/sitemap.xml
~~~


## Daftar Bots User Agents yang biasa meng-crawl Sebuah Website

Berikut adalah daftar bots dan nama user-agent nya yang bisa kamu lihat di dalam log file websitemu.

### Daftar User-Agent Crawlers Umum

<table><thead><tr><td><p><strong>User-Agent</strong></p></td><td><p><strong>Pemilik</strong></p></td><td><p><strong>Fungsi Utama</strong></p></td></tr></thead><tbody><tr><td><p><strong>Googlebot</strong></p></td><td><p>Google</p></td><td><p>Crawling dan indexing konten web untuk hasil pencarian Google.</p></td></tr><tr><td><p><strong>Googlebot-Image</strong></p></td><td><p>Google</p></td><td><p>Crawling gambar untuk Google Images.</p></td></tr><tr><td><p><strong>Googlebot-News</strong></p></td><td><p>Google</p></td><td><p>Crawling konten berita untuk Google News.</p></td></tr><tr><td><p><strong>Bingbot</strong></p></td><td><p>Microsoft</p></td><td><p>Crawling situs untuk Bing Search.</p></td></tr><tr><td><p><strong>Slurp</strong></p></td><td><p>Yahoo (via Bing)</p></td><td><p>Crawler Yahoo Search (sekarang dilayani Bing).</p></td></tr><tr><td><p><strong>DuckDuckBot</strong></p></td><td><p>DuckDuckGo</p></td><td><p>Crawler privasi-pertama milik DuckDuckGo.</p></td></tr><tr><td><p><strong>YandexBot</strong></p></td><td><p>Yandex</p></td><td><p>Mesin pencari asal Rusia.</p></td></tr><tr><td><p><strong>Baiduspider</strong></p></td><td><p>Baidu</p></td><td><p>Mesin pencari terbesar di Tiongkok.</p></td></tr><tr><td><p><strong>Sogou Spider</strong></p></td><td><p>Sogou (Tiongkok)</p></td><td><p>Mesin pencari alternatif di China.</p></td></tr><tr><td><p><strong>Exabot</strong></p></td><td><p>Exalead</p></td><td><p>Mesin pencari asal Prancis.</p></td></tr><tr><td><p><strong>facebot</strong></p></td><td><p>Meta (Facebook)</p></td><td><p>Mengambil metadata saat link dibagikan di Facebook/Instagram.</p></td></tr><tr><td><p><strong>Twitterbot</strong></p></td><td><p>Twitter/X</p></td><td><p>Menampilkan preview saat link dibagikan di Twitter.</p></td></tr><tr><td><p><strong>LinkedInBot</strong></p></td><td><p>LinkedIn</p></td><td><p>Preview konten untuk link yang dibagikan di LinkedIn.</p></td></tr><tr><td><p><strong>AhrefsBot</strong></p></td><td><p>Ahrefs</p></td><td><p>Crawler untuk audit SEO dan backlink analysis.</p></td></tr><tr><td><p><strong>SemrushBot</strong></p></td><td><p>Semrush</p></td><td><p>Crawling untuk analisis SEO.</p></td></tr><tr><td><p><strong>MJ12bot</strong></p></td><td><p>Majestic</p></td><td><p>Bot untuk mengumpulkan data backlink.</p></td></tr><tr><td><p><strong>DotBot</strong></p></td><td><p>Moz</p></td><td><p>SEO crawler milik Moz.</p></td></tr><tr><td><p><strong>Applebot</strong></p></td><td><p>Apple</p></td><td><p>Crawler untuk Siri dan Spotlight Search.</p></td></tr><tr><td><p><strong>PetalBot</strong></p></td><td><p>Huawei</p></td><td><p>Digunakan untuk mesin pencari Petal Search.</p></td></tr><tr><td><p><strong>Bytespider</strong></p></td><td><p>ByteDance</p></td><td><p>Digunakan oleh TikTok untuk crawling konten eksternal.</p></td></tr><tr><td><p><strong>archive.org_bot</strong></p></td><td><p>Internet Archive</p></td><td><p>Crawling konten untuk Wayback Machine.</p></td></tr></tbody></table>

### Daftar User-agent bot AI & LLM Crawlers

<table><thead><tr><td><p><strong> User-Agent </strong></p></td><td><p><strong> Pemilik </strong></p></td><td><p><strong> Fungsi AI </strong></p></td></tr></thead><tbody><tr><td><p><strong> GPTBot </strong></p></td><td><p>OpenAI</p></td><td><p>Digunakan untuk mengumpulkan data dari web untuk melatih model GPT (seperti ChatGPT). <a href="https://openai.com/gptbot" target="_blank" rel="noopener noreferrer"> ↗ </a></p></td></tr><tr><td><p><strong> CCBot </strong></p></td><td><p>Common Crawl</p></td><td><p>Bot open data yang digunakan oleh banyak model AI (termasuk GPT, Claude, dsb).</p></td></tr><tr><td><p><strong> Anthropic-ai </strong></p></td><td><p>Anthropic</p></td><td><p>Bot untuk pelatihan Claude AI (LLM pesaing GPT). <a href="https://www.anthropic.com/help/claude-user-agent"> ↗ </a></p></td></tr><tr><td><p><strong> ClaudeBot </strong></p></td><td><p>Anthropic</p></td><td><p>Nama lain dari bot crawling milik Anthropic.</p></td></tr><tr><td><p><strong> Amazonbot </strong></p></td><td><p>Amazon</p></td><td><p>Crawling untuk Amazon AI, Alexa, dan potensi LLM. <a href="https://developer.amazon.com/support/amazonbot" target="_blank" rel="noopener noreferrer"> ↗ </a></p></td></tr><tr><td><p><strong> ia_archiver </strong></p></td><td><p>Alexa Internet (sekarang nonaktif)</p></td><td><p>Bot lama dari Alexa/Amazon (masih muncul di log lama).</p></td></tr><tr><td><p><strong> Meta AI Crawler </strong></p></td><td><p>Meta</p></td><td><p>Digunakan untuk melatih model AI milik Meta (tidak selalu memakai user-agent publik).</p></td></tr><tr><td><p><strong> CohereBot </strong></p></td><td><p>Cohere AI</p></td><td><p>Crawling untuk keperluan training model bahasa Cohere.</p></td></tr><tr><td><p><strong> PhindBot </strong></p></td><td><p>Phind</p></td><td><p>Digunakan untuk AI-powered coding assistant. <a href="https://docs.phind.com/docs/faq#why-is-your-bot-crawling-my-site" target="_blank" rel="noopener noreferrer"> ↗ </a></p></td></tr><tr><td><p><strong> YouBot </strong></p></td><td><p>You.com</p></td><td><p>Crawler milik mesin pencari dan asisten AI bernama You.com.</p></td></tr><tr><td><p><strong> Diffbot </strong></p></td><td><p>Diffbot</p></td><td><p>Crawler berbasis AI untuk ekstraksi data otomatis dan knowledge graph.</p></td></tr><tr><td><p><strong> NeevaBot </strong></p></td><td><p>(bekas Neeva Search)</p></td><td><p>Crawler dari mesin pencari dengan teknologi AI (sekarang diakuisisi Snowflake).</p></td></tr><tr><td><p><strong> PerplexityBot </strong></p></td><td><p>Perplexity AI</p></td><td><p>Bot dari search engine berbasis AI yang menjawab pertanyaan seperti ChatGPT. <a href="https://www.perplexity.ai/robots" target="_blank" rel="noopener noreferrer"> ↗ </a></p></td></tr></tbody></table>

Mungkin kamu juga menemukan beberapa nama user-agent yang tidak tercantum disini saat melakukan [analisis log file](/technical-seo/analisis-log-file) kamu bisa melakukan pengecekan di [website DataDome](https://datadome.co/bots/).

## Konfigurasi robots.txt untuk Website dari Niche yang Berbeda

Konfigurasi robots.txt ini tidak mutlak, tetapi kembali disesuaikan lagi ke URL structure dari website masing-masing.

### Contoh dari situs berita:

~~~
User-agent: *
Disallow: /admin/
Disallow: /login/
Allow: /images/

Sitemap: https://news.example.com/sitemap.xml
~~~

### Contoh situs e-commerce:

~~~
User-agent: *
Disallow: /checkout/
Disallow: /cart/
Disallow: /wishlist/
Allow: /product/

Sitemap: https://shop.example.com/sitemap.xml
~~~

### Bagaimana cara menyesuaikan robots.txt untuk situs dengan banyak subdomain atau parameter URL?

* Buat `robots.txt` terpisah untuk tiap subdomain (misal: `blog.example.com/robots.txt`, `shop.example.com/robots.txt`).  
* Gunakan parameter URL handling di Google Search Console.  
* Gunakan `Disallow` untuk blokir parameter yang tidak penting seperti filter harga atau urutan.

## Penutup

Audit dan pengelolaan `robots.txt` sudah menjadi bagian tugas seorang SEO profesional. Dengan memahami fungsinya, melakukan audit secara berkala, dan menyesuaikan isinya sesuai kebutuhan situs, kamu dapat membantu search engine dan juga LLM platform untuk memahami dan mengindeks situsmu secara optimal.