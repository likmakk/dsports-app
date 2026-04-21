import type { Article } from "@/types";
import { getCategoryColor, normalizeSlug, resolveImagePosition, getRelativeTime } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

interface ArticleCardRailProps {
  article: Article;
}

export default function ArticleCardRail({ article }: ArticleCardRailProps) {
  const catColor = getCategoryColor(article.category);
  return (
    <article className="group">
      <Link
        href={`/article/${normalizeSlug(article.slug)}`}
        className="flex items-center gap-3 px-3 py-3 hover:bg-gray-50 transition-colors duration-150"
      >
        {/* Thumbnail — fixed 96×72 (4:3) */}
        <div className="w-[96px] h-[72px] shrink-0 rounded overflow-hidden relative bg-gray-100">
          {article.image ? (
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              style={{ objectPosition: resolveImagePosition(article) }}

              sizes="96px"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none">
                <rect x="2" y="5" width="20" height="15" rx="2" stroke="#ccc" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="3" stroke="#ccc" strokeWidth="1.5" />
              </svg>
            </div>
          )}
        </div>
        {/* Text */}
        <div className="flex-1 min-w-0 flex flex-col gap-1">
          <span className={`inline-block text-[10px] font-bold uppercase tracking-wider text-white ${catColor} px-2 py-0.5 rounded self-start`}>
            {article.categoryLabel}
          </span>
          <h3 className="text-[13px] font-bold text-gray-900 leading-snug line-clamp-2 group-hover:text-[#CC0000] transition-colors duration-200">
            {article.title}
          </h3>
          <time className="text-[11px] text-gray-400" dateTime={article.publishedAt}>
            {getRelativeTime(article.publishedAt)}
          </time>
        </div>
      </Link>
    </article>
  );
}
