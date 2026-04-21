import { notFound } from "next/navigation";
import { headers } from "next/headers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionBlock from "@/components/SectionBlock";
import ArticleCardStandard from "@/components/ArticleCardStandard";
import LiveFeedSidebar from "@/components/LiveFeedSidebar";
import { getCategoryColor, getArticleBySlug, getArticlesByCategory, getAllArticles, normalizeSlug, getReadingTime, getRelativeTime } from "@/lib/utils";
import ArticleHeroImage from "@/components/ArticleHeroImage";
import type { FeedItem } from "@/types";
import feedData from "@/data/feed.json";

const feedItems = feedData as FeedItem[];

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: normalizeSlug(a.slug) }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} — DSports TV`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = getArticlesByCategory(article.category)
    .filter((a) => normalizeSlug(a.slug) !== normalizeSlug(slug))
    .slice(0, 3);

  const catColor = getCategoryColor(article.category);
  const initials = article.author.split(" ").map((n) => n[0]).join("").slice(0, 2);
  const readingTime = getReadingTime(article.content, article.excerpt);

  const host = (await headers()).get("host") ?? "localhost:3000";
  const protocol = host.startsWith("localhost") ? "http" : "https";
  const articleUrl = `${protocol}://${host}/article/${normalizeSlug(slug)}`;
  const enc = encodeURIComponent;
  const shareLinks = [
    { label: "Facebook",   color: "bg-blue-600",  href: `https://www.facebook.com/sharer/sharer.php?u=${enc(articleUrl)}` },
    { label: "X / Twitter", color: "bg-black",    href: `https://twitter.com/intent/tweet?text=${enc(article.title)}&url=${enc(articleUrl)}` },
    { label: "WhatsApp",   color: "bg-green-500", href: `https://api.whatsapp.com/send?text=${enc(article.title + " — " + articleUrl)}` },
  ];

  return (
    <>
      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 py-3">
        <div className="max-w-[1240px] mx-auto px-4 md:px-5 flex items-center gap-2 text-xs text-gray-400 overflow-hidden">
          <a href="/" className="hover:text-[#CC0000] transition-colors whitespace-nowrap">Accueil</a>
          <span className="shrink-0">›</span>
          <a href="/actualites" className="hover:text-[#CC0000] transition-colors capitalize whitespace-nowrap">{article.categoryLabel}</a>
          <span className="shrink-0">›</span>
          <span className="text-gray-700 font-medium truncate">{article.title}</span>
        </div>
      </div>

      <main className="flex-1 py-8">
        <div className="max-w-[1240px] mx-auto px-4 md:px-5">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start">

            {/* Article column */}
            <article itemScope itemType="https://schema.org/NewsArticle">

              {/* Header */}
              <header className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`inline-block text-[10px] font-bold uppercase tracking-wider text-white ${catColor} px-1.5 py-0.5 rounded`}>
                    {article.categoryLabel}
                  </span>
                  {article.isBreaking && (
                    <span className="flex items-center gap-1 bg-[#CC0000] text-white text-[10px] font-black tracking-widest px-2 py-0.5 rounded">
                      <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                      BREAKING
                    </span>
                  )}
                </div>

                <h1
                  className="text-[22px] sm:text-[28px] lg:text-4xl font-black text-gray-900 leading-tight mb-4"
                  itemProp="headline"
                >
                  {article.title}
                </h1>

                <p className="text-lg text-gray-500 leading-relaxed mb-5 border-l-4 border-[#CC0000] pl-4">
                  {article.excerpt}
                </p>

                {/* Byline */}
                <div className="flex items-center justify-between flex-wrap gap-4 py-4 border-y border-gray-200 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center font-black text-gray-500 text-sm shrink-0">
                      {initials}
                    </div>
                    <div>
                      <span className="text-sm font-bold text-gray-900 block">Par {article.author}</span>
                      <span className="text-xs text-gray-400 block">{article.authorRole ?? "Rédaction DSports TV"}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-gray-400 flex-wrap">
                    <time dateTime={article.publishedAt} itemProp="datePublished">
                      {getRelativeTime(article.publishedAt)}
                    </time>
                    <span>⏱ {readingTime}</span>
                  </div>
                </div>

                {/* Share bar */}
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  <span className="text-xs font-bold text-gray-400 uppercase">Partager :</span>
                  {shareLinks.map(({ label, color, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${color} text-white text-xs font-bold px-3 py-2 rounded hover:opacity-90 transition-opacity`}
                      aria-label={`Partager sur ${label}`}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </header>

              {/* Hero image */}
              {article.image ? (
                <ArticleHeroImage
                  src={article.image}
                  alt={article.title}
                  gradient={article.imageGradient}
                  orientation={article.imageOrientation}
                  imagePosition={article.imagePosition}
                />
              ) : (
                <div
                  className="w-full aspect-[16/9] rounded-md mb-3"
                  style={{ background: article.imageGradient }}
                  role="img"
                  aria-label={article.title}
                  itemProp="image"
                />
              )}
              <p className="text-xs text-gray-400 italic mb-8">
                Photo illustrative — © DSports TV
              </p>

              {/* Article body */}
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-5" itemProp="articleBody">
                {article.content
                  ? article.content.split("\n\n").map((para, i) => (
                      <p key={i}>{para}</p>
                    ))
                  : <p>{article.excerpt}</p>
                }
              </div>

              {/* Tags */}
              {article.tags && (
                <div className="flex flex-wrap gap-2 mt-8 pt-5 border-t border-gray-200">
                  {article.tags.map((tag) => (
                    <a
                      key={tag}
                      href="#"
                      className="px-3 py-1 bg-gray-100 border border-gray-200 rounded-full text-xs text-gray-500 font-medium hover:bg-[#CC0000] hover:text-white hover:border-[#CC0000] transition-colors"
                    >
                      {tag}
                    </a>
                  ))}
                </div>
              )}

              {/* Related articles */}
              {related.length > 0 && (
                <div className="mt-12">
                  <SectionBlock title="Articles similaires">
                    <div className="grid grid-cols-3 gap-4">
                      {related.map((a) => (
                        <ArticleCardStandard key={a.slug} article={a} />
                      ))}
                    </div>
                  </SectionBlock>
                </div>
              )}
            </article>

            {/* Sidebar */}
            <aside className="hidden lg:flex flex-col gap-6 sticky top-[80px]">
              <LiveFeedSidebar items={feedItems} />

              {/* DSports TV mini widget */}
              <div className="bg-[#0a0a0a] rounded-md overflow-hidden">
                <div className="bg-[#CC0000] px-4 py-3 flex items-center gap-2">
                  <svg viewBox="0 0 20 14" width="16" height="12" aria-hidden="true">
                    <rect x="1" y="1" width="18" height="12" rx="2" stroke="white" strokeWidth="1.5" fill="none" />
                    <path d="M7 5l6 2-6 2V5z" fill="white" />
                  </svg>
                  <span className="text-xs font-black text-white uppercase tracking-widest">DSports TV</span>
                </div>
                <div className="p-3 flex flex-col gap-2">
                  {[
                    { title: "Résumé Casa Sports 2-1 Teungueth FC", duration: "8:42", gradient: "linear-gradient(135deg,#CC0000,#7f0000)" },
                    { title: "Interview exclusive : Ismaïla Sarr après son triplé", duration: "12:17", gradient: "linear-gradient(135deg,#1a1a2e,#0f3460)" },
                  ].map((v, i) => (
                    <a key={i} href="/tv" className="block rounded overflow-hidden">
                      <div className="h-[80px] flex items-center justify-center relative" style={{ background: v.gradient }}>
                        <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
                          <circle cx="12" cy="12" r="11" fill="rgba(0,0,0,0.5)" />
                          <polygon points="9,7 19,12 9,17" fill="white" />
                        </svg>
                        <span className="absolute bottom-1.5 right-2 bg-black/70 text-white text-[10px] font-bold px-1 rounded">{v.duration}</span>
                      </div>
                      <p className="text-xs font-bold text-white/85 mt-1.5 leading-snug px-1 pb-1">{v.title}</p>
                    </a>
                  ))}
                  <a href="/tv" className="block text-center py-2 bg-[#CC0000] text-white text-xs font-bold rounded hover:bg-[#7f0000] transition-colors mt-1">
                    Toutes les vidéos →
                  </a>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
