import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/struttura", label: "La struttura" },
  { to: "/alloggi", label: "Alloggi" },
  { to: "/dintorni", label: "Dintorni" },
  { to: "/recensioni", label: "Recensioni" },
  { to: "/contatti", label: "Contatti" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"IT" | "EN">("IT");

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2 font-serif text-xl tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/60 font-serif text-base font-medium text-primary" aria-hidden>
            C
          </span>
          <span>Corte degli Angeli</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-foreground/75 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "IT" ? "EN" : "IT")}
            className="hidden text-xs font-medium tracking-widest text-foreground/60 hover:text-primary md:block"
            aria-label="Cambia lingua"
          >
            {lang} / {lang === "IT" ? "EN" : "IT"}
          </button>
          <a
            href="#"
            className="hidden rounded-full bg-primary px-5 py-2 text-xs font-medium uppercase tracking-widest text-primary-foreground transition hover:opacity-90 md:inline-block"
          >
            Prenota
          </a>
          <button
            className="md:hidden"
            aria-label="Menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
            {navItems.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2 text-base text-foreground/80"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <button
              onClick={() => setLang(lang === "IT" ? "EN" : "IT")}
              className="mt-2 self-start text-xs tracking-widest text-foreground/60"
            >
              {lang} / {lang === "IT" ? "EN" : "IT"}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
