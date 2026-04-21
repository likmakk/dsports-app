import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreakingNewsBar from "@/components/BreakingNewsBar";
import SectionBlock from "@/components/SectionBlock";
import HeroMosaic from "@/components/HeroMosaic";
import ArticleCardStandard from "@/components/ArticleCardStandard";
import ArticleCardCorner from "@/components/ArticleCardCorner";
import VideoCard from "@/components/VideoCard";
import LiveFeedSidebar from "@/components/LiveFeedSidebar";
import RankingTable from "@/components/RankingTable";
import type { Video, FeedItem, StandingRow, ScoreCard } from "@/types";

import videosData from "@/data/videos.json";
import feedData from "@/data/feed.json";
import standingsData from "@/data/standings.json";
import { getAllArticles, getArticlesByCategory, getRelativeTime, getMostReadArticles, normalizeSlug, formatViews } from "@/lib/utils";

const videos    = videosData    as Video[];
const feedItems = feedData      as FeedItem[];
const standings = standingsData as StandingRow[];

const articles   = getAllArticles();
const featured   = articles.find((a) => a.isFeatured && a.isBreaking)!;
const secondary  = articles.filter((a) => a.isFeatured && !a.isBreaking).slice(0, 2);
const heroRailSlugs = new Set([featured.slug, ...secondary.map((a) => a.slug)]);
const heroRail = [
  ...secondary,
  ...articles.filter((a) => !heroRailSlugs.has(a.slug)).slice(0, 4 - secondary.length),
];
const latestNews = articles.filter((a) => !a.isFeatured).slice(0, 6);
const localNews  = getArticlesByCategory("local");
const latestSlugs = new Set(latestNews.map((a) => a.slug));
const nationalNews = getArticlesByCategory("national")
  .filter((a) => !a.isFeatured && !latestSlugs.has(a.slug))
  .slice(0, 3);
const cornerArticles = getArticlesByCategory("corner").slice(0, 3);
const mostRead       = getMostReadArticles(3);


const nationalFlags: Record<string, { emoji: string; badge: string }> = {
  "Éliminatoires CAN 2026": { emoji: "🦁", badge: "Lions A" },
  "Lions du Sénégal":       { emoji: "🦁", badge: "Lions A" },
  "Lions U23":              { emoji: "⚡", badge: "U23" },
  "JO 2028":                { emoji: "⚡", badge: "U23" },
  "CHAN 2025":              { emoji: "⚡", badge: "U23" },
  "CAN Féminine":          { emoji: "🌟", badge: "Lionnes" },
  "Lionnes":               { emoji: "🌟", badge: "Lionnes" },
};

const tickerItems = [
  "🔴 Sadio Mané de retour à l'entraînement avec Al-Nassr avant le Clasico",
  "⚽ Ligue 1 — Casa Sports 2-1 Teungueth FC : résumé disponible sur DSports TV",
  "🦁 Lions du Sénégal : Aliou Cissé convoque 26 joueurs pour les éliminatoires CAN 2026",
  "📋 Génération Foot : Lamine Camara prolonge son contrat jusqu'en 2027",
  "🏆 CAF Champions League : Simba SC vs Mamelodi Sundowns ce soir à 20h00",
  "⚡ Ismaïla Sarr signe un triplé avec Crystal Palace en Premier League",
  "🟡 Navétanes Dakar : tirage au sort des 16es de finale prévu samedi",
];

const scores: ScoreCard[] = [
  { home: "Casa Sports",     away: "Teungueth FC",    score: "2 – 1", status: "FT",   type: "final" },
  { home: "US Gorée",        away: "Génération Foot", score: "1 – 1", status: "67'",  type: "live" },
  { home: "Jaraaf",          away: "Diambars",        score: "– – –", status: "18h30",type: "upcoming" },
  { home: "AJEL",            away: "AS Pikine",       score: "– – –", status: "20h00",type: "upcoming" },
  { home: "Diaraf",          away: "ASC Ngor",        score: "0 – 0", status: "FT",   type: "final" },
];

const featuredVideo = videos.find((v) => v.isFeatured);
const sideVideos    = videos.filter((v) => !v.isFeatured).slice(0, 3);

