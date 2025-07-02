
import { db } from '@/lib/cf.firebase';
import { getFirestore, collection, doc, setDoc, addDoc } from 'firebase/firestore';


// Fonction principale
async function initializeFirestore() {
  try {
    console.log('Début de l\'initialisation de Firestore...');

    // 1. Création des utilisateurs exemple
    console.log('Création des utilisateurs exemple...');
    const users = [
      {
        id: 'user1',
        email: 'alice@typerace.com',
        fullName: 'Alice Dupont',
        bio: 'Passionnée de dactylographie depuis 5 ans',
        createdAt: new Date(),
        lastLogin: new Date(),
        preferences: {
          theme: 'dark',
          keyboardLayout: 'azerty',
          difficulty: 'medium',
          enableAnimations: true,
          keyboardSounds: true
        },
        stats: {
          wpm: 85,
          accuracy: 92,
          testsCompleted: 124,
          points: 1250,
          rank: 'Gold',
          competitionsWon: 8,
          duelsWon: 15,
          duelsLost: 5,
          bestWpm: 128,
          bestAccuracy: 98
        },
        privacy: {
          profileVisibility: 'public',
          saveHistory: true
        },
        social: {
          friends: ['user2', 'user3'],
          blockedUsers: [],
          friendRequests: []
        }
      },
      {
        id: 'user2',
        email: 'bob@typerace.com',
        fullName: 'Bob Martin',
        bio: 'Développeur et amateur de compétitions',
        createdAt: new Date(),
        lastLogin: new Date(),
        preferences: {
          theme: 'system',
          keyboardLayout: 'qwerty',
          difficulty: 'hard',
          enableAnimations: true,
          keyboardSounds: false
        },
        stats: {
          wpm: 112,
          accuracy: 88,
          testsCompleted: 256,
          points: 2100,
          rank: 'Platinum',
          competitionsWon: 15,
          duelsWon: 32,
          duelsLost: 10,
          bestWpm: 142,
          bestAccuracy: 95
        },
        privacy: {
          profileVisibility: 'friends',
          saveHistory: true
        },
        social: {
          friends: ['user1'],
          blockedUsers: [],
          friendRequests: []
        }
      },
      {
        id: 'user3',
        email: 'clara@typerace.com',
        fullName: 'Clara Leroy',
        bio: 'Nouvelle sur TypeRace mais motivée !',
        createdAt: new Date(),
        lastLogin: new Date(),
        preferences: {
          theme: 'light',
          keyboardLayout: 'azerty',
          difficulty: 'easy',
          enableAnimations: false,
          keyboardSounds: true
        },
        stats: {
          wpm: 65,
          accuracy: 85,
          testsCompleted: 42,
          points: 450,
          rank: 'Silver',
          competitionsWon: 1,
          duelsWon: 3,
          duelsLost: 7,
          bestWpm: 78,
          bestAccuracy: 90
        },
        privacy: {
          profileVisibility: 'private',
          saveHistory: false
        },
        social: {
          friends: ['user1'],
          blockedUsers: [],
          friendRequests: []
        }
      }
    ];

    for (const user of users) {
      await setDoc(doc(db, 'TR_Users', user.id), user);
      console.log(`Utilisateur créé: ${user.email}`);
    }

    // 2. Création des textes exemple
    console.log('Création des textes exemple...');
    const texts = [
      {
        id: 'text1',
        content: 'La programmation informatique est l\'art de créer des solutions logicielles pour résoudre des problèmes complexes.',
        category: 'technology',
        theme: 'programmation',
        difficulty: 'medium',
        language: 'fr',
        createdAt: new Date(),
        createdBy: 'system',
        usedCount: 24
      },
      {
        id: 'text2',
        content: 'Le soleil brillait haut dans le ciel alors que le héros de notre histoire marchait vers l\'inconnu, déterminé à trouver la vérité.',
        category: 'literature',
        theme: 'roman',
        difficulty: 'easy',
        language: 'fr',
        createdAt: new Date(),
        createdBy: 'system',
        usedCount: 18
      },
      {
        id: 'text3',
        content: 'Les dernières découvertes en astrophysique suggèrent l\'existence de multiples univers parallèles avec des lois physiques différentes.',
        category: 'science',
        theme: 'astrophysique',
        difficulty: 'hard',
        language: 'fr',
        createdAt: new Date(),
        createdBy: 'system',
        usedCount: 12
      }
    ];

    for (const text of texts) {
      await setDoc(doc(db, 'TR_Texts', text.id), text);
      console.log(`Texte créé: ${text.theme}`);
    }

    // 3. Création des duels exemple
    console.log('Création des duels exemple...');
    const duels = [
      {
        id: 'duel1',
        player1: 'user1',
        player2: 'user2',
        status: 'completed',
        winner: 'user2',
        wpm1: 92,
        wpm2: 112,
        accuracy1: 94,
        accuracy2: 89,
        textId: 'text1',
        timeLimit: 60,
        createdAt: new Date(Date.now() - 86400000), // Hier
        startedAt: new Date(Date.now() - 86400000 + 10000),
        completedAt: new Date(Date.now() - 86400000 + 70000),
        isPublic: true
      },
      {
        id: 'duel2',
        player1: 'user1',
        player2: 'user3',
        status: 'in-progress',
        wpm1: 78,
        wpm2: 65,
        accuracy1: 92,
        accuracy2: 85,
        textId: 'text2',
        timeLimit: 120,
        createdAt: new Date(),
        startedAt: new Date(),
        isPublic: false
      }
    ];

    for (const duel of duels) {
      await setDoc(doc(db, 'TR_Duels', duel.id), duel);
      console.log(`Duel créé: ${duel.id}`);
    }

    // 4. Création des compétitions exemple
    console.log('Création des compétitions exemple...');
    const competitions = [
      {
        id: 'compet1',
        name: 'Tournoi du weekend',
        creator: 'user2',
        participants: ['user1', 'user2', 'user3'],
        status: 'completed',
        startTime: new Date(Date.now() - 172800000), // Avant-hier
        endTime: new Date(Date.now() - 86400000), // Hier
        textId: 'text3',
        results: [
          { userId: 'user2', wpm: 118, accuracy: 87, position: 1 },
          { userId: 'user1', wpm: 102, accuracy: 92, position: 2 },
          { userId: 'user3', wpm: 88, accuracy: 85, position: 3 }
        ],
        settings: {
          isPublic: true,
          maxParticipants: 10
        }
      },
      {
        id: 'compet2',
        name: 'Challenge du vendredi',
        creator: 'user1',
        participants: ['user1', 'user3'],
        status: 'in-progress',
        startTime: new Date(),
        endTime: new Date(Date.now() + 3600000), // Dans 1 heure
        textId: 'text1',
        results: [],
        settings: {
          isPublic: false,
          minWpm: 70
        }
      }
    ];

    for (const competition of competitions) {
      await setDoc(doc(db, 'TR_Competitions', competition.id), competition);
      console.log(`Compétition créée: ${competition.name}`);
    }

    // 5. Création des achievements exemple
    console.log('Création des achievements exemple...');
    const achievements = [
      {
        id: 'achiev1',
        name: 'Premier pas',
        description: 'Compléter 10 tests de dactylographie',
        icon: 'zap',
        condition: {
          type: 'testsCompleted',
          threshold: 10
        },
        rarity: 'common'
      },
      {
        id: 'achiev2',
        name: 'Maître du clavier',
        description: 'Atteindre 120 MPM',
        icon: 'keyboard',
        condition: {
          type: 'wpm',
          threshold: 120
        },
        rarity: 'rare'
      },
      {
        id: 'achiev3',
        name: 'Champion des duels',
        description: 'Gagner 25 duels',
        icon: 'swords',
        condition: {
          type: 'duelsWon',
          threshold: 25
        },
        rarity: 'epic'
      }
    ];

    for (const achievement of achievements) {
      await setDoc(doc(db, 'TR_Achievements', achievement.id), achievement);
      console.log(`Achievement créé: ${achievement.name}`);
    }

    // 6. Attribution des achievements aux utilisateurs
    console.log('Attribution des achievements aux utilisateurs...');
    const userAchievements = [
      { userId: 'user1', achievementId: 'achiev1', unlockedAt: new Date(Date.now() - 86400000) },
      { userId: 'user2', achievementId: 'achiev1', unlockedAt: new Date(Date.now() - 172800000) },
      { userId: 'user2', achievementId: 'achiev2', unlockedAt: new Date(Date.now() - 86400000) }
    ];

    for (const ua of userAchievements) {
      const userAchievementRef = collection(db, 'TR_Users', ua.userId, 'achievements');
      await addDoc(userAchievementRef, {
        id: ua.achievementId,
        unlockedAt: ua.unlockedAt
      });
      console.log(`Achievement attribué à l'utilisateur ${ua.userId}`);
    }

    // 7. Création du leaderboard
    console.log('Création du leaderboard...');
    const leaderboard = [
      { userId: 'user2', wpm: 118, accuracy: 87, rank: 1, lastUpdated: new Date() },
      { userId: 'user1', wpm: 102, accuracy: 92, rank: 2, lastUpdated: new Date() },
      { userId: 'user3', wpm: 88, accuracy: 85, rank: 3, lastUpdated: new Date() }
    ];

    for (const entry of leaderboard) {
      await setDoc(doc(db, 'TR_Leaderboard', entry.userId), entry);
      console.log(`Entrée leaderboard créée pour l'utilisateur ${entry.userId}`);
    }

    // 8. Création des notifications exemple
    console.log('Création des notifications exemple...');
    const notifications = [
      {
        userId: 'user1',
        type: 'duel-invitation',
        title: 'Nouveau défi',
        message: 'Bob Martin vous a défié à un duel de dactylographie',
        isRead: false,
        createdAt: new Date(),
        relatedId: 'duel1',
        actionUrl: '/duel/duel1'
      },
      {
        userId: 'user3',
        type: 'competition-invitation',
        title: 'Invitation à une compétition',
        message: 'Alice Dupont vous invite à rejoindre le Challenge du vendredi',
        isRead: true,
        createdAt: new Date(Date.now() - 3600000),
        relatedId: 'compet2',
        actionUrl: '/competition/compet2'
      }
    ];

    for (const notif of notifications) {
      await addDoc(collection(db, 'TR_Notifications'), notif);
      console.log(`Notification créée pour l'utilisateur ${notif.userId}`);
    }

    console.log('Initialisation de Firestore terminée avec succès !');
  } catch (error) {
    console.error('Erreur lors de l\'initialisation de Firestore:', error);
  }
}

// Exécution
initializeFirestore()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });