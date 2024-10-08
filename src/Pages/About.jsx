import { useEffect } from 'react';
import Culture from "../Components/AboutComponents/Culture";
import ContentSection from "../Components/AboutComponents/ContentSection";
import Started from "../Components/Started";
import PressRoom from "../Components/AboutComponents/PressRoom";
import TeamMemberCard from "../Components/AboutComponents/TeamMemberCard";
// import AboutHeader from "../Components/AboutComponents/AboutHeader";
import Platform from "../Components/AboutComponents/Platform";
import Certificate from "../Components/AboutComponents/Certificate";
import Beneficial from "../Components/AboutComponents/Beneficial";
import Partners from "../Components/AboutComponents/Partners";
import CompanySection from '../Components/AboutComponents/CompanySection';


const About = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* <AboutHeader /> */}
      <Beneficial />
      <CompanySection />
      <Certificate />
      <Platform />
      <Started />
      <Partners/>
      <PressRoom />
      <TeamMemberCard />
      <Culture />
      <ContentSection />
    </>
  );
};

export default About;
