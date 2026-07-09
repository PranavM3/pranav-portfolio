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
  title: "Pranav M | AI & Data Science Engineer Portfolio",
  description:
    "Portfolio of Pranav M, an AI & Data Science engineer building computer vision, machine learning, and cloud-based solutions.",
  keywords: ["Pranav M", "AI Engineer", "Data Science", "Computer Vision", "Machine Learning", "Portfolio"],
  openGraph: {
    title: "Pranav M | AI & Data Science Engineer",
    description: "AI and Data Science student crafting intelligent systems with computer vision, machine learning, and modern web experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
