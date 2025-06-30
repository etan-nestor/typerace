'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CategoryCard({ category, delay }: { category: any, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.03 }}
      className="bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm overflow-hidden"
    >
      <Link href={`/typing-test/category/${category.id}`}>
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-3">{category.name}</h3>
          <div className="flex flex-wrap gap-2">
            {category.topics.map((topic: string, i: number) => (
              <span 
                key={i}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#FE277E]/10 text-[#FE277E]"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}