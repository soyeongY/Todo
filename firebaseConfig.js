import { initializeFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAZcoEILyjqCy32Q2cPXD8ek6cLfpZNkRw",
  authDomain: "testfirebase-c05db.firebaseapp.com",
  projectId: "testfirebase-c05db",
  storageBucket: "testfirebase-c05db.appspot.com",
  messagingSenderId: "553578249478",
  appId: "1:553578249478:web:4f0128ac1f88b42d253287",
  measurementId: "G-0151RRBY2K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export { db }
