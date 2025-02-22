import axios from "axios";
import { useContext, useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { UserContext } from "../Contexts/UserContext";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser, setIsAuthenticated } = useContext(UserContext);
  const navigate = useNavigate();

  function handleShowPassword(e) {
    e.preventDefault();
    setIsOpen((isOpen) => !isOpen);
  }

  async function handleLoginBtn(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        { email, password }
      );

      if (response.data.user.role !== "admin") {
        throw new Error("Access Denied!!");
      }
      setUser(response.data.user);
      localStorage.setItem("admin", response.data.token);
      setIsAuthenticated(true);
      setEmail("");
      setPassword("");
      navigate("/admin");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Access Denied!!");
      }
    }
  }
  return (
    <div className="flex justify-center items-center w-[100%] h-screen gap-5 ">
      <img
        src="/admin-img.webp"
        width={"600px"}
        className="p-4"
        loading="lazy"
      />
      <div className="border-1 border-gray-300 h-[85%]"></div>
      <form className="w-[600px] h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-2 mb-6">
          <h1 className="poppins-font text-5xl w-full text-center font-semibold">
            Admin Portal Login
          </h1>
          <p className="text-sm text-gray-500">
            Secure Access for Authorized Personnel Only
          </p>
        </div>
        <div>
          <div className="flex flex-col justify-start gap-1 mb-4">
            <label>Email</label>
            <input
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-400 rounded-xl h-10 p-3 w-96 focus:outline-green-600 focus:placeholder-transparent"
            />
          </div>
          <div className="flex flex-col justify-start gap-1 mb-4">
            <label>Password</label>
            <input
              type={isOpen ? "text" : "password"}
              placeholder="******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="relative border border-gray-400 rounded-xl h-10 p-3 w-96 focus:outline-green-600 focus:placeholder-transparent"
            />
            <button
              onClick={handleShowPassword}
              className="cursor-pointer absolute top-102 right-67"
            >
              {isOpen ? <IoEye /> : <IoEyeOff />}
            </button>
          </div>
          <div className="flex justify-between items-center mb-4 w-96">
            <div className="flex jusify-center items-center gap-2">
              <input type="checkbox" />
              <label>Remember Me</label>
            </div>
            <div className="text-green-600 cursor-pointer">
              Forgot Password?
            </div>
          </div>
          <button
            type="submit"
            className="bg-green-600/70 text-white rounded-xl h-10 mb-4 w-96 cursor-pointer"
            onClick={handleLoginBtn}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdminLogin;
