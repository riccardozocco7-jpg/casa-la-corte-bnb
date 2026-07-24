import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import riccardoImg from "../assets/riccardo.jpeg.asset.json";
import andreaImg from "../assets/andrea.png.asset.json";
import giorgioImg from "../assets/giorgio.jpeg.asset.json";
import { useT } from "../lib/i18n";

export const Route = createFileRoute("/alloggi")({
  head: () => ({
    meta: [
      { title: "Alloggi — Corte degli Angeli" },
      { name: "description", content: "Tre alloggi curati: Richard, Andrew e George. Scopri la stanza giusta per te." },
      { property: "og:title", content: "Alloggi — Corte degli Angeli" },
      { property: "og:description", content: "Tre alloggi a conduzione familiare nel Salento." },
    ],
  }),
  component: AlloggiLayout,
});

function AlloggiLayout() {
  const matches = useMatches();
  const isChild = matches.some((m) => m.routeId === "/alloggi/$slug");
  const t = useT();

  const alloggi = [
    { slug: "riccardo", nome: "Richard", desc: t("Un accogliente bilocale, ideale per coppie o famiglie.", "A cosy two-room flat, ideal for couples or families."), capacity: t("2/4 ospiti", "2/4 guests"), img: riccardoImg.url },
    { slug: "andrea", nome: "Andrew", desc: t("Monolocale luminoso e riservato.", "Bright and private studio."), capacity: t("2 ospiti", "2 guests"), img: andreaImg.url },
    { slug: "giorgio", nome: "George", desc: t("Stanza di sopra con affaccio sul campanile della chiesa.", "Upstairs room facing the church bell tower."), capacity: t("2 ospiti", "2 guests"), img: giorgioImg.url },
  ] as const;

  if (isChild) return <Outlet />;

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <p className="mb-3 text-xs uppercase tracking-[0.25em] text-primary">{t("Gli alloggi", "The rooms")}</p>
      <h1 className="font-serif text-5xl">{t("Tre stanze, tre nomi di famiglia.", "Three rooms, three family names.")}</h1>
      <p className="mt-5 max-w-xl text-muted-foreground">
        {t(
          "Ogni alloggio ha una sua personalità, ma tutti condividono la stessa cura per i dettagli e i materiali autentici della tradizione salentina.",
          "Each room has its own personality, yet they all share the same care for detail and the authentic materials of the Salento tradition.",
        )}
      </p>

      <div className="mt-14 grid gap-10 md:grid-cols-3">
        {alloggi.map((a) => (
          <Link key={a.slug} to="/alloggi/$slug" params={{ slug: a.slug }} className="group">
            <div className="aspect-[3/4] overflow-hidden rounded-md bg-muted">
              <img src={a.img} alt={`${a.nome}`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
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
