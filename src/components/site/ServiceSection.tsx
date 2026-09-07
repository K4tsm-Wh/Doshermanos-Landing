import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import type { Service } from "./data";

export function ServiceSection({ service, reversed }: { service: Service; reversed: boolean }) {
  return (
    <section id={service.id} className={reversed ? "bg-warm-gray" : "bg-background"}>
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div className={reversed ? "lg:order-2" : ""}>
          <span className="eyebrow inline-flex items-center gap-1.5 rounded-md border border-steel-brown/20 bg-steel-brown/10 px-2.5 py-1 text-xs font-bold text-steel-brown">
            {service.index} — {service.category}
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-espresso sm:text-4xl lg:text-5xl">
            <Link
              to={service.path}
              className="rounded-sm transition-colors hover:text-orange-industrial focus-visible:ring-2 focus-visible:ring-machine-yellow"
            >
              {service.title}
            </Link>
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-steel-brown/90">
            {service.description}
          </p>

          <ul className="mt-7 space-y-3">
            {service.specs.map((spec) => (
              <li key={spec} className="flex min-w-0 items-start gap-3">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-sm bg-machine-yellow text-espresso-deep shadow-xs">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm leading-relaxed text-steel-brown/90">{spec}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-steel-brown/25 bg-steel-brown/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-steel-brown"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to={service.path}
              className="inline-flex items-center gap-2 rounded-md bg-orange-industrial px-5 py-3 font-display text-sm font-semibold uppercase tracking-wider text-sand shadow-industrial transition-transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-machine-yellow"
            >
              Ver servicio
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/"
              hash="contacto"
              className="inline-flex items-center gap-2 rounded-md border border-steel-brown/30 bg-background/50 px-5 py-3 font-display text-sm font-semibold uppercase tracking-wider text-steel-brown transition-colors hover:border-orange-industrial hover:text-orange-industrial focus-visible:ring-2 focus-visible:ring-machine-yellow"
            >
              Cotizar servicio
            </Link>
          </div>
        </div>

        <div className={`relative ${reversed ? "lg:order-1" : ""}`}>
          <Link
            to={service.path}
            className="block aspect-[4/3] overflow-hidden rounded-md border border-border shadow-industrial focus-visible:ring-2 focus-visible:ring-machine-yellow"
          >
            <img
              src={service.image}
              alt={`Servicio de ${service.title} en maestranza`}
              loading="lazy"
              decoding="async"
              width={1024}
              height={768}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </Link>
          <span className="absolute -left-3 -top-3 rounded-md bg-machine-yellow px-3 py-1 font-display text-sm font-bold text-espresso-deep shadow-industrial">
            {service.index}
          </span>
        </div>
      </div>
    </section>
  );
}
