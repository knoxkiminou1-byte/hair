"use client";

import { motion } from "framer-motion";

type PageHeroProps = {
  title: string;
  subtitle: string;
};

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="pb-10 pt-24 md:pt-28">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl text-center"
      >
        <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">{title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>
      </motion.div>
    </section>
  );
}
