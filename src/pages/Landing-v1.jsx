import React from 'react'
import { Button } from "@/components/ui/button"
import Navbar from "./Navbar"

const LandingV1 = () => {
  return (
    <div className="h-full">
      <Navbar />

        <div className="pt-20 w-full text-center bg-[#007cc5] px-4 pb-8">
          <div className="max-w-4xl mx-auto mt-20 mb-8">
            <h1 className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-[#d9dee0] to-[#57a1fc] bg-clip-text text-transparent mb-4">Welcome to Elorca Port</h1>
            <p className="text-lg md:text-xl bg-gradient-to-r from-[#d9dee0] to-[#57a1fc] bg-clip-text text-transparent mb-6">
              Elorca Port where you find one stop IoT solution for your Project.
              <br />
              We serve good that helps you.
            </p>
            <Button variant="default" className="bg-blue-500 hover:bg-blue-600 px-8 text-lg text-gray-200 font-semibold">
              See More
            </Button>
          </div>

          {/* Market Widgets Layout */}
          <div className="relative w-full max-w-7xl mx-auto">
            {/* Big Bubble for Market Widget */}
            <div className="absolute -top-20 left-[-34px] w-[200px] h-[200px] bg-white bg-opacity-30 rounded-full flex justify-center items-center shadow-lg backdrop-blur-lg">
              <div className="absolute left-48 top-40 w-16 h-16 bg-white bg-opacity-50 rounded-full backdrop-blur-lg text-black"></div>
              <div className="absolute left-64 top-56 w-10 h-10 bg-white bg-opacity-25 rounded-full backdrop-blur-lg"></div>

              <div className="text-center">
                <img
                  src="/widget.png"
                  alt="Market Widget"
                  width={150}
                  height={150}
                  className="mx-auto"
                />
                <h3 className="text-white font-medium text-lg">Market Widget</h3>
              </div>
            </div>

      {/* IoT Energy Market with Bubble */}
      <div className="absolute top-0 right-10 text-center">
        {/* Connecting bubbles */}
        <div className="absolute top-1/2 right-1/3 w-6 h-6 bg-white bg-opacity-20 rounded-full blur-md animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-white bg-opacity-25 rounded-full blur-lg animate-bounce"></div>

        <div className="mb-2">
          <img
            src="/Iot.png"
            alt="IoT Energy Market"
            width={250}
            height={250}
            className="mx-auto"
          />
        </div>
        <h3 className="text-white font-medium text-lg">IoT Energy Market</h3>
      </div>

      {/* Center - Port Image */}
      <div className="mx-auto mt-20 mb-32">
        <img
          src="/port-bg.png"
          alt="Elorca Port"
          width={850}
          height={500}
          className="mx-auto"
        />
      </div>

      {/* Bottom Left - Pharma Market */}
      <div className="absolute bottom-0 left-10 text-center">
        {/* Connecting bubbles */}
        <div className="absolute bottom-1/2 left-1/3 w-6 h-6 bg-white bg-opacity-20 rounded-full blur-md animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-8 h-8 bg-white bg-opacity-25 rounded-full blur-lg animate-bounce"></div>

        <div className="mb-2">
          <img
            src="/pharma.png"
            alt="Pharma Market"
            width={250}
            height={250}
            className="mx-auto"
          />
        </div>
        <h3 className="text-white font-medium text-lg">Pharma Market</h3>
      </div>

      {/* Bottom Right - Hardware Market */}
      <div className="absolute bottom-0 right-10 text-center">
        {/* Connecting bubbles */}
        <div className="absolute bottom-1/2 right-1/3 w-6 h-6 bg-white bg-opacity-20 rounded-full blur-md animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-8 h-8 bg-white bg-opacity-25 rounded-full blur-lg animate-bounce"></div>

        <div className="mb-2">
          <img
            src="/hardware.png"
            alt="Hardware Market"
            width={250}
            height={250}
            className="mx-auto"
          />
        </div>
        <h3 className="text-white font-medium text-lg">Hardware Market</h3>
      </div>
    </div>
        </div>
    </div>
  )
}

export default LandingV1