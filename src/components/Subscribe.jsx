import { Link } from "react-router-dom";

function Subscribe() {
  return (
    <div className="flex flex-col justify-center items-center gap-5 p-20 ">
      <div className="flex flex-col justify-center items-center gap-2">
        <h2 className="poppins-font text-6xl font-bold">
          Join the Green Revolution!
        </h2>
        <p className="text-sm text-black/40 poppins-font w-[60%] text-center">
          {" "}
          Pick a plan that suits your needs and enjoy scheduled waste pickups
          with a set number of rides each month.
        </p>
      </div>
      <button className=" bg-green-600 text-white rounded-2xl py-2 px-5 poppins-font font-semibold text-center hover:scale-120 transition-all ease-in-out cursor-pointer w-40 text-sm">
        <Link to={"/subscribe"}>Subscribe</Link>
      </button>
    </div>
  );
}

export default Subscribe;
