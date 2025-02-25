import { Link, Outlet, useNavigate } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { HiUsers } from "react-icons/hi";
import { GrSchedules } from "react-icons/gr";
import { IoMdSettings } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../Contexts/UserContext";

function AdminLayout() {
  const { setUser, setIsAuthenticated } = useContext(UserContext);
  const navigate = useNavigate();
  const [active, setActive] = useState(0);

  function handleActive(index) {
    setActive(index);
  }

  function handleLogoutBtn() {
    localStorage.removeItem("admin");
    setUser(null);
    setIsAuthenticated(false);
    navigate("/login/admin");
  }

  const list = [
    {
      id: 0,
      logo: <MdDashboard />,
      content: "Dashboard",
      to: "dashboard",
    },
    {
      id: 1,
      logo: <HiUsers />,
      content: "Schedules",
      to: "schedules",
    },
    {
      id: 2,
      logo: <GrSchedules />,
      content: "Users",
      to: "users",
    },
    {
      id: 3,
      logo: <IoMdSettings />,
      content: "Settings",
      to: "settings",
    },
  ];

  useEffect(() => {
    async function fetch() {
      // AOS.init({
      //   duration: 1000, // Animation duration (default: 400ms)
      //   once: true, // Whether animation happens only once
      //   easing: "ease-in-out", // Animation easing
      // });
      const token = localStorage.getItem("admin");
      if (!token) {
        console.warn("No token found");
        navigate("*");
        return; // Stop execution if no token
      }
      try {
        const response = await axios.get("http://localhost:3000/api/auth", {
          headers: {
            Authorization: token,
          },
        });
        setUser(response.data.user);
        setIsAuthenticated(true);
      } catch (error) {
        console.log("Error:", error.message);
        localStorage.removeItem("admin");
        navigate("*");
      }
    }
    fetch();
  }, [navigate, setIsAuthenticated, setUser]);

  return (
    <div className="flex gap-10 h-screen w-screen bg-gray-200 ">
      <nav className="py-5 px-8 h-screen bg-white flex flex-col gap-15 ">
        <div className="w-50 text-center">
          <p className="text-5xl font-extrabold text-green-600">Waste</p>
          <p className=" text-green-600 font-semibold -m-2">
            Management System
          </p>
        </div>
        <ul className="flex flex-col gap-4 justify-center ">
          {list.map((element, index) => (
            <Link
              key={element.id}
              to={element.to}
              className={
                index === active
                  ? "bg-green-600 text-white rounded-lg py-1.5 px-4"
                  : "hover:text-white hover:bg-green-600 rounded-lg py-1.5 px-4"
              }
              onClick={() => handleActive(index)}
            >
              <li className="flex items-center gap-2">
                {element.logo}
                {element.content}
              </li>
            </Link>
          ))}
        </ul>
        <button
          className="flex items-center gap-2 mt-auto py-1.5 px-4 cursor-pointer"
          onClick={handleLogoutBtn}
        >
          <IoLogOutOutline />
          Logout
        </button>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
