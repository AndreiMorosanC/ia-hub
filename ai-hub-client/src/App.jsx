import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  const { user, loading } = useContext(UserContext);

  if (loading) return <p className="text-center mt-10">Cargando...</p>;

  return (
    <div>
      {user ? <Dashboard /> : <Login />}
    </div>
  );
}

export default App;
