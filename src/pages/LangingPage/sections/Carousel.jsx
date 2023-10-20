import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from "../../../components/Card"
import { teamMembers } from "../../../data/data"

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 0
    }
};

const CarouselSection = () => {
    return (
        <div className="py-36 lg:px-36 px-6">
            <h2 className="heading_2 text-dark text-center mb-4">Meet the <span className="text-green">team</span></h2>
        <Carousel
            responsive={responsive}
            autoPlaySpeed={2300}
            keyBoardControl={true}
            autoPlay
            rewind={true}
            rewindWithAnimation={true}
            arrows
        >
            <Card name={teamMembers[0].name} image={teamMembers[0].image} track={teamMembers[0].track} />
            <Card name={teamMembers[1].name} image={teamMembers[1].image} track={teamMembers[1].track} />
            <Card name={teamMembers[2].name} image={teamMembers[2].image} track={teamMembers[2].track} />
            <Card name={teamMembers[3].name} image={teamMembers[3].image} track={teamMembers[3].track} />
            <Card name={teamMembers[4].name} image={teamMembers[4].image} track={teamMembers[4].track} />
            <Card name={teamMembers[5].name} image={teamMembers[5].image} track={teamMembers[5].track} />
            <Card name={teamMembers[6].name} image={teamMembers[6].image} track={teamMembers[6].track} />
            <Card name={teamMembers[7].name} image={teamMembers[7].image} track={teamMembers[7].track} />
            <Card name={teamMembers[8].name} image={teamMembers[8].image} track={teamMembers[8].track} />
            <Card name={teamMembers[9].name} image={teamMembers[9].image} track={teamMembers[9].track} />
            <Card name={teamMembers[10].name} image={teamMembers[10].image} track={teamMembers[10].track} />
            <Card name={teamMembers[11].name} image={teamMembers[11].image} track={teamMembers[11].track} />
            <Card name={teamMembers[12].name} image={teamMembers[12].image} track={teamMembers[12].track} />
        </Carousel>
        </div>
    )
}

export default CarouselSection