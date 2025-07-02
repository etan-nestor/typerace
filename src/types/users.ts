// types/index.ts
export interface TR_User {
  id: string;
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
    friends: string[];
    blockedUsers: string[];
    friendRequests: string[];
  };
}

export interface TR_Duel {
  id: string;
  player1: string;
  player2: string;
  status: 'pending' | 'in-progress' | 'completed' | 'declined';
  winner?: string;
  wpm1: number;
  wpm2: number;
  accuracy1: number;
  accuracy2: number;
  textId: string;
  timeLimit: number;
  createdAt: Date;
  startedAt?: Date;
  completedAt?: Date;
  isPublic: boolean;
  // Ajout pour le suivi des progrès en temps réel
  progress1?: number;
  progress2?: number;
  errors1?: number;
  errors2?: number;
}

export interface TR_Competition {
  id: string;
  name: string;
  description?: string;
  creator: string;
  participants: string[];
  status: 'upcoming' | 'in-progress' | 'completed' | 'cancelled';
  startTime: Date;
  endTime: Date;
  textId: string;
  results: {
    userId: string;
    wpm: number;
    accuracy: number;
    position: number;
    pointsEarned?: number;
  }[];
  settings: {
    isPublic: boolean;
    maxParticipants?: number;
    minWpm?: number;
    requireApproval?: boolean;
    prizePool?: number;
  };
  // Nouveaux champs
  coverImage?: string;
  categories?: string[];
  tags?: string[];
}

export interface TR_Text {
  id: string;
  content: string;
  title?: string;
  author?: string;
  source?: string;
  category: 'technology' | 'literature' | 'news' | 'science' | 'quotes' | 'code';
  theme: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'expert';
  language: 'fr' | 'en' | 'es' | 'de';
  createdAt: Date;
  createdBy: string;
  usedCount: number;
  // Nouveaux champs
  wordCount: number;
  characterCount: number;
  averageWpm?: number;
  averageAccuracy?: number;
  isVerified?: boolean;
}

export interface TR_Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  condition: {
    type: 'wpm' | 'accuracy' | 'testsCompleted' | 'duelsWon' | 'competitionsWon' | 'friendsCount' | 'streakDays';
    threshold: number;
    // Pour les achievements progressifs
    incremental?: boolean;
  };
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
  xpReward: number;
  // Nouveaux champs
  category?: 'speed' | 'accuracy' | 'social' | 'competition' | 'misc';
  hidden?: boolean;
  multipleUnlocks?: boolean;
}

export interface TR_UserAchievement {
  id: string;
  unlockedAt: Date;
  progress?: number;
  // Nouveaux champs
  shared?: boolean;
  xpEarned?: number;
}

export interface TR_Notification {
  id: string;
  userId: string;
  type: 'friend-request' | 'duel-invitation' | 'competition-invitation' | 'achievement' | 'system' | 'message' | 'result';
  title: string;
  message: string;
  isRead: boolean;
  createdAt: Date;
  relatedId?: string;
  actionUrl?: string;
  // Nouveaux champs
  icon?: string;
  priority?: 'low' | 'medium' | 'high';
  expiresAt?: Date;
}

export interface TR_LeaderboardEntry {
  userId: string;
  wpm: number;
  accuracy: number;
  rank: number;
  lastUpdated: Date;
  // Nouveaux champs
  avatar?: string;
  fullName?: string;
  progress?: number; // Pour le classement hebdomadaire/mensuel
  previousRank?: number;
}

// Types supplémentaires pour des fonctionnalités étendues
export interface TR_FriendRequest {
  id: string;
  fromUserId: string;
  toUserId: string;
  status: 'pending' | 'accepted' | 'declined';
  createdAt: Date;
  resolvedAt?: Date;
  message?: string;
}

export interface TR_Message {
  id: string;
  conversationId: string;
  senderId: string;
  content: string;
  sentAt: Date;
  readAt?: Date;
  // Pour les messages système
  type?: 'text' | 'system' | 'achievement' | 'duel';
}

export interface TR_UserSession {
  id: string;
  userId: string;
  startedAt: Date;
  endedAt?: Date;
  testsCompleted: number;
  averageWpm: number;
  averageAccuracy: number;
  // Pour le suivi des appareils
  device?: {
    type: 'desktop' | 'mobile' | 'tablet';
    os?: string;
    browser?: string;
  };
  ipAddress?: string;
}

export interface TR_UserSettings {
  userId: string;
  typing: {
    caretStyle: 'block' | 'underline' | 'bar';
    soundVolume: number;
    showLiveWpm: boolean;
    showLiveAccuracy: boolean;
    highlightErrors: boolean;
    fontSize: 'small' | 'medium' | 'large';
  };
  appearance: {
    theme: 'light' | 'dark' | 'system';
    customTheme?: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
    };
    animations: boolean;
    reduceMotion: boolean;
  };
  notifications: {
    email: {
      achievements: boolean;
      competitions: boolean;
      friendRequests: boolean;
    };
    push: {
      duels: boolean;
      messages: boolean;
    };
  };
  lastUpdated: Date;
}

// Types utilitaires
export type ThemePreference = TR_User['preferences']['theme'];
export type KeyboardLayout = TR_User['preferences']['keyboardLayout'];
export type DifficultyLevel = TR_User['preferences']['difficulty'];
export type ProfileVisibility = TR_User['privacy']['profileVisibility'];
export type AchievementRarity = TR_Achievement['rarity'];