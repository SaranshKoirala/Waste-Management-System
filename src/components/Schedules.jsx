import { useState } from "react";

function Schedules() {
  const [active, setActive] = useState(0);

  function handleActiveBtn(id) {
    setActive(id);
  }

  const btns = [
    { id: 0, content: "All" },
    { id: 1, content: "Confirmed" },
    { id: 2, content: "Unconfirmed" },
  ];

  return (
    <div className="flex  w-full py-10 px-15 poppins-font">
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
    </div>
  );
}

{
  /* <button className="cursor-pointer bg-green-600 text-white px-2 rounded-2xl">
            All
          </button>
          <button>Confirmed</button>
          <button>Unconfirmed</button> */
}

export default Schedules;
