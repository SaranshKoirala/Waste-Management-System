import { Link } from "react-router-dom";

function SchedulePickup() {
  return (
    <div className="bg-[url(/gradient-1.jpg)] bg-cover bg-center min-h-screen max-w-screen p-5">
      <Link to={"/"}>
        <img src="logo2.png" width={"70px"} />
      </Link>
      <div className="flex justify-end items-center -m-25 -mr-3">
        <div className="poppins-font  -mr-5 text-green-950">
          <p className="font-light text-3xl text-end ">Let’s Tidy Up,</p>
          <p className=" text-4xl font-semibold">WASTE TRUCK IS READY!</p>
        </div>
        <img src="/truck-1.png" alt="truckimage" width={"600px"} />
      </div>
      <div className="flex flex-col p-10 gap-10">
        <div className="text-gray-900  ">
          <h1 className="text-5xl font-light mb-2">SCHEDULE INFO.</h1>
          <p className="text-green-900/60">
            Please provide the necessary details to ensure timely collection of
            your waste.
          </p>
        </div>
        <form className="grid grid-cols-3 justify-start items-center gap-10">
          <div className="flex flex-col gap-2 w-96">
            <label>Full Name</label>
            <input type="text" className="border rounded-sm p-1" disabled />
          </div>
          <div className="flex flex-col gap-2 w-96">
            <label>Email</label>
            <input type="email" className="border rounded-sm p-1" disabled />
          </div>
          <div className="flex flex-col gap-2 w-96">
            <label>Contact Number</label>
            <input type="number" className="border rounded-sm p-1" />
          </div>
          <div className="flex flex-col gap-2 w-96">
            <label>Street Name</label>
            <input type="text" className="border rounded-sm p-1" />
          </div>
          <div className="flex flex-col gap-2 w-96">
            <label>Ward Number</label>
            <input type="number" className="border rounded-sm p-1" />
          </div>
          <div className="flex flex-col gap-2 w-96">
            <label>Pickup Date</label>
            <input type="date" className="border rounded-sm p-1" />
          </div>
          <div className="flex flex-col gap-2 w-96 overflow-visible">
            <label>Pickup Time</label>
            <select
              defaultValue={"Morning"}
              className="block border rounded-sm p-1"
            >
              <option value={"Morning"}>Morning🌅</option>
              <option value={"Afternoon"}>Afternoon🌞</option>
              <option value={"Evening"}>Evening🌆</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 w-96 overflow-visible">
            <label>Waste Type</label>
            <select
              defaultValue={"Biodegradable Waste"}
              className="block border rounded-sm p-1"
            >
              <option value={"Biodegradable Waste"}>
                Biodegradable Waste♻️
              </option>
              <option value={"Non-Biodegradable Waste"}>
                Non-Biodegradable Waste🚯
              </option>
            </select>
          </div>
          <div className="flex justify-center items-center gap-20 w-96 -mb-6">
            <button className="w-30 cursor-pointer bg-gray-600 hover:bg-gray-400 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all">
              Cancel
            </button>

            <button className="w-30 cursor-pointer bg-green-600 hover:bg-green-400 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all">
              Submmit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SchedulePickup;
