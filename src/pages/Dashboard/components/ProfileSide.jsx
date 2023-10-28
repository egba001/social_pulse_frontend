import { HiOutlineDocumentText } from "react-icons/hi";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import logoMobile from "../../../assets/health.png";
import logo from "../../../assets/SocialPulseGreen.png";
import { useLocation } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import { BiLogOut, BiReceipt } from "react-icons/bi";


const ProfileSide = () => {

    const { pathname } = useLocation();


    return (
        <div className="bg-[#E0F4DF] hidden sm:block font-red fixed h-screen max-w-0 sm:max-w-[70px] lg:max-w-[260px] w-full md:p-5 lg:p-5 md:px-3 lg:px-10 z-10">
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
          </ul>
        </nav>
        {/* export */}
        <div className="export mb-10">
          <h4 className="hidden lg:block mb-4">ACCOUNT SETTINGS</h4>
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
              <p className="hidden lg:block">My Account</p>
            </NavLink>
          </ul>
        </div>
        <div className="export mb-6">
          <h4 className="hidden lg:block mb-4">ACCOUNT UPGRADE</h4>
          <ul>
            <NavLink
              to="/dashboard/pdf"
              className={({ isActive }) =>
                isActive
                  ? "sidebar-link-normal"
                  : "flex items-center gap-1 w-full p-1 px-2 pr-4"
              }
            >
            <BiReceipt className="dashboard-sidenav-icon"/>
              <p className="hidden lg:flex items-center space-x-3">Subscription plans</p>
            </NavLink>
          </ul>
        </div>
        <div className="export mb-10">
          <h4 className="hidden lg:block mb-4">DEMO</h4>
          <ul className="border border-green rounded-lg px-3">
            <NavLink
              to="/dashboard/pdf"
              className={({ isActive }) =>
                isActive
                  ? "sidebar-link-normal"
                  : "flex items-center gap-1 w-full p-1 px-2 pr-4"
              }
            >
            <AiOutlineVideoCamera className="dashboard-sidenav-icon"/>
              <p className="hidden lg:flex items-center space-x-3">Video guide</p>
            </NavLink>
          </ul>
        </div>
        {/* footer */}
        <button
          className="absolute bottom-6 text-base"
          onClick={() => signOut(auth)}
        >
          <div className="flex items-center gap-1">
            <BiLogOut className="text-red-400 text-2xl lg:text-base" />
            <p className="hidden lg:block">Logout</p>
          </div>
        </button>
      </div>
        </div>
    )
}

export default ProfileSide