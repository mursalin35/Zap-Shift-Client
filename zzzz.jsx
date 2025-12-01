import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const { registerUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    // console.log("after register", data);
    registerUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-full max-w-sm mx-auto bg-white shadow-lg rounded-2xl p-8">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-1">Create an Account</h1>
      <p className="text-gray-600 mb-6">Register with ZapShift</p>

      {/* Avatar */}
      <div className="flex justify-center mb-6">
        <img
          src="/profile-icon.png" // change to your icon
          alt="icon"
          className="w-14 h-14 opacity-70"
        />
      </div>

      <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-gray-300"
            placeholder="Name"
          />
          {errors.name?.type === "required" && (
            <p className="text-red-500 text-sm mt-1">Name is required</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-gray-300"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500 text-sm mt-1">Email is required</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block font-medium mb-1">Password</label>
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
              pattern:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
            })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-gray-300"
            placeholder="Password"
          />

          {errors.password?.type === "required" && (
            <p className="text-red-500 text-sm mt-1">Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500 text-sm mt-1">
              Password must be 6 characters
            </p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-500 text-sm mt-1">
              Password must include uppercase, lowercase, number & special
              character
            </p>
          )}
        </div>

        {/* Register Button */}
        <button className="w-full bg-lime-400 hover:bg-lime-500 transition text-black font-medium py-2 rounded-lg">
          Register
        </button>
      </form>

      {/* Login */}
      <p className="mt-4 text-center text-gray-600">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-lime-600 font-semibold cursor-pointer"
        >
          Login
        </Link>
      </p>
      {/* or Social login  */}
      <SocialLogin />
    </div>
  );
};

export default Register;
