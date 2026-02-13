"use client";

import { useMemo, useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHero } from "@/components/shared/page-hero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const filters = ["All", "Starter Locs", "Maintenance", "Styles", "Treatments"] as const;

const items = Array.from({ length: 18 }).map((_, i) => {
  const labels = ["Starter Locs", "Maintenance", "Styles", "Treatments"];
  const label = labels[i % labels.length];
  return {
    id: i + 1,
    category: label,
    title: `${label} Look ${i + 1}`
  };
});

export function GalleryClient() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");
  const [activeItem, setActiveItem] = useState<(typeof items)[number] | null>(null);

  const filtered = useMemo(
    () => (activeFilter === "All" ? items : items.filter((item) => item.category === activeFilter)),
    [activeFilter]
  );

  return (
    <>
      <PageHero title="Gallery" subtitle="Template placeholders for recent transformations and healthy-loc results." />
      <div className="mb-6 flex flex-wrap gap-2" role="tablist" aria-label="Gallery filters">
        {filters.map((filter) => (
          <Button
            key={filter}
            variant={activeFilter === filter ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveFilter(filter)}
            role="tab"
            aria-selected={activeFilter === filter}
          >
            {filter}
          </Button>
        ))}
      </div>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <button key={item.id} className="text-left" onClick={() => setActiveItem(item)} aria-label={`Open ${item.title}`}>
            <Card className="group overflow-hidden p-0">
              <div className="flex h-48 items-end bg-gradient-to-br from-pink-100 via-white to-rose-100 p-4 transition-transform duration-300 group-hover:scale-[1.02]">
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{item.category}</p>
                  <p className="font-medium">{item.title}</p>
                </div>
              </div>
            </Card>
          </button>
        ))}
      </section>

      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4"
            onClick={() => setActiveItem(null)}
            onKeyDown={(e) => e.key === "Escape" && setActiveItem(null)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              className="relative w-full max-w-xl rounded-xl bg-white p-5"
              role="dialog"
              aria-modal="true"
              aria-label={activeItem.title}
              onClick={(e) => e.stopPropagation()}
            >
              <button aria-label="Close lightbox" className="absolute right-3 top-3 rounded-md p-2" onClick={() => setActiveItem(null)}>
                <X className="h-4 w-4" />
              </button>
              <div className="h-80 rounded-lg bg-gradient-to-br from-rose-100 to-white p-4">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{activeItem.category}</p>
                <p className="mt-2 text-lg font-semibold">{activeItem.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">Placeholder image block — replace with real before/after media.</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
