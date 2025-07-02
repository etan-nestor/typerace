import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "@/lib/cf.firebase";

const auth = getAuth(app);

export const AuthService = {
  async register(email: string, password: string, fullname: string) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Vous pouvez ajouter le nom complet à Firestore ici si besoin
      return { success: true, user: userCredential.user };
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