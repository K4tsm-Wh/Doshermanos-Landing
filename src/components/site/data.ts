import soldadura from "@/assets/soldadura.jpg";
import mecanica from "@/assets/mecanica.jpg";
import mecanizado from "@/assets/mecanizado.jpg";
import granallado from "@/assets/granallado.jpg";
import fabricacion from "@/assets/fabricacion.jpg";
import hero from "@/assets/hero.jpg";

export const CONTACT = {
  email: "gerencia@doshermanos.cl",
  address: "Barrio Industrial, Coquimbo, Chile",
  mapsHref: "https://maps.app.goo.gl/xpCfNxMUMNNVnXzV8",
  mapsEmbed:
    "https://www.google.com/maps?q=-30.000025,-71.259798&z=15&output=embed",
};

export const SERVICE_PATHS = {
  soldadura: "/soldadura",
  mecanica: "/mecanica",
  mecanizado: "/mecanizado",
  granallado: "/granallado-y-pintura",
  fabricacion: "/fabricacion-y-mantencion",
} as const;

export type ServicePath = (typeof SERVICE_PATHS)[keyof typeof SERVICE_PATHS];

export const NAV_LINKS: { to: ServicePath | "/"; label: string }[] = [
  { to: "/", label: "Inicio" },
  { to: SERVICE_PATHS.soldadura, label: "Soldadura" },
  { to: SERVICE_PATHS.mecanica, label: "Mecánica" },
  { to: SERVICE_PATHS.mecanizado, label: "Mecanizado" },
  { to: SERVICE_PATHS.granallado, label: "Granallado y Pintura" },
  { to: SERVICE_PATHS.fabricacion, label: "Fabricación y Mantención" },
];

export type GalleryItem = { src: string; alt: string; ratio: "video" | "portrait" | "square" };

export type Highlight = { title: string; items: string[] };

export type Service = {
  id: string;
  path: ServicePath;
  index: string;
  category: string;
  title: string;
  description: string;
  overview: string;
  tags: string[];
  specs: string[];
  image: string;
  gallery: GalleryItem[];
  highlights: Highlight[];
  meta: { title: string; description: string };
};


