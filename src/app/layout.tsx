import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DSports TV — L'actualité du football sénégalais",
  description: "Le média sportif sénégalais de référence. Actualités football, Ligue 1, équipes nationales, DSports TV.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-white text-gray-900 antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
