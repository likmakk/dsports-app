import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionBlock from "@/components/SectionBlock";
import ArticleCardStandard from "@/components/ArticleCardStandard";
import { getArticlesByCategory } from "@/lib/utils";

const localArticles = getArticlesByCategory(["local", "ligue2"]);

export const metadata = {
  title: "Foot Local — DSports TV",
  description: "Navétanes, Coupe du Sénégal, Ligue 2 et tout le football local sénégalais.",
};

export default function FootLocalPage() {
  return (
    <>
      <Header />
      <main className="flex-1 py-8">
        <div className="max-w-[1240px] mx-auto px-5">
          <SectionBlock title="Foot Local" accentColor="#2e7d32" seeAllHref="/foot-local">
            <div className="grid grid-cols-3 gap-5">
              {localArticles.map((article) => (
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
