import { Mail, MapPin, ShieldCheck } from "lucide-react";
import logo2Hns from "@/assets/Logos/logo_s2hns.png";
import { CONTACT } from "./data";
import { MapCard } from "./MapCard";

export function ContactFooter() {
  return (
    <footer id="contacto" className="bg-espresso-deep">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <span className="eyebrow text-xs text-machine-yellow">Contacto Corporativo</span>
        <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-sand sm:text-5xl">
          Relaciones corporativas y atención directa
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-sand/70 sm:text-base">
          Estamos a disposición de empresas y mandantes para reuniones corporativas, consultas técnicas
          y presentación de nuestras capacidades operativas.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex min-w-0 items-start gap-4 rounded-md border border-mocha bg-steel-brown/30 p-6 transition-colors hover:border-machine-yellow"
            >
              <Mail className="mt-1 h-6 w-6 shrink-0 text-machine-yellow" />
              <span className="min-w-0">
                <span className="block text-xs uppercase tracking-widest text-sand/55">Contacto Directo de Gerencia</span>
                <span className="mt-1 block break-all font-display text-2xl font-bold text-sand">
                  {CONTACT.email}
                </span>
              </span>
            </a>

            <div>
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex items-center gap-2 rounded-md bg-machine-yellow px-6 py-3 font-display text-sm font-semibold uppercase tracking-wider text-espresso-deep transition-transform hover:-translate-y-0.5"
              >
                <Mail className="h-4 w-4" />
                Escribir a Gerencia
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex min-w-0 items-start gap-3 rounded-md border border-mocha p-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-orange-industrial" />
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-widest text-sand/55">Ubicación</p>
                  <p className="mt-1 text-sm leading-relaxed text-sand/85">{CONTACT.address}</p>
                </div>
              </div>
              <div className="flex min-w-0 items-center gap-3 rounded-md border border-mocha p-4">
                <ShieldCheck className="h-5 w-5 shrink-0 text-machine-yellow" />
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-widest text-sand/55">Respaldo Técnico</p>
                  <p className="mt-1 text-xs leading-relaxed text-sand/85">
                    Servicios Mineros e Industria
                  </p>
                </div>
              </div>
            </div>
          </div>

          <MapCard />
        </div>

        <div className="mt-14 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-t border-mocha pt-6">
          <div className="flex items-center gap-3">
            <img src={logo2Hns} alt="Logo Dos Hermanos" className="h-8 w-auto object-contain opacity-80" />
            <p className="min-w-0 text-xs text-sand/50">
              © {new Date().getFullYear()} Dos Hermanos · Servicios Mineros e Industria.
            </p>
          </div>
          <p className="shrink-0 font-display text-xs uppercase tracking-[0.25em] text-machine-yellow">
            doshermanos.cl
          </p>
        </div>
      </div>
    </footer>
  );
}
