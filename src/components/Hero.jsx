import Navbar from "./Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);
  return (
    <div className="relative bg-[url(/bg-image.jpg)] bg-cover bg-center h-screen mb-30">
      <Navbar />
      <h1
        data-aos="fade-left"
        className="absolute poppins-font font-extrabold left-30 top-70 text-white text-7xl  w-[550px] text-center leading-18 align-middle"
      >
        WASTE MANAGEMENT SYSTEM
      </h1>
      <button className="absolute left-75 top-130 bg-white text-green-600 rounded-2xl py-2 px-5 poppins-font font-semibold text-center hover:scale-120 transition-all ease-in-out cursor-pointer">
        Schedule Pickup
      </button>
    </div>
  );
}

export default Hero;
