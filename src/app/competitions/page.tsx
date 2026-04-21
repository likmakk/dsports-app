import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionBlock from "@/components/SectionBlock";
import ArticleCardStandard from "@/components/ArticleCardStandard";
import RankingTable from "@/components/RankingTable";
import type { Article, StandingRow } from "@/types";
import articlesData from "@/data/articles.json";
import standingsData from "@/data/standings.json";

const articles = (articlesData as Article[]).filter(
  (a) => a.category === "ligue1" || a.category === "ligue2"
);
const standings = standingsData as StandingRow[];

export const metadata = {
  title: "Compétitions — DSports TV",
  description: "Résultats, classements et actualités des compétitions sénégalaises.",
};

export default function CompetitionsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 py-8">
        <div className="max-w-[1240px] mx-auto px-5">
          <div className="grid grid-cols-[1fr_320px] gap-8 items-start">
            <div className="flex flex-col gap-10">
              <SectionBlock title="Ligue 1" accentColor="#7b1fa2" seeAllHref="/competitions">
                <div className="grid grid-cols-3 gap-4">
                  {articles.map((article) => (
                    <ArticleCardStandard key={article.slug} article={article} />
                  ))}
                </div>
              </SectionBlock>
            </div>
            <aside>
              <RankingTable rows={standings} />
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
