import Dashboard from "./Dashboard";
import Home from "./Home";
import Mentions from "./Mentions";
import Sources from "./Sources";
import { Route, Routes } from "react-router";

const DashboardRoute = () => {
  return (
    <Dashboard>
      <Routes>
        <Route index element={<Home />} />
        <Route path="mentions" element={<Mentions />} />
        <Route path="sources" element={<Sources />} />
      </Routes>
    </Dashboard>
  );
};

export default DashboardRoute;
