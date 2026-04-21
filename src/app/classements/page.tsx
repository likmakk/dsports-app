import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionBlock from "@/components/SectionBlock";
import RankingTable from "@/components/RankingTable";
import type { StandingRow } from "@/types";
import standingsData from "@/data/standings.json";

const standings = standingsData as StandingRow[];

export const metadata = {
  title: "Classements — DSports TV",
  description: "Classements officiels de la Ligue 1 et Ligue 2 sénégalaises.",
};

export default function ClassementsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 py-8">
        <div className="max-w-[1240px] mx-auto px-5">
          <SectionBlock title="Classements officiels">
            <div className="grid grid-cols-2 gap-6">
              <RankingTable rows={standings} title="Ligue 1 Sénégal" round="J22" />
              <RankingTable
                rows={standings.slice(0, 8).map((r, i) => ({ ...r, rank: i + 1, points: r.points - 8 }))}
                title="Ligue 2 Sénégal"
                round="J20"
              />
            </div>
          </SectionBlock>
        </div>
      </main>
      <Footer />
    </>
  );
}
