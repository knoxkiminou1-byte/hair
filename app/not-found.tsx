import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">404</p>
      <h1 className="mt-2 text-4xl font-semibold">Page not found</h1>
      <p className="mt-3 text-muted-foreground">The page you requested doesn&apos;t exist in this template demo.</p>
      <Button href="/" className="mt-6">
        Back Home
      </Button>
    </section>
  );
}
