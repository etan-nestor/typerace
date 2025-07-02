This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Structure DB

voici la structure optimisée pour Firestore avec toutes les collections nécessaires :

1. Collection Principale : TR_Users
typescript
interface TR_User {
  id: string; // ID Firebase Auth
  email: string;
  fullName: string;
  avatar?: string;
  bio?: string;
  createdAt: Date;
  lastLogin: Date;
  preferences: {
    theme: 'light' | 'dark' | 'system';
    keyboardLayout: 'azerty' | 'qwerty' | 'bépo';
    difficulty: 'easy' | 'medium' | 'hard';
    enableAnimations: boolean;
    keyboardSounds: boolean;
  };
  stats: {
    wpm: number;
    accuracy: number;
    testsCompleted: number;
    points: number;
    rank: 'Bronze' | 'Silver' | 'Gold' | 'Platinum' | 'Diamond';
    competitionsWon: number;
    duelsWon: number;
    duelsLost: number;
    bestWpm: number;
    bestAccuracy: number;
  };
  privacy: {
    profileVisibility: 'public' | 'friends' | 'private';
    saveHistory: boolean;
  };
  social: {
    friends: string[]; // IDs des amis
    blockedUsers: string[];
    friendRequests: string[];
  };
}
2. Collection : TR_Duels
typescript
interface TR_Duel {
  id: string;
  player1: string; // User ID
  player2: string; // User ID
  status: 'pending' | 'in-progress' | 'completed' | 'declined';
  winner?: string; // User ID
  wpm1: number;
  wpm2: number;
  accuracy1: number;
  accuracy2: number;
  textId: string; // Référence à TR_Texts
  timeLimit: number; // en secondes
  createdAt: Date;
  startedAt?: Date;
  completedAt?: Date;
  isPublic: boolean;
}
3. Collection : TR_Competitions
typescript
interface TR_Competition {
  id: string;
  name: string;
  creator: string; // User ID
  participants: string[]; // User IDs
  status: 'upcoming' | 'in-progress' | 'completed';
  startTime: Date;
  endTime: Date;
  textId: string; // Référence à TR_Texts
  results: {
    userId: string;
    wpm: number;
    accuracy: number;
    position: number;
  }[];
  settings: {
    isPublic: boolean;
    maxParticipants?: number;
    minWpm?: number;
  };
}
4. Collection : TR_Texts
typescript
interface TR_Text {
  id: string;
  content: string;
  category: 'technology' | 'literature' | 'news' | 'science';
  theme: string;
  difficulty: 'easy' | 'medium' | 'hard';
  language: 'fr' | 'en';
  createdAt: Date;
  createdBy: string; // User ID ou 'system'
  usedCount: number;
}
5. Collection : TR_Achievements
typescript
interface TR_Achievement {
  id: string;
  name: string;
  description: string;
  icon: string; // Nom de l'icône Lucide
  condition: {
    type: 'wpm' | 'accuracy' | 'testsCompleted' | 'duelsWon' | 'competitionsWon';
    threshold: number;
  };
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
}
6. Sous-collection : TR_UserAchievements
typescript
// Sous-collection de TR_Users
interface TR_UserAchievement {
  id: string; // Achievement ID
  unlockedAt: Date;
  progress?: number; // Pour les achievements progressifs
}
7. Collection : TR_Notifications
typescript
interface TR_Notification {
  id: string;
  userId: string; // Destinataire
  type: 'friend-request' | 'duel-invitation' | 'competition-invitation' | 'achievement' | 'system';
  title: string;
  message: string;
  isRead: boolean;
  createdAt: Date;
  relatedId?: string; // ID du duel, compétition, etc.
  actionUrl?: string; // Lien pour l'action
}
8. Collection : TR_Leaderboard (Optimisation pour les classements)
typescript
interface TR_LeaderboardEntry {
  userId: string;
  wpm: number;
  accuracy: number;
  rank: number;
  lastUpdated: Date;
}


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
