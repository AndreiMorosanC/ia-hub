// src/pages/Dashboard.jsx
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";

function Dashboard() {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("Sesión cerrada");
    } catch (err) {
      console.error("Error al cerrar sesión", err);
    }
  };

  return (
    <div className="text-center mt-10">
      <h1 className="text-2xl mb-4">🎉 Estás logueado</h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Cerrar sesión
      </button>
    </div>
  );
}

export default Dashboard;
