import { createFileRoute } from "@tanstack/react-router";

import { Leaf, Home } from "lucide-react";
import { useT } from "../lib/i18n";

export const Route = createFileRoute("/struttura")({
  head: () => ({
    meta: [
      { title: "La struttura — Corte degli Angeli" },
      { name: "description", content: "Storia, valori e sostenibilità di Corte degli Angeli nel Salento." },
      { property: "og:title", content: "La struttura — Corte degli Angeli" },
      { property: "og:description", content: "Storia, valori e sostenibilità di una casa vacanza familiare nel Salento." },
    ],
  }),
  component: Struttura,
});

function Struttura() {
  const t = useT();
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-24">
      <p className="mb-3 text-xs uppercase tracking-[0.25em] text-primary">{t("La struttura", "The house")}</p>
      <h1 className="max-w-3xl font-serif text-5xl leading-tight">
        {t("Una casa di famiglia diventata luogo di ospitalità.", "A family home turned into a place of hospitality.")}
      </h1>


      <div className="mt-12 max-w-3xl space-y-5 text-muted-foreground">
        <h2 className="font-serif text-3xl text-foreground">{t("La struttura", "The house")}</h2>
        <p>
          {t(
            "Nel cuore del centro storico di Tricase sorge Corte degli Angeli, un'elegante dimora storica recentemente restaurata che custodisce l'anima autentica del Salento. Situata a soli 3 km dalla splendida costa sud-adriatica, la struttura nasce all'interno di un'antica corte salentina, dove il fascino dell'architettura tradizionale si fonde armoniosamente con i comfort moderni, offrendo agli ospiti un soggiorno all'insegna del relax, della storia e dell'ospitalità.",
            "In the heart of Tricase's old town stands Corte degli Angeli, an elegant, recently restored historic home that preserves the authentic soul of Salento. Just 3 km from the beautiful southern Adriatic coast, the property sits within an ancient Salentine courtyard, where traditional architecture blends seamlessly with modern comfort, giving guests a stay marked by rest, history and hospitality.",
          )}
        </p>
        <p>
          {t(
            "Ogni ambiente è stato recuperato con grande attenzione, preservando gli elementi originali che raccontano il passato della dimora. Tra questi spicca l'antico granaio, testimonianza della vita rurale di un tempo, oggi valorizzato come parte integrante della struttura e della sua identità. Un luogo ricco di memoria che permette agli ospiti di immergersi nella storia del territorio e di scoprire le tradizioni della cultura salentina.",
            "Every space has been restored with great care, preserving the original elements that tell the story of the house. Among them stands out the old granary, a witness to rural life of the past, now an integral part of the property and its identity — a place full of memory that lets guests immerse themselves in the history of the region and the traditions of Salento.",
          )}
        </p>
        <p>
          {t(
            "A rendere ancora più preziosa Corte degli Angeli è la presenza di antichi dipinti della Madonna, risalenti a oltre due secoli fa. Queste opere, custodite all'interno della dimora, rappresentano un importante patrimonio storico e artistico, contribuendo a creare un'atmosfera unica, dove arte, spiritualità e tradizione convivono in perfetto equilibrio.",
            "What makes Corte degli Angeli even more precious are the ancient paintings of the Madonna, dating back more than two centuries. Kept inside the house, they represent an important historical and artistic heritage and contribute to a unique atmosphere where art, spirituality and tradition live in perfect balance.",
          )}
        </p>
        <p>
          {t(
            "Il vero cuore della struttura è l'ampia corte privata a cielo aperto, uno spazio riservato e silenzioso dove il tempo sembra rallentare. Qui gli ospiti possono concedersi momenti di tranquillità, leggere un libro, gustare una colazione all'aperto o semplicemente lasciarsi avvolgere dalla quiete tipica delle antiche corti salentine.",
            "The true heart of the property is the large private open-air courtyard, a quiet, secluded space where time seems to slow down. Here guests can enjoy moments of calm, read a book, have breakfast outside or simply let themselves be wrapped in the stillness typical of ancient Salentine courtyards.",
          )}
        </p>
        <p>
          {t(
            "Grazie alla sua posizione privilegiata, Corte degli Angeli permette di vivere appieno il fascino del centro storico di Tricase, con le sue viuzze, i palazzi storici e le botteghe locali, rimanendo allo stesso tempo a pochi minuti dalle suggestive scogliere e dalle acque cristalline della costa adriatica del Salento.",
            "Thanks to its privileged location, Corte degli Angeli lets you fully enjoy the charm of Tricase's old town — its narrow lanes, historic palaces and local workshops — while staying just minutes from the striking cliffs and crystal-clear waters of the Salento Adriatic coast.",
          )}
        </p>
        <p>
          {t(
            "Soggiornare a Corte degli Angeli significa scegliere un luogo dove storia, autenticità e comfort si incontrano, regalando un'esperienza che va oltre la semplice vacanza: un viaggio nella cultura e nelle tradizioni di una delle terre più affascinanti della Puglia.",
            "Staying at Corte degli Angeli means choosing a place where history, authenticity and comfort come together, offering an experience that goes beyond a simple holiday: a journey into the culture and traditions of one of the most fascinating lands of Puglia.",
          )}
        </p>
      </div>

      <div className="mt-20">
        <p className="mb-3 text-xs uppercase tracking-[0.25em] text-accent">{t("Sostenibilità", "Sustainability")}</p>
        <h2 className="font-serif text-4xl">{t("Un'ospitalità che rispetta il luogo.", "Hospitality that respects the place.")}</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {[
            { icon: Leaf, title: t("Materiali tradizionali", "Traditional materials") },
            { icon: Home, title: t("Energia rinnovabile", "Renewable energy") },
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
