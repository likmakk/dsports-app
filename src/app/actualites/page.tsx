import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionBlock from "@/components/SectionBlock";
import ArticleCardStandard from "@/components/ArticleCardStandard";
import { getAllArticles } from "@/lib/utils";

const articles = getAllArticles();

export const metadata = {
  title: "Actualités — DSports TV",
  description: "Toutes les actualités du football sénégalais et africain.",
};

export default function ActualitesPage() {
  return (
    <>
      <Header />
      <main className="flex-1 py-8">
        <div className="max-w-[1240px] mx-auto px-5">
          <SectionBlock title="Toutes les actualités">
            <div className="grid grid-cols-3 gap-5">
              {articles.map((article) => (
                <ArticleCardStandard key={article.slug} article={article} />
              ))}
            </div>
          </SectionBlock>
        </div>
      </main>
      <Footer />
    </>
  );
}
