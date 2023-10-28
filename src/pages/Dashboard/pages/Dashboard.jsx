import SideNav from "../components/SideNav";
import ProfileSide from "../components/ProfileSide";
import DashboardNavbar from "../components/DashboardNavbar";
import { useLocation } from "react-router-dom";

const Dashboard = ({ children }) => {

  const { pathname } = useLocation();

  return (
    <main id="dashboard">
      {
        pathname === "/dashboard/profile" ? <ProfileSide /> : <SideNav />
      }
      <section className="dashboard_body bg-bg_grey">
        <DashboardNavbar />
        {children}
      </section>
    </main>
  );
};

export default Dashboard;
