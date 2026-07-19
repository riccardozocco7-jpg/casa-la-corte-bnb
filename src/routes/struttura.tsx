import { createFileRoute } from "@tanstack/react-router";
import { PhotoPlaceholder } from "../components/PhotoPlaceholder";
import { Leaf, Users, Home } from "lucide-react";

export const Route = createFileRoute("/struttura")({
  head: () => ({
    meta: [
      { title: "La struttura — B&B Marcello" },
      { name: "description", content: "Storia, valori e sostenibilità del B&B Marcello nel Salento." },
      { property: "og:title", content: "La struttura — B&B Marcello" },
      { property: "og:description", content: "Storia, valori e sostenibilità di un B&B familiare nel Salento." },
    ],
  }),
  component: Struttura,
});

function Struttura() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-24">
      <p className="mb-3 text-xs uppercase tracking-[0.25em] text-primary">La struttura</p>
      <h1 className="max-w-3xl font-serif text-5xl leading-tight">
        Una casa di famiglia diventata luogo di ospitalità.
      </h1>

      <div className="mt-12">
        <PhotoPlaceholder label="Panoramica della struttura" ratio="wide" />
      </div>

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-3xl">La storia</h2>
          <p className="mt-4 text-muted-foreground">
            La casa è nata come dimora di famiglia, tra gli ulivi del Salento. Marcello e Rosaria,
            insieme ai figli, l'hanno aperta agli ospiti mantenendo intatto il carattere autentico
            del luogo: pietra, calce, legno, e i ritmi lenti della campagna salentina.
          </p>
        </div>
        <div>
          <h2 className="font-serif text-3xl">La famiglia</h2>
          <p className="mt-4 text-muted-foreground">
            Marcello si occupa dell'accoglienza. Rosaria della cucina e delle colazioni. I tre
            figli — Riccardo, Andrea e Giorgio — danno il nome ai tre alloggi. È un B&amp;B a
            conduzione familiare nel senso più pieno del termine.
          </p>
        </div>
      </div>

      <div className="mt-20">
        <p className="mb-3 text-xs uppercase tracking-[0.25em] text-accent">Sostenibilità</p>
        <h2 className="font-serif text-4xl">Un'ospitalità che rispetta il luogo.</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {[
            { icon: Leaf, title: "Materiali naturali", body: "Pietra locale, calce, legno. Nessuna finitura sintetica negli ambienti." },
            { icon: Home, title: "Energia rinnovabile", body: "Pannelli fotovoltaici e solare termico coprono buona parte dei consumi." },
            { icon: Users, title: "Filiera corta", body: "Colazione con prodotti dei contadini della zona e olio di famiglia." },
          ].map((v) => (
            <div key={v.title} className="rounded-lg border border-border bg-card p-6">
              <v.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
              <h3 className="mt-4 font-serif text-2xl">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
