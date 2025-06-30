'use client'

import { motion } from 'framer-motion'
import { Trophy, Calendar, Clock, Users, Zap, X, Check, Plus, Settings, Eye } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

export default function CreateCompetitionPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'general',
    duration: 60,
    startDate: '',
    startTime: '',
    isPrivate: false,
    password: '',
    prize: '',
    participantsLimit: 0
  })

  const categories = [
    { id: 'general', name: 'Général' },
    { id: 'technology', name: 'Technologie' },
    { id: 'literature', name: 'Littérature' },
    { id: 'news', name: 'Actualités' },
    { id: 'science', name: 'Science' }
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Ici vous ajouteriez la logique pour créer la compétition
    console.log('Compétition créée:', formData)
    setStep(3) // Passer à l'étape de confirmation
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        {/* Étapes */}
        <div className="flex justify-between items-center mb-8 relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -z-10"></div>
          {[1, 2, 3].map((stepNumber) => (
            <motion.div
              key={stepNumber}
              whileHover={{ scale: 1.05 }}
              className={`flex flex-col items-center ${step >= stepNumber ? 'text-[#FE277E]' : 'text-gray-400'}`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step > stepNumber ? 'bg-green-500/10 text-green-500' : step === stepNumber ? 'bg-[#FE277E]/10' : 'bg-white/10'}`}>
                {step > stepNumber ? (
                  <Check size={18} />
                ) : (
                  <span className="font-medium">{stepNumber}</span>
                )}
              </div>
              <span className="text-sm">
                {stepNumber === 1 && 'Détails'}
                {stepNumber === 2 && 'Paramètres'}
                {stepNumber === 3 && 'Confirmation'}
              </span>
            </motion.div>
          ))}
        </div>

        {/* En-tête */}
        <div className="flex items-center gap-3 mb-8">
          <Trophy className="text-[#FE277E]" size={32} />
          <h1 className="text-3xl font-bold">Créer une compétition</h1>
        </div>

        {/* Formulaire */}
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm"
          >
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Trophy className="text-[#FE277E]" size={24} />
              Détails de la compétition
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Titre de la compétition *</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FE277E]/50"
                  placeholder="Ex: Tournoi Hebdomadaire"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={3}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FE277E]/50"
                  placeholder="Décrivez votre compétition..."
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Catégorie *</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FE277E]/50"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Durée (secondes) *</label>
                <input
                  type="number"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  min="30"
                  max="300"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FE277E]/50"
                />
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setStep(2)}
                  className="bg-[#FE277E] hover:bg-[#E21D6D] text-white py-2 px-6 rounded-lg transition-colors"
                  disabled={!formData.title}
                >
                  Suivant
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm"
          >
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Settings className="text-[#3B556D]" size={24} />
              Paramètres avancés
            </h2>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Date de début *</label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FE277E]/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Heure de début *</label>
                  <input
                    type="time"
                    name="startTime"
                    value={formData.startTime}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FE277E]/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Récompense</label>
                <input
                  type="text"
                  name="prize"
                  value={formData.prize}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FE277E]/50"
                  placeholder="Ex: 500 points, Trophée, etc."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Limite de participants</label>
                <input
                  type="number"
                  name="participantsLimit"
                  value={formData.participantsLimit}
                  onChange={handleChange}
                  min="0"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FE277E]/50"
                  placeholder="0 pour illimité"
                />
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="isPrivate"
                  name="isPrivate"
                  checked={formData.isPrivate}
                  onChange={handleChange}
                  className="w-5 h-5 bg-white/5 border border-white/10 rounded focus:ring-[#FE277E]"
                />
                <label htmlFor="isPrivate" className="text-sm font-medium">
                  Compétition privée
                </label>
              </div>

              {formData.isPrivate && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                >
                  <label className="block text-sm font-medium mb-2">Mot de passe *</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FE277E]/50"
                    placeholder="Mot de passe d'accès"
                  />
                </motion.div>
              )}

              <div className="flex justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="border border-white/10 hover:bg-white/5 text-white py-2 px-6 rounded-lg transition-colors"
                >
                  Retour
                </button>
                <button
                  onClick={handleSubmit}
                  className="bg-[#FE277E] hover:bg-[#E21D6D] text-white py-2 px-6 rounded-lg transition-colors"
                  disabled={!formData.startDate || !formData.startTime}
                >
                  Créer la compétition
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-xl p-8 text-center backdrop-blur-sm"
          >
            <div className="bg-[#FE277E]/10 border border-[#FE277E]/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Check className="text-[#FE277E]" size={32} />
            </div>
            
            <h2 className="text-2xl font-bold mb-4">Compétition créée avec succès !</h2>
            
            <p className="text-gray-400 mb-6">
              Votre compétition "{formData.title}" est maintenant active. Les joueurs peuvent commencer à s'inscrire.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
              <Link href={`/competition/123`} className="w-full">
                <button className="w-full bg-[#FE277E] hover:bg-[#E21D6D] text-white py-2 px-4 rounded-lg transition-colors">
                  Voir la compétition
                </button>
              </Link>
              
              <Link href="/competitions/create" className="w-full">
                <button className="w-full border border-white/10 hover:bg-white/5 text-white py-2 px-4 rounded-lg transition-colors">
                  Créer une nouvelle
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}