import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { CONTACT } from "./data";
import { MapCard } from "./MapCard";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function ContactFooter() {
  return (
    <footer id="contacto" className="bg-espresso-deep">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <span className="eyebrow text-xs text-machine-yellow">Contacto</span>
        <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-sand sm:text-5xl">
          Hablemos de tu próximo proyecto
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-sand/70 sm:text-base">
          Respondemos cotizaciones en menos de 24 horas hábiles y coordinamos visita técnica a
          faena dentro de 48 horas para trabajos críticos.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex min-w-0 items-start gap-3 rounded-md border border-mocha bg-steel-brown/30 p-5 transition-colors hover:border-machine-yellow"
            >
              <Mail className="mt-1 h-5 w-5 shrink-0 text-machine-yellow" />
              <span className="min-w-0">
                <span className="block text-xs uppercase tracking-widest text-sand/55">Email</span>
                <span className="mt-1 block break-all font-display text-xl font-bold text-sand">
                  {CONTACT.email}
                </span>
              </span>
            </a>

            <div className="flex flex-wrap gap-3">
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-whatsapp px-5 py-3 font-display text-sm font-semibold uppercase tracking-wider text-espresso-deep transition-transform hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Escribir por WhatsApp
              </a>
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center gap-2 rounded-md border border-amber-industrial px-5 py-3 font-display text-sm font-semibold uppercase tracking-wider text-machine-yellow transition-colors hover:bg-amber-industrial/20"
              >
                <Phone className="h-4 w-4" />
                Llamar ahora
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex min-w-0 items-start gap-3 rounded-md border border-mocha p-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-orange-industrial" />
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-widest text-sand/55">Dirección</p>
                  <p className="mt-1 text-sm leading-relaxed text-sand/85">{CONTACT.address}</p>
                </div>
              </div>
              <div className="flex min-w-0 items-start gap-3 rounded-md border border-mocha p-4">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-orange-industrial" />
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-widest text-sand/55">Horario</p>
                  <p className="mt-1 text-sm leading-relaxed text-sand/85">
                    Lun a Vie 08:00 – 18:30 · Sáb 09:00 – 14:00
                    <br />
                    Emergencias 24/7
                  </p>
                </div>
              </div>
            </div>
          </div>

          <MapCard />
        </div>

        <div className="mt-14 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-t border-mocha pt-6">
          <p className="min-w-0 text-xs text-sand/50">
            © {new Date().getFullYear()} Dos Hermanos · Servicios industriales y maquinaria pesada.
          </p>
          <p className="shrink-0 font-display text-xs uppercase tracking-[0.25em] text-machine-yellow">
            doshermanos.cl
          </p>
        </div>
      </div>
    </footer>
  );
}
