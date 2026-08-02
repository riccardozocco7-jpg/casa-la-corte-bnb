import { createFileRoute } from "@tanstack/react-router";
import { PhotoPlaceholder } from "../components/PhotoPlaceholder";
import tricasePorto from "../assets/dintorni/tricase-porto.jpg.asset.json";
import marinaSerra from "../assets/dintorni/marina-serra.png.asset.json";
import pescoluse from "../assets/dintorni/pescoluse.jpeg.asset.json";
import torreVado from "../assets/dintorni/torre-vado.jpg.asset.json";
import castro from "../assets/dintorni/castro.jpg.asset.json";
import specchia from "../assets/dintorni/specchia.webp.asset.json";
import grottaVerde from "../assets/dintorni/grotta-verde.jpg.asset.json";
import { useT } from "../lib/i18n";

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

function Dintorni() {
  const t = useT();

  const luoghi = [
    {
      nome: "Tricase Porto",
      body: t("Un piccolo porto a cinque minuti di auto.", "A little harbour, five minutes by car."),
      img: tricasePorto.url,
    },
    {
      nome: "Marina Serra",
      body: t("Piscina naturale scavata nella roccia. Acqua trasparente.", "Natural pool carved into the rock. Crystal-clear water."),
      img: marinaSerra.url,
    },
    {
      nome: t("Pescoluse — le Maldive del Salento", "Pescoluse — the Maldives of Salento"),
      body: t(
        "Sabbia bianca e fondali bassi. La spiaggia più famosa della zona, splendida al mattino.",
        "White sand and shallow waters. The most famous beach in the area, stunning in the morning.",
      ),
      img: pescoluse.url,
    },
    {
      nome: "Torre Vado",
      body: t(
        "Cala di sabbia protetta, con una torre di avvistamento del Cinquecento.",
        "A sheltered sandy cove with a 16th-century watchtower.",
      ),
      img: torreVado.url,
    },
    {
      nome: "Castro",
      body: t(
        "Borgo antico affacciato sull'Adriatico, con la sua marina e la grotta della Zinzulusa.",
        "An ancient village overlooking the Adriatic, with its marina and the Zinzulusa cave.",
      ),
      img: castro.url,
    },
    {
      nome: t("Specchia e i borghi vicini", "Specchia and nearby villages"),
      body: t(
        "Specchia, Alessano, Presicce: piccoli centri di pietra bianca, botteghe e cortili.",
        "Specchia, Alessano, Presicce: small white-stone towns full of workshops and courtyards.",
      ),
      img: specchia.url,
    },
    {
      nome: t("Grotta Verde di Marina di Andrano", "Grotta Verde in Marina di Andrano"),
      body: t(
        "Una cavità naturale sopra il mare in cui l'acqua assume riflessi verdi e smeraldini. Raggiungibile in giornata, regala uno spettacolo raro.",
        "A natural sea cave where the water takes on green and emerald reflections. A rare sight, perfect for a day trip.",
      ),
      img: "",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <p className="mb-3 text-xs uppercase tracking-[0.25em] text-primary">{t("Dintorni", "Around")}</p>
      <h1 className="font-serif text-5xl">{t("Il Salento intorno a noi.", "The Salento around us.")}</h1>
      <p className="mt-5 max-w-xl text-muted-foreground">
        {t(
          "Alcuni dei luoghi che consigliamo di raggiungere in giornata partendo da Corte Degli Angeli.",
          "Some of the places we recommend for a day trip from Corte degli Angeli.",
        )}
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
