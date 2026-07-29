import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Triton Trading Group - UCSD",
  description:
    "Triton Trading Group is UCSD's premier student-run finance organization, operating across Asset Management, FP&A Consulting, and Quantitative Finance.",
  icons: {
    icon: "/images/brand/logo.png",
    shortcut: "/images/brand/logo.png",
    apple: "/images/brand/logo.png",
  },
  openGraph: {
    title: "Triton Trading Group - UCSD",
    description: "Where UCSD's sharpest minds trade, model, and analyze.",
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
