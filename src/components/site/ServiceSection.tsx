import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import type { Service } from "./data";

export function ServiceSection({ service, reversed }: { service: Service; reversed: boolean }) {
  return (
    <section id={service.id} className={reversed ? "bg-warm-gray" : "bg-background"}>
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div className={reversed ? "lg:order-2" : ""}>
          <span className="eyebrow text-xs text-amber-industrial">
            {service.index} — {service.category}
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-espresso sm:text-4xl lg:text-5xl">
            <Link to={service.path} className="transition-colors hover:text-orange-industrial">
              {service.title}
            </Link>
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            {service.description}
          </p>

          <ul className="mt-7 space-y-3">
            {service.specs.map((spec) => (
              <li key={spec} className="flex min-w-0 items-start gap-3">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-sm bg-machine-yellow text-espresso-deep">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm leading-relaxed text-steel-brown">{spec}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-steel-brown/25 bg-steel-brown/5 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-steel-brown"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to={service.path}
              className="inline-flex items-center gap-2 rounded-md bg-orange-industrial px-5 py-3 font-display text-sm font-semibold uppercase tracking-wider text-sand transition-transform hover:-translate-y-0.5"
            >
              Ver servicio
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/"
              hash="contacto"
              className="inline-flex items-center gap-2 rounded-md border border-steel-brown/30 px-5 py-3 font-display text-sm font-semibold uppercase tracking-wider text-steel-brown transition-colors hover:border-orange-industrial hover:text-orange-industrial"
            >
              Consultar
            </Link>
          </div>
        </div>

        <div className={`relative ${reversed ? "lg:order-1" : ""}`}>
          <Link
            to={service.path}
            className="block overflow-hidden rounded-md border border-border shadow-industrial"
          >
            <img
              src={service.image}
              alt={`Servicio de ${service.title}`}
              loading="lazy"
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
