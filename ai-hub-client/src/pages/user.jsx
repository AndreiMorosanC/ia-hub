import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";

function User() {
  const [uid, setUid] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setUid(user.uid); // Guardamos el UID en el estado
    } catch (error) {
      console.error("Error al registrar:", error.message);
    }
  };

  return (
    <div className="p-6">
      <input
        type="email"
        placeholder="Correo"    
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 mb-4 w-full"
      />
      <button onClick={handleRegister} className="bg-blue-500 text-white px-4 py-2 rounded">
        Registrarse
      </button>

      {uid && (
        <div className="mt-4">
          <p>UID del usuario:</p>
          <code>{uid}</code>
        </div>
      )}
    </div>
  );
}

export default User;
