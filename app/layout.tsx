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
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
export const metadata = {
  title: "Sasank Kukalakunta | React & Next.js Developer | Software Engineer",
  description:
    "Sasank Kukalakunta is a React.js, Next.js, and Full-Stack Developer actively looking for job opportunities. Explore projects, skills, and experience.",
  keywords: [
    "Sasank Kukalakunta",
    "React Developer",
    "Next.js Developer",
    "Frontend Developer",
    "Full Stack Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Software Engineer",
    "Remote Developer",
    "Developer Portfolio",
    "Hiring React Developer",
    "Hire Next.js Developer",
    "React Developer available for work",
    "Developer looking for job",
  ],
  authors: [{ name: "Sasank Kukalakunta" }],
  metadataBase: new URL("https://sasankkukalakunta.com"),
  openGraph: {
    title: "Hire Sasank Kukalakunta | React & Next.js Developer",
    description:
      "Portfolio of Sasank Kukalakunta – React, Next.js, TypeScript, and Full-Stack development. Open to new job opportunities.",
    url: "https://sasankkukalakunta.com",
    siteName: "Sasank Kukalakunta Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

