/*
All sections should be imported to this index component and added as children to the component
*/

import Navbar from "../../components/Navbar";
import LandingPageLayout from "../../layout/LandingPageLayout";
import Header from "./sections/Header";
import MediaPlatform from "./sections/MediaPlatform";

const LandingPage = () => {
    return (
        <>
            <LandingPageLayout className="text-green-400 text-2xl">
                <Navbar />
            </LandingPageLayout>
            <Header />
            <MediaPlatform />
        </>
    )
}

export default LandingPage;