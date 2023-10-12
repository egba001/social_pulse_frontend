import { Link } from "react-router-dom";

const Btn = ({ text, link }) => {
  return (
    <button
      to={link}
      className="bg-green rounded-md text-white w-full py-2 text-center inline-block"
    >
      {text}
    </button>
  );
};

export default Btn;
