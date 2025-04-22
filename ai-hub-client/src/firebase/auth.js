import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config"; 

// Registrar nuevo usuario
export const registerUser = async (email, password) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  // 🔁 Aquí haces la llamada a tu backend
  await fetch("http://localhost:3000/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      uid: user.uid,
      email: user.email
    })
  });

  return userCredential;
};

// Iniciar sesión
export const loginUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
