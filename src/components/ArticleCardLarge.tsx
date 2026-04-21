import type { Article } from "@/types";
import { getCategoryColor, normalizeSlug, resolveImagePosition, getRelativeTime } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

interface ArticleCardLargeProps {
  article: Article;
}

export default function ArticleCardLarge({ article }: ArticleCardLargeProps) {
  const catColor = getCategoryColor(article.category);
  const heroSrc = article.imageHero ?? article.image;

  return (
    <article className="group rounded-md overflow-hidden shadow-sm bg-white hover:shadow-lg transition-shadow duration-200">
      <Link href={`/article/${normalizeSlug(article.slug)}`} className="block">

        {/* Image — only rendered when a real photo exists */}
        {heroSrc && (
          <div className="h-[400px] relative overflow-hidden">
            <Image
              src={heroSrc}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              style={{ objectPosition: resolveImagePosition(article) }}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            {article.isBreaking && (
              <span className="absolute top-3 left-3 flex items-center gap-1.5 bg-[#CC0000] text-white text-[10px] font-black tracking-widest px-2.5 py-1 rounded z-10 shadow-md">
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                BREAKING
              </span>
            )}
          </div>
        )}

        {/* Body */}
        <div className="p-4">
          {article.isBreaking && !heroSrc && (
            <span className="inline-flex items-center gap-1.5 bg-[#CC0000] text-white text-[10px] font-black tracking-widest px-2.5 py-1 rounded mb-3">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              BREAKING
            </span>
          )}
          <span className={`inline-block text-[10px] font-bold uppercase tracking-wider text-white ${catColor} px-2 py-0.5 rounded mb-3`}>
            {article.categoryLabel}
          </span>
          <h2 className="text-[22px] font-black text-gray-900 leading-[1.25] mb-2.5 group-hover:text-[#CC0000] transition-colors duration-200 line-clamp-2">
            {article.title}
          </h2>
          <p className="text-[13px] text-gray-500 leading-relaxed line-clamp-2 mb-4">
            {article.excerpt}
          </p>
          <div className="flex items-center gap-2 text-xs">
            <span className="font-bold text-gray-600">Par {article.author}</span>
            <span className="text-gray-300">•</span>
            <time className="text-gray-400" dateTime={article.publishedAt}>{getRelativeTime(article.publishedAt)}</time>
          </div>
        </div>

      </Link>
    </article>
  );
}
