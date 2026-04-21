import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité — DSports TV",
  description: "Politique de confidentialité et de protection des données personnelles de DSports TV.",
};

const sections = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: (
      <>
        <p>
          DSports TV (<strong>&quot;nous&quot;</strong>, <strong>&quot;notre&quot;</strong>, <strong>&quot;DSports&quot;</strong>) accorde une importance particulière à la protection des données personnelles de ses utilisateurs.
        </p>
        <p>
          La présente politique de confidentialité décrit les types de données que nous collectons lorsque vous utilisez notre site <strong>dsports.tv</strong>, la manière dont nous les utilisons, les conditions dans lesquelles elles peuvent être transmises, ainsi que les droits dont vous disposez à leur égard.
        </p>
        <p>
          Le traitement des données personnelles effectué par DSports TV est encadré par la <strong>Loi n°2008-12 du 25 janvier 2008 sur la Protection des données à caractère personnel</strong> au Sénégal, et supervisé par la <strong>Commission de Protection des Données Personnelles (CDP)</strong>.
        </p>
        <p>
          En utilisant ce site, vous acceptez les pratiques décrites dans la présente politique.
        </p>
      </>
    ),
  },
  {
    id: "donnees",
    title: "2. Données collectées",
    content: (
      <>
        <p>Nous collectons les données suivantes :</p>
        <div className="mt-3 space-y-3">
          {[
            {
              cat: "Données fournies directement",
              items: [
                "Adresse e-mail — lors de l'inscription à la newsletter ou de l'envoi d'un message de contact.",
                "Nom et prénom — lors de l'utilisation du formulaire de contact (facultatif).",
                "Objet et contenu du message — lors d'une prise de contact.",
              ],
            },
            {
              cat: "Données collectées automatiquement",
              items: [
                "Adresse IP et données de connexion.",
                "Type de navigateur et système d'exploitation.",
                "Pages visitées, durée des sessions, liens cliqués.",
                "Données de cookies (voir section dédiée).",
              ],
            },
          ].map((group) => (
            <div key={group.cat} className="bg-gray-50 border border-gray-200 rounded-md p-4">
              <p className="text-sm font-bold text-gray-900 mb-2">{group.cat}</p>
              <ul className="list-disc pl-4 space-y-1">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-gray-600">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-3">
          Nous ne collectons pas de données sensibles (origine ethnique, opinions politiques, données de santé, etc.).
        </p>
      </>
    ),
  },
  {
    id: "finalites",
    title: "3. Finalités du traitement",
    content: (
      <>
        <p>Les données collectées sont traitées pour les finalités suivantes :</p>
        <ul className="list-disc pl-5 mt-3 space-y-2">
          <li>Envoi de la newsletter DSports TV aux abonnés ayant donné leur consentement.</li>
          <li>Traitement et réponse aux messages reçus via le formulaire de contact.</li>
          <li>Mesure et analyse de l'audience du site afin d'améliorer les contenus et services proposés.</li>
          <li>Amélioration de l'expérience utilisateur et du fonctionnement technique du site.</li>
          <li>Respect des obligations légales applicables.</li>
        </ul>
      </>
    ),
  },
  {
    id: "base-legale",
    title: "4. Base légale",
    content: (
      <>
        <p>Les traitements de données effectués par DSports TV reposent sur les bases légales suivantes :</p>
        <div className="mt-3 overflow-hidden rounded-md border border-gray-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-200">
                <th className="text-left px-4 py-2.5 font-bold text-gray-700">Traitement</th>
                <th className="text-left px-4 py-2.5 font-bold text-gray-700">Base légale</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Newsletter", "Consentement de l'utilisateur"],
                ["Formulaire de contact", "Exécution de mesures précontractuelles / intérêt légitime"],
                ["Analyse d'audience", "Intérêt légitime (amélioration du service)"],
                ["Cookies non essentiels", "Consentement de l'utilisateur"],
                ["Obligations légales", "Conformité réglementaire"],
              ].map(([traitement, base], i) => (
                <tr key={i} className={`border-b border-gray-100 last:border-b-0 ${i % 2 === 1 ? "bg-gray-50" : ""}`}>
                  <td className="px-4 py-2.5 text-gray-700">{traitement}</td>
                  <td className="px-4 py-2.5 text-gray-500">{base}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    id: "destinataires",
    title: "5. Destinataires des données",
    content: (
      <>
        <p>
          Vos données personnelles sont destinées exclusivement à l'équipe de DSports TV dans le cadre des finalités décrites ci-dessus.
        </p>
        <p className="mt-3">
          Elles peuvent également être transmises à des prestataires techniques tiers dans le cadre de la gestion du site (hébergement, service de newsletter, outil d'analyse d'audience). Ces prestataires agissent en tant que sous-traitants et ne sont pas autorisés à utiliser vos données à d'autres fins.
        </p>
        <p className="mt-3">
          Nous ne vendons, ne louons et ne cédons jamais vos données personnelles à des tiers à des fins commerciales.
        </p>
        <div className="mt-3 bg-amber-50 border border-amber-200 rounded-md p-4">
          <p className="text-sm text-amber-800">
            <strong>À compléter :</strong> Liste des sous-traitants et prestataires tiers utilisés (hébergeur, outil de newsletter, outil d'analyse) — [À compléter par DSports]
          </p>
        </div>
      </>
    ),
  },
  {
    id: "conservation",
    title: "6. Durée de conservation",
    content: (
      <>
        <div className="overflow-hidden rounded-md border border-gray-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-200">
                <th className="text-left px-4 py-2.5 font-bold text-gray-700">Type de donnée</th>
                <th className="text-left px-4 py-2.5 font-bold text-gray-700">Durée de conservation</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Adresse e-mail (newsletter)", "Jusqu'au désabonnement"],
                ["Données du formulaire de contact", "[À compléter par DSports]"],
                ["Données de navigation / logs", "[À compléter par DSports]"],
                ["Cookies analytiques", "[À compléter par DSports]"],
              ].map(([type, duree], i) => (
                <tr key={i} className={`border-b border-gray-100 last:border-b-0 ${i % 2 === 1 ? "bg-gray-50" : ""}`}>
                  <td className="px-4 py-2.5 text-gray-700">{type}</td>
                  <td className="px-4 py-2.5 text-gray-500">{duree}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-gray-500">
          Au-delà de ces durées, les données sont supprimées ou anonymisées.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "7. Cookies et technologies similaires",
    content: (
      <>
        <p>
          Notre site utilise des cookies — de petits fichiers texte déposés sur votre terminal — pour assurer son bon fonctionnement et améliorer votre expérience.
        </p>
        <div className="mt-4 space-y-3">
          {[
            {
              type: "Cookies essentiels",
              color: "border-green-500",
              desc: "Nécessaires au fonctionnement technique du site (session, sécurité, préférences de base). Ne peuvent pas être désactivés sans altérer le fonctionnement du site.",
              consent: "Pas de consentement requis",
            },
            {
              type: "Cookies analytiques",
              color: "border-blue-500",
              desc: "Permettent de mesurer l'audience et d'analyser les comportements de navigation afin d'améliorer le contenu et les services de DSports TV.",
              consent: "Consentement requis",
            },
          ].map((cookie) => (
            <div key={cookie.type} className={`bg-white border border-gray-200 border-l-4 ${cookie.color} rounded-md p-4`}>
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-bold text-gray-900">{cookie.type}</p>
                <span className="text-[10px] font-bold uppercase tracking-wide text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{cookie.consent}</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">{cookie.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-4">
          Vous pouvez à tout moment modifier vos préférences en matière de cookies depuis les paramètres de votre navigateur. La désactivation de certains cookies peut affecter les fonctionnalités du site.
        </p>
      </>
    ),
  },
  {
    id: "droits",
    title: "8. Vos droits",
    content: (
      <>
        <p>
          Conformément à la Loi n°2008-12 du 25 janvier 2008 sur la Protection des données à caractère personnel au Sénégal, vous disposez des droits suivants :
        </p>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {[
            { droit: "Droit d'accès", desc: "Obtenir une copie des données personnelles que nous détenons sur vous." },
            { droit: "Droit de rectification", desc: "Corriger les données inexactes ou incomplètes vous concernant." },
            { droit: "Droit à l'effacement", desc: "Demander la suppression de vos données, sous réserve des obligations légales." },
            { droit: "Droit d'opposition", desc: "Vous opposer au traitement de vos données dans certaines circonstances." },
            { droit: "Droit à la limitation", desc: "Demander la suspension temporaire du traitement de vos données." },
            { droit: "Retrait du consentement", desc: "Retirer votre consentement à tout moment, sans effet rétroactif." },
          ].map((item) => (
            <div key={item.droit} className="bg-gray-50 border border-gray-200 rounded-md p-3">
              <p className="text-sm font-bold text-gray-900 mb-1">{item.droit}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-4">
          Pour exercer ces droits, contactez-nous à l'adresse : <strong>[À compléter par DSports]</strong>
        </p>
        <p className="mt-2">
          En cas de réponse insatisfaisante, vous avez le droit d'introduire une réclamation auprès de la <strong>Commission de Protection des Données Personnelles (CDP)</strong> du Sénégal.
        </p>
      </>
    ),
  },
  {
    id: "securite",
    title: "9. Sécurité des données",
    content: (
      <>
        <p>
          DSports TV met en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, perte, destruction, divulgation ou altération.
        </p>
        <p className="mt-3">
          Ces mesures comprennent notamment le chiffrement des communications (HTTPS), la limitation des accès internes aux données, et le recours à des prestataires d'hébergement sécurisés.
        </p>
        <p className="mt-3 text-sm text-gray-500">
          Aucun système n'est infaillible. En cas de violation de données susceptible d'engager un risque pour vos droits et libertés, nous prendrons les mesures appropriées conformément à la réglementation applicable.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "10. Contact",
    content: (
      <>
        <p>
          Pour toute question relative à la présente politique ou pour exercer vos droits, vous pouvez nous contacter :
        </p>
        <div className="mt-3 bg-gray-50 border border-gray-200 rounded-md p-4 space-y-1 text-sm">
          <p><strong>Par e-mail :</strong> [À compléter par DSports]</p>
          <p><strong>Via le formulaire :</strong> <a href="/contact" className="text-[#CC0000] hover:underline">dsports.tv/contact</a></p>
          <p><strong>Par courrier :</strong> [À compléter par DSports] — Dakar, Sénégal</p>
        </div>
        <p className="mt-3 text-sm text-gray-500">
          Nous nous engageons à répondre à toute demande dans un délai raisonnable.
        </p>
      </>
    ),
  },
  {
    id: "modifications",
    title: "11. Modifications",
    content: (
      <>
        <p>
          DSports TV se réserve le droit de mettre à jour la présente politique de confidentialité à tout moment, notamment en cas d'évolution réglementaire ou de modification de nos pratiques.
        </p>
        <p className="mt-3">
          Toute modification substantielle sera signalée sur le site. La date de dernière mise à jour est indiquée en haut de cette page. Nous vous encourageons à consulter régulièrement cette page.
        </p>
      </>
    ),
  },
];

export default function PolitiqueDeConfidentialitePage() {
  return (
    <>
      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 py-3">
        <div className="max-w-[1240px] mx-auto px-5 flex items-center gap-2 text-xs text-gray-400">
          <a href="/" className="hover:text-[#CC0000] transition-colors">Accueil</a>
          <span>›</span>
          <span className="text-gray-700 font-medium">Politique de confidentialité</span>
        </div>
      </div>

      {/* Page hero */}
      <div className="bg-[#0a0a0a] py-14">
        <div className="max-w-[860px] mx-auto px-5">
          <span className="inline-block text-[10px] font-black uppercase tracking-widest text-[#CC0000] mb-4">Légal</span>
          <h1 className="text-4xl font-black text-white leading-[1.15] mb-3">Politique de confidentialité</h1>
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
