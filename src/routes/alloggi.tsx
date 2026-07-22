import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import riccardoImg from "../assets/riccardo.jpeg.asset.json";
import andreaImg from "../assets/andrea.png.asset.json";
import giorgioImg from "../assets/giorgio.jpeg.asset.json";

export const Route = createFileRoute("/alloggi")({
  head: () => ({
    meta: [
      { title: "Alloggi — Corte degli Angeli" },
      { name: "description", content: "Tre alloggi curati: Riccardo, Andrea e Giorgio. Scopri la stanza giusta per te." },
      { property: "og:title", content: "Alloggi — Corte degli Angeli" },
      { property: "og:description", content: "Tre alloggi a conduzione familiare nel Salento." },
    ],
  }),
  component: AlloggiLayout,
});

const alloggi = [
  { slug: "riccardo", nome: "Riccardo", desc: "Bilocale.", capacity: "2 ospiti", img: riccardoImg.url },
  { slug: "andrea", nome: "Andrea", desc: "Monolocale.", capacity: "2 ospiti", img: andreaImg.url },
  { slug: "giorgio", nome: "Giorgio", desc: "Stanza sopra con affaccio al campanile della chiesa.", capacity: "3-4 ospiti", img: giorgioImg.url },
] as const;

function AlloggiLayout() {
  const matches = useMatches();
  const isChild = matches.some((m) => m.routeId === "/alloggi/$slug");
  if (isChild) return <Outlet />;

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <p className="mb-3 text-xs uppercase tracking-[0.25em] text-primary">Gli alloggi</p>
      <h1 className="font-serif text-5xl">Tre stanze, tre nomi di famiglia.</h1>
      <p className="mt-5 max-w-xl text-muted-foreground">
        Ogni alloggio ha una sua personalità, ma tutti condividono la stessa cura per i dettagli e
        i materiali autentici della tradizione salentina.
      </p>

      <div className="mt-14 grid gap-10 md:grid-cols-3">
        {alloggi.map((a) => (
          <Link key={a.slug} to="/alloggi/$slug" params={{ slug: a.slug }} className="group">
            <div className="aspect-[3/4] overflow-hidden rounded-md bg-muted">
              <img src={a.img} alt={`Camera ${a.nome}`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            </div>
            <div className="mt-4 flex items-baseline justify-between">
              <h2 className="font-serif text-2xl group-hover:text-primary">{a.nome}</h2>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">{a.capacity}</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{a.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
