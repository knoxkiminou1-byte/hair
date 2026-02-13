import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About",
  description: "Template about page for hairstylist and loctician websites."
};

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Bloom & Byte" subtitle="A warm, modern studio blending technique, education, and soft glam care." />

      <section className="grid gap-4 md:grid-cols-2">
        <Card>
          <h2 className="text-xl font-semibold">Our Story</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Bloom & Byte Loc Studio began as a small weekend chair rental and evolved into a focused scalp-care practice serving clients who wanted beautiful results without compromising hair health. The brand combines technical consistency with a calm studio rhythm.
          </p>
        </Card>
        <div className="grid gap-4">
          {[
            ["Care First", "Every service starts with scalp and tension awareness."],
            ["Modern Methods", "Technique is updated regularly through education."],
            ["Client Clarity", "Clear prep, clear policies, clear maintenance plans."]
          ].map(([title, text]) => (
            <Card key={title}>
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-4 md:grid-cols-[1.2fr_1fr]">
        <Card>
          <h2 className="text-xl font-semibold">Meet the Loctician</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Nia Bloom is a fictional lead loctician known for lightweight retwists, precision parts, and client-friendly education. Her sessions prioritize healthy growth and styling longevity.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" />8 years experience</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" />Scalp care focused</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" />Protective styling specialist</li>
          </ul>
        </Card>
        <Card>
          <h3 className="font-semibold">Studio Standards</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>Sanitation protocols before and after every appointment.</li>
            <li>Consultation-led recommendations tailored to your loc phase.</li>
            <li>Hair-health centered products and low-residue techniques.</li>
          </ul>
        </Card>
      </section>

      <section className="mt-12">
        <Card>
          <h2 className="text-xl font-semibold">Community</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            This template includes room for neighborhood partnerships, student mentorship spotlights, and quarterly care workshops—perfect for studios that want to stay rooted in community while scaling professionally.
          </p>
        </Card>
      </section>
    </>
  );
}
