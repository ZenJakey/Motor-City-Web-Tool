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
    title: {
        template: '%s | Motor City Admin Tool',
        default: 'Motor City Admin Tool',
    },
    description: 'ZenJakey\'s Motor City Admin Tool.',
    metadataBase: new URL('https://127.0.0.1'),
    openGraph: {
        title: 'Motor City Admin Tool',
        type: 'website',
        url: "https://127.0.0.1",
        description: "Motor City Admin Tool"
    }
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
