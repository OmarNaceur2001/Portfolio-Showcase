import React from 'react';
import { SectionReveal } from '@/components/SectionReveal';
import { Github, ExternalLink, Terminal } from 'lucide-react';

const projects = [
  {
    id: "01",
    title: "Agentic-SDLC",
    subtitle: "Autonomous Multi-Agent Software Delivery Pipeline",
    description: "Architected a multi-agent system (Planner → Code Agent → Deploy Agent) that autonomously converts Jira tickets into deployed, live web pages.",
    stack: ["Python", "FastAPI", "Groq (Llama 3.3)", "GitHub API", "Playwright"],
    link: "https://github.com/OmarNaceur2001",
    highlight: true,
  },
  {
    id: "02",
    title: "Medical AI Diagnostic Platform",
    subtitle: "Computer Vision & Explainable AI",
    description: "Built a full-stack diagnostic platform for brain MRI tumor and chest CT lung cancer classification, featuring Grad-CAM explainability and autoencoder-based anomaly detection.",
    stack: ["Python", "TensorFlow", "FastAPI", "Streamlit", "EfficientNetB0"],
    highlight: false,
  },
  {
    id: "03",
    title: "ECG Classification AI",
    subtitle: "Deep Learning for Medical Signals",
    description: "Developed a deep learning model to classify ECG signals using a ResNet-50 architecture on complex medical time-series data.",
    stack: ["Python", "TensorFlow", "ResNet-50"],
    highlight: false,
  },
  {
    id: "04",
    title: "Data Repartitioner & Profile Generator",
    subtitle: "Python Data Engineering Tool",
    description: "A CLI tool for intelligent dataset splitting with stratified, random, and k-fold strategies. Generates persistent user profiles and column-by-column data stats reports. Supports demo data generation with zero setup.",
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    highlight: false,
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-32 relative">
      <SectionReveal>
        <div className="mb-16">
          <h2 className="text-sm font-mono text-primary mb-2 flex items-center gap-2">
            <span className="w-4 h-[1px] bg-primary"></span>
            03. OUTPUT
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            System Artifacts
          </h3>
          <p className="mt-4 text-muted-foreground max-w-2xl font-mono text-sm">
            {">"} Production pipelines, models, and tools developed for real-world application.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  return (
    <SectionReveal delay={index * 0.1} fullWidth={true}>
      <div 
        className={`group relative grid md:grid-cols-12 gap-6 p-8 rounded-lg border transition-all duration-300 ${
          project.highlight 
            ? 'border-primary/50 bg-primary/[0.02] shadow-[0_0_30px_rgba(59,130,246,0.05)] hover:bg-primary/[0.04]' 
            : 'border-border/50 bg-card/30 hover:bg-card hover:border-border'
        }`}
      >
        {/* Background glow for highlight */}
        {project.highlight && (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        )}

        {/* Project Number */}
        <div className="md:col-span-1 hidden md:flex items-start">
          <span className="font-mono text-3xl font-bold text-muted-foreground/30 group-hover:text-primary/40 transition-colors">
            {project.id}
          </span>
        </div>

        {/* Content */}
        <div className="md:col-span-11 flex flex-col h-full relative z-10">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
            <div>
              {project.highlight && (
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-primary/20 text-primary mb-3">
                  <Terminal className="w-3 h-3" /> FLAGSHIP_DEPLOYMENT
                </span>
              )}
              <h4 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-primary font-mono text-sm mt-1">{project.subtitle}</p>
            </div>
            
            {project.link && (
              <a 
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full border border-border/50 hover:bg-primary/10 hover:border-primary/50 text-muted-foreground hover:text-primary transition-all self-start"
                aria-label={`View source code for ${project.title}`}
              >
                <Github className="w-5 h-5" />
              </a>
            )}
          </div>

          <div className="bg-background/50 border border-border/50 p-4 rounded text-muted-foreground text-sm leading-relaxed mb-6">
            {project.description}
          </div>

          <div className="mt-auto pt-4 flex flex-wrap items-center gap-2">
            {project.stack.map(tech => (
              <span key={tech} className="px-2.5 py-1 text-xs font-mono bg-secondary text-secondary-foreground border border-border/50 rounded-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
