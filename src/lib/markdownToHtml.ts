import { remark } from "remark";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeSlug from "rehype-slug";

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(remarkRehype, { allowDangerousHtml: true }) // 🔑 izinkan HTML di markdown
    .use(rehypeSlug)
    .use(rehypeStringify, { allowDangerousHtml: true }) // 🔑 jaga HTML tetap utuh
    .process(markdown);

  return result.toString();
}
