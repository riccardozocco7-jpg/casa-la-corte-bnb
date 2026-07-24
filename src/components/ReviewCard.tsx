import { useState } from "react";
import { Star } from "lucide-react";
import type { Recensione } from "../data/recensioni";
import { useT } from "../lib/i18n";

const TRUNC = 220;

export function ReviewCard({ r, expandable = true }: { r: Recensione; expandable?: boolean }) {
  const [open, setOpen] = useState(false);
  const t = useT();
  const isLong = r.testo.length > TRUNC;
  const shown = !expandable || open || !isLong ? r.testo : r.testo.slice(0, TRUNC).trimEnd() + "…";

  return (
    <article className="flex h-full flex-col rounded-2xl border border-border/70 bg-background p-7 shadow-sm">
      <p className="font-serif text-lg leading-tight">{r.autore}</p>
      <div className="mt-2 flex gap-0.5" aria-label={t(`${r.stelle} stelle su 5`, `${r.stelle} out of 5 stars`)}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={
              i < r.stelle ? "h-4 w-4 fill-primary text-primary" : "h-4 w-4 text-foreground/20"
            }
            strokeWidth={1.5}
          />
        ))}
      </div>
      <p className="mt-5 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
        {shown}
      </p>
      {expandable && isLong && (
        <button
          onClick={() => setOpen((o) => !o)}
          className="mt-4 self-start text-xs uppercase tracking-widest text-primary hover:opacity-70"
        >
          {open ? t("Mostra meno", "Show less") : t("Leggi tutto", "Read more")}
        </button>
      )}
    </article>
  );
}
