import PropTypes from "prop-types"
const SectionsLayout = ({children}) => {
    return (
        <section className="relative font-red border-b py-16 lg:pt-0 border-b-purple-300 flex items-center overflow-hidden">
            <div className="absolute -top-12 -right-12 lg:-top-52 lg:right-5 w-[280px] h-[280px] lg:w-[350px] lg:h-[350px] lg:bg-opacity-40 bg-opacity-30 bg-[#5D269D] rounded-full blur"></div>
            <div className="absolute -bottom-64 -left-10 w-[360px] h-[360px] bg-opacity-50 bg-[#B796DE] rounded-full blur"></div>
            <div className="container flex items-center h-screen z-10 mx-auto lg:px-16 px-6">
                {children}
            </div>
        </section>
    )
}

SectionsLayout.propTypes = {
  children: PropTypes.any
}

export default SectionsLayout;