import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const navItems = [
  { id: 'hero', label: '00. Home' },
  { id: 'about', label: '01. About' },
  { id: 'skills', label: '02. Skills' },
  { id: 'projects', label: '03. Projects' },
  { id: 'experience', label: '04. Experience' },
  { id: 'contact', label: '05. Contact' },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navItems.map(item => document.getElementById(item.id));
      
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-4" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div 
          className="font-mono font-bold text-lg tracking-tighter cursor-pointer"
          onClick={() => scrollTo('hero')}
          data-testid="nav-logo"
        >
          O.N<span className="text-primary">_</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={cn(
                "font-mono text-sm transition-colors relative py-1",
                activeSection === item.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
              )}
              data-testid={`nav-link-${item.id}`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
          <a 
            href="#contact" 
            onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
            className="ml-4 px-4 py-2 rounded-sm border border-primary/50 text-primary font-mono text-sm hover:bg-primary/10 transition-colors"
            data-testid="nav-cta"
          >
            Connect
          </a>
        </nav>

        {/* Mobile Nav Toggle (simplified for now, ideally an animated menu) */}
        <div className="md:hidden">
          <span className="text-primary font-mono text-sm">MENU</span>
        </div>
      </div>
    </header>
  );
}
