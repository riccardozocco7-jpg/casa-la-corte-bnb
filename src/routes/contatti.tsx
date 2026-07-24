import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail } from "lucide-react";

export const Route = createFileRoute("/contatti")({
  head: () => ({
    meta: [
      { title: "Contatti — Corte degli Angeli" },
      { name: "description", content: "Prenota chiamando Marcello o scrivendo un'email." },
      { property: "og:title", content: "Contatti — Corte degli Angeli" },
      { property: "og:description", content: "Prenota chiamando Marcello o scrivendo un'email." },
    ],
  }),
  component: Contatti,
});

function Contatti() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 md:px-6 md:py-28">
      <p className="mb-3 text-xs uppercase tracking-[0.25em] text-primary">Contatti</p>
      <h1 className="font-serif text-5xl">Prenota il tuo soggiorno.</h1>
      <p className="mt-5 text-muted-foreground">
        Chiama Marcello o scrivi un'email per verificare disponibilità e prenotare.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        <a
          href="tel:+393209717096"
          className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-8 transition hover:border-primary"
        >
          <Phone className="h-6 w-6 text-primary" strokeWidth={1.5} />
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Telefono</span>
          <span className="font-mono text-2xl font-light group-hover:text-primary">+39 320 971 7096</span>
        </a>

        <a
          href="mailto:marcellozocco2@gmail.com"
          className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-8 transition hover:border-primary"
        >
          <Mail className="h-6 w-6 text-primary" strokeWidth={1.5} />
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Email</span>
          <span className="font-serif text-xl break-all group-hover:text-primary">
            marcellozocco2@gmail.com
          </span>
        </a>
      </div>
    </div>
  );
}