export default function HomePage() {
  return (
    <>
      <BreakingNewsBar items={tickerItems} />
      <Header />

      {/* Scores bar */}
      <div className="bg-gray-50 border-b border-gray-200 py-2" aria-label="Résultats du jour Ligue 1">
        <div className="xl:max-w-[1240px] mx-auto px-4 md:px-5 flex items-center gap-4">
          <span className="text-[10px] font-black text-gray-500 uppercase tracking-wide shrink-0 pr-4 border-r-2 border-gray-200 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full border-2 border-[#CC0000] flex items-center justify-center">
              <span className="w-1 h-1 rounded-full bg-[#CC0000]" />
            </span>
            Ligue 1 — J22
          </span>
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none">
            {scores.map((match, i) => (
              <a
                key={i}
                href="/competitions"
                className="flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 rounded text-xs shrink-0 hover:shadow-sm transition-shadow"
              >
                <span className="font-bold text-gray-800">{match.home}</span>
                <span className={`font-black text-sm px-1.5 py-0.5 rounded text-white ${
                  match.type === "live"     ? "bg-[#CC0000]"  :
                  match.type === "final"    ? "bg-gray-900"   :
                  "bg-gray-200 !text-gray-500"
                }`}>
                  {match.score}
                </span>
                <span className="font-bold text-gray-800">{match.away}</span>
                <span className={`text-[10px] font-bold ${match.type === "live" ? "text-[#CC0000] animate-pulse" : "text-gray-400"}`}>
                  {match.status}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main layout */}
      <main className="flex-1 py-6">
        <div className="xl:max-w-[1240px] mx-auto px-4 md:px-5">

          {/* ── HERO MOSAIC ── */}
          <HeroMosaic featured={featured} secondary={heroRail} />

          {/* ── MAIN CONTENT + SIDEBAR ── */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start mt-6 lg:mt-8">

            {/* Left — Dernières actualités + editorial sections */}
            <div className="flex flex-col gap-8 lg:gap-10">

              <SectionBlock title="Dernières Actualités" seeAllHref="/actualites">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {latestNews.map((article) => (
                    <ArticleCardStandard key={article.slug} article={article} />
                  ))}
                </div>
              </SectionBlock>

              <SectionBlock title="Foot Local" accentColor="#2e7d32" seeAllHref="/foot-local">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {localNews.map((article) => (
                    <ArticleCardStandard key={article.slug} article={article} />
                  ))}
                </div>
              </SectionBlock>

              {cornerArticles.length > 0 && (
                <SectionBlock title="Corner — Analyses &amp; Tribunes" accentColor="#CC0000" seeAllHref="/corner-analyses">
                  <div className="flex flex-col gap-4">
                    {cornerArticles.map((article) => (
                      <ArticleCardCorner key={article.slug} article={article} />
                    ))}
                  </div>
                </SectionBlock>
              )}

              <SectionBlock title="Équipes Nationales" accentColor="#CC0000" seeAllHref="/equipes-nationales">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {nationalNews.map((article) => {
                    const flag = nationalFlags[article.categoryLabel];
                    return (
                      <article key={article.slug} className="bg-white border border-gray-200 rounded-md overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all">
                        <a href={`/article/${article.slug}`} className="block">
                          <div
                            className="relative flex items-center justify-center h-[200px]"
                            style={{ background: article.imageGradient }}
                          >
                            {flag && (
                              <div className="flex flex-col items-center gap-1.5">
                                <span className="text-4xl">{flag.emoji}</span>
                                <span className="text-[10px] font-black tracking-widest uppercase text-white/90 bg-black/35 px-3 py-0.5 rounded-full">{flag.badge}</span>
                              </div>
                            )}
                          </div>
                          <div className="p-3">
                            <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-white bg-red-700 px-1.5 py-0.5 rounded mb-2">
                              {article.categoryLabel}
                            </span>
                            <h3 className="text-[15px] font-bold text-gray-900 leading-snug line-clamp-3 mb-2 hover:text-[#CC0000] transition-colors">
                              {article.title}
                            </h3>
                            <time className="text-xs text-gray-400" dateTime={article.publishedAt}>{getRelativeTime(article.publishedAt)}</time>
                          </div>
                        </a>
                      </article>
                    );
                  })}
                </div>
              </SectionBlock>


            </div>

            {/* Right — Flux en direct + sidebar modules */}
            <aside className="lg:sticky lg:top-[80px] flex flex-col gap-6 pt-4 lg:pt-0">
              <LiveFeedSidebar items={feedItems} />
              <RankingTable rows={standings} />

              <div className="bg-white border border-gray-200 rounded-md overflow-hidden">
                <div className="px-4 py-3 bg-[#0a0a0a] border-b-2 border-[#CC0000]">
                  <h3 className="text-xs font-black text-white uppercase tracking-widest">Les Plus Lus</h3>
                </div>
                <ol className="px-4 py-3 flex flex-col gap-3">
                  {mostRead.map((article, i) => (
                    <li key={article.slug} className="flex items-start gap-3 pb-3 border-b border-gray-50 last:border-b-0 last:pb-0">
                      <span className="text-2xl font-black text-gray-200 leading-none w-7 shrink-0">{i + 1}</span>
                      <div>
                        <a href={`/article/${normalizeSlug(article.slug)}`} className="text-xs font-bold text-gray-900 leading-snug hover:text-[#CC0000] transition-colors line-clamp-2">
                          {article.title}
                        </a>
                        <span className="text-[10px] text-gray-400 mt-1 block">{formatViews(article.views ?? 0)}</span>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-white border border-gray-200 rounded-md overflow-hidden">
                <div className="px-4 py-3 bg-[#0a0a0a] border-b-2 border-[#CC0000]">
                  <h3 className="text-xs font-black text-white uppercase tracking-widest">Suivez DSports TV</h3>
                </div>
                <div className="p-3 grid grid-cols-2 gap-2">
                  {[
                    { label: "Facebook", count: "45K", color: "bg-[#1877f2]" },
                    { label: "X / Twitter", count: "28K", color: "bg-[#111]" },
                    { label: "YouTube", count: "62K", color: "bg-[#CC0000]" },
                    { label: "Instagram", count: "38K", color: "bg-gradient-to-br from-purple-600 to-orange-400" },
                  ].map((s) => (
                    <a key={s.label} href="#" className={`${s.color} text-white rounded px-3 py-2.5 flex items-center justify-between hover:opacity-90 transition-opacity`}>
                      <span className="text-xs font-bold">{s.label}</span>
                      <span className="text-xs font-black">{s.count}</span>
                    </a>
                  ))}
                </div>
              </div>
            </aside>

          </div>{/* end grid main content + sidebar */}
        </div>

        {/* ── DSports TV section (full-width dark) ── */}
        <section className="bg-[#0a0a0a] py-10 mt-10" aria-labelledby="tv-section-title">
          <div className="xl:max-w-[1240px] mx-auto px-4 md:px-5">
            <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/15">
              <div className="flex items-center gap-3">
                <svg viewBox="0 0 50 50" width="32" height="32" aria-hidden="true">
                  <rect width="50" height="50" rx="4" fill="#CC0000" />
                  <text x="6" y="38" fontFamily="Arial Black, sans-serif" fontSize="34" fontWeight="900" fill="white">D</text>
                  <polygon points="38,18 48,25 38,32" fill="white" />
                </svg>
                <h2 id="tv-section-title" className="text-xl font-black text-white uppercase tracking-wide">DSports TV</h2>
              </div>
              <a href="/tv" className="text-xs font-bold text-white/70 uppercase tracking-wide hover:text-white transition-colors">
                Toutes les vidéos →
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-4">
              {featuredVideo && <VideoCard video={featuredVideo} featured />}
              {sideVideos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Newsletter */}
      <section className="bg-gray-50 border-y border-gray-200 py-10" aria-labelledby="newsletter-title">
        <div className="xl:max-w-[1240px] mx-auto px-4 md:px-5 flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
          <div>
            <h2 id="newsletter-title" className="text-xl font-black text-gray-900 mb-2">Restez dans la course</h2>
            <p className="text-sm text-gray-500 max-w-md">
              Recevez chaque matin l&apos;essentiel de l&apos;actu du football sénégalais directement dans votre boîte mail.
            </p>
          </div>
          <form className="flex gap-2 w-full md:w-auto md:shrink-0" aria-label="Inscription à la newsletter">
            <input
              type="email"
              placeholder="Votre adresse e-mail"
              className="border-2 border-gray-200 rounded-md px-4 py-3 text-sm flex-1 md:w-72 outline-none focus:border-[#CC0000] transition-colors"
              required
              aria-label="Adresse e-mail"
            />
            <button type="submit" className="bg-[#CC0000] text-white font-bold px-5 md:px-6 py-3 rounded-md hover:bg-[#7f0000] transition-colors whitespace-nowrap">
              S&apos;abonner
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
