import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloralBackground } from "@/components/shared/floral-bg";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  metadataBase: new URL("https://bloomandbyte.example.com"),
  title: {
    default: `${brand.name} | ${brand.tagline}`,
    template: `%s | ${brand.name}`
  },
  description: "Modern, soft-glam loc care website template built with Next.js.",
  openGraph: {
    title: brand.name,
    description: brand.tagline,
    url: "https://bloomandbyte.example.com",
    siteName: brand.name,
    locale: "en_US",
    type: "website"
  }
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: brand.name,
  description: brand.tagline,
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Petal Ave",
    addressLocality: "Oakland",
    addressRegion: "CA",
    postalCode: "94612"
  },
  telephone: brand.phone,
  email: brand.email,
  openingHours: "Tu-Sa 10:00-18:00",
  url: "https://bloomandbyte.example.com"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <FloralBackground />
        <Navbar />
        <main className="container min-h-screen pt-2">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  );
}
