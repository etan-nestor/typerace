'use client'

import AnimatedBackground from '@/components/ui/AnimatedBackground'
import AnimatedButton from '@/components/ui/AnimatedButton'
import GlassCard from '@/components/ui/GlassCard'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, Lock, Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { AuthService } from '@/services/auth'
import { AuthModal } from '@/components/ui/AuthModal'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
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

    if (!email || !password) {
      setModal({
        type: 'error',
        isOpen: true,
        title: 'Champs manquants',
        message: 'Veuillez remplir tous les champs'
      })
      return
    }

    setModal({
      type: 'loading',
      isOpen: true,
      title: 'Connexion en cours...',
      message: ''
    })

    const result = await AuthService.login(email, password)

    if (result.success) {
      setModal({
        type: 'success',
        isOpen: true,
        title: 'Connexion réussie !',
        message: 'Redirection vers le tableau de bord...'
      })
      setTimeout(() => router.push('/dashboard'), 1500)
    } else {
      setModal({
        type: 'error',
        isOpen: true,
        title: 'Erreur de connexion',
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
                Connexion
              </motion.h2>
              <p className="text-muted-foreground">
                Rejoignez la compétition de dactylographie
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-4">
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

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-[#FE277E] focus:ring-[#FE277E]"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-muted-foreground">
                    Se souvenir de moi
                  </label>
                </div>

                <div className="text-sm">
                  <Link href="/forgot-password" className="font-medium text-[#FE277E] hover:underline">
                    Mot de passe oublié?
                  </Link>
                </div>
              </div>

              <AnimatedButton
                type="submit"
                className="w-full flex items-center justify-center gap-2">
                Se connecter <ArrowRight size={18} />
              </AnimatedButton>

              <p className="text-center text-sm text-muted-foreground mt-4">
                Pas de compte?{' '}
                <Link href="/register" className="font-medium text-[#FE277E] hover:underline">
                  Créer un compte
                </Link>
              </p>
            </form>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  )
}