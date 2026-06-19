import { getAlumnoPorId } from "@/lib/notion";
import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const alumno = await getAlumnoPorId(id);
  if (!alumno) return { title: "SafeWave Academy" };
  return {
    title: `Progreso de ${alumno.nombre} · SafeWave Academy`,
    description: `Sigue el avance de ${alumno.nombre} en SafeWave Academy.`,
    robots: "noindex",
  };
}

function formatFecha(dateStr: string): string {
  if (!dateStr) return "";
  const [year, month, day] = dateStr.split("-").map(Number);
  const meses = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
  ];
  return `${day} de ${meses[month - 1]} de ${year}`;
}

function nivelColor(nivel: string): string {
  if (nivel.includes("1")) return "#66bb6a";
  if (nivel.includes("2")) return "#818cf8";
  if (nivel.includes("3")) return "#c4b5fd";
  return "#9b96c1";
}

const BADGE_COLORS: Record<string, { bg: string; text: string }> = {
  "🟢 Seguro en agua":           { bg: "#14532d", text: "#86efac" },
  "🔵 Flotación independiente":  { bg: "#1e3a5f", text: "#93c5fd" },
  "🟣 Nado básico":              { bg: "#3b1f5e", text: "#d8b4fe" },
  "🏆 Graduado SafeWave":        { bg: "#78350f", text: "#fcd34d" },
};

