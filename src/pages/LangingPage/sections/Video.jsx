import ReactPlayer from 'react-player'

const Video = () => {
    return (
        <section className="py-20 flex bg-[#F4F4F4] items-center justify-center">
            <ReactPlayer url='https://streamable.com/u64645' />
        </section>
    )
}

export default Video