export type Category =
  | "national"
  | "ligue1"
  | "local"
  | "africa"
  | "corner"
  | "tv";

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  category: Category;
  categoryLabel: string;
  author: string;
  authorRole?: string;
  publishedAt: string;
  timeAgo?: string;
  image?: string;
  imageHero?: string;
  imageGradient: string;
  imageOrientation: "landscape" | "portrait";
  imagePosition?: string;
  views?: number;
  tags?: string[];
  isBreaking?: boolean;
  isFeatured?: boolean;
}

export interface Video {
  id: string;
  title: string;
  duration: string;
  publishedAt: string;
  views: number;
  imageGradient: string;
  youtubeId?: string;
  badge?: string;
  isFeatured?: boolean;
  youtubeId?: string;
  youtubeUrl?: string;
}

export interface FeedItem {
  time: string;
  text: string;
  isBreaking?: boolean;
  slug?: string;
}

export interface StandingRow {
  rank: number;
  name: string;
  points: number;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  gd: number;
  color: string;
  status?: "leader" | "europe" | "relegation";
}

export interface ScoreCard {
  home: string;
  away: string;
  score: string;
  status: string;
  type: "live" | "final" | "upcoming";
}
