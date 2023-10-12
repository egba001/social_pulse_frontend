import logo from "../../../assets/socialPulse.png";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { BiLogoInstagramAlt } from "react-icons/bi";

const Footer = () => {
  const constants = [
    {
      heading: "company",
      links: [
        {
          title: "About Us",
          link: "/",
        },
        {
          title: "Contact Us",
          link: "/",
        },
        {
          title: "Meet the Team",
          link: "/",
        },
      ],
    },
    {
      heading: "features",
      links: [
        {
          title: "Sentimental Analysis",
          link: "/",
        },
        {
          title: "Competitor Analysis",
          link: "/",
        },
      ],
    },
    {
      heading: "resources",
      links: [
        {
          title: "Blog ",
          link: "/",
        },
        {
          title: "FAQs",
          link: "/",
        },
        {
          title: "Demo",
          link: "/",
        },
      ],
    },
    {
      heading: "help",
      links: [
        {
          title: "Chat with Support ",
          link: "/",
        },
      ],
    },
  ];
  return (
    <footer>
      <div className="container mx-auto px-6 lg:px-24 py-16 lg:py-40">
        <div className="flex flex-col md:flex-row gap-10 items-start justify-between">
          <div className="col flex flex-col gap-16 justify-between">
            <div className="logo">
              <img src={logo} alt="socialplus logo" />
            </div>
            <div className="socials flex items-center gap-4">
              <FaXTwitter className="cursor-pointer" />
              <FaLinkedinIn className="cursor-pointer" />
              <BiLogoInstagramAlt className="cursor-pointer" />
              <FaFacebookF className="cursor-pointer" />
            </div>
          </div>
          {constants.map((i) => (
            <div className="col">
              <h5 className="font-red font-semibold text-sm text-gray-700 uppercase mb-3">
                {i.heading}
              </h5>
              <ul>
                {i.links.map((link) => (
                  <li className="mb-2">
                    <a
                      href={link.link}
                      className="font-red text-sm font-normal"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <hr className="border-gray-200 my-10" />
        <div className="flex flex-col md:flex-row items-center justify-between">
          <span className="font-red font-normal text-xs text-gray-500">
            @ 2023 Utiva Hackthon Project Team 5 , Inc. All rights reserved.
          </span>
          <div className="flex items-center gap-2">
            <span className="font-red font-normal text-xs text-gray-500">
              Term of Use
            </span>
            <span className="font-red font-normal text-xs text-gray-500">
              Privacy Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
