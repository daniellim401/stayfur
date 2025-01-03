import React from "react";
import { useLocation } from "react-router-dom";

const NoResults = () => {
  const location = useLocation();
  const {
    location: searchLocation,
    dropOffDate,
    pickUpDate,
    petsCount,
    type,
    selectedSize,
  } = location.state || {};

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-[#F4F4F4]">
      {/* Left Sidebar */}
      <div className="w-full lg:w-1/4 bg-[#D8B89A] p-4 lg:p-6">
        <h2 className="text-lg font-bold mb-4">Location</h2>
        <input
          type="text"
          placeholder=""
          value={searchLocation || ""}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />

        <h2 className="text-lg font-bold mb-4">Date</h2>
        <div className="flex flex-col lg:flex-row gap-2 mb-4">
          <input
            type="text"
            placeholder=""
            value={dropOffDate || ""}
            className="w-full lg:w-1/2 p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder=""
            value={pickUpDate || ""}
            className="w-full lg:w-1/2 p-2 border border-gray-300 rounded"
          />
        </div>

        <h2 className="text-lg font-bold mb-4">Pax</h2>
        <div className="flex items-center mb-4">
          <input
            type="number"
            value={petsCount || 1}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <h2 className="text-lg font-bold mb-4">Type</h2>
        <input
          type="text"
          placeholder=""
          value={type || ""}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />

        <h2 className="text-lg font-bold mb-4">Size</h2>
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: "Small", range: "0 - 15 lbs" },
            { label: "Medium", range: "16 - 40 lbs" },
            { label: "Large", range: "41 - 100 lbs" },
            { label: "Giant", range: "101+ lbs" },
          ].map((option) => (
            <div
              key={option.label}
              className={`p-2 rounded text-center border ${
                selectedSize?.toLowerCase() === option.label.toLowerCase()
                  ? "bg-[#B46B42] text-white"
                  : "bg-white border-gray-300"
              }`}
            >
              <p className="font-bold">{option.label}</p>
              <p className="text-sm">{option.range}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Content */}
      <div className="w-full lg:flex-1 flex flex-col items-center justify-center 
      lg:justify-start lg:items-center p-4 lg:p-6 text-center lg:text-left lg:mt-6">

        <h1 className="text-2xl font-bold mb-4">
          We couldn't find any accommodations that matched your criteria.
        </h1>
        <p className="text-gray-600 mb-6">
          Try updating your location or search criteria to explore more options
          for your pet's stay.
        </p>
        <a
          href="/"
          className="bg-[#B46B42] text-white px-6 py-3 rounded-lg shadow hover:bg-[#9f5938]"
        >
          Go back home
        </a>
      </div>
    </div>
  );
};

export default NoResults;
