import type { Metadata } from "next";
import { CalendarDays, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookForm } from "@/components/sections/book-form";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Book + Contact",
  description: "Booking and contact template page with a client-side validated request form."
};

export default function BookPage() {
  return (
    <>
      <PageHero title="Book + Contact" subtitle="Choose your booking path and we&apos;ll guide the rest." />
      <section className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-4">
          <Card>
            <h2 className="text-xl font-semibold">Book via Calendar</h2>
            <p className="mt-2 text-sm text-muted-foreground">Use your preferred booking platform with this placeholder link.</p>
            <Button href="#" className="mt-4">
              <CalendarDays className="mr-2 h-4 w-4" /> Open Calendar
            </Button>
          </Card>
          <BookForm />
        </div>

        <div className="space-y-4">
          <Card>
            <h3 className="font-semibold">Contact Info</h3>
            <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground"><Phone className="h-4 w-4" />{brand.phone}</p>
            <p className="mt-2 text-sm text-muted-foreground">{brand.email}</p>
            <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4" />{brand.address}</p>
          </Card>
          <Card>
            <h3 className="font-semibold">Map Placeholder</h3>
            <div className="mt-3 flex h-56 items-center justify-center rounded-md bg-gradient-to-br from-pink-100 to-white text-sm text-muted-foreground">
              Studio location map block
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
