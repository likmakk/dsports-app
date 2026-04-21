import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCardCorner from "@/components/ArticleCardCorner";
import { getContributorArticles } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contributions — DSports TV",
  description: "Articles éditoriaux rédigés par les contributeurs extérieurs de DSports TV.",
};

export default function ContributionsPage() {
  const articles = getContributorArticles();

  return (
    <>
      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 py-3">
        <div className="max-w-[1240px] mx-auto px-5 flex items-center gap-2 text-xs text-gray-400">
          <a href="/" className="hover:text-[#CC0000] transition-colors">Accueil</a>
          <span>›</span>
          <span className="text-gray-700 font-medium">Contributions</span>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-[#0a0a0a] py-14">
        <div className="max-w-[1240px] mx-auto px-5">
          <span className="inline-block text-[10px] font-black uppercase tracking-widest text-[#CC0000] mb-4">Édito</span>
          <h1 className="text-4xl font-black text-white leading-[1.15] mb-4">Contributions</h1>
          <p className="text-sm text-white/50 max-w-[560px] leading-relaxed">
            Cette page rassemble les articles signés par des contributeurs extérieurs à la rédaction DSports.
            Analyses, tribunes et regards croisés sur le football sénégalais et africain.
          </p>
        </div>
      </div>

      <main className="flex-1 py-12 bg-gray-50">
        <div className="max-w-[1240px] mx-auto px-5">

          {articles.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5" className="mx-auto mb-4 opacity-40">
                <path d="M12 20h9" strokeLinecap="round" />
                <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="text-lg font-medium text-gray-500">Aucune contribution disponible pour le moment.</p>
              <p className="text-sm mt-1">Revenez bientôt pour découvrir les prochains articles de nos contributeurs.</p>
            </div>
          ) : (
            <>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
                {articles.length} contribution{articles.length > 1 ? "s" : ""}
              </p>
              <div className="flex flex-col gap-5">
                {articles.map((article) => (
                  <ArticleCardCorner key={article.slug} article={article} />
                ))}
              </div>
            </>
          )}

        </div>
      </main>

      <Footer />
    </>
  );
}
