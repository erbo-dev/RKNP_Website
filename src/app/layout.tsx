import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";

export const metadata: Metadata = {
  title: "MIORA — Neural Signal Integrity",
  description: "Protecting the signal. Preserving the intent. An experimental decision-protection layer for brain–computer interfaces.",
  keywords: ["MIORA", "BCI", "Brain-Computer Interface", "EEG", "EMG artifact", "Reliable AI", "Decision Protection Layer"],
  authors: [{ name: "Bekarys Qydyrbek" }, { name: "Erbosyn Shaimardan" }],
  icons: {
    icon: "/icon.svg",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kk" className="dark scroll-smooth font-sans">
      <body className="bg-background text-foreground antialiased selection:bg-brand-secondary/20">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
