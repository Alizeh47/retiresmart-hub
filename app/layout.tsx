import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "RetireSmart Hub - A retirement roadmap for everyone",
  description: "Retirement is a journey. Take it with confidence. RetireSmart Hub provides expert guidance for your retirement planning needs.",
  keywords: "retirement planning, financial advice, retirement roadmap, financial planning",
  authors: [{ name: "RetireSmart Hub" }],
  openGraph: {
    title: "RetireSmart Hub - A retirement roadmap for everyone",
    description: "Retirement is a journey. Take it with confidence. RetireSmart Hub provides expert guidance for your retirement planning needs.",
    siteName: "RetireSmart Hub",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-beige font-sans antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
