import axios from "axios";
import { useEffect, useState } from "react";

function Schedules() {
  const [active, setActive] = useState(0);
  const [schedules, setSchedules] = useState(null);

  function handleActiveBtn(id) {
    setActive(id);
  }

  const btns = [
    { id: 0, content: "All" },
    { id: 1, content: "Confirmed" },
    { id: 2, content: "Unconfirmed" },
  ];

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/schedulePickup"
        );
        setSchedules(response.data.data);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchData();
  }, []);

  console.log(schedules);

  return (
    <div className="flex flex-col gap-10 w-full py-10 px-15 poppins-font">
      <div className="flex flex-1 justify-between">
        <h1 className="text-2xl font-semibold">All schedules</h1>{" "}
        <div className="flex bg-white rounded-2xl w-90 justify-between items-center py-2 px-3">
          {btns.map((element, index) => (
            <button
              key={index}
              className={
                active === index
                  ? "cursor-pointer bg-green-600 text-white px-2 rounded-2xl"
                  : "cursor-pointer px-2 "
              }
              onClick={() => handleActiveBtn(index)}
            >
              {element.content}
            </button>
          ))}
        </div>
      </div>

      <table className="border border-gray-500 w-full">
        <thead>
          <tr className="border-b">
            <th className="p-3 text-start">Name</th>
            <th className="p-3 text-start">Contact</th>
            <th className="p-3 text-start">Pickup Date</th>
            <th className="p-3 text-start">Location</th>
            <th className="p-3 text-start">Waste Type</th>
            <th className="p-3 text-start">Status</th>
          </tr>
        </thead>
        <tbody>
          {schedules?.map((element, index) => (
            <tr key={index} className="bg-white border-b border-gray-500">
              <td className="p-3 text-start">{element.name}</td>

              <td className="p-3 text-start">{element.contact}</td>
              <td className="p-3 text-start">{element.pickupDate}</td>
              <td className="p-3 text-start">{element.streetName}</td>
              <td className="p-3 text-start">{element.wasteType}</td>
              <td className="p-3 text-start">Unconfirmed</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Schedules;
