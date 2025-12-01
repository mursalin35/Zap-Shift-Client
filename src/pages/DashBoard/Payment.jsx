import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Payment = () => {
  // tanstack query diye backend theke data load
  const { parcelId } = useParams();
  const axiosSecure = useAxiosSecure();

  const { isLoading, data: parcel } = useQuery({
    queryKey: ["parcels", parcelId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${parcelId}`);
      return res.data;
    },
  });

  //   backend payment api hit
  const handlePayment = async () => {
    const paymentInfo = {
      cost: parcel.cost,
      parcelId: parcel._id,
      senderEmail: parcel.senderEmail,
      parcelName: parcel.parcelName,
    };
    const res = await axiosSecure.post("/payment-checkout", paymentInfo);
    console.log(res.data);
    window.location.href = res.data.url;
  };

  // Show loading spinner
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }

  return (
    <div>
      <h1>
        Place pay ${parcel.cost} for: {parcel.parcelName}
      </h1>

      <div>
        <button
          onClick={handlePayment}
          className="btn btn-sm btn-primary text-black"
        >
          Pay
        </button>
      </div>
    </div>
  );
};

export default Payment;
