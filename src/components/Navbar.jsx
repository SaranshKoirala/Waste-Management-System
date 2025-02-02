import { Link } from "react-scroll";
import { FaRegCircleUser } from "react-icons/fa6";

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
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              offset={-39}
            >
              Services
            </Link>
          </li>
          <li className="cursor-pointer duration-200 transition-all hover:text-gray-300">
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              offset={-39}
            >
              About Us
            </Link>
          </li>
          <li className="cursor-pointer duration-200 transition-all hover:text-gray-300">
            <Link to="contact" spy={true} smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <button className="cursor-pointer text-center bg-white rounded-xl p-2 text-green-600 flex justify-center items-center gap-2 ease-in-out transition-all hover:scale-110">
        Login
        <FaRegCircleUser />
      </button>
    </nav>
  );
}

export default Navbar;
