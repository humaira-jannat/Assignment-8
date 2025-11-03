import React from "react";
import Navbar from "../../components/Header/Navbar";

export default function ErrorPage({ setCurrentPage }) {
  const handleGoHome = () => {
    if (setCurrentPage) {
      setCurrentPage("home"); // State-based navigation
    } else {
      window.location.href = "/"; // Fallback to reload
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar setCurrentPage={setCurrentPage} />

      <div className="flex-grow flex flex-col items-center justify-center p-8">
        <div className="mx-auto w-80 h-80 flex items-center justify-center mb-8">
          <img
            src="/images/error-404.png"
            alt="Page not found illustration"
            className="max-w-full max-h-full object-contain"
          />
        </div>

        <h1 className="text-4xl font-extrabold text-gray-800 mt-10">
          Oops, page not found!
        </h1>

        <p className="mt-4 text-gray-600 max-w-sm text-center">
          The page you are looking for is not available.
        </p>

        <button
          onClick={handleGoHome}
          className="mt-8 bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-indigo-700 transition-colors"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
