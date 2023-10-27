import facebook from "../../../assets/facebook.svg";
import { FiThumbsUp } from "react-icons/fi";
import { GoComment } from "react-icons/go";
import {
  PiDotsThreeOutlineDuotone,
  PiSmiley,
  PiSmileySad,
  PiSmileyMeh,
} from "react-icons/pi";

import { useState } from "react";

import Tab from "../components/Tab";
import RightPanel from "../components/RightPanel";

const Mentions = () => {
  // Tab
  const [toggle, setToggle] = useState(3);
  const updateToggle = (id) => {
    setToggle(id);
  };

  return (
    <section id="mention">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 h-full px-2 md:px-0">
        <div className="left-panel grid-cols-1 md:col-span-3 h-full">
          {/* tab */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0">
            <h3 className="font-red font-medium text-xl">Mentions</h3>
            <Tab toggle={toggle} updateToggle={updateToggle} />
          </div>
          {/* daily tab */}
          <article className={toggle === 1 ? "block" : "hidden"}>
            <div className="flex items-center justify-between my-6">
              <div className="left">
                <p className="font-red font-normal text-base text-dark">
                  Sort by: <span>Most Recent</span>
                </p>
              </div>
              <div className="left">
                <p>1 of 250</p>
              </div>
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
          </article>
          {/* weekly tab */}
          <article className={toggle === 2 ? "block" : "hidden"}>
            <div className="flex items-center justify-between my-6">
              <div className="left">
                <p className="font-red font-normal text-base text-dark">
                  Sort by: <span>Most Recent</span>
                </p>
              </div>
              <div className="left">
                <p>1 of 250</p>
              </div>
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
                      <div className="sentiment tag flex items-center gap-1 bg-bg_positive border border-text_positive p-[0.1rem] px-4 rounded-3xl">
                        <span className="text-text_positive font-red font-normal text-sm">
                          Positive
                        </span>
                        <PiSmiley className="text-dark text-base" />
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
          </article>
          {/* monthly tab */}
          <article className={toggle === 3 ? "block" : "hidden"}>
            <div className="flex items-center justify-between my-6">
              <div className="left">
                <p className="font-red font-normal text-base text-dark">
                  Sort by: <span>Most Recent</span>
                </p>
              </div>
              <div className="left">
                <p>1 of 250</p>
              </div>
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
                      <div className="sentiment tag flex items-center gap-1 bg-bg_positive border border-text_positive p-[0.1rem] px-4 rounded-3xl">
                        <span className="text-text_positive font-red font-normal text-sm">
                          Positive
                        </span>
                        <PiSmiley className="text-dark text-base" />
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
            {/* cards display starts here */}
            <article className="card bg-white rounded-2xl shadow-sm p-4 px-6 my-2">
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
                      <div className="sentiment tag flex items-center gap-1 bg-bg_negative border border-text_negative p-[0.1rem] px-4 rounded-3xl">
                        <span className="text-text_negative font-red font-normal text-sm">
                          Negative
                        </span>
                        <PiSmileySad className="text-dark text-base" />
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
            </article>
          </article>
        </div>
        <RightPanel />
      </div>
    </section>
  );
};

export default Mentions;
