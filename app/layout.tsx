import type { Metadata } from "next";
import "./globals.css";
import { brand } from "@/lib/content";

export const metadata: Metadata = {
  title: `${brand.name} - ${brand.tagline}`,
  description:
    "Clases de natacion privadas a domicilio para ninos y adultos en Miami. Personalizadas, certificada Cruz Roja, bilingue. Programa Nadador Seguro 90 dias.",
  openGraph: {
    title: brand.name,
    description: brand.tagline,
    type: "website",
    locale: "es_US",
  },
  icons: {
    icon: "/images/logo-optimized.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
