'use client'

import { motion } from 'framer-motion'
import { Rocket, Keyboard, Heart, Award } from 'lucide-react'
import GlassCard from '@/components/ui/GlassCard'

export default function About() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden pt-[72px]">
      <div className="relative z-10 container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Notre <span className="text-[#FE277E]">Mission</span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            Révolutionner l'apprentissage de la dactylographie à travers le jeu et la compétition saine.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <GlassCard 
            icon={<Rocket className="text-[#FE277E]" size={32} />}
            title="Innovation"
            description="Une approche moderne de l'apprentissage du clavier"
            delay={0.2}
          />
          <GlassCard 
            icon={<Keyboard className="text-[#3B556D]" size={32} />}
            title="Expertise"
            description="Des méthodes éprouvées pour progresser rapidement"
            delay={0.3}
          />
          <GlassCard 
            icon={<Heart className="text-[#FE277E]" size={32} />}
            title="Passion"
            description="Créé par des passionnés pour des passionnés"
            delay={0.4}
          />
          <GlassCard 
            icon={<Award className="text-[#3B556D]" size={32} />}
            title="Excellence"
            description="Un engagement constant pour la qualité"
            delay={0.5}
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-4">Notre Histoire</h3>
          <p className="mb-4">
            Fondé en 2023, notre projet est né d'un constat simple : apprendre à taper rapidement au clavier devrait être
            amusant et motivant. Nous avons combiné les principes de la gamification avec des techniques d'apprentissage
            efficaces pour créer cette plateforme unique.
          </p>
          <p>
            Aujourd'hui, des milliers d'utilisateurs améliorent quotidiennement leurs compétences grâce à notre
            approche innovante.
          </p>
        </motion.div>
      </div>
    </div>
  )
}