import type { Article } from "@/types";
import { getCategoryColor, normalizeSlug, resolveImagePosition, getRelativeTime } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

interface ArticleCardCompactProps {
  article: Article;
}

export default function ArticleCardCompact({ article }: ArticleCardCompactProps) {
  const catColor = getCategoryColor(article.category);

  return (
    <article className="group bg-white border border-gray-200 rounded-md overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
      <Link href={`/article/${normalizeSlug(article.slug)}`} className="block">
        {/* Image — full width, landscape 16:9 */}
        <div className="w-full aspect-[16/9] relative overflow-hidden">
          {article.image ? (
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              style={{ objectPosition: resolveImagePosition(article) }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div
              className="absolute inset-0 flex items-center justify-center bg-[#1c1c1e]"
              role="img"
              aria-label={article.title}
            >
              <svg viewBox="0 0 24 24" width="32" height="32" aria-hidden="true" fill="none">
                <rect x="2" y="5" width="20" height="15" rx="2" stroke="#444" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="3.5" stroke="#444" strokeWidth="1.5" />
                <path d="M9 5l1.5-2h3L15 5" stroke="#444" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
            </div>
          )}
        </div>
        {/* Body */}
        <div className="p-3.5">
          <span className={`inline-block text-[10px] font-bold uppercase tracking-wider text-white ${catColor} px-2 py-0.5 rounded mb-2.5`}>
            {article.categoryLabel}
          </span>
          <h4 className="text-[15px] font-bold text-gray-900 leading-snug line-clamp-2 mb-2 group-hover:text-[#CC0000] transition-colors duration-200">
            {article.title}
          </h4>
          <time className="text-[11px] text-gray-400" dateTime={article.publishedAt}>
            {getRelativeTime(article.publishedAt)}
          </time>
        </div>
      </Link>
    </article>
  );
}
