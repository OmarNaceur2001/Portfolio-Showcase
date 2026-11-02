import React from 'react';
import { SectionReveal } from '@/components/SectionReveal';

const skillCategories = [
  {
    title: "AI / ML Core",
    skills: ["Deep Learning", "Computer Vision", "LLMs & Agentic Systems", "Prompt Engineering", "Information Retrieval"]
  },
  {
    title: "Frameworks & Libraries",
    skills: ["PyTorch", "TensorFlow", "FastAPI", "Scikit-learn", "OpenCV", "MediaPipe"]
  },
  {
    title: "Data & Languages",
    skills: ["Python", "Pandas", "NumPy", "SQL", "Power BI"]
  },
  {
    title: "Tools, Testing & APIs",
    skills: ["Groq API", "GitHub API", "Playwright", "Docker", "Git"]
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-secondary/5 border-y border-border/30">
      {/* Decorative grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-50 z-0" />
      
      <SectionReveal>
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="text-sm font-mono text-primary mb-2 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-primary" />
              02. SKILLS
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Technical Capabilities
            </h3>
          </div>
          
          <div className="md:text-right font-mono text-sm text-muted-foreground border-l md:border-l-0 md:border-r border-primary/30 pl-4 md:pl-0 md:pr-4">
            <p>Machine Learning & Applied Engineering</p>
            <p className="text-xs text-primary/80 mt-0.5">Empirical research to working prototypes</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 relative z-10">
          {skillCategories.map((category, idx) => (
            <SectionReveal key={category.title} delay={idx * 0.1} fullWidth={true}>
              <div className="p-6 border border-border/50 rounded-lg bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-colors group">
                <h4 className="font-mono text-sm text-muted-foreground mb-6 uppercase tracking-wider group-hover:text-foreground transition-colors">
                  // {category.title}
                </h4>
                
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map(skill => (
                    <div 
                      key={skill}
                      className="px-3.5 py-1.5 border border-border rounded-sm bg-background text-sm font-medium hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-all cursor-default"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Certifications block below skills */}
        <div className="mt-16 relative z-10">
          <h4 className="font-mono text-sm text-muted-foreground mb-6 uppercase tracking-wider">
            // Verified Certifications
          </h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 flex items-center gap-4 border-l-2 border-border hover:border-primary bg-card/20 transition-colors rounded-r">
              <div className="w-10 h-10 rounded-sm bg-secondary flex items-center justify-center font-mono text-xs font-bold text-primary shrink-0">
                NV
              </div>
              <div>
                <p className="font-medium text-sm">Fundamentals of Deep Learning</p>
                <p className="text-xs text-muted-foreground font-mono mt-1">NVIDIA • Feb 2026</p>
              </div>
            </div>
            
            <div className="p-4 flex items-center gap-4 border-l-2 border-border hover:border-primary bg-card/20 transition-colors rounded-r">
              <div className="w-10 h-10 rounded-sm bg-secondary flex items-center justify-center font-mono text-xs font-bold text-primary shrink-0">
                365
              </div>
              <div>
                <p className="font-medium text-sm">Introduction to Data Science</p>
                <p className="text-xs text-muted-foreground font-mono mt-1">365 Data Science • 2025</p>
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
