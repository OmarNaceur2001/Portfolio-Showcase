import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
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
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/50 py-3.5 shadow-sm"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <button 
          className="font-mono font-bold text-lg tracking-tighter cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-primary/40 rounded px-1"
          onClick={() => scrollTo('hero')}
          data-testid="nav-logo"
          aria-label="Omar Naceur - Return to top"
        >
          O.N<span className="text-primary animate-pulse">_</span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={cn(
                "font-mono text-sm transition-colors relative py-1 focus:outline-none focus:text-primary",
                activeSection === item.id ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
              )}
              data-testid={`nav-link-${item.id}`}
              aria-current={activeSection === item.id ? 'page' : undefined}
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
            className="ml-2 px-4 py-1.5 rounded-sm border border-primary/60 text-primary font-mono text-sm hover:bg-primary/10 transition-colors inline-flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-primary/40"
            data-testid="nav-cta"
          >
            Connect <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/40 rounded"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border/60 px-6 py-6 overflow-hidden"
          >
            <nav className="flex flex-col gap-4 font-mono text-sm" aria-label="Mobile Navigation">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={cn(
                    "text-left py-2 px-3 rounded transition-colors flex items-center justify-between",
                    activeSection === item.id
                      ? "text-primary bg-primary/10 font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                  )}
                >
                  <span>{item.label}</span>
                  {activeSection === item.id && <span className="w-1.5 h-1.5 rounded-full bg-primary" />}
                </button>
              ))}
              <div className="pt-3 border-t border-border/40">
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
                  className="w-full py-2.5 px-4 rounded border border-primary/60 text-primary text-center font-medium block hover:bg-primary/10 transition-colors"
                >
                  Connect
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
