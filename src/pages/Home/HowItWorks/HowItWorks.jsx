import React from "react";
import bookingIcon from "../../../assets/bookingIcon.png"; // correct import

const services = [
  {
    title: "Booking Pick & Drop",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
    icon: bookingIcon,
  },
  {
    title: "Cash On Delivery",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
    icon: bookingIcon,
  },
  {
    title: "Delivery Hub",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
    icon: bookingIcon,
  },
  {
    title: "Booking SME & Corporate",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
    icon: bookingIcon,
  },
];


const HowItWorks = () => {
  return (
    <section className=" py-1 mt-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">How it Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
            >
              <img
                src={service.icon}
                alt={service.title}
                className="w-12 h-12 mb-4"
              />
              <h3 className="font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
