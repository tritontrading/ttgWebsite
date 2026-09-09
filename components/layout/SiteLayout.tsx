import type { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
