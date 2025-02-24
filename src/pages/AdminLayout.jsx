import { Link, Outlet } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { HiUsers } from "react-icons/hi";
import { GrSchedules } from "react-icons/gr";
import { IoMdSettings } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import { useState } from "react";

function AdminLayout() {
  const [active, setActive] = useState(0);

  function handleActive(index) {
    setActive(index);
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
        <div className="flex items-center gap-2 mt-auto py-1.5 px-4">
          <IoLogOutOutline />
          Logout
        </div>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
