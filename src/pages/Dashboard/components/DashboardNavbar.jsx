import { BiLogOut, BiSearch } from "react-icons/bi";
import {
  HiOutlineBell,
  HiOutlineDocumentText,
  HiOutlineMail,
  HiOutlineMenuAlt3,
} from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { AuthContext } from "../../../context/AuthContext";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { doc, getDoc } from "@firebase/firestore";
import { auth, db } from "../../../firebase";
import { RxDashboard } from "react-icons/rx";
import { NavLink, useLocation } from "react-router-dom";
import { PiChatsCircle } from "react-icons/pi";
import { TbWorldSearch } from "react-icons/tb";
import { signOut } from "firebase/auth";

const DashboardNavbar = () => {
  const currentUser = useContext(AuthContext);
  const [userData, setUserData] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDocRef = await getDoc(doc(db, "users", currentUser.uid));

        if (userDocRef.exists()) {
          setUserData(userDocRef.data());
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    if (currentUser) {
      fetchUserData();
    }
  }, [currentUser]);

  console.log(userData);

  // toggle mobile menu
  const toggleMobileMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <nav className="flex items-center justify-between mb-14 bg-white p-4 fixed w-full top-0 left-0 pt-[1rem] pb-[1rem] pl-2 sm:pl-[5rem] lg:pl-[17rem] pr-8 sm:pr-[1rem] md:pr-[1rem] xl:pr-[5rem]">
      <div className="hidden border border-[#CFCFCF] py-2 px-3 rounded-md max-w-md sm:w-full md:flex items-center gap-2">
        <BiSearch className="text-2xl text-[#CFCFCF]" />
        <input
          type="text"
          className="w-full outline-none"
          placeholder="Search for more keywords"
        />
      </div>
      <div className="right">
        <div className="flex items-center gap-3">
          <HiOutlineBell className="text-2xl text-dark cursor-pointer" />
          <div className="profile flex items-center gap-2">
            <div className="profile-picture w-[35px] h-[35px] rounded-[50%] overflow-hidden">
              {/* <img
                    src={william}
                    alt="profile picture"
                    className="object-contain w-full"
                  /> */}
              <CgProfile className="w-[35px] h-[35px] text-dark" />
            </div>
            <div className="profile-info">
              <h6 className="font-red font-medium text-sm text-dark">
                {userData?.businessName}
              </h6>
              <p className="font-red font-normal text-xs text-gray-600">
                {userData?.email}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* mobile hamburger menu */}
      <div className="mobile-hamburger sm:hidden" onClick={toggleMobileMenu}>
        {openMenu ? (
          <IoClose className="text-3xl cursor-pointer text-green font-bold" />
        ) : (
          <HiOutlineMenuAlt3 className="text-3xl cursor-pointer text-green font-bold" />
        )}
      </div>
      {/* mobile menu options */}
      {openMenu && (
        <div className="mobile-nav sm:hidden absolute right-0 top-[70px] w-[80%] min-h-[550px] h-full rounded-l-3xl bg-green py-8">
          <div className="flex flex-col items-left gap-4">
            <NavLink
              to="/dashboard"
              className={
                pathname == "/dashboard"
                  ? "mobile-active-link"
                  : "mobile-normal-link"
              }
              onClick={toggleMobileMenu}
            >
              <RxDashboard className="dashboard-sidenav-icon-mobile" />
              <p className="dashboard-sidenav-text-mobile">Dashboard</p>
            </NavLink>
            <NavLink
              to="/dashboard/mentions"
              className={({ isActive }) =>
                isActive ? "mobile-active-link" : "mobile-normal-link"
              }
              onClick={toggleMobileMenu}
            >
              <PiChatsCircle className="dashboard-sidenav-icon-mobile" />
              <p className="dashboard-sidenav-text-mobile">Mentions</p>
            </NavLink>
            <NavLink
              to="/dashboard/sources"
              className={({ isActive }) =>
                isActive ? "mobile-active-link" : "mobile-normal-link"
              }
              onClick={toggleMobileMenu}
            >
              <TbWorldSearch className="dashboard-sidenav-icon-mobile" />
              <p className="dashboard-sidenav-text-mobile">Sources</p>
            </NavLink>
          </div>
          {/* export options */}
          <div className="mt-16">
            <h4 className="font-red text-dark font-bold mb-2 px-10 underline">
              Export As:
            </h4>
            <div className="flex flex-col items-left gap-4">
              <NavLink
                to="/dashboard/pdf"
                className={({ isActive }) =>
                  isActive ? "mobile-active-link" : "mobile-normal-link"
                }
                onClick={toggleMobileMenu}
              >
                <HiOutlineDocumentText className="dashboard-sidenav-icon-mobile" />
                <p className="dashboard-sidenav-text-mobile">As PDF</p>
              </NavLink>
              <NavLink
                to="/dashboard/email"
                className={({ isActive }) =>
                  isActive ? "mobile-active-link" : "mobile-normal-link"
                }
                onClick={toggleMobileMenu}
              >
                <HiOutlineMail className="dashboard-sidenav-icon-mobile" />
                <p className="dashboard-sidenav-text-mobile">As Email</p>
              </NavLink>
            </div>
          </div>
          {/* sign out */}
          <button
            className="absolute bottom-14 text-base px-10"
            onClick={() => signOut(auth)}
          >
            <div className="flex items-center gap-2">
              <BiLogOut className="text-red-400 text-2xl lg:text-base" />
              <p className="dashboard-sidenav-text-mobile">Logout</p>
            </div>
          </button>
        </div>
      )}
    </nav>
  );
};

export default DashboardNavbar;
