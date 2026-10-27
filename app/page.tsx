'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Play,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Video,
  FileCheck2,
  Smile,
  Smartphone,
  Megaphone,
  Palette,
  Layers,
  CalendarHeart,
  X,
  CheckCircle2,
  Menu,
} from 'lucide-react';

// Brand Social Icons
function YoutubeIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function InstagramIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function BehanceIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-4.996 3-3.328 0-5.73-2.527-5.73-6.024 0-3.376 2.378-6.024 5.727-6.024 3.526 0 5.419 2.593 5.127 6.326h-8.084c.148 1.957 1.487 3.018 3.093 3.018 1.411 0 2.29-.687 2.658-1.574l2.205 1.278zm-7.954-4.524h5.275c-.139-1.574-1.121-2.484-2.585-2.484-1.554 0-2.544.919-2.69 2.484zm-9.772 7.524h-6v-16h6.496c2.474 0 4.148.455 5.097 1.776.621.864.887 1.97.747 3.123-.221 1.83-1.488 2.871-2.457 3.336 1.481.547 2.721 1.884 2.463 4.02-.349 2.898-2.617 3.745-6.346 3.745zm-3.238-9.429h2.891c1.472 0 2.502-.452 2.652-1.704.147-1.222-.72-1.748-2.228-1.748h-3.315v3.452zm0 6.31h3.197c1.723 0 2.887-.492 3.05-1.849.166-1.391-.849-1.996-2.587-1.996h-3.66v3.845z" />
    </svg>
  );
}

