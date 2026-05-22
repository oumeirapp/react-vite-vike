import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function Testimonial() {
   return (
      <section className="container mx-auto px-4 py-4 md:py-8" id="testimonial">
         <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-6 items-stretch">
            {/* Left Layout */}
            <div className="hidden lg:block relative h-130 w-full max-w-107.5 mx-auto">

               {/* Top Right Card */}
               <div className="absolute top-0 right-0 h-62.5 w-62.5 sm:w-70 rounded-sm flex items-end justify-between border-4 border-background shadow-2xl">
                  <img
                     src="https://www.cisco.com/content/dam/cisco-cdc/site/images/heroes/learn/topics/artificial-intelligence/artificial-intel-800x450.png"
                     alt="testimonial"
                     className="h-full w-full object-cover rounded-sm"
                  />
               </div>

               {/* Bottom Left Card */}
               <div className="absolute bottom-0 left-0 h-62.5 w-62.5 sm:w-70 rounded-sm flex items-end justify-between border-4 border-background shadow-2xl">
                  <img
                     src="https://www.shutterstock.com/image-vector/ai-generate-logo-artificial-intelligence-600nw-2519534733.jpg"
                     alt="testimonial"
                     className="h-full w-full object-cover rounded-sm"
                  />
               </div>

            </div>

            {/* Right Content */}
            <Card className="bg-muted p-8 md:p-12 flex flex-col justify-between min-h-115">
               <CardContent>
                  <span className="text-6xl leading-none text-primary">
                     “
                  </span>

                  <p className="mt-6 text-2xl md:text-4xl font-medium leading-snug tracking-tight max-w-4xl">
                     Agent 4 unlocks true collaboration and real-time learning —
                     now our teams can design and build with our closest partners
                     live, turn instant feedback into measurable wins, and deliver
                     outcomes that delight customers and partners.
                  </p>
               </CardContent>

               <CardFooter className="mt-10">
                  <h3 className="text-2xl font-semibold">
                     Doug Rodermund -
                  </h3>

                  <p className="mt-1 text-lg text-muted-foreground ml-1">
                    CEO
                  </p>
               </CardFooter>
            </Card>
         </div>
      </section>
   )
}
