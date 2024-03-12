import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coupe coupe",
  description: "Reserver votre rendez-vous coiffeur en ligne.",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="fr-FR">
      <body className={inter.className}>
      <Header/>
      {children}</body>
      </html>
  );
}
