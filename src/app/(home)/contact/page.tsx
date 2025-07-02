'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import GlassCard from '@/components/ui/GlassCard'
import AnimatedButton from '@/components/ui/AnimatedButton'

export default function Contact() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden pt-[72px]">
      <div className="relative z-10 container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Contactez-<span className="text-[#FE277E]">nous</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Une question, une suggestion ? Notre équipe est là pour vous répondre.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <form className="space-y-5 bg-white/10 backdrop-blur-md p-6 rounded-xl">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm">Votre nom</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FE277E]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">Votre email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FE277E]"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm">Votre message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FE277E]"
                ></textarea>
              </div>
              <AnimatedButton className="w-full flex items-center justify-center gap-2">
                <Send size={18} /> Envoyer
              </AnimatedButton>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-5"
          >
            <GlassCard 
              icon={<Mail className="text-[#FE277E]" size={24} />}
              title="Email"
              description="tech00.02in@gmail.com"
              delay={0.4}
              clickable
              compact
            />
            <GlassCard 
              icon={<Phone className="text-[#3B556D]" size={24} />}
              title="Téléphone"
              description="+226 61 78 03 91"
              delay={0.5}
              clickable
              compact
            />
            <GlassCard 
              icon={<MapPin className="text-[#FE277E]" size={24} />}
              title="Adresse"
              description="Ouagadougou, Burkina Faso"
              delay={0.6}
              compact
            />
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 h-full flex items-center">
              <div>
                <h3 className="font-medium mb-3">Heures d'ouverture</h3>
                <p className="text-sm opacity-80">Lundi - Vendredi: 8h - 18h</p>
                <p className="text-sm opacity-80">Samedi: 9h - 13h</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}