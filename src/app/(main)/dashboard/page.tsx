// app/dashboard/page.tsx
'use client'

import StatsCard from '@/components/Dashboard/StatsCard'
import { motion } from 'framer-motion'
import { Clock, Swords, Users, Trophy, Zap, History } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { DashboardService } from '@/services/dashboard'
import { getAuth } from 'firebase/auth'
import { AuthModal } from '@/components/ui/AuthModal'

export default function DashboardPage() {
  const [userStats, setUserStats] = useState({
    wpm: 0,
    accuracy: 0,
    points: 0,
    rank: 'Bronze',
    competitionsWon: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const auth = getAuth();
        const userId = auth.currentUser?.uid;
        
        if (!userId) {
          throw new Error("User not authenticated");
        }

        const stats = await DashboardService.getUserStats(userId);
        setUserStats({
          wpm: stats.bestWpm,
          accuracy: stats.bestAccuracy,
          points: stats.points,
          rank: stats.rank,
          competitionsWon: stats.competitionsWon
        });

        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <p>Chargement des données...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <AuthModal
          isOpen={true}
          type="error"
          title="Erreur"
          message={error}
          onClose={() => setError(null)}
        />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Section Statistiques */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
      >
        <StatsCard 
          icon={<Zap className="text-[#FE277E]" />}
          title="Vitesse" 
          value={`${userStats.wpm} MPM`}
          description="Meilleur score"
        />
        <StatsCard 
          icon={<Clock className="text-[#3B556D]" />}
          title="Précision" 
          value={`${userStats.accuracy}%`}
          description="Meilleur score"
        />
        <StatsCard 
          icon={<Trophy className="text-[#FE277E]" />}
          title="Points" 
          value={userStats.points}
          description={`Niveau ${userStats.rank}`}
        />
        <StatsCard 
          icon={<Users className="text-[#3B556D]" />}
          title="Victoires" 
          value={userStats.competitionsWon}
          description="Compétitions"
        />
      </motion.div>

      {/* Section Modes de jeu */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-2xl font-bold mb-6">Modes de jeu</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Carte Solo */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm"
          >
            <div className="flex items-center mb-4">
              <Clock className="text-[#3B556D] mr-3" size={24} />
              <h3 className="text-xl font-semibold">Solo</h3>
            </div>
            <p className="text-gray-400 mb-6">Entraînez-vous seul avec ou sans minuteur</p>
            <Link href="/typing-test/solo">
              <button className="w-full bg-[#FE277E] hover:bg-[#E21D6D] text-white py-2 px-4 rounded-lg transition-colors">
                Commencer
              </button>
            </Link>
          </motion.div>

          {/* Carte Duel */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm"
          >
            <div className="flex items-center mb-4">
              <Swords className="text-[#FE277E] mr-3" size={24} />
              <h3 className="text-xl font-semibold">Duel</h3>
            </div>
            <p className="text-gray-400 mb-4">Défiez un ami par email ou trouvez un adversaire</p>
            <div className="flex space-x-3">
              <Link href="/duel/challenge" className="flex-1">
                <button className="w-full bg-[#3B556D] hover:bg-[#2A3E50] text-white py-2 px-4 rounded-lg transition-colors text-sm">
                  Par email
                </button>
              </Link>
              <Link href="/duel/random" className="flex-1">
                <button className="w-full border border-[#FE277E] text-[#FE277E] hover:bg-[#FE277E]/10 py-2 px-4 rounded-lg transition-colors text-sm">
                  Aléatoire
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Carte Compétition */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm md:col-span-2"
          >
            <div className="flex items-center mb-4">
              <Trophy className="text-[#FE277E] mr-3" size={24} />
              <h3 className="text-xl font-semibold">Compétition</h3>
            </div>
            <p className="text-gray-400 mb-4">Participez ou créez une compétition de groupe</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <Link href="/competitions/join">
                <button className="w-full bg-[#3B556D] hover:bg-[#2A3E50] text-white py-2 px-4 rounded-lg transition-colors text-sm">
                  Rejoindre
                </button>
              </Link>
              <Link href="/competitions/create">
                <button className="w-full border border-[#FE277E] text-[#FE277E] hover:bg-[#FE277E]/10 py-2 px-4 rounded-lg transition-colors text-sm">
                  Créer
                </button>
              </Link>
              <Link href="/competitions/history">
                <button className="w-full flex items-center justify-center gap-2 text-gray-400 hover:text-[#FE277E] py-2 px-4 rounded-lg transition-colors text-sm">
                  <History size={16} /> Historique
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}