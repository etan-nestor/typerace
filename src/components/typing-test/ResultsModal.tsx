import { motion, AnimatePresence } from 'framer-motion'
import { Trophy, BarChart2, Award } from 'lucide-react'

export const ResultsModal = ({
  isOpen,
  wpm,
  accuracy,
  onRestart
}: {
  isOpen: boolean
  wpm: number
  accuracy: number
  onRestart: () => void
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 p-4"
        >
          <div className="bg-gradient-to-br from-[#1E1E2E] to-[#2A2A3A] border-2 border-white/10 rounded-2xl p-6 max-w-md w-full shadow-2xl">
            <div className="text-center mb-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="inline-block mb-3"
              >
                <Trophy className="text-yellow-400" size={48} />
              </motion.div>
              <h3 className="text-2xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-[#FE277E] to-[#E21D6D]">
                Test Terminé !
              </h3>
              <p className="text-gray-300 text-sm">Vos résultats sont impressionnants</p>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-white/5 rounded-lg p-3 text-center border border-white/10">
                <BarChart2 className="text-[#FE277E] mx-auto mb-1" size={20} />
                <div className="text-xs text-gray-400">Vitesse</div>
                <div className="text-xl font-bold">{wpm} MPM</div>
              </div>
              <div className="bg-white/5 rounded-lg p-3 text-center border border-white/10">
                <Award className="text-green-400 mx-auto mb-1" size={20} />
                <div className="text-xs text-gray-400">Précision</div>
                <div className="text-xl font-bold">{accuracy}%</div>
              </div>
            </div>

            <motion.button
              onClick={onRestart}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-gradient-to-r from-[#FE277E] to-[#E21D6D] text-white py-2 rounded-lg font-semibold text-sm shadow-lg border border-white/20"
            >
              Nouveau Test
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}