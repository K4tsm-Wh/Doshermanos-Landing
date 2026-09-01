import soldadura from "@/assets/soldadura.jpg";
import mecanica from "@/assets/mecanica.jpg";
import mecanizado from "@/assets/mecanizado.jpg";
import granallado from "@/assets/granallado.jpg";
import fabricacion from "@/assets/fabricacion.jpg";

export const CONTACT = {
  phone: "+56 9 1234 5678",
  phoneHref: "tel:+56912345678",
  whatsappHref: "https://wa.me/56912345678",
  email: "contacto@doshermanos.cl",
  address: "Camino Industrial 1450, Parque Industrial, Chile",
  mapsHref: "https://www.google.com/maps/search/?api=1&query=Parque+Industrial+Chile",
  mapsEmbed:
    "https://www.google.com/maps?q=-33.4489,-70.6693&z=13&output=embed",
};

export const NAV_LINKS = [
  { id: "inicio", label: "Inicio" },
  { id: "soldadura", label: "Soldadura" },
  { id: "mecanica", label: "Mecánica" },
  { id: "mecanizado", label: "Mecanizado" },
  { id: "granallado", label: "Granallado y Pintura" },
  { id: "fabricacion", label: "Fabricación y Mantención" },
  { id: "contacto", label: "Contacto" },
];

export type Service = {
  id: string;
  index: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  specs: string[];
  image: string;
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
