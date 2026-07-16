import React from 'react';
import { SectionReveal } from '@/components/SectionReveal';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative border-t border-border/30">
      <SectionReveal>
        <div className="mb-16">
          <h2 className="text-sm font-mono text-primary mb-2 flex items-center gap-2">
            <span className="w-4 h-[1px] bg-primary"></span>
            04. BACKGROUND
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Experience Timeline
          </h3>
        </div>

        <div className="relative border-l border-border/50 ml-4 md:ml-6 space-y-12 pb-8">
          
          {/* Active indicator dot at top */}
          <div className="absolute top-0 -left-[5px] w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.6)]"></div>

          <div className="relative pl-8 md:pl-12">
            {/* Timeline node */}
            <div className="absolute top-1.5 -left-[5px] w-2.5 h-2.5 rounded-full border border-primary bg-background z-10"></div>
            
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-4">
              <h4 className="text-xl md:text-2xl font-bold text-foreground">
                Software Engineering Intern
              </h4>
              <span className="font-mono text-primary text-sm">
                @ Microedition
              </span>
            </div>
            
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-mono text-muted-foreground mb-6">
              <span>Jul 2026 – Present</span>
              <span className="hidden md:inline">•</span>
              <span>Monastir, Tunisia</span>
              <span className="hidden md:inline">•</span>
              <span className="bg-secondary px-2 py-0.5 rounded text-xs text-foreground">Data Science & AI</span>
            </div>

            <ul className="space-y-4 text-muted-foreground leading-relaxed list-none">
              <li className="relative pl-6">
                <span className="absolute left-0 top-2.5 w-1.5 h-[1px] bg-primary"></span>
                Participated in rigorous code reviews and technical discussions, ensuring optimal code quality, scalability, and adherence to AI engineering best practices.
              </li>
              <li className="relative pl-6">
                <span className="absolute left-0 top-2.5 w-1.5 h-[1px] bg-primary"></span>
                Collaborated closely with cross-functional teams using agile methodologies to bridge the gap between intelligent data models and production-ready applications.
              </li>
            </ul>
          </div>

          {/* Education as timeline items */}
          <div className="relative pl-8 md:pl-12 opacity-80">
            <div className="absolute top-1.5 -left-[4px] w-2 h-2 rounded-full border border-border bg-background z-10"></div>
            <div className="mb-2">
              <h4 className="text-lg font-bold text-foreground/80">
                Engineering Degree, Data Science & AI
              </h4>
              <span className="font-mono text-muted-foreground text-sm">
                @ ESPRIT
              </span>
            </div>
            <div className="text-sm font-mono text-muted-foreground mb-4">
              2024 – Present • Monastir, Tunisia
            </div>
          </div>

          <div className="relative pl-8 md:pl-12 opacity-70">
            <div className="absolute top-1.5 -left-[4px] w-2 h-2 rounded-full border border-border bg-background z-10"></div>
            <div className="mb-2">
              <h4 className="text-lg font-bold text-foreground/80">
                Integrated Preparatory Cycle
              </h4>
              <span className="font-mono text-muted-foreground text-sm">
                @ Classes Préparatoires
              </span>
            </div>
            <div className="text-sm font-mono text-muted-foreground">
              2022 – 2024 • Gafsa, Tunisia
            </div>
          </div>

        </div>
      </SectionReveal>
    </section>
  );
}
