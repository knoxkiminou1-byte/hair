import type { Metadata } from "next";
import { GalleryClient } from "@/components/sections/gallery-client";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Placeholder gallery with filters and accessible lightbox interactions."
};

export default function GalleryPage() {
  return <GalleryClient />;
}
