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
  title: "Anime Editor Pro - Professional Anime Edits & AMVs",
  description: "Creating epic anime experiences through professional AMVs, edits, and compilations. Specializing in emotional storytelling and perfect music synchronization.",
  keywords: "anime, AMV, edit, compilation, video editing, anime music video, YouTube, creator",
  authors: [{ name: "Anime Editor Pro" }],
  openGraph: {
    title: "Anime Editor Pro - Professional Anime Edits & AMVs",
    description: "Creating epic anime experiences through professional AMVs, edits, and compilations.",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Anime Editor Pro Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anime Editor Pro - Professional Anime Edits & AMVs",
    description: "Creating epic anime experiences through professional AMVs, edits, and compilations.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
