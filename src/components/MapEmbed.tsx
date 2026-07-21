export function MapEmbed({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full overflow-hidden rounded-md border border-border ${className}`}>
      <iframe
        src="https://maps.google.com/maps?q=Via+Cittadella+23,+Tricase,+LE,+Italy&t=&z=15&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Corte degli Angeli — Via Cittadella 23, Tricase (LE)"
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}
