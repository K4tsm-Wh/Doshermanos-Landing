import soldadura from "@/assets/soldadura.jpg";
import mecanica from "@/assets/mecanica.jpg";
import mecanizado from "@/assets/mecanizado.jpg";
import granallado from "@/assets/granallado.jpg";
import fabricacion from "@/assets/fabricacion.jpg";
import hero from "@/assets/hero.jpg";

// Mecánica gallery assets
import mecanicaOverhaul from "@/assets/gallery/mecanica/overhaul-transmision.jpg";
import mecanicaCilindro from "@/assets/gallery/mecanica/reparacion-cilindro.jpg";
import mecanicaTerreno from "@/assets/gallery/mecanica/diagnostico-terreno.jpg";
import mecanicaMotor from "@/assets/gallery/mecanica/overhaul-motor-diesel.jpg";
import mecanicaBomba from "@/assets/gallery/mecanica/banco-pruebas-hidraulico.jpg";
import mecanicaEngranajes from "@/assets/gallery/mecanica/ajuste-mandos-finales.jpg";

// Soldadura gallery assets
import soldaduraMig from "@/assets/gallery/soldadura/soldadura-mig-vigas.jpg";
import soldaduraTig from "@/assets/gallery/soldadura/soldadura-tig-canerias.jpg";
import soldaduraBalde from "@/assets/gallery/soldadura/recuperacion-balde-minero.jpg";
import soldaduraNdt from "@/assets/gallery/soldadura/ensayo-ultrasonido-ndt.jpg";

// Mecanizado gallery assets
import mecanizadoEje from "@/assets/gallery/mecanizado/torneado-cnc-eje.jpg";
import mecanizadoFresado from "@/assets/gallery/mecanizado/fresado-cnc-5ejes.jpg";
import mecanizadoCad from "@/assets/gallery/mecanizado/cnc-precision.jpg";

