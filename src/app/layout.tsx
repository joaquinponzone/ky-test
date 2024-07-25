import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../styles/globals.css";
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ky-pokèdex",
  description: "ky-pokèdex",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <main className="flex flex-col items-center min-h-screen p-8">
          {children}
        </main>
      </body>
    </html>
  );
}
