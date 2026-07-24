import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLang, useT } from "../lib/i18n";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { lang, toggle } = useLang();
  const t = useT();

  const navItems = [
    { to: "/", label: t("Home", "Home") },
    { to: "/struttura", label: t("La struttura", "The house") },
    { to: "/alloggi", label: t("Alloggi", "Rooms") },
    { to: "/dintorni", label: t("Dintorni", "Around") },
    { to: "/recensioni", label: t("Recensioni", "Reviews") },
    { to: "/contatti", label: t("Contatti", "Contact") },
  ] as const;

  const other: "IT" | "EN" = lang === "it" ? "EN" : "IT";
  const current: "IT" | "EN" = lang === "it" ? "IT" : "EN";
  const ariaSwitch = t(`Passa all'inglese`, "Switch to Italian");

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2.5 font-serif text-xl tracking-tight">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-primary/50 font-serif text-base font-light text-primary" aria-hidden>
            <span className="absolute inset-[3px] rounded-full border border-primary/30" />
            <span className="absolute inset-[5px] rounded-full border border-primary/20" />
            <span className="relative -translate-y-px">C</span>
            <span className="absolute bottom-1.5 h-0.5 w-0.5 rounded-full bg-primary/70" />
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
            onClick={toggle}
            aria-label={ariaSwitch}
            title={ariaSwitch}
            className="hidden items-center gap-1 rounded-full border border-border/70 px-2.5 py-1 text-[11px] font-medium tracking-widest text-foreground/70 transition hover:border-primary/60 hover:text-primary md:inline-flex"
          >
            <span className="text-foreground">{current}</span>
            <span aria-hidden className="text-foreground/30">/</span>
            <span>{other}</span>
          </button>
          <Link
            to="/contatti"
            className="hidden rounded-full bg-primary px-5 py-2 text-xs font-medium uppercase tracking-widest text-primary-foreground transition hover:opacity-90 md:inline-block"
          >
            {t("Prenota", "Book")}
          </Link>
          <button
            onClick={toggle}
            aria-label={ariaSwitch}
            className="inline-flex items-center gap-1 rounded-full border border-border/70 px-2.5 py-1 text-[11px] font-medium tracking-widest text-foreground/70 md:hidden"
          >
            <span className="text-foreground">{current}</span>
            <span aria-hidden className="text-foreground/30">/</span>
            <span>{other}</span>
          </button>
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
          </nav>
        </div>
      )}
    </header>
  );
}
