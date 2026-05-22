"use client";

import * as React from "react";
import {
   Carousel,
   CarouselApi,
   CarouselContent,
   CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpenText, ChevronLeft, ChevronRight } from "lucide-react";



export default function ShowcaseCarousel({
   items
}: {
   items: any
}) {
   const [api, setApi] = React.useState<CarouselApi>();
   const [current, setCurrent] = React.useState(0);
   const [count, setCount] = React.useState(0);
   const [canPrev, setCanPrev] = React.useState(false);
   const [canNext, setCanNext] = React.useState(false);

   React.useEffect(() => {
      if (!api) return;

      const getSlidesPerView = () => {
         if (typeof window === "undefined") return 1;

         if (window.innerWidth >= 1024) return 3;
         if (window.innerWidth >= 640) return 2;

         return 1;
      };

      const update = () => {

         const totalSlides = api.slideNodes().length;
         const perView = getSlidesPerView();

         setCount(Math.max(1, totalSlides - perView + 1));

         setCurrent(api.selectedScrollSnap());
         setCanPrev(api.canScrollPrev());
         setCanNext(api.canScrollNext());
      };

      update();

      api.on("select", update);
      api.on("reInit", update);

      return () => {
         api.off("select", update);
         api.off("reInit", update);
      };
   }, [api]);

   return (
      <section className="w-full py-16" id="features">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative">
               {/* Desktop arrows */}
               {canPrev && (
                  <Button
                     size="icon"
                     variant="outline"
                     onClick={() => api?.scrollPrev()}
                     className=" absolute left-0 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 rounded-full bg-background shadow-lg md:flex"
                  >
                     <ChevronLeft className="h-5 w-5" />
                  </Button>
               )}

               {canNext && (
                  <Button
                     size="icon"
                     variant="outline"
                     onClick={() => api?.scrollNext()}
                     className=" absolute right-0 top-1/2 z-20 hidden translate-x-1/2 -translate-y-1/2 rounded-full bg-background shadow-lg md:flex"
                  >
                     <ChevronRight className="h-5 w-5" />
                  </Button>
               )}

               <Carousel
                  setApi={setApi}
                  opts={{
                     align: "start",
                     slidesToScroll: 1,
                     skipSnaps: false,
                     containScroll: "trimSnaps",

                     /**
                      * CRITICAL:
                      * Makes pagination/dots/page snapping correct
                      * for responsive multi-slide layouts.
                      */
                  }}
                  className="w-full"
               >
                  {/* 
                     IMPORTANT:
                     - overflow-hidden stays on viewport
                     - padding added INSIDE track
                     - prevents shadow clipping
                  */}
                  <CarouselContent className="-ml-4 py-4">
                     {items.map((item, index) => {
                        
                        const Icon = item.icon || <></>;

                        return(
                           <CarouselItem
                              key={index}
                              className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 "
                           >
                              <div className="h-full">
                                 <Card className="h-full border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                                    <CardContent className="flex h-full flex-col p-6">
                                       <div className="space-y-3">
                                          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                                             <Icon className="text-primary" />
                                          </div>
                                          <h3 className="text-xl font-semibold tracking-tight">
                                             {item.title}
                                          </h3>

                                          <p className="text-sm leading-6 text-muted-foreground">
                                             {item.description}
                                          </p>
                                       </div>
                                    </CardContent>
                                 </Card>
                              </div>
                           </CarouselItem>
                        )
                     })}
                  </CarouselContent>
               </Carousel>

               {/* Mobile arrows */}
               <div className="mt-6 flex items-center justify-center gap-3 md:hidden">
                  <Button
                     size="icon"
                     variant="outline"
                     disabled={!canPrev}
                     onClick={() => api?.scrollPrev()}
                     className="rounded-full"
                  >
                     <ChevronLeft className="h-5 w-5" />
                  </Button>

                  <Button
                     size="icon"
                     variant="outline"
                     disabled={!canNext}
                     onClick={() => api?.scrollNext()}
                     className="rounded-full"
                  >
                     <ChevronRight className="h-5 w-5" />
                  </Button>
               </div>

               {/* Pagination */}
               <div className="mt-8 flex items-center justify-center gap-2">
                  {Array.from({ length: count }).map((_, index) => {
                     const active = current === index;

                     return (
                        <button
                           key={index}
                           onClick={() => api?.scrollTo(index)}
                           aria-label={`Go to slide ${index + 1}`}
                           className={`
                    h-2.5
                    rounded-full
                    transition-all
                    duration-300
                    ${active
                                 ? "w-8 bg-foreground"
                                 : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                              }
                  `}
                        />
                     );
                  })}
               </div>
            </div>
         </div>
      </section>
   );
}