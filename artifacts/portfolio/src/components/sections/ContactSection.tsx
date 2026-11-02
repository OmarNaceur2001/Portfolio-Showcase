import React from 'react';
import { SectionReveal } from '@/components/SectionReveal';
import { Github, Linkedin, Mail, MapPin, Phone, Download, ExternalLink } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-28 relative border-t border-border/30">
      <SectionReveal>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-sm font-mono text-primary mb-2 flex items-center justify-center gap-2">
            <span className="w-4 h-[1px] bg-primary" />
            05. CONTACT
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Let's <span className="text-primary">Connect</span>
          </h3>
          <p className="text-muted-foreground text-base md:text-lg font-mono">
            {">"} Open to AI engineering roles, machine learning research, and technical discussions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mt-12">
          {/* Contact Info */}
          <div className="space-y-6 p-8 border border-border/50 rounded-lg bg-card/30 backdrop-blur-sm">
            <h4 className="text-lg font-bold font-mono text-foreground mb-6 flex items-center gap-2">
              <span className="text-primary">//</span> Contact Details
            </h4>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group">
                <div className="p-3 bg-secondary rounded-sm group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground mb-1">EMAIL</p>
                  <a 
                    href="mailto:omar.naceur01@gmail.com" 
                    className="text-base sm:text-lg text-foreground hover:text-primary transition-colors break-all" 
                    data-testid="link-email"
                  >
                    omar.naceur01@gmail.com
                  </a>
                </div>
              </li>
              
              <li className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group">
                <div className="p-3 bg-secondary rounded-sm group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground mb-1">PHONE</p>
                  <a 
                    href="tel:+21620888207" 
                    className="text-base sm:text-lg text-foreground hover:text-primary transition-colors" 
                    data-testid="link-phone"
                  >
                    +216 20 888 207
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-4 text-muted-foreground group">
                <div className="p-3 bg-secondary rounded-sm group-hover:text-primary transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground mb-1">LOCATION</p>
                  <span className="text-base sm:text-lg text-foreground">Souassi, Mahdia / Monastir, Tunisia</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Actions & Socials */}
          <div className="space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <h4 className="text-lg font-bold font-mono text-foreground mb-4 flex items-center gap-2">
                <span className="text-primary">//</span> Professional Profiles
              </h4>
              <a 
                href="https://github.com/OmarNaceur2001" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-between p-4 border border-border rounded-sm hover:border-primary/50 hover:bg-primary/5 transition-all group focus:outline-none focus:ring-2 focus:ring-primary/40"
                data-testid="link-github"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="font-mono text-foreground">GitHub</span>
                </div>
                <div className="flex items-center gap-1.5 text-muted-foreground font-mono text-sm group-hover:text-primary transition-colors">
                  <span>/OmarNaceur2001</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/omar-naceur" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-between p-4 border border-border rounded-sm hover:border-primary/50 hover:bg-primary/5 transition-all group focus:outline-none focus:ring-2 focus:ring-primary/40"
                data-testid="link-linkedin"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="font-mono text-foreground">LinkedIn</span>
                </div>
                <div className="flex items-center gap-1.5 text-muted-foreground font-mono text-sm group-hover:text-primary transition-colors">
                  <span>/omar-naceur</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </a>
            </div>

            {/* Verified Resume Download Action (Fixing Task 8) */}
            <div className="pt-4 border-t border-border/50">
              <a 
                href="/CV_Omar_Naceur.pdf"
                download="CV_Omar_Naceur.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 w-full py-4 bg-primary text-primary-foreground rounded-sm font-medium hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(59,130,246,0.25)] focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm sm:text-base group"
                data-testid="button-download-cv"
                aria-label="Download Omar Naceur's Resume in PDF format"
              >
                <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                Download Verified Resume (PDF)
              </a>
              <p className="text-center font-mono text-xs text-muted-foreground mt-2">
                PDF format • Updated 2026
              </p>
            </div>
          </div>
        </div>
      </SectionReveal>
      
      {/* Footer minimal text */}
      <footer className="mt-24 pt-8 border-t border-border/40 text-center text-xs font-mono text-muted-foreground flex flex-col sm:flex-row items-center justify-between max-w-6xl mx-auto px-6 gap-4">
        <span>© {new Date().getFullYear()} Omar Naceur. All rights reserved.</span>
        <span className="text-muted-foreground/70">Engineered with React 19, TypeScript & Tailwind CSS</span>
      </footer>
    </section>
  );
}
