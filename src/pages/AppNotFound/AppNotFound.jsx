import React from "react";

const AppNotFoundIllustration = () => (
  <div className="mx-auto w-80 h-80 flex items-center justify-center mb-8">
    <img
      src="/images/App-Error.png"
      alt="App Not Found"
      className="max-w-full max-h-full object-contain"
    />
  </div>
);

export default function AppNotFound({ setCurrentPage }) {
  const handleGoBack = () => {
    if (setCurrentPage) {
      setCurrentPage("home"); 
    } else {
      
      window.location.href = "/";
    }
  };

  return (
    <div className="flex flex-col items-center justify-center flex-grow p-8 text-center bg-white">
      <AppNotFoundIllustration />
      <h1 className="text-4xl font-extrabold text-red-500 mt-6">OOPS!! APP NOT FOUND</h1>
      <p className="mt-4 text-gray-600 max-w-sm">
        The app you are looking for does not exist in our system. Please try other apps.
      </p>
      <button
        onClick={handleGoBack}
        className="mt-8 bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-indigo-700 transition-colors"
      >
        Go Back
      </button>
    </div>
  );
}

