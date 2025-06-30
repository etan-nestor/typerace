'use client'

import { motion } from 'framer-motion'
import { Trophy, Calendar, Users, Zap, Clock, Plus } from 'lucide-react'
import Link from 'next/link'

export default function CompetitionPage() {
  const upcomingCompetitions = [
    { id: 1, title: "Tournoi Hebdomadaire", participants: 124, startsIn: "2h 15m", prize: "500 points" },
    { id: 2, title: "Défi du Weekend", participants: 87, startsIn: "1j 4h", prize: "Accès Premium" },
    { id: 3, title: "Battle Mensuelle", participants: 256, startsIn: "5j", prize: "1000 points + Trophée" }
  ]

  const ongoingCompetitions = [
    { id: 4, title: "Défi Technologie", participants: 42, timeLeft: "35m", topScore: "128 MPM" },
    { id: 5, title: "Tournoi Express", participants: 18, timeLeft: "12m", topScore: "112 MPM" }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        {/* En-tête */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="flex items-center gap-3">
            <Trophy className="text-[#FE277E]" size={32} />
            <h1 className="text-3xl font-bold">Compétitions</h1>
          </div>
          
          <div className="flex gap-3 w-full md:w-auto">
            <Link href="/competitions/join" className="flex-1 md:flex-none">
              <button className="w-full bg-[#FE277E] hover:bg-[#E21D6D] text-white py-2 px-6 rounded-lg transition-colors flex items-center justify-center gap-2">
                <Users size={18} />
                <span>Rejoindre</span>
              </button>
            </Link>
            
            <Link href="/competitions/create" className="flex-1 md:flex-none">
              <button className="w-full border border-[#FE277E] text-[#FE277E] hover:bg-[#FE277E]/10 py-2 px-6 rounded-lg transition-colors flex items-center justify-center gap-2">
                <Plus size={18} />
                <span>Créer</span>
              </button>
            </Link>
          </div>
        </div>

        {/* Compétitions en cours */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Zap className="text-[#FE277E]" size={24} />
            Compétitions en cours
          </h2>

          {ongoingCompetitions.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ongoingCompetitions.map((comp, index) => (
                <motion.div
                  key={comp.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">{comp.title}</h3>
                    <span className="bg-[#FE277E]/10 text-[#FE277E] text-xs px-2 py-1 rounded-full">
                      En cours
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-gray-400">Participants</p>
                      <p className="text-lg font-bold flex items-center gap-1">
                        <Users size={16} />
                        {comp.participants}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Temps restant</p>
                      <p className="text-lg font-bold flex items-center gap-1">
                        <Clock size={16} />
                        {comp.timeLeft}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Meilleur score</p>
                      <p className="text-lg font-bold">{comp.topScore}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Votre position</p>
                      <p className="text-lg font-bold text-[#FE277E]">#{index + 3}</p>
                    </div>
                  </div>
                  
                  <Link href={`/competitions/${comp.id}`}>
                    <button className="w-full bg-[#3B556D] hover:bg-[#2A3E50] text-white py-2 px-4 rounded-lg transition-colors">
                      Continuer
                    </button>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-center backdrop-blur-sm">
              <p className="text-gray-400">Aucune compétition en cours pour le moment</p>
            </div>
          )}
        </motion.div>

        {/* Compétitions à venir */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Calendar className="text-[#3B556D]" size={24} />
            Compétitions à venir
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingCompetitions.map((comp, index) => (
              <motion.div
                key={comp.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm"
              >
                <h3 className="text-lg font-semibold mb-3">{comp.title}</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="text-[#3B556D]" size={16} />
                    <span>{comp.participants} inscrits</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="text-[#3B556D]" size={16} />
                    <span>Commence dans {comp.startsIn}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Trophy className="text-yellow-400" size={16} />
                    <span className="font-medium">{comp.prize}</span>
                  </div>
                </div>
                
                <Link href={`/competitions/${comp.id}`}>
                  <button className="w-full bg-[#FE277E] hover:bg-[#E21D6D] text-white py-2 px-4 rounded-lg transition-colors">
                    S'inscrire
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Vos performances */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm"
        >
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Trophy className="text-yellow-400" size={24} />
            Vos performances
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-black/20 rounded-lg p-4">
              <h3 className="text-sm text-gray-400 mb-1">Compétitions</h3>
              <p className="text-2xl font-bold">24</p>
            </div>
            <div className="bg-black/20 rounded-lg p-4">
              <h3 className="text-sm text-gray-400 mb-1">Victoires</h3>
              <p className="text-2xl font-bold text-[#FE277E]">8</p>
            </div>
            <div className="bg-black/20 rounded-lg p-4">
              <h3 className="text-sm text-gray-400 mb-1">Meilleur score</h3>
              <p className="text-2xl font-bold">128 MPM</p>
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