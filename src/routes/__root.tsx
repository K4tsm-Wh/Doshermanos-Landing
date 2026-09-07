import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Toaster } from "../components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-espresso-deep px-4 py-16">
      <div className="max-w-lg text-center">
        <span className="eyebrow inline-block rounded-md border border-machine-yellow/40 bg-machine-yellow/10 px-3 py-1 text-xs text-machine-yellow">
          Error 404 · Maestranza
        </span>
        <h1 className="mt-4 font-display text-6xl font-bold tracking-wider text-sand sm:text-7xl">
          Página no encontrada
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-sand/75 sm:text-base">
          El componente o la sección que buscas no existe o ha sido reubicada. Te invitamos a
          regresar al inicio para revisar nuestros servicios y líneas de maestranza.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-md bg-machine-yellow px-5 py-2.5 font-display text-sm font-semibold uppercase tracking-wider text-espresso-deep shadow-industrial transition-transform hover:-translate-y-0.5"
          >
            <Home className="h-4 w-4" />
            Volver al inicio
          </Link>
          <Link
            to="/"
            hash="contacto"
            className="inline-flex items-center gap-2 rounded-md border border-sand/30 px-5 py-2.5 font-display text-sm font-semibold uppercase tracking-wider text-sand transition-colors hover:border-machine-yellow hover:text-machine-yellow"
          >
            Contacto de Gerencia
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-espresso-deep px-4 py-16">
      <div className="max-w-lg text-center">
        <span className="inline-grid h-12 w-12 place-items-center rounded-full bg-destructive/20 text-destructive">
          <AlertTriangle className="h-6 w-6" />
        </span>
        <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-sand sm:text-4xl">
          Dificultad técnica momentánea
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-sand/75">
          Ocurrió un error inesperado al cargar la vista. Puedes reintentar la operación o volver a
          la página principal.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center gap-2 rounded-md bg-machine-yellow px-5 py-2.5 font-display text-sm font-semibold uppercase tracking-wider text-espresso-deep shadow-industrial transition-transform hover:-translate-y-0.5"
          >
            <RefreshCw className="h-4 w-4" />
            Reintentar
          </button>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-md border border-sand/30 px-5 py-2.5 font-display text-sm font-semibold uppercase tracking-wider text-sand transition-colors hover:border-machine-yellow hover:text-machine-yellow"
          >
            <Home className="h-4 w-4" />
            Ir al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Dos Hermanos | Servicios Industriales y Maquinaria Pesada" },
      {
        name: "description",
        content:
          "Maestranza y mantención industrial en Coquimbo: soldadura estructural, mecánica pesada, mecanizado CNC, granallado y pintura, y fabricación de piezas críticas.",
      },
      { property: "og:site_name", content: "Dos Hermanos" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_CL" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700&family=Inter:wght@400;500;600&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-machine-yellow focus:px-4 focus:py-2 focus:font-display focus:text-xs focus:font-bold focus:uppercase focus:text-espresso-deep focus:shadow-industrial"
        >
          Saltar al contenido principal
        </a>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <Toaster position="bottom-right" richColors />
    </QueryClientProvider>
  );
}
