import { useState } from 'react'
import { typingContent } from '@/lib/data'

export const Selectors = ({ 
  selectedCategory,
  selectedTheme,
  onCategoryChange,
  onThemeChange
}: {
  selectedCategory: string
  selectedTheme: string
  onCategoryChange: (category: string) => void
  onThemeChange: (theme: string) => void
}) => {
  const categories = Object.keys(typingContent)
  const themes = Object.keys(typingContent[selectedCategory as keyof typeof typingContent].themes)

  return (
    <div className="bg-white/5 border border-white/15 rounded-xl p-4 mb-4 backdrop-blur-sm shadow-lg">
      <div className="flex flex-wrap gap-4 justify-center">
        <div className="flex-1 min-w-[100px]">
          <label htmlFor="category" className="block text-sm text-gray-400 mb-1">Catégorie</label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full bg-pink/5 border border-white/15 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FE277E]/50"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1 min-w-[200px]">
          <label htmlFor="theme" className="block text-sm text-gray-400 mb-1">Thème</label>
          <select
            id="theme"
            value={selectedTheme}
            onChange={(e) => onThemeChange(e.target.value)}
            className="w-full bg-white/5 border border-white/15 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FE277E]/50"
          >
            {themes.map(theme => (
              <option key={theme} value={theme}>
                {theme.charAt(0).toUpperCase() + theme.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}