import { Link } from "react-router-dom";

function Signup() {
  return (
    <div>
      <form className=" h-screen flex flex-col justify-center items-center bg-[url(/bnp1.jpg)] bg-cover bg-center">
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
              className="border border-gray-400 rounded-xl h-10 p-3 focus:outline-green-600 focus:placeholder-transparent"
            />
          </div>

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
              type="password"
              placeholder="Enter new password"
              className="relative border border-gray-400 rounded-xl h-10 p-3 w-96 focus:outline-green-600 focus:placeholder-transparent"
            />
          </div>
          <div className="flex flex-col justify-start gap-1 mb-6">
            <label>Confirm password</label>
            <input
              type="password"
              placeholder="Re-enter your password"
              className="relative border border-gray-400 rounded-xl h-10 p-3 w-96 focus:outline-green-600 focus:placeholder-transparent"
            />
          </div>

          <button
            type="submit"
            className="bg-green-600/70 text-white rounded-xl h-10 w-96 cursor-pointer mb-2"
          >
            Sign up
          </button>
          {/* <div className="flex mb-4">
            <div className="border-b-2 border-gray-400 "></div>
            <span>or sign up with</span>
            <div className="border-b border-gray-400"></div>
          </div> */}
          {/* <div className="border border-gray-400 rounded-xl h-10 p-3 flex justify-center items-center gap-2 mb-4 w-96 cursor-pointer">
            <img src="/google.png" width={"20px"} />
            <div>Sign up with Google</div>
          </div> */}

          <div className="flex justify-center items-center gap-2 text-sm w-96">
            <p className="text-sm text-black/50">Already have an account?</p>
            <p className="text-green-600 cursor-pointer">
              <Link to={"/login"}>Sign In</Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