// Project Data
interface Project {
  id: string;
  title: string;
  category: 'Commercial' | 'YouTube' | 'Social Media' | 'Events';
  tags: string;
  image: string;
  videoUrl?: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 'travel-iceland',
    title: 'Travel Vlog – Iceland',
    category: 'YouTube',
    tags: 'YouTube • Travel',
    image: '/images/project-iceland.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
    description:
      'A cinematic exploration through the rugged landscapes of Iceland featuring rhythm-driven pacing, custom sound design, and color-graded glaciers.',
  },
  {
    id: 'car-commercial',
    title: 'Car Commercial',
    category: 'Commercial',
    tags: 'Commercial • Brand',
    image: '/images/project-car.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
    description:
      'High-octane commercial edit for an automotive brand with speed ramping, dynamic motion tracking, and punchy engine sound design.',
  },
  {
    id: 'music-video',
    title: 'Music Video',
    category: 'Commercial',
    tags: 'Music • Creative',
    image: '/images/project-music.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
    description:
      'Atmospheric neon-lit music video featuring stylized beat-matched cuts, glitch transitions, and vibrant magenta and cyan color treatments.',
  },
  {
    id: 'wedding-film',
    title: 'Wedding Film',
    category: 'Events',
    tags: 'Events • Cinematic',
    image: '/images/project-wedding.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
    description:
      'An emotionally resonant cinematic wedding teaser balancing intimate vow recordings with warm golden-hour cinematography and gentle orchestral pacing.',
  },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [activeFilter, setActiveFilter] = useState<'All' | 'Commercial' | 'YouTube' | 'Social Media' | 'Events'>('All');
  const [selectedVideo, setSelectedVideo] = useState<Project | null>(null);
  const [showreelModalOpen, setShowreelModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'YouTube Video Editing',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: '',
          email: '',
          subject: 'YouTube Video Editing',
          message: '',
        });
      }, 4000);
    }, 900);
  };

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#0c0e14] text-white selection:bg-[#ff5500] selection:text-white flex flex-col font-sans">
      
      {/* ─────────────────────────────────────────────────────────────
          1. NAVIGATION / HEADER
      ───────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-[#0c0e14]/95 backdrop-blur-md border-b border-white/5 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <button
            onClick={() => scrollTo('home')}
            className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
            aria-label="Edit Visuals Home"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#ff6b2b] to-[#ff5500] flex items-center justify-center shadow-lg shadow-orange-500/25 group-hover:scale-105 transition-transform">
              <Play className="w-5 h-5 text-white fill-white ml-0.5" />
            </div>
            <div>
              <div className="font-extrabold text-base tracking-wider text-white uppercase leading-none group-hover:text-orange-400 transition-colors">
                EDIT VISUALS
              </div>
              <div className="text-[9px] font-semibold text-neutral-400 tracking-[0.2em] uppercase mt-1">
                VIDEO EDITOR PORTFOLIO
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { id: 'home', label: 'Home' },
              { id: 'work', label: 'Work' },
              { id: 'about', label: 'About' },
              { id: 'services', label: 'Services' },
              { id: 'contact', label: 'Contact' },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`text-sm font-medium tracking-wide transition-colors relative py-1 cursor-pointer ${
                  activeSection === link.id
                    ? 'text-[#ff5500]'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ff5500] rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Hire Me Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollTo('contact')}
              className="hidden sm:inline-flex items-center justify-center px-6 py-2 rounded-full text-sm font-semibold bg-[#ff5500] hover:bg-[#ff681a] text-white shadow-lg shadow-orange-500/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              Hire Me
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0c0e14] border-b border-white/10 px-6 py-4 space-y-3">
            {[
              { id: 'home', label: 'Home' },
              { id: 'work', label: 'Work' },
              { id: 'about', label: 'About' },
              { id: 'services', label: 'Services' },
              { id: 'contact', label: 'Contact' },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`block w-full text-left py-2 text-base font-medium ${
                  activeSection === link.id ? 'text-[#ff5500]' : 'text-neutral-300'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contact')}
              className="w-full mt-2 py-2.5 rounded-full text-center text-sm font-semibold bg-[#ff5500] text-white"
            >
              Hire Me
            </button>
          </div>
        )}
      </header>

      {/* ─────────────────────────────────────────────────────────────
          2. HERO SECTION
      ───────────────────────────────────────────────────────────── */}
      <section id="home" className="relative pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="inline-block text-[#ff5500] text-xs sm:text-sm font-bold tracking-[0.25em] uppercase">
                VIDEO EDITOR
              </div>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-white leading-[1.12] tracking-tight">
                I Turn Raw Footage Into{' '}
                <span className="text-[#ff5500] inline-block">Compelling Stories.</span>
              </h1>

              <p className="text-neutral-400 text-base sm:text-lg leading-relaxed max-w-lg">
                Creative video editing, smooth transitions, cinematic visuals and storytelling that makes an impact.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => scrollTo('work')}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#ff5500] hover:bg-[#ff681a] text-white text-sm font-bold shadow-lg shadow-orange-500/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>View My Work</span>
                </button>

                <button
                  onClick={() => setShowreelModalOpen(true)}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#161a23] hover:bg-[#1f2432] text-white border border-white/10 hover:border-white/20 text-sm font-semibold transition-all hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-white text-white" />
                  <span>Watch Showreel</span>
                </button>
              </div>
            </div>

            {/* Right Hero Image (Editor in Studio) */}
            <div className="lg:col-span-7 relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                <div className="relative aspect-[16/10] w-full bg-[#11141c]">
                  <Image
                    src="/images/hero-editor.jpg"
                    alt="Alex Carter Video Editor in workspace suite"
                    fill
                    priority
                    className="object-cover object-center group-hover:scale-102 transition-transform duration-700"
                  />
                  {/* Subtle warm amber/blue studio overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e14] via-transparent to-transparent opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0c0e14]/40 via-transparent to-black/30 pointer-events-none" />
                </div>
              </div>

              {/* Decorative soft glow underneath */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-12 bg-orange-500/15 blur-2xl rounded-full pointer-events-none" />
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. FEATURED PROJECTS SECTION (MY WORK)
      ───────────────────────────────────────────────────────────── */}
      <section id="work" className="py-16 sm:py-20 bg-[#0c0e14] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10">
            <div>
              <div className="text-[#ff5500] text-xs font-bold tracking-[0.25em] uppercase mb-1.5">
                MY WORK
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Featured Projects
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
                A selection of my best video editing work. Click to watch and explore the stories behind each project.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {(['All', 'Commercial', 'YouTube', 'Social Media', 'Events'] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    activeFilter === filter
                      ? 'bg-[#ff5500] text-white shadow-md shadow-orange-500/25'
                      : 'bg-transparent text-neutral-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedVideo(project)}
                className="group cursor-pointer flex flex-col"
              >
                {/* Thumbnail Container */}
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-neutral-900 border border-white/10 shadow-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-colors" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-11 h-11 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:scale-115 group-hover:bg-[#ff5500] group-hover:border-[#ff5500] transition-all shadow-xl">
                      <Play className="w-4 h-4 fill-white ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* Card Info */}
                <div className="mt-3.5 flex items-start justify-between">
                  <div>
                    <h3 className="text-white text-sm font-bold group-hover:text-orange-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-neutral-400 text-xs mt-0.5">{project.tags}</p>
                  </div>

                  <span className="inline-flex items-center gap-1 text-[#ff5500] text-xs font-semibold group-hover:translate-x-0.5 transition-transform">
                    Watch <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. ABOUT ME SECTION (Light Theme Contrast)
      ───────────────────────────────────────────────────────────── */}
      <section id="about" className="py-20 bg-white text-[#0f172a] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            
            {/* Left Column: Portrait with Signature */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-200">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/images/alex-carter.jpg"
                    alt="Alex Carter - Video Editor"
                    fill
                    className="object-cover object-top"
                  />
                  {/* Subtle bottom vignette for signature */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Glowing Orange Signature */}
                  <div className="absolute bottom-4 right-5 text-right">
                    <span className="font-signature text-3xl sm:text-4xl text-[#ff681a] tracking-wider drop-shadow-md select-none transform -rotate-3 block">
                      Alex Carter
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Column: Bio & Key Stat Badges */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="text-[#ff5500] text-xs font-bold tracking-[0.25em] uppercase mb-1.5">
                  ABOUT ME
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                  Hi, I&apos;m Alex Carter
                </h2>
                <div className="text-base sm:text-lg font-bold text-slate-700 mt-1">
                  Video Editor &amp; Storyteller
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                I&apos;m a passionate video editor with 5+ years of experience, turning ideas into engaging visual stories.
                I specialize in cinematic editing, color grading and motion graphics. My goal is to create videos that
                not only look great but also make an emotional impact.
              </p>

              {/* 3 Stat Badges */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-orange-50/60 border border-orange-100/80">
                  <div className="w-9 h-9 rounded-lg bg-orange-100 flex items-center justify-center text-[#ff5500] shrink-0">
                    <Video className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-lg font-black text-slate-900 leading-none">5+</div>
                    <div className="text-[10px] sm:text-[11px] font-medium text-slate-500 mt-1 leading-tight">
                      Years Experience
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-orange-50/60 border border-orange-100/80">
                  <div className="w-9 h-9 rounded-lg bg-orange-100 flex items-center justify-center text-[#ff5500] shrink-0">
                    <FileCheck2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-lg font-black text-slate-900 leading-none">100+</div>
                    <div className="text-[10px] sm:text-[11px] font-medium text-slate-500 mt-1 leading-tight">
                      Projects Completed
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-orange-50/60 border border-orange-100/80">
                  <div className="w-9 h-9 rounded-lg bg-orange-100 flex items-center justify-center text-[#ff5500] shrink-0">
                    <Smile className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-lg font-black text-slate-900 leading-none">50+</div>
                    <div className="text-[10px] sm:text-[11px] font-medium text-slate-500 mt-1 leading-tight">
                      Happy Clients
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Skills Progress Bars */}
            <div className="lg:col-span-3 space-y-4">
              <h3 className="text-lg font-bold text-slate-900 mb-4">My Skills</h3>

              {[
                { name: 'Adobe Premiere Pro', level: 95 },
                { name: 'After Effects', level: 85 },
                { name: 'DaVinci Resolve', level: 80 },
                { name: 'Motion Graphics', level: 75 },
                { name: 'Color Grading', level: 90 },
              ].map((skill) => (
                <div key={skill.name} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold text-slate-800">
                    <span>{skill.name}</span>
                    <span className="text-slate-500">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className="h-full bg-[#ff5500] rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. SERVICES SECTION ("What I Do")
      ───────────────────────────────────────────────────────────── */}
      <section id="services" className="py-20 bg-[#0c0e14] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-left mb-12">
            <div className="text-[#ff5500] text-xs font-bold tracking-[0.25em] uppercase mb-1.5">
              SERVICES
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              What I Do
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
              From ideas to final cut, I offer a full range of video editing services to bring your vision to life.
            </p>
          </div>

          {/* 6 Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            
            {/* 1. YouTube Video Editing */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-orange-500/40 hover:bg-white/[0.04] transition-all group">
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-[#ff5500] mb-4 group-hover:scale-110 transition-transform">
                <YoutubeIcon className="w-5 h-5" />
              </div>
              <h3 className="text-white text-sm font-bold mb-2">YouTube Video Editing</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Engaging edits for YouTube channels and content creators.
              </p>
            </div>

            {/* 2. Short-form Content */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-orange-500/40 hover:bg-white/[0.04] transition-all group">
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-[#ff5500] mb-4 group-hover:scale-110 transition-transform">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="text-white text-sm font-bold mb-2">Short-form Content</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Reels, TikToks, and vertical videos for social media.
              </p>
            </div>

            {/* 3. Commercial & Promo Videos */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-orange-500/40 hover:bg-white/[0.04] transition-all group">
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-[#ff5500] mb-4 group-hover:scale-110 transition-transform">
                <Megaphone className="w-5 h-5" />
              </div>
              <h3 className="text-white text-sm font-bold mb-2">Commercial &amp; Promo Videos</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Powerful videos for brands, businesses and ads.
              </p>
            </div>

            {/* 4. Color Grading */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-orange-500/40 hover:bg-white/[0.04] transition-all group">
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-[#ff5500] mb-4 group-hover:scale-110 transition-transform">
                <Palette className="w-5 h-5" />
              </div>
              <h3 className="text-white text-sm font-bold mb-2">Color Grading</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Cinematic looks and professional color correction.
              </p>
            </div>

            {/* 5. Motion Graphics */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-orange-500/40 hover:bg-white/[0.04] transition-all group">
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-[#ff5500] mb-4 group-hover:scale-110 transition-transform">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-white text-sm font-bold mb-2">Motion Graphics</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Animated text, titles, and visual effects.
              </p>
            </div>

            {/* 6. Event & Wedding Videos */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-orange-500/40 hover:bg-white/[0.04] transition-all group">
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-[#ff5500] mb-4 group-hover:scale-110 transition-transform">
                <CalendarHeart className="w-5 h-5" />
              </div>
              <h3 className="text-white text-sm font-bold mb-2">Event &amp; Wedding Videos</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Memories that last a lifetime.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. GET IN TOUCH / CONTACT SECTION (Light Theme Contrast)
      ───────────────────────────────────────────────────────────── */}
      <section id="contact" className="py-20 bg-white text-[#0f172a] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Info Column */}
            <div className="lg:col-span-4 space-y-6">
              <div>
                <div className="text-[#ff5500] text-xs font-bold tracking-[0.25em] uppercase mb-1.5">
                  GET IN TOUCH
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                  Let&apos;s Work Together
                </h2>
                <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                  Have a project in mind? I&apos;d love to hear about it. Send me a message and let&apos;s create something amazing together.
                </p>
              </div>

              {/* Direct Info List */}
              <div className="space-y-4 pt-1">
                <a
                  href="mailto:alex@editvisuals.com"
                  className="flex items-center gap-3 text-slate-700 hover:text-[#ff5500] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-orange-50 group-hover:text-[#ff5500] transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium">alex@editvisuals.com</span>
                </a>

                <a
                  href="tel:+251912345678"
                  className="flex items-center gap-3 text-slate-700 hover:text-[#ff5500] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-orange-50 group-hover:text-[#ff5500] transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium">+251 912 345 678</span>
                </a>

                <div className="flex items-center gap-3 text-slate-700">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium">Addis Ababa, Ethiopia</span>
                </div>
              </div>

              {/* Social Icons */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-[#ff5500] transition-colors"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-[#ff5500] transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-[#ff5500] transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://behance.net"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Behance"
                  className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-[#ff5500] transition-colors"
                >
                  <BehanceIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Middle Form Column */}
            <div className="lg:col-span-5">
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-slate-800 text-xs sm:text-sm focus:outline-none focus:border-[#ff5500] focus:ring-1 focus:ring-[#ff5500] transition-all bg-slate-50/50"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Your Email *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-slate-800 text-xs sm:text-sm focus:outline-none focus:border-[#ff5500] focus:ring-1 focus:ring-[#ff5500] transition-all bg-slate-50/50"
                    />
                  </div>
                </div>

                <div>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-slate-700 text-xs sm:text-sm focus:outline-none focus:border-[#ff5500] focus:ring-1 focus:ring-[#ff5500] transition-all bg-slate-50/50 cursor-pointer"
                  >
                    <option value="YouTube Video Editing">YouTube Video Editing</option>
                    <option value="Commercial & Promo">Commercial &amp; Promo Videos</option>
                    <option value="Short-form Content">Short-form Content (Reels / TikToks)</option>
                    <option value="Color Grading & Motion">Color Grading &amp; Motion Graphics</option>
                    <option value="Event & Wedding">Event &amp; Wedding Videos</option>
                    <option value="Other Project">Other Collaboration</option>
                  </select>
                </div>

                <div>
                  <textarea
                    required
                    rows={4}
                    placeholder="Your Message *"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-slate-800 text-xs sm:text-sm focus:outline-none focus:border-[#ff5500] focus:ring-1 focus:ring-[#ff5500] transition-all bg-slate-50/50 resize-none"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#ff5500] hover:bg-[#ff681a] text-white text-xs sm:text-sm font-bold shadow-md shadow-orange-500/25 transition-all hover:scale-105 active:scale-95 cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <span>Send Message</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                {/* Success Banner */}
                {isSuccess && (
                  <div className="flex items-center gap-2 p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg text-xs font-semibold animate-fadeIn">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Thank you! Your message has been sent successfully. I will get back to you soon.</span>
                  </div>
                )}
              </form>
            </div>

            {/* Right Photo Card: Camera Bokeh + Script Quote */}
            <div className="lg:col-span-3">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] w-full shadow-2xl bg-slate-900 border border-slate-200">
                <Image
                  src="/images/camera-bokeh.jpg"
                  alt="Cinema Camera with warm bokeh background"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
                
                {/* Script Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <p className="font-script text-2xl sm:text-3xl text-white leading-snug drop-shadow-lg">
                    Great Stories Start with a Conversation
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. FOOTER
      ───────────────────────────────────────────────────────────── */}
      <footer className="py-8 bg-[#090b10] border-t border-white/5 text-neutral-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Left: Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded bg-[#ff5500] flex items-center justify-center text-white">
              <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
            </div>
            <span className="font-bold tracking-wider text-white uppercase text-xs">
              EDIT VISUALS
            </span>
            <span className="text-[10px] text-neutral-500 hidden md:inline-block">
              VIDEO EDITOR PORTFOLIO
            </span>
          </div>

          {/* Center: Copyright */}
          <div className="text-center text-neutral-500">
            © 2025 Edit Visuals. All rights reserved.
          </div>

          {/* Right: Social Media */}
          <div className="flex items-center gap-4">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <YoutubeIcon className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="https://behance.net"
              target="_blank"
              rel="noreferrer"
              aria-label="Behance"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <BehanceIcon className="w-4 h-4" />
            </a>
          </div>

        </div>
      </footer>

      {/* ─────────────────────────────────────────────────────────────
          8. VIDEO PREVIEW MODAL
      ───────────────────────────────────────────────────────────── */}
      {(selectedVideo || showreelModalOpen) && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fadeIn"
          onClick={() => {
            setSelectedVideo(null);
            setShowreelModalOpen(false);
          }}
        >
          <div
            className="relative w-full max-w-4xl bg-[#11141c] border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#0c0e14]">
              <div>
                <h3 className="text-base font-bold text-white">
                  {showreelModalOpen ? 'Alex Carter — 2025 Video Editing Showreel' : selectedVideo?.title}
                </h3>
                <p className="text-xs text-neutral-400">
                  {showreelModalOpen ? 'Cinematic Highlights & Transitions' : selectedVideo?.tags}
                </p>
              </div>
              <button
                onClick={() => {
                  setSelectedVideo(null);
                  setShowreelModalOpen(false);
                }}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-neutral-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Box */}
            <div className="relative aspect-video w-full bg-black flex items-center justify-center">
              <iframe
                className="w-full h-full"
                src={
                  showreelModalOpen
                    ? 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
                    : selectedVideo?.videoUrl || 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
                }
                title="Video preview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Modal Footer Description */}
            <div className="p-4 bg-[#0e1118] flex items-center justify-between gap-4">
              <p className="text-xs text-neutral-300">
                {showreelModalOpen
                  ? 'Showcasing 5+ years of commercial, narrative, and social media edits using Premiere Pro, After Effects, and DaVinci Resolve.'
                  : selectedVideo?.description}
              </p>
              <button
                onClick={() => {
                  setSelectedVideo(null);
                  setShowreelModalOpen(false);
                  scrollTo('contact');
                }}
                className="shrink-0 px-4 py-2 rounded-full text-xs font-bold bg-[#ff5500] hover:bg-[#ff681a] text-white transition-all cursor-pointer"
              >
                Inquire About Similar Project
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
