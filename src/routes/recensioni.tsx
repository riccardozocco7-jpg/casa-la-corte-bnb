import { createFileRoute } from "@tanstack/react-router";
import { recensioni } from "../data/recensioni";
import { ReviewCard } from "../components/ReviewCard";

export const Route = createFileRoute("/recensioni")({
  head: () => ({
    meta: [
      { title: "Recensioni — Corte degli Angeli" },
      {
        name: "description",
        content:
          "Le voci degli ospiti di Corte degli Angeli: recensioni a cinque stelle sul soggiorno nel centro storico di Tricase.",
      },
      { property: "og:title", content: "Recensioni — Corte degli Angeli" },
      {
        property: "og:description",
        content: "Cosa dicono gli ospiti del nostro B&B nel centro storico di Tricase.",
      },
    ],
  }),
  component: Recensioni,
});

function Recensioni() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <p className="mb-3 text-xs uppercase tracking-[0.25em] text-primary">Recensioni</p>
      <h1 className="font-serif text-5xl">Le voci dei nostri ospiti.</h1>
      <p className="mt-5 max-w-xl text-muted-foreground">
        Ogni recensione è una persona che ha scelto Corte degli Angeli e ha voluto raccontarlo. Grazie.
      </p>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {recensioni.map((r) => (
          <ReviewCard key={r.autore} r={r} />
        ))}
      </div>
    </div>
  );
}
