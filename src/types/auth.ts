export type AuthModalState = {
    type: 'loading' | 'success' | 'error'
    isOpen: boolean
    title: string
    message?: string
  }
  
  export type AuthResponse = {
    success: boolean
    user?: any // Remplacez par votre type User si disponible
    error?: string
  }