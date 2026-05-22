import "./Layout.css";
import "./tailwind.css";

import logoUrl from "../assets/logo.svg";
import { Link } from "../components/Link";

import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"

import { Footer } from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Navbar />
      {children}
      <Footer />
      <Toaster />
    </ThemeProvider>
  );
}