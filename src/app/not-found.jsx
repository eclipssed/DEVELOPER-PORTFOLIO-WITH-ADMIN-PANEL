import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-dark">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="text-xl text-gray-600 mb-8">Oops! Page not found</p>

      <Link
        href="/"
        className="text-lg text-white bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-md transition duration-300 ease-in-out"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
