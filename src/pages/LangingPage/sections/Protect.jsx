import image from "../../../assets/protect-img.png";
import top from "../../../assets/top.png";
import bottom from "../../../assets/bottom.png";
import Btn from "../../../components/commons/Btn";

const Protect = () => {
  return (
    <section className="protect-section">
      <div className="container mx-auto px-6 lg:px-24 py-36 lg:py-40">
        <div className="row">
          <div className="image_col w-full md:w-2/5">
            <img
              src={image}
              alt="map showing the worlds wireless connectivity"
              className="image"
            />
          </div>
          <div className="text_col w-full md:w-3/5">
            <h2 className="heading_2 text-dark">
              <span className="text-green">Protect</span> your brand reputation
              on social media
            </h2>
            <p className="paragraph">
              Stay vigilant with the ability to monitor emerging threats across
              social media. With SocialPulse, our smart, real-time alert system,
              you can respond swiftly and confidently to potential problems
              before it becomes complex.
            </p>
            <div className="w-1/3 ">
              <Btn text="Get Started" link="/" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Protect;
