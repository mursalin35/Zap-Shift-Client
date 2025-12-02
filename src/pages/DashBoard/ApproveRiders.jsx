import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaUserCheck } from "react-icons/fa";
import { IoPersonRemove } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import { CiViewList } from "react-icons/ci";

const ApproveRiders = () => {
  const axiosSecure = useAxiosSecure();

  const { data: riders = [], refetch } = useQuery({
    queryKey: ["riders", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/riders");
      return res.data;
    },
  });

  //   handle approve + reject center
  const updateRiderStatus = (rider, status) => {

    const updateInfo = { status: status, email: rider.email };
    axiosSecure.patch(`/riders/${rider._id}`, updateInfo).then((res) => {

      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Riders status is set to ${status}`,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  //   handle rider approve
  const handleApprove = (rider) => {
    updateRiderStatus(rider, "approved");
  };

  //   handle rider reject
  const handleRejecTion = (rider) => {
    updateRiderStatus(rider, "rejected");
  };

  return (
    <div className=" p-6">
      <h2 className="text-5xl">Riders pending Approval: {riders.length} </h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Si.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>District</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {riders.map((rider, index) => (
              <tr key={rider._id}>
                <th>{index + 1}</th>
                <td>{rider.name}</td>
                <td>{rider.email}</td>
                <td>{rider.district}</td>
                <td>
                  <p
                    className={`${
                      rider.status === "approved"
                        ? "text-green-600 font-semibold"
                        : "text-red-600"
                    }`}
                  >
                    {rider.status}
                  </p>
                </td>
                <td className="flex gap-5">
                  <button className="btn btn-square hover:bg-primary">
                    <CiViewList />
                  </button>
                  <button
                    onClick={() => handleApprove(rider)}
                    className="btn btn-square hover:bg-primary"
                  >
                    <FaUserCheck />
                  </button>
                  <button
                    onClick={() => handleRejecTion(rider)}
                    className="btn btn-square hover:bg-primary"
                  >
                    <IoPersonRemove />
                  </button>
                  <button className="btn btn-square hover:bg-primary">
                    <MdDeleteForever />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApproveRiders;
