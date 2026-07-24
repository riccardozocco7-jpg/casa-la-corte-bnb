import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PhotoPlaceholder } from "../components/PhotoPlaceholder";
import {
  Bed,
  Users,
  Bath,
  Ruler,
  ArrowLeft,
  DoorOpen,
  UtensilsCrossed,
  Wind,
  Wifi,
  Tv,
  WashingMachine,
  Sparkles,
} from "lucide-react";
import riccardoImg from "../assets/riccardo.jpeg.asset.json";
import andreaImg from "../assets/andrea.png.asset.json";
import giorgioImg from "../assets/giorgio.jpeg.asset.json";
import riccardoCamera from "../assets/riccardo/camera.jpeg.asset.json";
import riccardoCucina from "../assets/riccardo/cucina.jpeg.asset.json";
import riccardoIngresso from "../assets/riccardo/ingresso.jpeg.asset.json";
import riccardoBagno from "../assets/riccardo/bagno.jpeg.asset.json";
import riccardoTeiera from "../assets/riccardo/teiera.jpeg.asset.json";
import riccardoNicchia from "../assets/riccardo/nicchia.jpeg.asset.json";
import riccardoAsciugamano from "../assets/riccardo/asciugamano.jpeg.asset.json";
import riccardoDettaglio from "../assets/riccardo/dettaglio.jpeg.asset.json";
import riccardoLampada from "../assets/riccardo/lampada.jpeg.asset.json";
import riccardoPoltrona from "../assets/riccardo/poltrona.jpeg.asset.json";
import riccardoFinestra from "../assets/riccardo/finestra.jpeg.asset.json";
import riccardoLetto from "../assets/riccardo/letto.jpeg.asset.json";
import andreaAmbiente from "../assets/andrea/ambiente.jpeg.asset.json";
import andreaLetto from "../assets/andrea/letto.jpeg.asset.json";
import andreaCucina from "../assets/andrea/cucina.jpeg.asset.json";
import andreaSera from "../assets/andrea/sera.jpeg.asset.json";
import andreaSpecchio from "../assets/andrea/specchio.png.asset.json";
import andreaCucinaBagno from "../assets/andrea/cucina-bagno.png.asset.json";
import andreaBagno from "../assets/andrea/bagno.png.asset.json";
import andreaTestata from "../assets/andrea/testata.png.asset.json";
import giorgioSoggiorno from "../assets/giorgio/soggiorno.png.asset.json";
import giorgioCucina from "../assets/giorgio/cucina.jpeg.asset.json";
import giorgioIngresso from "../assets/giorgio/ingresso.jpeg.asset.json";
import giorgioBagno from "../assets/giorgio/bagno.jpeg.asset.json";
import giorgioTerrazza from "../assets/giorgio/terrazza.jpeg.asset.json";
import giorgioTerrazzaTavolo from "../assets/giorgio/terrazza-tavolo.jpeg.asset.json";
import giorgioVista from "../assets/giorgio/vista.jpeg.asset.json";
import giorgioTavoloEsterno from "../assets/giorgio/tavolo-esterno.jpeg.asset.json";
import giorgioPianoCottura from "../assets/giorgio/piano-cottura.jpeg.asset.json";

const heroImages: Record<string, string> = {
  riccardo: riccardoImg.url,
  andrea: andreaImg.url,
  giorgio: giorgioImg.url,
};

const galleries: Record<string, { url: string; alt: string }[]> = {
  riccardo: [
    { url: riccardoCamera.url, alt: "Camera con volta a botte in pietra" },
    { url: riccardoCucina.url, alt: "Cucina con tavolo e sedie" },
    { url: riccardoIngresso.url, alt: "Ingresso con arco in pietra" },
    { url: riccardoBagno.url, alt: "Bagno con lavabo d'appoggio" },
    { url: riccardoNicchia.url, alt: "Nicchia con dipinto sacro" },
    { url: riccardoDettaglio.url, alt: "Dettaglio arredo con scala e cappello" },
    { url: riccardoTeiera.url, alt: "Servizio da tè sul letto" },
    { url: riccardoAsciugamano.url, alt: "Asciugamano con merletto" },
  ],
  andrea: [
    { url: andreaAmbiente.url, alt: "Ambiente con volta a botte e zona pranzo" },
    { url: andreaLetto.url, alt: "Testata in ferro battuto sul letto" },
    { url: andreaCucina.url, alt: "Cucina in legno con vista sul bagno" },
    { url: andreaSera.url, alt: "Ambiente illuminato di sera" },
    { url: andreaSpecchio.url, alt: "Specchiera antica in legno" },
    { url: andreaCucinaBagno.url, alt: "Cucina e accesso al bagno" },
    { url: andreaBagno.url, alt: "Bagno con doccia e lavabo d'appoggio" },
    { url: andreaTestata.url, alt: "Dettaglio testata e comodino" },
  ],
  giorgio: [
    { url: giorgioSoggiorno.url, alt: "Zona pranzo con volta a botte e TV" },
    { url: giorgioCucina.url, alt: "Cucina verde con volta a stella" },
    { url: giorgioIngresso.url, alt: "Ingresso con porta in legno" },
    { url: giorgioBagno.url, alt: "Bagno con doccia e cementine decorate" },
    { url: giorgioTerrazza.url, alt: "Terrazza con pergolato e affaccio" },
    { url: giorgioTerrazzaTavolo.url, alt: "Tavolo sulla terrazza con vista sulla cucina" },
    { url: giorgioVista.url, alt: "Vista sui tetti del centro storico" },
    { url: giorgioTavoloEsterno.url, alt: "Tavolo esterno con brocca in ceramica" },
    { url: giorgioPianoCottura.url, alt: "Piano cottura e dettaglio cucina" },
  ],
};



