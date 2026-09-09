import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Triton Trading Group - UCSD",
  description:
    "Triton Trading Group gives UC San Diego students hands-on experience in asset management, FP&A, and quantitative finance.",
  icons: {
    icon: "/images/brand/logo.png",
    shortcut: "/images/brand/logo.png",
    apple: "/images/brand/logo.png",
  },
  openGraph: {
    title: "Triton Trading Group - UCSD",
    description: "Hands-on experience in asset management, FP&A, and quantitative finance.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
