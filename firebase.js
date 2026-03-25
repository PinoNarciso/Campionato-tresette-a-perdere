
// Configurazione del progetto Firebase
// Serve per collegare il tuo sito al database Firebase corretto
const firebaseConfig = {

  apiKey: "AIzaSyAeZiPDG89tRz3QeFBhh3wWLkGtjoFGiXA",
  // Chiave pubblica del progetto (identifica e autorizza le richieste)

  authDomain: "campinato-tresette-a-perdere.firebaseapp.com",
  // Dominio usato per eventuale autenticazione Firebase

  databaseURL: "https://campinato-tresette-a-perdere-default-rtdb.europe-west1.firebasedatabase.app",
  // URL del database Realtime dove salvi dati (tavoli, giocatori, storico)

  projectId: "campinato-tresette-a-perdere",
  // ID univoco del progetto Firebase

  storageBucket: "campinato-tresette-a-perdere.firebasestorage.app",
  // Spazio per file (immagini, documenti) - nel tuo caso non utilizzato

  messagingSenderId: "105475040052",
  // ID per notifiche push (Firebase Cloud Messaging)

  appId: "1:105475040052:web:631c46b7d47cd8b333bb61"
  // ID univoco dell'app web Firebase
};

// Controlla se Firebase è già inizializzato
// Serve per evitare errori se il file viene caricato più volte
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Crea il collegamento al database Realtime
// 'db' sarà la variabile che userai per leggere e scrivere dati
const db = firebase.database();