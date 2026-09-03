import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailLayout } from "@/components/site/ServiceDetailLayout";
import { getService } from "@/components/site/data";

const service = getService("mecanica");

export const Route = createFileRoute("/mecanica")({
  head: () => ({
    meta: [
      { title: service.meta.title },
      { name: "description", content: service.meta.description },
      { property: "og:title", content: service.meta.title },
      { property: "og:description", content: service.meta.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ServiceDetailLayout service={service} />,
});
