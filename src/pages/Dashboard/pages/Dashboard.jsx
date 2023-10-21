import SideNav from "../components/SideNav";
import DashboardNavbar from "../components/DashboardNavbar";

const Dashboard = ({ children }) => {
  return (
    <main id="dashboard">
      <SideNav />
      <section className="dashboard_body bg-bg_grey">
        <DashboardNavbar />
        {children}
      </section>
    </main>
  );
};

export default Dashboard;
