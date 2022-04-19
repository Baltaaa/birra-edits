import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD-H-mckPj_OidpIouiAaxiurPtVwouGXE",
  authDomain: "birraedits.firebaseapp.com",
  projectId: "birraedits",
  storageBucket: "birraedits.appspot.com",
  messagingSenderId: "690324878798",
  appId: "1:690324878798:web:31b005dd1e1ca13822e79f",
  measurementId: "G-FT78EC2DWJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default function getFirestoreApp () {
    return app;
}



