import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap'
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: 'swap'
});

export const metadata: Metadata = {
  title: {
    default: "FriendsTyping",
    template: "%s | FriendsTyping"
  },
  description: "Augmentez votre vitesse de frappe en compétition",
  keywords: ["dactylographie", "typing", "compétition", "vitesse de frappe"],
  themeColor: "#FE277E",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${robotoMono.variable}`}>
      <head>
      </head>
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased">
        <AnimatedBackground />
          <main className="flex-1">
            {children}
          </main>
      </body>
    </html>
  );
}