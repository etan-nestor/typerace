interface ThemeContent {
  [key: string]: string
}

interface CategoryContent {
  themes: ThemeContent
}

export interface TypingContent {
  [key: string]: CategoryContent
}

export const typingContent : TypingContent = {
    technologie: {
      themes: {
        ia: "L'intelligence artificielle révolutionne notre façon de travailler. Les algorithmes de machine learning permettent désormais des prédictions précises dans divers domaines comme la santé, la finance et les transports.",
        blockchain: "La technologie blockchain offre une décentralisation sécurisée des données. Les smart contracts automatisent les accords sans intermédiaire, réduisant les coûts et augmentant la transparence.",
        cloud: "Le cloud computing a transformé l'accès aux ressources informatiques. Les solutions SaaS, PaaS et IaaS permettent une scalabilité sans précédent pour les entreprises."
      }
    },
    culture: {
      themes: {
        cinema: "Le cinéma contemporain mélange souvent techniques numériques et récits traditionnels. Les festivals internationaux restent des vitrines essentielles pour les nouveaux talents.",
        litterature: "La littérature numérique émerge avec des œuvres interactives exploitant les possibilités du web. Cependant, le livre papier conserve une place importante chez les lecteurs.",
        musique: "L'industrie musicale a radicalement changé avec le streaming. Les algorithmes de recommandation influencent désormais les tendances et les découvertes artistiques."
      }
    },
    science: {
      themes: {
        astronomie: "Les télescopes spatiaux comme James Webb révèlent des images inédites de l'univers. L'étude des exoplanètes habitables est un domaine en pleine expansion.",
        biologie: "Les progrès en biologie moléculaire permettent des avancées spectaculaires en médecine. La thérapie génique offre des espoirs pour des maladies jusqu'alors incurables.",
        environnement: "Les recherches sur le changement climatique montrent l'urgence d'agir. Les solutions basées sur la nature gagnent en importance pour la préservation des écosystèmes."
      }
    }
  }
  
  export const timerOptions = [
    { value: 30, label: '30 secondes' },
    { value: 60, label: '1 minute' },
    { value: 120, label: '2 minutes' },
    { value: 180, label: '3 minutes' },
    { value: 0, label: 'Aucun minuteur' }
  ]