import React from 'react';
import { SectionReveal } from '@/components/SectionReveal';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative border-t border-border/30">
      <SectionReveal>
        <div className="mb-16">
          <h2 className="text-sm font-mono text-primary mb-2 flex items-center gap-2">
            <span className="w-4 h-[1px] bg-primary" />
            04. EXPERIENCE
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Experience & Education
          </h3>
        </div>

        <div className="relative border-l border-border/50 ml-4 md:ml-6 space-y-12 pb-8">
          
          {/* Active indicator dot at top */}
          <div className="absolute top-0 -left-[5px] w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.6)]" />

          <div className="relative pl-8 md:pl-12">
            {/* Timeline node */}
            <div className="absolute top-1.5 -left-[5px] w-2.5 h-2.5 rounded-full border border-primary bg-background z-10" />
            
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
              <span className="bg-secondary px-2.5 py-0.5 rounded text-xs text-foreground font-sans">Data Science & AI</span>
            </div>

            <ul className="space-y-4 text-muted-foreground leading-relaxed list-none">
              <li className="relative pl-6">
                <span className="absolute left-0 top-2.5 w-1.5 h-[1px] bg-primary" />
                Participated in technical discussions and structured code reviews, applying AI engineering patterns, modular system architecture, and code maintainability.
              </li>
              <li className="relative pl-6">
                <span className="absolute left-0 top-2.5 w-1.5 h-[1px] bg-primary" />
                Collaborated with engineering teammates in an agile delivery environment to integrate intelligent algorithms and data pipelines into reliable full-stack applications.
              </li>
            </ul>
          </div>

          {/* Education as timeline items */}
          <div className="relative pl-8 md:pl-12 opacity-85">
            <div className="absolute top-1.5 -left-[4px] w-2 h-2 rounded-full border border-primary/60 bg-background z-10" />
            <div className="mb-2">
              <h4 className="text-lg font-bold text-foreground">
                Engineering Degree, Data Science & AI
              </h4>
              <span className="font-mono text-primary/80 text-sm">
                @ ESPRIT
              </span>
            </div>
            <div className="text-sm font-mono text-muted-foreground mb-3">
              2024 – Present • Monastir, Tunisia
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Curriculum focused on deep learning, machine learning systems, statistical modeling, distributed data processing, and natural language understanding.
            </p>
          </div>

          <div className="relative pl-8 md:pl-12 opacity-75">
            <div className="absolute top-1.5 -left-[4px] w-2 h-2 rounded-full border border-border bg-background z-10" />
            <div className="mb-2">
              <h4 className="text-lg font-bold text-foreground/90">
                Classes Préparatoires aux Études d’Ingénieurs
              </h4>
              <span className="font-mono text-muted-foreground text-sm">
                @ IPEI Gafsa
              </span>
            </div>
            <div className="text-sm font-mono text-muted-foreground mb-2">
              2022 – 2024 • Gafsa, Tunisia
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Two-year intensive national preparatory program specializing in advanced mathematics, physics, and computer science foundations.
            </p>
          </div>

        </div>
      </SectionReveal>
    </section>
  );
}
