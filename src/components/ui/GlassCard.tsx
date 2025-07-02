'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface GlassCardProps {
  children?: ReactNode
  className?: string
  icon?: ReactNode
  title?: string
  description?: string
  delay?: number
  clickable?: boolean
  compact?: boolean
  hoverEffect?: boolean
}

const GlassCard = ({ 
  children, 
  className = '', 
  icon, 
  title, 
  description, 
  delay = 0,
  clickable = false,
  compact = false,
  hoverEffect = true
}: GlassCardProps) => {
  const content = icon || title || description ? (
    <div className={cn(
      "flex flex-col items-center text-center gap-3",
      compact ? "p-4" : "p-6"
    )}>
      {icon && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: delay + 0.1 }}
          className={cn(
            "flex items-center justify-center",
            compact ? "w-8 h-8" : "w-10 h-10"
          )}
        >
          {icon}
        </motion.div>
      )}
      {title && (
        <motion.h3 
          className={cn(
            "font-semibold",
            compact ? "text-lg" : "text-xl"
          )}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + 0.2 }}
        >
          {title}
        </motion.h3>
      )}
      {description && (
        <motion.p 
          className={cn(
            "text-muted-foreground",
            compact ? "text-xs" : "text-sm"
          )}
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
      className={cn(
        `rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-lg overflow-hidden transition-all`,
        clickable && "cursor-pointer hover:bg-white/10",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={hoverEffect ? { y: -5, scale: 1.02 } : {}}
      whileTap={clickable ? { scale: 0.98 } : {}}
    >
      {content}
    </motion.div>
  )
}

export default GlassCard