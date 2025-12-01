// FeatureCard.jsx
import React from "react";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl p-6 items-center flex gap-4 shadow-sm">
      <div className="icon border-r-[1.5px] border-gray-400 border-dashed pr-6">{icon}</div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
