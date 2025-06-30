'use client'

import { motion } from 'framer-motion'

export default function StatsCard({ icon, title, value, description, delay = 0 }: { 
  icon: React.ReactNode, 
  title: string, 
  value: string | number, 
  description: string,
  delay?: number 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm"
    >
      <div className="flex items-center space-x-4">
        <div className="p-3 rounded-lg bg-white/5">
          {icon}
        </div>
        <div>
          <p className="text-sm text-gray-400">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
          <p className="text-xs text-gray-500">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}