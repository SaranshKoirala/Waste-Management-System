import ServiceCard from "./ServiceCard";
import { FaLeaf } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { FaRecycle } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import "aos/dist/aos.css";

function Services() {
  const services = [
    {
      id: 1,
      name: "Corporate Service",
      content:
        "Guaranteed that all of your universal waste management is performed safely and responsibly.",
      icon: <FaLeaf className="text-l" />,
    },
    {
      id: 2,
      name: "Convenient Pickup",
      content:
        "Flexible, on-demand waste pickup at your convenience, allowing you to dispose of waste whenever needed.",
      icon: <FaTruck className="text-2xl" />,
    },
    {
      id: 3,
      name: "Waste Segregation",
      content:
        "Sorting waste into categories like recyclables, organic, and non-recyclables to ensure proper disposal and recycling.",
      icon: <FaRecycle className="text-2xl" />,
    },
    {
      id: 4,
      name: "Waste Collection",
      content:
        "Scheduled pickup of waste from residential, commercial, and industrial areas to maintain cleanliness and efficiency.",
      icon: <FaTrash className="text-l" />,
    },
    {
      id: 5,
      name: "Pickup Alert",
      content:
        "Get timely reminders via email, SMS, or push notifications to ensure you never miss a waste pickup—quick, easy, and hassle-free!",
      icon: <IoIosNotifications className="text-2xl" />,
    },
    {
      id: 6,
      name: "Corporate Service",
      content:
        "Guaranteed that all of your universal waste management is performed safely and responsibly.",
      icon: <FaLeaf className="text-l" />,
    },
  ];
  return (
    <section id="services" className="h-screen px-30 mb-15" data-aos="fade-up">
      <div className="bona-nova-sc-regular mb-25">
        <div className="font-semibold text-5xl text-center text-black">
          Our Services
        </div>
      </div>
      <div className="grid grid-cols-3 place-items-center gap-y-20 gap-x-0 poppins-font">
        {services.map((item) => (
          <ServiceCard item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}

export default Services;
