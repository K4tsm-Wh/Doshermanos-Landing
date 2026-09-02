import { Award, FileCheck2, ShieldCheck, Truck } from "lucide-react";
import logoCat from "@/assets/Logos/logo_cat.png";

const ITEMS = [
  { icon: ShieldCheck, title: "Normas de Calidad & Seguridad", text: "Procedimientos y EPP bajo estándar industrial." },
  { icon: FileCheck2, title: "Trazabilidad Garantizada", text: "Informe técnico y registro por cada intervención." },
  { icon: Truck, title: "Capacidad Operativa en Terreno", text: "Equipos móviles para faena y planta." },
  { icon: Award, title: "Estándar de Alta Exigencia", text: "Experiencia en repuestos y componentes pesados." },
];

export function TrustBar() {
  return (
    <section className="border-y border-border bg-sand">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="flex min-w-0 items-start gap-3 rounded-md border border-border bg-background/70 p-4 transition-shadow hover:shadow-industrial"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-machine-yellow/25 text-steel-brown">
                <Icon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-sm font-bold tracking-wide text-espresso">{title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground">
          <span className="font-display font-semibold uppercase tracking-widest text-espresso/70">
            Respaldo y experiencia en maquinaria pesada
          </span>
          <div className="flex items-center gap-3">
            <span className="text-[11px] text-muted-foreground/80">Especialización en componentes:</span>
            <img src={logoCat} alt="Finning CAT" className="h-6 w-auto object-contain opacity-80" />
          </div>
        </div>
      </div>
    </section>
  );
}
