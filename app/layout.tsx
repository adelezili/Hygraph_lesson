import { Afacad_Flux } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { getGeneralLayout } from "@/lib/hygraph";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const afacadFlux = Afacad_Flux({
  variable: "--font-afacad-flux",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const generalLayout = await getGeneralLayout();
  return {
    title: generalLayout.siteTitle,
    description: generalLayout.siteDescription,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const generalLayout = await getGeneralLayout();
  return (
    <html lang="en" className={`${afacadFlux.variable} h-full`}>
      <body className="min-h-full w-full flex flex-col">
        <Header
          logoUrl={generalLayout.logo.url}
          navigationLinks={generalLayout.headerMenu.navigationLinks}
        />
        {children}
        <Footer
          title={generalLayout.footerMenu.title}
          navigationLinks={generalLayout.footerMenu.navigationLinks}
        />
      </body>
    </html>
  );
}
