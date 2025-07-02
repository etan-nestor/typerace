import { AnimatePresence, motion } from 'framer-motion'

export const KeyDisplay = ({ lastPressedKey }: { lastPressedKey: string | null }) => {
  return (
    <div className="flex justify-center mt-12">
      <AnimatePresence>
        {lastPressedKey && (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.5, opacity: 0 }}
            className="bg-gradient-to-br from-[#FE277E] to-[#E21D6D] text-white text-3xl font-bold w-20 h-20 rounded-xl flex items-center justify-center shadow-lg border-2 border-white/20"
          >
            {lastPressedKey}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}