'use client'

import { motion } from 'framer-motion'
import { Swords, UserPlus, Search, Zap, Trophy, Clock, Users } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

export default function DuelPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeTab, setActiveTab] = useState('live')

  const liveDuels = [
    { id: 1, player1: "Marie D.", player2: "Jean P.", wpm1: 84, wpm2: 92, timeLeft: 45 },
    { id: 2, player1: "Alex T.", player2: "Sam R.", wpm1: 112, wpm2: 105, timeLeft: 32 },
    { id: 3, player1: "You", player2: "Lucie M.", wpm1: 98, wpm2: 87, timeLeft: 28 }
  ]

  const recentDuels = [
    { id: 1, opponent: "Pierre L.", result: "Victoire", wpm: 124, date: "2023-06-12" },
    { id: 2, opponent: "Emma S.", result: "Défaite", wpm: 98, date: "2023-06-10" },
    { id: 3, opponent: "Antoine V.", result: "Victoire", wpm: 132, date: "2023-06-08" }
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
            <Swords className="text-[#FE277E]" size={32} />
            <h1 className="text-3xl font-bold">Mode Duel</h1>
          </div>
          
          <div className="flex gap-3 w-full md:w-auto">
            <Link href="/duel/challenge" className="flex-1 md:flex-none">
              <button className="w-full bg-[#FE277E] hover:bg-[#E21D6D] text-white py-2 px-6 rounded-lg transition-colors flex items-center justify-center gap-2">
                <UserPlus size={18} />
                <span>Nouveau duel</span>
              </button>
            </Link>
            
            <Link href="/duel/random" className="flex-1 md:flex-none">
              <button className="w-full border border-[#FE277E] text-[#FE277E] hover:bg-[#FE277E]/10 py-2 px-6 rounded-lg transition-colors flex items-center justify-center gap-2">
                <Search size={18} />
                <span>Aléatoire</span>
              </button>
            </Link>
          </div>
        </div>

        {/* Onglets */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex border-b border-white/10 mb-6"
        >
          {['live', 'récent', 'classement'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 font-medium relative ${activeTab === tab ? 'text-[#FE277E]' : 'text-gray-400 hover:text-white'}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
              {activeTab === tab && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FE277E]"
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Contenu des onglets */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-8"
        >
          {/* Duel en direct */}
          {activeTab === 'live' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {liveDuels.map((duel, index) => (
                <motion.div
                  key={duel.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">Duel #{duel.id}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Clock size={16} />
                      <span>{duel.timeLeft}s restantes</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`font-medium ${duel.player1 === 'You' ? 'text-[#FE277E]' : ''}`}>
                        {duel.player1}
                      </span>
                      <span className="font-bold">{duel.wpm1} MPM</span>
                    </div>
                    
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.min((duel.wpm1 / 150) * 100, 100)}%` }}
                        className="h-full bg-[#FE277E]"
                      />
                    </div>
                    
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.min((duel.wpm2 / 150) * 100, 100)}%` }}
                        className="h-full bg-[#3B556D]"
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className={`font-medium ${duel.player2 === 'You' ? 'text-[#FE277E]' : ''}`}>
                        {duel.player2}
                      </span>
                      <span className="font-bold">{duel.wpm2} MPM</span>
                    </div>
                  </div>
                  
                  <Link href={`/duel/${duel.id}`} className="mt-6 block">
                    <button className="w-full bg-[#3B556D] hover:bg-[#2A3E50] text-white py-2 px-4 rounded-lg transition-colors">
                      {duel.player1 === 'You' || duel.player2 === 'You' ? 'Rejoindre' : 'Observer'}
                    </button>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}

          {/* Duel récents */}
          {activeTab === 'récent' && (
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="pb-3 text-left">Adversaire</th>
                    <th className="pb-3 text-left">Résultat</th>
                    <th className="pb-3 text-left">Vitesse</th>
                    <th className="pb-3 text-left">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {recentDuels.map((duel, index) => (
                    <motion.tr
                      key={duel.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="border-b border-white/10 last:border-0 hover:bg-white/5"
                    >
                      <td className="py-4">{duel.opponent}</td>
                      <td className={`py-4 font-medium ${duel.result === 'Victoire' ? 'text-[#FE277E]' : 'text-red-400'}`}>
                        {duel.result}
                      </td>
                      <td className="py-4">{duel.wpm} MPM</td>
                      <td className="py-4 text-gray-400">{new Date(duel.date).toLocaleDateString()}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Classement */}
          {activeTab === 'classement' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Trophy className="text-yellow-400" size={20} />
                  Classement global
                </h3>
                
                <div className="space-y-3">
                  {[1, 2, 3, 4, 5].map((rank) => (
                    <motion.div
                      key={rank}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: rank * 0.1 }}
                      className={`flex items-center justify-between p-3 rounded-lg ${rank === 4 ? 'bg-[#FE277E]/10' : 'bg-black/20'}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-6 h-6 flex items-center justify-center rounded-full ${rank <= 3 ? 'bg-yellow-400/20 text-yellow-400' : 'bg-white/10'}`}>
                          {rank}
                        </span>
                        <span className={rank === 4 ? 'font-bold text-[#FE277E]' : ''}>
                          {rank === 4 ? 'Vous' : `Joueur ${rank}`}
                        </span>
                      </div>
                      <span className="font-bold">{150 - rank * 10} MPM</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Zap className="text-[#FE277E]" size={20} />
                  Vos statistiques
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Victoires</span>
                    <span className="font-bold">24</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Défaites</span>
                    <span className="font-bold">8</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Meilleur score</span>
                    <span className="font-bold text-[#FE277E]">132 MPM</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Précision moyenne</span>
                    <span className="font-bold">94%</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  )
}