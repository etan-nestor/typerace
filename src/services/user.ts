import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import { app } from "@/lib/cf.firebase";

const db = getFirestore(app);

export const UserService = {
  async getUserData(uid: string) {
    const docRef = doc(db, "TR_Users", uid);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? docSnap.data() : null;
  },

  async updateUserStats(uid: string, newStats: {
    wpm?: number;
    accuracy?: number;
    points?: number;
    competitionsWon?: number;
    testsCompleted?: number;
  }) {
    const userRef = doc(db, "TR_Users", uid);
    await updateDoc(userRef, {
      'stats': newStats,
      'lastLogin': new Date()
    });
  },

  async updatePreferences(uid: string, preferences: {
    theme?: 'light' | 'dark' | 'system';
    keyboardLayout?: string;
    difficulty?: 'easy' | 'medium' | 'hard';
  }) {
    const userRef = doc(db, "TR_Users", uid);
    await updateDoc(userRef, {
      'preferences': preferences
    });
  }
};