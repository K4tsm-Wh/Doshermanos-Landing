import { Mail, MapPin, ShieldCheck, Clock } from "lucide-react";
import logoDosHermanos from "@/assets/Logos/LogoDosHermanos.png";
import { CONTACT } from "./data";
import { MapCard } from "./MapCard";
import { QuoteForm } from "./QuoteForm";

export function ContactFooter() {
  return (
    <footer id="contacto" className="bg-espresso-deep border-t border-mocha/60">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="max-w-3xl">
          <span className="eyebrow text-xs text-machine-yellow">
            Contacto Corporativo & Cotizaciones
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-sand sm:text-5xl">
            Hablemos de tu próximo proyecto operacional
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-sand/80 sm:text-base">
            Estamos a disposición de empresas mandantes, faenas mineras e industrias para reuniones
            técnicas, cotizaciones de maestranza y coordinación operativa en terreno.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          {/* Columna Izquierda: Formulario de Cotización */}
          <div className="lg:col-span-7">
            <QuoteForm />
          </div>

          {/* Columna Derecha: Canales Directos y Mapa */}
          <div className="space-y-6 lg:col-span-5">
            <a
              href={`mailto:${CONTACT.email}`}
              className="group flex min-w-0 items-start gap-4 rounded-md border border-mocha bg-steel-brown/30 p-6 transition-all hover:border-machine-yellow hover:bg-steel-brown/40 focus-visible:ring-2 focus-visible:ring-machine-yellow"
            >
              <Mail className="mt-1 h-6 w-6 shrink-0 text-machine-yellow transition-transform group-hover:scale-110" />
              <span className="min-w-0">
                <span className="block text-xs uppercase tracking-widest text-sand/60">
                  Contacto Directo de Gerencia
                </span>
                <span className="mt-1 block break-all font-display text-2xl font-bold text-sand group-hover:text-machine-yellow transition-colors">
                  {CONTACT.email}
                </span>
                <span className="mt-2 block text-xs text-sand/70">
                  Atención directa para mandantes, licitaciones y órdenes de compra.
                </span>
              </span>
            </a>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex min-w-0 items-start gap-3 rounded-md border border-mocha bg-steel-brown/20 p-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-orange-industrial" />
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-widest text-sand/60">Ubicación</p>
                  <p className="mt-1 text-xs leading-relaxed text-sand/90">{CONTACT.address}</p>
                </div>
              </div>

              <div className="flex min-w-0 items-start gap-3 rounded-md border border-mocha bg-steel-brown/20 p-4">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-machine-yellow" />
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-widest text-sand/60">Respuesta Rápida</p>
                  <p className="mt-1 text-xs leading-relaxed text-sand/90">
                    Propuesta técnica &lt; 24 hrs
                  </p>
                </div>
              </div>
            </div>

            <MapCard />
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-mocha/70 pt-6">
          <div className="flex items-center gap-3">
            <img
              src={logoDosHermanos}
              alt="Logo Dos Hermanos"
              width={32}
              height={32}
              className="h-8 w-auto object-contain opacity-90"
            />
            <p className="min-w-0 text-xs text-sand/60">
              © {new Date().getFullYear()} Dos Hermanos · Servicios Mineros e Industria. Todos los
              derechos reservados.
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
