import { useEffect, useState } from "react";
import { X, ZoomIn } from "lucide-react";
import type { GalleryItem } from "./data";

const RATIO: Record<GalleryItem["ratio"], string> = {
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  square: "aspect-[4/3]",
};

export function ServiceGallery({ items, title }: { items: GalleryItem[]; title: string }) {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section className="bg-warm-gray">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <span className="eyebrow text-xs text-amber-industrial">Registro Visual</span>
        <h2 className="mt-3 font-display text-3xl font-bold text-espresso sm:text-4xl">
          Trabajos de {title} en terreno y maestranza
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <button
              key={`${item.src}-${i}`}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Ampliar imagen: ${item.alt}`}
              className="group relative overflow-hidden rounded-md border border-border bg-background shadow-industrial"
            >
              <div className={`w-full overflow-hidden ${RATIO[item.ratio]}`}>
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <span className="absolute inset-0 bg-espresso-deep/0 transition-colors duration-300 group-hover:bg-espresso-deep/45" />
              <span className="absolute inset-x-0 bottom-0 flex min-w-0 items-center gap-2 p-3 text-left opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <ZoomIn className="h-4 w-4 shrink-0 text-machine-yellow" />
                <span className="min-w-0 truncate text-xs font-medium text-sand">{item.alt}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={items[active].alt}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[60] grid place-items-center bg-espresso-deep/90 p-4 backdrop-blur-sm"
        >
          <button
            type="button"
            aria-label="Cerrar"
            onClick={() => setActive(null)}
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-md border border-mocha bg-espresso-deep/70 text-sand transition-colors hover:text-machine-yellow"
          >
            <X className="h-5 w-5" />
          </button>
          <figure className="max-h-full w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={items[active].src}
              alt={items[active].alt}
              className="max-h-[75vh] w-full rounded-md border border-mocha object-contain"
            />
            <figcaption className="mt-3 text-center text-xs uppercase tracking-widest text-sand/70">
              {items[active].alt}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
