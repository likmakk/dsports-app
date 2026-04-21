import type { Video } from "@/types";
import { formatViews, getRelativeTime } from "@/lib/utils";

interface VideoCardProps {
  video: Video;
  featured?: boolean;
}

export default function VideoCard({ video, featured = false }: VideoCardProps) {
  const thumbnail = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
  const thumbHeight = featured ? "h-[220px]" : "h-[140px]";
  const iconSize = featured ? 48 : 36;

  return (
    <article className="group bg-[#1a1a1a] rounded-md overflow-hidden hover:-translate-y-0.5 hover:shadow-2xl transition-all duration-200">
      <a href={video.youtubeUrl} target="_blank" rel="noopener noreferrer" className="block">
        {/* Thumbnail YouTube */}
        <div className={`${thumbHeight} relative overflow-hidden`}>
          <img
            src={thumbnail}
            alt={video.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          {video.badge && (
            <span className="absolute top-2 left-2 bg-[#CC0000] text-white text-[10px] font-black tracking-widest px-2 py-0.5 rounded z-10">
              {video.badge}
            </span>
          )}
          {/* Bouton Play */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-[#CC0000] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg viewBox="0 0 24 24" width={iconSize > 40 ? 22 : 16} height={iconSize > 40 ? 22 : 16} aria-hidden="true">
                <polygon points="6,4 20,12 6,20" fill="white" />
              </svg>
            </div>
          </div>
          {/* Durée */}
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
      </a>
    </article>
  );
}