"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

const navLinks = [
  { label: "Accueil",           href: "/" },
  { label: "Actualités",        href: "/actualites" },
  { label: "Ligue 1",           href: "/competitions" },
  { label: "Équipes Nationales",href: "/equipes-nationales" },
  { label: "Foot Local",        href: "/foot-local" },
  { label: "Calendrier",        href: "/calendrier" },
  { label: "Classements",       href: "/classements" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  function handleSearch(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const q = (e.currentTarget.elements.namedItem("q") as HTMLInputElement).value.trim();
    if (q) router.push(`/recherche?q=${encodeURIComponent(q)}`);
  }

  return (
    <header className="bg-[#0a0a0a] border-b-2 border-[#CC0000] sticky top-0 z-50" role="banner">

      {/* ── Main bar ─────────────────────────────────────────────────────── */}
      <div className="xl:max-w-[1240px] mx-auto px-4 md:px-5 h-14 md:h-16 lg:h-20 flex items-center gap-4 lg:gap-6">

        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 lg:gap-3 shrink-0" aria-label="DSports TV — Accueil">
          <div className="relative h-[38px] w-[38px] md:h-[48px] md:w-[48px] lg:h-[64px] lg:w-[64px] shrink-0 rounded-lg overflow-hidden bg-white">
            <Image
              src="/logos/logo-header.jpeg"
              alt="DSports"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 38px, (max-width: 1024px) 48px, 64px"
              priority
            />
          </div>
          <div className="flex flex-col leading-none gap-1 lg:gap-1.5">
            <span className="text-[17px] md:text-[20px] lg:text-[26px] font-black text-white tracking-tight leading-none">DSports</span>
            <span className="self-start text-[8px] lg:text-[9px] font-black text-white bg-[#CC0000] tracking-[3px] uppercase px-1.5 py-0.5 rounded-sm">TV</span>
          </div>
        </Link>

        {/* Desktop nav — lg and above only */}
        <nav className="hidden lg:flex flex-1" role="navigation" aria-label="Navigation principale">
          <ul className="flex items-center gap-0.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="px-2.5 py-2 text-xs font-bold text-white/80 uppercase tracking-wide rounded hover:bg-white/10 hover:text-white transition-colors whitespace-nowrap"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/tv"
                className="ml-1 px-2.5 py-2 text-xs font-bold text-[#CC0000] uppercase tracking-wide border border-[#CC0000] rounded hover:bg-[#CC0000] hover:text-white transition-colors flex items-center gap-1.5 whitespace-nowrap"
              >
                <svg viewBox="0 0 20 14" width="13" height="9" aria-hidden="true">
                  <rect x="1" y="1" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <path d="M7 5l6 2-6 2V5z" fill="currentColor" />
                </svg>
                DSports TV
              </Link>
            </li>
          </ul>
        </nav>

        {/* Search icon — compact desktop only (1024–1279px) */}
        <Link
          href="/recherche"
          className="hidden lg:flex xl:hidden ml-auto p-2 text-white/70 hover:text-white transition-colors"
          aria-label="Rechercher"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <path d="M16.5 16.5L21 21" strokeLinecap="round" />
          </svg>
        </Link>

        {/* Full search form — large desktop only (1280px+) */}
        <form
          className="hidden xl:flex items-center bg-white/10 border border-white/15 rounded-full overflow-hidden shrink-0"
          role="search"
          aria-label="Rechercher sur DSports TV"
          onSubmit={handleSearch}
        >
          <input
            type="search"
            name="q"
            placeholder="Rechercher…"
            className="bg-transparent text-white text-sm px-3 py-2 w-40 outline-none placeholder:text-white/40"
            aria-label="Rechercher"
          />
          <button type="submit" className="px-3 py-2 text-white/70 hover:text-white transition-colors" aria-label="Lancer la recherche">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="M16.5 16.5L21 21" strokeLinecap="round" />
            </svg>
          </button>
        </form>

        {/* Hamburger — mobile and tablet (below lg) */}
        <button
          className="lg:hidden ml-auto p-2 text-white"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen
              ? <><path d="M18 6L6 18"/><path d="M6 6l12 12"/></>
              : <><path d="M3 6h18"/><path d="M3 12h18"/><path d="M3 18h18"/></>
            }
          </svg>
        </button>

      </div>

      {/* ── Mobile / tablet menu — below lg ──────────────────────────────── */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0a0a0a] border-t border-white/10 w-full" role="dialog" aria-label="Menu de navigation">

          {/* Search in menu */}
          <form
            className="px-4 md:px-5 pt-4 pb-2"
            role="search"
            aria-label="Rechercher"
            onSubmit={(e) => { handleSearch(e); setMenuOpen(false); }}
          >
            <div className="flex items-center bg-white/10 border border-white/15 rounded-full overflow-hidden">
              <input
                type="search"
                name="q"
                placeholder="Rechercher…"
                className="bg-transparent text-white text-sm px-4 py-2.5 flex-1 outline-none placeholder:text-white/40"
                aria-label="Rechercher"
              />
              <button type="submit" className="px-4 py-2.5 text-white/70 hover:text-white transition-colors" aria-label="Lancer la recherche">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="7" />
                  <path d="M16.5 16.5L21 21" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </form>

          {/* Nav links */}
          <nav className="px-4 md:px-5 pb-4" aria-label="Navigation mobile">
            <ul className="flex flex-col gap-0.5">
              {[...navLinks, { label: "DSports TV", href: "/tv" }].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block px-3 py-3 text-sm font-bold text-white/80 uppercase tracking-wide rounded hover:bg-white/10 hover:text-white transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

    </header>
  );
}
