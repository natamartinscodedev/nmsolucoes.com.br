import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import '@/style/style.scss'

const roboto = Roboto({ subsets: ["latin"], weight: '700' });

export const metadata: Metadata = {
  title: "NM Soluções",
  description: "Traga seu negocio ao mundo da tecnologia!..🚀",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ptbr">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
