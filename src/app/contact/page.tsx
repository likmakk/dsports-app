import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — DSports TV",
  description: "Contactez la rédaction de DSports TV pour toute question éditoriale, commerciale ou partenariale.",
};

export default function ContactPage() {
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
          <span className="text-gray-700 font-medium">Contact</span>
        </div>
      </div>

      {/* Page hero */}
      <div className="bg-[#0a0a0a] py-14">
        <div className="max-w-[860px] mx-auto px-5">
          <span className="inline-block text-[10px] font-black uppercase tracking-widest text-[#CC0000] mb-4">À propos</span>
          <h1 className="text-4xl font-black text-white leading-[1.15] mb-4">Contactez-nous</h1>
          <p className="text-lg text-white/60 leading-relaxed max-w-[540px]">
            Une question, un témoignage, une information à nous soumettre ou un partenariat à proposer ? Nous sommes à votre écoute.
          </p>
        </div>
      </div>

      <main className="flex-1 py-14">
        <div className="max-w-[860px] mx-auto px-5">

          <div className="grid grid-cols-[1fr_300px] gap-10 items-start">

            {/* Contact form */}
            <div>
              <h2 className="text-xl font-black text-gray-900 mb-6">Envoyer un message</h2>
              <form className="flex flex-col gap-4" aria-label="Formulaire de contact">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5" htmlFor="contact-nom">
                      Nom
                    </label>
                    <input
                      id="contact-nom"
                      type="text"
                      placeholder="Votre nom"
                      className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm outline-none focus:border-[#CC0000] transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5" htmlFor="contact-email">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="votre@email.com"
                      className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm outline-none focus:border-[#CC0000] transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5" htmlFor="contact-sujet">
                    Sujet
                  </label>
                  <select
                    id="contact-sujet"
                    className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm outline-none focus:border-[#CC0000] transition-colors bg-white"
                  >
                    <option value="">Sélectionner un sujet</option>
                    <option value="editorial">Question éditoriale</option>
                    <option value="info">Soumettre une information</option>
                    <option value="commercial">Partenariat / publicité</option>
                    <option value="correction">Signaler une erreur</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5" htmlFor="contact-message">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={6}
                    placeholder="Votre message..."
                    className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm outline-none focus:border-[#CC0000] transition-colors resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#CC0000] text-white font-bold px-6 py-3 rounded-md hover:bg-[#7f0000] transition-colors text-sm self-start"
                >
                  Envoyer le message
                </button>
              </form>
            </div>

            {/* Sidebar contact info */}
            <div className="flex flex-col gap-5">

              <div className="bg-gray-50 border border-gray-200 rounded-md p-5">
                <h3 className="text-sm font-black text-gray-900 uppercase tracking-wide mb-4 pb-2 border-b border-gray-200">Contact éditorial</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-2">Pour toute question relative aux articles, informations publiées ou signalement d'erreur :</p>
                <p className="text-sm font-bold text-gray-700">[À compléter par DSports]</p>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-md p-5">
                <h3 className="text-sm font-black text-gray-900 uppercase tracking-wide mb-4 pb-2 border-b border-gray-200">Contact commercial</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-2">Pour les partenariats, la publicité et les demandes de kit média :</p>
                <p className="text-sm font-bold text-gray-700">[À compléter par DSports]</p>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-md p-5">
                <h3 className="text-sm font-black text-gray-900 uppercase tracking-wide mb-4 pb-2 border-b border-gray-200">Réseaux sociaux</h3>
                <div className="flex flex-col gap-2">
                  {[
                    { label: "Facebook", href: "https://www.facebook.com/SNdsports1" },
                    { label: "X / Twitter", href: "https://x.com/Dsports1_sn" },
                    { label: "Instagram", href: "https://www.instagram.com/dsports.sn/" },
                    { label: "YouTube", href: "https://www.youtube.com/channel/UCbx9bc6eFHKXRl4wS8H7lfQ" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-[#CC0000] hover:underline"
                    >
                      {s.label} →
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
