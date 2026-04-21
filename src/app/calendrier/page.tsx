import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionBlock from "@/components/SectionBlock";

const fixtures = [
  { home: "Jaraaf",    away: "Diambars",   date: "13 avr. 2026", time: "18h30", competition: "Ligue 1 — J22" },
  { home: "AJEL",      away: "AS Pikine",  date: "13 avr. 2026", time: "20h00", competition: "Ligue 1 — J22" },
  { home: "Mbour PC",  away: "Keur Madior",date: "14 avr. 2026", time: "16h00", competition: "Ligue 1 — J22" },
  { home: "Casa Sports", away: "ASC Diaraf", date: "16 avr. 2026", time: "17h00", competition: "Ligue 1 — J23" },
  { home: "Teungueth FC", away: "Génération Foot", date: "16 avr. 2026", time: "19h30", competition: "Ligue 1 — J23" },
  { home: "Sénégal",   away: "Guinée-Bissau", date: "2 mai 2026", time: "20h00", competition: "Éliminatoires CAN 2026" },
  { home: "Génération Foot", away: "Casa Sports", date: "2 mai 2026", time: "17h00", competition: "Coupe du Sénégal — 1/2 finale" },
];

export const metadata = {
  title: "Calendrier — DSports TV",
  description: "Calendrier des matchs du football sénégalais.",
};

export default function CalendrierPage() {
  return (
    <>
      <Header />
      <main className="flex-1 py-8">
        <div className="max-w-[1240px] mx-auto px-5">
          <SectionBlock title="Calendrier des matchs">
            <div className="flex flex-col gap-3">
              {fixtures.map((fixture, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-200 rounded-md px-5 py-4 flex items-center justify-between hover:shadow-sm transition-shadow"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                      {fixture.competition}
                    </span>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="font-black text-gray-900">{fixture.home}</span>
                      <span className="text-xs font-bold text-gray-400">vs</span>
                      <span className="font-black text-gray-900">{fixture.away}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-gray-700">{fixture.date}</p>
                    <p className="text-lg font-black text-[#CC0000]">{fixture.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </SectionBlock>
        </div>
      </main>
      <Footer />
    </>
  );
}
