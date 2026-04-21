import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionBlock from "@/components/SectionBlock";
import VideoCard from "@/components/VideoCard";
import type { Video } from "@/types";
import videosData from "@/data/videos.json";

const videos = videosData as Video[];
const featured = videos.find((v) => v.isFeatured);
const rest = videos.filter((v) => !v.isFeatured);

export const metadata = {
  title: "DSports TV — Vidéos",
  description: "Résumés de matchs, interviews et analyses en vidéo sur DSports TV.",
};

export default function TvPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-[#0a0a0a] py-10">
        <div className="max-w-[1240px] mx-auto px-5">
          <SectionBlock title="DSports TV" accentColor="#CC0000" seeAllHref="/tv">
            <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-4">
              {featured && <VideoCard video={featured} featured />}
              {rest.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </SectionBlock>
        </div>
      </main>
      <Footer />
    </>
  );
}
