import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "3DC Brain | AI Revenue Operations for Real Estate Professionals",
  description: "AI-powered revenue operations, competitive intelligence, and content automation for real estate investors, coaches, and service providers.",
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "3DC Brain | AI Revenue Operations",
    description: "Deploy AI agents for lead generation, competitive research, and content automation in 30 days.",
    url: "https://3dc-brain.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-navy text-white">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
