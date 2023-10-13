import { useState } from 'react';
import logo from './../assets/Logo.svg';
import { AiOutlineClose } from 'react-icons/ai';
import { BiMenu } from 'react-icons/bi';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const openNavMenu = () => {
        setIsOpen(true);
        document.body.style.overflow = "hidden";
    }

    const closeNavMenu = () => {
        setIsOpen(false);
        document.body.style.overflow = "visible";
    }


    return (
        <div className="w-full flex justify-between items-center py-10 px-6 lg:px-12">
            <img src={logo} alt="Social Pulse logo" className='cursor-pointer' />
            <div className='cursor-pointer lg:hidden rounded-full'>
                <BiMenu size={25} onClick={openNavMenu} />
            </div>
            <div
                style={{
                    backgroundImage: "url('/circleBottom.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "80%",
                    backgroundPositionX: "90%",
                    backgroundPositionY: "105%"
                }}
                className={`h-screen fixed pt-10 w-full z-40 ease-in-out duration-300 bg-white top-0 right-0 ${isOpen ? "translate-x-0 " : "translate-x-full "} `}>
                <AiOutlineClose size={25} className='mt-2 mr-2 right-2 absolute cursor-pointer' onClick={closeNavMenu} />
                <img src={logo} alt="Social Pulse logo" className='cursor-pointer ml-2' />
                <nav className='mt-28 mx-auto w-fit mb-10'>
                    <ul className='flex flex-col items-center space-y-4 font-bold text-2xl'>
                        <li className='text-[#111] active:text-green'>About</li>
                        <li className='text-[#111] active:text-green'>Features</li>
                        <li className='text-[#111] active:text-green'>Resources</li>
                        <li className='text-[#111] active:text-green'>Demo</li>
                    </ul>
                </nav>
                <button className='px-6 block text-white w-[15rem] bg-green mx-auto text-center mb-4 py-2 rounded-lg'>
                    Sign up
                </button>
                <button className='outline-none block mx-auto text-green w-[15rem] rounded-xl active:bg-green active:text-white active:border-0 py-2 cursor-pointer border  border-green'>Login</button>
            </div>
            <nav className='hidden lg:block'>
                <ul className='flex items-center space-x-6'>
                    <li className='cursor-pointer hover:text-green'>About</li>
                    <li className='cursor-pointer hover:text-green'>Features</li>
                    <li className='cursor-pointer hover:text-green'>Resources</li>
                    <li className='cursor-pointer hover:text-green'>Demo</li>
                </ul>
            </nav>
            <div className='hidden lg:flex items-center space-x-8'>
                <div className='px-6 text-white cursor-pointer hover:transform hover:-translate-y-1 transition-transform duration-300 ease-in-out bg-green py-2 rounded-lg'>
                    Sign up
                </div>
                <button className='outline-none text-green cursor-pointer'>Login</button>
            </div>
        </div>
    )
}

export default Navbar;