import PropTypes from "prop-types"
const Card = ({ name, image, track }) => {
    return (
        <div className="w-[19rem] h-[22rem] mx-auto">
            <div className="w-full h-[18rem] lg:w-[15rem] lg:h-[15rem] relative overflow-hidden">
                <img src={image} alt={name} className="absolute" />
            </div>
            <h3 className="mb-1 text-[18px] font-medium text-green">{name}</h3>
            <p className="text-[14px]">{track}</p>
        </div>
    )
}

Card.propTypes = {
  image: PropTypes.any,
  name: PropTypes.string,
  track: PropTypes.string
}

export default Card;