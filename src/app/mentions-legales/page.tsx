import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales — DSports TV",
  description: "Mentions légales du site DSports TV conformément à la législation sénégalaise.",
};

const sections = [
  {
    id: "editeur",
    title: "1. Éditeur du site",
    content: (
      <>
        <p>Le site <strong>dsports.tv</strong> est édité par :</p>
        <div className="mt-3 bg-gray-50 border border-gray-200 rounded-md p-4 space-y-1.5 text-sm">
          <p><strong>Dénomination sociale :</strong> <span className="text-amber-700">[À compléter par DSports]</span></p>
          <p><strong>Forme juridique :</strong> <span className="text-amber-700">[À compléter par DSports]</span></p>
          <p><strong>Capital social :</strong> <span className="text-amber-700">[À compléter par DSports]</span></p>
          <p><strong>Numéro RCCM :</strong> <span className="text-amber-700">[À compléter par DSports]</span></p>
          <p><strong>NINEA :</strong> <span className="text-amber-700">[À compléter par DSports]</span></p>
          <p><strong>Siège social :</strong> <span className="text-amber-700">[À compléter par DSports]</span> — Dakar, Sénégal</p>
          <p><strong>Téléphone :</strong> <span className="text-amber-700">[À compléter par DSports]</span></p>
          <p><strong>E-mail :</strong> <span className="text-amber-700">[À compléter par DSports]</span></p>
        </div>
        <p className="mt-3 text-sm text-gray-500">
          Le RCCM (Registre du Commerce et du Crédit Mobilier) est le registre légal d'immatriculation des entreprises au Sénégal. Le NINEA est le Numéro d'Identification National des Entreprises et Associations, équivalent sénégalais du numéro fiscal.
        </p>
      </>
    ),
  },
  {
    id: "directeur",
    title: "2. Directeur de la publication",
    content: (
      <>
        <p>
          Conformément à la réglementation sénégalaise sur la presse en ligne, le directeur de la publication est le responsable légal du contenu éditorial diffusé sur dsports.tv.
        </p>
        <div className="mt-3 bg-gray-50 border border-gray-200 rounded-md p-4 space-y-1.5 text-sm">
          <p><strong>Nom et prénom :</strong> <span className="text-amber-700">[À compléter par DSports]</span></p>
          <p><strong>Qualité :</strong> Directeur de la publication</p>
          <p><strong>E-mail :</strong> <span className="text-amber-700">[À compléter par DSports]</span></p>
        </div>
      </>
    ),
  },
  {
    id: "hebergeur",
    title: "3. Hébergeur",
    content: (
      <>
        <p>Le site dsports.tv est hébergé par :</p>
        <div className="mt-3 bg-gray-50 border border-gray-200 rounded-md p-4 space-y-1.5 text-sm">
          <p><strong>Société :</strong> <span className="text-amber-700">[À compléter par DSports]</span></p>
          <p><strong>Adresse :</strong> <span className="text-amber-700">[À compléter par DSports]</span></p>
          <p><strong>Site web :</strong> <span className="text-amber-700">[À compléter par DSports]</span></p>
        </div>
      </>
    ),
  },
  {
    id: "contact",
    title: "4. Contact",
    content: (
      <>
        <p>Pour toute question ou réclamation relative au site dsports.tv :</p>
        <div className="mt-3 bg-gray-50 border border-gray-200 rounded-md p-4 space-y-1.5 text-sm">
          <p><strong>Formulaire de contact :</strong> <a href="/contact" className="text-[#CC0000] hover:underline">dsports.tv/contact</a></p>
          <p><strong>E-mail :</strong> <span className="text-amber-700">[À compléter par DSports]</span></p>
          <p><strong>Adresse postale :</strong> <span className="text-amber-700">[À compléter par DSports]</span> — Dakar, Sénégal</p>
        </div>
      </>
    ),
  },
  {
    id: "propriete",
    title: "5. Propriété intellectuelle",
    content: (
      <>
        <p>
          L'ensemble des contenus publiés sur le site dsports.tv — textes, articles, analyses, images, photographies, vidéos, graphismes, logo, identité visuelle et charte graphique — est la propriété exclusive de DSports TV ou de ses partenaires et contributeurs, sauf mention contraire expresse.
        </p>
        <p className="mt-3">
          Toute reproduction, représentation, modification, publication, transmission ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est <strong>strictement interdite</strong> sans l'autorisation écrite préalable de DSports TV.
        </p>
        <p className="mt-3">
          Les contenus produits par des tiers (agences de presse, contributeurs, photographes) restent la propriété de leurs auteurs respectifs. Leur utilisation sur dsports.tv est effectuée avec leur accord ou dans le cadre de licences d'utilisation en bonne et due forme.
        </p>
        <p className="mt-3">
          Toute exploitation non autorisée des contenus du site expose son auteur à des poursuites judiciaires conformément aux dispositions applicables en matière de droit de la presse et de propriété intellectuelle au Sénégal.
        </p>
      </>
    ),
  },
  {
    id: "responsabilite",
    title: "6. Responsabilité",
    content: (
      <>
        <p>
          DSports TV s'efforce de fournir des informations exactes, à jour et vérifiées. Toutefois, nous ne pouvons garantir l'exactitude, l'exhaustivité ou l'actualité de l'ensemble des contenus publiés. L'information sportive, par nature, évolue rapidement.
        </p>
        <p className="mt-3">
          DSports TV ne saurait être tenu responsable :
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1.5">
          <li>Des erreurs ou omissions dans les informations diffusées.</li>
          <li>Des dommages directs ou indirects causés à l'utilisateur lors de l'accès au site.</li>
          <li>Des interruptions ou indisponibilités du site, quelle qu'en soit la cause.</li>
          <li>Du contenu des sites tiers vers lesquels des liens hypertextes renvoient depuis dsports.tv.</li>
        </ul>
        <p className="mt-3">
          L'utilisateur est seul responsable de l'utilisation qu'il fait des informations contenues sur le site.
        </p>
      </>
    ),
  },
  {
    id: "donnees",
    title: "7. Données personnelles",
    content: (
      <>
        <p>
          DSports TV collecte et traite certaines données personnelles de ses utilisateurs dans le cadre de la navigation sur le site, de l'inscription à la newsletter et de l'utilisation du formulaire de contact.
        </p>
        <p className="mt-3">
          Ces traitements sont encadrés par la <strong>Loi n°2008-12 du 25 janvier 2008 sur la Protection des données à caractère personnel</strong> au Sénégal.
        </p>
        <p className="mt-3">
          Pour plus d'informations, consultez notre{" "}
          <a href="/politique-de-confidentialite" className="text-[#CC0000] hover:underline font-medium">
            Politique de confidentialité
          </a>.
        </p>
      </>
    ),
  },
  {
    id: "droit-applicable",
    title: "8. Droit applicable et juridiction",
    content: (
      <>
        <p>
          Les présentes mentions légales sont régies par le droit sénégalais.
        </p>
        <p className="mt-3">
          En cas de litige relatif à l'utilisation du site dsports.tv ou à l'interprétation des présentes mentions légales, et à défaut de résolution amiable, les juridictions compétentes de <strong>Dakar, Sénégal</strong> seront seules habilitées à connaître du différend.
        </p>
      </>
    ),
  },
];

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 py-3">
        <div className="max-w-[1240px] mx-auto px-5 flex items-center gap-2 text-xs text-gray-400">
          <a href="/" className="hover:text-[#CC0000] transition-colors">Accueil</a>
          <span>›</span>
          <span className="text-gray-700 font-medium">Mentions légales</span>
        </div>
      </div>

      {/* Page hero */}
      <div className="bg-[#0a0a0a] py-14">
        <div className="max-w-[860px] mx-auto px-5">
          <span className="inline-block text-[10px] font-black uppercase tracking-widest text-[#CC0000] mb-4">Légal</span>
          <h1 className="text-4xl font-black text-white leading-[1.15] mb-3">Mentions légales</h1>
          <p className="text-sm text-white/40">Dernière mise à jour : [À compléter par DSports]</p>
        </div>
      </div>

      <main className="flex-1 py-14">
        <div className="max-w-[860px] mx-auto px-5">
          <div className="grid grid-cols-[1fr_220px] gap-10 items-start">

            {/* Content */}
            <div className="text-[0.95rem] text-gray-700 leading-[1.8] space-y-12">
              {sections.map((section) => (
                <section key={section.id} id={section.id}>
                  <h2 className="text-xl font-black text-gray-900 mb-5 pb-3 border-b border-gray-200">
                    {section.title}
                  </h2>
                  <div className="space-y-3">{section.content}</div>
                </section>
              ))}
            </div>

            {/* Table of contents */}
            <nav className="sticky top-[80px] bg-gray-50 border border-gray-200 rounded-md p-4" aria-label="Table des matières">
              <p className="text-xs font-black text-gray-500 uppercase tracking-widest mb-3">Sommaire</p>
              <ul className="space-y-1">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="text-xs text-gray-500 hover:text-[#CC0000] transition-colors leading-relaxed block py-0.5"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
