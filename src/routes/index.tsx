import { createFileRoute, Link } from "@tanstack/react-router";
import corteIngressoHero from "../assets/home/ingresso-arco.jpg.asset.json";
import riccardoImg from "../assets/riccardo.jpeg.asset.json";
import andreaImg from "../assets/andrea.png.asset.json";
import giorgioImg from "../assets/giorgio.jpeg.asset.json";
import homeLibro from "../assets/home/lavabo-scala.jpg.asset.json";
import homeMadonna from "../assets/home/madonna.jpeg.asset.json";
import homeBrocca from "../assets/home/brocca.png.asset.json";
import { MapEmbed } from "../components/MapEmbed";
import { ReviewCard } from "../components/ReviewCard";
import { recensioni } from "../data/recensioni";
import { useT } from "../lib/i18n";
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

function Home() {
  const t = useT();

  const alloggi = [
    { slug: "riccardo", nome: "Richard", desc: t("Un accogliente bilocale, ideale per coppie o famiglie.", "A cosy two-room flat, ideal for couples or families."), img: riccardoImg.url },
    { slug: "andrea", nome: "Andrew", desc: t("Monolocale luminoso e riservato.", "Bright and private studio."), img: andreaImg.url },
    { slug: "giorgio", nome: "George", desc: t("Stanza di sopra con affaccio sul campanile della chiesa.", "Upstairs room facing the church bell tower."), img: giorgioImg.url },
  ] as const;

  const servizi = [
    { icon: UtensilsCrossed, label: t("Cucina", "Kitchen") },
    { icon: Wifi, label: t("Wifi", "Wi-Fi") },
    { icon: CircleParking, label: t("Parcheggio gratuito", "Free parking") },
    { icon: Dog, label: t("Animali di servizio ammessi", "Service animals welcome") },
    { icon: WashingMachine, label: t("Lavatrice Gratis (nell'edificio)", "Free washing machine (in the building)") },
    { icon: Wind, label: t("Sistema di aria condizionata a split", "Split air conditioning") },
  ];

  const distanze = [
    { luogo: t("Mare di Tricase Porto", "Tricase Porto seaside"), km: "5 km" },
    { luogo: t("Pescoluse — Maldive del Salento", "Pescoluse — Maldives of Salento"), km: "18 km" },
    { luogo: t("Torre Vado", "Torre Vado"), km: "15 km" },
    { luogo: t("Castro Marina", "Castro Marina"), km: "12 km" },
  ];

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
              {t("Una dimora storica, un accoglienza di famiglia.", "A historic home, a family welcome.")}
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              {t(
                "Le sue pietre raccontano una delle prime case nel centro storico di Tricase. Oggi, Corte degli Angeli le fa rivivere con la stessa autenticità di sempre.",
                "Its stones tell the story of one of the earliest houses in Tricase's old town. Today Corte degli Angeli brings them back to life with the same timeless authenticity.",
              )}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contatti"
                className="rounded-full bg-primary px-6 py-3 text-sm font-medium uppercase tracking-widest text-primary-foreground hover:opacity-90"
              >
                {t("Prenota", "Book")}
              </Link>
              <Link
                to="/alloggi"
                className="rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium uppercase tracking-widest hover:border-primary hover:text-primary"
              >
                {t("Scopri gli alloggi", "Discover the rooms")}
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-3 grid-rows-3 gap-2">
            <div className="col-span-2 row-span-3 overflow-hidden rounded-md">
              <img
                src={corteIngressoHero.url}
                alt={t("Ingresso in pietra di Corte degli Angeli", "Stone entrance of Corte degli Angeli")}
                className="h-full w-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-md">
              <img src={homeLibro.url} alt={t("Dettaglio libro e fichi d'india", "Book and prickly pears detail")} className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="aspect-square overflow-hidden rounded-md">
              <img src={homeMadonna.url} alt={t("Nicchia con dipinto della Madonna", "Niche with Madonna painting")} className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="aspect-square overflow-hidden rounded-md">
              <img src={homeBrocca.url} alt={t("Brocca in ceramica salentina", "Salento ceramic jug")} className="h-full w-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* STORIA */}
      <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-accent">{t("La nostra storia", "Our story")}</p>
            <h2 className="font-serif text-4xl">{t("Una casa che accoglie da generazioni.", "A home that has welcomed guests for generations.")}</h2>
            <p className="mt-5 text-muted-foreground">
              {t(
                "Marcello e Maria Rosaria hanno trasformato questa struttura in una casa vacanza a conduzione familiare. Materiali naturali, energia rinnovabile, prodotti a chilometro zero: crediamo che l'ospitalità migliore sia quella che rispetta il luogo che la ospita.",
                "Marcello and Maria Rosaria have turned this building into a family-run holiday home. Natural materials, renewable energy, zero-kilometre produce: we believe the best hospitality is the kind that respects the place that hosts it.",
              )}
            </p>
            <Link
              to="/struttura"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-primary hover:gap-3 transition-all"
            >
              {t("Scopri la struttura", "Discover the house")} <ArrowRight className="h-4 w-4" />
            </Link>
        </div>
      </section>

      {/* ALLOGGI */}
      <section className="bg-secondary/30 py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.25em] text-accent">{t("Gli alloggi", "The rooms")}</p>
              <h2 className="font-serif text-4xl">{t("Tre stanze, tre figli.", "Three rooms, three sons.")}</h2>
            </div>
            <Link to="/alloggi" className="hidden text-sm uppercase tracking-widest text-primary hover:opacity-70 md:inline-block">
              {t("Vedi tutti", "See all")} →
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {alloggi.map((a) => (
              <Link key={a.slug} to="/alloggi/$slug" params={{ slug: a.slug }} className="group">
                <div className="aspect-[3/4] overflow-hidden rounded-md">
                  <img
                    src={a.img}
                    alt={t(`Camera ${a.nome}`, `${a.nome} room`)}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3 className="mt-4 font-serif text-2xl group-hover:text-primary">{a.nome}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{a.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIZI */}
      <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <p className="mb-3 text-xs uppercase tracking-[0.25em] text-accent">{t("Servizi", "Amenities")}</p>
        <h2 className="font-serif text-4xl">{t("Cosa troverai.", "What you'll find.")}</h2>
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
              <MapPin className="h-4 w-4" /> {t("Dove siamo", "Where we are")}
            </p>
            <h2 className="font-serif text-4xl">{t("Nel cuore del basso Salento.", "In the heart of lower Salento.")}</h2>
            <p className="mt-5 text-muted-foreground">
              {t(
                "A pochi minuti dal mare di Tricase Porto e Marina Serra, tra Castro e le spiagge di sabbia di Pescoluse e Torre Vado.",
                "A few minutes from the sea at Tricase Porto and Marina Serra, between Castro and the sandy beaches of Pescoluse and Torre Vado.",
              )}
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
              <p className="mb-3 text-xs uppercase tracking-[0.25em] text-accent">{t("Recensioni", "Reviews")}</p>
              <h2 className="font-serif text-4xl md:text-5xl">{t("Ospiti che tornano a raccontarlo.", "Guests who come back to share their stay.")}</h2>
              <p className="mt-4 max-w-xl text-muted-foreground">
                {t("Alcune delle voci di chi ha soggiornato a Corte degli Angeli.", "Some of the voices of those who have stayed at Corte degli Angeli.")}
              </p>
            </div>
            <Link
              to="/recensioni"
              className="text-sm uppercase tracking-widest text-primary hover:opacity-70"
            >
              {t("Vedi tutte", "See all")} →
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
    </>
  );
}
