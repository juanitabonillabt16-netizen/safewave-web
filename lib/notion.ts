import { Client } from "@notionhq/client";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

const CLIENTES_DB_ID = "1f546770e38e45c08e44cc78a73d5784";

type Props = PageObjectResponse["properties"];

function txt(prop: Props[string] | undefined): string {
  if (!prop) return "";
  if (prop.type === "title") return prop.title.map((t) => t.plain_text).join("");
  if (prop.type === "rich_text") return prop.rich_text.map((t) => t.plain_text).join("");
  if (prop.type === "select") return prop.select?.name ?? "";
  if (prop.type === "status") return prop.status?.name ?? "";
  if (prop.type === "phone_number") return prop.phone_number ?? "";
  if (prop.type === "email") return prop.email ?? "";
  if (prop.type === "number") return String(prop.number ?? "");
  if (prop.type === "formula") {
    const f = prop.formula;
    if (f.type === "number") return String(f.number ?? "");
    if (f.type === "string") return f.string ?? "";
  }
  return "";
}

function num(prop: Props[string] | undefined): number {
  if (!prop) return 0;
  if (prop.type === "number") return prop.number ?? 0;
  if (prop.type === "formula" && prop.formula.type === "number")
    return prop.formula.number ?? 0;
  return 0;
}

function dt(prop: Props[string] | undefined): string {
  if (!prop || prop.type !== "date") return "";
  return prop.date?.start ?? "";
}

function tags(prop: Props[string] | undefined): string[] {
  if (!prop || prop.type !== "multi_select") return [];
  return prop.multi_select.map((o) => o.name);
}

function relIds(prop: Props[string] | undefined): string[] {
  if (!prop || prop.type !== "relation") return [];
  return prop.relation.map((r) => r.id);
}

function isValidId(id: string): boolean {
  return /^[a-f0-9]{32}$/.test(id) ||
    /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/.test(id);
}

export interface ClaseEntry {
  fecha: string;
  resumen: string;
  observaciones: string;
  progreso: string;
  resultado: number | null;
  nivel: string;
}

export interface ProgresoInfo {
  etiquetas: string[];
  habilidadDominante: string;
  habilidadDebil: string;
  meta: string;
  estado: string;
}

export interface AlumnoData {
  nombre: string;
  edad: number;
  paquete: string;
  totalClases: number;
  clasesUsadas: number;
  clasesRestantes: number;
  nivel: string;
  estado: string;
  fechaInicio: string;
  clases: ClaseEntry[];
  progreso?: ProgresoInfo;
}

export async function getAlumnoPorId(id: string): Promise<AlumnoData | null> {
  if (!isValidId(id)) return null;

  let page: PageObjectResponse;
  try {
    const result = await notion.pages.retrieve({ page_id: id });
    if (result.object !== "page") return null;
    page = result as PageObjectResponse;
  } catch {
    return null;
  }

  // Verify this page belongs to the Clientes database
  if (
    page.parent.type !== "database_id" ||
    page.parent.database_id.replace(/-/g, "") !== CLIENTES_DB_ID
  ) {
    return null;
  }

  const p = page.properties;
  const clasesUsadas = num(p["✔️ Clases usadas"]);
  const clasesRestantes = num(p["⏳ Clases restantes"]);
  const paquete = txt(p["📦 Paquete comprado"]);
  const totalClases = parseInt(paquete.match(/\d+/)?.[0] ?? "0") || clasesUsadas + clasesRestantes;

  // Fetch log entries
  const logIds = relIds(p["🧾 Log de Clases"]);
  let clases: ClaseEntry[] = [];
  if (logIds.length > 0) {
    const logPages = await Promise.all(
      logIds.slice(0, 25).map((pid) =>
        notion.pages.retrieve({ page_id: pid }).catch(() => null)
      )
    );
    clases = logPages
      .filter((lp): lp is PageObjectResponse => lp?.object === "page")
      .map((lp) => {
        const lpp = lp.properties;
        const resultProp = lpp["⭐ Resultado final (1–10)"];
        return {
          fecha: dt(lpp["📆 Fecha"]),
          resumen: txt(lpp["📌 Resumen"]),
          observaciones: txt(lpp["💬 Observaciones para padres"]),
          progreso: txt(lpp["📈 Progreso observado"]),
          resultado: resultProp?.type === "number" ? resultProp.number : null,
          nivel: txt(lpp["🏊 Nivel trabajado"]),
        };
      })
      .filter((c) => c.fecha)
      .sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime());
  }

  // Fetch progress data
  const progresoIds = relIds(p["📊 Progreso de Alumnos"]);
  let progreso: ProgresoInfo | undefined;
  if (progresoIds.length > 0) {
    const progPage = await notion.pages
      .retrieve({ page_id: progresoIds[0] })
      .catch(() => null);
    if (progPage?.object === "page") {
      const pp = (progPage as PageObjectResponse).properties;
      const hd = txt(pp["🧠 Habilidad dominante"]);
      const hdb = txt(pp["⚠️ Habilidad débil"]);
      const meta = txt(pp["🏁 Meta siguiente nivel"]);
      const estado = txt(pp["🏆 Estado"]);
      const etiquetas = tags(pp["🏷️ Etiqueta de progreso"]);
      if (hd || hdb || meta || etiquetas.length > 0) {
        progreso = { etiquetas, habilidadDominante: hd, habilidadDebil: hdb, meta, estado };
      }
    }
  }

  return {
    nombre: txt(p["👤 Nombre del niño"]),
    edad: num(p["🎂 Edad"]),
    paquete,
    totalClases,
    clasesUsadas,
    clasesRestantes,
    nivel: txt(p["📊 Nivel"]),
    estado: txt(p["🏊 Estado"]),
    fechaInicio: dt(p["📅 Fecha de inicio"]),
    clases,
    progreso,
  };
}
