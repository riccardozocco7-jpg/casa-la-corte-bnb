import { Camera } from "lucide-react";

type Ratio = "square" | "landscape" | "portrait" | "wide" | "hero";

const ratioClass: Record<Ratio, string> = {
  square: "aspect-square",
  landscape: "aspect-[4/3]",
  portrait: "aspect-[3/4]",
  wide: "aspect-[16/9]",
  hero: "aspect-[16/10] md:aspect-[21/9]",
};

export function PhotoPlaceholder({
  label,
  ratio = "landscape",
  className = "",
}: {
  label: string;
  ratio?: Ratio;
  className?: string;
}) {
  return (
    <div
      className={`relative w-full ${ratioClass[ratio]} overflow-hidden rounded-md border border-dashed border-border bg-muted ${className}`}
      role="img"
      aria-label={`Placeholder foto: ${label}`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-muted-foreground">
        <Camera className="h-8 w-8 opacity-50" strokeWidth={1.5} />
        <span className="px-4 text-center text-xs uppercase tracking-widest opacity-70">
          {label}
        </span>
      </div>
    </div>
  );
}
