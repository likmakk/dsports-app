import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionBlock from "@/components/SectionBlock";
import ArticleCardStandard from "@/components/ArticleCardStandard";
import type { Article } from "@/types";
import articlesData from "@/data/articles.json";

const articles = (articlesData as Article[]).filter(
  (a) => a.category === "national"
);

export const metadata = {
  title: "Équipes Nationales — DSports TV",
  description: "Toute l'actualité des Lions du Sénégal et des équipes nationales.",
};

export default function EquipesNationalesPage() {
  const teams = [
    { label: "Lions A",   articles: articles.slice(0, 2) },
    { label: "Lions U23", articles: articles.slice(2, 4) },
    { label: "Lionnes",   articles: articles.filter((a) => a.categoryLabel === "Lionnes") },
  ];

  return (
    <>
      <Header />
      <main className="flex-1 py-8">
        <div className="max-w-[1240px] mx-auto px-5 flex flex-col gap-10">
          {teams.map((team) =>
            team.articles.length > 0 ? (
              <SectionBlock
                key={team.label}
                title={team.label}
                accentColor="#CC0000"
              >
                <div className="grid grid-cols-3 gap-4">
                  {team.articles.map((article) => (
                    <ArticleCardStandard key={article.slug} article={article} />
                  ))}
                </div>
              </SectionBlock>
            ) : null
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
