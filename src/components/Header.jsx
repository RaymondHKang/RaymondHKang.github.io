import Link from "next/link";
import { navLinks, site } from "@/data/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-card-border/70 bg-background/80 backdrop-blur-md">
      <div className="section-shell flex items-center justify-between py-4">
        <Link
          href="/"
          className="text-sm font-semibold tracking-wide text-foreground"
        >
          {site.name}
        </Link>

        <nav aria-label="Primary">
          <ul className="flex items-center gap-1 sm:gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-3 py-2 text-sm text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={site.resumeUrl}
                className="btn-primary ml-1 hidden px-4 py-2 text-sm sm:inline-flex"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
