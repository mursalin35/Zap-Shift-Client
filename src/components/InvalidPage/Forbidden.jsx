import React from "react";

const Forbidden = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white to-pink-50 p-6 text-center">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-lg w-full">
        <div className="flex justify-center mb-6">
          <div className="p-6 rounded-full bg-pink-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-16 h-16 text-pink-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5A2.25 2.25 0 0021 19.5v-6.75a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 12.75v6.75A2.25 2.25 0 005.25 22.5z"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-2xl font-semibold text-pink-600 mb-2">
          You Are Forbidden to Access This Page
        </h1>
        <p className="text-gray-600 mb-6">
          Please contact the administrator if you believe this is an error.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/"
            className="px-6 py-3 rounded-xl bg-green-500 text-white font-medium hover:bg-green-600 transition shadow"
          >
            Go to Home
          </a>
          <a
            href="/dashboard"
            className="px-6 py-3 rounded-xl bg-gray-800 text-white font-medium hover:bg-gray-900 transition shadow"
          >
            Go to Dashboard
          </a>
        </div>
      </div>
    </div>
  );
};

export default Forbidden;
