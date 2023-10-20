import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/SocialPulseGreen.png";
import { RxDashboard } from "react-icons/rx";
import { PiChatsCircle } from "react-icons/pi";
import { TbWorldSearch } from "react-icons/tb";
import { BiLogOut } from "react-icons/bi";
import { HiOutlineDocument, HiOutlineDocumentText } from "react-icons/hi";
import { signOut } from "@firebase/auth";
import { auth } from "../../../firebase";

const SideNav = () => {
  return (
    <section
      id="sidenav"
      className="bg-[#E0F4DF] fixed h-screen max-w-[250px] w-full p-5 px-10 z-10"
    >
      <div className="flex flex-col gap-12">
        <div className="logo w-[150px]">
          <img src={logo} alt="SocialPulse logo" />
        </div>
        {/* nav */}
        <nav className="navigation">
          <ul>
            <li>
              <NavLink to="/dashboard" className="sidebar-link-normal">
                <RxDashboard />
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/mentions" className="sidebar-link-normal">
                <PiChatsCircle />
                Mentions
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/sources" className="sidebar-link-normal">
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
            <li className="sidebar-link-normal">
              <HiOutlineDocumentText />
              As Pdf
            </li>
            <li className="sidebar-link-normal">
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
