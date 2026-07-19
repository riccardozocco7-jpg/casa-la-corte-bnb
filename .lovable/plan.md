# Piano: Sito B&B (Marcello) — versione con placeholder

Costruisco il sito multi-pagina in italiano (con predisposizione IT/EN), usando **quadrati/rettangoli grigi con etichetta** al posto delle foto. Nessuna immagine verrà generata o importata: sostituirai i placeholder con le tue foto quando saranno pronte.

## Struttura delle pagine (route TanStack Start)

- `/` — Home
- `/struttura` — La struttura (storia, sostenibilità, famiglia)
- `/alloggi` — Panoramica 3 alloggi
- `/alloggi/riccardo`, `/alloggi/andrea`, `/alloggi/giorgio` — Schede singole
- `/dintorni` — Mare, borghi, Castro
- `/contatti` — Form, telefono/WhatsApp, mappa, Booking.com

Ogni route ha `head()` con title/description/OG dedicati.

## Elementi trasversali

- Header sticky con logo (placeholder), menu, toggle lingua IT/EN (UI pronta, traduzioni EN come stub)
- Footer con contatti, social, link rapidi
- CTA "Prenota ora" (link Booking.com — URL da fornire dopo) sempre visibile: nell'header desktop e come bottone fisso in basso su mobile

## Sezioni Home

1. Hero: quadrato grande placeholder (slideshow simulato con più riquadri) + headline + CTA "Prenota ora"
2. Racconto breve struttura (storia + sostenibilità) con placeholder immagine affiancato
3. Anteprima 3 alloggi (Riccardo, Andrea, Giorgio) come card con placeholder + link scheda
4. Servizi in evidenza con icone Lucide (parcheggio, wifi, navetta, colazione, aria condizionata, giardino)
5. "Dove siamo": placeholder mappa + distanze (mare, Castro, Pescoluse, Torre Vado)
6. Sezione recensioni (predisposta, con testo "prossimamente" o 2-3 recensioni fittizie chiaramente marcate)
7. CTA finale prenota

## Placeholder foto

Componente `<PhotoPlaceholder label="..." ratio="square|landscape|portrait" />`: riquadro grigio con bordo tratteggiato, icona camera al centro ed etichetta descrittiva (es. "Foto esterno struttura", "Camera Riccardo — letto matrimoniale"). Facilita la sostituzione futura: sostituirai solo l'src.

## Design

Palette calda e mediterranea (bianco caldo, sabbia, terracotta soft, verde ulivo, testo scuro caldo), tipografia serif elegante per titoli + sans-serif leggibile per body. Stile pulito, arioso, non generico — nessun gradient viola/indaco, nessun font default Inter/Poppins.

Definirò palette e font in `src/styles.css` (design tokens) e li userò via classi Tailwind semantiche.

## Dettagli tecnici

- Route files sotto `src/routes/` seguendo la convenzione flat (`alloggi.riccardo.tsx`, ecc.)
- `src/routes/index.tsx` sostituisce il placeholder attuale con la Home reale
- Layout condiviso (header/footer/CTA mobile) in `__root.tsx` attorno a `<Outlet />`
- Componenti riutilizzabili in `src/components/` (Header, Footer, PhotoPlaceholder, ServiceIcon, AlloggioCard, StickyBookCTA)
- Toggle lingua: context React con dizionario `it`/`en`; ora popolo solo `it`, `en` resta stub che ricade su `it` finché non fornisci le traduzioni
- Nessun backend in questa fase — form contatti sarà UI-only con `mailto:` verso l'indirizzo di Marcello; se poi vuoi invio email server-side abilitiamo Lovable Cloud

## Cose che potrò aggiornare quando mi darai le info

- Link reale Booking.com
- Numero WhatsApp / telefono
- Email di Marcello
- Indirizzo esatto (per mappa)
- Social (IG, FB)
- Foto (sostituzione dei placeholder)
- Traduzioni EN
- Recensioni reali

Procedo così?
