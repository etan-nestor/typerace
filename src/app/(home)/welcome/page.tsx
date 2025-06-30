'use client'

import AnimatedButton from '@/components/ui/AnimatedButton'
import GlassCard from '@/components/ui/GlassCard'
import { motion } from 'framer-motion'
import { ArrowRight, Trophy, Clock, Users, Book } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden pt-[72px]"> {/* Ajout de pt pour compenser le navbar fixe */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col">
        <main className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 pb-12">
          <motion.div 
            className="flex-1 w-full max-w-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Améliorez votre <span className="text-[#FE277E]">vitesse</span> de frappe
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-lg">
              Compétitionnez avec d'autres joueurs en temps réel et devenez le meilleur dactylographe.
            </p>
            
            <div className="flex flex-wrap gap-3 md:gap-4">
              <Link href="/login" passHref>
                <AnimatedButton size="lg" className="flex items-center gap-2">
                  Commencer <ArrowRight size={20} />
                </AnimatedButton>
              </Link>
              <Link href="/login" passHref>
                <AnimatedButton variant="outline" size="lg">
                  Voir le classement
                </AnimatedButton>
              </Link>
            </div>
          </motion.div>
          
          <div className="flex-1 w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <GlassCard 
              icon={<Trophy className="text-[#FE277E]" size={32} />}
              title="Compétition"
              description="Affrontez d'autres joueurs en temps réel"
              delay={0.3} 
            />
            <GlassCard 
              icon={<Clock className="text-[#3B556D]" size={32} />}
              title="Minuterie"
              description="Plusieurs modes de jeu disponibles"
              delay={0.4} 
            />
            <GlassCard 
              icon={<Users className="text-[#FE277E]" size={32} />}
              title="Communauté"
              description="Rejoignez une communauté active"
              delay={0.5} 
            />
            <GlassCard 
              icon={<Book className="text-[#3B556D]" size={32} />}
              title="Apprentissage"
              description="Apprenez en tapant du contenu varié"
              delay={0.6} 
            />
          </div>
        </main>
      </div>
    </div>
  )
}