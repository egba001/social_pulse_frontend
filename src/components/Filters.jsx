import ig from './../assets/ig.svg';
import fb from './../assets/fb.svg';
import twit from './../assets/twit.svg';
import tr from './../assets/tr.svg';
import { useContext } from 'react';
import { FormContext } from '../context/FormContext';

const Filters = () => {

    const { formData, handleCheckboxChange } = useContext(FormContext)

    return (
        <div className="p-4">
            <h2 className="text-[24px] font-medium text-dark mb-6">Filters</h2>
            <h3 className="text-[20px] font-medium">Social Media Sources</h3>
            <div className="w-full grid gap-2 grid-cols-2">
            <label className="flex items-center mb-3 border border-gray-200 cursor-pointer rounded w-full " >
                        <img src={twit} alt="Twitter logo" className='ml-3 mr-3' />
                        <p className="w-full cursor-pointer py-4 pr-4 text-sm font-medium text-gray-900">Twitter</p>
                        <input id="twitter" type="checkbox" checked={formData.platforms.twitter} onChange={handleCheckboxChange} name="twitter" className="w-[1/2] px-4 mr-3 h-full text-green bg-gray-100 border-gray-300 rounded cursor-pointer " />
            </label>
            <label className="flex items-center mb-3 border border-gray-200 cursor-pointer rounded w-full " >
                        <img src={ig} alt="Instagram logo" className='ml-3 mr-3' />
                        <p className="w-full cursor-pointer py-4 pr-4 text-sm font-medium text-gray-900">Instagram</p>
                        <input id="instagram" type="checkbox" checked={formData.platforms.instagram} onChange={handleCheckboxChange} name="instagram" className="w-[1/2] px-4 mr-3 h-full text-green bg-gray-100 border-gray-300 rounded cursor-pointer " />
            </label>
            <label className="flex items-center mb-3 border border-gray-200 cursor-pointer rounded w-full " >
                        <img src={tr} alt="Threads logo" className='ml-3 mr-3' />
                        <p className="w-full cursor-pointer py-4 pr-4 text-sm font-medium text-gray-900">Threads</p>
                        <input id="threads" type="checkbox" checked={formData.platforms.threads} onChange={handleCheckboxChange} name="threads" className="w-[1/2] px-4 mr-3 h-full text-green bg-gray-100 border-gray-300 rounded cursor-pointer " />
            </label>
            <label className="flex items-center mb-3 border border-gray-200 cursor-pointer rounded w-full " >
                        <img src={fb} alt="Facebook logo" className='ml-3 mr-3' />
                        <p className="w-full cursor-pointer py-4 pr-4 text-sm font-medium text-gray-900">Facebook</p>
                        <input id="twitter" type="checkbox" checked={formData.platforms.facebook} onChange={handleCheckboxChange} name="facebook" className="w-[1/2] px-4 mr-3 h-full text-green bg-gray-100 border-gray-300 rounded cursor-pointer " />
            </label>
            </div>
        </div>
    )
}

export default Filters;