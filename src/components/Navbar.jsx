import { Link as ScrollLink } from "react-scroll";
// import { FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../Contexts/UserContext";

function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const { isAuthenticated, user } = useContext(UserContext);

  return (
    <nav className=" w-full flex justify-between items-center text-white poppins-font px-5  ">
      <div>
        <img src="/logo2.webp" width={"70px"} />
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

      {isAuthenticated ? (
        <div>Welcome, {user?.name}</div>
      ) : (
        <div className="flex justify-center items-center gap-2">
          <button className="cursor-pointer p-2 text-white ">
            <Link
              to={"/signup"}
              className="flex justify-center items-center gap-2"
            >
              Sign Up
            </Link>
          </button>
          <button
            className="relative cursor-pointer border-1 py-1 px-3 text-green-600 bg-white"
            onMouseEnter={() => setShowModal(true)}
          >
            Login
            {/* <FaRegCircleUser /> */}
          </button>

          {showModal && (
            <div
              className="absolute top-16 right-5 bg-white text-black/70 flex flex-col justify-center items-center w-30 py-2"
              onMouseLeave={() => setShowModal(false)}
            >
              <Link
                to={"/login"}
                className="border-b-1 border-gray-300 w-[80%]"
              >
                <p className=" text-center">User</p>
              </Link>
              <Link to={"/login/admin"}>
                <p className="text-center">Admin</p>
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
