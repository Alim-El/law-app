import { FirebaseOptions, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const NEXT_PUBLIC_FIREBASE_API_KEY = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
const NEXT_PUBLIC_AUTH_DOMAIN = process.env.NEXT_PUBLIC_AUTH_DOMAIN;
const NEXT_PUBLIC_PROJECT_ID = process.env.NEXT_PUBLIC_PROJECT_ID;
const NEXT_PUBLIC_STORAGE_BUCKET = process.env.NEXT_PUBLIC_STORAGE_BUCKET;
const NEXT_PUBLIC_MESSAGING_SENDER_ID =
  process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID;
const NEXT_PUBLIC_APP_ID = process.env.NEXT_PUBLIC_APP_ID;
const NEXT_PUBLIC_DATABASE_URL = process.env.NEXT_PUBLIC_DATABASE_URL;

export const firebaseConfig = {
  apiKey: NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: NEXT_PUBLIC_PROJECT_ID,
  storageBucket: NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: NEXT_PUBLIC_APP_ID,
  databaseURL: NEXT_PUBLIC_DATABASE_URL,
} as FirebaseOptions;

export const firebase_app = initializeApp(firebaseConfig);
export const db = getFirestore(firebase_app);
export const storage = getStorage(firebase_app);

export { default as getArticles } from "./getArticles";
export { default as addArticle } from "./addArticle";
