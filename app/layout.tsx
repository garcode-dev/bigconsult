import type { Metadata } from "next";
import "@fontsource-variable/schibsted-grotesk";
import "./globals.css";
import { site } from "@/content/site";

// TODO: add metadataBase with the live domain, and public/og.png (1200×630) as the share image.
export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    siteName: site.name,
    type: "website",
    locale: "en_NG",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NG">
      <body>{children}</body>
    </html>
  );
}
