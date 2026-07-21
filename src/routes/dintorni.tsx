import { createFileRoute } from "@tanstack/react-router";
import { PhotoPlaceholder } from "../components/PhotoPlaceholder";

export const Route = createFileRoute("/dintorni")({
  head: () => ({
    meta: [
      { title: "Dintorni — Corte degli Angeli" },
      { name: "description", content: "Mare, borghi e Castro: cosa vedere nei dintorni di Corte degli Angeli nel Salento." },
      { property: "og:title", content: "Dintorni — Corte degli Angeli" },
      { property: "og:description", content: "Mare del Salento, borghi vicini e Castro." },
    ],
  }),
  component: Dintorni,
});

const luoghi = [
  {
    nome: "Tricase Porto",
    body: "Un piccolo porto a cinque minuti di auto. ",
  },
  {
    nome: "Marina Serra",
    body: "Piscina naturale scavata nella roccia. Acqua trasparente, ideale per lo snorkeling.",
  },
  {
    nome: "Pescoluse — le Maldive del Salento",
    body: "Sabbia bianca e fondali bassi. La spiaggia più famosa della zona, splendida al mattino.",
  },
  {
    nome: "Torre Vado",
    body: "Cala di sabbia protetta, con una torre di avvistamento del Cinquecento.",
  },
  {
    nome: "Castro",
    body: "Borgo antico affacciato sull'Adriatico, con la sua marina e la grotta della Zinzulusa.",
  },
  {
    nome: "Borghi vicini",
    body: "Specchia, Alessano, Presicce: piccoli centri di pietra bianca, botteghe e cortili.",
  },
];

function Dintorni() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <p className="mb-3 text-xs uppercase tracking-[0.25em] text-primary">Dintorni</p>
      <h1 className="font-serif text-5xl">Il Salento intorno a noi.</h1>
      <p className="mt-5 max-w-xl text-muted-foreground">
        Alcuni dei luoghi che consigliamo di raggiungere in giornata partendo da Corte Degli Angeli.
      </p>

      <div className="mt-14 grid gap-10 md:grid-cols-2">
        {luoghi.map((l) => (
          <article key={l.nome}>
            <PhotoPlaceholder label={l.nome} ratio="landscape" />
            <h2 className="mt-4 font-serif text-2xl">{l.nome}</h2>
            <p className="mt-2 text-muted-foreground">{l.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
