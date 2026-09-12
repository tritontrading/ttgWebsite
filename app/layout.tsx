import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Triton Trading Group - UCSD",
  description:
    "Triton Trading Group is a nonprofit student organization serving UC San Diego students through Asset Management, Financial Planning & Analysis, and Quantitative Finance programs.",
  icons: {
    icon: "/images/brand/logo.png",
    shortcut: "/images/brand/logo.png",
    apple: "/images/brand/logo.png",
  },
  openGraph: {
    title: "Triton Trading Group - UCSD",
    description:
      "A nonprofit student organization providing hands-on experience in Asset Management, Financial Planning & Analysis, and Quantitative Finance.",
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
