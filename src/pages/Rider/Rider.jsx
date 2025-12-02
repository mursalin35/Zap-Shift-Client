import React from "react";
import { useForm, useWatch } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Rider = () => {
  const {
    register,
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm();

  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const serviceCenters = useLoaderData();
  const regionsDuplicate = serviceCenters.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];
  // explore useMemo, useCallback
  const riderRegions = useWatch({ control, name: "region" });

  // district by region
  const districtByRegion = (region) => {
    const regionDistrict = serviceCenters.filter((c) => c.region === region);
    const districts = regionDistrict.map((d) => d.district);
    return districts;
  };

  const handleRiderApplication = (data) => {
    console.log(data);
    axiosSecure.post("/riders", data).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your application has been submitted. We will reach to you in 30 days",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  return (
    <div>
      <h2 className="text-4xl text-primary">Be a Rider</h2>
      <form
        onSubmit={handleSubmit(handleRiderApplication)}
        className="mt-12 p-4 text-black"
      >
        {/* two column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Rider details  */}
          <fieldset className="fieldset">
            <h4 className="text-2xl font-bold">Rider Details</h4>
            {/* Rider name */}
            <label className="label">Rider Name</label>
            <input
              type="text"
              {...register("name")}
              defaultValue={user?.displayName}
              className="input w-full"
              placeholder="Rider Name"
            />
            {/* Rider email */}
            <label className="label">Rider Email</label>
            <input
              type="email"
              {...register("email")}
              defaultValue={user?.email}
              className="input w-full"
              placeholder="Rider Email"
            />
            {/* sender region  */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Regions</legend>
              <select
                {...register("region")}
                defaultValue="Pick a region"
                className="select w-full"
              >
                <option disabled={true}>Pick a region</option>
                {regions.map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>
            {/* sender District  */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">District</legend>
              <select
                {...register("district")}
                defaultValue="Pick a District"
                className="select w-full"
              >
                <option disabled={true}>Pick a District</option>
                {districtByRegion(riderRegions).map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* sender address  */}
            <label className="label mt-4">Your Address</label>
            <input
              type="text"
              {...register("address")}
              className="input w-full"
              placeholder="Sender Address"
            />
          </fieldset>
          {/* -------------------------------------------------------------------- */}

          {/* receiver info  */}
          {/* receiver details  */}
          <fieldset className="fieldset">
            <h4 className="text-2xl font-bold">More Details</h4>
            {/* receiver name */}
            <label className="label">Driving License</label>
            <input
              type="text"
              {...register("license")}
              className="input w-full"
              placeholder="Driving License"
            />
            {/* NID */}
            <label className="label">NID</label>
            <input
              type="number"
              {...register("nid")}
              className="input w-full"
              placeholder="NID"
            />

            {/* Bike */}
            <label className="label mt-3">Bike</label>
            <input
              type="text"
              {...register("bike")}
              className="input w-full"
              placeholder="Bike Information"
            />
          </fieldset>
        </div>
        <input
          className="btn btn-primary text-black mt-4"
          type="submit"
          value="Apply as a Rider"
        />
      </form>
    </div>
  );
};

export default Rider;
