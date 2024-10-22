import Footer from "@/app/_components/footer";
import { CMS_NAME } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import cn from "classnames";
import { ThemeSwitcher } from "./_components/theme-switcher";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./globals.css";
import { Intro } from "./_components/intro";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Bilal Ahmad Portfolio`,
  description: `Bilal Ahmad Portfolio`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full p-0 m-0 overflow-x-hidden">
        <Intro />

        {children}
        <Footer />
      </body>
    </html>
  );
}
