import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCardStandard from "@/components/ArticleCardStandard";
import { searchArticles } from "@/lib/utils";
import type { Metadata } from "next";

interface Props {
  searchParams: Promise<{ q?: string }>;
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { q } = await searchParams;
  return {
    title: q ? `"${q}" — Recherche DSports TV` : "Recherche — DSports TV",
    description: "Recherchez des articles sur DSports TV.",
  };
}

export default async function RecherchePage({ searchParams }: Props) {
  const { q } = await searchParams;
  const query = q?.trim() ?? "";
  const results = query ? searchArticles(query) : [];

  return (
    <>
      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 py-3">
        <div className="max-w-[1240px] mx-auto px-5 flex items-center gap-2 text-xs text-gray-400">
          <a href="/" className="hover:text-[#CC0000] transition-colors">Accueil</a>
          <span>›</span>
          <span className="text-gray-700 font-medium">Recherche</span>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-[#0a0a0a] py-12">
        <div className="max-w-[1240px] mx-auto px-5">
          <span className="inline-block text-[10px] font-black uppercase tracking-widest text-[#CC0000] mb-4">Recherche</span>
          {query ? (
            <>
              <h1 className="text-3xl font-black text-white leading-tight mb-2">
                Résultats pour <span className="text-[#CC0000]">« {query} »</span>
              </h1>
              <p className="text-sm text-white/40">
                {results.length === 0
                  ? "Aucun article trouvé"
                  : `${results.length} article${results.length > 1 ? "s" : ""} trouvé${results.length > 1 ? "s" : ""}`}
              </p>
            </>
          ) : (
            <h1 className="text-3xl font-black text-white leading-tight">
              Que recherchez-vous ?
            </h1>
          )}
        </div>
      </div>

      <main className="flex-1 py-12 bg-gray-50">
        <div className="max-w-[1240px] mx-auto px-5">

          {/* No query */}
          {!query && (
            <div className="text-center py-16 text-gray-400">
              <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5" className="mx-auto mb-4 opacity-40">
                <circle cx="11" cy="11" r="7" />
                <path d="M16.5 16.5L21 21" strokeLinecap="round" />
              </svg>
              <p className="text-lg font-medium text-gray-500">Saisissez un mot-clé dans la barre de recherche</p>
              <p className="text-sm mt-1">Recherchez des équipes, compétitions, joueurs ou rubriques…</p>
            </div>
          )}

          {/* No results */}
          {query && results.length === 0 && (
            <div className="text-center py-16 text-gray-400">
              <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5" className="mx-auto mb-4 opacity-40">
                <circle cx="11" cy="11" r="7" />
                <path d="M16.5 16.5L21 21" strokeLinecap="round" />
              </svg>
              <p className="text-lg font-medium text-gray-500">
                Aucun résultat pour <strong className="text-gray-700">« {query} »</strong>
              </p>
              <p className="text-sm mt-1">Essayez un autre mot-clé ou parcourez nos rubriques.</p>
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                {[
                  { label: "Ligue 1", href: "/competitions" },
                  { label: "Équipes nationales", href: "/equipes-nationales" },
                  { label: "Foot local", href: "/foot-local" },
                  { label: "Actualités", href: "/actualites" },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="px-4 py-2 text-xs font-bold uppercase tracking-wide border border-gray-300 rounded hover:border-[#CC0000] hover:text-[#CC0000] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Results grid */}
          {results.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {results.map((article) => (
                <ArticleCardStandard key={article.slug} article={article} />
              ))}
            </div>
          )}

        </div>
      </main>

      <Footer />
    </>
  );
}
