import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Leidy Carolina Granados Celis — Comunicación Estratégica & Liderazgo",
  description:
    "Estratega en comunicación, liderazgo y crecimiento de marca para emprendedoras y proyectos con propósito.",
  openGraph: {
    title: "Leidy Carolina Granados Celis",
    description:
      "Comunicación estratégica para marcas y emprendedoras que quieren crecer con dirección.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${poppins.variable}`}>
      <body className="min-h-full flex flex-col font-poppins bg-beige text-carbon antialiased">
        {children}
      </body>
    </html>
  );
}
