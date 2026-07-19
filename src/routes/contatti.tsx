import { createFileRoute } from "@tanstack/react-router";
import { PhotoPlaceholder } from "../components/PhotoPlaceholder";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contatti")({
  head: () => ({
    meta: [
      { title: "Contatti — B&B Marcello" },
      { name: "description", content: "Prenota o contatta Marcello direttamente: telefono, WhatsApp, email." },
      { property: "og:title", content: "Contatti — B&B Marcello" },
      { property: "og:description", content: "Prenota o scrivici direttamente." },
    ],
  }),
  component: Contatti,
});

function Contatti() {
  const [form, setForm] = useState({ nome: "", email: "", messaggio: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Richiesta da ${form.nome}`);
    const body = encodeURIComponent(`${form.messaggio}\n\n— ${form.nome} (${form.email})`);
    window.location.href = `mailto:email-da-inserire@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <p className="mb-3 text-xs uppercase tracking-[0.25em] text-primary">Contatti</p>
      <h1 className="font-serif text-5xl">Scrivici, chiamaci, prenota.</h1>
      <p className="mt-5 max-w-xl text-muted-foreground">
        Il modo più veloce per confermare le date è Booking.com. Per domande particolari puoi
        raggiungere Marcello direttamente.
      </p>

      <div className="mt-8">
        <a
          href="#"
          className="inline-block rounded-full bg-primary px-8 py-4 text-sm font-medium uppercase tracking-widest text-primary-foreground hover:opacity-90"
        >
          Prenota su Booking.com
        </a>
      </div>

      <div className="mt-16 grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-3xl">Scrivici direttamente</h2>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Nome</label>
              <input
                required
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                className="mt-1 w-full rounded-md border border-input bg-card px-4 py-3 text-sm outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1 w-full rounded-md border border-input bg-card px-4 py-3 text-sm outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Messaggio</label>
              <textarea
                required
                rows={5}
                value={form.messaggio}
                onChange={(e) => setForm({ ...form, messaggio: e.target.value })}
                className="mt-1 w-full rounded-md border border-input bg-card px-4 py-3 text-sm outline-none focus:border-primary"
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-foreground px-6 py-3 text-sm font-medium uppercase tracking-widest text-background hover:opacity-90"
            >
              Invia messaggio
            </button>
          </form>
        </div>

        <div>
          <h2 className="font-serif text-3xl">Altri modi</h2>
          <ul className="mt-6 space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-primary" />
              <a href="tel:+39" className="hover:text-primary">+39 · numero da inserire</a>
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle className="h-4 w-4 text-primary" />
              <a href="https://wa.me/39" className="hover:text-primary">WhatsApp — numero da inserire</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-primary" />
              <a href="mailto:" className="hover:text-primary">email da inserire</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 text-primary mt-1" />
              <span>Indirizzo da inserire<br />Tricase (LE), Salento</span>
            </li>
          </ul>

          <div className="mt-8">
            <PhotoPlaceholder label="Mappa · posizione della struttura" ratio="landscape" />
          </div>
        </div>
      </div>
    </div>
  );
}
