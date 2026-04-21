interface BreakingNewsBarProps {
  items: string[];
}

export default function BreakingNewsBar({ items }: BreakingNewsBarProps) {
  return (
    <div
      className="bg-[#CC0000] text-white h-[34px] flex items-center overflow-hidden z-40 relative select-none"
      aria-label="Fil d'actualités en direct"
    >
      {/* Label */}
      <span className="bg-[#7f0000] text-[10px] font-black tracking-[1.5px] uppercase px-4 h-full flex items-center shrink-0 relative z-10 after:content-[''] after:absolute after:right-[-8px] after:top-0 after:border-t-[17px] after:border-b-[17px] after:border-l-[8px] after:border-t-transparent after:border-b-transparent after:border-l-[#7f0000]">
        EN DIRECT
      </span>

      {/* Scrolling content */}
      <div className="overflow-hidden flex-1 pl-6">
        <div className="flex items-center animate-[ticker_30s_linear_infinite] whitespace-nowrap w-max">
          {/* Duplicated for seamless loop */}
          {[...items, ...items].map((item, i) => (
            <span key={i} className="text-sm font-medium pr-16">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
