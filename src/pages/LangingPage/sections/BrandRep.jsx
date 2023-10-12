import Button from '../../../components/common/Button';
import SectionsLayout from '../../../layout/SectionsLayout';
import brandRep from './../../../assets/brandRep.png';

const BrandRep = () => {
    return (
        <SectionsLayout>
            <div className="flex flex-col lg:flex-row-reverse py-0 lg:py-24 justify-between lg:items-center w-full">
                <img src={brandRep} alt="chart" className='drop-shadow lg:w-[50%] mb-8 lg:mb-0' />
                <article className='lg:w-[45%] w-full'>
                    <h2 className='text-2xl lg:text-3xl font-bold mb-4 text-[#111]'><span className='text-green'>Protect</span> your brand reputation on social media</h2>
                    <p className='text-[#393939] mb-6 text-base lg:text-[20px] font-normal tracking-tight'>Stay vigilant with the ability to monitor emerging threats across social media. With SocialPulse, our  smart, real-time alert system, you can respond swiftly and confidently to  potential problems before it  becomes complex.</p>
                    <Button />
                </article>
            </div>
        </SectionsLayout>
    )
}

export default BrandRep;