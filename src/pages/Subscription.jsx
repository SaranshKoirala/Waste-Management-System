import { IoCheckmarkSharp } from "react-icons/io5";

function Subscription() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-20">
      <div>
        <h1 className="poppins-font text-4xl font-semibold">
          Upgrade your plan
        </h1>
      </div>
      <div className="flex justify-center items-center ">
        <div className="h-110 w-80 rounded-2xl shadow-[0px_5px_15px_rgba(0,0,0,0.35)] p-5">
          <p className="font-semibold text-2xl mb-3">Free</p>
          <div className="flex gap-1 mb-6">
            <span className="text-gray-400 text-sm">रु</span>
            <span className="text-5xl">0</span>
            <span className="text-gray-400 flex flex-col justify-end text-sm leading-tight">
              <div>NPR/</div>
              <div>month</div>
            </span>
          </div>
          <div className="text-normal leading-none mb-6">
            Basic waste collection, keeping city cleaner.
          </div>
          <button className="bg-green-600/70 text-white w-full h-10 rounded-2xl text-normal text-center mb-6">
            Your current plan
          </button>
          <ul className="flex flex-col justify-start gap-3 text-sm">
            <li className="flex justify-start items-center gap-3">
              <IoCheckmarkSharp /> <span>Limited waste pickups per month </span>
            </li>
            <li className="flex justify-start items-center gap-3">
              <IoCheckmarkSharp /> <span> General waste collection only</span>
            </li>
          </ul>
        </div>
        <div className="h-125 w-90 rounded-2xl bg-green-600/70 shadow-[0px_5px_15px_rgba(0,0,0,0.35)] px-5 py-10 text-white">
          <p className="font-semibold text-2xl mb-6">Plus</p>
          <div className="flex gap-1 mb-6">
            <span className=" text-sm text-white/70">रु</span>
            <span className="text-5xl ">500</span>
            <span className=" flex flex-col justify-end text-sm leading-tight text-white/70">
              <div>NPR/</div>
              <div>month</div>
            </span>
          </div>
          <div className="text-normal leading-none mb-6">
            Level up productivity with more pickups and more convenience.
          </div>
          <button className="bg-white text-green-600/70 w-full h-10 rounded-2xl text-normal text-center mb-6">
            Your current plan
          </button>
          <ul className="flex flex-col justify-start gap-3 text-sm">
            <li className="flex justify-start items-center gap-3">
              <IoCheckmarkSharp /> <span>Four pickup schedules per month </span>
            </li>
            <li className="flex justify-start items-center gap-3">
              <IoCheckmarkSharp />{" "}
              <span> Covers general and recyclable waste</span>
            </li>
            <li className="flex justify-start items-center gap-3">
              <IoCheckmarkSharp />{" "}
              <span> Faster service than the Free plan</span>
            </li>
            <li className="flex justify-start items-center gap-3">
              <IoCheckmarkSharp /> <span> Flexible scheduling options</span>
            </li>
            <li className="flex justify-start items-center gap-3">
              <IoCheckmarkSharp />{" "}
              <span> Exclusive access to a dedicated support team</span>
            </li>
          </ul>
        </div>
        <div className="h-110 w-80 rounded-2xl shadow-[0px_5px_15px_rgba(0,0,0,0.35)] p-5">
          <p className="font-semibold text-2xl mb-3">Free</p>
          <div className="flex gap-1 mb-6">
            <span className="text-gray-400 text-sm">रु</span>
            <span className="text-5xl">750</span>
            <span className="text-gray-400 flex flex-col justify-end text-sm leading-tight">
              <div>NPR/</div>
              <div>month</div>
            </span>
          </div>
          <div className="text-normal leading-none mb-6">
            Premium waste collection with maximum flexibility
          </div>
          <button className="bg-green-600/70 text-white w-full h-10 rounded-2xl text-normal text-center mb-6">
            Your current plan
          </button>
          <ul className="flex flex-col justify-start gap-3 text-sm">
            <li className="flex justify-start items-center gap-3">
              <IoCheckmarkSharp /> <span>Unlimited waste pickups</span>
            </li>
            <li className="flex justify-start items-center gap-3">
              <IoCheckmarkSharp /> <span> Flexible scheduling</span>
            </li>
            <li className="flex justify-start items-center gap-3">
              <IoCheckmarkSharp /> <span> Supports all types of waste</span>
            </li>
            <li className="flex justify-start items-center gap-3">
              <IoCheckmarkSharp />{" "}
              <span> Priority waste collection with faster response times</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Subscription;
