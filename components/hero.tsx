import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero(){
   return (
      <section className="container mx-auto px-4 py-14 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            <Sparkles className="mr-2 h-4 w-4" />
            AI Powered Productivity
          </div>

          <h1 className="text-5xl font-bold tracking-tight md:text-7xl leading-tight">
            Build smarter with
            <span className="bg-linear-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
              {" "}
              AI tools
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            NeuroAI helps creators and teams generate
            content, automate workflows, and build faster
            using intelligent AI tools.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary"
            >
              Start Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>
   )
}