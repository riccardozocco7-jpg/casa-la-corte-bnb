import { createFileRoute, Link } from "@tanstack/react-router";
import { PhotoPlaceholder } from "../components/PhotoPlaceholder";
import { MapEmbed } from "../components/MapEmbed";
import { ReviewCard } from "../components/ReviewCard";
import { recensioni } from "../data/recensioni";
import {
  UtensilsCrossed,
  Wifi,
  CircleParking,
  Dog,
  WashingMachine,
  Wind,
  MapPin,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
});

const alloggi = [
  { slug: "riccardo", nome: "Riccardo", desc: "Bilocale." },
  { slug: "andrea", nome: "Andrea", desc: "Stanza sopra con affaccio al campanile della chiesa." },
  { slug: "giorgio", nome: "Giorgio", desc: "Monolocale, spazioso e accogliente." },
] as const;

const servizi = [
  { icon: UtensilsCrossed, label: "Cucina" },
  { icon: Wifi, label: "Wifi" },
  { icon: CircleParking, label: "Parcheggio gratuito in strada" },
  { icon: Dog, label: "Animali domestici ammessi" },
  { icon: WashingMachine, label: "Lavatrice Gratis (nell'edificio)" },
  { icon: Wind, label: "Sistema di aria condizionata a split" },
];

const distanze = [
  { luogo: "Mare di Tricase Porto", km: "5 km" },
  { luogo: "Pescoluse — Maldive del Salento", km: "18 km" },
  { luogo: "Torre Vado", km: "15 km" },
  { luogo: "Castro Marina", km: "12 km" },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-secondary/30">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:px-6 md:py-24">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-primary">
              Salento · Tricase
            </p>
            <h1 className="font-serif text-5xl leading-tight md:text-6xl">
              Una dimora storica, un accoglienza di famiglia.
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              Le sue pietre raccontano una delle prime case nel centro storico di Tricase. Oggi, Corte degli Angeli le fa rivivere con la stessa autenticità di sempre.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#"
                className="rounded-full bg-primary px-6 py-3 text-sm font-medium uppercase tracking-widest text-primary-foreground hover:opacity-90"
              >
                Prenota ora
              </a>
              <Link
                to="/alloggi"
                className="rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium uppercase tracking-widest hover:border-primary hover:text-primary"
              >
                Scopri gli alloggi
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <PhotoPlaceholder label="Esterno · scatto principale" ratio="portrait" className="col-span-2 row-span-2" />
            <PhotoPlaceholder label="Dettaglio" ratio="square" />
            <PhotoPlaceholder label="Giardino" ratio="square" />
          </div>
        </div>
      </section>

      {/* STORIA */}
      <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <PhotoPlaceholder label="La famiglia · ritratto" ratio="landscape" />
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-accent">La nostra storia</p>
            <h2 className="font-serif text-4xl">Una casa che accoglie da generazioni.</h2>
            <p className="mt-5 text-muted-foreground">
              Marcello e Maria Rosaria hanno trasformato questa struttura in una casa vacanza a
              conduzione familiare. Materiali naturali, energia rinnovabile, prodotti a chilometro
              zero: crediamo che l'ospitalità migliore sia quella che rispetta il luogo che la ospita.
            </p>
            <Link
              to="/struttura"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-primary hover:gap-3 transition-all"
            >
              Scopri la struttura <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ALLOGGI */}
      <section className="bg-secondary/30 py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.25em] text-accent">Gli alloggi</p>
              <h2 className="font-serif text-4xl">Tre stanze, tre figli.</h2>
            </div>
            <Link to="/alloggi" className="hidden text-sm uppercase tracking-widest text-primary hover:opacity-70 md:inline-block">
              Vedi tutti →
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {alloggi.map((a) => (
              <Link key={a.slug} to="/alloggi/$slug" params={{ slug: a.slug }} className="group">
                <PhotoPlaceholder label={`Camera ${a.nome}`} ratio="portrait" />
                <h3 className="mt-4 font-serif text-2xl group-hover:text-primary">{a.nome}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{a.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIZI */}
      <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <p className="mb-3 text-xs uppercase tracking-[0.25em] text-accent">Servizi</p>
        <h2 className="font-serif text-4xl">Cosa troverai.</h2>
        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {servizi.map((s) => (
            <div key={s.label} className="flex flex-col items-start gap-3">
              <s.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
              <span className="text-sm">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* DOVE SIAMO */}
      <section className="bg-secondary/30 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2 md:px-6">
          <div>
            <p className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-accent">
              <MapPin className="h-4 w-4" /> Dove siamo
            </p>
            <h2 className="font-serif text-4xl">Nel cuore del basso Salento.</h2>
            <p className="mt-5 text-muted-foreground">
              A pochi minuti dal mare di Tricase Porto e Marina Serra, tra Castro e le spiagge di
              sabbia di Pescoluse e Torre Vado.
            </p>
            <ul className="mt-8 divide-y divide-border">
              {distanze.map((d) => (
                <li key={d.luogo} className="flex items-center justify-between py-3 text-sm">
                  <span>{d.luogo}</span>
                  <span className="text-muted-foreground">{d.km}</span>
                </li>
              ))}
            </ul>
          </div>
          <MapEmbed className="aspect-square" />
        </div>
      </section>

      {/* RECENSIONI */}
      <section className="border-y border-border/60 bg-secondary/40 py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.25em] text-accent">Recensioni</p>
              <h2 className="font-serif text-4xl md:text-5xl">Ospiti che tornano a raccontarlo.</h2>
              <p className="mt-4 max-w-xl text-muted-foreground">
                Alcune delle voci di chi ha soggiornato a Corte degli Angeli.
              </p>
            </div>
            <Link
              to="/recensioni"
              className="text-sm uppercase tracking-widest text-primary hover:opacity-70"
            >
              Vedi tutte →
            </Link>
          </div>

          <div className="mt-12 -mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-6 md:-mx-6 md:px-6 [scrollbar-width:thin]">
            {recensioni.map((r) => (
              <div
                key={r.autore}
                className="w-[85%] flex-shrink-0 snap-start sm:w-[420px]"
              >
                <ReviewCard r={r} />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="mx-auto mb-20 max-w-5xl px-4 md:px-6">
        <div className="rounded-2xl bg-primary px-8 py-14 text-center text-primary-foreground">
          <h2 className="font-serif text-4xl">Vieni a scoprire il Salento con noi.</h2>
          <p className="mx-auto mt-4 max-w-lg opacity-90">
            Verifica la disponibilità e prenota il tuo soggiorno.
          </p>
          <a
            href="#"
            className="mt-8 inline-block rounded-full bg-background px-8 py-3 text-sm font-medium uppercase tracking-widest text-primary hover:opacity-90"
          >
            Prenota su Booking.com
          </a>
        </div>
      </section>
    </>
  );
}
