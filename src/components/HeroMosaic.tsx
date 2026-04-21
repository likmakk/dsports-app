import type { Article } from "@/types";
import { getCategoryColor, normalizeSlug, resolveImagePosition, getRelativeTime } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

interface HeroMosaicProps {
  featured: Article;
  secondary: Article[];
}

export default function HeroMosaic({ featured, secondary }: HeroMosaicProps) {
  const blocks = secondary.slice(0, 4);
  const featuredSrc = featured.imageHero ?? featured.image;

  return (
    <>

      {/* ── MOBILE < 768px ─────────────────────────────────────────────────
           Featured portrait card on top, 2×2 grid below.             */}
      <div className="md:hidden flex flex-col gap-2">

        {/* Featured — tall portrait ratio */}
        <Link
          href={`/article/${normalizeSlug(featured.slug)}`}
          className="relative block group overflow-hidden rounded-md aspect-[4/5]"
        >
          {featuredSrc ? (
            <Image
              src={featuredSrc}
              alt={featured.title}
              fill
              className="object-cover"
              style={{ objectPosition: resolveImagePosition(featured) }}
              sizes="100vw"
              priority
            />
          ) : (
            <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, #1c1c1e 0%, #2a2a2a 100%)" }} />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

          {featured.isBreaking && (
            <span className="absolute top-3 left-3 flex items-center gap-1.5 bg-[#CC0000] text-white text-[10px] font-black tracking-widest px-2.5 py-1 rounded z-10 shadow-md">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              BREAKING
            </span>
          )}

          <div className="absolute bottom-0 left-0 right-0 p-4">
            <span className={`inline-block text-[10px] font-bold uppercase tracking-wider text-white ${getCategoryColor(featured.category)} px-2 py-0.5 rounded mb-2`}>
              {featured.categoryLabel}
            </span>
            <h2 className="text-[21px] font-black text-white leading-[1.2] line-clamp-3 mb-2">
              {featured.title}
            </h2>
            <div className="flex items-center gap-2 text-[11px] text-white/55">
              <span className="font-semibold">{featured.author}</span>
              <span>•</span>
              <time dateTime={featured.publishedAt}>{getRelativeTime(featured.publishedAt)}</time>
            </div>
          </div>
        </Link>

        {/* Secondary — 2×2 portrait grid */}
        <div className="grid grid-cols-2 gap-2">
          {blocks.map((article) => (
            <Link
              key={article.slug}
              href={`/article/${normalizeSlug(article.slug)}`}
              className="relative block group overflow-hidden rounded-md aspect-[3/2]"
            >
              {article.image ? (
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  style={{ objectPosition: resolveImagePosition(article) }}
                  sizes="50vw"
                />
              ) : (
                <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, #1c1c1e 0%, #2a2a2a 100%)" }} />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <span className={`inline-block text-[9px] font-bold uppercase tracking-wider text-white ${getCategoryColor(article.category)} px-1.5 py-0.5 rounded mb-1.5`}>
                  {article.categoryLabel}
                </span>
                <h3 className="text-[13px] font-bold text-white leading-snug line-clamp-2">
                  {article.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

      </div>

      {/* ── TABLET 768px–1023px ────────────────────────────────────────────
           Featured column left (3fr), 4 secondary cells right (2×2).  */}
      <div className="hidden md:grid lg:hidden grid-cols-[3fr_1fr_1fr] grid-rows-2 gap-2 h-[420px] rounded-md overflow-hidden">

        {/* Featured — spans both rows on the left */}
        <Link
          href={`/article/${normalizeSlug(featured.slug)}`}
          className="row-span-2 relative group overflow-hidden"
        >
          {featuredSrc ? (
            <Image
              src={featuredSrc}
              alt={featured.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              style={{ objectPosition: resolveImagePosition(featured) }}
              sizes="60vw"
              priority
            />
          ) : (
            <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, #1c1c1e 0%, #2a2a2a 100%)" }} />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

          {featured.isBreaking && (
            <span className="absolute top-3 left-3 flex items-center gap-1.5 bg-[#CC0000] text-white text-[10px] font-black tracking-widest px-2.5 py-1 rounded z-10 shadow-md">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              BREAKING
            </span>
          )}

          <div className="absolute bottom-0 left-0 right-0 p-5">
            <span className={`inline-block text-[10px] font-bold uppercase tracking-wider text-white ${getCategoryColor(featured.category)} px-2 py-0.5 rounded mb-2`}>
              {featured.categoryLabel}
            </span>
            <h2 className="text-[22px] font-black text-white leading-[1.2] line-clamp-3 mb-2 group-hover:text-gray-200 transition-colors duration-200">
              {featured.title}
            </h2>
            {featured.excerpt && (
              <p className="text-[12px] text-white/75 leading-relaxed line-clamp-2 mb-2">
                {featured.excerpt}
              </p>
            )}
            <div className="flex items-center gap-2 text-xs text-white/55">
              <span className="font-semibold">{featured.author}</span>
              <span>•</span>
              <time dateTime={featured.publishedAt}>{getRelativeTime(featured.publishedAt)}</time>
            </div>
          </div>
        </Link>

        {/* 4 secondary cells filling the right 2×2 area */}
        {blocks.map((article) => (
          <Link
            key={article.slug}
            href={`/article/${normalizeSlug(article.slug)}`}
            className="relative group overflow-hidden"
          >
            {article.image ? (
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                style={{ objectPosition: resolveImagePosition(article) }}
                sizes="20vw"
              />
            ) : (
              <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, #1c1c1e 0%, #2a2a2a 100%)" }} />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <span className={`inline-block text-[9px] font-bold uppercase tracking-wider text-white ${getCategoryColor(article.category)} px-1.5 py-0.5 rounded mb-1`}>
                {article.categoryLabel}
              </span>
              <h3 className="text-[13px] font-bold text-white leading-snug line-clamp-2 group-hover:text-gray-200 transition-colors">
                {article.title}
              </h3>
            </div>
          </Link>
        ))}

      </div>

      {/* ── DESKTOP 1024px+ ────────────────────────────────────────────────
           3-column mosaic: featured spans 2 rows left, 2×2 right.    */}
      <div className="hidden lg:grid grid-cols-[2fr_1fr_1fr] grid-rows-2 gap-2 h-[520px] rounded-md overflow-hidden bg-white">

        {/* Featured — dominant left column, spans both rows */}
        <Link
          href={`/article/${normalizeSlug(featured.slug)}`}
          className="row-span-2 relative group overflow-hidden"
        >
          {featuredSrc ? (
            <Image
              src={featuredSrc}
              alt={featured.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              style={{ objectPosition: resolveImagePosition(featured) }}
              sizes="50vw"
              priority
            />
          ) : (
            <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, #1c1c1e 0%, #2a2a2a 100%)" }} />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

          {featured.isBreaking && (
            <span className="absolute top-4 left-4 flex items-center gap-1.5 bg-[#CC0000] text-white text-[10px] font-black tracking-widest px-2.5 py-1 rounded z-10 shadow-md">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              BREAKING
            </span>
          )}

          <div className="absolute bottom-0 left-0 right-0 p-5">
            <span className={`inline-block text-[10px] font-bold uppercase tracking-wider text-white ${getCategoryColor(featured.category)} px-2 py-0.5 rounded mb-2.5`}>
              {featured.categoryLabel}
            </span>
            <h2 className="text-[26px] font-black text-white leading-[1.15] line-clamp-3 mb-2.5 group-hover:text-gray-200 transition-colors duration-200">
              {featured.title}
            </h2>
            {featured.excerpt && (
              <p className="text-[13px] text-white/75 leading-relaxed line-clamp-2 mb-3">
                {featured.excerpt}
              </p>
            )}
            <div className="flex items-center gap-2 text-xs text-white/55">
              <span className="font-semibold">{featured.author}</span>
              <span>•</span>
              <time dateTime={featured.publishedAt}>{getRelativeTime(featured.publishedAt)}</time>
            </div>
          </div>
        </Link>

        {/* Blocks 2–5 — equal secondary cells (2×2 on the right) */}
        {blocks.map((article) => (
          <Link
            key={article.slug}
            href={`/article/${normalizeSlug(article.slug)}`}
            className="relative group overflow-hidden"
          >
            {article.image ? (
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                style={{ objectPosition: resolveImagePosition(article) }}
                sizes="25vw"
              />
            ) : (
              <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, #1c1c1e 0%, #2a2a2a 100%)" }} />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-3.5">
              <span className={`inline-block text-[10px] font-bold uppercase tracking-wider text-white ${getCategoryColor(article.category)} px-2 py-0.5 rounded mb-1.5`}>
                {article.categoryLabel}
              </span>
              <h3 className="text-[14px] font-bold text-white leading-snug line-clamp-2 group-hover:text-gray-200 transition-colors duration-200">
                {article.title}
              </h3>
            </div>
          </Link>
        ))}

      </div>

    </>
  );
}
