// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBphex9OzXWpvFWZROhFXefltMQFqPES1w",
  authDomain: "ai-designer-hub.firebaseapp.com",
  projectId: "ai-designer-hub",
  storageBucket: "ai-designer-hub.appspot.com",
  messagingSenderId: "35244842186",
  appId: "1:35244842186:web:e12d91844ad627856ea833",
  measurementId: "G-0RT4KG0LZL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);