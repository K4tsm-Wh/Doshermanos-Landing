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


export const SERVICES: Service[] = [
  {
    id: "soldadura",
    index: "01",
    category: "Estructuras & Calderería",
    title: "Soldadura",
    description:
      "Soldadura de alta resistencia, recuperación estructural y homologaciones técnicas.",
    tags: ["MIG / TIG / Arco Sumergido", "Recuperación Estructural", "Control de Calidad"],
    specs: [
      "Procedimientos calificados y soldadores homologados",
      "Recuperación de chasis, bastidores y estructuras críticas",
      "Inspección visual y ensayos no destructivos según norma",
    ],
    image: soldadura,
  },
  {
    id: "mecanica",
    index: "02",
    category: "Sistemas & Potencia",
    title: "Mecánica",
    description:
      "Mantención y reparación integral de componentes mecánicos, transmisiones y sistemas hidráulicos pesados.",
    tags: ["Mecánica Pesada", "Diagnóstico & Overhaul", "Sistemas Hidráulicos"],
    specs: [
      "Overhaul de transmisiones, mandos finales y motores",
      "Reparación de cilindros, bombas y mangueras de alta presión",
      "Diagnóstico en terreno con informe técnico y trazabilidad",
    ],
    image: mecanica,
  },
  {
    id: "mecanizado",
    index: "03",
    category: "Precisión Industrial",
    title: "Mecanizado",
    description:
      "Tornería, fresado y mecanizado CNC/convencional para tolerancias y ajustes de alta exigencia.",
    tags: ["Torno & Fresa", "Mecanizado In Situ", "Ajuste de Tolerancias"],
    specs: [
      "Tornería y fresado CNC y convencional de gran formato",
      "Mecanizado in situ para pines, bujes y alojamientos",
      "Metrología y verificación dimensional de cada pieza",
    ],
    image: mecanizado,
  },
  {
    id: "granallado",
    index: "04",
    category: "Protección Superficial",
    title: "Granallado y Pintura",
    description:
      "Preparación de superficies bajo estándares SSPC/NACE y esquemas de recubrimiento epóxico y anticorrosivo industrial.",
    tags: ["Granallado", "Pintura Industrial", "Recubrimientos Anticorrosivos"],
    specs: [
      "Preparación de superficie SSPC-SP6 / SP10",
      "Esquemas epóxicos y poliuretano de alto espesor",
      "Control de espesor de película seca y adherencia",
    ],
    image: granallado,
  },
  {
    id: "fabricacion",
    index: "05",
    category: "Ingeniería y Repuestos",
    title: "Fabricación y Mantención de Partes y Piezas",
    description:
      "Reconstrucción, diseño y fabricación a medida de repuestos y piezas críticas para continuidad operacional.",
    tags: ["Fabricación a Medida", "Reingeniería de Componentes", "Mantención Preventiva"],
    specs: [
      "Levantamiento dimensional y planos de fabricación",
      "Reconstrucción de piezas descontinuadas o sin stock",
      "Planes de mantención preventiva por equipo y criticidad",
    ],
    image: fabricacion,
  },
];
