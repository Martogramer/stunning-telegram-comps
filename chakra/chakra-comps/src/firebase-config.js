// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCpmBci-S4aZImf1UgeRtQ26eaN3L1ux9o",
    authDomain: "chakra-dashboard.firebaseapp.com",
    projectId: "chakra-dashboard",
    storageBucket: "chakra-dashboard.appspot.com",
    messagingSenderId: "99512473319",
    appId: "1:99512473319:web:18b15c0242e3da3fcbb442",
    measurementId: "G-KG2ZT2NVC2"
};

// Initialize Firebase
//const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
