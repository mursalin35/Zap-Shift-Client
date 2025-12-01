import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const { signInUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    signInUser(data.email, data.password)
      .then((result) => {
        console.log(result);
        navigate(location?.state || "/")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-full max-w-sm mx-auto bg-white shadow-lg rounded-2xl p-8">
      <h1 className="text-3xl font-bold mb-1">Welcome Back</h1>
      <p className="text-gray-600 mb-6">Login with ZapShift</p>

      <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
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
            {...register("password", { required: true, minLength: 6 })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-gray-300"
            placeholder="Password"
          />
          {errors.password?.type === "minLength" && (
            <p className="text-red-500 text-sm mt-1">
              Password must be 6 characters
            </p>
          )}
        </div>

        {/* Forgot Password */}
        <div className="text-right">
          <a className="text-gray-600 underline text-sm cursor-pointer">
            Forgot Password?
          </a>
        </div>

        {/* Login Button */}
        <button className="w-full bg-lime-400 hover:bg-lime-500 transition text-black font-medium py-2 rounded-lg">
          Login
        </button>
      </form>

      {/* Register */}
      <p className="mt-4 text-center text-gray-600">
        Don’t have any account?{" "}
        <Link
        state={location.state}
          to="/register"
          className="text-lime-600 font-semibold cursor-pointer"
        >
          Register
        </Link>
      </p>

      {/* or Social login  */}
      <SocialLogin />
    </div>
  );
};

export default Login;
