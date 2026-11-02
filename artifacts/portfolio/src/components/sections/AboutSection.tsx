import React from 'react';
import { SectionReveal } from '@/components/SectionReveal';

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative border-t border-border/30">
      <div className="absolute inset-0 bg-secondary/10 pointer-events-none" />
      
      <SectionReveal>
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-4">
            <h2 className="text-sm font-mono text-primary mb-2 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-primary" />
              01. ABOUT
            </h2>
            <h3 className="text-3xl font-bold tracking-tight text-foreground">
              Background & Focus
            </h3>
            
            <div className="mt-8 space-y-4">
              <div className="p-4 border border-border/50 rounded-sm bg-card font-mono text-sm">
                <span className="text-muted-foreground block mb-1 text-xs">// Current Location</span>
                ESPRIT (Monastir, Tunisia)
              </div>
              <div className="p-4 border border-border/50 rounded-sm bg-card font-mono text-sm">
                <span className="text-muted-foreground block mb-1 text-xs">// Specialization</span>
                Data Science & Artificial Intelligence
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl md:text-2xl leading-relaxed text-foreground font-medium mb-6">
                Engineering student specializing in Data Science & AI at ESPRIT (Monastir), focused on autonomous agentic systems, computer vision, and evidence-grounded machine learning applications.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Currently developing <span className="text-primary font-mono bg-primary/10 px-1.5 py-0.5 rounded text-sm">Agentic-SDLC</span>, an autonomous multi-agent software engineering pipeline that listens to Jira Cloud tickets, generates clean web applications with Groq/Llama 3.3, and validates rendering and script execution via headless Playwright.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mt-4">
                Backed by a rigorous two-year mathematical foundation from competitive national preparatory engineering classes (Classes Préparatoires aux Études d’Ingénieurs, Gafsa); actively engaged in AIESEC leadership and the Aerospace Club.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 border-t border-border/50 pt-8">
              <div>
                <p className="font-mono text-xs text-muted-foreground mb-1 uppercase tracking-wider">Education</p>
                <p className="font-medium text-sm">ESPRIT, Monastir</p>
                <p className="text-xs text-muted-foreground mt-1">2024 – Present</p>
              </div>
              <div>
                <p className="font-mono text-xs text-muted-foreground mb-1 uppercase tracking-wider">Foundation</p>
                <p className="font-medium text-sm">Classes Préparatoires</p>
                <p className="text-xs text-muted-foreground mt-1">Gafsa (2022 – 2024)</p>
              </div>
              <div className="col-span-2 md:col-span-1">
                <p className="font-mono text-xs text-muted-foreground mb-1 uppercase tracking-wider">Languages</p>
                <p className="font-medium text-sm">Arabic (Native)</p>
                <p className="text-xs text-muted-foreground mt-1">French (B1) · English (A2)</p>
              </div>
            </div>
          </div>
          
        </div>
      </SectionReveal>
    </section>
  );
}
