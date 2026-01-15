import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AlgoReach Digital | Bold Creativity & Data-Driven Strategies",
  description: "AlgoReach Digital is a premier digital agency specializing in UX design, web development, and digital marketing strategies that drive growth.",
  keywords: "digital agency, UX design, web development, digital marketing, branding, AlgoReach",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${geistMono.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
