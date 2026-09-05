import { Link } from "@tanstack/react-router";
import { ChevronRight, Check } from "lucide-react";
import { Navbar } from "./Navbar";
import { ContactFooter } from "./ContactFooter";
import { ServiceGallery } from "./ServiceGallery";
import type { Service } from "./data";

export function ServiceDetailLayout({ service }: { service: Service }) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="relative isolate overflow-hidden bg-espresso-deep">
          <img
            src={service.image}
            alt={`Servicio de ${service.title}`}
            className="absolute inset-0 h-full w-full object-cover opacity-35"
          />
          <div className="hero-overlay absolute inset-0" />

          <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-6 lg:pb-24 lg:pt-40">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1 text-xs text-sand/60">
              <Link to="/" className="transition-colors hover:text-machine-yellow">
                Inicio
              </Link>
              <ChevronRight className="h-3 w-3 shrink-0" />
              <Link to="/" hash="servicios" className="transition-colors hover:text-machine-yellow">
                Servicios
              </Link>
              <ChevronRight className="h-3 w-3 shrink-0" />
              <span className="text-machine-yellow">{service.title}</span>
            </nav>

            <span className="eyebrow mt-6 inline-flex rounded-md border border-machine-yellow/40 bg-machine-yellow/10 px-3 py-1 text-xs text-machine-yellow">
              {service.index} — {service.category}
            </span>

            <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.05] text-sand sm:text-6xl">
              {service.title}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-relaxed text-sand/80">{service.overview}</p>

            <div className="mt-8 flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-amber-industrial/50 bg-amber-industrial/10 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-machine-yellow"
                >
                  {tag}
                </span>
              ))}
            </div>

            <ul className="mt-10 grid max-w-4xl gap-3 sm:grid-cols-2">
              {service.specs.map((spec) => (
                <li key={spec} className="flex min-w-0 items-start gap-3">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-sm bg-machine-yellow text-espresso-deep">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="min-w-0 text-sm leading-relaxed text-sand/85">{spec}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <ServiceGallery items={service.gallery} title={service.title} />
      </main>
      <ContactFooter />
    </div>
  );
}
