import facebook from "../../../assets/facebook.svg";
import { FiThumbsUp } from "react-icons/fi";
import { GoComment } from "react-icons/go";
import {
  PiDotsThreeOutlineDuotone,
  PiInfoFill,
  PiSmiley,
  PiSmileySad,
  PiSmileyMeh,
} from "react-icons/pi";
import LineChart from "../../../components/LineChart";
import { SentimentData } from "../../../utils/Data";
import { useState } from "react";

import { DateRange, DateRangePicker, DefinedRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { addDays } from "date-fns";

const Mentions = () => {
  const [data, setData] = useState({
    labels: SentimentData.map((data) => data.month),
    datasets: [
      {
        label: "Mentions",
        data: SentimentData.map((data) => data.userGain),
      },
    ],
  });

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  console.log(state);

  return (
    <section id="mention">
      <div className="grid grid-cols-5 gap-4 h-full">
        <div className="left-panel col-span-3 h-full">
          {/* tab */}
          <div className="flex items-center justify-between">
            <h3 className="font-red font-medium text-xl">Mentions</h3>
            <div className="tab">Tab</div>
          </div>
          {/* sorting section */}
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
                      <div className="profile-image w-[24px] h-[24px] flex items-center justify-center rounded-[50%]">
                        <img
                          src={facebook}
                          alt="user profile image"
                          className="w-full object-contain"
                        />
                      </div>
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
          </article>
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
                      <div className="profile-image w-[24px] h-[24px] flex items-center justify-center rounded-[50%]">
                        <img
                          src={facebook}
                          alt="user profile image"
                          className="w-full object-contain"
                        />
                      </div>
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
          </article>
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
                      <div className="profile-image w-[24px] h-[24px] flex items-center justify-center rounded-[50%]">
                        <img
                          src={facebook}
                          alt="user profile image"
                          className="w-full object-contain"
                        />
                      </div>
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
        </div>
        <div className="right-panel col-span-2 h-full bg-white p-2 px-4 rounded-lg">
          <h3 className="font-red font-medium text-xl">Mention Statistics</h3>
          {/* line chart */}
          <div className="line-chart bg-white rounded-md shadow-md p-4 my-4">
            <div className="header flex items-center justify-between mb-6">
              <p className="font-red font-semibold text-base text-dark">
                Social Media Mentions
              </p>
              <PiInfoFill className="text-gray-400 text-2xl cursor-pointer" />
            </div>
            <hr className="border border-gray-200" />
            <LineChart chartData={data} />
          </div>
          {/* <img src={lineChart} alt="line chart" className="my-4" /> */}
          <h3 className="font-red font-medium text-xl">Filters</h3>
          <h2 className="font-red font-medium text-base">Date</h2>
          <div className="">
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setState([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={state}
            />
            ;
          </div>
          <h2 className="font-red font-medium text-base">Sentiments</h2>
          <h2 className="font-red font-medium text-base">Relevant</h2>
        </div>
      </div>
    </section>
  );
};

export default Mentions;
