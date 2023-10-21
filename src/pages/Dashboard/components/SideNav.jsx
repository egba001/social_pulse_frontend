import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/SocialPulseGreen.png";
import { RxDashboard } from "react-icons/rx";
import { PiChatsCircle } from "react-icons/pi";
import { TbWorldSearch } from "react-icons/tb";
import { BiLogOut } from "react-icons/bi";
import { HiOutlineDocument, HiOutlineDocumentText } from "react-icons/hi";
import { signOut } from "@firebase/auth";
import { auth } from "../../../firebase";
import { useLocation } from 'react-router-dom';

const SideNav = () => {

  const { pathname } = useLocation();

  return (
    <section
      id="sidenav"
      className="bg-[#E0F4DF] font-red fixed h-screen max-w-[250px] w-full p-5 px-10 z-10"
    >
      <div className="flex flex-col gap-12">
        <div className="logo w-[150px]">
          <img src={logo} alt="SocialPulse logo" />
        </div>
        {/* nav */}
        <nav className="navigation">
          <ul>
            <li>
              <NavLink to="/dashboard" className={pathname == "/dashboard" ? "sidebar-link-normal" : "flex items-center gap-1 w-full p-1 px-2 pr-4"}>
                <RxDashboard />
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/mentions" className={({ isActive }) => isActive ? "sidebar-link-normal" : "flex items-center gap-1 w-full p-1 px-2 pr-4"}>
                <PiChatsCircle />
                Mentions
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/sources" className={({ isActive }) => isActive ? "sidebar-link-normal" : "flex items-center gap-1 w-full p-1 px-2 pr-4"}>
                <TbWorldSearch />
                Sources
              </NavLink>
            </li>
          </ul>
        </nav>
        {/* export */}
        <div className="export">
          <h4>EXPORT REPORT</h4>
          <ul>
            <li className="flex items-center gap-1 w-full p-1 px-2 pr-4">
              <HiOutlineDocumentText />
              As Pdf
            </li>
            <li className="flex items-center gap-1 w-full p-1 px-2 pr-4">
              <HiOutlineDocument />
              As Excel
            </li>
          </ul>
        </div>
        {/* footer */}
        <button
          className="absolute bottom-14 text-base"
          onClick={() => signOut(auth)}
        >
          <div className="flex items-center gap-1">
            <BiLogOut className="text-red-400" />
            Logout
          </div>
        </button>
      </div>
    </section>
  );
};

export default SideNav;
