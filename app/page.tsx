import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { Services } from "@/components/Services";
import { Strategy } from "@/components/Strategy";
import { Team } from "@/components/Team";
import { Secure } from "@/components/Secure";
import { Statement } from "@/components/Statement";
import { HowItWorks } from "@/components/HowItWorks";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Intro />
        <Services />
        <Strategy />
        <Team />
        <Secure />
        <Statement />
        <HowItWorks />
        <Faq />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
