import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MIORA — Neural Signal Integrity",
  description: "Protecting the signal. Preserving the intent. An experimental decision-protection layer for more reliable brain–computer interfaces.",
  keywords: ["MIORA", "BCI", "Brain-Computer Interface", "EEG", "EMG artifact", "Reliable AI", "Decision Protection Layer"],
  authors: [{ name: "Bekarys Qydyrbek" }, { name: "Erbosyn Shaimardan" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kk" className="dark scroll-smooth">
      <body className="bg-background text-foreground antialiased selection:bg-brand-secondary/20">
        {children}
      </body>
    </html>
  );
}
