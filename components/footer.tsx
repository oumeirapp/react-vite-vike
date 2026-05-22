"use client"

import { BrainCircuit } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 py-8 text-center md:flex-row md:text-left">
        {/* Brand */}
        <div>
          <div className="flex items-center justify-center gap-2 font-semibold md:justify-start">
            <BrainCircuit className="h-5 w-5 text-primary" />
            NeuroAI
          </div>

          <p className="mt-2 text-sm text-muted-foreground">
            AI tools built for creators, teams, and modern
            workflows.
          </p>
        </div>

        {/* Quote */}
        <div className="max-w-md">
          <p className="text-sm italic text-muted-foreground">
            “The future belongs to those who build with
            intelligence.”
          </p>
        </div>

        {/* Copyright */}
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} NeuroAI
        </div>
      </div>
    </footer>
  )
}