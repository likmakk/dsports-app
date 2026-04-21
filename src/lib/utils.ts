import type { Article, Category } from "@/types";
import articlesData from "@/data/articles.json";

// ─── Raw data cast ────────────────────────────────────────────────────────────
const _articles = articlesData as Article[];

// ─── Slug normalization ───────────────────────────────────────────────────────

/** Strips accents, lowercases, and collapses non-alphanumeric chars to hyphens. */
export function normalizeSlug(raw: string): string {
  return raw
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

// ─── CMS helpers ─────────────────────────────────────────────────────────────

/** Returns all articles, newest first. */
export function getAllArticles(): Article[] {
  return [..._articles].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

/** Returns a single article by slug, or undefined if not found. */
export function getArticleBySlug(slug: string): Article | undefined {
  return _articles.find((a) => normalizeSlug(a.slug) === slug);
}

/** Returns articles matching a category (or multiple categories). */
export function getArticlesByCategory(category: Category | Category[]): Article[] {
  const cats = Array.isArray(category) ? category : [category];
  return getAllArticles().filter((a) => cats.includes(a.category));
}

/** Returns articles written by external contributors (authorRole is set), newest first. */
export function getContributorArticles(): Article[] {
  return getAllArticles().filter((a) => Boolean(a.authorRole));
}

/** Returns the top N articles by view count, highest first. Articles without views are excluded. */
export function getMostReadArticles(n: number): Article[] {
  return [..._articles]
    .filter((a) => (a.views ?? 0) > 0)
    .sort((a, b) => (b.views ?? 0) - (a.views ?? 0))
    .slice(0, n);
}

// ─── Category colour map ──────────────────────────────────────────────────────

const categoryColors: Record<Category, string> = {
  national: "bg-red-700",
  ligue1:   "bg-purple-800",
  local:    "bg-green-700",
  africa:   "bg-orange-700",
  corner:   "bg-red-700",
  tv:       "bg-red-700",
};

export function getCategoryColor(category: Category): string {
  return categoryColors[category] ?? "bg-gray-600";
}

export function formatViews(views: number): string {
  if (views >= 1000) return `${(views / 1000).toFixed(1)}K vues`;
  return `${views} vues`;
}

/** Returns the CSS object-position value for an image based on its orientation.
 *  Portrait images anchor to the top so faces/subjects are not cropped. */
export function getImageObjectPosition(orientation: "landscape" | "portrait"): string {
  return orientation === "portrait" ? "top" : "center";
}

/** Returns the CSS object-position for an article image.
 *  Uses article.imagePosition when set, otherwise falls back to orientation-based default. */
export function resolveImagePosition(article: { imageOrientation: "landscape" | "portrait"; imagePosition?: string }): string {
  return article.imagePosition ?? getImageObjectPosition(article.imageOrientation);
}

// ─── Reading time ─────────────────────────────────────────────────────────────

/** Computes human-readable reading time from article content. ~200 wpm average. */
export function getReadingTime(content?: string, excerpt?: string): string {
  const text = content ?? excerpt ?? "";
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  const mins = Math.max(1, Math.ceil(wordCount / 200));
  return `${mins} min de lecture`;
}

// ─── Relative time ────────────────────────────────────────────────────────────

/** Converts an ISO date string to a French relative label ("Il y a 3h", "Hier", …). */
export function getRelativeTime(publishedAt: string): string {
  const pub = new Date(publishedAt);
  if (isNaN(pub.getTime())) return publishedAt;

  const diffMs = Date.now() - pub.getTime();
  if (diffMs < 0) return pub.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });

  const diffMins  = Math.floor(diffMs / 60_000);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays  = Math.floor(diffHours / 24);

  if (diffMins  < 1)  return "À l'instant";
  if (diffMins  < 60) return `Il y a ${diffMins}min`;
  if (diffHours < 24) return `Il y a ${diffHours}h`;
  if (diffDays  === 1) return "Hier";
  if (diffDays  < 7)  return `Il y a ${diffDays} jours`;

  return pub.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
}

// ─── Search ───────────────────────────────────────────────────────────────────

/** Strips accents and lowercases — used for accent-insensitive search matching. */
function normalizeText(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

/**
 * Full-text search over articles.
 * Scores: title match = 10pts, excerpt = 5pts, categoryLabel = 3pts, tags = 2pts.
 * Returns articles sorted by relevance score, highest first.
 */
export function searchArticles(query: string): Article[] {
  const q = normalizeText(query.trim());
  if (!q) return [];
  const tokens = q.split(/\s+/).filter(Boolean);

  const scored = _articles.map((article) => {
    const title    = normalizeText(article.title);
    const excerpt  = normalizeText(article.excerpt);
    const catLabel = normalizeText(article.categoryLabel);
    const tags     = (article.tags ?? []).map(normalizeText).join(" ");

    let score = 0;
    for (const token of tokens) {
      if (title.includes(token))    score += 10;
      if (excerpt.includes(token))  score += 5;
      if (catLabel.includes(token)) score += 3;
      if (tags.includes(token))     score += 2;
    }
    return { article, score };
  });

  return scored
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ article }) => article);
}
