import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import { AuthProvider } from "./utils/auth";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Taberna — Tu taberna de especialistas IA",
  description:
    "Crea agentes IA (tus taberneros), asignalos a una oficina y mira en vivo a cada uno cumplir su rol.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}