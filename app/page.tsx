'use client';

import { Mail, Phone, Compass, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { DM_Sans, Playfair_Display, Montserrat } from 'next/font/google';
import { projects } from './projects/data';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500']
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600'],
  variable: '--font-montserrat',
});

export default function Home() {
  const targetRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mobileActiveProjects, setMobileActiveProjects] = useState<Record<number, boolean>>({});

  const updateActiveProject = (index: number, inView: boolean) => {
    if (inView) {
      setActiveIndex(index);
    } else if (activeIndex === index) {
      setActiveIndex(null);
    }
  };

  const updateMobileActiveProject = (index: number, inView: boolean) => {
    setMobileActiveProjects(prev => ({
      ...prev,
      [index]: inView
    }));
  };

  function helloWorld() {
    alert("Hello World");
  }

  return (
    <main className={`relative w-full bg-gradient-to-b from-[#f5e6d3] via-[#e6d5c3] to-[#d4c4b3] text-neutral-950 ${dmSans.className} ${playfair.variable} ${montserrat.variable}`} ref={targetRef}>
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center max-w-[1400px] mx-auto px-4 sm:px-8 md:px-16 architectural-bg backdrop-blur-sm">
        {/* Architectural Grid Background */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="h-full w-full grid grid-cols-6 md:grid-cols-12">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-r border-neutral-950/20 h-full"></div>
            ))}
          </div>
          <div className="absolute inset-0 grid grid-rows-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="border-b border-neutral-950/20 w-full"></div>
            ))}
          </div>
        </div>
        
        {/* Architectural Accent Elements */}
        <div className="absolute top-[15%] right-[10%] w-24 h-24 border border-neutral-400/30 rounded-full"></div>
        <div className="absolute bottom-[15%] left-[10%] w-40 h-40 border border-neutral-400/30 rounded-full"></div>
        <div className="absolute top-[30%] left-[5%] w-16 h-16 bg-neutral-950/5 rounded-full"></div>
        
        <div className="relative w-full md:grid md:grid-cols-2 md:gap-12 lg:gap-16 z-10">
          {/* Mobile Title - Positioned at the top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="absolute top-0 left-0 right-0 z-20 pt-12 px-6 sm:px-8 md:hidden"
          >
            <h1 className="font-playfair text-4xl sm:text-5xl font-medium leading-[1.1] tracking-tight text-neutral-950">
              <span className="inline-block">
                Daniela Berardi
              </span>
            </h1>
          </motion.div>

          {/* Image Container - Positioned in background on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 flex justify-center items-center pt-24 md:pt-0 md:relative md:justify-end md:order-2"
          >
            <div className="relative w-full max-w-[98%] h-[80vh] md:w-[400px] md:h-[600px] lg:w-[500px] lg:h-[700px] mx-auto">
              {/* Architectural Frame */}
              <div className="absolute -inset-4 md:-inset-8 border border-neutral-950/10 rounded-[2rem] md:rounded-[3rem]"></div>
              <div className="absolute -inset-8 md:-inset-16 border border-neutral-950/5 rounded-[3rem] md:rounded-[4rem]"></div>
              
              {/* Background Blur Effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-neutral-50/40 via-white/30 to-neutral-100/40 rounded-[1.5rem] md:rounded-[2.5rem] blur-2xl" />
    
              {/* Image Container with Architectural Effect */}
              <div className="relative h-full rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden
                shadow-[10px_10px_30px_rgba(0,0,0,0.1),-10px_-10px_30px_rgba(255,255,255,0.05)] md:shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#f5e6d3]
                border border-white/30 md:border-white/20 backdrop-blur-sm">
                <Image
                  src="/daniela.jpeg"
                  alt="Daniela Berardi"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 98vw, (max-width: 1024px) 400px, 500px"
                  priority
                />
                {/* Darker overlay for mobile to improve text readability - stronger at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/50 to-neutral-900/10 md:from-neutral-900/40 md:via-neutral-900/20 md:to-neutral-900/5" />

                {/* Subtle Overlay for Depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10" />
                
                {/* Architectural Corner Accents */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-white/30 rounded-tl-lg"></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-white/30 rounded-tr-lg"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-white/30 rounded-bl-lg"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-white/30 rounded-br-lg"></div>
              </div>
            </div>
          </motion.div>

          {/* Text Content - Overlays image on mobile at the bottom */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 flex flex-col justify-end md:justify-center gap-6 md:gap-10 md:order-1 pt-0 pb-16 md:py-0 h-screen md:h-auto px-6 sm:px-8 md:px-0"
          >
            {/* Title Section - Hidden on mobile, visible on desktop */}
            <div className="space-y-3 md:space-y-6">
              <div className="space-y-3 md:space-y-8">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="hidden md:block font-playfair text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight text-neutral-950"
                >
                  <span className="inline-block">
                    Daniela Berardi
                  </span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="flex items-center gap-3"
                >
                  <p className="font-montserrat text-lg sm:text-xl md:text-2xl font-light text-white/90 md:text-neutral-600">
                    Unisco la passione per il real-estate con l'interior e garden design.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="flex items-center gap-3"
                >
                  <div className="relative pl-6">
                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/50 md:bg-neutral-300"></div>
                    <p className="font-playfair text-base sm:text-lg md:text-xl italic font-light text-white/80 md:text-neutral-500">
                      "Every home has its own soul"
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Location & Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="space-y-8 md:space-y-8"
            >
              {/* Location Tag */}
              <div className="inline-flex items-center gap-2 px-4 py-3 sm:px-4 sm:py-2 rounded-full bg-white/20 backdrop-blur-sm md:bg-neutral-950/5 border border-white/30 md:border-neutral-200/50 shadow-sm">
                <Compass className="w-3 h-3 sm:w-4 sm:h-4 text-white md:text-neutral-700" />
                <p className="font-montserrat text-xs sm:text-sm text-white md:text-neutral-600"> 
                  Attualmente tra <span className="font-medium text-white md:text-neutral-950">Bologna</span>, <span className="font-medium text-white md:text-neutral-950">Milano</span> e <span className="font-medium text-white md:text-neutral-950">Formentera</span>
                </p>
              </div>

              {/* Contact Links */}
              <div className="flex flex-col gap-3 md:gap-3">
                <Link
                  href="mailto:daniela.berardi@icloud.com"
                  className="group flex items-center gap-4 sm:gap-4 w-fit"
                >
                  <span className="p-3 sm:p-2.5 rounded-xl bg-white/20 backdrop-blur-sm md:bg-neutral-950/5 group-hover:bg-white/30 md:group-hover:bg-neutral-950/10 transition-colors">
                    <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-white md:text-neutral-700" />
                  </span>
                  <span className="font-montserrat text-sm sm:text-base text-white group-hover:text-white/80 md:text-neutral-600 md:group-hover:text-neutral-950 transition-colors truncate">
                    daniela.berardi@icloud.com
                  </span>
                </Link>
                <Link
                  href="tel:+393351596643"
                  className="group flex items-center gap-4 sm:gap-4 w-fit"
                >
                  <span className="p-3 sm:p-2.5 rounded-xl bg-white/20 backdrop-blur-sm md:bg-neutral-950/5 group-hover:bg-white/30 md:group-hover:bg-neutral-950/10 transition-colors">
                    <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-white md:text-neutral-700" />
                  </span>
                  <div className="flex flex-col sm:flex-row sm:items-center">
                    <span className="font-montserrat text-sm sm:text-base text-white group-hover:text-white/80 md:text-neutral-600 md:group-hover:text-neutral-950 transition-colors">
                      +39 335 1596643
                    </span>
                    <span className="hidden sm:block sm:mx-2 text-white/60 md:text-neutral-400">·</span>
                    <span className="font-montserrat text-sm sm:text-base text-white group-hover:text-white/80 md:text-neutral-600 md:group-hover:text-neutral-950 transition-colors">
                      +34 643 056391
                    </span>
                  </div>
                </Link>
              </div>
              
              {/* Portfolio CTA - Desktop Only */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="hidden md:block pt-4"
              >
                <Link href="#projects" className="group inline-flex items-center gap-2 font-montserrat text-sm text-neutral-600 hover:text-neutral-950 transition-colors">
                  <span>Scopri i miei progetti</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Projects Section */}
      <section id="projects" className="py-12 pb-0 sm:py-24 bg-[#f5e6d3]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-light tracking-tight text-neutral-950">Alcuni progetti di interior restyling a cui ho lavorato.</h2>
          </motion.div>

          {/* Mobile Projects View - One at a time */}
          <div className="md:hidden">
            {Object.values(projects).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0.4 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
                transition={{ duration: 0.8 }}
                onViewportEnter={() => updateMobileActiveProject(index, true)}
                onViewportLeave={() => updateMobileActiveProject(index, false)}
                className="mb-16 relative"
              >
                {/* Project Title Overlay */}
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ 
                    opacity: mobileActiveProjects[index] ? 1 : 0, 
                    y: mobileActiveProjects[index] ? 0 : -20 
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute top-0 left-0 right-0 z-10 p-4 bg-gradient-to-b from-black/50 to-transparent rounded-t-lg"
                >
                  <h3 className="text-2xl font-light text-white">{project.title}</h3>
                  <div className="text-sm text-white/80 font-light">
                    {project.location} · {project.year}
                  </div>
                </motion.div>

                <Link href={`/projects/${project.id}`} className="block">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src={project.images[0].src}
                      alt={project.images[0].alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Desktop Projects View - Grid Layout */}
          <div className="hidden md:grid grid-cols-12 gap-8">
            <div className="col-span-8">
              <div className="space-y-12">
                {Object.values(projects).map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0.4 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false, margin: "-45% 0px -45% 0px" }}
                    transition={{ duration: 0.8 }}
                    onViewportEnter={() => updateActiveProject(index, true)}
                    onViewportLeave={() => updateActiveProject(index, false)}
                  >
                    <Link href={`/projects/${project.id}`} className="group block">
                      <div className="grid grid-cols-12 gap-4 aspect-[16/9]">
                        <div className="col-span-8 relative overflow-hidden shadow-lg rounded-lg">
                          <Image
                            src={project.images[0].src}
                            alt={project.images[0].alt}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 rounded-lg" />
                        </div>
                        <div className="col-span-4 grid grid-rows-2 gap-4">
                          <div className="relative overflow-hidden shadow-lg rounded-lg">
                            <Image
                              src={project.images.length > 1 ? project.images[1].src : project.images[0].src}
                              alt={project.images.length > 1 ? project.images[1].alt : project.images[0].alt}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 rounded-lg" />
                          </div>
                          <div className="relative overflow-hidden shadow-lg rounded-lg">
                            <Image
                              src={project.images.length > 2 ? project.images[2].src : project.images[0].src}
                              alt={project.images.length > 2 ? project.images[2].alt : project.images[0].alt}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 rounded-lg" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="col-span-4">
              <div className="space-y-8 sticky top-48">
                {Object.values(projects).map((project, index) => (
                  <div
                    key={project.id}
                    className={`transition-opacity duration-500 ${activeIndex === index ? 'opacity-100' : 'opacity-30'
                      }`}
                  >
                    <Link href={`/projects/${project.id}`} className="block">
                      <h3 className="text-2xl font-light mb-1 text-neutral-950">{project.title}</h3>
                      <div className="text-sm text-neutral-600 font-light">
                        {project.location} · {project.year}
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 