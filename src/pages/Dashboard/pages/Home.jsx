import { LineChart } from "../../../components/Chart";
import { comments } from "../../../data/posts";
import { MdOutlineCalendarMonth, MdOutlineSentimentNeutral } from 'react-icons/md';
import { HiOutlineEmojiSad } from 'react-icons/hi';
import { BiComment, BiHappy, BiLike } from 'react-icons/bi';
import { PiDotsThreeOutlineDuotone } from 'react-icons/pi'
import Filters from "../../../components/Filters";
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

  return (
    <div className="flex w-full font-red bg-inherit">
      <div className="w-[100%]">
        <h1 className="text-[22px] font-medium mb-4 text-[#111111]">Welcome, {userData?.businessName}</h1>
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
        <div className="shadow-lg">
            <LineChart />
        </div>
        <div className="w-full">
          <h2 className="text-dark text-[22px] mb-7 font-medium mt-6">Mentions</h2>
          {
            comments.map(comment => {
              return (
                <div key={comment.id} className="rounded-md shadow-md bg-white h-[10rem] border mb-8 p-4">
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <img src={comment.icon} alt={comment.socialMediaPlatform} />
                    <div>
                      <span className="font-medium text-[14px]">{comment.commenterName}</span>
                      <p className="text-[12px]">{comment.dateOfPost}</p>
                    </div>
                    </div>
                    <div className={comment.sentiment === "positive" ? "bg-[#D7EDFF] px-2 py-1 rounded-3xl border border-[#35A7FF] text-[#1B5480] flex items-center" : comment.sentiment === "neutral" ? "bg-[#FFF7C3] px-2 py-1 rounded-3xl border border-[#D4C03F] text-[#807426] flex items-center" : "bg-[#FFDEE0] px-2 py-1 rounded-3xl border border-[#802D32]/[.5] text-[#802D32] flex items-center"}>{comment.sentiment}
                    <div>{ comment.sentiment === "positive" ? <BiHappy /> : comment.sentiment === "negative" ? <HiOutlineEmojiSad /> : <MdOutlineSentimentNeutral /> }</div>
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
              )
            })
          }
        </div>
      </div>
      <aside className="ml-3 bg-white w-[40%]">
          <Filters />
          <div className="w-[90%] ml-4">
            <h2 className="text-[20px] font-medium text-dark mb-6 ">Date</h2>
            <div className="rounded-xl mb-6 flex items-center justify-center space-x-2 py-2 border border-[#CFCFCF] text-[#606060]">
              <MdOutlineCalendarMonth />
              <span>Previous months</span>
            </div>
            <h2 className="text-[20px] font-medium text-dark mb-6 ">Sentiments</h2>
            <div className="flex space-x-3 mb-7">
              <label className="flex items-center space-x-2">
                <input type="checkbox" />
                <div className="bg-[#FFF7C3] px-2 py-1 rounded-3xl border border-[#D4C03F] text-[#807426] flex items-center">
                Neutral
                <MdOutlineSentimentNeutral />
              </div>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" />
                <div className="bg-[#D7EDFF] px-2 py-1 rounded-3xl border border-[#35A7FF] text-[#1B5480] flex items-center">
                Positive
                <BiHappy />
                </div>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" />
                <div className="bg-[#FFDEE0] px-2 py-1 rounded-3xl border border-[#802D32]/[.5] text-[#802D32] flex items-center">
                Negative
                <HiOutlineEmojiSad />
              </div>
              </label>
            </div>
            <h2 className="text-[20px] font-medium text-dark mb-6 ">Relevance</h2>
            <div>
              <label className="flex items-center mb-2 space-x-2">
                <input type="checkbox" />
                <div className="">
                All mentions
              </div>
              </label>
              <label className="flex items-center mb-2 space-x-2">
                <input type="checkbox" />
                <div className="">
                Most Recent
              </div>
              </label>
              <label className="flex items-center mb-2 space-x-2">
                <input type="checkbox" />
                <div className="">
                Most Popular
              </div>
              </label>
              <label className="flex items-center mb-2 space-x-2">
                <input type="checkbox" />
                <div className="">
                Important mentions
              </div>
              </label>
            </div>
          </div>
      </aside>
    </div>
  )
}

export default Home;
