import React, { useState, useEffect, useRef } from 'react';
import { SectionReveal } from '@/components/SectionReveal';
import {
  Github,
  ExternalLink,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Images,
  Video,
  Layers,
  Users,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
}

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  categoryBadge: string;
  isFlagship?: boolean;
  isCollaborative?: boolean;
  coverImage: string;
  coverAlt: string;
  problemStatement: string;
  contribution: string;
  stack: string[];
  githubUrl?: string;
  demoUrl?: string;
  videoDemo?: {
    src: string;
    poster: string;
    title: string;
    caption: string;
  };
  gallery: GalleryItem[];
}

const projects: ProjectData[] = [
  {
    id: "01",
    title: "Agentic-SDLC",
    subtitle: "Autonomous Multi-Agent Software Delivery Pipeline",
    categoryBadge: "Flagship Autonomous AI Pipeline",
    isFlagship: true,
    coverImage: "/projects/agentic-sdlc/cover.webp",
    coverAlt: "Agentic-SDLC Jira board showing automated software ticket execution",
    problemStatement:
      "Conventional software development workflows suffer from manual handoffs between issue tracking, boilerplate generation, pull-request assembly, and initial validation, creating friction and slow turnaround cycles for rapid web prototyping.",
    contribution:
      "Architected an end-to-end multi-agent orchestration pipeline (Planner → Code Agent → Testing Agent). The orchestrator polls Jira Cloud tickets, coordinates Groq-accelerated Llama 3.3 to generate structured web applications, pushes commits directly to GitHub, and automatically validates DOM elements and JavaScript runtime errors using headless Playwright with automated retry handling.",
    stack: ["Python", "FastAPI", "Groq (Llama 3.3)", "Playwright", "GitHub API", "Jira Cloud API"],
    githubUrl: "https://github.com/OmarNaceur2001/agentic-sdlc",
    videoDemo: {
      src: "/projects/agentic-sdlc/agentic-sdlc-demo.mp4",
      poster: "/projects/agentic-sdlc/jira-board.webp",
      title: "Agentic-SDLC Autonomous Pipeline Demonstration",
      caption: "End-to-end autonomous execution: Jira ticket detection, Llama 3.3 code generation, GitHub repository update, and headless Playwright browser validation without human intervention."
    },
    gallery: [
      {
        src: "/projects/agentic-sdlc/jira-board.webp",
        alt: "AgenticSDLC Jira Cloud sprint board with automated tickets",
        caption: "Jira Cloud Sprint Board: Autonomous lifecycle management transitioning tickets from 'To Do' through code generation to 'Done'."
      }
    ]
  },
  {
    id: "02",
    title: "SciLit",
    subtitle: "Evidence-Grounded Scientific Literature Review Pipeline",
    categoryBadge: "Scientific NLP & Hybrid Retrieval",
    coverImage: "/projects/scilit/scilit-1.webp",
    coverAlt: "SciLit research literature review interface and indexing metrics",
    problemStatement:
      "Standard large language models frequently hallucinate citations, misattribute empirical results, and generate unverifiable prose when summarizing dense scientific research literature, compromising academic rigor.",
    contribution:
      "Engineered an automated scientific literature synthesis system. Implemented hybrid passage retrieval combining lexical BM25 and dense BGE-M3 embeddings, reranked via Reciprocal Rank Fusion (RRF) and Cross-Encoder scoring. Designed a claim-level extraction pipeline audited with Natural Language Inference (NLI) to ensure every generated review sentence is grounded verbatim in indexed sources with zero fabricated citations. Tested across 1,109 papers and 68,510 indexed passages.",
    stack: ["Python", "FastAPI", "BGE-M3", "BM25", "Cross-Encoder", "NLI / Sentence Transformers", "Uvicorn"],
    githubUrl: "https://github.com/OmarNaceur2001/scilit-",
    gallery: [
      {
        src: "/projects/scilit/scilit-1.webp",
        alt: "SciLit landing page displaying corpus statistics and search interface",
        caption: "Corpus overview and search interface: Indexing 1,109 structured papers across 68,510 passages with measured citation fidelity (0.855 citation F1 score)."
      },
      {
        src: "/projects/scilit/scilit-2.webp",
        alt: "SciLit hybrid retrieval pipeline results showing BM25 and BGE-M3 scoring",
        caption: "Hybrid retrieval output: BM25 lexical search combined with BGE-M3 dense embeddings, fused through Reciprocal Rank Fusion (RRF) and Cross-Encoder reranking."
      },
      {
        src: "/projects/scilit/scilit-3.webp",
        alt: "SciLit verified review view with sentence-by-sentence source verification badges",
        caption: "Verified literature review: Every sentence is linked to verified source excerpts with explicit citation badges and NLI premise support."
      },
      {
        src: "/projects/scilit/scilit-4.webp",
        alt: "SciLit comparative synthesis matrix extracting question, method, data, results, and limitations",
        caption: "Comparative literature matrix: Automatically extracting research questions, methodologies, datasets, empirical results, and noted limitations across papers."
      }
    ]
  },
  {
    id: "03",
    title: "Medical AI Diagnostic Platform",
    subtitle: "Computer Vision & Explainable AI for Clinical Oncology",
    categoryBadge: "Computer Vision & Explainable AI",
    coverImage: "/projects/medical-ai/interface_main.webp",
    coverAlt: "Medical AI Diagnostic Assistant web interface for breast histopathology and brain MRI",
    problemStatement:
      "Clinical adoption of deep learning in diagnostic radiology and histopathology is hindered by black-box predictions; clinicians require spatial explainability to verify what image features triggered an automated classification.",
    contribution:
      "Built a full-stack diagnostic application leveraging PyTorch and EfficientNet-B0 for multi-organ oncology: classifying Brain MRI scans across 4 classes (Glioma, Meningioma, Pituitary tumor, Normal) and Breast tissue histopathology (Benign vs Malignant). Integrated Grad-CAM (Gradient-weighted Class Activation Mapping) to generate high-resolution visual attention heatmaps that explain model focus regions, served through a FastAPI backend.",
    stack: ["PyTorch", "EfficientNet-B0", "Grad-CAM", "FastAPI", "OpenCV", "Python"],
    githubUrl: "https://github.com/OmarNaceur2001/Medical-AI-Diagnostic-Assistant",
    gallery: [
      {
        src: "/projects/medical-ai/interface_main.webp",
        alt: "Medical AI Diagnostic Platform model selection and upload dashboard",
        caption: "Clinical diagnostic portal: Dual-model architecture supporting Breast Histopathology patches and Brain MRI imaging scans."
      },
      {
        src: "/projects/medical-ai/gradcam_demo.webp",
        alt: "Grad-CAM heatmap visual explanation for histopathology slide malignancy classification",
        caption: "Grad-CAM visual explanation: Tri-panel display showing original biopsy patch, model attention heatmap, and transparent overlay explaining malignancy classification."
      },
      {
        src: "/projects/medical-ai/brain_demo.webp",
        alt: "Brain MRI tumor diagnosis upload and multi-class classification inspection",
        caption: "Brain MRI analysis workflow: Multi-class differential diagnosis identifying glioma, meningioma, pituitary, or no-tumor scans."
      },
      {
        src: "/projects/medical-ai/breast_demo.webp",
        alt: "Breast histopathology patch evaluation dashboard",
        caption: "Breast histopathology slide evaluation: High-sensitivity diagnostic classification with confidence metrics and threshold controls."
      }
    ]
  },
  {
    id: "04",
    title: "RhythmAI",
    subtitle: "Multimodal Cardiac Intelligence & Decision Support Platform",
    categoryBadge: "Multimodal Electrophysiology",
    coverImage: "/projects/rhythmai/rhythmai-landing.webp",
    coverAlt: "RhythmAI cardiac intelligence platform landing page and clinical statistics",
    problemStatement:
      "Cardiologists evaluate electrocardiograms across divergent formats—from raw multi-lead digital biosignals to scanned paper ECG charts—often lacking an integrated clinical system with physician audit trails, user access controls, and contextual guideline references.",
    contribution:
      "Developed an end-to-end cardiac intelligence platform trained on the PTB-XL database (21,837 12-lead ECG recordings) to detect 5 clinical diagnostic superclasses: Normal Sinus (NORM), Myocardial Infarction (MI), ST/T Changes (STTC), Conduction Disturbance (CD), and Arrhythmia (ARR). Built multimodal ingestion pipelines supporting raw signal arrays (.dat, .npy, .csv) and image uploads, alongside a hospital administrative portal, role-based authorization, and an integrated cardiology clinical assistant.",
    stack: ["Python", "TensorFlow / PyTorch", "PTB-XL Dataset", "FastAPI", "React", "Clinical NLP"],
    githubUrl: "https://github.com/oussama121tt/rhythmai",
    gallery: [
      {
        src: "/projects/rhythmai/rhythmai-landing.webp",
        alt: "RhythmAI platform overview showing PTB-XL training scale and pathology classes",
        caption: "Platform overview: Demonstrating 21,837 ECG records trained on the PTB-XL benchmark across 5 core pathology superclasses."
      },
      {
        src: "/projects/rhythmai/rhythmai-signal-analysis.webp",
        alt: "RhythmAI signal analysis screen showing arrhythmia diagnosis and class probability breakdown",
        caption: "Signal analysis interface: Multimodal input support, comprehensive class probability breakdown (NORM, MI, STTC, CD, ARR), and clinical assistant guidance."
      },
      {
        src: "/projects/rhythmai/rhythmai-admin-portal.webp",
        alt: "RhythmAI hospital administration portal with user statistics and diagnostic distribution",
        caption: "Administrative portal: System oversight dashboard tracking verified clinical users, pending approvals, and 30-day diagnosis distribution."
      },
      {
        src: "/projects/rhythmai/rhythmai-user-management.webp",
        alt: "RhythmAI clinical user and permission management interface",
        caption: "Clinician access control: Role-based medical staff verification and diagnostic access authorization."
      },
      {
        src: "/projects/rhythmai/rhythmai-assistant-chat.webp",
        alt: "RhythmAI cardiology assistant providing clinical guidelines for arrhythmia management",
        caption: "Clinical guideline assistant: Contextual cardiology decision support providing evidence-based reference guidelines for detected arrhythmias."
      }
    ]
  },
  {
    id: "05",
    title: "ECG Classification AI",
    subtitle: "Deep Transfer Learning for 2D Cardiac Rhythm Strips",
    categoryBadge: "Deep Transfer Learning",
    coverImage: "/projects/ecg-classification/ecg-classified.webp",
    coverAlt: "ECG image classification web interface showing Right Bundle Branch Block diagnosis",
    problemStatement:
      "Rapidly identifying arrhythmias from printed or digitized ECG rhythm strips requires robust spatial feature extraction resilient to scanning angle differences, grid noise, and baseline wander.",
    contribution:
      "Implemented an image-based transfer learning classifier utilizing ResNet-50 on 224×224 normalized RGB rhythm strip images. Trained the network to distinguish 6 distinct cardiac rhythm classes: Left Bundle Branch Block (LBBB), Normal Sinus, Premature Atrial Contraction (PAC), Premature Ventricular Contraction (PVC), Right Bundle Branch Block (RBBB), and Ventricular Fibrillation (V-Fib). Integrated a lightweight Flask web interface with drag-and-drop file handling and instant confidence scoring.",
    stack: ["Python", "TensorFlow", "Keras", "ResNet-50", "Flask", "Pillow (PIL)"],
    githubUrl: "https://github.com/OmarNaceur2001/ECG-Classification-AI",
    gallery: [
      {
        src: "/projects/ecg-classification/ecg-classified.webp",
        alt: "ECG rhythm strip inference result identifying Right Bundle Branch Block with softmax confidence distribution",
        caption: "Classification inference: ResNet-50 predicting Right Bundle Branch Block (RBBB) from an uploaded rhythm strip image."
      },
      {
        src: "/projects/ecg-classification/ecg-upload.webp",
        alt: "ECG upload preview interface showing raw strip ready for classification",
        caption: "Upload interface: Client-side strip preview and min-max normalization before passing to the ResNet-50 inference pipeline."
      },
      {
        src: "/projects/ecg-classification/ecg-interface.webp",
        alt: "Clean minimal deep medical UI for ECG rhythm classification",
        caption: "Deep Medical UI: Minimalist dark-themed workspace with clinical safety disclaimer and instant prediction display."
      }
    ]
  },
  {
    id: "06",
    title: "ArtisanConnect",
    subtitle: "Collaborative Marketplace & AI Assistant for Artisans",
    categoryBadge: "Collaborative Team Project",
    isCollaborative: true,
    coverImage: "/projects/artisanconnect/artisanconnect-1.webp",
    coverAlt: "ArtisanConnect homepage with embedded Artisan Assistant conversational AI",
    problemStatement:
      "Local artisans across Tunisia frequently lack direct access to digital markets to showcase handmade crafts, manage visitor workshops, and answer prospective customer questions in real time.",
    contribution:
      "Collaborated as part of an engineering student team to build an artisanal e-commerce and craft workshop platform. Specifically designed and integrated the interactive 'Artisan Assistant' conversational AI chatbot to handle automated customer inquiries regarding workshop hours, artisan locations, and craft catalog details, while contributing to the Leaflet / OpenStreetMap interactive geographic workshop booking integration.",
    stack: ["React", "JavaScript", "Conversational AI / NLP", "Leaflet", "OpenStreetMap", "REST APIs"],
    githubUrl: "https://github.com/AyaTlijani/ArtisanConnect",
    gallery: [
      {
        src: "/projects/artisanconnect/artisanconnect-1.webp",
        alt: "ArtisanConnect homepage featuring the active Artisan Assistant customer chatbot",
        caption: "Homepage with Artisan Assistant: Embedded conversational chatbot providing customer guidance on workshop schedules, locations, and artisan services."
      },
      {
        src: "/projects/artisanconnect/artisanconnect-2.webp",
        alt: "ArtisanConnect online shop showcasing regional crafts from Nabeul and Gabès",
        caption: "Artisan boutique catalog: Categorized regional Tunisian craftsmanship including ceramics, traditional carpets, and handcrafted accessories."
      },
      {
        src: "/projects/artisanconnect/artisanconnect-3.webp",
        alt: "ArtisanConnect workshop reservation page with interactive Leaflet map and booking form",
        caption: "Workshop booking & geolocation: Interactive Leaflet map identifying workshop locations with live reservation scheduling."
      }
    ]
  }
];

