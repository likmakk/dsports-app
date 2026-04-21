import Link from "next/link";
import type { FeedItem } from "@/types";

interface LiveFeedSidebarProps {
  items: FeedItem[];
}

export default function LiveFeedSidebar({ items }: LiveFeedSidebarProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-md overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 bg-[#0a0a0a] border-b-2 border-[#CC0000]">
        <h3 className="text-xs font-black text-white uppercase tracking-widest flex items-center gap-2">
          <span className="w-2 h-2 bg-[#CC0000] rounded-full animate-pulse" />
          Flux en direct
        </h3>
      </div>
      <ul
        className="max-h-[320px] overflow-y-auto"
        style={{ scrollbarWidth: "thin", scrollbarColor: "#CC0000 transparent" }}
        aria-label="Fil d'actualités en temps réel"
      >
        {items.map((item, i) => (
          <li
            key={i}
            className={`grid grid-cols-[44px_1fr] gap-2 px-4 py-3 border-b border-gray-100 last:border-b-0 items-start ${
              item.isBreaking ? "bg-red-50/50 border-l-2 border-l-[#CC0000]" : ""
            }`}
          >
            <time className="text-[11px] font-black text-[#CC0000] pt-0.5 tabular-nums">
              {item.time}
            </time>
            {item.slug ? (
              <Link
                href={`/article/${item.slug}`}
                className="text-[12px] text-gray-700 leading-snug hover:text-[#CC0000] transition-colors duration-150"
              >
                {item.isBreaking && (
                  <strong className="text-[#CC0000]">OFFICIEL — </strong>
                )}
                {item.isBreaking ? item.text.replace(/^OFFICIEL — /, "") : item.text}
              </Link>
            ) : (
              <p className="text-[12px] text-gray-700 leading-snug">
                {item.isBreaking && (
                  <strong className="text-[#CC0000]">OFFICIEL — </strong>
                )}
                {item.isBreaking ? item.text.replace(/^OFFICIEL — /, "") : item.text}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
