'use client'

import AnimatedBackground from '@/components/ui/AnimatedBackground'
import AnimatedButton from '@/components/ui/AnimatedButton'
import GlassCard from '@/components/ui/GlassCard'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, Lock, Eye, EyeOff, User } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="relative min-h-screen w-full overflow-hidden pt-[72px]">
      <AnimatedBackground />
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center py-12">
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <GlassCard className="p-8">
            <div className="text-center mb-8">
              <motion.h2
                className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#FE277E] to-[#3B556D]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Créer un compte
              </motion.h2>
              <p className="text-muted-foreground">
                Rejoignez notre communauté de dactylographes
              </p>
            </div>

            <form className="space-y-6">
              <div className="space-y-4">
                {/* Champ Nom complet */}
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <User className="h-5 w-5 text-[#FE277E]" />
                  </div>
                  <input
                    id="fullname"
                    name="fullname"
                    type="text"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-transparent border border-[rgba(255,255,255,0.2)] rounded-lg focus:ring-2 focus:ring-[#FE277E] focus:border-transparent outline-none transition-all"
                    placeholder="Nom complet"
                  />
                </div>

                {/* Champ Email */}
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <Mail className="h-5 w-5 text-[#3B556D]" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-transparent border border-[rgba(255,255,255,0.2)] rounded-lg focus:ring-2 focus:ring-[#FE277E] focus:border-transparent outline-none transition-all"
                    placeholder="Adresse email"
                  />
                </div>

                {/* Champ Mot de passe */}
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <Lock className="h-5 w-5 text-[#FE277E]" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    className="w-full pl-10 pr-10 py-3 bg-transparent border border-[rgba(255,255,255,0.2)] rounded-lg focus:ring-2 focus:ring-[#FE277E] focus:border-transparent outline-none transition-all"
                    placeholder="Mot de passe"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="h-4 w-4 rounded border-gray-300 text-[#FE277E] focus:ring-[#FE277E]"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-muted-foreground">
                  J'accepte les <Link href="/terms" className="font-medium text-[#FE277E] hover:underline">conditions d'utilisation</Link>
                </label>
              </div>

              <AnimatedButton
                className="w-full flex items-center justify-center gap-2">
                S'inscrire <ArrowRight size={18} />
              </AnimatedButton>

              <p className="text-center text-sm text-muted-foreground mt-4">
                Déjà un compte?{' '}
                <Link href="/login" className="font-medium text-[#FE277E] hover:underline">
                  Se connecter
                </Link>
              </p>
            </form>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  )
}