import { getAllAlumnos, getAlumnoPorId } from "@/lib/data";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Progreso de tu hijo · SafeWave Academy",
  robots: "noindex",
};

function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .trim();
}

function formatFecha(dateStr: string): string {
  if (!dateStr) return "";
  const [year, month, day] = dateStr.split("-").map(Number);
  const meses = [
    "enero","febrero","marzo","abril","mayo","junio",
    "julio","agosto","septiembre","octubre","noviembre","diciembre",
  ];
  return `${day} de ${meses[month - 1]} de ${year}`;
}

function nivelColor(nivel: string): string {
  if (nivel.includes("3")) return "#c4b5fd";
  if (nivel.includes("2")) return "#818cf8";
  return "#66bb6a";
}

export default async function ProgresoSearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const query = q?.trim() ?? "";

  let resultado = null;
  let sinResultados = false;

  if (query.length >= 2) {
    const todos = getAllAlumnos();
    const match = todos.find((a) =>
      normalize(a.nom).includes(normalize(query))
    );
    if (match) {
      resultado = getAlumnoPorId(match.id);
    } else {
      sinResultados = true;
    }
  }

  const total = resultado ? parseInt(resultado.paq) || 0 : 0;
  const pct = total > 0 ? Math.min(100, Math.round(((resultado?.us ?? 0) / total) * 100)) : 0;
  const restantes = total > 0 ? Math.max(0, total - (resultado?.us ?? 0)) : 0;

  const iniciales = resultado
    ? resultado.nom.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase()
    : "";

  return (
    <div style={{ background: "#0a0817", minHeight: "100vh", color: "#f5f3ff", fontFamily: "Inter, system-ui, sans-serif" }}>
      {/* Header */}
      <header style={{ borderBottom: "1px solid rgba(139,128,255,0.15)", background: "#13102a" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", padding: "16px 20px", display: "flex", alignItems: "center", gap: 12 }}>
          <Image src="/images/logo-optimized.png" alt="SafeWave Academy" width={36} height={36} style={{ borderRadius: 8 }} />
          <div>
            <p style={{ margin: 0, fontSize: 15, fontWeight: 600 }}>SafeWave Academy</p>
            <p style={{ margin: 0, fontSize: 12, color: "#9b96c1" }}>Portal para padres</p>
          </div>
        </div>
      </header>

      <main style={{ maxWidth: 680, margin: "0 auto", padding: "32px 20px 60px" }}>

        {/* Search form */}
        <div style={{
          background: "#13102a",
          border: "1px solid rgba(139,128,255,0.2)",
          borderRadius: 16, padding: "24px", marginBottom: 24,
        }}>
          <h1 style={{ margin: "0 0 6px", fontSize: 18, fontWeight: 700 }}>
            ¿Cuál es el nombre de tu hijo?
          </h1>
          <p style={{ margin: "0 0 16px", fontSize: 13, color: "#9b96c1" }}>
            Escribe el nombre y verás su progreso al instante.
          </p>
          <form method="GET" action="/progreso" style={{ display: "flex", gap: 10 }}>
            <input
              name="q"
              defaultValue={query}
              placeholder="Ej: Sofia, Mateo…"
              autoComplete="off"
              style={{
                flex: 1,
                background: "#0a0817",
                border: "1px solid rgba(139,128,255,0.25)",
                borderRadius: 10,
                padding: "12px 16px",
                fontSize: 15,
                color: "#f5f3ff",
                outline: "none",
              }}
            />
            <button
              type="submit"
              style={{
                background: "#818cf8",
                color: "#fff",
                border: "none",
                borderRadius: 10,
                padding: "12px 20px",
                fontSize: 15,
                fontWeight: 600,
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              Ver progreso
            </button>
          </form>
        </div>

        {/* No results */}
        {sinResultados && (
          <div style={{
            background: "#13102a",
            border: "1px solid rgba(248,113,113,0.2)",
            borderRadius: 16, padding: "20px 24px", textAlign: "center",
          }}>
            <p style={{ margin: 0, fontSize: 15, color: "#f87171" }}>
              No encontramos a <strong>&ldquo;{query}&rdquo;</strong>
            </p>
            <p style={{ margin: "6px 0 0", fontSize: 13, color: "#9b96c1" }}>
              Verifica la ortografía o escríbele a Juanita por WhatsApp.
            </p>
          </div>
        )}

        {/* Result */}
        {resultado && (
          <div>
            {/* Student card */}
            <div style={{
              background: "linear-gradient(135deg, #1e1b4b 0%, #13102a 100%)",
              border: "1px solid rgba(139,128,255,0.25)",
              borderRadius: 16, padding: "20px 24px",
              marginBottom: 14, display: "flex", alignItems: "center", gap: 16,
            }}>
              <div style={{
                width: 52, height: 52, borderRadius: "50%",
                background: "linear-gradient(135deg, #818cf8, #c4b5fd)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 18, fontWeight: 700, color: "#1e1b4b", flexShrink: 0,
              }}>
                {iniciales}
              </div>
              <div>
                <h2 style={{ margin: "0 0 6px", fontSize: 20, fontWeight: 700 }}>{resultado.nom}</h2>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  <span style={{
                    background: `${nivelColor(resultado.niv)}20`,
                    color: nivelColor(resultado.niv),
                    border: `1px solid ${nivelColor(resultado.niv)}40`,
                    borderRadius: 6, padding: "2px 10px", fontSize: 12, fontWeight: 600,
                  }}>
                    {resultado.niv}
                  </span>
                  {resultado.edad && (
                    <span style={{ color: "#9b96c1", fontSize: 12, padding: "2px 0" }}>
                      {resultado.edad}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Progress card */}
            <div style={{
              background: "#13102a",
              border: "1px solid rgba(139,128,255,0.15)",
              borderRadius: 16, padding: "20px 24px", marginBottom: 14,
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
                <h3 style={{ margin: 0, fontSize: 14, fontWeight: 600, color: "#c4b5fd" }}>
                  Clases completadas
                </h3>
                {total > 0 && <span style={{ fontSize: 12, color: "#9b96c1" }}>Paquete {total} clases</span>}
              </div>
              {total > 0 ? (
                <>
                  <div style={{ background: "rgba(139,128,255,0.12)", borderRadius: 999, height: 10, marginBottom: 10, overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${pct}%`, background: "linear-gradient(90deg, #818cf8, #66bb6a)", borderRadius: 999 }} />
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 26, fontWeight: 700 }}>
                      {resultado.us}
                      <span style={{ fontSize: 14, color: "#9b96c1", fontWeight: 400 }}> / {total}</span>
                    </span>
                    <span style={{
                      background: restantes > 0 ? "#1e1b4b" : "#14532d22",
                      color: restantes > 0 ? "#818cf8" : "#86efac",
                      border: `1px solid ${restantes > 0 ? "#818cf833" : "#86efac33"}`,
                      borderRadius: 8, padding: "4px 12px", fontSize: 13, fontWeight: 600,
                    }}>
                      {restantes > 0 ? `${restantes} clases restantes` : "¡Paquete completado! 🎉"}
                    </span>
                  </div>
                </>
              ) : (
                <p style={{ margin: 0, color: "#9b96c1", fontSize: 14 }}>
                  {resultado.us} clase{resultado.us !== 1 ? "s" : ""} completada{resultado.us !== 1 ? "s" : ""}
                </p>
              )}
              {resultado.hor && (
                <p style={{ margin: "12px 0 0", fontSize: 13, color: "#9b96c1" }}>📅 {resultado.hor}</p>
              )}
            </div>

            {/* Class history */}
            <h3 style={{ margin: "0 0 10px", fontSize: 14, fontWeight: 600, color: "#c4b5fd" }}>
              Historial de clases
            </h3>

            {resultado.clases.length === 0 ? (
              <div style={{
                background: "#13102a",
                border: "1px solid rgba(139,128,255,0.15)",
                borderRadius: 14, padding: "24px", textAlign: "center", color: "#9b96c1",
              }}>
                <p style={{ margin: 0, fontSize: 14 }}>Aún no hay clases registradas en el sistema.</p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {resultado.clases.map((clase, i) => (
                  <div key={i} style={{
                    background: "#13102a",
                    border: "1px solid rgba(139,128,255,0.15)",
                    borderRadius: 12, padding: "14px 16px",
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: clase.not ? 8 : 0 }}>
                      <span style={{ background: "#1e1b4b", color: "#818cf8", borderRadius: 6, padding: "2px 8px", fontSize: 12, fontWeight: 700 }}>
                        Clase {resultado.clases.length - i}
                      </span>
                      <span style={{ fontSize: 12, color: "#9b96c1" }}>
                        {formatFecha(clase.fec)} · {clase.hora}
                      </span>
                    </div>
                    {clase.not && (
                      <div style={{ background: "rgba(102,187,106,0.06)", border: "1px solid rgba(102,187,106,0.2)", borderRadius: 8, padding: "8px 12px" }}>
                        <p style={{ margin: 0, fontSize: 13, color: "#f5f3ff", lineHeight: 1.5 }}>{clase.not}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Footer */}
        <div style={{ marginTop: 32, textAlign: "center", borderTop: "1px solid rgba(139,128,255,0.12)", paddingTop: 24 }}>
          <p style={{ margin: "0 0 6px", fontSize: 13, color: "#9b96c1" }}>¿Tienes preguntas?</p>
          <a href="https://wa.me/17868721898" target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-block", background: "#25D366", color: "#fff", borderRadius: 10, padding: "10px 20px", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
            Escribir a Juanita por WhatsApp
          </a>
        </div>
      </main>
    </div>
  );
}
