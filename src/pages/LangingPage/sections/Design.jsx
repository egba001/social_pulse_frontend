import image from "../../../assets/connect.png";

const Design = () => {
  return (
    <section className="design-section">
      <div className="container mx-auto px-6 lg:px-24 py-16 lg:py-40">
        <div className="row">
          <div className="text_col w-full md:w-1/2">
            <h2 className="heading_2 text-dark">
              SocialPulse is designed just for{" "}
              <span className="text-green">You</span>
            </h2>
            <p className="paragraph">
              A tool designed to meet your specific needs irrespective of the
              diverse roles you play in your profession. Our goal is to empower
              you with a comprehensive platform that seamlessly aligns with your
              individual and business needs and objectives.
            </p>
          </div>
          <div className="image_col w-full md:w-1/2">
            <img
              src={image}
              alt="map showing human connectivity"
              className="image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Design;
