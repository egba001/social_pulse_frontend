import { BiRightArrowCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Button = () => {
    return (
        <Link to="/register" className="cursor-pointer flex items-center w-fit space-x-2 text-white font-medium px-8 py-2 bg-green rounded-md ">
            <span>Get Started</span>
            <BiRightArrowCircle />
        </Link>
    )
}

export default Button;