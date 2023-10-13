import SectionsLayout from "../../../layout/SectionsLayout";
import media from './../../../assets/media.png';

const MediaPlatform = () => {
    return (
        <SectionsLayout>
            <div className="flex flex-col protect-section lg:flex-row lg:py-36 py-16 justify-between items-center w-full">
                <article className="lg:w-[60%]" data-aos="fade-right" data-aos-duration="1500">
                    <h2 className='text-2xl lg:text-3xl font-bold mb-4 tracking-tight text-[#111]'>Handle multiple social media platforms with <span className='text-green'>ease</span></h2>
                    <p className='text-[#393939] mb-6 text-base lg:text-[20px] font-normal tracking-tight'>Take out the stress of managing customer engagement and response on all your social media platforms.  SocialPulse gathers all your mentions all over social media and puts together. This helps your brand boost  its online presence, engage your audience, and stay ahead of the competition. Don&#39;t let social media overwhelm you – conquer it with SocialPulse!</p>
                </article>
                <img src={media} alt="chart" data-aos="fade-left" data-aos-duration="1500" className='drop-shadow lg:w-[35%] mb-8 lg:mb-0' />
            </div>
        </SectionsLayout>
    )
}

export default MediaPlatform;