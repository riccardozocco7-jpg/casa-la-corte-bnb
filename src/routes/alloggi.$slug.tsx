import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PhotoPlaceholder } from "../components/PhotoPlaceholder";
import { Bed, Users, Bath, Ruler, ArrowLeft } from "lucide-react";
import riccardoImg from "../assets/riccardo.jpeg.asset.json";
import andreaImg from "../assets/andrea.png.asset.json";
import giorgioImg from "../assets/giorgio.jpeg.asset.json";

const heroImages: Record<string, string> = {
  riccardo: riccardoImg.url,
  andrea: andreaImg.url,
  giorgio: giorgioImg.url,
};

type Alloggio = {
  nome: string;
  tagline: string;
  descrizione: string;
  capacity: string;
  letto: string;
  bagno: string;
  mq: string;
};

const data: Record<string, Alloggio> = {
  riccardo: {
    nome: "Riccardo",
    tagline: "Vista sugli ulivi, luce del mattino.",
    descrizione:
      "Una camera matrimoniale che affaccia sul giardino di ulivi. Pavimenti in cotto, pareti in calce, biancheria di lino. Ideale per una coppia in cerca di silenzio.",
    capacity: "2 ospiti",
    letto: "Letto matrimoniale",
    bagno: "Bagno privato con doccia",
    mq: "22 mq",
  },
  andrea: {
    nome: "Andrea",
    tagline: "Suite luminosa e riservata.",
    descrizione:
      "La stanza più tranquilla della casa, con una piccola area lettura vicino alla finestra. Perfetta per lunghe permanenze e per chi ama leggere al fresco.",
    capacity: "2 ospiti",
    letto: "Letto king size",
    bagno: "Bagno privato con doccia",
    mq: "26 mq",
  },
  giorgio: {
    nome: "Giorgio",
    tagline: "Spazio per la famiglia.",
    descrizione:
      "La camera più spaziosa, pensata per famiglie o gruppi di amici. Un letto matrimoniale e due letti singoli, con la possibilità di aggiungere una culla.",
    capacity: "3-4 ospiti",
    letto: "Matrimoniale + 2 singoli",
    bagno: "Bagno privato con doccia",
    mq: "32 mq",
  },
};

export const Route = createFileRoute("/alloggi/$slug")({
  loader: ({ params }) => {
    const alloggio = data[params.slug];
    if (!alloggio) throw notFound();
    return { alloggio };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Alloggio — B&B Marcello" }, { name: "robots", content: "noindex" }] };
    return {
      meta: [
        { title: `${loaderData.alloggio.nome} — Alloggi B&B Marcello` },
        { name: "description", content: loaderData.alloggio.descrizione },
        { property: "og:title", content: `${loaderData.alloggio.nome} — B&B Marcello` },
        { property: "og:description", content: loaderData.alloggio.tagline },
      ],
    };
  },
  component: AlloggioPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="font-serif text-4xl">Alloggio non trovato</h1>
      <Link to="/alloggi" className="mt-6 inline-block text-primary underline">Torna agli alloggi</Link>
    </div>
  ),
});

function AlloggioPage() {
  const { alloggio } = Route.useLoaderData();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <Link to="/alloggi" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
        <ArrowLeft className="h-4 w-4" /> Tutti gli alloggi
      </Link>

      <div className="mt-6">
        <p className="text-xs uppercase tracking-[0.25em] text-primary">Alloggio</p>
        <h1 className="mt-2 font-serif text-5xl md:text-6xl">{alloggio.nome}</h1>
        <p className="mt-3 text-lg text-muted-foreground">{alloggio.tagline}</p>
      </div>

      {/* Gallery */}
      <div className="mt-10 grid gap-3 md:grid-cols-4">
        <PhotoPlaceholder label={`${alloggio.nome} · principale`} ratio="landscape" className="md:col-span-2 md:row-span-2" />
        <PhotoPlaceholder label="Dettaglio letto" ratio="square" />
        <PhotoPlaceholder label="Bagno" ratio="square" />
        <PhotoPlaceholder label="Vista finestra" ratio="square" />
        <PhotoPlaceholder label="Dettaglio arredo" ratio="square" />
      </div>

      <div className="mt-14 grid gap-12 md:grid-cols-3">
        <div className="md:col-span-2">
          <h2 className="font-serif text-3xl">La camera</h2>
          <p className="mt-4 text-muted-foreground">{alloggio.descrizione}</p>
        </div>
        <aside className="rounded-lg border border-border bg-card p-6">
          <h3 className="font-serif text-xl">Caratteristiche</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-3"><Users className="h-4 w-4 text-primary" /> {alloggio.capacity}</li>
            <li className="flex items-center gap-3"><Bed className="h-4 w-4 text-primary" /> {alloggio.letto}</li>
            <li className="flex items-center gap-3"><Bath className="h-4 w-4 text-primary" /> {alloggio.bagno}</li>
            <li className="flex items-center gap-3"><Ruler className="h-4 w-4 text-primary" /> {alloggio.mq}</li>
          </ul>
          <a href="#" className="mt-6 block rounded-full bg-primary py-3 text-center text-xs font-medium uppercase tracking-widest text-primary-foreground hover:opacity-90">
            Prenota {alloggio.nome}
          </a>
        </aside>
      </div>
    </div>
  );
}
