import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Mail, Menu, X } from "lucide-react";
import logoDosHermanos from "@/assets/Logos/LogoDosHermanos.png";
import { CONTACT, NAV_LINKS } from "./data";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-mocha/60 bg-espresso-deep/95 backdrop-blur-md"
          : "border-transparent bg-espresso-deep/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:py-4">
        <Link
          to="/"
          className="flex min-w-0 shrink-0 items-center gap-3 rounded-md transition-opacity hover:opacity-95 focus-visible:ring-2 focus-visible:ring-machine-yellow"
        >
          <img
            src={logoDosHermanos}
            alt="Servicios Mineros Dos Hermanos"
            width={40}
            height={40}
            className="h-10 w-auto shrink-0 object-contain drop-shadow"
          />
          <span className="min-w-0 leading-none">
            <span className="block truncate font-display text-xl font-bold uppercase tracking-wide text-sand">
              Dos <span className="text-machine-yellow">Hermanos</span>
            </span>
            <span className="mt-1 block truncate text-[10px] uppercase tracking-[0.2em] text-sand/65">
              Servicios Mineros e Industria
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Navegación principal">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-machine-yellow" }}
              className="rounded-sm font-display text-sm font-medium uppercase tracking-widest text-sand/80 transition-colors hover:text-machine-yellow focus-visible:text-machine-yellow focus-visible:ring-2 focus-visible:ring-machine-yellow"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2.5">
          <a
            href={`mailto:${CONTACT.email}`}
            className="hidden items-center gap-2 rounded-full border border-amber-industrial/60 px-4 py-2 text-sm font-medium text-sand transition-colors hover:border-machine-yellow hover:text-machine-yellow focus-visible:ring-2 focus-visible:ring-machine-yellow md:inline-flex"
          >
            <Mail className="h-4 w-4 shrink-0 text-machine-yellow" />
            {CONTACT.email}
          </a>
          <Link
            to="/"
            hash="contacto"
            className="inline-flex items-center gap-2 rounded-md bg-machine-yellow px-4 py-2 font-display text-sm font-semibold uppercase tracking-wider text-espresso-deep shadow-industrial transition-transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-machine-yellow"
          >
            Cotizar
          </Link>
          <button
            type="button"
            aria-label={open ? "Cerrar menú principal" : "Abrir menú principal"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-mocha text-sand transition-colors hover:border-machine-yellow focus-visible:ring-2 focus-visible:ring-machine-yellow xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Navegación móvil"
          className="border-t border-mocha/60 bg-espresso-deep px-4 pb-6 pt-2 animate-in fade-in slide-in-from-top-2 duration-200 xl:hidden"
        >
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-machine-yellow font-semibold" }}
              className="block border-b border-mocha/40 py-3 font-display text-sm uppercase tracking-widest text-sand/85 transition-colors hover:text-machine-yellow"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/"
            hash="contacto"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-md bg-machine-yellow px-4 py-2.5 text-center font-display text-sm font-semibold uppercase tracking-wider text-espresso-deep shadow-industrial"
          >
            Solicitar Cotización
          </Link>
          <a
            href={`mailto:${CONTACT.email}`}
            onClick={() => setOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 rounded-md border border-amber-industrial/60 px-4 py-2.5 text-sm text-sand transition-colors hover:border-machine-yellow"
          >
            <Mail className="h-4 w-4 text-machine-yellow" />
            {CONTACT.email}
          </a>
        </nav>
      )}
    </header>
  );
}
