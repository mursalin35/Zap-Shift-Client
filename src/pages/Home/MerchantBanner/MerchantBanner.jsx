import React from "react";
import locationIcon from "../../../assets/location-merchant.png";
import bgImage from "../../../assets/be-a-merchant-bg.png";

const MerchantBanner = () => {
  return (
    <div className="flex bg-secondary relative items-center text-white p-12 rounded-2xl mt-14 ">
      <div className="absolute top-0">
        <img src={bgImage} alt="bgImage" />
      </div>
      <div className="w-[60%]">
        <h2 className="font-bold text-3xl">
          Merchant and Customer Satisfaction is Our First Priority
        </h2>
        <p className="text-sm text-gray-300 mt-3 mb-7">
          We offer the lowest delivery charge with the highest value along with
          100% safety of your product. Pathao courier delivers your parcels in
          every corner of Bangladesh right on time.
        </p>
        <button className="bg-primary text-secondary p-2 mr-6 rounded-full font-bold px-6 hover:text-primary hover:bg-secondary hover:border-1  hover:border-bg-secondary transition cursor-pointer">
          Become a Merchant
        </button>
        <button
          className=" text-primary font-bold border-1 px-6 rounded-full border-bg-secondary p-2      
        hover:text-secondary  hover:bg-primary transition cursor-pointer"
        >
          Earn with ZapShift Courier
        </button>
      </div>

      <div>
        <img src={locationIcon} alt="locationIcon" />
      </div>
    </div>
  );
};

export default MerchantBanner;
