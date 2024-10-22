import Contact from "./About/page";
import Banner from "./Banner/page";
import FeaturedList from "./Featured/page";
import Hero from "./Hero/page";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <FeaturedList />
      <Banner/>
      <Contact />
    </>
  );
};

export default LandingPage;
