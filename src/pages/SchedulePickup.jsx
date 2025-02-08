import { useState } from "react";
import { Link } from "react-router-dom";

function SchedulePickup() {
  const [fullName, setFullName] = useState("Saransh Koirala");
  const [email, setEmail] = useState("upwhats498@gmail.com");
  const [contact, setContact] = useState("");
  const [streetName, setStreetName] = useState("");
  const [wardNumber, setWardNumber] = useState(0);
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("Morning");
  const [wasteType, setWasteType] = useState("Biodegradable");

  const isOpen = contact || streetName || wardNumber || pickupDate;

  function handleContactNumber(e) {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    setContact(value);
  }

  function handleCancelBtn(e) {
    e.preventDefault();
    setContact("");
    setStreetName("");
    setWardNumber(0);
    setPickupDate("");
    setPickupTime("Morning");
    setWasteType("Biodegradable");
  }

  function handleSubmitBtn(e) {
    e.preventDefault();

    if (contact.length > 10) {
      alert("Invalid contact number!");
      return;
    } else if (wardNumber > 35 || wardNumber === 0) {
      alert("Invalid ward number!");
      return;
    } else {
      alert("Form submitted sucessfully!");
    }

    const formData = {
      fullName,
      email,
      contact,
      streetName,
      wardNumber,
      pickupDate,
      pickupTime,
      wasteType,
    };
    handleCancelBtn(e);
  }

  return (
    <div className="bg-[url(/gradient-1.jpg)] bg-cover bg-center min-h-screen max-w-screen p-5">
      <Link to={"/"}>
        <img src="logo2.webp" width={"70px"} />
      </Link>
      <div className="flex justify-end items-center -m-25 -mr-3">
        <div className="poppins-font -mr-5 text-green-950">
          <p className="font-light text-3xl text-end ">Let’s Tidy Up,</p>
          <p className=" text-4xl font-semibold">WASTE TRUCK IS READY!</p>
        </div>
        <img
          src="/truck-1.webp"
          alt="truckimage"
          width={"600px"}
          loading="lazy"
        />
      </div>
      <div className="flex flex-col p-10 gap-10">
        <div className="text-gray-900  ">
          <h1 className="text-5xl font-light mb-2">SCHEDULE INFO.</h1>
          <p className="text-green-900/60">
            Please provide the necessary details to ensure timely collection of
            your waste.
          </p>
        </div>
        <form
          className="grid grid-cols-3 justify-start items-center gap-10"
          onSubmit={handleSubmitBtn}
        >
          <div className="flex flex-col gap-2 w-96">
            <label>Full Name</label>
            <input
              type="text"
              value={fullName}
              className="border rounded-sm p-1"
              disabled
              required
            />
          </div>
          <div className="flex flex-col gap-2 w-96">
            <label>Email</label>
            <input
              type="email"
              value={email}
              className="border rounded-sm p-1"
              disabled
              required
            />
          </div>
          <div className="flex flex-col gap-2 w-96">
            <label>Contact Number</label>
            <input
              className="border rounded-sm p-1"
              type="tel"
              value={contact}
              onChange={handleContactNumber}
              required
            />
          </div>
          <div className="flex flex-col gap-2 w-96">
            <label>Street Name</label>
            <input
              className="border rounded-sm p-1"
              type="text"
              value={streetName}
              onChange={(e) => setStreetName(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-2 w-96">
            <label>Ward Number</label>
            <input
              className="border rounded-sm p-1"
              type="number"
              value={wardNumber}
              onChange={(e) => Number(setWardNumber(e.target.value))}
              required
            />
          </div>
          <div className="flex flex-col gap-2 w-96">
            <label>Pickup Date</label>
            <input
              className="border rounded-sm p-1"
              type="date"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-2 w-96 overflow-visible">
            <label>Pickup Time</label>
            <select
              className="block border rounded-sm p-1"
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
              required
            >
              <option value={"Morning"}>Morning🌅</option>
              <option value={"Afternoon"}>Afternoon🌞</option>
              <option value={"Evening"}>Evening🌆</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 w-96 overflow-visible">
            <label>Waste Type</label>
            <select
              className="block border rounded-sm p-1"
              value={wasteType}
              onChange={(e) => setWasteType(e.target.value)}
              required
            >
              <option value={"Biodegradable"}>Biodegradable Waste♻️</option>
              <option value={"Non-Biodegradable"}>
                Non-Biodegradable Waste🚯
              </option>
            </select>
          </div>
          <div className="flex justify-start items-center gap-20 w-96 -mb-6">
            <button className="w-30 cursor-pointer bg-green-600 hover:bg-green-400 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all">
              Submit
            </button>
            {isOpen && (
              <button
                className="w-30 cursor-pointer bg-gray-600 hover:bg-gray-400 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all"
                onClick={handleCancelBtn}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default SchedulePickup;
