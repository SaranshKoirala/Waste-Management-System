import axios from "axios";
import { useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { Link } from "react-router-dom";

function UserLogin() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState("");

  async function handleShowPassword(e) {
    e.preventDefault();
    setIsOpen((isOpen) => !isOpen);

    try {
      const response = await axios.get("http://localhost:3000/api/user/:id");
    } catch (error) {}
  }

  return (
    <div className="flex justify-between items-center w-[100%] h-screen ">
      <form className="w-[50%] h-screen flex flex-col justify-center items-center p-30">
        <div className="flex flex-col justify-center items-center gap-3 mb-6">
          <h1 className="poppins-font text-5xl w-full text-center font-semibold">
            Welcome Back
          </h1>
          <p className="text-sm text-gray-500">
            Welcome back! Please enter your details.
          </p>
        </div>
        <div>
          <div className="flex flex-col justify-start gap-1 mb-4">
            <label>Email</label>
            <input
              type="text"
              placeholder="Enter your email"
              className="border border-gray-400 rounded-xl h-10 p-3 w-96 focus:outline-green-600 focus:placeholder-transparent"
            />
          </div>
          <div className="flex flex-col justify-start gap-1 mb-4">
            <label>Password</label>
            <input
              type={isOpen ? "text" : "password"}
              placeholder="******"
              className="relative border border-gray-400 rounded-xl h-10 p-3 w-96 focus:outline-green-600 focus:placeholder-transparent"
            />
            <button onClick={handleShowPassword} className="cursor-pointer">
              {isOpen ? (
                <IoEye className="absolute top-93 right-245" />
              ) : (
                <IoEyeOff className="absolute top-93 right-245" />
              )}
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
          >
            Sign in
          </button>
          <div className="border border-gray-400 rounded-xl h-10 p-3 flex justify-center items-center gap-2 mb-4 w-96 cursor-pointer">
            <img src="/google.webp" width={"20px"} loading="lazy" />
            <div>Sign in with Google</div>
          </div>

          <div className="flex justify-center items-center gap-2 text-sm w-96">
            <p className="text-sm text-black/50">Don&apos;t have an account?</p>
            <p className="text-green-600 cursor-pointer">
              <Link to={"/signup"}>Sign up for free!</Link>
            </p>
          </div>
        </div>
      </form>

      <img src="/cleaning-login.webp" width={"735px"} />
    </div>
  );
}

export default UserLogin;
