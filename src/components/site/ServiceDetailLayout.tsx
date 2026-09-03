import { Link } from "@tanstack/react-router";
import { ChevronRight, Check, Mail } from "lucide-react";
import { Navbar } from "./Navbar";
import { ContactFooter } from "./ContactFooter";
import { ServiceGallery } from "./ServiceGallery";
import { CONTACT, type Service } from "./data";

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

        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
            <span className="eyebrow text-xs text-amber-industrial">Detalle Técnico</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-espresso sm:text-4xl">
              Alcance, equipamiento y control de calidad
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {service.highlights.map((block) => (
                <div
                  key={block.title}
                  className="rounded-md border border-border bg-warm-gray/60 p-6 transition-shadow hover:shadow-industrial"
                >
                  <h3 className="font-display text-lg font-bold uppercase tracking-wide text-espresso">
                    {block.title}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {block.items.map((item) => (
                      <li key={item} className="flex min-w-0 items-start gap-2.5">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-industrial" />
                        <span className="min-w-0 text-sm leading-relaxed text-steel-brown">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-mocha bg-steel-brown/95">
          <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 py-14 sm:px-6 lg:grid-cols-[minmax(0,1fr)_auto]">
            <div className="min-w-0">
              <h2 className="font-display text-2xl font-bold leading-tight text-sand sm:text-3xl">
                ¿Necesitas soporte técnico en {service.title}? Contacta a nuestra Gerencia
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-sand/75">
                Escríbenos directamente para evaluar tu requerimiento, coordinar visitas técnicas en faena
                o solicitar la presentación corporativa de nuestros servicios.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(`Consulta Técnica - ${service.title}`)}`}
                className="inline-flex items-center gap-2 rounded-md bg-machine-yellow px-6 py-3 font-display text-sm font-semibold uppercase tracking-wider text-espresso-deep transition-transform hover:-translate-y-0.5"
              >
                <Mail className="h-4 w-4" />
                Escribir a Gerencia
              </a>
              <Link
                to="/"
                hash="contacto"
                className="inline-flex items-center gap-2 rounded-md border border-machine-yellow/60 px-6 py-3 font-display text-sm font-semibold uppercase tracking-wider text-machine-yellow transition-colors hover:bg-machine-yellow/10"
              >
                Contacto Corporativo
              </Link>
            </div>
          </div>
        </section>
      </main>
      <ContactFooter />
    </div>
  );
}
