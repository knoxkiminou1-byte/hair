import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { brand } from "@/lib/brand";
import { popularServices, testimonials } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Home",
  description: "Homepage template for a modern hairstylist and loctician brand."
};

export default function HomePage() {
  return (
    <>
      <PageHero
        title="Healthy locs, soft glam finish, modern care."
        subtitle="A bright, polished salon template made for locticians who prioritize scalp health and consistent results."
      />

      <section className="grid gap-4 md:grid-cols-2 md:items-center">
        <Reveal>
          <h2 className="text-3xl font-semibold">{brand.tagline}</h2>
          <p className="mt-4 text-muted-foreground">
            Designed for brands that want a clean, trustworthy online presence with easy updates for services, gallery, and booking.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/book" size="lg">
              Book Now
            </Button>
            <Button href="/services" variant="outline" size="lg">
              View Services
            </Button>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <Card className="min-h-52 bg-gradient-to-br from-pink-50 via-white to-rose-50">
            <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Studio Snapshot</p>
            <p className="mt-4 text-2xl font-semibold">Modern loc care with a warm neighborhood feel.</p>
            <p className="mt-3 text-sm text-muted-foreground">{brand.address}</p>
          </Card>
        </Reveal>
      </section>

      <section className="mt-16 grid gap-4 md:grid-cols-3">
        {[
          "Starter Loc Journeys",
          "Healthy Scalp First",
          "Clean Retwist Finish"
        ].map((feature, idx) => (
          <Reveal key={feature} delay={idx * 0.08}>
            <Card className="transition-transform duration-300 hover:-translate-y-1">
              <h3 className="font-semibold">{feature}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Thoughtful appointments and custom care plans to keep every stage of your loc journey consistent and low stress.
              </p>
            </Card>
          </Reveal>
        ))}
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">Popular Services</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          {popularServices.map((service, idx) => (
            <Reveal key={service.name} delay={idx * 0.06}>
              <Card className="h-full">
                <p className="font-medium">{service.name}</p>
                <p className="mt-2 text-sm text-muted-foreground">{service.price}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">Client Love</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {testimonials.map((item, idx) => (
            <Reveal key={item.name + idx} delay={idx * 0.03}>
              <Card className="h-full">
                <p className="text-sm text-muted-foreground">“{item.quote}”</p>
                <p className="mt-3 font-medium">— {item.name}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-4 md:grid-cols-2">
        <Card>
          <h3 className="font-semibold">Before / After Teaser</h3>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-md bg-gradient-to-br from-rose-100 to-white p-6 text-center text-sm text-muted-foreground">Before</div>
            <div className="rounded-md bg-gradient-to-br from-pink-100 to-white p-6 text-center text-sm text-muted-foreground">After</div>
          </div>
        </Card>
        <Card>
          <h3 className="font-semibold">FAQ Preview</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>How should I prep before a retwist? Arrive with your hair detangled and product-light.</li>
            <li>Do you accept same-day appointments? Limited same-day slots open weekly.</li>
            <li>Can I book a consultation online? Yes, choose consultation when booking.</li>
          </ul>
        </Card>
      </section>

      <section className="mt-16 rounded-2xl bg-accent p-8 text-center shadow-soft">
        <h2 className="text-2xl font-semibold">Ready for your next appointment?</h2>
        <p className="mt-2 text-muted-foreground">Reserve your chair and let&apos;s build a consistent loc care routine.</p>
        <Button href="/book" className="mt-5">
          Book Now <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </section>
    </>
  );
}
