import { useState } from "react";
import Tab from "../components/Tab";
import ExportRightPanel from "../components/ExportRightPanel";

const EmailExport = () => {
  const [toggle, setToggle] = useState(3);

  const updateToggle = (id) => {
    setToggle(id);
  };

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 h-full px-2 md:px-0">
        <div className="left-panel grid-cols-1 md:col-span-3 h-full">
          {/* tab */}

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0">
            <h3 className="font-red font-medium text-xl">
              Export Email Report
            </h3>

            <Tab toggle={toggle} updateToggle={updateToggle} />
          </div>

          {/* Daily Tab */}
          <article className={toggle === 1 ? "block" : "hidden"}>
            {/* cards display starts here */}
            <aside className="card bg-white rounded-2xl shadow-sm p-4 px-6 mt-12">
              <p className="font-red font-normal text-lg text-text_color">
                Select what you like to add on your report
              </p>
              <div className="box my-10 flex items-center gap-4 flex-wrap">
                <div className="checkbox flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="all-mentions"
                    id="all-mentions"
                    className=""
                  />
                  <label
                    htmlFor="all-mentions"
                    className="font-red font-normal text-base text-[#111111] cursor-pointer"
                  >
                    All Mentions
                  </label>
                </div>
                <div className="checkbox flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="most-popular"
                    id="most-popular"
                    className=""
                  />
                  <label
                    htmlFor="most-popular"
                    className="font-red font-normal text-base text-[#111111] cursor-pointer"
                  >
                    Most Popular Mentions
                  </label>
                </div>
                <div className="checkbox flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="most-recent"
                    id="most-recent"
                    className=""
                  />
                  <label
                    htmlFor="most-recent"
                    className="font-red font-normal text-base text-[#111111] cursor-pointer"
                  >
                    Most Recent Mentions
                  </label>
                </div>
                <div className="checkbox flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="sentiment-graph"
                    id="sentiment-graph"
                    className=""
                  />
                  <label
                    htmlFor="sentiment-graph"
                    className="font-red font-normal text-base text-[#111111] cursor-pointer"
                  >
                    Sentiment Graph
                  </label>
                </div>
              </div>
            </aside>
          </article>
          {/* Weekly Tab */}
          <article className={toggle === 2 ? "block" : "hidden"}>
            {/* cards display starts here */}
            <aside className="card bg-white rounded-2xl shadow-sm p-4 px-6 mt-12">
              <p className="font-red font-normal text-lg text-text_color">
                Select what you like to add on your report
              </p>
              <div className="box my-10 flex items-center gap-4 flex-wrap">
                <div className="checkbox flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="all-mentions-weekly"
                    id="all-mentions-weekly"
                    className=""
                  />
                  <label
                    htmlFor="all-mentions-weekly"
                    className="font-red font-normal text-base text-[#111111] cursor-pointer"
                  >
                    All Mentions
                  </label>
                </div>
                <div className="checkbox flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="most-popular-weekly"
                    id="most-popular-weekly"
                    className=""
                  />
                  <label
                    htmlFor="most-popular-weekly"
                    className="font-red font-normal text-base text-[#111111] cursor-pointer"
                  >
                    Most Popular Mentions
                  </label>
                </div>
                <div className="checkbox flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="most-recent-weekly"
                    id="most-recent-weekly"
                    className=""
                  />
                  <label
                    htmlFor="most-recent-weekly"
                    className="font-red font-normal text-base text-[#111111] cursor-pointer"
                  >
                    Most Recent Mentions
                  </label>
                </div>
                <div className="checkbox flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="sentiment-graph-weekly"
                    id="sentiment-graph-weekly"
                    className=""
                  />
                  <label
                    htmlFor="sentiment-graph-weekly"
                    className="font-red font-normal text-base text-[#111111] cursor-pointer"
                  >
                    Sentiment Graph
                  </label>
                </div>
              </div>
            </aside>
          </article>
          {/* Monthly Tab */}
          <article className={toggle === 3 ? "block" : "hidden"}>
            {/* cards display starts here */}
            <aside className="card bg-white rounded-2xl shadow-sm p-4 px-6 mt-12">
              <p className="font-red font-normal text-lg text-text_color">
                Select what you like to add on your report
              </p>
              <div className="box my-10 flex items-center gap-4 flex-wrap">
                <div className="checkbox flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="all-mentions-monthly"
                    id="all-mentions-monthly"
                    className=""
                  />
                  <label
                    htmlFor="all-mentions-monthly"
                    className="font-red font-normal text-base text-[#111111] cursor-pointer"
                  >
                    All Mentions
                  </label>
                </div>
                <div className="checkbox flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="most-popular-monthly"
                    id="most-popular-monthly"
                    className=""
                  />
                  <label
                    htmlFor="most-popular-monthly"
                    className="font-red font-normal text-base text-[#111111] cursor-pointer"
                  >
                    Most Popular Mentions
                  </label>
                </div>
                <div className="checkbox flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="most-recent-monthly"
                    id="most-recent-monthly"
                    className=""
                  />
                  <label
                    htmlFor="most-recent-monthly"
                    className="font-red font-normal text-base text-[#111111] cursor-pointer"
                  >
                    Most Recent Mentions
                  </label>
                </div>
                <div className="checkbox flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="sentiment-graph-monthly"
                    id="sentiment-graph-monthly"
                    className=""
                  />
                  <label
                    htmlFor="sentiment-graph-monthly"
                    className="font-red font-normal text-base text-[#111111] cursor-pointer"
                  >
                    Sentiment Graph
                  </label>
                </div>
              </div>
            </aside>
          </article>

          {/* email */}
          <aside className="card bg-white rounded-2xl shadow-sm p-4 px-6 my-4">
            <p className="font-red font-normal text-lg text-text_color">
              Enter Email Address
            </p>
            <form>
              <input
                type="email"
                placeholder="merrygadgetstores@gmail.com"
                className="max-w-[290px] w-full h-11 border border-text_color rounded outline-none my-6 font-red font-normal text-text_color px-2"
              />
              <div>
                <button className="bg-green font-red font-normal text-base py-3 px-6 mt-10 text-white rounded">
                  Add Email Address
                </button>
              </div>
            </form>
          </aside>

          {/* export button */}
          <div className="mx-auto text-center mt-12">
            <button className="bg-green font-red font-normal text-base py-3 px-6 text-white rounded">
              Export Report
            </button>
          </div>
        </div>
        <ExportRightPanel />
      </div>
    </section>
  );
};

export default EmailExport;
