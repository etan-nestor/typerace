'use client'

import { motion } from 'framer-motion'
import { Trophy, Users, Zap, Calendar, Clock, Search } from 'lucide-react'
import { useState } from 'react'

const competitions = [
  {
    id: 1,
    title: "Tournoi Hebdomadaire",
    participants: 42,
    duration: 120,
    startTime: "2023-06-15T18:00:00",
    prize: "500 points",
    category: "Général"
  },
  {
    id: 2,
    title: "Défi Technologie",
    participants: 28,
    duration: 90,
    startTime: "2023-06-16T20:00:00",
    prize: "Accès Premium",
    category: "Technologie"
  },
  {
    id: 3,
    title: "Battle Littéraire",
    participants: 15,
    duration: 60,
    startTime: "2023-06-17T15:00:00",
    prize: "300 points",
    category: "Littérature"
  }
]

export default function CompetitionsPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredCompetitions = competitions.filter(comp =>
    comp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    comp.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex items-center gap-3 mb-8">
          <Trophy className="text-[#FE277E]" size={32} />
          <h1 className="text-3xl font-bold">Compétitions</h1>
        </div>

        {/* Barre de recherche et filtres */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Rechercher une compétition..."
              className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FE277E]/50"
            />
          </div>
        </motion.div>

        {/* Liste des compétitions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredCompetitions.map((competition, index) => (
            <motion.div
              key={competition.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -5 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">{competition.title}</h3>
                <span className="bg-[#FE277E]/10 text-[#FE277E] text-xs px-2 py-1 rounded-full">
                  {competition.category}
                </span>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <Users className="text-[#3B556D]" size={16} />
                  <span>{competition.participants} participants</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="text-[#3B556D]" size={16} />
                  <span>{competition.duration} secondes</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="text-[#3B556D]" size={16} />
                  <span>{new Date(competition.startTime).toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Zap className="text-[#FE277E]" size={16} />
                  <span className="font-medium">Récompense: {competition.prize}</span>
                </div>
              </div>

              <button className="w-full bg-[#FE277E] hover:bg-[#E21D6D] text-white py-2 px-4 rounded-lg transition-colors">
                Rejoindre
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Statistiques */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm"
        >
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Trophy className="text-[#FE277E]" size={24} />
            Vos performances en compétition
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-black/20 rounded-lg p-4">
              <h3 className="text-sm text-gray-400 mb-1">Compétitions</h3>
              <p className="text-2xl font-bold">24</p>
            </div>
            <div className="bg-black/20 rounded-lg p-4">
              <h3 className="text-sm text-gray-400 mb-1">Victoires</h3>
              <p className="text-2xl font-bold">8</p>
            </div>
            <div className="bg-black/20 rounded-lg p-4">
              <h3 className="text-sm text-gray-400 mb-1">Meilleur score</h3>
              <p className="text-2xl font-bold">112 MPM</p>
            </div>
            <div className="bg-black/20 rounded-lg p-4">
              <h3 className="text-sm text-gray-400 mb-1">Classement</h3>
              <p className="text-2xl font-bold">Top 5%</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}