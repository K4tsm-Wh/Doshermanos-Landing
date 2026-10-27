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
      "Ejecutamos soldadura estructural y de recuperación en aceros al carbono, inoxidables y aceros de alta resistencia, bajo procedimientos calificados (WPS/PQR) y con soldadores homologados. Desarrollamos intervenciones tanto en maestranza como en terreno para componentes críticos de maquinaria pesada: recuperación de chasis, bastidores, tolvas y baldes, garantizando integridad estructural con inspección visual y ensayos no destructivos (NDT).",
    tags: ["MIG / TIG / Arco Sumergido", "Recuperación Estructural", "Control de Calidad (NDT)"],
    specs: [
      "Procedimientos calificados y soldadores homologados (WPS/PQR)",
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
        title: "Aplicaciones Críticas",
        items: [
          "Chasis y bastidores de maquinaria",
          "Tolvas y baldes de cargadores y palas",
          "Estructuras pesadas y calderería industrial",
          "Recuperación y refuerzo de fisuras estructurales",
        ],
      },
      {
        title: "Equipamiento & Métodos",
        items: [
          "Procesos MIG/MAG, TIG y arco sumergido",
          "Plantas móviles autónomas para trabajo en faena",
          "Control estricto de precalentamiento e interpase",
          "Equipos de corte térmico y biselado",
        ],
      },
      {
        title: "Aseguramiento de Calidad",
        items: [
          "Procedimientos WPS y registros PQR vigentes",
          "Inspección visual (VT) certificada",
          "Ensayos no destructivos (tintas penetrantes y ultrasonido)",
          "Dossier técnico e informe final por servicio",
        ],
      },
    ],
    meta: {
      title: "Soldadura Industrial y Estructural | Dos Hermanos",
      description:
        "Soldadura MIG, TIG y arco sumergido bajo normas WPS/PQR, recuperación de chasis, bastidores y ensayos no destructivos para maquinaria pesada.",
    },
  },
  {
    id: "mecanica",
    path: SERVICE_PATHS.mecanica,
    index: "02",
    category: "Desarme, reparación y armado de componentes estructurales",
    title: "Mecánica",
    description:
      "Mantención y reparación integral de componentes mecánicos.",
    overview:
      "Especialistas en el desarme, reparación y armado de componentes estructurales pesados en maquinaria minera. Concentramos nuestra experiencia en la intervención y reconstrucción integral de bastidores, chasis y mesa ripper en tractores CAT (series D8T, D9T, D10T y D11T), aplicando rigurosos protocolos técnicos de torque, tolerancias de fábrica y alineamiento para asegurar la máxima confiabilidad operativa en terreno.",
    tags: ["Mecánica Pesada", "Tractores CAT (D8T - D11T)", "Bastidores & Chasis"],
    specs: [
      "Reparación de bastidores de tractores CAT: D8T, D9T, D10T y D11T",
      "Reparación de chasis de tractores CAT: D8T, D9T, D10T y D11T",
      "Reparación de mesa ripper de tractores CAT: D8T, D9T, D10T y D11T",
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
        title: "Componentes Principales",
        items: [
          "Bastidores de tractores CAT (D8T a D11T)",
          "Chasis estructurales y vigas maestras",
          "Mesa ripper y brazos de tiro",
          "Puntos de articulación y anclajes mayores",
        ],
      },
      {
        title: "Metodología de Intervención",
        items: [
          "Desarme técnico y levantamiento de daños",
          "Evaluación dimensional de deformaciones",
          "Corrección estructural y refuerzo",
          "Armado bajo especificaciones técnicas del fabricante",
        ],
      },
      {
        title: "Aseguramiento de Calidad",
        items: [
          "Control de apriete con torque calibrado",
          "Verificación de tolerancias y holguras de fábrica",
          "Inspección de pernería y elementos de sujeción",
          "Informe técnico de reparación y protocolo de entrega",
        ],
      },
    ],
    meta: {
      title: "Mecánica y Componentes Estructurales CAT | Dos Hermanos",
      description:
        "Desarme, reparación y armado de bastidores, chasis y mesa ripper en tractores CAT D8T, D9T, D10T y D11T con tolerancias de fábrica.",
    },
  },
  {
    id: "mecanizado",
    path: SERVICE_PATHS.mecanizado,
    index: "03",
    category: "Precisión Industrial",
    title: "Mecanizado",
    description:
      "Tornería, fresado y torno de barras (barrenado de alojamientos) para tolerancias y ajustes de fábrica para componentes.",
    overview:
      "Servicio de mecanizado y tornería de alta precisión ejecutado tanto en taller de maestranza como in situ en faena. Realizamos tornería convencional y CNC, fresado y barrenado de alojamientos mediante torno de barras portátil, recuperando alojamientos sin necesidad de desmontar ensambles mayores. Integramos procesos especializados como la instalación de pasadores por frío-contracción y metrología dimensional rigurosa para restablecer tolerancias y ajustes de fábrica.",
    tags: ["Torno de Barras", "Mecanizado In Situ", "Metrología Dimensional"],
    specs: [
      "Metrología y verificación dimensional de cada pieza",
      "Instalación de pasadores por frío-contracción",
      "Recuperación y barrenado de alojamientos con torno de barras",
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
        title: "Procesos de Mecanizado",
        items: [
          "Barrenado de alojamientos con torno de barras portátil",
          "Tornería cilíndrica, cónica y roscado de precisión",
          "Fresado universal y mecanizado CNC",
          "Instalación criogénica por frío-contracción",
        ],
      },
      {
        title: "Componentes Mecanizados",
        items: [
          "Alojamientos de articulaciones y bancadas",
          "Pasadores, pines y bujes de alto desgaste",
          "Ejes de transmisión y camisas de desgaste",
          "Rectificado de caras y superficies de apoyo",
        ],
      },
      {
        title: "Control Metrológico",
        items: [
          "Medición micrométrica con instrumentos calibrados",
          "Verificación de rugosidad y acabado superficial",
          "Ajustes según normas ISO y tolerancias del fabricante",
          "Pauta de control dimensional certificada",
        ],
      },
    ],
    meta: {
      title: "Mecanizado, Tornería y Torno de Barras | Dos Hermanos",
      description:
        "Tornería, fresado y barrenado de alojamientos con torno de barras portátil, metrología de precisión e instalación por frío-contracción.",
    },
  },
  {
    id: "granallado",
    path: SERVICE_PATHS.granallado,
    index: "04",
    category: "Protección Superficial",
    title: "Granallado y Pintura",
    description:
      "Preparación y pintura de partes y piezas de componentes.",
    overview:
      "Tratamiento y protección superficial de alto rendimiento para partes, piezas y componentes de maquinaria pesada. Ejecutamos limpieza profunda mediante granallado abrasivo industrial bajo estándares normados SSPC (especialistas en componentes CAT), garantizando la completa remoción de óxidos y un perfil de anclaje óptimo. Aplicamos esquemas anticorrosivos de alta adherencia y pintura CAT de alta resistencia contra corrosión y desgaste, además de esquemas de pintura corporativa según la identidad del cliente.",
    tags: ["Granallado Industrial", "Pintura CAT", "Pintura Corporativa"],
    specs: [
      "Limpieza de componentes mediante granallado industrial",
      "Preparación de recubrimiento anticorrosivo de alta adherencia para protección contra oxidación y agentes ambientales",
      "Recubrimiento con pintura de alta resistencia para protección contra la corrosión y el desgaste",
      "Pintura corporativa de componentes según estándar de cliente",
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
        title: "Preparación de Superficies",
        items: [
          "Granallado abrasivo bajo norma SSPC-SP6 / SP10",
          "Limpieza profunda de componentes CAT",
          "Perfil de anclaje controlado para máxima adherencia",
          "Desengrase y eliminación total de contaminantes",
        ],
      },
      {
        title: "Esquemas de Pintura",
        items: [
          "Imprimantes anticorrosivos de alta adherencia",
          "Pintura de alta resistencia contra abrasión e intemperie",
          "Sistemas epóxicos y poliuretanos industriales",
          "Pinturas corporativas personalizadas por flota",
        ],
      },
      {
        title: "Control de Calidad",
        items: [
          "Medición de espesor de película seca (mils / micras)",
          "Comprobación de adherencia según norma técnica",
          "Control de humedad y temperatura durante aplicación",
          "Inspección visual y registro fotográfico final",
        ],
      },
    ],
    meta: {
      title: "Granallado y Pintura Industrial de Componentes | Dos Hermanos",
      description:
        "Limpieza por granallado abrasivo SSPC, esquemas anticorrosivos de alta adherencia, pintura de alta resistencia y pintura corporativa.",
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
      "Diseño, reconstrucción y fabricación a medida de repuestos y piezas críticas a partir de levantamiento dimensional en terreno, planos técnicos o ingeniería inversa. Brindamos respuesta ágil ante piezas descontinuadas o sin stock comercial inmediato, minimizando tiempos de detención en faena. Complementamos con planes de mantención preventiva estructurados por equipo y nivel de criticidad operacional.",
    tags: ["Fabricación a Medida", "Ingeniería Inversa", "Mantención Preventiva"],
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
        title: "Líneas de Fabricación",
        items: [
          "Fabricación a medida bajo plano o muestra",
          "Reconstrucción de componentes descontinuados",
          "Piezas de desgaste y refuerzos estructurales",
          "Kits de repuestos para mantenciones mayores",
        ],
      },
      {
        title: "Capacidades de Maestranza",
        items: [
          "Levantamiento dimensional técnico en terreno",
          "Corte, conformado y mecanizado de precisión",
          "Soldadura estructural calificada",
          "Ensamble y ajuste en taller de maestranza",
        ],
      },
      {
        title: "Aseguramiento de Calidad",
        items: [
          "Certificación de calidad en aceros y aleaciones",
          "Verificación dimensional exhaustiva",
          "Pruebas de calce y acople previo al despacho",
          "Garantía técnica de fabricación",
        ],
      },
    ],
    meta: {
      title: "Fabricación y Mantención de Partes y Piezas | Dos Hermanos",
      description:
        "Levantamiento dimensional, fabricación a medida de repuestos críticos y descontinuados, y planes de mantención preventiva por criticidad.",
    },
  },
];

export function getService(id: string): Service {
  const found = SERVICES.find((s) => s.id === id);
  if (!found) throw new Error(`Servicio no encontrado: ${id}`);
  return found;
}
