import PropTypes from "prop-types";

function ServiceCard({ item }) {
  return (
    <div
      // data-aos="fade-right"
      className="relative w-80 h-50 shadow-[0px_5px_15px_rgba(0,0,0,0.35)] p-10 text-center rounded-xl ease-in-out transition-all hover:scale-110"
    >
      <div className="absolute left-36 -top-4 border-2 p-2 text-white w-10 h-10 flex justify-center items-center rounded-4xl border-green-600 bg-green-600">
        {item.icon}
      </div>
      <div className="font-semibold mb-3 text-xl">{item.name}</div>
      <p className="text-sm text-gray-500">{item.content}</p>
    </div>
  );
}

// Prop validation
ServiceCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
  }).isRequired,
};

export default ServiceCard;
