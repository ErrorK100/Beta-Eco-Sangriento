// js/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCLWEHZbOTF5zSvKf-gWDd4vaa5M7k9yJg",
  authDomain: "eco-sangriento.firebaseapp.com",
  databaseURL: "https://eco-sangriento-default-rtdb.firebaseio.com",
  projectId: "eco-sangriento",
  storageBucket: "eco-sangriento.appspot.com",
  messagingSenderId: "140032101063",
  appId: "1:140032101063:web:7932ab6b03b6ee1da70ce2",
  measurementId: "G-CVHS5XR75P"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
