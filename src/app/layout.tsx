import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Precision Baseline — Architectural Blueprint",
  description: "Structural baseline reproduction of Precision Neuroscience for MIORA transformation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground antialiased selection:bg-brand-secondary/20">
        {children}
      </body>
    </html>
  );
}
