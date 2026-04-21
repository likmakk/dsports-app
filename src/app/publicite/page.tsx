import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publicité & Partenariats — DSports TV",
  description: "Associez votre marque au premier média sportif sénégalais. Découvrez nos formats publicitaires et partenariats éditoriaux.",
};

const formats = [
  {
    title: "Display & bannières",
    desc: "Formats visuels intégrés dans nos pages articles, sections et homepage. Visibilité premium auprès d'une audience sportive qualifiée.",
    formats: ["Bannière header", "Bannière sidebar", "In-article"],
  },
  {
    title: "Sponsoring de rubrique",
    desc: "Associez votre marque à une rubrique éditoriale spécifique : Ligue 1, Équipes Nationales, DSports TV. Présence renforcée et contexte éditorial fort.",
    formats: ["Logo partenaire", "Mention exclusive", "Contenu sponsorisé"],
  },
  {
    title: "Sponsoring d'émissions vidéo",
    desc: "Votre marque associée à nos contenus vidéo sur YouTube et nos réseaux sociaux. Idéal pour toucher notre audience lors des grands rendez-vous sportifs.",
    formats: ["Intégration logo", "Habillage vidéo", "Pre-roll & mentions"],
  },
  {
    title: "Relais réseaux sociaux",
    desc: "Bénéficiez de notre audience engagée sur Facebook, X et Instagram pour amplifier vos messages auprès des supporters sénégalais.",
    formats: ["Posts sponsorisés", "Stories & Reels", "Opérations spéciales"],
  },
];

export default function PublicitePage() {
  return (
    <>
      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 py-3">
        <div className="max-w-[1240px] mx-auto px-5 flex items-center gap-2 text-xs text-gray-400">
          <a href="/" className="hover:text-[#CC0000] transition-colors">Accueil</a>
          <span>›</span>
          <a href="/qui-sommes-nous" className="hover:text-[#CC0000] transition-colors">À propos</a>
          <span>›</span>
          <span className="text-gray-700 font-medium">Publicité</span>
        </div>
      </div>

      {/* Page hero */}
      <div className="bg-[#0a0a0a] py-14">
        <div className="max-w-[860px] mx-auto px-5">
          <span className="inline-block text-[10px] font-black uppercase tracking-widest text-[#CC0000] mb-4">Partenariats</span>
          <h1 className="text-4xl font-black text-white leading-[1.15] mb-4">Publicité & Partenariats</h1>
          <p className="text-lg text-white/60 leading-relaxed max-w-[580px]">
            Touchez une audience sportive sénégalaise engagée et fidèle. DSports TV est la plateforme référence pour les marques qui s'adressent aux supporters.
          </p>
        </div>
      </div>

      <main className="flex-1 py-14">
        <div className="max-w-[860px] mx-auto px-5">

          {/* Why DSports */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-gray-900 mb-5 pb-3 border-b-2 border-[#CC0000] inline-block">Pourquoi choisir DSports TV ?</h2>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                { stat: "Audience qualifiée", desc: "Supporters, acteurs du sport, journalistes, passionnés de football sénégalais et de la diaspora." },
                { stat: "Présence multicanale", desc: "Site web, newsletter, YouTube, Facebook, X (Twitter) et Instagram — une présence sur tous les canaux." },
                { stat: "Contexte éditorial fort", desc: "Votre marque associée à un contenu de qualité, dans un environnement éditorial sérieux et crédible." },
              ].map((item) => (
                <div key={item.stat} className="bg-gray-50 border border-gray-200 rounded-md p-4 border-t-4 border-t-[#CC0000]">
                  <h3 className="text-[14px] font-black text-gray-900 mb-2">{item.stat}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Formats */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-gray-900 mb-6 pb-3 border-b-2 border-[#CC0000] inline-block">Nos formats publicitaires</h2>
            <div className="flex flex-col gap-5">
              {formats.map((item) => (
                <div key={item.title} className="bg-white border border-gray-200 rounded-md p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-[16px] font-black text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed mb-3">{item.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.formats.map((f) => (
                          <span key={f} className="text-xs font-medium text-[#CC0000] bg-red-50 border border-red-100 px-2.5 py-1 rounded-full">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Kit média + contact */}
          <section className="bg-[#0a0a0a] rounded-md p-8">
            <h2 className="text-xl font-black text-white mb-3">Demander le kit média</h2>
            <p className="text-sm text-white/60 leading-relaxed mb-6 max-w-[500px]">
              Pour obtenir notre kit média, nos tarifs et nos disponibilités, contactez directement notre pôle commercial. Nous répondons sous 48h ouvrées.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <div className="bg-white/5 border border-white/10 rounded-md px-4 py-3">
                <p className="text-xs text-white/40 mb-0.5">Contact commercial</p>
                <p className="text-sm font-bold text-white">[À compléter par DSports]</p>
              </div>
              <a
                href="/contact"
                className="inline-block bg-[#CC0000] text-white text-sm font-bold px-5 py-3 rounded hover:bg-[#7f0000] transition-colors"
              >
                Nous contacter →
              </a>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
