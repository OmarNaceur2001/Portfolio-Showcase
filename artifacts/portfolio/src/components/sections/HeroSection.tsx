import React from 'react';
import { SectionReveal } from '@/components/SectionReveal';
import { motion } from 'framer-motion';
import { ArrowDown, FolderGit2, Mail } from 'lucide-react';
import omarPhoto from '@assets/omar_1784209383215.jpg';

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Abstract background gradient glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />
      </div>

      <div className="w-full max-w-6xl mx-auto px-6 grid lg:grid-cols-[1fr_0.8fr] gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <div className="order-2 lg:order-1">
          <SectionReveal direction="left" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/50 border border-border rounded-sm mb-6 font-mono text-xs sm:text-sm text-primary">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
              AVAILABLE FOR OPPORTUNITIES
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4 text-foreground leading-[1.08]">
              Omar <br className="hidden md:block" /> Naceur<span className="text-primary">.</span>
            </h1>
            
            <h2 className="text-lg md:text-2xl text-muted-foreground font-mono mt-4 mb-8 max-w-2xl leading-relaxed">
              AI Engineering Student | <span className="text-foreground border-b border-primary/30">Agentic AI & LLM Systems</span> | Computer Vision
            </h2>

            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-xl mb-10">
              Developing autonomous multi-agent pipelines, evidence-grounded scientific NLP, and explainable deep learning models for medical imaging.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="px-7 py-3.5 bg-foreground text-background font-medium hover:bg-primary hover:text-primary-foreground transition-all rounded-sm flex items-center gap-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                data-testid="hero-cta-projects"
              >
                <FolderGit2 className="w-4 h-4" />
                Explore Projects
              </a>
              <a 
                href="#contact" 
                className="px-7 py-3.5 border border-border text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all rounded-sm flex items-center gap-2 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                data-testid="hero-cta-contact"
              >
                <Mail className="w-4 h-4 text-primary" />
                Get in Touch
              </a>
            </div>
          </SectionReveal>
        </div>

        {/* Image / Graphic Area */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <SectionReveal direction="right" delay={0.3}>
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Decorative border / frame */}
              <div className="absolute inset-0 border border-border/50 rounded-lg transform rotate-3 scale-[1.02] transition-transform hover:rotate-0 hover:scale-100 duration-500 z-0" />
              
              <div className="absolute inset-0 bg-secondary rounded-lg overflow-hidden border border-border z-10 p-1 flex items-center justify-center">
                <img 
                  src={omarPhoto}
                  alt="Portrait of Omar Naceur, AI Engineering Student" 
                  className="w-full h-full object-cover rounded mix-blend-lighten grayscale hover:grayscale-0 transition-all duration-700 contrast-125"
                  width={384}
                  height={384}
                  loading="eager"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.classList.add('bg-black', 'border-primary/30');
                      const fallback = document.createElement('div');
                      fallback.className = 'font-mono text-primary/50 text-xs text-center p-4';
                      fallback.textContent = 'IMG_SOURCE_NOT_FOUND';
                      parent.appendChild(fallback);
                    }
                  }}
                />
                
                {/* Tech overlay grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none rounded mix-blend-overlay" />
              </div>
              
              {/* Corner accents */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-primary z-20" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-primary z-20" />
            </div>
          </SectionReveal>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span className="text-[10px] font-mono tracking-widest text-muted-foreground uppercase">Scroll</span>
        <ArrowDown className="w-3.5 h-3.5 text-primary" />
      </motion.div>
    </section>
  );
}
