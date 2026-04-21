import type { Article } from "@/types";
import { getCategoryColor, normalizeSlug, getRelativeTime } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

interface ArticleCardCornerProps {
  article: Article;
}

export default function ArticleCardCorner({ article }: ArticleCardCornerProps) {
  const catColor = getCategoryColor(article.category);

  return (
    <article className="group bg-white border border-gray-200 rounded-md overflow-hidden hover:shadow-md transition-shadow duration-200">
      <Link href={`/article/${normalizeSlug(article.slug)}`} className="flex">
        {/* Image */}
        <div className="w-[200px] min-h-[140px] shrink-0 overflow-hidden relative">
          {article.image ? (
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
              sizes="200px"
            />
          ) : (
            <div
              className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.05]"
              style={{ background: article.imageGradient }}
              role="img"
              aria-label={article.title}
            />
          )}
        </div>
        {/* Body */}
        <div className="p-5 flex-1 flex flex-col justify-between">
          <div>
            <span className={`inline-block text-[10px] font-bold uppercase tracking-wider text-white ${catColor} px-2 py-0.5 rounded mb-3`}>
              {article.categoryLabel}
            </span>
            <h3 className="text-[18px] font-black text-gray-900 leading-[1.3] mb-2.5 group-hover:text-[#CC0000] transition-colors duration-200">
              {article.title}
            </h3>
            <p className="text-[13px] text-gray-500 leading-relaxed line-clamp-3">
              {article.excerpt}
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs mt-3">
            <span className="font-bold text-gray-600">{article.author}</span>
            <span className="text-gray-300">•</span>
            <time className="text-gray-400" dateTime={article.publishedAt}>{getRelativeTime(article.publishedAt)}</time>
          </div>
        </div>
      </Link>
    </article>
  );
}
