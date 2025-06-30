import { motion } from 'framer-motion'
import { RotateCw, Clock } from 'lucide-react'
import { timerOptions } from '@/lib/data'

export const Controls = ({
  useTimer,
  timer,
  onTimerChange,
  onRestart
}: {
  useTimer: boolean
  timer: number
  onTimerChange: (value: number) => void
  onRestart: () => void
}) => {
  return (
    <div className="flex flex-col gap-4 items-end">
      {useTimer && (
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-gradient-to-br from-[#3B556D] to-[#2C3E50] text-white p-3 rounded-xl flex items-center gap-2 shadow-lg border border-white/10"
        >
          <Clock className="text-white" size={20} />
          <span className="font-mono text-xl font-bold">{timer}s</span>
        </motion.div>
      )}

      <div className="bg-white/5 border border-white/15 rounded-xl p-3 backdrop-blur-sm shadow-lg">
        <label htmlFor="timer" className="block text-xs text-gray-400 mb-1">Minuteur</label>
        <select
          id="timer"
          value={timer}
          onChange={(e) => onTimerChange(Number(e.target.value))}
          className="w-full bg-transparent text-sm focus:outline-none"
        >
          {timerOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <motion.button
        onClick={onRestart}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-gradient-to-br from-[#FE277E] to-[#E21D6D] text-white py-3 px-6 rounded-xl flex items-center gap-2 shadow-lg border border-white/10"
      >
        <RotateCw size={18} />
        <span className="text-sm font-semibold">Recommencer</span>
      </motion.button>
    </div>
  )
}