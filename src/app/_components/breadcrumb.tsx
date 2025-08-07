import Link from "next/link";

type Props = {
  category?: string;
  title?: string;
};

export function Breadcrumb({ category, title }: Props) {
  return (
    <nav className="text-sm text-gray-500 mb-6" aria-label="breadcrumb">
      <ol className="flex flex-wrap justify-center md:justify-start gap-x-2 gap-y-1 uppercase text-center">
        <li>
          <Link href="/" className="hover:underline text-muted-foreground">
            Home
          </Link>
        </li>

        {category && (
          <>
            <li>/</li>
            <li>
              <Link href={`/category/${category}`} className="hover:underline text-muted-foreground uppercase">
                {category.replace(/-/g, " ")}
              </Link>
            </li>
          </>
        )}

        {title && (
          <>
            <li>/</li>
            <li className="text-gray-800 uppercase">{title}</li>
          </>
        )}
      </ol>
    </nav>
  );
}
