/*
All sections should be imported to this index component and added as children to the component
*/

import Navbar from "../../components/Navbar";
import LandingPageLayout from "../../layout/LandingPageLayout";
import BrandRep from "./sections/BrandRep";
import Header from "./sections/Header";
import Insights from "./sections/Insights";
import MediaPlatform from "./sections/MediaPlatform";

const LandingPage = () => {
    return (
        <div className="relative">
            <LandingPageLayout className="text-green-400 text-2xl">
                <Navbar />
            </LandingPageLayout>
            <Header />
            <Insights />
            <BrandRep />
            <MediaPlatform />
        </div>
    )
}

export default LandingPage;