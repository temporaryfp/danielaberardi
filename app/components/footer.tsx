'use client';

import Link from 'next/link';
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="w-full bg-[#f5e6d3] text-neutral-950 py-4 sm:pt-12">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-light text-neutral-950">Get in touch</h3>
              <a
                href="mailto:daniela.berardi@icloud.com"
                className="inline-flex items-center space-x-2 text-lg text-neutral-950 hover:text-neutral-600 transition-colors"
              >
                <Mail size={16} />
                <span>daniela.berardi@icloud.com</span>
              </a>
            </motion.div>
          </div>
          
          <div className="col-span-12">
            <div className="pt-8 border-t border-neutral-200">
              <p className="text-sm text-neutral-500 font-light">
                © {new Date().getFullYear()} Daniela Berardi. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 