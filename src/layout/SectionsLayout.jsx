import PropTypes from "prop-types"
const SectionsLayout = ({children}) => {
    return (
        <section className="relative font-red border-b py-16 pt-8 lg:pt-0 border-b-purple-300 flex items-center overflow-hidden">
            <div className="container flex items-center z-20 mx-auto lg:px-16 px-6">
                {children}
            </div>
        </section>
    )
}

SectionsLayout.propTypes = {
  children: PropTypes.any
}

export default SectionsLayout;
