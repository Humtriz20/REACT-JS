import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB7q01xImApesL0dikxifR6Xp8wbZ6CTK4",
  authDomain: "movie-app-31e0a.firebaseapp.com",
  projectId: "movie-app-31e0a",
  storageBucket: "movie-app-31e0a.appspot.com",
  messagingSenderId: "277695584768",
  appId: "1:277695584768:web:7767ba48145ddaa968d6e5",
  measurementId: "G-6Y80VD1JVR"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);

export { auth, storage, app };
