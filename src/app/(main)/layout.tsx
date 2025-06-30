'use client'

import { motion } from 'framer-motion'
import { Home, Keyboard, Swords, Trophy, User, Settings, LogOut, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  const navItems = [
    { href: '/dashboard', icon: Home, label: 'Accueil' },
    { href: '/typing-test', icon: Keyboard, label: 'Typing Test' },
    { href: '/duel', icon: Swords, label: 'Duel' },
    { href: '/competitions', icon: Trophy, label: 'Compétitions' },
    { href: '/profile', icon: User, label: 'Profil' },
    { href: '/settings', icon: Settings, label: 'Paramètres' },
  ]

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed)
  }

  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Sidebar élégante */}
      <motion.aside
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className={`hidden md:flex flex-col ${isSidebarCollapsed ? 'w-20' : 'w-64'} border-r border-white/10 bg-white/5 backdrop-blur-lg transition-all duration-300 relative`}
      >
        <div className={`p-6 border-b border-white/10 ${isSidebarCollapsed ? 'flex justify-center' : ''}`}>
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#FE277E] rounded-full flex items-center justify-center">
              <Keyboard className="text-white" size={18} />
            </div>
            {!isSidebarCollapsed && <span className="text-lg font-semibold">TypeRace</span>}
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${pathname === item.href ? 'bg-[#FE277E]/10 text-[#FE277E]' : 'hover:bg-white/5'} ${isSidebarCollapsed ? 'justify-center' : ''}`}
              title={isSidebarCollapsed ? item.label : undefined}
            >
              <item.icon size={18} />
              {!isSidebarCollapsed && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>

        <div className={`p-4 border-t border-white/10 ${isSidebarCollapsed ? 'flex justify-center' : ''}`}>
          <button 
            className={`flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 transition-colors w-full ${isSidebarCollapsed ? 'justify-center' : ''}`}
            title={isSidebarCollapsed ? "Déconnexion" : undefined}
          >
            <LogOut size={18} />
            {!isSidebarCollapsed && <span>Déconnexion</span>}
          </button>
        </div>

        {/* Bouton de réduction/extension */}
        <button
          onClick={toggleSidebar}
          className="absolute right-1.5 top-6 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full p-1 hover:bg-[#FE277E]/20 transition-colors"
          aria-label={isSidebarCollapsed ? "Étendre le menu" : "Réduire le menu"}
        >
          {isSidebarCollapsed ? (
            <ChevronRight className="text-white" size={18} />
          ) : (
            <ChevronLeft className="text-white" size={18} />
          )}
        </button>
      </motion.aside>

      {/* Contenu principal */}
      <div className="flex-1 flex flex-col overflow-auto">
        {/* Header mobile */}
        <header className="md:hidden sticky top-0 z-10 border-b border-white/10 bg-white/5 backdrop-blur-lg">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <Link href="/dashboard" className="text-lg font-semibold">TypeRace</Link>
              {/* Menu mobile à implémenter */}
            </div>
          </div>
        </header>

        {/* Contenu des pages */}
        <main className="flex-1 relative">
          {children}
        </main>
      </div>
    </div>
  )
}