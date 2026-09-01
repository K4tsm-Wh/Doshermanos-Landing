import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { CONTACT, NAV_LINKS } from "./data";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-mocha/60 bg-espresso-deep/95 backdrop-blur-md"
          : "border-transparent bg-espresso-deep/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:py-4">
        <a href="#inicio" className="flex min-w-0 items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-machine-yellow font-display text-lg font-bold text-espresso-deep">
            DH
          </span>
          <span className="min-w-0 leading-none">
            <span className="block truncate font-display text-xl font-bold uppercase tracking-wide text-sand">
              Dos <span className="text-machine-yellow">Hermanos</span>
            </span>
            <span className="mt-1 block truncate text-[10px] uppercase tracking-[0.2em] text-sand/60">
              Maquinaria pesada e industria
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 xl:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="font-display text-sm font-medium uppercase tracking-widest text-sand/75 transition-colors hover:text-machine-yellow"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={CONTACT.phoneHref}
            className="hidden items-center gap-2 rounded-full border border-amber-industrial/60 px-4 py-2 text-sm font-medium text-sand transition-colors hover:border-machine-yellow hover:text-machine-yellow sm:inline-flex"
          >
            <Phone className="h-4 w-4 shrink-0 text-machine-yellow" />
            {CONTACT.phone}
          </a>
          <a
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-whatsapp px-4 py-2 text-sm font-semibold text-espresso-deep shadow-industrial transition-transform hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="h-4 w-4 shrink-0" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
          <button
            type="button"
            aria-label="Abrir menú"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-mocha text-sand xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-mocha/60 bg-espresso-deep px-4 pb-4 xl:hidden">
          {NAV_LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className="block border-b border-mocha/40 py-3 font-display text-sm uppercase tracking-widest text-sand/80 transition-colors hover:text-machine-yellow"
            >
              {l.label}
            </a>
          ))}
          <a
            href={CONTACT.phoneHref}
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-amber-industrial/60 px-4 py-2 text-sm text-sand"
          >
            <Phone className="h-4 w-4 text-machine-yellow" />
            {CONTACT.phone}
          </a>
        </nav>
      )}
    </header>
  );
}
