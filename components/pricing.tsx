"use client"

import { Check, Zap, Crown, Building2 } from "lucide-react"
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card"
import {
   Tabs,
   TabsContent,
   TabsList,
   TabsTrigger,
} from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

const pricingPlans = {
   monthly: [
      {
         name: "Starter",
         description: "Perfect for individuals and small projects",
         price: "$19",
         billing: "/month",
         icon: Zap,
         popular: false,
         button: "Get Started",
         features: [
            "5 Projects",
            "10GB Storage",
            "Basic Analytics",
            "Email Support",
         ],
      },
      {
         name: "Pro",
         description: "Best for growing teams and businesses",
         price: "$49",
         billing: "/month",
         icon: Crown,
         popular: true,
         button: "Start Free Trial",
         features: [
            "Unlimited Projects",
            "100GB Storage",
            "Advanced Analytics",
            "Priority Support",
            "Custom Domains",
         ],
      },
      {
         name: "Enterprise",
         description: "Advanced features for large organizations",
         price: "Custom",
         billing: "",
         icon: Building2,
         popular: false,
         button: "Contact Sales",
         features: [
            "Unlimited Everything",
            "Dedicated Infrastructure",
            "24/7 Phone Support",
            "SSO & Security",
            "Custom Integrations",
         ],
      },
   ],

   yearly: [
      {
         name: "Starter",
         description: "Perfect for individuals and small projects",
         price: "$164",
         billing: "/year",
         icon: Zap,
         popular: false,
         button: "Get Started",
         features: [
            "5 Projects",
            "10GB Storage",
            "Basic Analytics",
            "Email Support",
            "2 Months Free",
         ],
      },
      {
         name: "Pro",
         description: "Best for growing teams and businesses",
         price: "$310",
         billing: "/year",
         icon: Crown,
         popular: true,
         button: "Start Free Trial",
         features: [
            "Unlimited Projects",
            "100GB Storage",
            "Advanced Analytics",
            "Priority Support",
            "Custom Domains",
            "2 Months Free",
         ],
      },
      {
         name: "Enterprise",
         description: "Advanced features for large organizations",
         price: "Custom",
         billing: "",
         icon: Building2,
         popular: false,
         button: "Contact Sales",
         features: [
            "Unlimited Everything",
            "Dedicated Infrastructure",
            "24/7 Phone Support",
            "SSO & Security",
            "Custom Integrations",
         ],
      },
   ],
}

export default function PricingSection() {
   return (
      <section className="container mx-auto px-4 py-24" id="pricing">
         <Tabs
            defaultValue="monthly"
            className="w-full"
         >
            {/* Tabs */}
            <div className="mb-10 flex justify-center">
               <TabsList className="bg-muted">
                  <TabsTrigger value="monthly">
                     Monthly
                  </TabsTrigger>

                  <TabsTrigger value="yearly" className="data-[state=active]:bg-background data-[state=active]:text-foreground">
                     Yearly
                  </TabsTrigger>
               </TabsList>
            </div>

            {/* Monthly Pricing */}
            <TabsContent value="monthly">
               <div className="grid gap-8 lg:grid-cols-3">
                  {pricingPlans.monthly.map((plan) => {
                     const Icon = plan.icon

                     return (
                        <Card
                           key={plan.name}
                           className={`relative overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${plan.popular
                                 ? "border-primary shadow-lg shadow-primary/10"
                                 : ""
                              }`}
                        >
                           {plan.popular && (
                              <div className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                                 Most Popular
                              </div>
                           )}

                           <CardHeader className="pb-4">
                              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                                 <Icon className="h-6 w-6 text-primary" />
                              </div>

                              <CardTitle className="text-2xl">
                                 {plan.name}
                              </CardTitle>

                              <CardDescription>
                                 {plan.description}
                              </CardDescription>

                              <div className="mt-6">
                                 <span className="text-5xl font-bold">
                                    {plan.price}
                                 </span>

                                 {plan.price !== "Custom" && (
                                    <span className="ml-2 text-muted-foreground">
                                       {plan.billing}
                                    </span>
                                 )}
                              </div>
                           </CardHeader>

                           <CardContent>
                              <ul className="space-y-4">
                                 {plan.features.map((feature) => (
                                    <li
                                       key={feature}
                                       className="flex items-center gap-3 text-sm"
                                    >
                                       <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                                          <Check className="h-3 w-3 text-primary" />
                                       </div>

                                       <span className="text-muted-foreground">
                                          {feature}
                                       </span>
                                    </li>
                                 ))}
                              </ul>
                           </CardContent>

                           <CardFooter>
                              <Button
                                 className={`w-full ${plan.popular
                                       ? "bg-primary text-primary-foreground hover:bg-primary/90"
                                       : ""
                                    }`}
                                 variant={plan.popular ? "default" : "outline"}
                                 onClick={() =>
                                    toast(plan.name, {
                                       description: `${plan.button} clicked`,
                                    })
                                 }
                              >
                                 {plan.button}
                              </Button>
                           </CardFooter>
                        </Card>
                     )
                  })}
               </div>
            </TabsContent>

            {/* Yearly Pricing */}
            <TabsContent value="yearly">
               <div className="grid gap-8 lg:grid-cols-3">
                  {pricingPlans.yearly.map((plan) => {
                     const Icon = plan.icon

                     return (
                        <Card
                           key={plan.name}
                           className={`relative overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${plan.popular
                                 ? "border-primary shadow-lg shadow-violet-500/10"
                                 : ""
                              }`}
                        >
                           {plan.popular && (
                              <div className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-medium text-white">
                                 Most Popular
                              </div>
                           )}

                           <CardHeader className="pb-4">
                              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                                 <Icon className="h-6 w-6 text-primary" />
                              </div>

                              <CardTitle className="text-2xl">
                                 {plan.name}
                              </CardTitle>

                              <CardDescription>
                                 {plan.description}
                              </CardDescription>

                              <div className="mt-6">
                                 <span className="text-5xl font-bold">
                                    {plan.price}
                                 </span>

                                 {plan.price !== "Custom" && (
                                    <span className="ml-2 text-muted-foreground">
                                       {plan.billing}
                                    </span>
                                 )}
                              </div>
                           </CardHeader>

                           <CardContent>
                              <ul className="space-y-4">
                                 {plan.features.map((feature) => (
                                    <li
                                       key={feature}
                                       className="flex items-center gap-3 text-sm"
                                    >
                                       <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                                          <Check className="h-3 w-3 text-primary" />
                                       </div>

                                       <span className="text-muted-foreground">
                                          {feature}
                                       </span>
                                    </li>
                                 ))}
                              </ul>
                           </CardContent>

                           <CardFooter>
                              <Button
                                 className={`w-full ${plan.popular
                                       ? "bg-violet-600 hover:bg-violet-700"
                                       : ""
                                    }`}
                                 variant={
                                    plan.popular
                                       ? "default"
                                       : "outline"
                                 }
                                 onClick={() =>
                                    toast(plan.name, {
                                       description: `${plan.button} clicked`,
                                    })
                                 }
                              >
                                 {plan.button}
                              </Button>
                           </CardFooter>
                        </Card>
                     )
                  })}
               </div>
            </TabsContent>
         </Tabs>
      </section>
   )
}