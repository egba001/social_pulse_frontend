import Selector from '../../components/Selector';
import logo from './../../assets/Logo.svg';
import image from './../../assets/gstarted.png';
import facebook from './../../assets/facebook.svg';
import ig from './../../assets/ig.svg';
import twit from './../../assets/twit.svg';
import tr from './../../assets/tr.svg';
import Overlay from './Overlay';
import { FormContext } from '../../context/FormContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const GetStarted = () => {

    const { formData, handleCheckboxChange } = useContext(FormContext)

    return (
        <div className='font-red w-full mb-24 flex-col flex items-center'>
            {
                false &&
                <Overlay />
            }
            <div className="container pt-10 mx-auto flex justify-between px-4 lg:px-8 mb-8">
                <div>
                    <img src={logo} alt="Social Pulse logo" className='cursor-pointer mb-12' />
                    <h1 className='text-[18px] lg:text-[36px] text-[#111111] font-semibold mb-6'>Let&#39;s get you started</h1>
                    <p className='text-[14px] lg:text-[20px] text-[#111111] mb-6'>Enter keywords or phrases similar or relating to your brand</p>
                    <Selector />
                    <h3 className='text-[20px] text-[#111111] my-6'>Select social media platform</h3>
                    <label className="flex items-center mb-3  border border-gray-200 cursor-pointer rounded w-[13rem] ">
                        <img src={facebook} alt="Facebook logo" className='ml-3 mr-3' />
                        <p className="w-full cursor-pointer py-4 pr-4 text-sm font-medium text-gray-900">Facebook</p>
                        <input id="facebook" type="checkbox" checked={formData.platforms.facebook} onChange={handleCheckboxChange} name="facebook" className="w-full px-4 h-full text-green bg-gray-100 border-gray-300 rounded cursor-pointer " />
                    </label>
                    <label className="flex items-center mb-3 border border-gray-200 cursor-pointer rounded w-[13rem] " >
                        <img src={ig} alt="Facebook logo" className='ml-3 mr-3' />
                        <p className="w-full cursor-pointer py-4 pr-4 text-sm font-medium text-gray-900">Instagram</p>
                        <input id="instagram" type="checkbox" checked={formData.platforms.instagram} onChange={handleCheckboxChange} name="instagram" className="w-full px-4 h-full text-green bg-gray-100 border-gray-300 rounded cursor-pointer " />
                    </label>
                    <label className="flex items-center mb-3 border border-gray-200 cursor-pointer rounded w-[13rem] " >
                        <img src={twit} alt="Facebook logo" className='ml-3 mr-3' />
                        <p className="w-full cursor-pointer py-4 pr-4 text-sm font-medium text-gray-900">Twitter</p>
                        <input id="twitter" type="checkbox" checked={formData.platforms.twitter} onChange={handleCheckboxChange} name="twitter" className="w-full px-4 h-full text-green bg-gray-100 border-gray-300 rounded cursor-pointer " />
                    </label>
                    <label className="flex items-center mb-3 border border-gray-200 cursor-pointer rounded w-[13rem] " >
                        <img src={tr} alt="Facebook logo" className='ml-3 mr-3' />
                        <p className="w-full cursor-pointer py-4 pr-4 text-sm font-medium text-gray-900">Threads</p>
                        <input id="threads" type="checkbox" checked={formData.platforms.threads} onChange={handleCheckboxChange} name="threads" className="w-full px-4 h-full text-green bg-gray-100 border-gray-300 rounded cursor-pointer " />
                    </label>
                </div>
                <div className='hidden lg:block w-[50%]'>
                    <img src={image} alt="Illustration" />
                </div>
            </div>
            <Link to="/dashboard" className="bg-green rounded-md text-white w-full py-2 text-center lg:w-[30%] mx-auto">Continue</Link>
        </div>
    )
}

export default GetStarted;