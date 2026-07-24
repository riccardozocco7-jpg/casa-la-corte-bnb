import { createFileRoute } from "@tanstack/react-router";
import { PhotoPlaceholder } from "../components/PhotoPlaceholder";
import tricasePorto from "../assets/dintorni/tricase-porto.jpg.asset.json";
import marinaSerra from "../assets/dintorni/marina-serra.png.asset.json";
import pescoluse from "../assets/dintorni/pescoluse.jpeg.asset.json";
import torreVado from "../assets/dintorni/torre-vado.jpg.asset.json";
import castro from "../assets/dintorni/castro.jpg.asset.json";
import specchia from "../assets/dintorni/specchia.webp.asset.json";

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
    body: "Un piccolo porto a cinque minuti di auto.",
    img: tricasePorto.url,
  },
  {
    nome: "Marina Serra",
    body: "Piscina naturale scavata nella roccia. Acqua trasparente.",
    img: marinaSerra.url,
  },
  {
    nome: "Pescoluse — le Maldive del Salento",
    body: "Sabbia bianca e fondali bassi. La spiaggia più famosa della zona, splendida al mattino.",
    img: pescoluse.url,
  },
  {
    nome: "Torre Vado",
    body: "Cala di sabbia protetta, con una torre di avvistamento del Cinquecento.",
    img: torreVado.url,
  },
  {
    nome: "Castro",
    body: "Borgo antico affacciato sull'Adriatico, con la sua marina e la grotta della Zinzulusa.",
    img: castro.url,
  },
  {
    nome: "Specchia e i borghi vicini",
    body: "Specchia, Alessano, Presicce: piccoli centri di pietra bianca, botteghe e cortili.",
    img: specchia.url,
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
            {l.img ? (
              <div className="aspect-[4/3] overflow-hidden rounded-md bg-muted">
                <img src={l.img} alt={l.nome} className="h-full w-full object-cover" loading="lazy" />
              </div>
            ) : (
              <PhotoPlaceholder label={l.nome} ratio="landscape" />
            )}
            <h2 className="mt-4 font-serif text-2xl">{l.nome}</h2>
            <p className="mt-2 text-muted-foreground">{l.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

