import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";
import HeroSection from "../components/HeroSection";
import useScrollFade from "../hooks/useScrollFade";
import NewsSection from "../components/NewsSection";
import MeetOurTeam from "../components/MeetOurTeam";
import Transformation from "../components/Transformation";
import IndustriesSection from "../components/IndustriesSection";
import WhyChooseUs from "../components/WhyChooseUs";
import FeaturedProjects from "../components/FeaturedProjects";
const Home = () => {
  useScrollFade(); // default class "fade-up"

  return (
    <>
      <HeroSection className="fade-up" />
      <AboutSection className="fade-right" />
      <ServiceSection className="fade-left" /> 
      <FeaturedProjects className="fade-up" />
      <WhyChooseUs className="fade-left" />
      <IndustriesSection className="fade-right" />
      <MeetOurTeam className="fade-up" />
      <Transformation className="fade-left" />
      <NewsSection className="fade-right" />

    </>
  );
};

export default Home;