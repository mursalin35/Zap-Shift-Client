import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";
const SocialLogin = () => {
  const { signInGoogle } = useAuth();
  const axiosSecure = useAxiosSecure();
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInGoogle()
      .then((result) => {
        console.log(result);
        // create user in the database
        const userInfo = {
          email: result.user.email,
          displayName: result.user.displayName,
          photoURL: result.user.photoURL,
        };
        axiosSecure.post("/users", userInfo).then((res) => {
          console.log("user data has been storage", res.data);
          navigate(location.state || "/");
        toast.success("Signed in with Google!");

        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="flex items-center gap-4 my-4">
        <div className="flex-1 h-px bg-gray-300" />
        <span className="text-gray-500">Or</span>
        <div className="flex-1 h-px bg-gray-300" />
      </div>

      {/* Google Register Button */}
      <button
        onClick={handleGoogleSignIn}
        className="cursor-pointer w-full border py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition"
      >
        <img
          src="https://www.svgrepo.com/show/355037/google.svg"
          alt="google"
          className="w-5 h-5"
        />
        <span>SignIn with Google</span>
      </button>
      
    </div>
  );
};

export default SocialLogin;
