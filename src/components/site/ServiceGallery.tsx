import { useEffect, useState } from "react";
import { X, ZoomIn } from "lucide-react";
import type { GalleryItem } from "./data";

const RATIO: Record<NonNullable<GalleryItem["ratio"]>, string> = {
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  square: "aspect-[4/3]",
};

export function ServiceGallery({ items, title }: { items: GalleryItem[]; title: string }) {
  const [active, setActive] = useState<number | null>(null);
  const activeItem = active === null ? null : (items[active] ?? null);

  useEffect(() => {
    if (active === null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <section className="bg-warm-gray">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <span className="eyebrow inline-flex items-center rounded-md border border-steel-brown/20 bg-steel-brown/10 px-2.5 py-1 text-xs font-bold text-steel-brown">
          Registro Visual
        </span>
        <h2 className="mt-3 font-display text-3xl font-bold text-espresso sm:text-4xl">
          Trabajos de {title} en terreno y maestranza
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <button
              key={`${item.src}-${i}`}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Ampliar imagen: ${item.alt}`}
              className="group relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-border bg-espresso-deep/10 shadow-industrial transition-all duration-300 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-machine-yellow cursor-pointer"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                width={800}
                height={600}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso-deep/90 via-espresso-deep/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 flex min-w-0 items-center gap-2.5 p-4 text-left opacity-0 transition-all duration-300 translate-y-1 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-machine-yellow text-espresso-deep shadow-sm">
                  <ZoomIn className="h-4 w-4" />
                </span>
                <span className="min-w-0 text-xs font-semibold text-sand line-clamp-2 drop-shadow-sm">
                  {item.alt}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Visualizador: ${activeItem.alt}`}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[60] grid place-items-center bg-espresso-deep/90 p-4 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <button
            type="button"
            aria-label="Cerrar modal de imagen"
            onClick={() => setActive(null)}
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-md border border-mocha bg-espresso-deep/80 text-sand transition-colors hover:text-machine-yellow focus-visible:ring-2 focus-visible:ring-machine-yellow"
          >
            <X className="h-5 w-5" />
          </button>
          <figure className="max-h-full w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={activeItem.src}
              alt={activeItem.alt}
              className="max-h-[75vh] w-full rounded-md border border-mocha object-contain shadow-2xl"
            />
            <figcaption className="mt-3 text-center text-xs uppercase tracking-widest text-sand/80">
              {activeItem.alt}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
