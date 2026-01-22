// app/layout.tsx
import Image from "next/image";
import type { Metadata } from "next";
import { Geist, Geist_Mono, PT_Sans } from "next/font/google";
import Link from "next/link";
import "./globals.css";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ptSans = PT_Sans({
  weight: ["400", "700"], // normal and bold
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tether",
  description: "Community, but smaller.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/Tether_Logo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-950 text-neutral-100`}
      >
        {/* Navbar */}
        <header className="border-b bg-neutral-950">
          <div className="mx-auto max-w-6xl px-4 flex h-16 items-center justify-between">
            {/* Left: Logo */}
            <Link
              href="/"
              className={`flex items-center ${ptSans.className}`}
            >
              <Image
                src="/images/Tether_Logo.png"
                alt="Tether Logo"
                width={40}
                height={40}
                className="rounded-md"
              />
              <span className="ml-2 text-2xl sm:text-3xl text-neutral-100 font-bold">
                Tether
              </span>
            </Link>

            {/* Right: Navigation */}
            <nav className="flex items-center gap-4">
                <Link
                  href="/commons"
                  className="px-6 py-3 rounded-lg text-base font-medium text-neutral-100 hover:bg-neutral-800 transition-colors"
                >
                  Enter Commons
                </Link>
                <Link
                  href="/login"
                  className="px-6 py-3 rounded-lg text-base font-medium text-neutral-100 hover:bg-neutral-800 transition-colors"
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="px-6 py-3 rounded-lg text-base font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                >
                  Sign up
                </Link>
              </nav>

          </div>
        </header>

        {/* Page content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
