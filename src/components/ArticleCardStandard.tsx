import type { Article } from "@/types";
import { getCategoryColor, normalizeSlug, resolveImagePosition, getRelativeTime } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

interface ArticleCardStandardProps {
  article: Article;
}

export default function ArticleCardStandard({ article }: ArticleCardStandardProps) {
  const catColor = getCategoryColor(article.category);

  return (
    <article className="group bg-white border border-gray-200 rounded-md overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 h-full">
      <Link href={`/article/${normalizeSlug(article.slug)}`} className="flex flex-col h-full">

        {/* Image — aspect-ratio based so all cards share identical proportions */}
        <div className="aspect-[16/10] relative overflow-hidden">
          {article.image ? (
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
              style={{ objectPosition: resolveImagePosition(article) }}
              sizes="(max-width: 768px) 100vw, 33vw"
              priority={false}
            />
          ) : (
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(160deg, #1c1c1e 0%, #2a2a2a 100%)" }}
              role="img"
              aria-label={article.title}
            />
          )}
        </div>

        {/* Body — flex-1 so all cards fill grid row height; meta always at bottom */}
        <div className="p-3.5 flex-1 flex flex-col justify-between">
          <div>
            <span className={`inline-block text-[10px] font-bold uppercase tracking-wider text-white ${catColor} px-2 py-0.5 rounded mb-2.5`}>
              {article.categoryLabel}
            </span>
            <h3 className="text-[15px] font-bold text-gray-900 leading-snug line-clamp-2 group-hover:text-[#CC0000] transition-colors duration-200">
              {article.title}
            </h3>
          </div>
          <time className="text-[11px] text-gray-400 mt-2.5 block" dateTime={article.publishedAt}>
            {getRelativeTime(article.publishedAt)}
          </time>
        </div>

      </Link>
    </article>
  );
}
