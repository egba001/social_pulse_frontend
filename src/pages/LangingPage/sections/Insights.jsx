import Button from '../../../components/common/Button';
import SectionsLayout from '../../../layout/SectionsLayout';
import insights from './../../../assets/insights.png';

const Insights = () => {
    return (
        <SectionsLayout>
            <div className="flex flex-col lg:flex-row justify-between items-center w-full">
                <img src={insights} alt="chart" className='drop-shadow lg:w-[35%] mb-8 lg:mb-0' />
                <article className='lg:w-[55%] w-full'>
                    <h2 className='text-2xl lg:text-3xl font-bold mb-4 text-[#111]'><span className='text-green'>Seamlessly</span> gather insights about your brand </h2>
                    <p className='text-[#393939] mb-6 text-base lg:text-[20px] font-normal tracking-tight'>With SocialPulse, you  can effortlessly gather data from your social media platforms and transform it into valuable insights. This enables your brands understand what people are saying about its products and services, empowering your brand to make well-informed decisions driven by real-time feedback.&#34;</p>
                    <Button />
                </article>
            </div>
        </SectionsLayout>
    )
}

export default Insights;