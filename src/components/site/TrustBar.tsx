import { Clock, FileCheck2, ShieldCheck, Truck } from "lucide-react";

const ITEMS = [
  { icon: ShieldCheck, title: "Normas de Calidad & Seguridad", text: "Procedimientos y EPP bajo estándar industrial." },
  { icon: FileCheck2, title: "Trazabilidad Garantizada", text: "Informe técnico y registro por cada intervención." },
  { icon: Truck, title: "Capacidad Operativa en Terreno", text: "Equipos móviles para faena y planta." },
  { icon: Clock, title: "Respuesta Rápida", text: "Atención de urgencias y turnos coordinados." },
];

export function TrustBar() {
  return (
    <section className="border-y border-border bg-sand">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
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
    </section>
  );
}
