/*
All sections should be imported to this index component and added as children to the component
*/

import Navbar from "../../components/Navbar";
import LandingPageLayout from "../../layout/LandingPageLayout";
import CTA from "./sections/CTA";
import Design from "./sections/Design";
import Header from "./sections/Header";
import MediaPlatform from "./sections/MediaPlatform";
import Protect from "./sections/Protect";

const LandingPage = () => {
  return (
    <>
      <LandingPageLayout className="text-green-400 text-2xl">
        <Navbar />
      </LandingPageLayout>
      <Header />
      <MediaPlatform />
      <Protect />
      <Design />
      <CTA />
    </>
  );
};

export default LandingPage;
