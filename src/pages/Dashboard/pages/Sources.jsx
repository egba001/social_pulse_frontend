import facebook from "../../../assets/facebook.svg";
import instagram from "../../../assets/instagram.png";
import twitter from "../../../assets/twitter.png";
import { useState } from "react";
import Tab from "../components/Tab";
import RightPanel from "../components/RightPanel";

const Sources = () => {
  const [toggle, setToggle] = useState(3);

  const updateToggle = (id) => {
    setToggle(id);
  };

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 h-full px-2 md:px-0">
        <div className="left-panel grid-cols-1 md:col-span-3 h-full">
          {/* tab */}

          <div className="flex items-center justify-between">
            <h3 className="font-red font-medium text-xl">Sources</h3>

            <Tab toggle={toggle} updateToggle={updateToggle} />
          </div>

          {/* Daily Tab */}
          <article className={toggle === 1 ? "block" : "hidden"}>
            <div className="flex items-center justify-between my-6">
              <div className="left">
                <p className="font-red font-normal text-base text-dark">
                  Sort by: <span>Most Recent</span>
                </p>
              </div>
              <div className="left"></div>
            </div>
            {/* cards display starts here */}
            <aside className="card bg-white rounded-2xl shadow-sm p-4 px-6 my-2">
              {/* heading */}
              <div className="flex items-center justify-between">
                <h4 className="font-red font-normal text-sm uppercase">
                  sources
                </h4>
                <h4 className="font-red font-normal text-sm uppercase">
                  mentions
                </h4>
                <h4 className="font-red font-normal text-sm uppercase">
                  engagement
                </h4>
              </div>
              {/* coming from the backend */}
              <article className="my-7">
                <div className="display flex items-center justify-between py-1 my-1 border-t border-b">
                  <div className="source flex items-center gap-4 w-1/3">
                    <div className="source_icon brand-logo flex-none w-[30px] h-[30px] flex items-center justify-center rounded-[50%]">
                      <img src={facebook} alt="facebook logo" />
                    </div>
                    <div className="source_name">
                      <p className="font-red font-normal text-base text-[#111111] capitalize">
                        Facebook
                      </p>
                    </div>
                  </div>
                  {/* mentions stats */}
                  <div className="source_count w-1/3">
                    <p className="font-red font-normal text-base text-center text-[#111111] capitalize">
                      372
                    </p>
                  </div>
                  {/* engagement stats */}
                  <div className="source_engagement w-1/3">
                    <p className="font-red font-normal text-base text-center text-[#111111] capitalize">
                      5,111
                    </p>
                  </div>
                </div>
              </article>
            </aside>
          </article>
          {/* Weekly Tab */}
          <article className={toggle === 2 ? "block" : "hidden"}>
            <div className="flex items-center justify-between my-6">
              <div className="left">
                <p className="font-red font-normal text-base text-dark">
                  Sort by: <span>Most Recent</span>
                </p>
              </div>
              <div className="left"></div>
            </div>
            {/* cards display starts here */}
            <aside className="card bg-white rounded-2xl shadow-sm p-4 px-6 my-2">
              {/* heading */}
              <div className="flex items-center justify-between">
                <h4 className="font-red font-normal text-sm uppercase">
                  sources
                </h4>
                <h4 className="font-red font-normal text-sm uppercase">
                  mentions
                </h4>
                <h4 className="font-red font-normal text-sm uppercase">
                  engagement
                </h4>
              </div>
              {/* coming from the backend */}
              <article className="my-7">
                <div className="display flex items-center justify-between py-1 my-1 border-t border-b">
                  <div className="source flex items-center gap-4 w-1/3">
                    <div className="source_icon brand-logo flex-none w-[30px] h-[30px] flex items-center justify-center rounded-[50%]">
                      <img src={instagram} alt="facebook logo" />
                    </div>
                    <div className="source_name">
                      <p className="font-red font-normal text-base text-[#111111] capitalize">
                        Instagram
                      </p>
                    </div>
                  </div>
                  {/* mentions stats */}
                  <div className="source_count w-1/3">
                    <p className="font-red font-normal text-base text-center text-[#111111] capitalize">
                      372
                    </p>
                  </div>
                  {/* engagement stats */}
                  <div className="source_engagement w-1/3">
                    <p className="font-red font-normal text-base text-center text-[#111111] capitalize">
                      5,111
                    </p>
                  </div>
                </div>
              </article>
            </aside>
          </article>
          {/* Monthly Tab */}
          <article className={toggle === 3 ? "block" : "hidden"}>
            <div className="flex items-center justify-between my-6">
              <div className="left">
                <p className="font-red font-normal text-base text-dark">
                  Sort by: <span>Most Recent</span>
                </p>
              </div>
              <div className="left"></div>
            </div>
            {/* cards display starts here */}
            <aside className="card bg-white rounded-2xl shadow-sm p-4 px-6 my-2">
              {/* heading */}
              <div className="flex items-center justify-between">
                <h4 className="font-red font-normal text-sm uppercase">
                  sources
                </h4>
                <h4 className="font-red font-normal text-sm uppercase">
                  mentions
                </h4>
                <h4 className="font-red font-normal text-sm uppercase">
                  engagement
                </h4>
              </div>
              {/* coming from the backend */}
              <article className="my-7">
                <div className="display flex items-center justify-between py-1 my-1 border-t border-b">
                  <div className="source flex items-center gap-4 w-1/3">
                    <div className="source_icon brand-logo flex-none w-[30px] h-[30px] flex items-center justify-center rounded-[50%]">
                      <img src={twitter} alt="facebook logo" />
                    </div>
                    <div className="source_name">
                      <p className="font-red font-normal text-base text-[#111111] capitalize">
                        Twitter
                      </p>
                    </div>
                  </div>
                  {/* mentions stats */}
                  <div className="source_count w-1/3">
                    <p className="font-red font-normal text-base text-center text-[#111111] capitalize">
                      372
                    </p>
                  </div>
                  {/* engagement stats */}
                  <div className="source_engagement w-1/3">
                    <p className="font-red font-normal text-base text-center text-[#111111] capitalize">
                      5,111
                    </p>
                  </div>
                </div>
              </article>
            </aside>
          </article>
        </div>
        <RightPanel />
      </div>
    </section>
  );
};

export default Sources;
