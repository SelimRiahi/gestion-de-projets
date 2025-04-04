import { initializeApp } from "firebase/app";
import { initializeFirestore, persistentLocalCache } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMq2DFPXCPOL_q9OFqsvWoli683Rn9Pxc",
  authDomain: "gestion-proj.firebaseapp.com",
  projectId: "gestion-proj",
  storageBucket: "gestion-proj.appspot.com",
  messagingSenderId: "959740327568",
  appId: "1:959740327568:web:96f9018958749096fa0a15"
};

const app = initializeApp(firebaseConfig);


const db = initializeFirestore(app, {
  localCache: persistentLocalCache()
});

export { db };