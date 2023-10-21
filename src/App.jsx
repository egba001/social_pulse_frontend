import LandingPage from "./pages/LangingPage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import DashboardRoute from "./pages/Dashboard/pages/DashboardRoute";
import GetStarted from "./pages/Onboarding/GetStarted";
import Login from "./pages/Login";
import Register from "./pages/Register";

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
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <DashboardRoute />
            </ProtectedRoute>
          }
        />
        <Route path="/onboard" element={<ProtectedRoute><GetStarted /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
