import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterForm from "@/components/NewsletterForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsletter — DSports TV",
  description: "Recevez chaque matin l'essentiel de l'actualité du football sénégalais directement dans votre boîte mail.",
};

export default function NewsletterPage() {
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
          <span className="text-gray-700 font-medium">Newsletter</span>
        </div>
      </div>

      {/* Page hero */}
      <div className="bg-[#0a0a0a] py-14">
        <div className="max-w-[860px] mx-auto px-5">
          <span className="inline-block text-[10px] font-black uppercase tracking-widest text-[#CC0000] mb-4">Newsletter</span>
          <h1 className="text-4xl font-black text-white leading-[1.15] mb-4">
            Restez dans la course
          </h1>
          <p className="text-lg text-white/60 leading-relaxed max-w-[540px]">
            L'essentiel du football sénégalais chaque matin dans votre boîte mail. Gratuit, sans publicité, sans spam.
          </p>
        </div>
      </div>

      <main className="flex-1 py-14">
        <div className="max-w-[600px] mx-auto px-5">

          {/* Value props */}
          <section className="mb-12">
            <h2 className="text-xl font-black text-gray-900 mb-6">Ce que vous recevez</h2>
            <div className="flex flex-col gap-4">
              {[
                {
                  icon: "⚽",
                  title: "L'actu du jour",
                  desc: "Les résultats, les transferts, les déclarations et les événements marquants du football sénégalais sélectionnés par notre rédaction.",
                },
                {
                  icon: "🦁",
                  title: "Les Lions en focus",
                  desc: "Un suivi prioritaire des équipes nationales — sélections, matchs, performances des Lions à l'étranger.",
                },
                {
                  icon: "📺",
                  title: "Les vidéos DSports TV",
                  desc: "Une sélection des meilleures vidéos publiées sur notre chaîne YouTube : résumés, interviews et émissions.",
                },
                {
                  icon: "📋",
                  title: "L'agenda sportif",
                  desc: "Les matchs à suivre dans la semaine : Ligue 1, Coupe du Sénégal, compétitions africaines et internationales.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 items-start bg-gray-50 border border-gray-200 rounded-md p-4">
                  <span className="text-2xl leading-none mt-0.5">{item.icon}</span>
                  <div>
                    <h3 className="text-[14px] font-black text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Frequency */}
          <section className="mb-12 bg-[#0a0a0a] rounded-md p-6">
            <div className="grid grid-cols-3 text-center gap-4">
              {[
                { val: "1×/jour", label: "Fréquence" },
                { val: "Matin", label: "Heure d'envoi" },
                { val: "0€", label: "Prix" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-2xl font-black text-white mb-1">{item.val}</p>
                  <p className="text-xs text-white/50 uppercase tracking-wide">{item.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Signup form */}
          <section className="mb-10">
            <h2 className="text-xl font-black text-gray-900 mb-5">S'inscrire gratuitement</h2>
            <NewsletterForm />
          </section>

          {/* Reassurance */}
          <p className="text-xs text-gray-400 leading-relaxed text-center">
            En vous inscrivant, vous acceptez de recevoir des e-mails de DSports TV. Vous pouvez vous désabonner à tout moment en un clic, sans condition. Vos données ne sont jamais transmises à des tiers. Consultez notre{" "}
            <a href="/politique-de-confidentialite" className="text-[#CC0000] hover:underline">politique de confidentialité</a>.
          </p>

        </div>
      </main>

      <Footer />
    </>
  );
}
