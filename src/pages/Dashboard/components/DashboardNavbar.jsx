import { BiSearch } from "react-icons/bi";
import { HiOutlineBell } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { AuthContext } from "../../../context/AuthContext";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { async } from "@firebase/util";
import { doc, getDoc } from "@firebase/firestore";
import { db } from "../../../firebase";

const DashboardNavbar = () => {
  const currentUser = useContext(AuthContext);
  const [userData, setUserData] = useState(null);

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
    </nav>
  );
};

export default DashboardNavbar;
