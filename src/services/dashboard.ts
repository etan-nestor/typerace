// services/dashboard.ts
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc, collection, query, where, getDocs, orderBy, limit } from "firebase/firestore";
import { app } from "@/lib/cf.firebase";
import { TR_User, TR_Duel, TR_Competition, TR_Achievement, TR_UserAchievement, TR_Notification, TR_LeaderboardEntry } from "@/types/users";

const db = getFirestore(app);

export const DashboardService = {
  async getUserStats(userId: string): Promise<TR_User['stats']> {
    const userDoc = await getDoc(doc(db, "TR_Users", userId));
    if (userDoc.exists()) {
      const userData = userDoc.data() as TR_User;
      return userData.stats;
    }
    throw new Error("User not found");
  },

  async getUserProfile(userId: string): Promise<TR_User> {
    const userDoc = await getDoc(doc(db, "TR_Users", userId));
    if (userDoc.exists()) {
      return userDoc.data() as TR_User;
    }
    throw new Error("User not found");
  },

  async getActiveDuels(userId: string): Promise<TR_Duel[]> {
    const q = query(
      collection(db, "TR_Duels"),
      where("status", "in", ["pending", "in-progress"]),
      where("player1", "==", userId)
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as TR_Duel));
  },

  async getRecentCompetitions(userId: string): Promise<TR_Competition[]> {
    const q = query(
      collection(db, "TR_Competitions"),
      where("participants", "array-contains", userId),
      orderBy("startTime", "desc"),
      limit(3)
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as TR_Competition));
  },

  async getUnlockedAchievements(userId: string): Promise<(TR_Achievement & TR_UserAchievement)[]> {
    const achievementsSnapshot = await getDocs(collection(db, "TR_Achievements"));
    const userAchievementsSnapshot = await getDocs(
      collection(db, "TR_Users", userId, "TR_UserAchievements")
    );

    const achievements = achievementsSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as TR_Achievement[];

    const userAchievements = userAchievementsSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as TR_UserAchievement[];

    return achievements
      .filter(a => userAchievements.some(ua => ua.id === a.id))
      .map(a => ({
        ...a,
        ...userAchievements.find(ua => ua.id === a.id)!
      }));
  },

  async getUnreadNotifications(userId: string): Promise<TR_Notification[]> {
    const q = query(
      collection(db, "TR_Notifications"),
      where("userId", "==", userId),
      where("isRead", "==", false),
      orderBy("createdAt", "desc"),
      limit(5)
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as TR_Notification));
  },

  async getLeaderboard(limitCount = 10): Promise<TR_LeaderboardEntry[]> {
    const q = query(
      collection(db, "TR_Leaderboard"),
      orderBy("rank", "asc"),
      limit(limitCount)
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          userId: data.userId,
          wpm: data.wpm,
          accuracy: data.accuracy,
          rank: data.rank,
          lastUpdated: data.lastUpdated?.toDate(), // Conversion de Firestore Timestamp en Date si nécessaire
          // Champs optionnels
          avatar: data.avatar,
          fullName: data.fullName,
          progress: data.progress,
          previousRank: data.previousRank
        } as TR_LeaderboardEntry;
      });
  },

  async getCurrentUserPosition(userId: string): Promise<number> {
    const userEntry = await getDoc(doc(db, "TR_Leaderboard", userId));
    if (userEntry.exists()) {
      return (userEntry.data() as TR_LeaderboardEntry).rank;
    }
    return 0;
  }
};