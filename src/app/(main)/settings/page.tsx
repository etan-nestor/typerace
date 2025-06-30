'use client'

import { motion } from 'framer-motion'
import { Settings, Palette, Keyboard, Bell, Shield, Mail } from 'lucide-react'
import { useState } from 'react'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('appearance')
  const [theme, setTheme] = useState('dark')
  const [keyboardLayout, setKeyboardLayout] = useState('azerty')
  const [notifications, setNotifications] = useState({
    email: true,
    sounds: true,
    challenges: true,
    competitions: true
  })

  const handleNotificationChange = (key: string) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key as keyof typeof notifications]
    }))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex items-center gap-3 mb-8">
          <Settings className="text-[#FE277E]" size={32} />
          <h1 className="text-3xl font-bold">Paramètres</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <nav className="bg-white/5 border border-white/10 rounded-xl p-2 backdrop-blur-sm">
              <button
                onClick={() => setActiveTab('appearance')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'appearance' ? 'bg-[#FE277E]/10 text-[#FE277E]' : 'hover:bg-white/5'}`}
              >
                <Palette size={18} />
                <span>Apparence</span>
              </button>
              <button
                onClick={() => setActiveTab('keyboard')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'keyboard' ? 'bg-[#FE277E]/10 text-[#FE277E]' : 'hover:bg-white/5'}`}
              >
                <Keyboard size={18} />
                <span>Clavier</span>
              </button>
              <button
                onClick={() => setActiveTab('notifications')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'notifications' ? 'bg-[#FE277E]/10 text-[#FE277E]' : 'hover:bg-white/5'}`}
              >
                <Bell size={18} />
                <span>Notifications</span>
              </button>
              <button
                onClick={() => setActiveTab('privacy')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'privacy' ? 'bg-[#FE277E]/10 text-[#FE277E]' : 'hover:bg-white/5'}`}
              >
                <Shield size={18} />
                <span>Confidentialité</span>
              </button>
              <button
                onClick={() => setActiveTab('account')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'account' ? 'bg-[#FE277E]/10 text-[#FE277E]' : 'hover:bg-white/5'}`}
              >
                <Mail size={18} />
                <span>Compte</span>
              </button>
            </nav>
          </motion.div>

          {/* Contenu */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3"
          >
            {/* Apparence */}
            {activeTab === 'appearance' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm"
              >
                <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Palette className="text-[#FE277E]" size={24} />
                  Apparence
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3">Thème</h3>
                    <div className="grid grid-cols-3 gap-3">
                      {['clair', 'sombre', 'système'].map((option) => (
                        <button
                          key={option}
                          onClick={() => setTheme(option)}
                          className={`py-3 rounded-lg transition-colors ${theme === option ? 'bg-[#FE277E] text-white' : 'bg-white/5 hover:bg-white/10'}`}
                        >
                          {option.charAt(0).toUpperCase() + option.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3">Accent color</h3>
                    <div className="grid grid-cols-5 gap-3">
                      {['#FE277E', '#3B556D', '#8A4FFF', '#00C4A7', '#FFB800'].map((color) => (
                        <button
                          key={color}
                          onClick={() => {}}
                          className="h-10 rounded-lg transition-transform hover:scale-105"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3">Animations</h3>
                    <div className="flex items-center gap-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="relative w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FE277E]"></div>
                        <span>Activer les animations</span>
                      </label>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Clavier */}
            {activeTab === 'keyboard' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm"
              >
                <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Keyboard className="text-[#FE277E]" size={24} />
                  Paramètres clavier
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3">Disposition</h3>
                    <div className="grid grid-cols-3 gap-3">
                      {['azerty', 'qwerty', 'bépo'].map((layout) => (
                        <button
                          key={layout}
                          onClick={() => setKeyboardLayout(layout)}
                          className={`py-3 rounded-lg transition-colors ${keyboardLayout === layout ? 'bg-[#FE277E] text-white' : 'bg-white/5 hover:bg-white/10'}`}
                        >
                          {layout.toUpperCase()}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3">Visualisation clavier</h3>
                    <div className="flex items-center gap-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="relative w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FE277E]"></div>
                        <span>Afficher pendant les tests</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3">Sons clavier</h3>
                    <div className="flex items-center gap-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="relative w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FE277E]"></div>
                        <span>Activer les sons de frappe</span>
                      </label>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Notifications */}
            {activeTab === 'notifications' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm"
              >
                <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Bell className="text-[#FE277E]" size={24} />
                  Paramètres de notification
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Types de notifications</h3>
                    <div className="space-y-3">
                      {Object.entries(notifications).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between p-4 bg-black/20 rounded-lg">
                          <div>
                            <p className="font-medium">
                              {key === 'email' && 'Emails'}
                              {key === 'sounds' && 'Sons'}
                              {key === 'challenges' && 'Défis'}
                              {key === 'competitions' && 'Compétitions'}
                            </p>
                            <p className="text-sm text-gray-400">
                              {key === 'email' && 'Recevoir des notifications par email'}
                              {key === 'sounds' && 'Jouer des sons pour les notifications'}
                              {key === 'challenges' && 'Notifications pour les nouveaux défis'}
                              {key === 'competitions' && 'Notifications pour les compétitions'}
                            </p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={value}
                              onChange={() => handleNotificationChange(key)}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FE277E]"></div>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Confidentialité */}
            {activeTab === 'privacy' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm"
              >
                <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Shield className="text-[#FE277E]" size={24} />
                  Confidentialité et sécurité
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3">Visibilité du profil</h3>
                    <div className="grid grid-cols-3 gap-3">
                      {['public', 'amis seulement', 'privé'].map((option) => (
                        <button
                          key={option}
                          onClick={() => {}}
                          className="py-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                        >
                          {option.charAt(0).toUpperCase() + option.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3">Historique de dactylographie</h3>
                    <div className="flex items-center gap-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="relative w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FE277E]"></div>
                        <span>Enregistrer mes résultats</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3">Sécurité</h3>
                    <button className="w-full bg-white/5 hover:bg-white/10 border border-white/10 py-3 px-4 rounded-lg transition-colors text-left">
                      Changer le mot de passe
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Compte */}
            {activeTab === 'account' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm"
              >
                <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Mail className="text-[#FE277E]" size={24} />
                  Paramètres du compte
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3">Email</h3>
                    <div className="flex items-center gap-4">
                      <input
                        type="email"
                        defaultValue="utilisateur@exemple.com"
                        className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FE277E]/50"
                      />
                      <button className="bg-[#3B556D] hover:bg-[#2A3E50] text-white py-3 px-6 rounded-lg transition-colors">
                        Mettre à jour
                      </button>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3">Suppression du compte</h3>
                    <p className="text-gray-400 mb-4">
                      La suppression de votre compte est permanente. Toutes vos données seront effacées et ne pourront pas être récupérées.
                    </p>
                    <button className="text-red-400 hover:text-red-300 border border-red-400/30 hover:border-red-300/30 py-3 px-6 rounded-lg transition-colors">
                      Supprimer mon compte
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}