import type { Metadata } from "next";
import "../common/styles/globals.css";
import { raleway } from "@/constants";
import Header from "@/components/header/header";


export const metadata: Metadata = {
  title: "Ігри у Львові",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${raleway.variable}`}>
      <body>
        <link rel="icon" href="/public/favicon.ico" sizes="any" />
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
