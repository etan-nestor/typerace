'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface GlassCardProps {
  children?: ReactNode
  className?: string
  icon?: ReactNode
  title?: string
  description?: string
  delay?: number
}

const GlassCard = ({ 
  children, 
  className = '', 
  icon, 
  title, 
  description, 
  delay = 0 
}: GlassCardProps) => {
  const content = icon || title || description ? (
    <div className="flex flex-col items-center text-center gap-3 p-6">
      {icon && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: delay + 0.1 }}
        >
          {icon}
        </motion.div>
      )}
      {title && (
        <motion.h3 
          className="text-xl font-semibold"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + 0.2 }}
        >
          {title}
        </motion.h3>
      )}
      {description && (
        <motion.p 
          className="text-muted-foreground text-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + 0.3 }}
        >
          {description}
        </motion.p>
      )}
    </div>
  ) : children

  return (
    <motion.div
      className={`rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-lg overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ y: -5 }}
    >
      {content}
    </motion.div>
  )
}

export default GlassCard