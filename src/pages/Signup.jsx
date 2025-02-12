import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  async function handleSubmitBtn(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/signup",
        {
          name,
          email,
          password,
          confirmPassword,
        }
      );
      alert(response.data.message);
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      navigate("/login");
    } catch (error) {
      console.log("Error:", error.message);
      alert(error.message);
    }
  }

  return (
    <form
      className=" h-screen w-screen flex flex-col justify-center items-center bg-[url(/bnp1.webp)] bg-center bg-cover"
      onSubmit={handleSubmitBtn}
    >
      <div className="flex flex-col justify-center items-center gap-2 mb-6">
        <h1 className="poppins-font text-5xl w-full text-center font-semibold">
          Join our community!
        </h1>
        <p className="text-sm text-gray-500">
          Register now and schedule your pickups with ease!
        </p>
      </div>
      <div>
        <div className="flex flex-col justify-start gap-1 mb-4">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-400 rounded-xl h-10 p-3 focus:outline-green-600 focus:placeholder-transparent"
            required
          />
        </div>

        <div className="flex flex-col justify-start gap-1 mb-4">
          <label>Email</label>
          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-400 rounded-xl h-10 p-3 w-96 focus:outline-green-600 focus:placeholder-transparent"
            required
          />
        </div>
        <div className="flex flex-col justify-start gap-1 mb-4">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="relative border border-gray-400 rounded-xl h-10 p-3 w-96 focus:outline-green-600 focus:placeholder-transparent"
            required
          />
        </div>
        <div className="flex flex-col justify-start gap-1 mb-6">
          <label>Confirm password</label>
          <input
            type="password"
            placeholder="Re-enter your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="relative border border-gray-400 rounded-xl h-10 p-3 w-96 focus:outline-green-600 focus:placeholder-transparent"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-green-600/70 text-white rounded-xl h-10 w-96 cursor-pointer mb-2"
        >
          Sign up
        </button>

        <div className="flex justify-center items-center gap-2 text-sm w-96">
          <p className="text-sm text-black/50">Already have an account?</p>
          <p className="text-green-600 cursor-pointer">
            <Link to={"/login"}>Sign In</Link>
          </p>
        </div>
      </div>
    </form>
  );
}

export default Signup;
