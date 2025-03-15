'use client';

import Image from "next/image";
import Link from "next/link";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from '../data';
import { useState, useEffect, useCallback } from "react";

export default function ProjectContent({ project }: { project: Project }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
    // Re-enable scrolling
    document.body.style.overflow = 'auto';
  };

  const navigateImage = useCallback((direction: 'next' | 'prev') => {
    if (selectedImageIndex === null) return;
    
    const totalImages = project.images.length;
    if (direction === 'next') {
      setSelectedImageIndex((selectedImageIndex + 1) % totalImages);
    } else {
      setSelectedImageIndex((selectedImageIndex - 1 + totalImages) % totalImages);
    }
  }, [selectedImageIndex, project.images.length]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      
      if (e.key === 'ArrowRight') {
        navigateImage('next');
      } else if (e.key === 'ArrowLeft') {
        navigateImage('prev');
      } else if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, navigateImage]);

  // Handle touch events for swiping
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      navigateImage('next');
    } else if (isRightSwipe) {
      navigateImage('prev');
    }
  };

  return (
    <main className="min-h-screen w-full bg-[#f5e6d3] text-neutral-950 mb-12">
      {/* Back Button with Centered Title - Fixed position with responsive spacing */}
      <div className="fixed top-4 sm:top-8 left-0 right-0 px-4 sm:px-8 flex items-center z-50">
        <Link href="/" className="flex items-center">
          <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border-[#c6b5a3] hover:bg-[#e6d5c3] transition-colors">
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              className="sm:w-5 sm:h-5"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </div>
        </Link>
        
        {/* Mobile Title - Centered */}
        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-xl font-normal md:hidden truncate max-w-[70%] text-center">
          {project.title}
        </h1>
      </div>

      <div className="pt-20 sm:pt-32 px-4 sm:px-8">
        <div className="max-w-[1400px] mx-auto">
          {/* Project Title and Description - Hidden on mobile, visible on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 md:mb-12 hidden md:block"
          >
            <div className="flex flex-col md:block">
              <h1 className="text-xl sm:text-2xl md:text-4xl font-light tracking-tight text-neutral-950 mb-2 md:mb-4">{project.title}</h1>
              <p className="text-sm sm:text-base md:text-lg font-light leading-tight md:leading-relaxed text-neutral-600 max-w-3xl">
                {project.description}
              </p>
            </div>
          </motion.div>
          
          {/* Project Description - Mobile only */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 md:hidden"
          >
            <p className="text-sm font-light leading-tight text-neutral-600">
              {project.description}
            </p>
          </motion.div>
          
          {/* Responsive grid layout - stacked on mobile, side-by-side on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
            {/* Project Images - Full width on mobile, 8 columns on desktop */}
            <div className="md:col-span-8 order-2 md:order-2">
              <div className="space-y-3 md:space-y-4">
                {project.images.map((image, index) => (
                  <motion.div
                    key={index}
                    className="relative aspect-[4/3] sm:aspect-[16/11] w-full rounded-lg overflow-hidden shadow-md cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * Math.min(index, 5), duration: 0.8 }}
                    onClick={() => openModal(index)}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
                    />
                    <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300"></div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Project Details - Full width on mobile, 4 columns on desktop */}
            <div className="md:col-span-4 order-1 md:order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-4 md:space-y-8 mb-6 md:mb-0"
              >
                <div className="space-y-2 md:space-y-4 text-sm sm:text-md">
                  <div className="grid grid-cols-[80px,1fr] sm:grid-cols-[100px,1fr] md:grid-cols-[120px,1fr] gap-1 sm:gap-2 md:gap-4">
                    <span className="font-light text-neutral-500">Location :</span>
                    <span className="text-neutral-500">{project.location}</span>
                  </div>
                  <div className="grid grid-cols-[80px,1fr] sm:grid-cols-[100px,1fr] md:grid-cols-[120px,1fr] gap-1 sm:gap-2 md:gap-4">
                    <span className="font-light text-neutral-500">Year :</span>
                    <span className="text-neutral-500">{project.year}</span>
                  </div>
                  
                  {/* Modern Materials & Colors Section */}
                  <div className="pt-1">
                    <h3 className="text-sm sm:text-base font-light text-neutral-500 mb-3">Materials & Colors</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.materials.map((material, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.05 * index, duration: 0.5 }}
                          className="px-3 py-1.5 rounded-full bg-white/30 backdrop-blur-sm border border-white/20 
                                    shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white/40
                                    text-xs sm:text-sm text-neutral-700"
                        >
                          {material}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Screen Image Modal with Navigation */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Backdrop with blur effect */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-md"></div>
            
            {/* Close button */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 sm:top-8 sm:right-8 z-[110] w-10 h-10 sm:w-12 sm:h-12 
                        flex items-center justify-center rounded-full bg-black/30 backdrop-blur-sm 
                        border border-white/10 text-white hover:bg-black/50 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            
            {/* Left navigation button */}
            <button 
              onClick={() => navigateImage('prev')}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-[110] w-10 h-10 sm:w-12 sm:h-12 
                        flex items-center justify-center rounded-full bg-black/30 backdrop-blur-sm 
                        border border-white/10 text-white hover:bg-black/50 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            
            {/* Right navigation button */}
            <button 
              onClick={() => navigateImage('next')}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-[110] w-10 h-10 sm:w-12 sm:h-12 
                        flex items-center justify-center rounded-full bg-black/30 backdrop-blur-sm 
                        border border-white/10 text-white hover:bg-black/50 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            
            {/* Image container */}
            <div className="relative w-[90vw] h-[85vh] z-[105]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedImageIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full relative"
                >
                  <Image
                    src={project.images[selectedImageIndex].src}
                    alt={project.images[selectedImageIndex].alt}
                    fill
                    className="object-contain"
                    sizes="90vw"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Image counter */}
            <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-[110] px-4 py-2 
                          bg-black/30 backdrop-blur-sm rounded-full border border-white/10 text-white text-sm">
              {selectedImageIndex + 1} / {project.images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
} 