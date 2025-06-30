import { motion } from 'framer-motion'
import { Zap, CheckCircle, XCircle } from 'lucide-react'

export const StatsCards = ({ wpm, accuracy, errors }: { wpm: number; accuracy: number; errors: number }) => {
  return (
    <div className="flex flex-col gap-3">
      {/* Carte Vitesse */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-gradient-to-br from-[#FE277E]/10 to-[#FE277E]/5 border border-[#FE277E]/20 rounded-xl p-4 backdrop-blur-sm shadow-lg"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 bg-[#FE277E]/20 rounded-lg">
            <Zap className="text-[#FE277E]" size={18} />
          </div>
          <div>
            <div className="text-xs text-gray-400 font-medium">Vitesse</div>
            <div className="font-bold text-xl">{wpm} MPM</div>
          </div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(wpm / 2, 100)}%` }}
            className="h-1 bg-[#FE277E] rounded-full ml-auto mt-2"
          />
        </div>
      </motion.div>

      {/* Carte Précision */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 rounded-xl p-4 backdrop-blur-sm shadow-lg"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 bg-green-500/20 rounded-lg">
            <CheckCircle className="text-green-400" size={18} />
          </div>
          <div>
            <div className="text-xs text-gray-400 font-medium">Précision</div>
            <div className="font-bold text-xl">{accuracy}%</div>
          </div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${accuracy}%` }}
            className="h-1 bg-green-400 rounded-full ml-auto mt-2"
          />
        </div>
      </motion.div>

      {/* Carte Erreurs */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-br from-red-500/10 to-red-500/5 border border-red-500/20 rounded-xl p-4 backdrop-blur-sm shadow-lg"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 bg-red-500/20 rounded-lg">
            <XCircle className="text-red-400" size={18} />
          </div>
          <div>
            <div className="text-xs text-gray-400 font-medium">Erreurs</div>
            <div className="font-bold text-xl">{errors}</div>
          </div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(errors * 5, 100)}%` }}
            className="h-1 bg-red-400 rounded-full ml-auto mt-2"
          />
        </div>
      </motion.div>
    </div>
  )
}