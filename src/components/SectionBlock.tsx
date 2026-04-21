import Link from "next/link";

interface SectionBlockProps {
  title: string;
  accentColor?: string;
  seeAllHref?: string;
  children: React.ReactNode;
}

export default function SectionBlock({
  title,
  accentColor = "#CC0000",
  seeAllHref,
  children,
}: SectionBlockProps) {
  return (
    <section aria-labelledby={`section-${title.replace(/\s+/g, "-").toLowerCase()}`}>
      {/* Section header */}
      <div className="flex items-center justify-between mb-5 pb-3 border-b-2 border-gray-200">
        <h2
          id={`section-${title.replace(/\s+/g, "-").toLowerCase()}`}
          className="text-[18px] font-black text-gray-900 uppercase tracking-[0.5px] flex items-center gap-2.5"
        >
          <span
            className="w-[4px] h-[22px] rounded-sm inline-block shrink-0"
            style={{ background: accentColor }}
          />
          {title}
        </h2>
        {seeAllHref && (
          <Link
            href={seeAllHref}
            className="text-xs font-bold text-[#CC0000] uppercase tracking-wide hover:opacity-75 transition-opacity"
          >
            Voir tout →
          </Link>
        )}
      </div>

      {children}
    </section>
  );
}
