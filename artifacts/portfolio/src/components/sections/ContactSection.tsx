import React from 'react';
import { SectionReveal } from '@/components/SectionReveal';
import { Github, Linkedin, Mail, MapPin, Phone, Download } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-32 relative">
      <SectionReveal>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Initiate <span className="text-primary">Connection</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl font-mono">
            {">"} System ready for new inputs. Let's build the next intelligent pipeline.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mt-12">
          {/* Contact Info */}
          <div className="space-y-8 p-8 border border-border/50 rounded-lg bg-card/30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold font-mono text-foreground mb-6">__contact_info</h3>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group">
                <div className="p-3 bg-secondary rounded-sm group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground mb-1">EMAIL</p>
                  <a href="mailto:omar.naceur01@gmail.com" className="text-lg" data-testid="link-email">
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
                  <a href="tel:+21620888207" className="text-lg" data-testid="link-phone">
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
                  <span className="text-lg text-foreground">Souassi, Mahdia, Tunisia</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Actions & Socials */}
          <div className="space-y-8 flex flex-col justify-center">
            <div className="space-y-4">
              <p className="font-mono text-sm text-muted-foreground mb-4">__social_links</p>
              <a 
                href="https://github.com/OmarNaceur2001" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-between p-4 border border-border rounded-sm hover:border-primary/50 hover:bg-primary/5 transition-all group"
                data-testid="link-github"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                  <span className="font-mono text-foreground">GitHub</span>
                </div>
                <span className="text-muted-foreground font-mono text-sm group-hover:text-primary transition-colors">/OmarNaceur2001</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/omar-naceur" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-between p-4 border border-border rounded-sm hover:border-primary/50 hover:bg-primary/5 transition-all group"
                data-testid="link-linkedin"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                  <span className="font-mono text-foreground">LinkedIn</span>
                </div>
                <span className="text-muted-foreground font-mono text-sm group-hover:text-primary transition-colors">/omar-naceur</span>
              </a>
            </div>

            <div className="pt-8 mt-4 border-t border-border/50">
              <a 
                href="#"
                className="inline-flex items-center justify-center gap-2 w-full py-4 bg-primary text-primary-foreground rounded-sm font-medium hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                data-testid="button-download-cv"
                onClick={(e) => { e.preventDefault(); alert('CV download would trigger here.'); }}
              >
                <Download className="w-5 h-5" />
                Download Full Resume
              </a>
            </div>
          </div>
        </div>
      </SectionReveal>
      
      {/* Footer minimal text */}
      <div className="absolute bottom-8 left-0 w-full text-center text-xs font-mono text-muted-foreground">
        © {new Date().getFullYear()} Omar Naceur. SYSTEM_ONLINE.
      </div>
    </section>
  );
}
