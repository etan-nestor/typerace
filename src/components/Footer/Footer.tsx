'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <motion.footer
      className="bg-white/5 backdrop-blur-lg border-t border-white/10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="mx-auto px-4 py-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email */}
          <motion.div 
            className="flex items-center justify-center md:justify-start"
            whileHover={{ scale: 1.05 }}
          >
            <Mail className="text-[#FE277E] mr-3" size={20} />
            <a href="mailto:tech00.02in@gmail.com" className="text-sm hover:text-[#FE277E] transition-colors">
              tech00.02in@gmail.com
            </a>
          </motion.div>

          {/* Téléphone */}
          <motion.div 
            className="flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
          >
            <Phone className="text-[#FE277E] mr-3" size={20} />
            <a href="tel:+22661780391" className="text-sm hover:text-[#FE277E] transition-colors">
              +226 61 78 03 91
            </a>
          </motion.div>

          {/* Adresse */}
          <motion.div 
            className="flex items-center justify-center md:justify-end"
            whileHover={{ scale: 1.05 }}
          >
            <MapPin className="text-[#FE277E] mr-3" size={20} />
            <span className="text-sm">Ouagadougou, Burkina Faso</span>
          </motion.div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-xs text-white/50">
          © {new Date().getFullYear()} FriendsTyping. Tous droits réservés.
        </div>
      </div>
    </motion.footer>
  )
}