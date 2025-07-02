// context/AuthContext.tsx
'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { getAuth, User, onAuthStateChanged } from 'firebase/auth'
import { app, db } from '@/lib/cf.firebase'
import { TR_User } from '@/types/users'
import { doc, getDoc } from 'firebase/firestore'

interface AuthContextType {
  currentUser: User | null
  userData: TR_User | null
  loading: boolean
}

const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  userData: null,
  loading: true
})

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [userData, setUserData] = useState<TR_User | null>(null)
  const [loading, setLoading] = useState(true)
  const auth = getAuth(app)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user)
      
      if (user) {
        // Chargez les données supplémentaires de l'utilisateur depuis Firestore
        try {
          const userDoc = await getDoc(doc(db, "TR_Users", user.uid))
          if (userDoc.exists()) {
            setUserData(userDoc.data() as TR_User)
          }
        } catch (error) {
          console.error("Error loading user data:", error)
        }
      } else {
        setUserData(null)
      }
      
      setLoading(false)
    })

    return unsubscribe
  }, [auth])

  const value = {
    currentUser,
    userData,
    loading
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}