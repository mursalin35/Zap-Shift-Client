// ServiceCard.jsx
import React from "react";

const ServiceCard = ({ title, description, iconImage }) => {
  return (
    <div className="rounded-2xl p-6 bg-white text-gray-700 text-center shadow-md hover:bg-primary cursor-pointer transition">
      <div className="flex justify-center mb-6">
        <img src={iconImage} alt="icon" className="w-12 h-12" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;
