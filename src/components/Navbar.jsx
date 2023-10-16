import { Link } from 'react-router-dom';
import logo from './../assets/socialPulse.png';

const Navbar = () => {
    return (
        <div className="w-full flex justify-between items-center py-10">
            <img src={logo} alt="Social Pulse logo" className='cursor-pointer' />
            <nav className='hidden lg:block'>
                <ul className='flex items-center space-x-6'>
                    <li className='cursor-pointer hover:text-green'>About</li>
                    <li className='cursor-pointer hover:text-green'>Features</li>
                    <li className='cursor-pointer hover:text-green'>Resources</li>
                    <li className='cursor-pointer hover:text-green'>Demo</li>
                </ul>
            </nav>
            <div className='hidden lg:flex items-center space-x-8'>
                <Link to="/register" className='px-6 text-white cursor-pointer hover:transform hover:-translate-y-1 transition-transform duration-300 ease-in-out bg-green py-2 rounded-lg'>
                    Sign up
                </Link>
                <Link to='/login' className='outline-none text-green cursor-pointer'>Login</Link>
            </div>
        </div>
    )
}

export default Navbar;