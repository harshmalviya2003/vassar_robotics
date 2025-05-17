"use client";

import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { FeaturesSection } from "@/components/features-section";
import UseCasesSection from "@/components/use-cases-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CTASection } from "@/components/cta-section";
import { NewsletterSection } from "@/components/newsletter-section";
import { Footer } from "@/components/footer";
import ScrollFlair from "@/components/aniamtion/ScrollFlair";
import Card  from "@/components/aniamtion/card";
import { TeamSection } from "@/components/team-section";
export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        
        <HeroSection />
        <AboutSection />
        {/* <ScrollFlair/> */}
        <Card/>
        <FeaturesSection />
        <UseCasesSection />
        <TestimonialsSection />
        <CTASection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}