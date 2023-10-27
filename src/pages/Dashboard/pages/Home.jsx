import { LineChart } from "../../../components/Chart";
import { PiDotsThreeOutlineDuotone, PiSmileyMeh } from "react-icons/pi";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { doc, getDoc } from "@firebase/firestore";
import { db } from "../../../firebase";

import RightPanel from "../components/RightPanel";
import { GoComment } from "react-icons/go";
import { FiThumbsUp } from "react-icons/fi";
import facebook from "../../../assets/facebook.svg";


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

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 h-full px-2 md:px-0">
      <div className="left-panel grid-cols-1 md:col-span-3 h-full">
        <h1 className="text-[22px] font-medium mb-4 text-[#111111]">
          Welcome, {userData?.businessName}
        </h1>
        <div className="flex justify-between items-center">
          <p className="text-dark font-medium mb-4 text-xl">Sentiments</p>
          <div className="flex space-x-3 items-center">
            <div className="flex items-center space-x-1">
              <div className="h-2 w-2 rounded-full bg-[#DB1B1B]"></div>
              <span className="text-[12px]">Negative</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="h-2 w-2 rounded-full bg-[#2446A9]"></div>
              <span className="text-[12px]">Positive</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="h-2 w-2 rounded-full bg-[#111111]"></div>
              <span className="text-[12px]">Neutral</span>
            </div>
          </div>
        </div>
        <div className="shadow-lg rounded-lg overflow-hidden">
          <LineChart />
        </div>
        <div className="w-full mt-5">
          <div className="flex items-center justify-between">
            <h3 className="font-red font-medium text-xl">Mentions</h3>
          </div>
          {/* cards display starts here */}
          <aside className="card bg-white rounded-2xl shadow-sm p-4 px-6 my-2">
            <div className="flex items-start gap-4 justify-between">
              {/* social media logo */}
              <div className="brand-logo flex-none w-[30px] h-[30px] flex items-center justify-center rounded-[50%]">
                <img
                  src={facebook}
                  alt="social media logo"
                  className="w-full object-contain"
                />
              </div>
              {/* social content */}
              <div className="comment-details flex-grow w-full flex flex-col gap-4">
                <div className="user-details">
                  <div className="flex items-start justify-between max-w-[70%] w-full">
                    <div className="profile flex items-start gap-2">
                      {/* <div className="profile-image w-[24px] h-[24px] flex items-center justify-center rounded-[50%]">
                        <img
                          src={facebook}
                          alt="user profile image"
                          className="w-full object-contain"
                        />
                      </div> */}
                      <div className="profile-name">
                        <h5 className="font-red text-base font-medium text-dark">
                          Shasha Lincon
                        </h5>
                        <p className="date font-red font-normal text-sm text-dark">
                          19 Oct 2022
                        </p>
                      </div>
                    </div>
                    <div className="sentiment tag flex items-center gap-1 bg-bg_neutral border border-text_neutral p-[0.1rem] px-4 rounded-3xl">
                      <span className="text-text_neutral font-red font-normal text-sm">
                        Neutral
                      </span>
                      <PiSmileyMeh className="text-dark text-base" />
                    </div>
                  </div>
                </div>
                <div className="user-comment">
                  <p className="font-red font-medium text-base text-dark">
                    Samsumg phones are one of the best brands of gadgets out
                    there #gadgets #phones
                  </p>
                </div>
                <div className="comment-reactions">
                  <div className="flex items-center gap-8">
                    <div className="like flex items-center gap-1 cursor-pointer">
                      <FiThumbsUp className="text-base text-dark" />
                      <span className="font-red font-medium text-base text-dark">
                        21
                      </span>
                    </div>
                    <div className="like flex items-center gap-1 cursor-pointer">
                      <GoComment className="text-base text-dark" />
                      <span className="font-red font-medium text-base text-dark">
                        23
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* ellipse */}
              <div className="ellipse flex-none p-0 m-0 cursor-pointer">
                <PiDotsThreeOutlineDuotone className="text-2xl text-dark" />
              </div>
            </div>
          </aside>
          {/* {comments.map((comment) => {
            return (
              <div
                key={comment.id}
                className="rounded-md shadow-md bg-white h-[10rem] border mb-8 p-4"
              >
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <img src={comment.icon} alt={comment.socialMediaPlatform} />
                    <div>
                      <span className="font-medium text-[14px]">
                        {comment.commenterName}
                      </span>
                      <p className="text-[12px]">{comment.dateOfPost}</p>
                    </div>
                  </div>
                  <div
                    className={
                      comment.sentiment === "positive"
                        ? "bg-[#D7EDFF] px-2 py-1 rounded-3xl border border-[#35A7FF] text-[#1B5480] flex items-center"
                        : comment.sentiment === "neutral"
                        ? "bg-[#FFF7C3] px-2 py-1 rounded-3xl border border-[#D4C03F] text-[#807426] flex items-center"
                        : "bg-[#FFDEE0] px-2 py-1 rounded-3xl border border-[#802D32]/[.5] text-[#802D32] flex items-center"
                    }
                  >
                    {comment.sentiment}
                    <div>
                      {comment.sentiment === "positive" ? (
                        <BiHappy />
                      ) : comment.sentiment === "negative" ? (
                        <HiOutlineEmojiSad />
                      ) : (
                        <MdOutlineSentimentNeutral />
                      )}
                    </div>
                  </div>
                  <PiDotsThreeOutlineDuotone />
                </div>
                <p className="mt-3 ml-6">{comment.comment}</p>
                <div className="flex items-center mt-3 space-x-3 ml-6">
                  <div className="flex items-center space-x-1">
                    <BiLike />
                    <span>{comment.noOfLikes}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <BiComment />
                    <span>{comment.noOfComments}</span>
                  </div>
                </div>
              </div>
            );
          })} */}
        </div>
      </div>
      <RightPanel />
    </div>
  );
};

export default Home;
