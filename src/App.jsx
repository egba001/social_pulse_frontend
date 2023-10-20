import LandingPage from "./pages/LangingPage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/SignUp/Register";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import GetStarted from "./pages/Onboarding/GetStarted";

function App() {
  const currentUser = useContext(AuthContext);
  // console.log(currentUser);

  // protected route to check for user
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/onboard" element={<GetStarted />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
