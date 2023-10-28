/*
All sections should be imported to this index component and added as children to the component
*/

import Navbar from "../../components/Navbar";
import CTA from "./sections/CTA";
import CarouselSection from "./sections/Carousel";
import Design from "./sections/Design";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Insights from "./sections/Insights";
import MediaPlatform from "./sections/MediaPlatform";
import Protect from "./sections/Protect";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Video from "./sections/Video";


const LandingPage = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <main className="max-w-screen font-red overflow-x-hidden">
      <Navbar />
      <Header />
      <MediaPlatform />
      <Insights />
      <Protect />
      <Design />
      <Video />
      <CarouselSection />
      <CTA />
      <Footer />
    </main>
  );
};

export default LandingPage;
