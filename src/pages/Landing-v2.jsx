import Navbar from "./Navbar"
import { Journey } from "./Journey"
import Journey1 from "./Journey-1"
import { motion } from "framer-motion"
import { useEffect, useState } from "react";
import HeroSection from "./HeroSection";

const LandingV2 = () => {
  // const [scrollDepth, setScrollDepth] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;
  //     const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  //     setScrollDepth(scrollY / maxScroll);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [scrollDepth]);

  return (
    <div className="min-h-screen bg-color">
      <Navbar />

      <HeroSection />

      <div className="mb-20">
        <Journey1 />
      </div>

      {/* <div className="mt-36">
        <Journey />
      </div> */}
    </div>
  )
}

export default LandingV2
