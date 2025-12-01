import React from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

import service from "../../../assets/service.png";

const OurService = () => {
  const services = [
    {
      title: "Express & Standard Delivery",
      description:
        "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
      icon: service,
    },
    {
      title: "Nationwide Delivery",
      description:
        "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
      icon: service,
    },
    {
      title: "Fulfillment Solution",
      description:
        "We offer inventory management, online order processing, packaging, and after-sales support.",
      icon: service,
    },
    {
      title: "Cash on Home Delivery",
      description:
        "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
      icon: service,
    },
    {
      title: "Corporate Service / Contract In Logistics",
      description:
        "Customized corporate services including warehouse and inventory management support.",
      icon: service,
    },
    {
      title: "Parcel Return",
      description:
        "Reverse logistics allowing customers to return or exchange their products.",
      icon: service,
    },
  ];

  return (
    <div className="px-6 py-10 bg-[#063E41] text-white mt-16 rounded-3xl">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Our Services</h2>
        <p className="mt-2 text-gray-200">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to <br /> business shipments — we
          deliver on time, every time.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {services.map((item, index) => (
          <ServiceCard
            key={index}
            title={item.title}
            description={item.description}
            iconImage={item.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default OurService;
