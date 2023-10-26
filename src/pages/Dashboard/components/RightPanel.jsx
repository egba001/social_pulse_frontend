import facebook from "../../../assets/facebook.svg";
import instagram from "../../../assets/instagram.png";
import twitter from "../../../assets/twitter.png";
import thread from "../../../assets/thread.png";
import tiktok from "../../../assets/tiktok.png";
import { TiTimes } from "react-icons/ti";
import Calender from "../components/Calender";

const RightPanel = () => {
  return (
    <div className="right-panel grid-cols-1 md:col-span-2 h-full bg-white p-2 px-4 rounded-lg">
      {/*  */}
      <h3 className="font-red font-medium text-xl">Filters</h3>
      <div className="socials flex items-center gap-2 flex-wrap">
        {/* facebook */}
        <div className="social-platform max-w-[170px] w-full flex items-center gap-2 px-3 py-1 rounded-lg border">
          <div className="source_icon brand-logo flex-none w-[30px] h-[30px] flex items-center justify-center rounded-[50%]">
            <img src={facebook} alt="facebook logo" />
          </div>
          <div className="source_name">
            <p className="font-red font-normal text-base text-[#111111] capitalize">
              Facebook
            </p>
          </div>
          <div className="input-box flex-1 text-end">
            <input
              type="checkbox"
              name="facebook"
              id="facebook"
              className="cursor-pointer"
            />
          </div>
        </div>
        {/* instagram */}
        <div className="social-platform max-w-[170px] w-full flex items-center gap-2 px-3 py-1 rounded-lg border">
          <div className="source_icon brand-logo flex-none w-[30px] h-[30px] flex items-center justify-center rounded-[50%]">
            <img src={instagram} alt="facebook logo" />
          </div>
          <div className="source_name">
            <p className="font-red font-normal text-base text-[#111111] capitalize">
              Instagram
            </p>
          </div>
          <div className="input-box flex-1 text-end">
            <input
              type="checkbox"
              name="instagram"
              id="instagram"
              className="cursor-pointer"
            />
          </div>
        </div>
        {/* twitter */}
        <div className="social-platform max-w-[170px] w-full flex items-center gap-2 px-3 py-1 rounded-lg border">
          <div className="source_icon brand-logo flex-none w-[30px] h-[30px] flex items-center justify-center rounded-[50%]">
            <img src={twitter} alt="facebook logo" />
          </div>
          <div className="source_name">
            <p className="font-red font-normal text-base text-[#111111] capitalize">
              Twitter
            </p>
          </div>
          <div className="input-box flex-1 text-end">
            <input
              type="checkbox"
              name="instagram"
              id="instagram"
              className="cursor-pointer"
            />
          </div>
        </div>
        {/* thread */}
        <div className="social-platform max-w-[170px] w-full flex items-center gap-2 px-3 py-1 rounded-lg border">
          <div className="source_icon brand-logo flex-none w-[30px] h-[30px] flex items-center justify-center rounded-[50%]">
            <img src={thread} alt="facebook logo" />
          </div>
          <div className="source_name">
            <p className="font-red font-normal text-base text-[#111111] capitalize">
              Threads
            </p>
          </div>
          <div className="input-box flex-1 text-end">
            <input
              type="checkbox"
              name="instagram"
              id="instagram"
              className="cursor-pointer"
            />
          </div>
        </div>
        {/* tiktok */}
        <div className="social-platform max-w-[170px] w-full flex items-center gap-2 px-3 py-1 rounded-lg border">
          <div className="source_icon brand-logo flex-none w-[30px] h-[30px] flex items-center justify-center rounded-[50%]">
            <img src={tiktok} alt="facebook logo" />
          </div>
          <div className="source_name">
            <p className="font-red font-normal text-base text-[#111111] capitalize">
              TikTok
            </p>
          </div>
          <div className="input-box flex-1 text-end">
            <input
              type="checkbox"
              name="instagram"
              id="instagram"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* sentiments */}
      <div className="sentiments mt-6">
        <h2 className="font-red font-medium text-base">Selected Keywords</h2>
        <div className="flex items-center flex-wrap gap-3 my-2 mb-7">
          {/* tag */}
          <div className="flex items-center gap-1 border border-[#606060] rounded-xl py-1 px-2 bg-[#cfcfcf]">
            <div className="cancel_btn bg-[#606060] rounded-full">
              <TiTimes className="text-white p-[2px]" />
            </div>
            <div className="text text-[#606060F] capitalize font-red font-normal text-sm">
              gadgets
            </div>
          </div>
          {/* tag */}
          <div className="flex items-center gap-1 border border-[#606060] rounded-xl py-1 px-2 bg-[#cfcfcf]">
            <div className="cancel_btn bg-[#606060] rounded-full">
              <TiTimes className="text-white p-[2px]" />
            </div>
            <div className="text text-[#606060F] capitalize font-red font-normal text-sm">
              samsung
            </div>
          </div>
        </div>
        {/* date */}
        <div className="date">
          <h2 className="font-red font-medium text-base">Date</h2>
          <Calender />
        </div>
        {/* relevance */}
        <div className="relevance">
          <h2 className="font-red font-medium text-base">Relevance</h2>
          <div className="flex items-center gap-2">
            <input type="checkbox" name="all-sources" id="all-sources" />
            <label
              htmlFor="all-sources"
              className="font-red font-normal text-lg text-[#111111] cursor-pointer"
            >
              All sources
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" name="most-recent" id="most-recent" />
            <label
              htmlFor="most-recent"
              className="font-red font-normal text-lg text-[#111111] cursor-pointer"
            >
              Most recent
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" name="most-popular" id="most-popular" />
            <label
              htmlFor="most-popular"
              className="font-red font-normal text-lg text-[#111111] cursor-pointer"
            >
              Most popular
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="important-sources"
              id="important-sources"
            />
            <label
              htmlFor="important-sources"
              className="font-red font-normal text-lg text-[#111111] cursor-pointer"
            >
              Important sources
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
