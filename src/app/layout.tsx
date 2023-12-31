import Header from "@/components/header/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BannyHub",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="md:px-16 lg:px-32 h-screen flex flex-col justify-between">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
