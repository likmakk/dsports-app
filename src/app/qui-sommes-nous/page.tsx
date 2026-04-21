import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qui sommes-nous ? — DSports TV",
  description: "DSports TV est le média sportif sénégalais de référence. Découvrez notre mission, nos valeurs et nos formats éditoriaux.",
};

export default function QuiSommesNousPage() {
  return (
    <>
      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 py-3">
        <div className="max-w-[1240px] mx-auto px-5 flex items-center gap-2 text-xs text-gray-400">
          <a href="/" className="hover:text-[#CC0000] transition-colors">Accueil</a>
          <span>›</span>
          <span className="text-gray-700 font-medium">Qui sommes-nous ?</span>
        </div>
      </div>

      {/* Page hero */}
      <div className="bg-[#0a0a0a] py-14">
        <div className="max-w-[860px] mx-auto px-5">
          <span className="inline-block text-[10px] font-black uppercase tracking-widest text-[#CC0000] mb-4">À propos</span>
          <h1 className="text-4xl font-black text-white leading-[1.15] mb-4">
            DSports, la voix du football sénégalais
          </h1>
          <p className="text-lg text-white/60 leading-relaxed max-w-[600px]">
            Un média indépendant, fondé à Dakar, dédié à l'actualité sportive sénégalaise et africaine.
          </p>
        </div>
      </div>

      <main className="flex-1 py-14">
        <div className="max-w-[860px] mx-auto px-5">

          {/* Mission */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-gray-900 mb-5 pb-3 border-b-2 border-[#CC0000] inline-block">Notre mission</h2>
            <div className="text-[1rem] text-gray-700 leading-[1.8] space-y-4">
              <p>
                DSports TV est né d'un constat simple : le football sénégalais mérite un média à sa hauteur. Un espace qui couvre avec sérieux et passion l'actualité des Lions du Sénégal, de la Ligue 1, des compétitions continentales, et des milliers de joueurs qui font vivre le football local chaque semaine.
              </p>
              <p>
                Notre mission est de produire une information sportive fiable, rapide et accessible, au service des supporters, des acteurs du football et de tous ceux qui suivent le sport sénégalais depuis Dakar ou depuis la diaspora.
              </p>
            </div>
          </section>

          {/* Coverage */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-gray-900 mb-6 pb-3 border-b-2 border-[#CC0000] inline-block">Ce que nous couvrons</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Football national", desc: "Ligue 1, Ligue 2, Coupe du Sénégal, Navétanes — toute la pyramide du football sénégalais." },
                { title: "Équipes nationales", desc: "Les Lions A, U23, les Lionnes — résultats, analyses, sélections, coulisses." },
                { title: "Compétitions africaines", desc: "CAF Champions League, CAN, Chan, et toute l'actualité du football continental." },
                { title: "Diaspora sénégalaise", desc: "Le suivi des joueurs sénégalais évoluant à l'étranger, de la Premier League à la Liga." },
                { title: "Football international", desc: "Les grandes compétitions mondiales vues à travers le prisme sénégalais." },
                { title: "Analyses & débats", desc: "Des chroniques, tribunes et décryptages signés par notre rédaction et nos contributeurs." },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 border border-gray-200 rounded-md p-4">
                  <h3 className="text-[15px] font-black text-gray-900 mb-1.5">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Formats */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-gray-900 mb-5 pb-3 border-b-2 border-[#CC0000] inline-block">Nos formats</h2>
            <div className="space-y-4 text-[1rem] text-gray-700 leading-[1.8]">
              <p><strong className="text-gray-900">Articles & brèves</strong> — Des dépêches, des analyses et des reportages publiés en continu pour suivre l'actualité au plus près.</p>
              <p><strong className="text-gray-900">DSports TV</strong> — Des résumés de matchs, des interviews exclusives et des émissions produites par notre pôle vidéo.</p>
              <p><strong className="text-gray-900">Corner — Analyses & tribunes</strong> — Un espace éditorial ouvert à nos chroniqueurs et à des contributeurs extérieurs pour approfondir les sujets qui agitent le football sénégalais.</p>
              <p><strong className="text-gray-900">Flux en direct</strong> — Résultats, compositions d'équipes, scores en temps réel pendant les journées de championnat.</p>
            </div>
          </section>

          {/* Values */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-gray-900 mb-6 pb-3 border-b-2 border-[#CC0000] inline-block">Nos valeurs</h2>
            <div className="grid grid-cols-3 gap-4">
              {[
                { title: "Indépendance", desc: "Nous défendons une ligne éditoriale libre, sans pression commerciale ou politique." },
                { title: "Rigueur", desc: "Nous vérifions nos sources et assumons nos corrections. La fiabilité est notre priorité." },
                { title: "Proximité", desc: "Nous parlons au supporter sénégalais avec sa langue, son regard, sa passion." },
              ].map((v) => (
                <div key={v.title} className="border-t-4 border-[#CC0000] pt-4">
                  <h3 className="text-[15px] font-black text-gray-900 mb-2">{v.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-[#0a0a0a] rounded-md p-8 text-center">
            <h2 className="text-xl font-black text-white mb-3">Suivez DSports au quotidien</h2>
            <p className="text-sm text-white/60 mb-5 max-w-[420px] mx-auto">
              Abonnez-vous à notre newsletter et rejoignez notre communauté sur les réseaux sociaux pour ne rien manquer de l'actualité du football sénégalais.
            </p>
            <div className="flex justify-center gap-3">
              <a href="/newsletter" className="bg-[#CC0000] text-white text-sm font-bold px-5 py-2.5 rounded hover:bg-[#7f0000] transition-colors">
                S'abonner à la newsletter
              </a>
              <a href="/contact" className="bg-white/10 text-white text-sm font-bold px-5 py-2.5 rounded hover:bg-white/20 transition-colors">
                Nous contacter
              </a>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
