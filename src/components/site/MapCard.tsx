import { MapPin } from "lucide-react";
import { CONTACT } from "./data";

export function MapCard() {
  return (
    <div className="overflow-hidden rounded-md border border-mocha bg-steel-brown/40 shadow-industrial">
      <div className="relative aspect-[4/3] w-full">
        <iframe
          title="Ubicación Dos Hermanos"
          src={CONTACT.mapsEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full border-0 grayscale-[35%]"
        />
      </div>
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-t border-mocha p-4">
        <div className="flex min-w-0 items-start gap-2">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-machine-yellow" />
          <p className="min-w-0 text-xs leading-relaxed text-sand/75">{CONTACT.address}</p>
        </div>
        <a
          href={CONTACT.mapsHref}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 rounded-md bg-machine-yellow px-4 py-2 font-display text-xs font-bold uppercase tracking-widest text-espresso-deep transition-transform hover:-translate-y-0.5"
        >
          Ver en Google Maps
        </a>
      </div>
    </div>
  );
}
