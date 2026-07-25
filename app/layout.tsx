import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "O'Wash 34 | Nettoyage extérieur à Béziers",
  description: "Nettoyage extérieur à Béziers et alentours : terrasses, murets, véhicules et bacs roulants.",
  other: { "codex-preview": "development" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}
