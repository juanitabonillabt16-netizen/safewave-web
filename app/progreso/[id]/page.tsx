import { getAlumnoPorId } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const alumno = getAlumnoPorId(Number(id));
  if (!alumno) return { title: "SafeWave Academy" };
  return {
    title: `Progreso de ${alumno.nom} · SafeWave Academy`,
    description: `Sigue el avance de ${alumno.nom} en SafeWave Academy.`,
    robots: "noindex",
  };
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

function progColor(prog: string): { bg: string; text: string } {
  if (prog === "Alto") return { bg: "#14532d", text: "#86efac" };
  if (prog === "Medio") return { bg: "#1e3a5f", text: "#93c5fd" };
  return { bg: "#3b1f5e", text: "#d8b4fe" };
}

export default async function ProgresoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const alumno = getAlumnoPorId(Number(id));
  if (!alumno) notFound();

  const total = parseInt(alumno.paq) || 0;
  const pct = total > 0 ? Math.min(100, Math.round((alumno.us / total) * 100)) : 0;
  const restantes = Math.max(0, total - alumno.us);

  const iniciales = alumno.nom
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const prog = progColor(alumno.prog);

  return (
    <div style={{ background: "#0a0817", minHeight: "100vh", color: "#f5f3ff", fontFamily: "Inter, system-ui, sans-serif" }}>
      {/* Header */}
      <header style={{ borderBottom: "1px solid rgba(139,128,255,0.15)", background: "#13102a" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", padding: "16px 20px", display: "flex", alignItems: "center", gap: 12 }}>
          <Image src="/images/logo-optimized.png" alt="SafeWave Academy" width={36} height={36} style={{ borderRadius: 8 }} />
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
          padding: "24px",
          marginBottom: 16,
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}>
          <div style={{
            width: 56, height: 56, borderRadius: "50%",
            background: "linear-gradient(135deg, #818cf8, #c4b5fd)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 20, fontWeight: 700, color: "#1e1b4b", flexShrink: 0,
          }}>
            {iniciales}
          </div>
          <div>
            <p style={{ margin: "0 0 2px", fontSize: 13, color: "#9b96c1" }}>Progreso de</p>
            <h1 style={{ margin: "0 0 6px", fontSize: 22, fontWeight: 700, color: "#f5f3ff" }}>
              {alumno.nom}
            </h1>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <span style={{
                background: `${nivelColor(alumno.niv)}20`,
                color: nivelColor(alumno.niv),
                border: `1px solid ${nivelColor(alumno.niv)}40`,
                borderRadius: 6, padding: "2px 10px", fontSize: 12, fontWeight: 600,
              }}>
                {alumno.niv}
              </span>
              <span style={{
                background: prog.bg + "40", color: prog.text,
                border: `1px solid ${prog.text}30`,
                borderRadius: 6, padding: "2px 10px", fontSize: 12, fontWeight: 600,
              }}>
                Progreso {alumno.prog}
              </span>
              {alumno.edad && (
                <span style={{ color: "#9b96c1", fontSize: 12, padding: "2px 0" }}>
                  {alumno.edad}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Progress card */}
        <div style={{
          background: "#13102a",
          border: "1px solid rgba(139,128,255,0.15)",
          borderRadius: 16, padding: "20px 24px", marginBottom: 16,
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 12 }}>
            <h2 style={{ margin: 0, fontSize: 15, fontWeight: 600, color: "#c4b5fd" }}>
              Clases completadas
            </h2>
            {total > 0 && (
              <span style={{ fontSize: 12, color: "#9b96c1" }}>Paquete {total} clases</span>
            )}
          </div>

          {total > 0 ? (
            <>
              <div style={{
                background: "rgba(139,128,255,0.12)",
                borderRadius: 999, height: 10, marginBottom: 10, overflow: "hidden",
              }}>
                <div style={{
                  height: "100%", width: `${pct}%`,
                  background: "linear-gradient(90deg, #818cf8, #66bb6a)",
                  borderRadius: 999,
                }} />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 26, fontWeight: 700, color: "#f5f3ff" }}>
                  {alumno.us}
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
              {alumno.us} clase{alumno.us !== 1 ? "s" : ""} completada{alumno.us !== 1 ? "s" : ""}
            </p>
          )}

          {alumno.hor && (
            <p style={{ margin: "12px 0 0", fontSize: 13, color: "#9b96c1" }}>
              📅 Horario: {alumno.hor}
            </p>
          )}
        </div>

        {/* Class history */}
        <h2 style={{ margin: "0 0 12px", fontSize: 15, fontWeight: 600, color: "#c4b5fd" }}>
          Historial de clases
        </h2>

        {alumno.clases.length === 0 ? (
          <div style={{
            background: "#13102a",
            border: "1px solid rgba(139,128,255,0.15)",
            borderRadius: 16, padding: "32px 24px", textAlign: "center", color: "#9b96c1",
          }}>
            <p style={{ margin: 0, fontSize: 15 }}>Aún no hay clases registradas.</p>
            <p style={{ margin: "6px 0 0", fontSize: 13 }}>Aquí aparecerán las clases completadas.</p>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {alumno.clases.map((clase, i) => (
              <div key={i} style={{
                background: "#13102a",
                border: "1px solid rgba(139,128,255,0.15)",
                borderRadius: 14, padding: "16px 18px",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: clase.not ? 10 : 0 }}>
                  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <span style={{
                      background: "#1e1b4b", color: "#818cf8",
                      borderRadius: 6, padding: "2px 8px", fontSize: 12, fontWeight: 700,
                    }}>
                      Clase {alumno.clases.length - i}
                    </span>
                    {clase.niv && (
                      <span style={{
                        background: `${nivelColor(clase.niv)}18`,
                        color: nivelColor(clase.niv),
                        borderRadius: 6, padding: "2px 8px", fontSize: 11,
                      }}>
                        {clase.niv}
                      </span>
                    )}
                  </div>
                  <span style={{ fontSize: 12, color: "#9b96c1" }}>
                    {formatFecha(clase.fec)} · {clase.hora}
                  </span>
                </div>
                {clase.not && (
                  <div style={{
                    background: "rgba(102,187,106,0.06)",
                    border: "1px solid rgba(102,187,106,0.2)",
                    borderRadius: 8, padding: "10px 12px",
                  }}>
                    <p style={{ margin: 0, fontSize: 13, color: "#f5f3ff", lineHeight: 1.5 }}>
                      {clase.not}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        <div style={{
          marginTop: 32, textAlign: "center",
          borderTop: "1px solid rgba(139,128,255,0.12)", paddingTop: 24,
        }}>
          <p style={{ margin: "0 0 6px", fontSize: 13, color: "#9b96c1" }}>¿Tienes preguntas sobre el progreso?</p>
          <a
            href="https://wa.me/17868721898"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block", background: "#25D366", color: "#fff",
              borderRadius: 10, padding: "10px 20px", fontSize: 14, fontWeight: 600, textDecoration: "none",
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
