import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { doc, getDoc } from "@firebase/firestore";
import { db } from "../../../firebase";

const Home = () => {
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
    <section>
      <h2 className="font-red font-medium text-xl">
        Welcome, {userData?.businessName}
      </h2>
    </section>
  );
};

export default Home;
