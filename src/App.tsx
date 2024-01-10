import { useState, useEffect, useContext } from "react";
import "./App.css";
import Router from "./components/Router";
import { app } from "firebaseApp";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ThemeContext from "context/ThemeContext";

function App() {
  const context = useContext(ThemeContext);
  const auth = getAuth(app);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!auth?.currentUser
  );

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });
  }, [auth]);

  return (
    <div className={context.theme === "light" ? "white" : "dark"}>
      <ToastContainer />
      <Router isAuthenticated={isAuthenticated} />
    </div>
  );
}

export default App;
