import type { Video } from "@/types";
import { formatViews, getRelativeTime } from "@/lib/utils";
import Link from "next/link";

interface VideoCardProps {
  video: Video;
  featured?: boolean;
}

export default function VideoCard({ video, featured = false }: VideoCardProps) {
  const thumbHeight = featured ? "h-[220px]" : "h-[140px]";
  const iconSize = featured ? 48 : 36;

  return (
    <article className="group bg-[#1a1a1a] rounded-md overflow-hidden hover:-translate-y-0.5 hover:shadow-2xl transition-all duration-200">
      <Link href={`/tv#${video.id}`} className="block">
        {/* Thumbnail */}
        <div
          className={`${thumbHeight} relative flex items-center justify-center overflow-hidden`}
          aria-label={video.title}
        >
          <div
            className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.05]"
            style={{ background: video.imageGradient }}
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
          {video.badge && (
            <span className="absolute top-2 left-2 bg-[#CC0000] text-white text-[10px] font-black tracking-widest px-2 py-0.5 rounded z-10">
              {video.badge}
            </span>
          )}
          {/* Play icon */}
          <svg
            viewBox="0 0 24 24"
            width={iconSize}
            height={iconSize}
            aria-hidden="true"
            className="relative z-10 drop-shadow-lg transition-transform duration-300 group-hover:scale-110"
          >
            <circle cx="12" cy="12" r="11" fill="rgba(0,0,0,0.6)" />
            <polygon points="9,7 19,12 9,17" fill="white" />
          </svg>
          {/* Duration */}
          <span className="absolute bottom-2 right-2 bg-black/80 text-white text-[11px] font-bold px-1.5 py-0.5 rounded z-10">
            {video.duration}
          </span>
        </div>

        {/* Body */}
        <div className="p-3.5">
          <h3 className="text-[13px] font-bold text-white/90 line-clamp-2 leading-snug mb-2 group-hover:text-[#CC0000] transition-colors duration-200">
            {video.title}
          </h3>
          <div className="flex items-center gap-2 text-[11px] text-white/40">
            <time dateTime={video.publishedAt}>{getRelativeTime(video.publishedAt)}</time>
            {video.views > 0 && (
              <>
                <span>•</span>
                <span>{formatViews(video.views)}</span>
              </>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
}
