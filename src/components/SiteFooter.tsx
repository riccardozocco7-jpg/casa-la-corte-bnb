import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Phone, Mail } from "lucide-react";
import { useT } from "../lib/i18n";

export function SiteFooter() {
  const t = useT();
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4 md:px-6">
        <div>
          <div className="font-serif text-2xl">Corte degli Angeli</div>
          <p className="mt-3 text-sm text-muted-foreground">
            {t("Un rifugio di famiglia nel cuore del Salento.", "A family retreat in the heart of Salento.")}
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-xs uppercase tracking-widest text-foreground/60">{t("Naviga", "Explore")}</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/struttura" className="hover:text-primary">{t("La struttura", "The house")}</Link></li>
            <li><Link to="/alloggi" className="hover:text-primary">{t("Alloggi", "Rooms")}</Link></li>
            <li><Link to="/dintorni" className="hover:text-primary">{t("Dintorni", "Around")}</Link></li>
            <li><Link to="/contatti" className="hover:text-primary">{t("Contatti", "Contact")}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-xs uppercase tracking-widest text-foreground/60">{t("Contatti", "Contact")}</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +39 · 3209717096</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> email · marcello.zocco2@gmail.com</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-xs uppercase tracking-widest text-foreground/60">{t("Seguici", "Follow us")}</h4>
          <div className="flex gap-3">
            <a href="#" aria-label="Instagram" className="rounded-full border border-border p-2 hover:border-primary hover:text-primary">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Facebook" className="rounded-full border border-border p-2 hover:border-primary hover:text-primary">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Corte degli Angeli · Tricase, Salento
      </div>
    </footer>
  );
}
