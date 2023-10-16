import { Typewriter } from "react-simple-typewriter";

const Header = () => {
  return (
    <header
      className="h-[80vh] w-full font-red border-b border-b-purple-300"
      style={{
        backgroundImage: "url('/circleRight.png'), url('/circleBottom.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "18%, 25%",
        backgroundPositionX: "100%, 0%",
        backgroundPositionY: "-80%, 100%",
      }}
    >
      <div className="container mx-auto px-6 lg:px-24 pt-16 lg:pt-24" data-aos="zoom-in" data-aos-duration="1500">
        <h1 className="text-3xl lg:text-5xl font-bold lg:font-extrabold text-dark mb-6">
          <Typewriter
            words={[
              "Gather insights about your brand",
              "Understand and engage your audience",
              "Maintain your brand reputation",
            ]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={150}
            deleteSpeed={70}
            delaySpeed={1000}
          />
          <span className="block">across social media</span>
        </h1>
        <h2 className="font-normal text-lg mb-6 text-[#393939]">
          Stay ahead on the social space with SocialPulse. Get access reviews,
          mentions and feedback about your brand across social media.
        </h2>
        <form className="lg:w-[70%] w-full mx-auto">
          <div className="w-full border mb-6 border-[#CFCFCF] py-2 px-3 rounded-md">
            <input
              type="email"
              className="w-full outline-none"
              placeholder="Enter Email Address"
            />
          </div>
          <div className="w-[60%] lg:w-[35%] mx-auto">
            <button
              type="submit"
              className="bg-green rounded-md text-white w-full py-2 text-center"
            >
              Get Started
            </button>
          </div>
        </form>
      </div>
    </header>
  );
};

export default Header;
