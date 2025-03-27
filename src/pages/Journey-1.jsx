import Navbar from "./Navbar"
import { Journey } from "./Journey"
import Journey1 from "./Journey-1"
import { motion } from "framer-motion"
import { useEffect, useState } from "react";

const LandingV2 = () => {
  const [scrollDepth, setScrollDepth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollDepth(scrollY / maxScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-color">
      <Navbar />

      <div className="relative overflow-hidden w-full text-center px-4 pb-8 bg-color">
        <motion.div 
          className="absolute inset-0 bg-[url('/wave.svg')] bg-repeat-x bg-color"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          style={{ backgroundColor: `rgba(0, 0, 50, ${scrollDepth * 0.5})` }} 
        />

        {/* Content */}
        <div className="max-w-4xl mx-auto mt-24 mb-8 relative">
          <h1 className="text-4xl md:text-7xl font-bold mb-4">
            Welcome to Elorca Port
          </h1>
          <p className="text-lg md:text-xl bg-gradient-to-r from-[#8b98ba] to-[#081b33] bg-clip-text text-transparent mb-6">
            Elorca Port where you find one-stop IoT solutions for your Project.
            <br />
            We serve good that helps you.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 px-8 text-lg text-gray-200 font-semibold rounded">
            See More
          </button>
        </div>

        {/* Market Widgets Layout */}
        <div className="relative w-full max-w-7xl mx-auto bg-color">
          {/* Floating Animation for Corner Widgets */}
          <motion.div
            className="absolute -top-20 left-[-34px] w-[200px] h-[200px]"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src="/widget.png" alt="Market Widget" width={850} height={500} className="mx-auto" />
            <h3 className="text-gray-800 font-medium text-lg">Market Widget</h3>
          </motion.div>

          <motion.div
            className="absolute -top-14 right-0 text-center w-[200px] h-[200px]"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src="/Iot.png" alt="IoT Energy Market" width={250} height={250} className="mx-auto" />
            <h3 className="text-gray-800 font-medium text-lg">IoT Energy Market</h3>
          </motion.div>

          {/* Center - Port Image */}
          <motion.div className="mx-auto mt-20 mb-32">
            <img src="/port-bg.png" alt="Elorca Port" width={850} height={500} className="mx-auto" />
          </motion.div>

          {/* Bottom Floating Images */}
          <motion.div
            className="absolute bottom-0 left-[-34px] w-[200px] text-center"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src="/pharma.png" alt="Pharma Market" width={250} height={250} className="mx-auto" />
            <h3 className="text-gray-800 font-medium text-lg">Pharma Market</h3>
          </motion.div>

          <motion.div
            className="absolute -bottom-14 -right-14 text-center"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src="/hardware.png" alt="Hardware Market" width={250} height={250} className="mx-auto" />
            <h3 className="text-gray-800 font-medium text-lg">Hardware Market</h3>
          </motion.div>
        </div>
      </div>

      <div className="mb-20 bg-color">
        <Journey1 />
      </div>

      <div className="mt-36 bg-color">
        <Journey />
      </div>
    </div>
  )
}

export default LandingV2
