import { Mail } from "lucide-react";
import logoDosHermanos from "@/assets/Logos/LogoDosHermanos.png";
import { CONTACT } from "./data";

export function ContactFooter() {
  return (
    <footer id="contacto" className="bg-espresso-deep border-t border-mocha/60">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl font-bold leading-tight text-sand sm:text-4xl">
              Hablemos de tu próximo proyecto operacional
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-sand/80 sm:text-base">
              Atención directa para mandantes mineros, licitaciones y asistencia técnica en terreno.
            </p>
          </div>

          <a
            href={`mailto:${CONTACT.email}`}
            className="group flex w-full sm:w-auto items-center gap-4 rounded-lg border border-mocha bg-steel-brown/30 p-5 transition-all duration-200 hover:border-machine-yellow hover:bg-steel-brown/50 focus-visible:ring-2 focus-visible:ring-machine-yellow"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-mocha/80 bg-espresso-deep text-machine-yellow transition-transform group-hover:scale-105">
              <Mail className="h-6 w-6" />
            </div>
            <div className="min-w-0">
              <span className="block text-xs uppercase tracking-widest text-sand/60">
                Contacto Directo
              </span>
              <span className="font-display text-xl font-bold text-sand transition-colors group-hover:text-machine-yellow sm:text-2xl break-all">
                {CONTACT.email}
              </span>
            </div>
          </a>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-mocha/70 pt-6">
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

