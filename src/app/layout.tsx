import type { Metadata } from "next";
import "./globals.css";
import { raleway } from "@/constants";
import Header from "@/components/header/header";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${raleway.variable}`}>
      <body>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
