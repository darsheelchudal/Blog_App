import "./App.css";
import { useEffect, useState } from "react";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
console.log(import.meta.env.VITE_APPWRITE_URL);
import { Header, Footer } from "./components";
import { UseDispatch } from "react-redux";

function App() {
  const [loading, setLoading] = useState(true);
  const [dispatch] = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);
  return (
    <>
      <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
        <div className="w-full block">
          <Header />
          <main>{/* <Outlet /> */}</main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
