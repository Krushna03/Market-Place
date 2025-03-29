import Navbar from "./Navbar"
import Journey1 from "./Journey-1"
import HeroSection from "./HeroSection";
import Footer from "./Footer";

const LandingV2 = () => {

  return (
    <div className="min-h-screen bg-color">
      <Navbar />

      <HeroSection />

      <div className="">
        <Journey1 />
      </div>

      <Footer />
    </div>
  )
}

export default LandingV2
