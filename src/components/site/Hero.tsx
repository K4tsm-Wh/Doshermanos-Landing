import { ArrowRight, Phone } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { CONTACT } from "./data";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-espresso-deep">
      <img
        src={hero}
        alt="Reparación de maquinaria pesada en maestranza industrial"
        width={1536}
        height={1024}
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="hero-overlay absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-32 sm:px-6 lg:pb-28 lg:pt-44">
        <span className="eyebrow inline-flex items-center gap-2 rounded-md border border-machine-yellow/40 bg-machine-yellow/10 px-3 py-1 text-xs text-machine-yellow">
          Servicios industriales · Maquinaria pesada
        </span>

        <h1 className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.05] text-sand sm:text-6xl lg:text-7xl">
          Precisión industrial para mantener{" "}
          <span className="text-machine-yellow">tu maquinaria operando</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-sand/80 sm:text-lg">
          Soldadura, mecánica pesada, mecanizado, protección superficial y fabricación de piezas
          críticas. Ejecutamos con estándares verificables, trazabilidad completa y capacidad de
          respuesta en terreno para reducir el tiempo de detención de tus equipos.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-whatsapp px-6 py-3 font-display text-base font-semibold uppercase tracking-wider text-espresso-deep shadow-industrial transition-transform hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Cotizar por WhatsApp
          </a>
          <a
            href="#soldadura"
            className="inline-flex items-center gap-2 rounded-md border border-amber-industrial bg-amber-industrial/15 px-6 py-3 font-display text-base font-semibold uppercase tracking-wider text-machine-yellow transition-colors hover:bg-amber-industrial/30"
          >
            Ver servicios
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center gap-2 rounded-md px-4 py-3 text-sm font-medium text-sand/80 transition-colors hover:text-machine-yellow"
          >
            <Phone className="h-4 w-4 text-machine-yellow" />
            {CONTACT.phone}
          </a>
        </div>

        <dl className="mt-14 grid max-w-3xl grid-cols-2 gap-6 border-t border-sand/15 pt-8 sm:grid-cols-4">
          {[
            ["+15", "Años en terreno"],
            ["24/7", "Respuesta de emergencia"],
            ["100%", "Trabajos con trazabilidad"],
            ["5", "Divisiones técnicas"],
          ].map(([value, label]) => (
            <div key={label}>
              <dt className="font-display text-3xl font-bold text-machine-yellow">{value}</dt>
              <dd className="mt-1 text-xs uppercase tracking-widest text-sand/60">{label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
