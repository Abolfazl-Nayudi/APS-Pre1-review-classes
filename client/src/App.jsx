import NavbarComponent from "./components/Nav/Nav";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Todos from "./pages/Todos";
import Footer from "./components/Footer/Footer";
import NotFoundPage from "./pages/NotFoundPage";
import { useSelector } from "react-redux";
function App() {
  const token = useSelector((store) => store.user.token);
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/todos"
          element={token ? <Todos /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
