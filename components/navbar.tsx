"use client"

import { useState } from "react"
import { Link } from "@/components/Link"

import {
  BrainCircuit,
  Menu,
} from "lucide-react"


import { Button } from "@/components/ui/button"

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { ThemeToggle } from "@/components/theme-toggle"

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">

        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-lg">
          <BrainCircuit className="h-5 w-5 text-primary" />
          NeuroAI
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">

          <Link
            href="#features"
            className="hover:text-foreground transition-colors"
          >
            Features
          </Link>

          <Link
            href="#pricing"
            className="hover:text-foreground transition-colors"
          >
            Pricing
          </Link>

          <Link
            href="#testimonial"
            className="hover:text-foreground transition-colors"
          >
            Testimonial
          </Link>

          <Link
            href="#faq"
            className="hover:text-foreground transition-colors"
          >
            Faq
          </Link>           

        </nav>

        <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
          </div>



        {/* Mobile Menu */}
        <div className="flex md:hidden items-center gap-2">

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTitle className="hidden">Navbar</SheetTitle>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="left">
              <div className="mt-10 flex flex-col gap-4">
                <Button variant="ghost" onClick={handleClose}>
                  <Link href="#features">Features</Link>
                </Button>

                <Button variant="ghost" onClick={handleClose}>
                  <Link href="#pricing">Pricing</Link>
                </Button>

                <Button variant="ghost" onClick={handleClose}>
                  <Link href="#testimonial">Testimonial</Link>
                </Button>

                <Button variant="ghost" onClick={handleClose}>
                  <Link href="#faq">Faq</Link>
                </Button>

                <div className="text-center">
                  <ThemeToggle />
                </div>


              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  )
}