// types/user.ts
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