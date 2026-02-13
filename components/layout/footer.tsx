import Link from "next/link";
import { Instagram, Music2 } from "lucide-react";
import { brand, navLinks } from "@/lib/brand";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/70 bg-white/80 py-12">
      <div className="container grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="font-semibold">{brand.name}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{brand.tagline}</p>
          <p className="mt-2 text-sm text-muted-foreground">Hours: {brand.hours}</p>
          <p className="text-sm text-muted-foreground">{brand.address}</p>
        </div>
        <div>
          <h4 className="font-medium">Explore</h4>
          <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link className="hover:text-foreground" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-medium">Social</h4>
          <div className="mt-3 flex gap-3">
            <Link aria-label="Instagram" href={brand.social.instagram} className="rounded-full bg-accent p-2">
              <Instagram className="h-4 w-4" />
            </Link>
            <Link aria-label="TikTok" href={brand.social.tiktok} className="rounded-full bg-accent p-2">
              <Music2 className="h-4 w-4" />
            </Link>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">{brand.phone}</p>
          <p className="text-sm text-muted-foreground">{brand.email}</p>
        </div>
      </div>
    </footer>
  );
}
