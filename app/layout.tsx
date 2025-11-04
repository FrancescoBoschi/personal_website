import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Francesco Boschi - Data Engineer & AI Developer",
  description: "Data Engineer at Technogym specializing in cloud data platforms, ETL pipelines, and AI solutions. Building intelligent data systems on Google Cloud Platform.",
  keywords: ["Data Engineer", "AI Developer", "Google Cloud Platform", "Machine Learning", "ETL", "Python", "TypeScript"],
  authors: [{ name: "Francesco Boschi" }],
  openGraph: {
    title: "Francesco Boschi - Data Engineer & AI Developer",
    description: "Data Engineer at Technogym specializing in cloud data platforms, ETL pipelines, and AI solutions.",
    url: "https://personal-website-beryl-tau.vercel.app",
    siteName: "Francesco Boschi Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Francesco Boschi - Data Engineer & AI Developer",
    description: "Data Engineer at Technogym specializing in cloud data platforms, ETL pipelines, and AI solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
