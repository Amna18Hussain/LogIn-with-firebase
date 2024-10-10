import {initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore"
import {getAuth} from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyDFCUlODKbwxeXTDg7ML7xPgeWdpU4KV8U",
    authDomain: "signup-with-firebase-c18b3.firebaseapp.com",
    projectId: "signup-with-firebase-c18b3",
    storageBucket: "signup-with-firebase-c18b3.appspot.com",
    messagingSenderId: "1077287679990",
    appId: "1:1077287679990:web:d852a28d6265f127bc79d7"
  };
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);