export function ProjectsSection() {
  const [activeGallery, setActiveGallery] = useState<{
    projectTitle: string;
    items: GalleryItem[];
    currentIndex: number;
  } | null>(null);

  const [activeVideo, setActiveVideo] = useState<{
    src: string;
    title: string;
    caption: string;
  } | null>(null);

  const openGallery = (projectTitle: string, items: GalleryItem[], index = 0) => {
    setActiveGallery({
      projectTitle,
      items,
      currentIndex: index
    });
  };

  const closeGallery = () => {
    setActiveGallery(null);
  };

  const nextImage = () => {
    if (!activeGallery) return;
    setActiveGallery({
      ...activeGallery,
      currentIndex: (activeGallery.currentIndex + 1) % activeGallery.items.length
    });
  };

  const prevImage = () => {
    if (!activeGallery) return;
    setActiveGallery({
      ...activeGallery,
      currentIndex: (activeGallery.currentIndex - 1 + activeGallery.items.length) % activeGallery.items.length
    });
  };

  // Keyboard navigation for gallery modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeGallery) {
        if (e.key === 'Escape') closeGallery();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
      }
      if (activeVideo && e.key === 'Escape') {
        setActiveVideo(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeGallery, activeVideo]);

  return (
    <section id="projects" className="py-28 relative">
      <SectionReveal>
        <div className="mb-16">
          <h2 className="text-sm font-mono text-primary mb-2 flex items-center gap-2">
            <span className="w-4 h-[1px] bg-primary" />
            03. PROJECTS
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Featured Engineering Work
          </h3>
          <p className="mt-4 text-muted-foreground max-w-2xl font-mono text-sm">
            {">"} Applied AI systems, autonomous pipelines, and verifiable deep learning case studies.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpenGallery={(initialIndex) => openGallery(project.title, project.gallery, initialIndex)}
              onOpenVideo={(video) => setActiveVideo(video)}
            />
          ))}
        </div>
      </SectionReveal>

      {/* Expandable Screenshot Gallery Modal */}
      <AnimatePresence>
        {activeGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] bg-background/90 backdrop-blur-md flex flex-col items-center justify-between p-4 md:p-6"
            role="dialog"
            aria-modal="true"
            aria-label={`${activeGallery.projectTitle} Screenshot Gallery`}
          >
            {/* Modal Top Bar */}
            <div className="w-full max-w-6xl flex items-center justify-between py-2 border-b border-border/40">
              <div>
                <span className="text-xs font-mono text-primary uppercase tracking-wider block">
                  Project Gallery
                </span>
                <h4 className="text-lg font-bold text-foreground">
                  {activeGallery.projectTitle}
                </h4>
              </div>

              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-muted-foreground bg-secondary/80 px-2.5 py-1 rounded">
                  {activeGallery.currentIndex + 1} / {activeGallery.items.length}
                </span>
                <button
                  onClick={closeGallery}
                  className="p-2 rounded-full border border-border/60 hover:bg-secondary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40"
                  aria-label="Close screenshot gallery"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Main Image Area */}
            <div className="relative w-full max-w-5xl flex-1 flex items-center justify-center my-4 overflow-hidden">
              {activeGallery.items.length > 1 && (
                <button
                  onClick={prevImage}
                  className="absolute left-2 z-20 p-2.5 rounded-full bg-background/80 border border-border/60 text-foreground hover:text-primary hover:bg-background transition-all shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/40"
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeGallery.currentIndex}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="w-full h-full flex flex-col items-center justify-center"
                >
                  <img
                    src={activeGallery.items[activeGallery.currentIndex].src}
                    alt={activeGallery.items[activeGallery.currentIndex].alt}
                    className="max-h-[68vh] w-auto max-w-full object-contain rounded-md border border-border/50 shadow-2xl"
                    loading="eager"
                  />
                  <p className="mt-3 text-center text-sm text-muted-foreground font-mono max-w-3xl px-4">
                    {activeGallery.items[activeGallery.currentIndex].caption}
                  </p>
                </motion.div>
              </AnimatePresence>

              {activeGallery.items.length > 1 && (
                <button
                  onClick={nextImage}
                  className="absolute right-2 z-20 p-2.5 rounded-full bg-background/80 border border-border/60 text-foreground hover:text-primary hover:bg-background transition-all shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/40"
                  aria-label="Next screenshot"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}
            </div>

            {/* Modal Bottom Thumbnail Strip */}
            {activeGallery.items.length > 1 && (
              <div className="w-full max-w-3xl flex items-center justify-center gap-3 overflow-x-auto py-2">
                {activeGallery.items.map((item, idx) => (
                  <button
                    key={item.src}
                    onClick={() => setActiveGallery({ ...activeGallery, currentIndex: idx })}
                    className={`relative rounded overflow-hidden border-2 transition-all shrink-0 w-20 h-14 ${
                      idx === activeGallery.currentIndex
                        ? 'border-primary ring-2 ring-primary/30 scale-105'
                        : 'border-border/60 opacity-60 hover:opacity-100'
                    }`}
                    aria-label={`View screenshot ${idx + 1}`}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Accessible User-Controlled Video Modal (Task 5) */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] bg-background/92 backdrop-blur-md flex flex-col items-center justify-center p-4 md:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={activeVideo.title}
          >
            <div className="w-full max-w-4xl bg-card border border-border/70 rounded-lg overflow-hidden shadow-2xl flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-border/50 bg-secondary/30">
                <div className="flex items-center gap-2">
                  <Video className="w-5 h-5 text-primary" />
                  <h4 className="font-bold text-foreground text-sm sm:text-base">
                    {activeVideo.title}
                  </h4>
                </div>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="p-1.5 rounded-full border border-border/60 hover:bg-secondary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40"
                  aria-label="Close video demonstration"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video Element (Controlled, not autoplayed with sound) */}
              <div className="relative bg-black flex items-center justify-center aspect-video w-full">
                <video
                  src={activeVideo.src}
                  controls
                  playsInline
                  autoPlay
                  muted={true}
                  preload="metadata"
                  className="w-full h-full object-contain"
                >
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Caption */}
              <div className="p-4 bg-card/90 border-t border-border/40">
                <p className="text-xs sm:text-sm text-muted-foreground font-mono leading-relaxed">
                  <span className="text-primary font-bold">// Execution Note:</span> {activeVideo.caption}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  onOpenGallery,
  onOpenVideo
}: {
  project: ProjectData;
  index: number;
  onOpenGallery: (initialIndex: number) => void;
  onOpenVideo: (video: { src: string; title: string; caption: string }) => void;
}) {
  return (
    <SectionReveal delay={index * 0.08} fullWidth={true}>
      <article
        className={`group relative rounded-xl border transition-all duration-300 overflow-hidden ${
          project.isFlagship
            ? 'border-primary/50 bg-card/60 shadow-[0_0_35px_rgba(59,130,246,0.06)] hover:border-primary/80'
            : project.isCollaborative
            ? 'border-border/70 bg-card/40 hover:border-border hover:bg-card/70'
            : 'border-border/60 bg-card/40 hover:border-primary/40 hover:bg-card/70'
        }`}
      >
        {/* Glow backdrop for flagship */}
        {project.isFlagship && (
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10" />
        )}

        <div className="grid lg:grid-cols-12 gap-6 p-6 sm:p-8">
          {/* Left Column: Visual Media (Cover Image / Video Trigger / Gallery Preview) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="relative rounded-lg overflow-hidden border border-border/60 bg-black/40 group/img aspect-[16/10] sm:aspect-[16/9]">
              <img
                src={project.coverImage}
                alt={project.coverAlt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-[1.03]"
                loading="lazy"
                decoding="async"
                width={640}
                height={360}
              />

              {/* Subtle tech overlay grid */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

              {/* Quick action buttons overlay */}
              <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px] opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-3 p-4">
                {project.videoDemo && (
                  <button
                    onClick={() => onOpenVideo(project.videoDemo!)}
                    className="px-3.5 py-2 bg-primary text-primary-foreground text-xs font-mono font-medium rounded flex items-center gap-1.5 shadow-md hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40"
                    aria-label={`Watch video demonstration of ${project.title}`}
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    Watch Video Demo
                  </button>
                )}

                <button
                  onClick={() => onOpenGallery(0)}
                  className="px-3.5 py-2 bg-secondary text-secondary-foreground text-xs font-mono font-medium rounded border border-border flex items-center gap-1.5 shadow-md hover:bg-secondary/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40"
                  aria-label={`View ${project.gallery.length} screenshot${project.gallery.length > 1 ? 's' : ''} for ${project.title}`}
                >
                  <Images className="w-3.5 h-3.5 text-primary" />
                  Gallery ({project.gallery.length})
                </button>
              </div>

              {/* Bottom tag indicator on cover */}
              <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5">
                {project.videoDemo ? (
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-background/80 backdrop-blur-sm border border-border/70 text-foreground flex items-center gap-1">
                    <Video className="w-3 h-3 text-primary" /> Video Demo Included
                  </span>
                ) : (
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-background/80 backdrop-blur-sm border border-border/70 text-foreground flex items-center gap-1">
                    <Images className="w-3 h-3 text-primary" /> {project.gallery.length} Screenshot{project.gallery.length > 1 ? 's' : ''}
                  </span>
                )}
              </div>
            </div>

            {/* Media Action Row */}
            <div className="mt-4 flex flex-wrap items-center gap-2.5">
              {project.videoDemo && (
                <button
                  onClick={() => onOpenVideo(project.videoDemo!)}
                  className="flex-1 py-2 px-3 rounded border border-primary/40 bg-primary/10 text-primary text-xs font-mono font-medium flex items-center justify-center gap-2 hover:bg-primary/20 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  Play MP4 Demo
                </button>
              )}

              <button
                onClick={() => onOpenGallery(0)}
                className="flex-1 py-2 px-3 rounded border border-border/60 bg-secondary/50 text-foreground text-xs font-mono font-medium flex items-center justify-center gap-2 hover:bg-secondary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40"
              >
                <Images className="w-3.5 h-3.5 text-primary" />
                Inspect Gallery ({project.gallery.length})
              </button>
            </div>
          </div>

          {/* Right Column: Case Study Data & Technical Evidence */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Header Badge Row */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs font-bold text-muted-foreground/50">
                    #{project.id}
                  </span>

                  {project.isFlagship && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-primary/20 text-primary border border-primary/30">
                      <Sparkles className="w-3 h-3" /> FLAGSHIP PIPELINE
                    </span>
                  )}

                  {project.isCollaborative && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[10px] font-mono font-medium bg-amber-500/10 text-amber-400 border border-amber-500/30">
                      <Users className="w-3 h-3" /> COLLABORATIVE PROJECT
                    </span>
                  )}

                  {!project.isFlagship && !project.isCollaborative && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-secondary text-secondary-foreground border border-border/60">
                      <Layers className="w-3 h-3 text-primary" /> {project.categoryBadge}
                    </span>
                  )}
                </div>

                {/* External Links */}
                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all focus:outline-none focus:ring-2 focus:ring-primary/40"
                      aria-label={`View source code for ${project.title} on GitHub`}
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all focus:outline-none focus:ring-2 focus:ring-primary/40"
                      aria-label={`Open live demonstration for ${project.title}`}
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Title & Subtitle */}
              <h4 className="text-2xl sm:text-3xl font-bold text-foreground group-hover:text-primary transition-colors tracking-tight">
                {project.title}
              </h4>
              <p className="text-primary/90 font-mono text-xs sm:text-sm mt-1 mb-5">
                {project.subtitle}
              </p>

              {/* Problem Statement */}
              <div className="mb-4 bg-background/50 border border-border/50 rounded-md p-3.5">
                <span className="text-[11px] font-mono font-semibold text-muted-foreground uppercase tracking-wider block mb-1">
                  // Problem Statement
                </span>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {project.problemStatement}
                </p>
              </div>

              {/* Contribution */}
              <div className="mb-6 bg-secondary/30 border border-border/50 rounded-md p-3.5">
                <span className="text-[11px] font-mono font-semibold text-primary uppercase tracking-wider flex items-center gap-1.5 mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" /> Key Contribution & Architecture
                </span>
                <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
                  {project.contribution}
                </p>
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="pt-2 border-t border-border/40 flex flex-wrap items-center gap-1.5">
              {project.stack.map(tech => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-xs font-mono bg-secondary text-secondary-foreground border border-border/50 rounded-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </SectionReveal>
  );
}
