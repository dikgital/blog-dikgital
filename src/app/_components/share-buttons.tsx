"use client";

import { useEffect, useState } from "react";

type Props = {
  title: string;
};

export function ShareButtons({ title }: Props) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  return (
    <div className="mt-8 flex flex-wrap items-center gap-4 text-sm">
      <span className="text-gray-500">Bagikan:</span>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-green-600 hover:underline"
      >
        <svg
          className="w-4 h-4"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.463 3.488A11.817 11.817 0 0 0 12.05 0C5.495 0 .16 5.334.157 11.892a11.87 11.87 0 0 0 1.588 5.946L.057 24l6.304-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.817 11.817 0 0 0-3.479-8.413zM12.05 21.785h-.004a9.86 9.86 0 0 1-5.031-1.378l-.361-.214-3.741.981.999-3.648-.235-.374a9.855 9.855 0 0 1-1.511-5.26c.002-5.45 4.437-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.827 9.827 0 0 1 2.892 6.993c-.003 5.452-4.437 9.886-9.885 9.886zm5.422-7.403c-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.148s-.767.967-.941 1.166c-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059s-.018-.458.13-.606c.134-.133.297-.347.446-.521.15-.172.199-.296.299-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.241-.58-.486-.501-.669-.51-.173-.009-.371-.01-.57-.01-.198 0-.52.074-.792.372s-1.04 1.017-1.04 2.479c0 1.463 1.065 2.876 1.213 3.074.148.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.413-.074-.125-.272-.199-.569-.348z"/>
        </svg>
        WhatsApp
      </a>

      {/* LinkedIn */}
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-blue-700 hover:underline"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.002 21.584h.227l-.435-.658c.266 0 .407-.169.409-.376l-.001-.025c0-.282-.17-.417-.519-.417h-.564v1.476h.212v-.643h.261l.41.643zm-.425-.81h-.246v-.499h.312c.161 0 .345.026.345.237 0 .242-.186.262-.412.262M17.291 19.073h-3.007v-4.709c0-1.123-.02-2.568-1.564-2.568-1.566 0-1.806 1.223-1.806 2.487v4.79H7.908V9.389h2.887v1.323h.04a3.165 3.165 0 0 1 2.848-1.564c3.048 0 3.609 2.005 3.609 4.612l-.001 5.313zM4.515 8.065a1.745 1.745 0 1 1 0-3.49 1.745 1.745 0 0 1 0 3.49m1.503 11.008h-3.01V9.389h3.01v9.684zM18.79 1.783H1.497A1.481 1.481 0 0 0 0 3.246V20.61c.01.818.68 1.473 1.497 1.464H18.79a1.485 1.485 0 0 0 1.503-1.464V3.245a1.484 1.484 0 0 0-1.503-1.463"/>
        </svg>
        LinkedIn
      </a>

      {/* Email */}
      <a
        href={`mailto:?subject=${encodedTitle}&body=${encodedUrl}`}
        className="flex items-center gap-1 text-gray-700 hover:underline"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm-.4 2L12 13 4.4 6ZM4 18V8l8 7 8-7v10Z"/>
        </svg>
        Email
      </a>
    </div>
  );
}
