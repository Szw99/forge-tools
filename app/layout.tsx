import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Forge Tools | Construction Hand Tools Manufacturer",
  description: "YONGKANG FORGE TOOLS CO., LTD. Putty knives, scrapers, plastering trowels, bricklaying trowels and mud pans."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body>{children}</body></html>;
}
