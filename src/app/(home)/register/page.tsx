'use client'

import AnimatedBackground from '@/components/ui/AnimatedBackground'
import AnimatedButton from '@/components/ui/AnimatedButton'
import GlassCard from '@/components/ui/GlassCard'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, Lock, Eye, EyeOff, User } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { AuthService } from '@/services/auth'
import { AuthModal } from '@/components/ui/AuthModal'

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [modal, setModal] = useState<{
    type: 'loading' | 'success' | 'error'
    isOpen: boolean
    title: string
    message?: string
  }>({ 
    type: 'loading', 
    isOpen: false, 
    title: '' 
  })
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!fullname || !email || !password) {
      setModal({
        type: 'error',
        isOpen: true,
        title: 'Champs manquants',
        message: 'Veuillez remplir tous les champs'
      })
      return
    }

    if (!termsAccepted) {
      setModal({
        type: 'error',
        isOpen: true,
        title: 'Conditions non acceptées',
        message: 'Vous devez accepter les conditions d\'utilisation'
      })
      return
    }

    setModal({
      type: 'loading',
      isOpen: true,
      title: 'Création du compte...',
      message: ''
    })

    const result = await AuthService.register(email, password, fullname)

    if (result.success) {
      setModal({
        type: 'success',
        isOpen: true,
        title: 'Compte créé !',
        message: 'Patientez ...'
      })
      setTimeout(() => router.push('/dashboard'), 1500)
    } else {
      setModal({
        type: 'error',
        isOpen: true,
        title: 'Erreur d\'inscription',
        message: result.error
      })
    }
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden pt-[72px]">
      <AnimatedBackground />
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center py-12">
        <AuthModal
          isOpen={modal.isOpen}
          type={modal.type}
          title={modal.title}
          message={modal.message}
          onClose={() => setModal(prev => ({ ...prev, isOpen: false }))}
        />

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

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <User className="h-5 w-5 text-[#FE277E]" />
                  </div>
                  <input
                    id="fullname"
                    name="fullname"
                    type="text"
                    required
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-transparent border border-[rgba(255,255,255,0.2)] rounded-lg focus:ring-2 focus:ring-[#FE277E] focus:border-transparent outline-none transition-all"
                    placeholder="Nom complet"
                  />
                </div>

                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <Mail className="h-5 w-5 text-[#3B556D]" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-transparent border border-[rgba(255,255,255,0.2)] rounded-lg focus:ring-2 focus:ring-[#FE277E] focus:border-transparent outline-none transition-all"
                    placeholder="Adresse email"
                  />
                </div>

                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <Lock className="h-5 w-5 text-[#FE277E]" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 text-[#FE277E] focus:ring-[#FE277E]"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-muted-foreground">
                  J'accepte les <Link href="/terms" className="font-medium text-[#FE277E] hover:underline">conditions d'utilisation</Link>
                </label>
              </div>

              <AnimatedButton
                type="submit"
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