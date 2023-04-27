import {initializeApp} from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDggtN3yDyreFhbulpMy3miJArI-qbCd1I",
  authDomain: "fir-course-3cdae.firebaseapp.com",
  projectId: "fir-course-3cdae",
  storageBucket: "fir-course-3cdae.appspot.com",
  messagingSenderId: "354077042041",
  appId: "1:354077042041:web:87918773fec7cf3d7f7ba8",
  measurementId: "G-80LLND7CHL"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);