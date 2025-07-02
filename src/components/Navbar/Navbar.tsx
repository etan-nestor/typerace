'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import AnimatedButton from '@/components/ui/AnimatedButton'
import { Menu, X, Home, Info, Mail, Keyboard } from 'lucide-react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 border-white/5 bg-white/5 backdrop-blur-lg shadow-sm"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto px-4 w-full max-w-7xl">
        <div className="flex justify-between items-center h-18">

          {/* Logo */}
          <Link href="/" className="shrink-0 flex items-center h-full">
            <div className="relative w-32 h-10">
              <Image 
                src="/images/tr01.png" 
                alt="TypeRace Logo" 
                width={60}
                height={60}
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="flex items-center text-sm font-medium hover:text-[#FE277E] transition-colors">
              Accueil
            </Link>
            <Link href="/revision" className="flex items-center text-sm font-medium hover:text-[#FE277E] transition-colors">
               Révision
            </Link>
            <Link href="/about" className="flex items-center text-sm font-medium hover:text-[#FE277E] transition-colors">
              À propos
            </Link>
            <Link href="/contact" className="flex items-center text-sm font-medium hover:text-[#FE277E] transition-colors">
               Contact
            </Link>
          </nav>

          {/* Bouton connexion */}
          <div className="flex items-center space-x-3">
            <Link href="/login" passHref>
              <AnimatedButton variant="outline" size="default" className="text-sm sm:text-base">
                Connexion
              </AnimatedButton>
            </Link>
            
            {/* Menu mobile */}
            <button 
              className="md:hidden p-2 text-gray-400 hover:text-white focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden py-4 space-y-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link 
              href="/" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-[#FE277E] hover:bg-white/10 flex items-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Home className="mr-2" size={18} /> Accueil
            </Link>
            <Link 
              href="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-[#FE277E] hover:bg-white/10 flex items-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Info className="mr-2" size={18} /> À propos
            </Link>
            <Link 
              href="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-[#FE277E] hover:bg-white/10 flex items-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Mail className="mr-2" size={18} /> Contact
            </Link>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}