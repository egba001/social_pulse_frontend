const CTA = () => {
  return (
    <section className="bg-purple text-center">
      <div className="container mx-auto px-6 lg:px-24 py-16 lg:py-40" data-aos="flip-up" data-aos-duration="2000">
        <div className="flex flex-col gap-10 items-center">
          <h2 className="heading_2 text-white">
            Ready to maximize your brand on social media?
          </h2>
          <div className="form w-full lg:w-1/2 flex flex-col md:flex-row items-center gap-2">
            <input
              type="text"
              placeholder="Enter Email Address"
              className="outline-none p-2 px-4 w-full md:w-[80%] rounded"
            />
            <button
              type="submit"
              className="bg-green rounded-md text-white w-full md:w-[20%] py-2 text-center"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
