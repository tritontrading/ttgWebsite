import type { Metadata } from "next";
import "./globals.css";
import { siteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: "Triton Finance Group - UCSD",
  description:
    "Triton Finance Group is a nonprofit student organization serving UC San Diego students through Asset Management, Financial Planning & Analysis, and Quantitative Finance programs.",
  icons: {
    icon: "/images/brand/logo.svg",
    shortcut: "/images/brand/logo.svg",
    apple: "/images/brand/apple-touch-icon.png",
  },
  openGraph: {
    title: "Triton Finance Group - UCSD",
    description:
      "A nonprofit student organization providing hands-on experience in Asset Management, Financial Planning & Analysis, and Quantitative Finance.",
    type: "website",
    siteName: "Triton Finance Group",
    images: [
      {
        url: "/images/brand/og-image.png",
        width: 1200,
        height: 630,
        alt: "Triton Finance Group",
      },
    ],
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
