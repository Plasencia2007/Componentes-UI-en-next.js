import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nuevo Proyecto",
  description: "Proyecto vacío creado con Antigravity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
