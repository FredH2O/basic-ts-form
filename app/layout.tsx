import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import { FormProvider } from "./context/FormContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Personality Checker",
  description: "Typescript and React Project to learn forms.",
  keywords: [
    "Personality Quiz",
    "React",
    "TypeScript",
    "Forms",
    "Frontend Project",
  ],
  authors: [
    { name: "Frederico", url: "https://frederico-portfolio.vercel.app/" },
  ],
  creator: "Frederico",
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
        <Header
          img={{ src: "/images/form-logo.png", alt: "Form Logo" }}
          title="Personality Checker"
        />
        <main role="main" className="bg-gray-900">
          <FormProvider>{children}</FormProvider>
        </main>
        <footer className="text-center p-5 bg-black">
          Footer 2025 Frederico
        </footer>
      </body>
    </html>
  );
}
