'use client'

import { motion } from 'framer-motion'
import { Swords, UserPlus, Mail, Clock, Zap, Trophy } from 'lucide-react'
import { useState } from 'react'

export default function DuelPage() {
  const [email, setEmail] = useState('')
  const [isChallengeSent, setIsChallengeSent] = useState(false)
  const [selectedTime, setSelectedTime] = useState(60)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsChallengeSent(true)
    // Ici vous ajouteriez la logique pour envoyer le défi
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <div className="flex items-center gap-3 mb-8">
          <Swords className="text-[#FE277E]" size={32} />
          <h1 className="text-3xl font-bold">Défier un adversaire</h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Formulaire de défi */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <Mail className="text-[#FE277E]" size={24} />
              <h2 className="text-xl font-semibold">Par email</h2>
            </div>

            {!isChallengeSent ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Email de l'adversaire</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FE277E]/50"
                    placeholder="adversaire@exemple.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Durée du duel</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[30, 60, 120].map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`py-2 rounded-lg transition-colors ${selectedTime === time ? 'bg-[#FE277E] text-white' : 'bg-white/5 hover:bg-white/10'}`}
                      >
                        {time}s
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#FE277E] hover:bg-[#E21D6D] text-white py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <UserPlus size={18} />
                  Envoyer le défi
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center p-6"
              >
                <div className="bg-[#FE277E]/10 border border-[#FE277E]/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-[#FE277E]" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Défi envoyé !</h3>
                <p className="text-gray-400 mb-4">
                  Un email a été envoyé à <span className="text-white">{email}</span> avec votre défi.
                </p>
                <button
                  onClick={() => setIsChallengeSent(false)}
                  className="text-[#FE277E] hover:text-[#E21D6D] underline transition-colors"
                >
                  Envoyer un nouveau défi
                </button>
              </motion.div>
            )}
          </motion.div>

          {/* Duel en attente */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <Clock className="text-[#3B556D]" size={24} />
              <h2 className="text-xl font-semibold">Duel en attente</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#FE277E]/10 rounded-full flex items-center justify-center">
                    <UserPlus className="text-[#FE277E]" size={16} />
                  </div>
                  <span>john.doe@exemple.com</span>
                </div>
                <span className="text-sm text-gray-400">Il y a 2 min</span>
              </div>

              <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#3B556D]/10 rounded-full flex items-center justify-center">
                    <Trophy className="text-[#3B556D]" size={16} />
                  </div>
                  <span>marie.dupont@exemple.com</span>
                </div>
                <span className="text-sm text-gray-400">Hier</span>
              </div>
            </div>

            <button className="w-full mt-6 border border-[#3B556D] text-[#3B556D] hover:bg-[#3B556D]/10 py-2 px-4 rounded-lg transition-colors">
              Voir tous les défis
            </button>
          </motion.div>
        </motion.div>

        {/* Statistiques de duel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Zap className="text-[#FE277E]" size={18} />
                  Victoires
                </h3>
                <p className="text-gray-400 text-sm">Derniers 30 jours</p>
              </div>
              <span className="text-3xl font-bold">24</span>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Swords className="text-[#3B556D]" size={18} />
                  Duels
                </h3>
                <p className="text-gray-400 text-sm">Total effectués</p>
              </div>
              <span className="text-3xl font-bold">156</span>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Trophy className="text-yellow-400" size={18} />
                  Classement
                </h3>
                <p className="text-gray-400 text-sm">Position globale</p>
              </div>
              <span className="text-3xl font-bold">#42</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}