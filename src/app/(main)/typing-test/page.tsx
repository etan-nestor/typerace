'use client'

import { motion } from 'framer-motion'
import { Keyboard, Clock, Zap, Trophy, RotateCw } from 'lucide-react'
import Link from 'next/link'

export default function TypingTestPage() {
  const categories = [
    { id: 1, name: 'Technologie', difficulty: 'Moyen', icon: <Zap className="text-[#FE277E]" /> },
    { id: 2, name: 'Littérature', difficulty: 'Difficile', icon: <Trophy className="text-yellow-400" /> },
    { id: 3, name: 'Actualités', difficulty: 'Facile', icon: <Clock className="text-[#3B556D]" /> }
  ]

  const timeOptions = [30, 60, 120, 180]

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        {/* En-tête */}
        <div className="flex items-center gap-3 mb-8">
          <Keyboard className="text-[#FE277E]" size={32} />
          <h1 className="text-3xl font-bold">Test de Dactylographie</h1>
        </div>

        {/* Sélection de mode */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          <Link href="/typing-test/solo">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm h-full"
            >
              <div className="flex items-center gap-3 mb-4">
                <Clock className="text-[#3B556D]" size={24} />
                <h2 className="text-xl font-semibold">Mode Solo</h2>
              </div>
              <p className="text-gray-400 mb-6">Entraînez-vous à votre rythme avec ou sans minuteur</p>
              <button className="w-full bg-[#FE277E] hover:bg-[#E21D6D] text-white py-2 px-4 rounded-lg transition-colors">
                Commencer
              </button>
            </motion.div>
          </Link>

          <Link href="/duel">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm h-full"
            >
              <div className="flex items-center gap-3 mb-4">
                <Zap className="text-[#FE277E]" size={24} />
                <h2 className="text-xl font-semibold">Mode Duel</h2>
              </div>
              <p className="text-gray-400 mb-6">Affrontez un adversaire en temps réel</p>
              <button className="w-full border border-[#FE277E] text-[#FE277E] hover:bg-[#FE277E]/10 py-2 px-4 rounded-lg transition-colors">
                Défier
              </button>
            </motion.div>
          </Link>
        </motion.div>

        {/* Sélection de catégorie */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Trophy className="text-yellow-400" size={24} />
            Choisissez une catégorie
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -5 }}
                className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    {category.icon}
                    <h3 className="font-medium">{category.name}</h3>
                  </div>
                  <span className="text-xs bg-white/10 px-2 py-1 rounded-full">
                    {category.difficulty}
                  </span>
                </div>
                <Link href={`/typing-test/${category.id}`}>
                  <button className="w-full bg-[#3B556D] hover:bg-[#2A3E50] text-white py-2 px-4 rounded-lg transition-colors text-sm">
                    Sélectionner
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Options avancées */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm"
        >
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <RotateCw className="text-[#3B556D]" size={24} />
            Options avancées
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Durée du test</h3>
              <div className="grid grid-cols-4 gap-2">
                {timeOptions.map((time) => (
                  <Link 
                    key={time} 
                    href={`/typing-test/random?time=${time}`}
                    className="text-center"
                  >
                    <button className="w-full bg-white/5 hover:bg-white/10 border border-white/10 py-2 rounded-lg transition-colors">
                      {time}s
                    </button>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">Mode spécial</h3>
              <Link href="/typing-test/hardcore">
                <button className="w-full bg-red-400/10 hover:bg-red-400/20 border border-red-400/20 text-red-400 py-2 px-4 rounded-lg transition-colors">
                  Mode Hardcore (pas de corrections)
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}