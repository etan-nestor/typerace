'use client'

import { motion } from 'framer-motion'
import { Keyboard, Type, Clock, BookOpen, BarChart2, Target } from 'lucide-react'
import GlassCard from '@/components/ui/GlassCard'
import AnimatedButton from '@/components/ui/AnimatedButton'
import Image from 'next/image'

const keyboardLayouts = [
  {
    name: "AZERTY",
    origin: "France",
    description: "Standard français, utilisé aussi en Belgique et dans certains pays africains",
    image: "/images/cl001.png",
    specialKeys: [
      { key: "A", position: "Ligne de base, gauche" },
      { key: "Z", position: "Ligne de base, à gauche de S" },
      { key: "M", position: "Ligne du bas, à droite de L" }
    ]
  },
  {
    name: "QWERTY",
    origin: "États-Unis",
    description: "Standard international, utilisé dans les pays anglophones et beaucoup d'autres",
    image: "/images/cl002.png",
    specialKeys: [
      { key: "Q", position: "Coin supérieur gauche" },
      { key: "W", position: "À droite de Q" },
      { key: ";", position: "À droite de L" }
    ]
  },
  {
    name: "QWERTZ",
    origin: "Allemagne",
    description: "Variante centrale-européenne, utilisé en Allemagne, Autriche et Suisse",
    image: "/qwertz-layout.png",
    specialKeys: [
      { key: "Z", position: "Où se trouve Y sur QWERTY" },
      { key: "Y", position: "Où se trouve Z sur QWERTY" }
    ]
  },
  {
    name: "DVORAK",
    origin: "États-Unis",
    description: "Conçu pour l'efficacité, place les lettres les plus utilisées sur la ligne de base",
    image: "/dvorak-layout.png",
    specialKeys: [
      { key: "A", position: "Ligne de base, gauche" },
      { key: "O", position: "Ligne de base, droite" },
      { key: "E", position: "Ligne du haut, à gauche" }
    ]
  }
]

const fingerPositions = [
  {
    finger: "Index gauche",
    keys: ["1", "2", "Q", "A", "Z", "F", "G"],
    color: "bg-red-400"
  },
  {
    finger: "Majeur gauche",
    keys: ["3", "W", "S", "X", "D"],
    color: "bg-blue-400"
  },
  {
    finger: "Annulaire gauche",
    keys: ["4", "E", "D", "C"],
    color: "bg-green-400"
  },
  {
    finger: "Auriculaire gauche",
    keys: ["5", "6", "R", "T", "F", "G", "V", "B", "Tab", "Caps"],
    color: "bg-yellow-400"
  },
  {
    finger: "Index droit",
    keys: ["7", "8", "U", "J", "M", "H", "N"],
    color: "bg-purple-400"
  },
  {
    finger: "Majeur droit",
    keys: ["9", "I", "K", ","],
    color: "bg-pink-400"
  },
  {
    finger: "Annulaire droit",
    keys: ["0", "O", "L", "."],
    color: "bg-indigo-400"
  },
  {
    finger: "Auriculaire droit",
    keys: ["-", "=", "P", "[", "]", ";", "'", "Enter", "Backspace"],
    color: "bg-orange-400"
  },
  {
    finger: "Pouces",
    keys: ["Espace"],
    color: "bg-teal-400"
  }
]

export default function KeyboardGuide() {
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
            Guide des <span className="text-[#FE277E]">Claviers</span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            Apprenez les différents types de claviers, la position des touches et les techniques de dactylographie.
          </p>
        </motion.div>

        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">Types de Claviers</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyboardLayouts.map((layout, index) => (
              <motion.div
                key={layout.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <GlassCard>
                  <div className="p-4">
                    <div className="text-xl font-bold mb-2">{layout.name}</div>
                    <div className="h-40 relative mb-4">
                      <Image 
                        src={layout.image} 
                        alt={`Disposition ${layout.name}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-sm mb-2"><strong>Origine:</strong> {layout.origin}</p>
                    <p className="text-sm mb-3">{layout.description}</p>
                    <div className="text-xs">
                      <p className="font-semibold mb-1">Touches caractéristiques:</p>
                      <ul className="space-y-1">
                        {layout.specialKeys.map((keyInfo, i) => (
                          <li key={i}>{keyInfo.key}: {keyInfo.position}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">Position des Doigts</h3>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4">Disposition standard</h4>
                <div className="relative h-64 w-full">
                  <Image 
                    src="/images/cl01.png" 
                    alt="Position des doigts sur un clavier"
                    width={500}
                    height={200}
                    className="object-contain"
                  />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4">Touches par doigt</h4>
                <div className="grid grid-cols-2 gap-4">
                  {fingerPositions.map((finger, index) => (
                    <motion.div
                      key={finger.finger}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className={`p-3 rounded-lg ${finger.color} bg-opacity-80`}
                    >
                      <div className="font-medium">{finger.finger}</div>
                      <div className="text-sm mt-1">{finger.keys.join(", ")}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">Techniques de Dactylographie</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <GlassCard 
              icon={<Type className="text-[#FE277E]" size={32} />}
              title="Position de base"
              description="Les doigts reposent sur ASDF (main gauche) et JKL; (main droite)"
              delay={0.2}
            />
            <GlassCard 
              icon={<Keyboard className="text-[#3B556D]" size={32} />}
              title="Frappe tactile"
              description="Ne pas regarder le clavier, utiliser la mémoire musculaire"
              delay={0.3}
            />
            <GlassCard 
              icon={<Clock className="text-[#FE277E]" size={32} />}
              title="Rythme régulier"
              description="Maintenir un rythme constant plutôt que des frappes rapides"
              delay={0.4}
            />
            <GlassCard 
              icon={<Target className="text-[#3B556D]" size={32} />}
              title="Précision avant vitesse"
              description="Se concentrer d'abord sur la précision, la vitesse viendra ensuite"
              delay={0.5}
            />
          </div>
        </section>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 max-w-4xl mx-auto text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Prêt à maîtriser votre clavier ?</h3>
          <p className="mb-6">
            Choisissez un exercice pour pratiquer les techniques de dactylographie et améliorer votre vitesse et précision.
          </p>
          <div className="flex justify-center gap-4">
            <AnimatedButton size="lg">Exercices de base</AnimatedButton>
            <AnimatedButton variant="outline" size="lg">
              Test de vitesse
            </AnimatedButton>
          </div>
        </motion.div>
      </div>
    </div>
  )
}