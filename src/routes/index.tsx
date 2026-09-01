import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { ServiceSection } from "@/components/site/ServiceSection";
import { ContactFooter } from "@/components/site/ContactFooter";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { SERVICES } from "@/components/site/data";

const TITLE = "Dos Hermanos | Maquinaria Pesada, Maestranza y Mantención Industrial";
const DESCRIPTION =
  "Soldadura, mecánica pesada, mecanizado CNC, granallado y pintura industrial, y fabricación de partes y piezas con trazabilidad y respuesta rápida en terreno.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Dos Hermanos",
          description: DESCRIPTION,
          email: "contacto@doshermanos.cl",
          areaServed: "CL",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        {SERVICES.map((service, i) => (
          <ServiceSection key={service.id} service={service} reversed={i % 2 === 1} />
        ))}
      </main>
      <ContactFooter />
      <FloatingWhatsApp />
    </div>
  );
}
