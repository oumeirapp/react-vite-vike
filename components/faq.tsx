import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Faq(){
   return(
       <section className="container mx-auto px-4 py-24" id="faq">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-4xl font-bold">
              Frequently Asked Questions
            </h2>

            <p className="mt-4 text-muted-foreground">
              Everything you need to know about NeuroAI.
            </p>
          </div>

          <div className="mt-12 rounded-2xl border bg-card p-6">
            <Accordion
              type="single"
              collapsible
              className="w-full"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger >
                  What is NeuroAI?
                </AccordionTrigger>

                <AccordionContent className="text-muted-foreground">
                  NeuroAI is an AI-powered productivity
                  platform that helps users generate
                  content, automate workflows, and build
                  faster with intelligent tools.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger >
                  Is there a free plan?
                </AccordionTrigger>

                <AccordionContent className="text-muted-foreground">
                  Yes. We offer a free Starter plan so
                  users can explore the platform before
                  upgrading.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger >
                  Can teams collaborate?
                </AccordionTrigger>

                <AccordionContent className="text-muted-foreground">
                  Absolutely. Our Pro and Enterprise plans
                  include collaboration tools for teams
                  and organizations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger >
                  Which AI models do you support?
                </AccordionTrigger>

                <AccordionContent className="text-muted-foreground">
                  NeuroAI supports multiple advanced AI
                  models optimized for chat, automation,
                  and content generation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger >
                  Is my data secure?
                </AccordionTrigger>

                <AccordionContent className="text-muted-foreground">
                  Yes. Security and privacy are core
                  priorities. We use modern encryption and
                  secure infrastructure to protect your
                  data.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
   )
}