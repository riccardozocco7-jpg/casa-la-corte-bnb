import { createFileRoute } from "@tanstack/react-router";
import { PhotoPlaceholder } from "../components/PhotoPlaceholder";
import { Leaf, Home } from "lucide-react";

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

      <div className="mt-12 max-w-3xl space-y-5 text-muted-foreground">
        <h2 className="font-serif text-3xl text-foreground">La struttura</h2>
        <p>
          Nel cuore del centro storico di Tricase sorge Corte degli Angeli, un'elegante dimora
          storica recentemente restaurata che custodisce l'anima autentica del Salento. Situata a
          soli 3 km dalla splendida costa sud-adriatica, la struttura nasce all'interno di un'antica
          corte salentina, dove il fascino dell'architettura tradizionale si fonde armoniosamente
          con i comfort moderni, offrendo agli ospiti un soggiorno all'insegna del relax, della
          storia e dell'ospitalità.
        </p>
        <p>
          Ogni ambiente è stato recuperato con grande attenzione, preservando gli elementi originali
          che raccontano il passato della dimora. Tra questi spicca l'antico granaio, testimonianza
          della vita rurale di un tempo, oggi valorizzato come parte integrante della struttura e
          della sua identità. Un luogo ricco di memoria che permette agli ospiti di immergersi nella
          storia del territorio e di scoprire le tradizioni della cultura salentina.
        </p>
        <p>
          A rendere ancora più preziosa Corte degli Angeli è la presenza di antichi dipinti della
          Madonna, risalenti a oltre due secoli fa. Queste opere, custodite all'interno della dimora,
          rappresentano un importante patrimonio storico e artistico, contribuendo a creare
          un'atmosfera unica, dove arte, spiritualità e tradizione convivono in perfetto equilibrio.
        </p>
        <p>
          Il vero cuore della struttura è l'ampia corte privata a cielo aperto, uno spazio riservato
          e silenzioso dove il tempo sembra rallentare. Qui gli ospiti possono concedersi momenti di
          tranquillità, leggere un libro, gustare una colazione all'aperto o semplicemente lasciarsi
          avvolgere dalla quiete tipica delle antiche corti salentine.
        </p>
        <p>
          Grazie alla sua posizione privilegiata, Corte degli Angeli permette di vivere appieno il
          fascino del centro storico di Tricase, con le sue viuzze, i palazzi storici e le botteghe
          locali, rimanendo allo stesso tempo a pochi minuti dalle suggestive scogliere e dalle
          acque cristalline della costa adriatica del Salento.
        </p>
        <p>
          Soggiornare a Corte degli Angeli significa scegliere un luogo dove storia, autenticità e
          comfort si incontrano, regalando un'esperienza che va oltre la semplice vacanza: un
          viaggio nella cultura e nelle tradizioni di una delle terre più affascinanti della Puglia.
        </p>
      </div>

      <div className="mt-20">
        <p className="mb-3 text-xs uppercase tracking-[0.25em] text-accent">Sostenibilità</p>
        <h2 className="font-serif text-4xl">Un'ospitalità che rispetta il luogo.</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {[
            { icon: Leaf, title: "Materiali tradizionali" },
            { icon: Home, title: "Energia rinnovabile" },
          ].map((v) => (
            <div key={v.title} className="rounded-lg border border-border bg-card p-6">
              <v.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
              <h3 className="mt-4 font-serif text-2xl">{v.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
