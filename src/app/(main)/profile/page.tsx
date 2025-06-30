'use client'

import { motion } from 'framer-motion'
import { User, Trophy, Zap, Clock, Activity, Settings, Edit, Swords } from 'lucide-react'
import { useState } from 'react'

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [userData, setUserData] = useState({
    name: "Alex Dupont",
    email: "alex.dupont@exemple.com",
    bio: "Passionné de dactylographie et de compétition. Je m'entraîne quotidiennement pour améliorer ma vitesse et ma précision.",
    level: "Gold",
    joinDate: "2022-03-15"
  })

  const stats = [
    { icon: <Zap className="text-[#FE277E]" size={18} />, label: "Vitesse max", value: "128 MPM" },
    { icon: <Clock className="text-[#3B556D]" size={18} />, label: "Précision", value: "96%" },
    { icon: <Trophy className="text-yellow-400" size={18} />, label: "Victoires", value: "42" },
    { icon: <Activity className="text-green-400" size={18} />, label: "Tests", value: "356" }
  ]

  const recentAchievements = [
    { name: "Vitesse légendaire", date: "2023-06-10", icon: <Zap className="text-[#FE277E]" size={16} /> },
    { name: "Série de 10 victoires", date: "2023-05-28", icon: <Trophy className="text-yellow-400" size={16} /> },
    { name: "Précision parfaite", date: "2023-05-15", icon: <Clock className="text-[#3B556D]" size={16} /> }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setUserData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        {/* En-tête */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <User className="text-[#FE277E]" size={32} />
            <h1 className="text-3xl font-bold">Profil</h1>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg transition-colors"
          >
            <Edit size={18} />
            <span>{isEditing ? 'Annuler' : 'Modifier'}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Section Profil */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm mb-6">
              <div className="flex flex-col items-center mb-6">
                <div className="w-24 h-24 bg-[#FE277E]/10 rounded-full flex items-center justify-center mb-4">
                  <User className="text-[#FE277E]" size={36} />
                </div>
                
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={userData.name}
                    onChange={handleInputChange}
                    className="text-xl font-bold text-center bg-white/5 border border-white/10 rounded-lg px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-[#FE277E]/50"
                  />
                ) : (
                  <h2 className="text-xl font-bold">{userData.name}</h2>
                )}
                
                <span className="bg-[#FE277E]/10 text-[#FE277E] text-sm px-3 py-1 rounded-full">
                  {userData.level}
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-400">Email</label>
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={userData.email}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#FE277E]/50"
                    />
                  ) : (
                    <p className="text-white">{userData.email}</p>
                  )}
                </div>

                <div>
                  <label className="text-sm text-gray-400">Membre depuis</label>
                  <p className="text-white">{new Date(userData.joinDate).toLocaleDateString()}</p>
                </div>

                <div>
                  <label className="text-sm text-gray-400">Bio</label>
                  {isEditing ? (
                    <textarea
                      name="bio"
                      value={userData.bio}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#FE277E]/50"
                    />
                  ) : (
                    <p className="text-white">{userData.bio}</p>
                  )}
                </div>
              </div>

              {isEditing && (
                <button className="w-full mt-6 bg-[#FE277E] hover:bg-[#E21D6D] text-white py-2 px-4 rounded-lg transition-colors">
                  Enregistrer les modifications
                </button>
              )}
            </div>

            {/* Récompenses */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm"
            >
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Trophy className="text-yellow-400" size={20} />
                Récompenses récentes
              </h3>

              <div className="space-y-3">
                {recentAchievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-black/20 rounded-lg">
                    <div className="bg-[#FE277E]/10 p-2 rounded-full">
                      {achievement.icon}
                    </div>
                    <div>
                      <p className="font-medium">{achievement.name}</p>
                      <p className="text-xs text-gray-400">
                        {new Date(achievement.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Section Statistiques */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3 mb-4">
                    {stat.icon}
                    <h3 className="text-lg font-semibold">{stat.label}</h3>
                  </div>
                  <p className="text-3xl font-bold">{stat.value}</p>
                </motion.div>
              ))}
            </div>

            {/* Graphique de performance */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm mb-8"
            >
              <h3 className="text-lg font-semibold mb-6">Performance sur 30 jours</h3>
              <div className="h-64 bg-black/20 rounded-lg flex items-end justify-between p-4">
                {[50, 70, 85, 92, 88, 95, 102, 110, 105, 115, 120, 125, 118, 122, 128].map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ height: 0 }}
                    animate={{ height: `${(value / 150) * 100}%` }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className={`w-3 rounded-t-sm ${value >= 120 ? 'bg-[#FE277E]' : 'bg-[#3B556D]'}`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Historique des activités */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm"
            >
              <h3 className="text-lg font-semibold mb-6">Activités récentes</h3>
              
              <div className="space-y-4">
                {[
                  { type: "Duel", result: "Victoire", wpm: 124, opponent: "Marie D.", date: "2023-06-12T18:30:00" },
                  { type: "Compétition", result: "3ème place", wpm: 118, opponent: "Tournoi Hebdo", date: "2023-06-10T20:15:00" },
                  { type: "Solo", result: "Record personnel", wpm: 128, opponent: null, date: "2023-06-08T15:45:00" },
                  { type: "Duel", result: "Défaite", wpm: 112, opponent: "Jean P.", date: "2023-06-05T19:20:00" }
                ].map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center justify-between p-4 bg-black/20 rounded-lg"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-full ${activity.result.includes('Victoire') || activity.result.includes('Record') ? 'bg-[#FE277E]/10' : 'bg-[#3B556D]/10'}`}>
                        {activity.type === 'Duel' ? (
                          <Swords className={activity.result.includes('Victoire') ? 'text-[#FE277E]' : 'text-[#3B556D]'} size={18} />
                        ) : activity.type === 'Compétition' ? (
                          <Trophy className={activity.result.includes('place') ? 'text-yellow-400' : 'text-[#3B556D]'} size={18} />
                        ) : (
                          <Zap className="text-[#FE277E]" size={18} />
                        )}
                      </div>
                      <div>
                        <p className="font-medium">
                          {activity.type} {activity.opponent && `contre ${activity.opponent}`}
                        </p>
                        <p className={`text-sm ${activity.result.includes('Victoire') || activity.result.includes('Record') ? 'text-[#FE277E]' : activity.result.includes('Défaite') ? 'text-red-400' : 'text-yellow-400'}`}>
                          {activity.result} • {activity.wpm} MPM
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400">
                      {new Date(activity.date).toLocaleDateString()}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}