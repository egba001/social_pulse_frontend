import Dashboard from "./Dashboard";
import EmailExport from "./EmailExport";
import Home from "./Home";
import Mentions from "./Mentions";
import PDF from "./PDF";
import Profile from "./Profile";
import Sources from "./Sources";
import { Route, Routes } from "react-router";

const DashboardRoute = () => {
  return (
    <Dashboard>
      <Routes>
        <Route index element={<Home />} />
        <Route path="mentions" element={<Mentions />} />
        <Route path="sources" element={<Sources />} />
        <Route path="pdf" element={<PDF />} />
        <Route path="email" element={<EmailExport />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </Dashboard>
  );
};

export default DashboardRoute;
