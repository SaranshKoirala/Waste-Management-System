import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { UserContext } from "../Contexts/UserContext";
import { useContext } from "react";

function Hero() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  function handleScheduleBtn() {
    if (user) {
      navigate("/schedulepickup");
    } else {
      alert("You have to Login First!");
    }
  }
  return (
    <div className="relative bg-[url(/bg-image.webp)] bg-cover bg-center h-screen mb-35">
      <Navbar />
      <h1 className="absolute poppins-font font-extrabold left-30 top-70 text-white text-7xl  w-[550px] text-center leading-18 align-middle">
        WASTE MANAGEMENT SYSTEM
      </h1>

      <button
        className="absolute left-75 top-130 bg-white text-green-600 rounded-2xl py-2 px-5 poppins-font font-semibold text-center hover:scale-120 transition-all ease-in-out cursor-pointer"
        onClick={handleScheduleBtn}
      >
        Schedule Pickup
      </button>
    </div>
  );
}

export default Hero;
