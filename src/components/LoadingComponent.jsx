import React from "react";

const LoadingComponent = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="h-16 w-16 rounded-full border-4 border-l-purple-700 animate-spin"></div>
    </div>
  );
};

export default LoadingComponent;
