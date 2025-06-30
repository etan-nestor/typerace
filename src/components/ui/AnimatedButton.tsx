'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedButtonProps {
  children: ReactNode
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'sm' | 'default' | 'lg'
  className?: string
  onClick?: () => void
}

const AnimatedButton = ({ 
  children, 
  variant = 'default', 
  size = 'default', 
  className = '',
  onClick
}: AnimatedButtonProps) => {
  const baseClasses = 'rounded-full font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FE277E] focus-visible:ring-offset-2'
  
  const sizeClasses = {
    sm: 'px-4 py-1.5 text-sm',
    default: 'px-6 py-2',
    lg: 'px-8 py-4 text-lg'
  }[size]
  
  const variantClasses = {
    default: 'bg-gradient-to-r from-[#FE277E] to-[#3B556D] text-white shadow-lg hover:shadow-[#FE277E]/40',
    outline: 'border border-[#3B556D] text-[#3B556D] hover:bg-[#3B556D]/10',
    ghost: 'text-[#3B556D] hover:bg-[#3B556D]/10'
  }[variant]
  
  return (
    <motion.button
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  )
}

export default AnimatedButton