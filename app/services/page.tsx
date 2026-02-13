import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description: "Sample loctician pricing template with realistic service categories."
};

const categories = [
  {
    title: "Consultations",
    items: [
      ["New Client Consultation", "Personalized assessment + goals", "30 min", "$25"],
      ["Install Planning Session", "Loc sizing + method strategy", "45 min", "$45"]
    ]
  },
  {
    title: "Starter Locs",
    items: [
      ["Starter Locs Comb Coils", "Classic coil foundation", "3–4 hr", "from $200"],
      ["Two Strand Starter Locs", "Defined starter pattern", "3–4 hr", "from $220"],
      ["Instant Locs", "Mature look with crochet method", "4–6 hr", "from $450"]
    ]
  },
  {
    title: "Maintenance",
    items: [
      ["Wash + Retwist", "Cleanse and root maintenance", "90 min", "from $120"],
      ["Wash + Retwist + Simple Style", "Retwist with style finish", "2 hr", "from $150"],
      ["Interlock / Retighten", "Root tightening service", "2 hr", "from $140"],
      ["Microloc Retighten", "Precision grid maintenance", "2–3 hr", "from $160"]
    ]
  },
  {
    title: "Treatments",
    items: [
      ["Clarifying Scalp Reset", "Product removal and scalp refresh", "45 min", "$55"],
      ["ACV Loc Detox", "Residue release + hydration", "60–75 min", "from $85"],
      ["Deep Conditioning Add On", "Moisture and softness boost", "20 min", "$35"],
      ["Scalp Oil Therapy Add On", "Targeted scalp massage", "15 min", "$25"]
    ]
  },
  {
    title: "Repairs & Add Ons",
    items: [
      ["Loc Repair (per loc)", "Repair weak or thinning locs", "Varies", "from $15"],
      ["Reattach / Extension Repair (per loc)", "Secure and blend repair", "Varies", "from $20"],
      ["Half Head Extensions", "Natural blend extension install", "3–5 hr", "from $500"],
      ["Color Ends / Highlights", "Dimensional color placement", "2 hr", "from $160"]
    ]
  }
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Services & Pricing"
        subtitle="These are template prices for demo purposes and may vary by loc length, density, and loc count. Consultation required for installs."
      />

      <div className="space-y-8">
        {categories.map((category) => (
          <Card key={category.title}>
            <h2 className="text-xl font-semibold">{category.title}</h2>
            <div className="mt-4 space-y-3">
              {category.items.map(([name, desc, duration, price]) => (
                <div key={name} className="flex flex-col gap-1 rounded-md border border-border/70 p-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="font-medium">{name}</p>
                    <p className="text-sm text-muted-foreground">{desc}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{duration}</p>
                  <p className="font-medium">{price}</p>
                </div>
              ))}
            </div>
          </Card>
        ))}

        <section className="grid gap-4 md:grid-cols-2">
          <Card>
            <h3 className="font-semibold">What to Expect</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              <li>Consultations include scalp + hair analysis and realistic timeline guidance.</li>
              <li>Maintenance appointments focus on clean parts, scalp comfort, and balanced tension.</li>
              <li>Service timing may adjust based on loc count, density, and style complexity.</li>
            </ul>
          </Card>
          <Card>
            <h3 className="font-semibold">Prep Instructions</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              <li>Arrive with hair free of heavy oils and waxes unless instructed otherwise.</li>
              <li>Bring inspiration photos for install and styling sessions.</li>
              <li>Please communicate scalp sensitivities and product allergies ahead of time.</li>
            </ul>
          </Card>
        </section>

        <Card>
          <h3 className="font-semibold">Policies</h3>
          <div className="mt-3 grid gap-3 text-sm text-muted-foreground md:grid-cols-2">
            <p><strong>Deposit:</strong> 30% non-refundable deposit required for all new bookings.</p>
            <p><strong>Late Fee:</strong> 15+ minutes late adds a $20 fee; 25+ minutes may require reschedule.</p>
            <p><strong>Reschedule:</strong> Please reschedule at least 24 hours before your appointment.</p>
            <p><strong>No Show:</strong> No-shows forfeit deposit and require prepayment for next booking.</p>
          </div>
        </Card>
      </div>
    </>
  );
}
