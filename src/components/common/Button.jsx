import { BiRightArrowCircle } from 'react-icons/bi';

const Button = () => {
    return (
        <button className="cursor-pointer flex items-center space-x-2 text-white font-medium px-8 py-2 bg-green rounded-md ">
            <span>Get Started</span>
            <BiRightArrowCircle />
        </button>
    )
}

export default Button;