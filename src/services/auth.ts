// services/auth.ts
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "@/lib/cf.firebase";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { TR_User } from "@/types/users";

const auth = getAuth(app);
const db = getFirestore(app);

export const AuthService = {
  async register(email: string, password: string, fullName: string) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Création du document utilisateur dans TR_Users
      const newUser: TR_User = {
        id: user.uid,
        email: user.email || email,
        fullName,
        avatar: '',
        bio: '',
        createdAt: new Date(),
        lastLogin: new Date(),
        preferences: {
          theme: 'system',
          keyboardLayout: 'azerty',
          difficulty: 'medium',
          enableAnimations: true,
          keyboardSounds: true,
        },
        stats: {
          wpm: 0,
          accuracy: 0,
          testsCompleted: 0,
          points: 0,
          rank: 'Bronze',
          competitionsWon: 0,
          duelsWon: 0,
          duelsLost: 0,
          bestWpm: 0,
          bestAccuracy: 0,
        },
        privacy: {
          profileVisibility: 'public',
          saveHistory: true,
        },
        social: {
          friends: [],
          blockedUsers: [],
          friendRequests: [],
        },
      };

      await setDoc(doc(db, "TR_Users", user.uid), newUser);

      return { success: true, user: newUser };
    } catch (error: any) {
      let errorMessage = "Une erreur est survenue";
      switch (error.code) {
        case "auth/email-already-in-use":
          errorMessage = "Cet email est déjà utilisé";
          break;
        case "auth/invalid-email":
          errorMessage = "Email invalide";
          break;
        case "auth/weak-password":
          errorMessage = "Le mot de passe doit contenir au moins 6 caractères";
          break;
      }
      return { success: false, error: errorMessage };
    }
  },

  async login(email: string, password: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
      // Mettre à jour lastLogin
      const user = userCredential.user;
      await setDoc(doc(db, "TR_Users", user.uid), {
        lastLogin: new Date()
      }, { merge: true });

      return { success: true, user: userCredential.user };
    } catch (error: any) {
      let errorMessage = "Une erreur est survenue";
      switch (error.code) {
        case "auth/user-not-found":
          errorMessage = "Utilisateur non trouvé";
          break;
        case "auth/wrong-password":
          errorMessage = "Mot de passe incorrect";
          break;
        case "auth/invalid-email":
          errorMessage = "Email invalide";
          break;
      }
      return { success: false, error: errorMessage };
    }
  }
};