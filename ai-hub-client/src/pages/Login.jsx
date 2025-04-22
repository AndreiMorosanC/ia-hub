import { useState } from "react";
import { registerUser, loginUser } from "../firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const userCredential = await registerUser(email, password);
      console.log("Usuario registrado:", userCredential.user);
    } catch (error) {
      console.error("Error al registrar:", error.message);
    }
  };

  const handleLogin = async () => {
    try {
      const userCredential = await loginUser(email, password);
      console.log("Sesión iniciada:", userCredential.user);
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto text-center">
      <h1 className="text-2xl mb-4">AIHub - Login/Registro</h1>
      <input
        type="email"
        placeholder="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 w-full mb-4"
      />
      <div className="flex gap-2 justify-center">
        <button onClick={handleLogin} className="bg-blue-600 text-white px-4 py-2 rounded">
          Iniciar sesión
        </button>
        <button onClick={handleRegister} className="bg-green-600 text-white px-4 py-2 rounded">
          Registrarse
        </button>
      </div>
    </div>
  );
}

export default Login;
