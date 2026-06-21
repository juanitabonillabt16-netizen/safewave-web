import Image from "next/image";
import Link from "next/link";

export default function ProgresoNotFound() {
  return (
    <div
      style={{
        background: "#0a0817",
        minHeight: "100vh",
        color: "#f5f3ff",
        fontFamily: "Inter, system-ui, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <Image
        src="/images/logo-optimized.png"
        alt="SafeWave Academy"
        width={48}
        height={48}
        style={{ borderRadius: 10, marginBottom: 20 }}
      />
      <h1 style={{ margin: "0 0 8px", fontSize: 22, fontWeight: 700 }}>
        Página no encontrada
      </h1>
      <p style={{ margin: "0 0 24px", fontSize: 14, color: "#9b96c1", maxWidth: 320 }}>
        Este enlace no corresponde a ningún alumno activo. Verifica que el link sea correcto.
      </p>
      <a
        href="https://wa.me/17868721898"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          background: "#25D366",
          color: "#fff",
          borderRadius: 10,
          padding: "10px 20px",
          fontSize: 14,
          fontWeight: 600,
          textDecoration: "none",
        }}
      >
        Contactar a Juanita
      </a>
      <p style={{ margin: "24px 0 0", fontSize: 12, color: "#9b96c1" }}>
        SafeWave Academy · safewaveacademy.com
      </p>
    </div>
  );
}
