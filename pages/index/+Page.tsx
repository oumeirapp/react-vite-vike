
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";
import Testimonial from "@/components/testimonial";
import Faq from "@/components/faq";
import { BookOpenText, MessageSquareCheck, Bot, Mails } from "lucide-react"
import ShowcaseSection from "@/components/showcase-section";


const showcase = [
  {
    title: "AI Chat",
    description: "Engage in intelligent, human-like conversations powered by advanced AI technology. Get instant answers, personalized support, and seamless communication for both personal and business needs.",
    icon: MessageSquareCheck
  },
  {
     title: "Content Generation",
    description: "Generate high-quality articles, emails, social media posts, and marketing copy in seconds. Save time while creating engaging and professional content tailored to your audience.",
    icon: BookOpenText
  },
  {
    title: "Automation",
    description: "Streamline repetitive tasks and automate complex workflows with AI-driven solutions. Increase productivity, reduce manual effort, and focus on what matters most to your business.",
    icon: Bot
  },
  {
    title: "AI Emails",
    description: "Automatically draft and respond to emails while you're away. Maintain professional communication, handle customer inquiries faster, and never miss an important message.",
    icon: Mails
  },
]


export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors font-sans">
      <Hero/>
      <ShowcaseSection items={showcase}/>
      <Pricing />
      <Testimonial />
      <Faq />
    </main>
  );
}