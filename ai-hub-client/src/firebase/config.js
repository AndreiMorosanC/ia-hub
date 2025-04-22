// src/firebase/config.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // ✅ Te faltaba esta importación

const firebaseConfig = {
  apiKey: "AIzaSyD9a5F0vX-PrdgY4ZtYdxbiuTPExSGcjsw",
  authDomain: "ia-hub-371f6.firebaseapp.com",
  projectId: "ia-hub-371f6",
  storageBucket: "ia-hub-371f6.appspot.com", // 🔧 corregido .app por .appspot.com
  messagingSenderId: "61920491346",
  appId: "1:61920491346:web:5d8491dd8b4547276a2c8b",
  measurementId: "G-W0YV17EE9N"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // ✅ auth inicializado correctamente

export { auth }; // ✅ exportación correcta para usar en auth.js
