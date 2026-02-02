import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Complete Showcase v12",
  description: "Una librería de componentes premium creada con Antigravity.",
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
