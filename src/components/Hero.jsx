import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "aos/dist/aos.css";

function Hero() {
  return (
    <div className="relative bg-[url(/bg-image.jpg)] bg-cover bg-center h-screen mb-30">
      <Navbar />
      <h1 className="absolute poppins-font font-extrabold left-30 top-70 text-white text-7xl  w-[550px] text-center leading-18 align-middle">
        WASTE MANAGEMENT SYSTEM
      </h1>
      <Link to={"/schedulepickup"}>
        <button className="absolute left-75 top-130 bg-white text-green-600 rounded-2xl py-2 px-5 poppins-font font-semibold text-center hover:scale-120 transition-all ease-in-out cursor-pointer">
          Schedule Pickup
        </button>
      </Link>
    </div>
  );
}

export default Hero;
