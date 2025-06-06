import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Camaleão - A dois passos do mar",
  description: "Abrace a beleza da vida costeira com um empreendimento sustentável e bem planeado que proporciona luxo e paz de espírito. Perfeitas para viver, passar férias ou até mesmo para alugar turístico, estas propriedades exclusivas oferecem flexibilidade e conveniência em Castro Marim.",
  keywords: "Camaleão, Castro Marim, empreendimento imobiliário, apartamentos, moradias, vista mar, Algarve, propriedades exclusivas, investimento imobiliário, resort, praia, sustentável, Portugal, turismo, férias, luxo",
  openGraph: {
    images: 'https://www.praiadocamaleao.pt/morad-01.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="https://www.praiadocamaleao.pt/favico.png" sizes="any" />
      <body
        className={`antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
