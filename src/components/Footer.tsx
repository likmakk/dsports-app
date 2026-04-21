import Link from "next/link";
import Image from "next/image";

const footerCols = [
  {
    title: "Rubriques",
    links: [
      { label: "Ligue 1 Sénégal",           href: "/competitions" },
      { label: "Coupe du Sénégal",           href: "/competitions" },
      { label: "Navétanes",                  href: "/foot-local" },
      { label: "Équipes Nationales",         href: "/equipes-nationales" },
      { label: "Football Africain",          href: "/actualites" },
    ],
  },
  {
    title: "Édito",
    links: [
      { label: "Corner — Analyses", href: "/corner-analyses" },
      { label: "Contributions",     href: "/contributions" },
      { label: "DSports TV",        href: "/tv" },
    ],
  },
  {
    title: "À propos",
    links: [
      { label: "Qui sommes-nous ?",            href: "/qui-sommes-nous" },
      { label: "Notre équipe",                 href: "/notre-equipe" },
      { label: "Publicité",                    href: "/publicite" },
      { label: "Contact",                      href: "/contact" },
      { label: "Newsletter",                   href: "/newsletter" },
      { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
      { label: "Mentions légales",             href: "/mentions-legales" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white/70" role="contentinfo">
      <div className="xl:max-w-[1240px] mx-auto px-4 md:px-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8 py-10 border-b border-white/10">
        {/* Brand column */}
        <div className="sm:col-span-3 lg:col-span-1">
          <Link href="/" className="flex items-center gap-3 mb-5" aria-label="DSports TV — Accueil">
            <div className="relative h-[48px] w-[48px] shrink-0 rounded-md overflow-hidden bg-white">
              <Image
                src="/logos/logo-footer-officiel.jpeg"
                alt="DSports"
                fill
                className="object-contain"
                sizes="48px"
              />
            </div>
            <div className="flex flex-col leading-none gap-1.5">
              <span className="text-lg font-black text-white tracking-tight leading-none">DSports</span>
              <span className="self-start text-[9px] font-black text-white bg-[#CC0000] tracking-[3px] uppercase px-1.5 py-0.5 rounded-sm">TV</span>
            </div>
          </Link>
          <p className="text-sm leading-relaxed max-w-[280px] mb-5">
            Un regard exigeant sur le sport sénégalais et africain. Actualités, analyses et récits pour comprendre le jeu, au-delà des scores.
          </p>
          {/* Social icons */}
          <div className="flex gap-3" aria-label="Réseaux sociaux DSports TV">
            {[
              { label: "Facebook",  href: "https://www.facebook.com/SNdsports1",       icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
              { label: "Twitter/X", href: "https://x.com/Dsports1_sn",                 icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
              { label: "Instagram", href: "https://www.instagram.com/dsports.sn/",                    icon: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01M7.5 2h9A5.5 5.5 0 0122 7.5v9A5.5 5.5 0 0116.5 22h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2z" },
              { label: "YouTube",   href: "https://www.youtube.com/channel/UCbx9bc6eFHKXRl4wS8H7lfQ", icon: "M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" },
            ].map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:bg-[#CC0000] hover:text-white transition-colors"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round">
                  <path d={icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Nav columns */}
        {footerCols.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h3 className="text-xs font-black text-white uppercase tracking-widest mb-4 pb-2 border-b border-white/15">
              {col.title}
            </h3>
            <ul className="flex flex-col gap-2">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="xl:max-w-[1240px] mx-auto px-4 md:px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
        <p className="text-xs text-white/40">© 2026 DSports TV — Tous droits réservés. Dakar, Sénégal.</p>
        <p className="hidden sm:block text-xs text-white/40">Comprendre le sport sénégalais, au-delà du terrain.</p>
      </div>
    </footer>
  );
}