export default async function ProgresoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const alumno = await getAlumnoPorId(id);
  if (!alumno) notFound();

  const pct = alumno.totalClases > 0
    ? Math.min(100, Math.round((alumno.clasesUsadas / alumno.totalClases) * 100))
    : 0;

  const iniciales = alumno.nombre
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div style={{ background: "#0a0817", minHeight: "100vh", color: "#f5f3ff", fontFamily: "Inter, system-ui, sans-serif" }}>
      {/* Header */}
      <header style={{ borderBottom: "1px solid rgba(139,128,255,0.15)", background: "#13102a" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", padding: "16px 20px", display: "flex", alignItems: "center", gap: 12 }}>
          <Image
            src="/images/logo-optimized.png"
            alt="SafeWave Academy"
            width={36}
            height={36}
            style={{ borderRadius: 8 }}
          />
          <div>
            <p style={{ margin: 0, fontSize: 15, fontWeight: 600, color: "#f5f3ff" }}>SafeWave Academy</p>
            <p style={{ margin: 0, fontSize: 12, color: "#9b96c1" }}>Portal para padres</p>
          </div>
        </div>
      </header>

      <main style={{ maxWidth: 680, margin: "0 auto", padding: "28px 20px 60px" }}>
        {/* Welcome card */}
        <div style={{
          background: "linear-gradient(135deg, #1e1b4b 0%, #13102a 100%)",
          border: "1px solid rgba(139,128,255,0.25)",
          borderRadius: 16,
          padding: "24px 24px",
          marginBottom: 20,
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}>
          <div style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #818cf8, #c4b5fd)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 20,
            fontWeight: 700,
            color: "#1e1b4b",
            flexShrink: 0,
          }}>
            {iniciales}
          </div>
          <div>
            <p style={{ margin: "0 0 2px", fontSize: 13, color: "#9b96c1" }}>Progreso de</p>
            <h1 style={{ margin: "0 0 4px", fontSize: 22, fontWeight: 700, color: "#f5f3ff" }}>
              {alumno.nombre}
            </h1>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {alumno.nivel && (
                <span style={{
                  background: `${nivelColor(alumno.nivel)}22`,
                  color: nivelColor(alumno.nivel),
                  border: `1px solid ${nivelColor(alumno.nivel)}44`,
                  borderRadius: 6,
                  padding: "2px 10px",
                  fontSize: 12,
                  fontWeight: 600,
                }}>
                  {alumno.nivel}
                </span>
              )}
              {alumno.estado && (
                <span style={{
                  background: alumno.estado === "Activo" ? "#14532d22" : "#78350f22",
                  color: alumno.estado === "Activo" ? "#86efac" : "#fcd34d",
                  border: `1px solid ${alumno.estado === "Activo" ? "#86efac33" : "#fcd34d33"}`,
                  borderRadius: 6,
                  padding: "2px 10px",
                  fontSize: 12,
                  fontWeight: 600,
                }}>
                  {alumno.estado}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Progress card */}
        <div style={{
          background: "#13102a",
          border: "1px solid rgba(139,128,255,0.15)",
          borderRadius: 16,
          padding: "20px 24px",
          marginBottom: 20,
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 12 }}>
            <h2 style={{ margin: 0, fontSize: 15, fontWeight: 600, color: "#c4b5fd" }}>
              Clases completadas
            </h2>
            {alumno.paquete && (
              <span style={{ fontSize: 12, color: "#9b96c1" }}>{alumno.paquete}</span>
            )}
          </div>

          {/* Progress bar */}
          <div style={{
            background: "rgba(139,128,255,0.12)",
            borderRadius: 999,
            height: 10,
            marginBottom: 10,
            overflow: "hidden",
          }}>
            <div style={{
              height: "100%",
              width: `${pct}%`,
              background: "linear-gradient(90deg, #818cf8, #66bb6a)",
              borderRadius: 999,
              transition: "width 0.6s ease",
            }} />
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ fontSize: 24, fontWeight: 700, color: "#f5f3ff" }}>
              {alumno.clasesUsadas}
              <span style={{ fontSize: 14, color: "#9b96c1", fontWeight: 400 }}>
                {alumno.totalClases > 0 ? ` / ${alumno.totalClases}` : ""}
              </span>
            </span>
            <span style={{
              background: alumno.clasesRestantes > 0 ? "#1e1b4b" : "#14532d22",
              color: alumno.clasesRestantes > 0 ? "#818cf8" : "#86efac",
              border: `1px solid ${alumno.clasesRestantes > 0 ? "#818cf833" : "#86efac33"}`,
              borderRadius: 8,
              padding: "4px 12px",
              fontSize: 13,
              fontWeight: 600,
              alignSelf: "center",
            }}>
              {alumno.clasesRestantes > 0
                ? `${alumno.clasesRestantes} restantes`
                : "¡Paquete completado!"}
            </span>
          </div>

          {alumno.fechaInicio && (
            <p style={{ margin: "10px 0 0", fontSize: 12, color: "#9b96c1" }}>
              Inicio: {formatFecha(alumno.fechaInicio)}
            </p>
          )}
        </div>

        {/* Skills / Progress badges */}
        {alumno.progreso && (
          <div style={{
            background: "#13102a",
            border: "1px solid rgba(139,128,255,0.15)",
            borderRadius: 16,
            padding: "20px 24px",
            marginBottom: 20,
          }}>
            <h2 style={{ margin: "0 0 14px", fontSize: 15, fontWeight: 600, color: "#c4b5fd" }}>
              Habilidades y logros
            </h2>

            {alumno.progreso.etiquetas.length > 0 && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 14 }}>
                {alumno.progreso.etiquetas.map((tag) => {
                  const style = BADGE_COLORS[tag] ?? { bg: "#1e1b4b", text: "#c4b5fd" };
                  return (
                    <span key={tag} style={{
                      background: style.bg,
                      color: style.text,
                      borderRadius: 8,
                      padding: "4px 12px",
                      fontSize: 13,
                      fontWeight: 600,
                    }}>
                      {tag}
                    </span>
                  );
                })}
              </div>
            )}

            <div style={{ display: "grid", gap: 10 }}>
              {alumno.progreso.habilidadDominante && (
                <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <span style={{ fontSize: 16, marginTop: 1 }}>💪</span>
                  <div>
                    <p style={{ margin: 0, fontSize: 12, color: "#9b96c1" }}>Habilidad destacada</p>
                    <p style={{ margin: 0, fontSize: 14, color: "#f5f3ff" }}>{alumno.progreso.habilidadDominante}</p>
                  </div>
                </div>
              )}
              {alumno.progreso.meta && (
                <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <span style={{ fontSize: 16, marginTop: 1 }}>🎯</span>
                  <div>
                    <p style={{ margin: 0, fontSize: 12, color: "#9b96c1" }}>Próximo objetivo</p>
                    <p style={{ margin: 0, fontSize: 14, color: "#f5f3ff" }}>{alumno.progreso.meta}</p>
                  </div>
                </div>
              )}
              {alumno.progreso.habilidadDebil && (
                <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <span style={{ fontSize: 16, marginTop: 1 }}>🔧</span>
                  <div>
                    <p style={{ margin: 0, fontSize: 12, color: "#9b96c1" }}>En práctica</p>
                    <p style={{ margin: 0, fontSize: 14, color: "#f5f3ff" }}>{alumno.progreso.habilidadDebil}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Class history */}
        <div>
          <h2 style={{ margin: "0 0 14px", fontSize: 15, fontWeight: 600, color: "#c4b5fd" }}>
            Historial de clases
          </h2>

          {alumno.clases.length === 0 ? (
            <div style={{
              background: "#13102a",
              border: "1px solid rgba(139,128,255,0.15)",
              borderRadius: 16,
              padding: "32px 24px",
              textAlign: "center",
              color: "#9b96c1",
            }}>
              <p style={{ margin: 0, fontSize: 15 }}>Aún no hay clases registradas.</p>
              <p style={{ margin: "6px 0 0", fontSize: 13 }}>Aquí aparecerán las notas de cada sesión.</p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {alumno.clases.map((clase, i) => (
                <div key={i} style={{
                  background: "#13102a",
                  border: "1px solid rgba(139,128,255,0.15)",
                  borderRadius: 16,
                  padding: "18px 20px",
                }}>
                  {/* Class header */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                      <span style={{
                        background: "#1e1b4b",
                        color: "#818cf8",
                        borderRadius: 6,
                        padding: "2px 8px",
                        fontSize: 12,
                        fontWeight: 700,
                      }}>
                        Clase {alumno.clases.length - i}
                      </span>
                      {clase.nivel && (
                        <span style={{
                          background: `${nivelColor(clase.nivel)}18`,
                          color: nivelColor(clase.nivel),
                          borderRadius: 6,
                          padding: "2px 8px",
                          fontSize: 12,
                        }}>
                          {clase.nivel}
                        </span>
                      )}
                    </div>
                    <span style={{ fontSize: 12, color: "#9b96c1" }}>{formatFecha(clase.fecha)}</span>
                  </div>

                  {clase.resumen && (
                    <p style={{ margin: "0 0 10px", fontSize: 14, fontWeight: 600, color: "#f5f3ff" }}>
                      {clase.resumen}
                    </p>
                  )}

                  {clase.observaciones && (
                    <div style={{
                      background: "rgba(102,187,106,0.06)",
                      border: "1px solid rgba(102,187,106,0.2)",
                      borderRadius: 10,
                      padding: "12px 14px",
                      marginBottom: clase.progreso ? 10 : 0,
                    }}>
                      <p style={{ margin: "0 0 4px", fontSize: 11, fontWeight: 600, color: "#66bb6a", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                        Mensaje para ti
                      </p>
                      <p style={{ margin: 0, fontSize: 14, color: "#f5f3ff", lineHeight: 1.5 }}>
                        {clase.observaciones}
                      </p>
                    </div>
                  )}

                  {clase.progreso && (
                    <div style={{ marginTop: 10 }}>
                      <p style={{ margin: "0 0 2px", fontSize: 11, fontWeight: 600, color: "#9b96c1", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                        Progreso observado
                      </p>
                      <p style={{ margin: 0, fontSize: 13, color: "#c4b5fd", lineHeight: 1.5 }}>
                        {clase.progreso}
                      </p>
                    </div>
                  )}

                  {clase.resultado !== null && (
                    <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 10 }}>
                      <span style={{ fontSize: 13, color: "#9b96c1" }}>
                        ⭐ {clase.resultado}/10
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer contact */}
        <div style={{
          marginTop: 32,
          textAlign: "center",
          borderTop: "1px solid rgba(139,128,255,0.12)",
          paddingTop: 24,
        }}>
          <p style={{ margin: "0 0 6px", fontSize: 13, color: "#9b96c1" }}>¿Tienes preguntas sobre el progreso?</p>
          <a
            href="https://wa.me/17868721898"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: "#25D366",
              color: "#fff",
              borderRadius: 10,
              padding: "10px 20px",
              fontSize: 14,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Escribir a Juanita por WhatsApp
          </a>
          <p style={{ margin: "16px 0 0", fontSize: 12, color: "#9b96c1" }}>
            SafeWave Academy · safewaveacademy.com
          </p>
        </div>
      </main>
    </div>
  );
}
