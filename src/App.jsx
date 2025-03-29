import LandingV1 from "./pages/Landing-v1"
import LandingV2 from "./pages/Landing 2/Landing-v2"
import {useEffect } from "react"

export default function App() {
  
  useEffect(() => {
    document.body.style.cursor = "url('/boat.png'), auto";
    
    return () => {
      document.body.style.cursor = "auto"; // Reset on unmount
    };
  }, []);
  
  return (
    <>
    <LandingV2 />
    </>
    
// {/* <section>
// </section> */}
  )
}

