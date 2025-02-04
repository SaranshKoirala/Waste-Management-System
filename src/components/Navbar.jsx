import { Link as ScrollLink } from "react-scroll";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className=" w-full flex justify-between items-center text-white poppins-font px-5  ">
      <div>
        <img src="/logo2.png" width={"70px"} />
      </div>
      <div className=" flex justify-center items-center">
        <ul className="flex gap-20 ">
          <li className="cursor-pointer duration-200 transition-all hover:text-gray-300">
            Home
          </li>
          <li className="cursor-pointer duration-200 transition-all hover:text-gray-300">
            <ScrollLink
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              offset={-39}
            >
              Services
            </ScrollLink>
          </li>
          <li className="cursor-pointer duration-200 transition-all hover:text-gray-300">
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              offset={-39}
            >
              About Us
            </ScrollLink>
          </li>
          <li className="cursor-pointer duration-200 transition-all hover:text-gray-300">
            <ScrollLink to="contact" spy={true} smooth={true} duration={500}>
              Contact
            </ScrollLink>
          </li>
        </ul>
      </div>
      <button className="cursor-pointer text-center bg-white rounded-xl p-2 text-green-600 ease-in-out transition-all hover:scale-110">
        <Link to={"/login"} className="flex justify-center items-center gap-2">
          Login
          <FaRegCircleUser />
        </Link>
      </button>
    </nav>
  );
}

export default Navbar;
