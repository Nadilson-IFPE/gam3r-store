import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";

export const metadata: Metadata = {
  title: "Gan3r.store",
  description: "Versão completa da loja Gam3r.store",
};

const font = Montserrat({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${font.className} antialiased`}>{children}</body>
    </html>
  );
}