type Alloggio = {
  nome: string;
  tagline: string;
  descrizione: string;
  capacity: string;
  letto: string;
  bagno: string;
  mq?: string;
  servizi?: boolean;
};

const serviziComuniList = [
  { icon: DoorOpen, label: "Ingresso indipendente" },
  { icon: UtensilsCrossed, label: "Cucina attrezzata (induzione, fornetto, frigorifero)" },
  { icon: Wind, label: "Aria condizionata" },
  { icon: Wifi, label: "Wi-Fi gratuita" },
  { icon: Tv, label: "TV" },
  { icon: WashingMachine, label: "Lavatrice" },
  { icon: Sparkles, label: "Coperte di lino" },
];

const data: Record<string, Alloggio> = {
  riccardo: {
    nome: "Richard",
    tagline: "Un accogliente bilocale, ideale per coppie o famiglie.",
    descrizione:
      "Un bilocale con volte a botte originali, sulle cui pareti è custodito un dipinto della Madonna di oltre due secoli. Ideale per una coppia o una famiglia in cerca di autenticità.",
    capacity: "2/4 ospiti",
    letto: "Letto matrimoniale",
    bagno: "Bagno privato con doccia",
    servizi: true,
  },
  andrea: {
    nome: "Andrew",
    tagline: "Monolocale luminoso e riservato.",
    descrizione: "È un monolocale ampio, perfetto per coppie o viaggiatori singoli.",
    capacity: "2 ospiti",
    letto: "Letto matrimoniale",
    bagno: "Bagno privato con doccia",
    mq: "40 mq",
    servizi: true,
  },
  giorgio: {
    nome: "George",
    tagline: "Stanza di sopra con affaccio sul campanile della chiesa.",
    descrizione:
      "È una piccola stanza ideale per coppie, da qui si può vedere il campanile della chiesa madre.",
    capacity: "2 ospiti",
    letto: "Divano letto",
    bagno: "Bagno privato con doccia",
    servizi: true,
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
  const { slug } = Route.useParams();
  const hero = heroImages[slug];
  const gallery = galleries[slug];

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
      {gallery ? (
        <div className="mt-10 grid gap-3 md:grid-cols-4">
          <div className="md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto overflow-hidden rounded-md bg-muted">
            <img src={gallery[0].url} alt={gallery[0].alt} className="h-full w-full object-cover" loading="eager" />
          </div>
          {gallery.slice(1).map((img) => (
            <div key={img.url} className="aspect-square overflow-hidden rounded-md bg-muted">
              <img src={img.url} alt={img.alt} className="h-full w-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-10 grid gap-3 md:grid-cols-4">
          {hero ? (
            <div className="md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto overflow-hidden rounded-md bg-muted">
              <img src={hero} alt={`${alloggio.nome} · principale`} className="h-full w-full object-cover" />
            </div>
          ) : (
            <PhotoPlaceholder label={`${alloggio.nome} · principale`} ratio="landscape" className="md:col-span-2 md:row-span-2" />
          )}
          <PhotoPlaceholder label="Dettaglio letto" ratio="square" />
          <PhotoPlaceholder label="Bagno" ratio="square" />
          <PhotoPlaceholder label="Vista finestra" ratio="square" />
          <PhotoPlaceholder label="Dettaglio arredo" ratio="square" />
        </div>
      )}

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
            {alloggio.mq && (
              <li className="flex items-center gap-3"><Ruler className="h-4 w-4 text-primary" /> {alloggio.mq}</li>
            )}
            {alloggio.servizi &&
              serviziComuniList.map((s) => (
                <li key={s.label} className="flex items-center gap-3">
                  <s.icon className="h-4 w-4 text-primary" /> {s.label}
                </li>
              ))}
          </ul>
          <Link to="/contatti" className="mt-6 block rounded-full bg-primary py-3 text-center text-xs font-medium uppercase tracking-widest text-primary-foreground hover:opacity-90">
            Prenota
          </Link>
        </aside>
      </div>
    </div>
  );
}
