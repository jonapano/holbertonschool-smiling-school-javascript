import Navigation  from "../../components/Navigation";
import Testimonial from "../../components/Testimonials/SectionTestimonials";
import PopularTutorials from "../../components/PopularTutorials/VideoSection";
import FreeMembership from "../../components/FreeMembership/FreeMembership";
import LatestVideos from "../../components/LatestVideos";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <Navigation />
      <Testimonial />
      <PopularTutorials />
      <FreeMembership />
      <LatestVideos />
      <Footer />
    </>
  );
};

export default Home;