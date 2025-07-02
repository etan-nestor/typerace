'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, XCircle, Loader2 } from 'lucide-react'

type ModalType = 'loading' | 'success' | 'error'

interface AuthModalProps {
  isOpen: boolean
  type: ModalType
  title: string
  message?: string
  onClose?: () => void
}

export const AuthModal = ({
  isOpen,
  type,
  title,
  message,
  onClose
}: AuthModalProps) => {
  const getIcon = () => {
    switch (type) {
      case 'loading':
        return <Loader2 className="animate-spin h-12 w-12" />
      case 'success':
        return <CheckCircle className="h-12 w-12 text-green-500" />
      case 'error':
        return <XCircle className="h-12 w-12 text-red-500" />
    }
  }

  const getColor = () => {
    switch (type) {
      case 'loading': return 'text-[#3B556D]'
      case 'success': return 'text-green-500'
      case 'error': return 'text-red-500'
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.8, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 20 }}
            className="bg-gradient-to-br from-[#1E1E2E] to-[#2A2A3A] border-2 border-white/10 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl"
          >
            <div className="flex flex-col items-center text-center gap-4">
              <div className={`p-4 rounded-full bg-white/5 ${getColor()}`}>
                {getIcon()}
              </div>

              <h3 className={`text-2xl font-bold ${getColor()}`}>
                {title}
              </h3>

              {message && (
                <p className="text-gray-300">
                  {message}
                </p>
              )}

              {type === 'success' && (
                <div className="w-full mt-6 h-1 bg-gradient-to-r from-[#FE277E] to-[#3B556D] rounded-full" />
              )}

              {onClose && (
                <button
                  onClick={onClose}
                  className="mt-6 px-6 py-2 bg-[#FE277E] text-white rounded-lg font-medium hover:bg-[#E21D6D] transition-colors"
                >
                  {type === 'error' ? 'Réessayer' : 'Continuer'}
                </button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}