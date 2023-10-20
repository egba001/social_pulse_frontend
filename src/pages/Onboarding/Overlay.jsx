import { Oval } from  'react-loader-spinner';
import { useState, useEffect } from 'react';

const texts = [
    "Checking social media platforms...",
    "Analyzing data..."
]


const Overlay = () => {

    const [ activeText, setActiveText ] = useState(texts[0]);

    useEffect(() => {
      setActiveText(texts[0])
      setTimeout(() => setActiveText(texts[1]), 4000)

      document.body.style.overflow = 'hidden';
      return () => {
        clearTimeout()
      }
    }, [])

    return (
        <div className="absolute bg-white/[.8] z-10 top-0 left-0 w-full h-screen flex items-center justify-center">
            <div className='w-full flex flex-col items-center justify-center'>
            <Oval
                height={80}
                width={80}
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#4fa94d"
                strokeWidth={6}
                strokeWidthSecondary={6}
            />
            <p className='text-center mt-4 mx-auto w-fit'>{activeText}</p>
            </div>
        </div>
    )
}

export default Overlay;