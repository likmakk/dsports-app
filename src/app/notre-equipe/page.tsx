import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notre équipe — DSports TV",
  description: "Découvrez les pôles et équipes qui font DSports TV au quotidien.",
};

const poles = [
  {
    title: "Rédaction",
    color: "border-[#CC0000]",
    desc: "L'équipe éditoriale de DSports produit l'ensemble des articles, brèves, analyses et tribunes publiés sur le site. Elle assure la couverture quotidienne de l'actualité sportive sénégalaise et africaine, la vérification des informations et le respect de la ligne éditoriale du média.",
    roles: ["Rédacteur en chef", "Journalistes & reporters", "Chroniqueurs & contributeurs"],
  },
  {
    title: "Production / DSports TV",
    color: "border-blue-600",
    desc: "Le pôle vidéo est responsable de la production de tous les contenus audiovisuels : résumés de matchs, émissions, interviews exclusives et reportages. Il pilote la chaîne DSports TV sur YouTube et l'ensemble des formats vidéo diffusés sur les plateformes du groupe.",
    roles: ["Réalisateur / directeur de production", "Caméramans & monteurs", "Journalistes TV"],
  },
  {
    title: "Digital & Réseaux sociaux",
    color: "border-green-500",
    desc: "L'équipe digitale gère la présence en ligne de DSports sur l'ensemble des plateformes : Facebook, X, Instagram, YouTube. Elle pilote la stratégie de contenu social, les publications en temps réel pendant les matchs, la modération et l'engagement communautaire.",
    roles: ["Responsable digital", "Community managers", "Graphistes & motion designers"],
  },
  {
    title: "Partenariats & Commercial",
    color: "border-orange-500",
    desc: "Le pôle commercial est l'interlocuteur privilégié des marques, agences et partenaires institutionnels souhaitant associer leur image à DSports TV. Il gère les offres de sponsoring, les partenariats de contenus et les opérations spéciales.",
    roles: ["Responsable commercial", "Chargés de partenariats"],
  },
];

export default function NotreEquipePage() {
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
          <span className="text-gray-700 font-medium">Notre équipe</span>
        </div>
      </div>

      {/* Page hero */}
      <div className="bg-[#0a0a0a] py-14">
        <div className="max-w-[860px] mx-auto px-5">
          <span className="inline-block text-[10px] font-black uppercase tracking-widest text-[#CC0000] mb-4">À propos</span>
          <h1 className="text-4xl font-black text-white leading-[1.15] mb-4">Notre équipe</h1>
          <p className="text-lg text-white/60 leading-relaxed max-w-[560px]">
            DSports TV est porté par une équipe pluridisciplinaire passionnée par le sport sénégalais et engagée dans la qualité de l'information.
          </p>
        </div>
      </div>

      <main className="flex-1 py-14">
        <div className="max-w-[860px] mx-auto px-5">

          <p className="text-[1rem] text-gray-600 leading-[1.8] mb-12 max-w-[680px]">
            Le média est structuré autour de quatre pôles complémentaires, chacun contribuant à faire de DSports la référence de l'information sportive sénégalaise. Si vous souhaitez rejoindre l'aventure ou proposer une collaboration, consultez notre page <a href="/contact" className="text-[#CC0000] hover:underline font-medium">Contact</a>.
          </p>

          <div className="flex flex-col gap-8">
            {poles.map((pole) => (
              <div key={pole.title} className={`bg-white border border-gray-200 rounded-md overflow-hidden border-l-4 ${pole.color}`}>
                <div className="p-6">
                  <h2 className="text-xl font-black text-gray-900 mb-3">{pole.title}</h2>
                  <p className="text-[0.95rem] text-gray-600 leading-[1.75] mb-4">{pole.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {pole.roles.map((role) => (
                      <span key={role} className="text-xs font-medium text-gray-500 bg-gray-100 border border-gray-200 px-3 py-1 rounded-full">
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Join CTA */}
          <div className="mt-14 bg-gray-50 border border-gray-200 rounded-md p-8">
            <h2 className="text-xl font-black text-gray-900 mb-3">Rejoindre DSports TV</h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-5 max-w-[500px]">
              Journaliste, vidéaste, graphiste ou passionné de football ? DSports est toujours à l'écoute de profils motivés qui partagent notre vision du sport sénégalais.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#CC0000] text-white text-sm font-bold px-5 py-2.5 rounded hover:bg-[#7f0000] transition-colors"
            >
              Proposer votre candidature
            </a>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
