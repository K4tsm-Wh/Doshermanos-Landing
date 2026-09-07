import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { CheckCircle2, ChevronDown, Loader2, Send, ShieldCheck, Sparkles } from "lucide-react";

const quoteSchema = z.object({
  empresa: z
    .string()
    .trim()
    .min(2, "Ingresa la razón social o nombre de tu empresa (mín. 2 caracteres)"),
  nombre: z.string().trim().min(2, "Ingresa tu nombre y apellido de contacto"),
  email: z.string().trim().email("Ingresa un correo electrónico corporativo válido"),
  telefono: z.string().trim().min(8, "Ingresa un teléfono o celular de contacto (mín. 8 dígitos)"),
  servicio: z
    .string({ required_error: "Selecciona una división o servicio" })
    .min(1, "Selecciona una división de servicio"),
  mensaje: z
    .string()
    .trim()
    .min(10, "Describe brevemente el requerimiento o componente a intervenir (mín. 10 caracteres)"),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

const SERVICE_OPTIONS = [
  { value: "soldadura", label: "01 — Soldadura Estructural & Calderería" },
  { value: "mecanica", label: "02 — Mecánica Pesada & Sistemas Hidráulicos" },
  { value: "mecanizado", label: "03 — Tornería & Mecanizado CNC / In Situ" },
  { value: "granallado", label: "04 — Granallado & Pintura Industrial Anticorrosiva" },
  { value: "fabricacion", label: "05 — Fabricación & Mantención de Partes y Piezas" },
  { value: "terreno", label: "06 — Diagnóstico & Asistencia Técnica en Faena" },
];

export function QuoteForm() {
  const [submittedData, setSubmittedData] = useState<{
    folio: string;
    empresa: string;
    servicio: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      empresa: "",
      nombre: "",
      email: "",
      telefono: "",
      servicio: "",
      mensaje: "",
    },
  });

  const onSubmit = async (data: QuoteFormData) => {
    // Simulación de envío seguro client-side con delay asíncrono
    await new Promise((resolve) => setTimeout(resolve, 900));

    const folio = `DH-${new Date().getFullYear()}${(new Date().getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${Math.floor(1000 + Math.random() * 9000)}`;

    const selectedLabel =
      SERVICE_OPTIONS.find((s) => s.value === data.servicio)?.label ?? data.servicio;

    setSubmittedData({
      folio,
      empresa: data.empresa,
      servicio: selectedLabel,
    });

    toast.success("Solicitud de cotización enviada con éxito", {
      description: `Folio ${folio}. El equipo técnico de gerencia revisará tu requerimiento a la brevedad.`,
    });
  };

  const handleReset = () => {
    setSubmittedData(null);
    reset();
  };

  if (submittedData) {
    return (
      <div className="rounded-md border border-machine-yellow/40 bg-steel-brown/35 p-6 text-sand shadow-industrial sm:p-8 animate-in fade-in duration-300">
        <div className="flex items-center gap-3 text-machine-yellow">
          <CheckCircle2 className="h-8 w-8 shrink-0" />
          <div>
            <span className="eyebrow text-xs uppercase tracking-widest text-machine-yellow">
              Solicitud Ingresada
            </span>
            <h3 className="font-display text-2xl font-bold text-sand sm:text-3xl">
              Cotización en Proceso de Evaluación
            </h3>
          </div>
        </div>

        <div className="mt-6 rounded-md border border-mocha bg-espresso-deep/80 p-4">
          <div className="grid gap-2 text-xs sm:grid-cols-2">
            <div>
              <span className="text-sand/50">Código de Folio:</span>
              <p className="font-display text-base font-bold text-machine-yellow">
                {submittedData.folio}
              </p>
            </div>
            <div>
              <span className="text-sand/50">Empresa:</span>
              <p className="font-medium text-sand">{submittedData.empresa}</p>
            </div>
            <div className="sm:col-span-2">
              <span className="text-sand/50">División Solicitada:</span>
              <p className="font-medium text-sand">{submittedData.servicio}</p>
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-start gap-2.5 text-xs text-sand/70">
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-machine-yellow" />
          <p>
            Tiempo estimado de respuesta técnica:{" "}
            <strong className="text-sand">menos de 24 horas hábiles</strong>. Copia de respaldo
            enviada a revisión directa de gerencia de operaciones.
          </p>
        </div>

        <div className="mt-6">
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-2 rounded-md border border-machine-yellow/60 px-4 py-2 font-display text-xs font-semibold uppercase tracking-wider text-machine-yellow transition-colors hover:bg-machine-yellow hover:text-espresso-deep"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Ingresar otra consulta
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-md border border-mocha bg-steel-brown/30 p-6 shadow-industrial sm:p-8"
    >
      <div className="border-b border-mocha/70 pb-4">
        <span className="eyebrow text-xs text-machine-yellow">Atención Directa B2B</span>
        <h3 className="mt-1 font-display text-2xl font-bold text-sand sm:text-3xl">
          Solicitar Cotización u Orden de Trabajo
        </h3>
        <p className="mt-1.5 text-xs leading-relaxed text-sand/70 sm:text-sm">
          Completa los datos de tu empresa y el servicio requerido. Responderemos con propuesta
          técnica y disponibilidad operativa.
        </p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {/* Empresa */}
        <div>
          <label
            htmlFor="quote-empresa"
            className="block text-xs font-medium uppercase tracking-wider text-sand/80"
          >
            Empresa / Razón Social <span className="text-machine-yellow">*</span>
          </label>
          <input
            id="quote-empresa"
            type="text"
            disabled={isSubmitting}
            placeholder="Ej: Minera San Pedro SpA"
            {...register("empresa")}
            className="mt-1.5 w-full rounded-md border border-mocha bg-espresso-deep/90 px-3.5 py-2.5 text-sm text-sand placeholder:text-sand/35 focus:border-machine-yellow focus:outline-none focus:ring-1 focus:ring-machine-yellow disabled:opacity-60"
            aria-invalid={!!errors.empresa}
            aria-describedby={errors.empresa ? "quote-empresa-error" : undefined}
          />
          {errors.empresa && (
            <p id="quote-empresa-error" className="mt-1 text-xs text-amber-300">
              {errors.empresa.message}
            </p>
          )}
        </div>

        {/* Nombre de contacto */}
        <div>
          <label
            htmlFor="quote-nombre"
            className="block text-xs font-medium uppercase tracking-wider text-sand/80"
          >
            Nombre del Contacto <span className="text-machine-yellow">*</span>
          </label>
          <input
            id="quote-nombre"
            type="text"
            disabled={isSubmitting}
            placeholder="Ej: Rodrigo Valenzuela"
            {...register("nombre")}
            className="mt-1.5 w-full rounded-md border border-mocha bg-espresso-deep/90 px-3.5 py-2.5 text-sm text-sand placeholder:text-sand/35 focus:border-machine-yellow focus:outline-none focus:ring-1 focus:ring-machine-yellow disabled:opacity-60"
            aria-invalid={!!errors.nombre}
            aria-describedby={errors.nombre ? "quote-nombre-error" : undefined}
          />
          {errors.nombre && (
            <p id="quote-nombre-error" className="mt-1 text-xs text-amber-300">
              {errors.nombre.message}
            </p>
          )}
        </div>

        {/* Correo corporativo */}
        <div>
          <label
            htmlFor="quote-email"
            className="block text-xs font-medium uppercase tracking-wider text-sand/80"
          >
            Email Corporativo <span className="text-machine-yellow">*</span>
          </label>
          <input
            id="quote-email"
            type="email"
            disabled={isSubmitting}
            placeholder="rvalenzuela@empresa.cl"
            {...register("email")}
            className="mt-1.5 w-full rounded-md border border-mocha bg-espresso-deep/90 px-3.5 py-2.5 text-sm text-sand placeholder:text-sand/35 focus:border-machine-yellow focus:outline-none focus:ring-1 focus:ring-machine-yellow disabled:opacity-60"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "quote-email-error" : undefined}
          />
          {errors.email && (
            <p id="quote-email-error" className="mt-1 text-xs text-amber-300">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Teléfono */}
        <div>
          <label
            htmlFor="quote-telefono"
            className="block text-xs font-medium uppercase tracking-wider text-sand/80"
          >
            Teléfono de Contacto <span className="text-machine-yellow">*</span>
          </label>
          <input
            id="quote-telefono"
            type="tel"
            disabled={isSubmitting}
            placeholder="+56 9 1234 5678"
            {...register("telefono")}
            className="mt-1.5 w-full rounded-md border border-mocha bg-espresso-deep/90 px-3.5 py-2.5 text-sm text-sand placeholder:text-sand/35 focus:border-machine-yellow focus:outline-none focus:ring-1 focus:ring-machine-yellow disabled:opacity-60"
            aria-invalid={!!errors.telefono}
            aria-describedby={errors.telefono ? "quote-telefono-error" : undefined}
          />
          {errors.telefono && (
            <p id="quote-telefono-error" className="mt-1 text-xs text-amber-300">
              {errors.telefono.message}
            </p>
          )}
        </div>

        {/* Selección de división */}
        <div className="sm:col-span-2">
          <label
            htmlFor="quote-servicio"
            className="block text-xs font-medium uppercase tracking-wider text-sand/80"
          >
            División / Servicio Requerido <span className="text-machine-yellow">*</span>
          </label>
          <div className="relative mt-1.5">
            <select
              id="quote-servicio"
              disabled={isSubmitting}
              {...register("servicio")}
              className="w-full appearance-none rounded-md border border-mocha bg-espresso-deep/90 px-3.5 py-2.5 text-sm text-sand focus:border-machine-yellow focus:outline-none focus:ring-1 focus:ring-machine-yellow disabled:opacity-60"
              aria-invalid={!!errors.servicio}
              aria-describedby={errors.servicio ? "quote-servicio-error" : undefined}
            >
              <option value="" disabled className="text-sand/40">
                Selecciona una división técnica...
              </option>
              {SERVICE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-espresso-deep text-sand">
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3.5 top-3 h-4 w-4 text-sand/50" />
          </div>
          {errors.servicio && (
            <p id="quote-servicio-error" className="mt-1 text-xs text-amber-300">
              {errors.servicio.message}
            </p>
          )}
        </div>

        {/* Mensaje / Requerimiento */}
        <div className="sm:col-span-2">
          <label
            htmlFor="quote-mensaje"
            className="block text-xs font-medium uppercase tracking-wider text-sand/80"
          >
            Detalle del Requerimiento / Equipo <span className="text-machine-yellow">*</span>
          </label>
          <textarea
            id="quote-mensaje"
            rows={3}
            disabled={isSubmitting}
            placeholder="Describe modelo de equipo, componente crítico, faena o requerimiento técnico..."
            {...register("mensaje")}
            className="mt-1.5 w-full rounded-md border border-mocha bg-espresso-deep/90 px-3.5 py-2.5 text-sm text-sand placeholder:text-sand/35 focus:border-machine-yellow focus:outline-none focus:ring-1 focus:ring-machine-yellow disabled:opacity-60"
            aria-invalid={!!errors.mensaje}
            aria-describedby={errors.mensaje ? "quote-mensaje-error" : undefined}
          />
          {errors.mensaje && (
            <p id="quote-mensaje-error" className="mt-1 text-xs text-amber-300">
              {errors.mensaje.message}
            </p>
          )}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-mocha/60 pt-4">
        <p className="text-xs text-sand/60">
          Campos obligatorios <span className="text-machine-yellow">*</span> · Privacidad y
          confidencialidad comercial garantizadas.
        </p>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center gap-2 rounded-md bg-machine-yellow px-6 py-2.5 font-display text-sm font-semibold uppercase tracking-wider text-espresso-deep shadow-industrial transition-transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-machine-yellow disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Procesando envío...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Enviar Cotización
            </>
          )}
        </button>
      </div>
    </form>
  );
}
