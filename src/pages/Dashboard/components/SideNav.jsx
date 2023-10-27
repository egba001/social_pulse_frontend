import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/SocialPulseGreen.png";
import logoMobile from "../../../assets/health.png";
import { RxDashboard } from "react-icons/rx";
import { PiChatsCircle } from "react-icons/pi";
import { TbWorldSearch } from "react-icons/tb";
import { BiLogOut } from "react-icons/bi";
import { HiOutlineDocument, HiOutlineDocumentText, HiOutlineMail } from "react-icons/hi";
import { signOut } from "@firebase/auth";
import { auth } from "../../../firebase";
import { useLocation } from "react-router-dom";

const SideNav = () => {
  const { pathname } = useLocation();

  return (
    <section
      id="sidenav"
      className="bg-[#E0F4DF] hidden sm:block font-red fixed h-screen max-w-0 sm:max-w-[70px] lg:max-w-[250px] w-full md:p-5 lg:p-5 md:px-3 lg:px-10 z-10"
    >
      <div className="flex flex-col gap-12">
        <div className="logo w-[150px] hidden lg:block">
          <img src={logo} alt="SocialPulse logo" />
        </div>
        <div className="logo w-full lg:hidden">
          <img src={logoMobile} alt="SocialPulse logo" />
        </div>
        {/* nav */}
        <nav className="navigation">
          <ul>
            <li>
              <NavLink
                to="/dashboard"
                className={
                  pathname == "/dashboard"
                    ? "sidebar-link-normal"
                    : "flex items-center gap-1 w-full p-1 px-2 pr-4"
                }
              >
                <RxDashboard className="dashboard-sidenav-icon" />
                <p className="hidden lg:block">Dashboard</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/mentions"
                className={({ isActive }) =>
                  isActive
                    ? "sidebar-link-normal"
                    : "flex items-center gap-1 w-full p-1 px-2 pr-4"
                }
              >
                <PiChatsCircle className="dashboard-sidenav-icon" />
                <p className="hidden lg:block">Mentions</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/sources"
                className={({ isActive }) =>
                  isActive
                    ? "sidebar-link-normal"
                    : "flex items-center gap-1 w-full p-1 px-2 pr-4"
                }
              >
                <TbWorldSearch className="dashboard-sidenav-icon" />
                <p className="hidden lg:block">Sources</p>
              </NavLink>
            </li>
          </ul>
        </nav>
        {/* export */}
        <div className="export">
          <h4 className="hidden lg:block">EXPORT REPORT</h4>
          <ul>
            <NavLink
              to="/dashboard/pdf"
              className={({ isActive }) =>
                isActive
                  ? "sidebar-link-normal"
                  : "flex items-center gap-1 w-full p-1 px-2 pr-4"
              }
            >
              <HiOutlineDocumentText className="dashboard-sidenav-icon" />
              <p className="hidden lg:block"> As Pdf</p>
            </NavLink>
            <NavLink
              to="/dashboard/email"
              className={({ isActive }) =>
                isActive
                  ? "sidebar-link-normal"
                  : "flex items-center gap-1 w-full p-1 px-2 pr-4"
              }
            >
              <HiOutlineMail className="dashboard-sidenav-icon" />
              <p className="hidden lg:block">As Email</p>
            </NavLink>
          </ul>
        </div>
        {/* footer */}
        <button
          className="absolute bottom-14 text-base"
          onClick={() => signOut(auth)}
        >
          <div className="flex items-center gap-1">
            <BiLogOut className="text-red-400 text-2xl lg:text-base" />
            <p className="hidden lg:block">Logout</p>
          </div>
        </button>
      </div>
    </section>
  );
};

export default SideNav;
