'use client'

import { motion } from 'framer-motion'

// Predefined positions/sizes or use a seeded random generator
const generateCircleProps = (index: number) => {
  // A simple deterministic "random" based on index
  const pseudoRandom = (seed: number) => {
    const x = Math.sin(seed * 100) * 10000
    return x - Math.floor(x)
  }
  
  return {
    width: pseudoRandom(index) * 300 + 100,
    height: pseudoRandom(index + 1) * 300 + 100,
    left: `${pseudoRandom(index + 2) * 100}%`,
    top: `${pseudoRandom(index + 3) * 100}%`,
    x: pseudoRandom(index + 4) * 100 - 50,
    duration: pseudoRandom(index + 5) * 20 + 10,
    delay: pseudoRandom(index + 6) * 5
  }
}

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#3B556D]/10 to-[#FE277E]/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      
      {[...Array(12)].map((_, i) => {
        const props = generateCircleProps(i)
        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#FE277E] opacity-10"
            style={{
              width: props.width,
              height: props.height,
              left: props.left,
              top: props.top,
            }}
            initial={{ y: 100, opacity: 0 }}
            animate={{ 
              y: 0,
              opacity: [0, 0.1, 0],
              x: [0, props.x],
            }}
            transition={{
              duration: props.duration,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: props.delay
            }}
          />
        )
      })}
    </div>
  )
}

export default AnimatedBackground