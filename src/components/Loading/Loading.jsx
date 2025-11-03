// src/components/Loading/Loading.jsx
import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-[80vh] bg-[#0b2940]">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-[#7b61ff] rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
