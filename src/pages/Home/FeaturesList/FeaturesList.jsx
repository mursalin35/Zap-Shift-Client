// FeaturesList.jsx
import React from "react";


// Import your icons or use images
import ParcelIcon from "../../../assets/live-tracking.png"; 
import drop from "../../../assets/safe-delivery.png"; 
import FeatureCard from "../FeatureCard/FeatureCard";

const features = [
  {
    icon: <img src={ParcelIcon} alt="Parcel Tracking" />,
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
  },
  {
    icon: <img src={drop} alt="Safe Delivery" />,
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
  },
 
  {
    icon: <img src={drop} alt="24/7 Support" />,
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
  },
];

const FeaturesList = () => {
  return (
    <div className="flex flex-col gap-6 border-y-[1.5px] border-gray-400 border-dashed mt-20 py-16">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
};

export default FeaturesList;
