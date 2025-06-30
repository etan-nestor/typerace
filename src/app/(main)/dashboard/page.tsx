'use client'

import CategoryCard from '@/components/Dashboard/CategoryCard'
import StatsCard from '@/components/Dashboard/StatsCard'
import { motion } from 'framer-motion'
import { Clock, Swords, Users, Trophy, Zap, History, UserPlus } from 'lucide-react'
import Link from 'next/link'

export default function DashboardPage() {
  const userStats = {
    wpm: 72,
    accuracy: 94,
    points: 1250,
    rank: 'Gold',
    competitionsWon: 8
  }

  const categories = [
    { id: 1, name: 'Technologie', topics: ['IA', 'Blockchain', 'Cybersécurité'] },
    { id: 2, name: 'Science', topics: ['Espace', 'Biologie', 'Physique'] },
    { id: 3, name: 'Actualités', topics: ['Politique', 'Économie', 'Sport'] },
    { id: 4, name: 'Littérature', topics: ['Classiques', 'Poésie', 'Romans'] }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Section Statistiques */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
      >
        <StatsCard 
          icon={<Zap className="text-[#FE277E]" />}
          title="Vitesse" 
          value={`${userStats.wpm} MPM`}
          description="Mots par minute"
        />
        <StatsCard 
          icon={<Clock className="text-[#3B556D]" />}
          title="Précision" 
          value={`${userStats.accuracy}%`}
          description="Dernier test"
        />
        <StatsCard 
          icon={<Trophy className="text-[#FE277E]" />}
          title="Points" 
          value={userStats.points}
          description={`Niveau ${userStats.rank}`}
        />
        <StatsCard 
          icon={<Users className="text-[#3B556D]" />}
          title="Victoires" 
          value={userStats.competitionsWon}
          description="Compétitions"
        />
      </motion.div>

      {/* Section Catégories */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-12"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Choisissez une catégorie</h2>
          <Link href="/typing-test/random" className="text-sm text-[#FE277E] hover:underline">
            Aléatoire
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard 
              key={category.id}
              category={category}
              delay={index * 0.1}
            />
          ))}
        </div>
      </motion.section>

      {/* Section Modes de jeu */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-2xl font-bold mb-6">Modes de jeu</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Carte Solo */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm"
          >
            <div className="flex items-center mb-4">
              <Clock className="text-[#3B556D] mr-3" size={24} />
              <h3 className="text-xl font-semibold">Solo</h3>
            </div>
            <p className="text-gray-400 mb-6">Entraînez-vous seul avec ou sans minuteur</p>
            <Link href="/typing-test/solo">
              <button className="w-full bg-[#FE277E] hover:bg-[#E21D6D] text-white py-2 px-4 rounded-lg transition-colors">
                Commencer
              </button>
            </Link>
          </motion.div>

          {/* Carte Duel */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm"
          >
            <div className="flex items-center mb-4">
              <Swords className="text-[#FE277E] mr-3" size={24} />
              <h3 className="text-xl font-semibold">Duel</h3>
            </div>
            <p className="text-gray-400 mb-4">Défiez un ami par email ou trouvez un adversaire</p>
            <div className="flex space-x-3">
              <Link href="/duel/challenge" className="flex-1">
                <button className="w-full bg-[#3B556D] hover:bg-[#2A3E50] text-white py-2 px-4 rounded-lg transition-colors text-sm">
                  Par email
                </button>
              </Link>
              <Link href="/duel/random" className="flex-1">
                <button className="w-full border border-[#FE277E] text-[#FE277E] hover:bg-[#FE277E]/10 py-2 px-4 rounded-lg transition-colors text-sm">
                  Aléatoire
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Carte Compétition */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm md:col-span-2"
          >
            <div className="flex items-center mb-4">
              <Trophy className="text-[#FE277E] mr-3" size={24} />
              <h3 className="text-xl font-semibold">Compétition</h3>
            </div>
            <p className="text-gray-400 mb-4">Participez ou créez une compétition de groupe</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <Link href="/competitions/join">
                <button className="w-full bg-[#3B556D] hover:bg-[#2A3E50] text-white py-2 px-4 rounded-lg transition-colors text-sm">
                  Rejoindre
                </button>
              </Link>
              <Link href="/competitions/create">
                <button className="w-full border border-[#FE277E] text-[#FE277E] hover:bg-[#FE277E]/10 py-2 px-4 rounded-lg transition-colors text-sm">
                  Créer
                </button>
              </Link>
              <Link href="/competitions/history">
                <button className="w-full flex items-center justify-center gap-2 text-gray-400 hover:text-[#FE277E] py-2 px-4 rounded-lg transition-colors text-sm">
                  <History size={16} /> Historique
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}