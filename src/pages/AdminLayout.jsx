import { Link, Outlet } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { HiUsers } from "react-icons/hi";
import { GrSchedules } from "react-icons/gr";
import { IoMdSettings } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import { useState } from "react";

function AdminLayout() {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked((clicked) => !clicked);
  }

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
          <Link
            to={"/admin/dashboard"}
            className="hover:text-white hover:bg-green-600 focus:text-white focus:bg-green-600 outline-none  rounded-lg py-1.5 px-4"
          >
            <li className="flex items-center gap-2 ">
              {" "}
              <MdDashboard />
              Dashboard
            </li>
          </Link>
          <Link
            to={"/admin/users"}
            className="hover:text-white hover:bg-green-600 focus:text-white focus:bg-green-600 outline-none rounded-lg py-1.5 px-4"
          >
            <li className="flex items-center gap-2">
              <HiUsers />
              Users
            </li>
          </Link>
          <Link className="hover:text-white hover:bg-green-600 focus:text-white focus:bg-green-600 outline-none rounded-lg py-1.5 px-4">
            <li className="flex items-center gap-2">
              <GrSchedules />
              Schedules
            </li>
          </Link>
          <Link className="hover:text-white hover:bg-green-600 focus:text-white focus:bg-green-600 outline-none rounded-lg py-1.5 px-4">
            <li className="flex items-center gap-2">
              <IoMdSettings />
              Settings
            </li>
          </Link>
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