export const CONTACT = {
  email: "gerencia@doshermanos.cl",
  address: "Barrio Industrial, Coquimbo, Chile",
  mapsHref: "https://maps.app.goo.gl/xpCfNxMUMNNVnXzV8",
  mapsEmbed: "https://www.google.com/maps?q=-30.000025,-71.259798&z=15&output=embed",
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

export type GalleryItem = { src: string; alt: string; ratio?: "video" | "portrait" | "square" };

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
    path: SERVICE_PATHS.soldadura,
    index: "01",
    category: "Estructuras & Calderería",
    title: "Soldadura",
    description:
      "Soldadura de alta resistencia, recuperación estructural y homologaciones técnicas.",
    overview:
      "Ejecutamos soldadura estructural y de recuperación en aceros al carbono, inoxidables y aceros de alta resistencia, con procedimientos calificados (WPS/PQR) y soldadores homologados. Trabajamos tanto en maestranza como en faena, con equipos móviles, control dimensional y ensayos no destructivos que respaldan cada intervención sobre componentes críticos de maquinaria pesada.",
    tags: ["MIG / TIG / Arco Sumergido", "Recuperación Estructural", "Control de Calidad"],
    specs: [
      "Procedimientos calificados y soldadores homologados",
      "Recuperación de chasis, bastidores y estructuras críticas",
      "Inspección visual y ensayos no destructivos según norma",
    ],
    image: soldadura,
    gallery: [
      { src: soldaduraMig, alt: "Soldadura MIG/MAG en vigas y estructuras pesadas" },
      { src: soldaduraTig, alt: "Soldadura TIG de precisión en cañerías industriales" },
      { src: soldaduraBalde, alt: "Recuperación y blindaje de balde para maquinaria pesada" },
      { src: soldaduraNdt, alt: "Control de calidad con ensayo de ultrasonido NDT" },
      { src: soldadura, alt: "Soldadura manual y arco sumergido en maestranza" },
      { src: hero, alt: "Reparación estructural de maquinaria pesada en faena" },
    ],
    highlights: [
      {
        title: "Aplicaciones",
        items: [
          "Chasis y bastidores",
          "Tolvas y baldes",
          "Estructuras y calderería",
          "Reparación de fisuras",
        ],
      },
      {
        title: "Equipamiento",
        items: [
          "Equipos MIG/MAG y TIG",
          "Arco sumergido",
          "Plantas móviles en faena",
          "Precalentamiento controlado",
        ],
      },
      {
        title: "Aseguramiento de calidad",
        items: [
          "WPS / PQR vigentes",
          "Inspección visual certificada",
          "Ensayos no destructivos",
          "Informe técnico por trabajo",
        ],
      },
    ],
    meta: {
      title: "Soldadura Industrial y Estructural | Dos Hermanos",
      description:
        "Soldadura MIG, TIG y arco sumergido con procedimientos calificados, recuperación estructural y ensayos no destructivos para maquinaria pesada.",
    },
  },
  {
    id: "mecanica",
    path: SERVICE_PATHS.mecanica,
    index: "02",
    category: "Desarme reparación y armado de componentes estructurales",
    title: "Mecánica",
    description:
      "Mantención y reparación integral de componentes mecánicos.",
    overview:
      "Cubrimos el ciclo completo de mantención mecánica de maquinaria pesada: diagnóstico, desarme, medición de componentes, reemplazo bajo especificación de fabricante y pruebas funcionales. Nuestra capacidad en terreno permite intervenir equipos detenidos en faena y reducir el tiempo fuera de servicio con trazabilidad de cada componente instalado.",
    tags: ["Mecánica Pesada", "Diagnóstico & Overhaul", "Sistemas Hidráulicos"],
    specs: [
      "Reparación de bastidores de tractores CAT, D8T, D9T, D10T, D11T",
      "Reparación de chasis de tractores CAT, D8T, D9T, D10T, D11T",
      "Reparación de mesa ripper de tractores CAT, D8T, D9T, D10T, D11T",
    ],
    image: mecanica,
    gallery: [
      { src: mecanicaOverhaul, alt: "Overhaul integral y ajuste de transmisiones pesadas" },
      { src: mecanicaCilindro, alt: "Reparación y prueba de presión en cilindros hidráulicos" },
      { src: mecanicaTerreno, alt: "Diagnóstico en faena y torque calibrado en camión minero" },
      { src: mecanicaMotor, alt: "Inspección micrométrica y overhaul de motor diésel" },
      { src: mecanicaBomba, alt: "Banco de pruebas hidráulicas y calibración de válvulas" },
      { src: mecanicaEngranajes, alt: "Calibración y ajuste de trenes de engranajes planetarios" },
    ],
    highlights: [
      {
        title: "Aplicaciones",
        items: [
          "Transmisiones y mandos finales",
          "Motores diésel",
          "Cilindros hidráulicos",
          "Sistemas de frenos",
        ],
      },
      {
        title: "Equipamiento",
        items: [
          "Bancos de prueba hidráulica",
          "Herramienta de torque calibrada",
          "Camiones de servicio",
          "Instrumentos de diagnóstico",
        ],
      },
      {
        title: "Aseguramiento de calidad",
        items: [
          "Medición de holguras",
          "Torques según fabricante",
          "Pruebas funcionales",
          "Registro de repuestos",
        ],
      },
    ],
    meta: {
      title: "Mecánica Pesada y Sistemas Hidráulicos | Dos Hermanos",
      description:
        "Overhaul de transmisiones, motores y mandos finales, reparación hidráulica y diagnóstico en terreno con informe técnico y trazabilidad.",
    },
  },
  {
    id: "mecanizado",
    path: SERVICE_PATHS.mecanizado,
    index: "03",
    category: "Precisión Industrial",
    title: "Mecanizado",
    description:
      "Tornería, fresado y mecanizado CNC/convencional para tolerancias y ajustes de fábrica para componentes CAT.",
    overview:
      "Fabricamos y rectificamos componentes con tolerancias exigentes mediante torno, fresa y mecanizado CNC, además de mecanizado in situ para alojamientos que no pueden desmontarse. Cada pieza se verifica dimensionalmente antes de la entrega, asegurando ajustes correctos en pines, bujes, ejes y bancadas de equipos mineros e industriales.",
    tags: ["Torno & Fresa", "Mecanizado In Situ", "Ajuste de Tolerancias"],
    specs: [
      "Metrología y verificación dimensional de cada pieza",
      "Instalación de pasadores con frío contracción",
      "Recuperación de alojamientos",
    ],
    image: mecanizado,
    gallery: [
      { src: mecanizadoEje, alt: "Torneado CNC de eje de transmisión en maestranza" },
      { src: mecanizadoFresado, alt: "Fresado CNC de precisión en centro de 5 ejes" },
      { src: mecanizado, alt: "Mecanizado y desbaste de componente mecánico cilíndrico" },
      { src: mecanizadoCad, alt: "Modelado CAD y programación CAM para mecanizado" },
      { src: fabricacion, alt: "Repuestos y bujes mecanizados listos para montaje" },
      { src: mecanicaEngranajes, alt: "Control dimensional y verificación de holguras" },
    ],
    highlights: [
      {
        title: "Aplicaciones",
        items: [
          "Pines y bujes",
          "Ejes y camisas",
          "Alojamientos y bancadas",
          "Rectificado de superficies",
        ],
      },
      {
        title: "Equipamiento",
        items: [
          "Torno CNC y convencional",
          "Fresadora universal",
          "Mandrinadora portátil",
          "Instrumentos de metrología",
        ],
      },
      {
        title: "Aseguramiento de calidad",
        items: [
          "Verificación dimensional",
          "Control de rugosidad",
          "Planos de fabricación",
          "Protocolo de entrega",
        ],
      },
    ],
    meta: {
      title: "Mecanizado CNC y Tornería Industrial | Dos Hermanos",
      description:
        "Tornería, fresado CNC y mecanizado in situ de pines, bujes y alojamientos con metrología y verificación dimensional certificada.",
    },
  },
  {
    id: "granallado",
    path: SERVICE_PATHS.granallado,
    index: "04",
    category: "Protección Superficial",
    title: "Granallado y Pintura",
    description:
      "Preparación y pintura de partes y piezas de componentes CAT.",
    overview:
      "Aplicamos esquemas de protección anticorrosiva completos: preparación de superficie por granallado según SSPC-SP6/SP10, imprimación y capas epóxicas o de poliuretano de alto espesor. Controlamos perfil de anclaje, espesor de película seca y adherencia, extendiendo la vida útil de estructuras y componentes expuestos a ambiente minero y costero.",
    tags: ["Granallado", "Pintura Industrial", "Recubrimientos Anticorrosivos"],
    specs: [
      "Limpieza de componentes CAT mediante granallado industrial",
      "Preparación de recubrimiento anticorrosivo de alta adherencia garantizando la protección de la estructura contra la oxidación y agentes ambientales",
      "Recubrimiento con pintura CAT de alta resistencia para protección contra la corrosión y desgaste",
    ],
    image: granallado,
    gallery: [
      { src: granallado, alt: "Granallado abrasivo de estanque según norma SSPC-SP10" },
      { src: soldaduraBalde, alt: "Componente pesado acondicionado para recubrimiento" },
      { src: fabricacion, alt: "Lote de piezas industriales con protección anticorrosiva" },
      { src: soldaduraMig, alt: "Preparación superficial de estructura metálica soldada" },
      { src: mecanicaCilindro, alt: "Cilindro hidráulico con recubrimiento de alta resistencia" },
      { src: hero, alt: "Protección superficial para maquinaria en faena minera" },
    ],
    highlights: [
      {
        title: "Aplicaciones",
        items: [
          "Estructuras y estanques",
          "Chasis y tolvas",
          "Piezas y componentes",
          "Repintado de flota",
        ],
      },
      {
        title: "Equipamiento",
        items: [
          "Cabina de granallado",
          "Equipos airless",
          "Compresores industriales",
          "Control de humedad y temperatura",
        ],
      },
      {
        title: "Aseguramiento de calidad",
        items: [
          "Perfil de anclaje medido",
          "Espesor de película seca",
          "Pruebas de adherencia",
          "Registro fotográfico",
        ],
      },
    ],
    meta: {
      title: "Granallado y Pintura Industrial Anticorrosiva | Dos Hermanos",
      description:
        "Preparación de superficie SSPC-SP6/SP10, esquemas epóxicos y poliuretano de alto espesor con control de espesor y adherencia.",
    },
  },
  {
    id: "fabricacion",
    path: SERVICE_PATHS.fabricacion,
    index: "05",
    category: "Ingeniería y Repuestos",
    title: "Fabricación y Mantención de Partes y Piezas",
    description:
      "Reconstrucción, diseño y fabricación a medida de repuestos y piezas críticas para continuidad operacional.",
    overview:
      "Desarrollamos repuestos y componentes a medida a partir de levantamiento dimensional, ingeniería inversa y planos de fabricación, incluyendo piezas descontinuadas o sin stock disponible. Complementamos con planes de mantención preventiva definidos por equipo y criticidad, orientados a sostener la continuidad operacional de faenas e industria.",
    tags: ["Fabricación a Medida", "Reingeniería de Componentes", "Mantención Preventiva"],
    specs: [
      "Levantamiento dimensional y planos de fabricación",
      "Reconstrucción de piezas descontinuadas o sin stock",
      "Planes de mantención preventiva por equipo y criticidad",
    ],
    image: fabricacion,
    gallery: [
      { src: fabricacion, alt: "Fabricación de repuestos y componentes industriales a medida" },
      { src: soldaduraBalde, alt: "Fabricación y blindaje de balde para maquinaria pesada" },
      { src: soldaduraMig, alt: "Armado y ensamble de estructuras metálicas pesadas" },
      { src: mecanizadoFresado, alt: "Mecanizado de precisión para ensamble de componentes" },
      { src: mecanicaOverhaul, alt: "Conjunto mecánico fabricado bajo plano de ingeniería" },
      { src: soldaduraNdt, alt: "Aseguramiento de calidad y trazabilidad de fabricación" },
    ],
    highlights: [
      {
        title: "Aplicaciones",
        items: [
          "Repuestos descontinuados",
          "Piezas de desgaste",
          "Componentes estructurales",
          "Kits de mantención",
        ],
      },
      {
        title: "Equipamiento",
        items: [
          "Levantamiento dimensional",
          "Corte y plegado",
          "Mecanizado y soldadura",
          "Ensamble en maestranza",
        ],
      },
      {
        title: "Aseguramiento de calidad",
        items: [
          "Planos aprobados",
          "Control de materiales",
          "Verificación de ajuste",
          "Garantía de fabricación",
        ],
      },
    ],
    meta: {
      title: "Fabricación y Mantención de Partes y Piezas | Dos Hermanos",
      description:
        "Diseño, reingeniería y fabricación a medida de repuestos críticos, más planes de mantención preventiva por equipo y criticidad.",
    },
  },
];

export function getService(id: string): Service {
  const found = SERVICES.find((s) => s.id === id);
  if (!found) throw new Error(`Servicio no encontrado: ${id}`);
  return found;
}
