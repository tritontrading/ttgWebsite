import type { Metadata } from "next";
import "./globals.css";
import { siteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: "Triton Finance Group - UCSD",
  description:
    "Triton Finance Group is a nonprofit student organization serving UC San Diego students through Asset Management, Financial Planning & Analysis, and Quantitative Finance programs.",
  icons: {
    icon: "/images/brand/logo.png",
    shortcut: "/images/brand/logo.png",
    apple: "/images/brand/logo.png",
  },
  openGraph: {
    title: "Triton Finance Group - UCSD",
    description:
      "A nonprofit student organization providing hands-on experience in Asset Management, Financial Planning & Analysis, and Quantitative Finance.",
    type: "website",
    siteName: "Triton Finance Group",
    images: [{ url: "/images/brand/logo.png", alt: "Triton Finance Group" }],
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
