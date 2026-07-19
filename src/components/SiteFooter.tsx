import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Phone, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4 md:px-6">
        <div>
          <div className="font-serif text-2xl">B&amp;B Marcello</div>
          <p className="mt-3 text-sm text-muted-foreground">
            Un rifugio di famiglia nel cuore del Salento, tra ulivi e mare.
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-xs uppercase tracking-widest text-foreground/60">Naviga</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/struttura" className="hover:text-primary">La struttura</Link></li>
            <li><Link to="/alloggi" className="hover:text-primary">Alloggi</Link></li>
            <li><Link to="/dintorni" className="hover:text-primary">Dintorni</Link></li>
            <li><Link to="/contatti" className="hover:text-primary">Contatti</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-xs uppercase tracking-widest text-foreground/60">Contatti</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +39 · da inserire</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> email · da inserire</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-xs uppercase tracking-widest text-foreground/60">Seguici</h4>
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
        © {new Date().getFullYear()} B&amp;B Marcello · Tricase, Salento
      </div>
    </footer>
  );
}
