import { Link } from "@tanstack/react-router";

export function StickyBookCTA() {
  return (
    <Link
      to="/contatti"
      className="fixed bottom-4 left-1/2 z-30 -translate-x-1/2 rounded-full bg-primary px-6 py-3 text-sm font-medium uppercase tracking-widest text-primary-foreground shadow-lg shadow-primary/25 md:hidden"
    >
      Prenota
    </Link>
  );
}
