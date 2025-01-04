import React from "react";
import { useLocation } from "react-router-dom";

const FoundPage = () => {
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
                            className={`p-2 rounded text-center border ${selectedSize?.toLowerCase() === option.label.toLowerCase()
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
            <div className="w-full lg:flex-1 p-4 lg:p-6">
                <h1 className="text-xl font-bold mb-4">{searchLocation}Petaling Jaya: 3 hotels found</h1>
                <div className="mb-6">
                    <button className="bg-white border border-gray-300 px-4 py-2 rounded flex items-center gap-2">
                        Sort by: Price (low to high)
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>
                </div>

                
                <div className="grid grid-cols-1 gap-4">

                    {/* Hotel Card */}
                    <button
                        type="button"
                        className="relative flex flex-col lg:flex-row bg-white border rounded-lg shadow p-4 hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out"
                        onClick={() => {
                            console.log("Hotel card clicked!");
                        }}
                    >
                        <div className="w-full lg:w-1/5">
                            <img
                                src="../src/assets/pethotel_1.jpg"
                                alt="Hotel"
                                className="rounded-lg"
                            />
                        </div>
                        <div className="w-full lg:w-3/4 lg:pl-4 flex flex-col">
                            <div className="flex items-start justify-between">
                                {/* Title Section */}
                                <div className="flex flex-col items-start">
                                    <h1 className="text-2xl font-bold">Pet Haven</h1>
                                    <div className="flex items-center gap-2 my-2">
                                        <span className="bg-green-600 text-white px-2 py-1 rounded text-xs">
                                            Certified
                                        </span>
                                        <span className="bg-yellow-500 text-white px-2 py-1 rounded text-xs">
                                            Recommended
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-500">
                                        This pet hotel offers:
                                    </p>
                                </div>
                                {/* Rating Section */}
                                <div className="flex flex-col items-end">
                                    <p className="text-sm text-gray-500 mt-2">2 Reviews</p>
                                    <p className="text-sm text-orange-600">99% chat respond</p>
                                    <div className="flex items-center mt-2">
                                        {[...Array(5)].map((_, index) => (
                                            <svg
                                                key={index}
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                className="w-4 h-4 text-yellow-500"
                                            >
                                                <path d="M12 .587l3.668 7.431L24 9.234l-6 5.848L19.334 24 12 19.764 4.666 24 6 15.082 0 9.234l8.332-1.216L12 .587z" />
                                            </svg>
                                        ))}
                                    </div>
                                            {/* Price Section */}
                                    <div className="flex flex-col items-end mt-4">
                                        <span className="text-red-500 line-through text-lg font-semibold">RM 50</span>
                                        <span className="text-black text-2xl font-bold">RM 40</span>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-2">Subject to Cashback Terms </p>
                                    <p className="text-xs text-gray-500 ">per night before tax and fees</p>
                                </div>
                            </div>
                        </div>
                    </button>

                    {/* Hotel Card 2*/}
                    <button
                        type="button"
                        className="relative flex flex-col lg:flex-row bg-white border rounded-lg shadow p-4 hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out"
                        onClick={() => {
                            console.log("Hotel card clicked!");
                        }}
                    >
                        <div className="w-full lg:w-1/5">
                            <img
                                src="../src/assets/pethotel_1.jpg"
                                alt="Hotel"
                                className="rounded-lg"
                            />
                        </div>
                        <div className="w-full lg:w-3/4 lg:pl-4 flex flex-col">
                            <div className="flex items-start justify-between">
                                {/* Title Section */}
                                <div className="flex flex-col items-start">
                                    <h1 className="text-2xl font-bold">Pet Haven</h1>
                                    <div className="flex items-center gap-2 my-2">
                                        <span className="bg-green-600 text-white px-2 py-1 rounded text-xs">
                                            Certified
                                        </span>
                                        <span className="bg-yellow-500 text-white px-2 py-1 rounded text-xs">
                                            Recommended
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-500">
                                        This pet hotel offers:
                                    </p>
                                </div>
                                {/* Rating Section */}
                                <div className="flex flex-col items-end">
                                    <p className="text-sm text-gray-500 mt-2">2 Reviews</p>
                                    <p className="text-sm text-orange-600">99% chat respond</p>
                                    <div className="flex items-center mt-2">
                                        {[...Array(5)].map((_, index) => (
                                            <svg
                                                key={index}
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                className="w-4 h-4 text-yellow-500"
                                            >
                                                <path d="M12 .587l3.668 7.431L24 9.234l-6 5.848L19.334 24 12 19.764 4.666 24 6 15.082 0 9.234l8.332-1.216L12 .587z" />
                                            </svg>
                                        ))}
                                    </div>
                                            {/* Price Section */}
                                    <div className="flex flex-col items-end mt-4">
                                        <span className="text-red-500 line-through text-lg font-semibold">RM 50</span>
                                        <span className="text-black text-2xl font-bold">RM 40</span>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-2">Subject to Cashback Terms </p>
                                    <p className="text-xs text-gray-500 ">per night before tax and fees</p>
                                </div>
                            </div>
                        </div>
                    </button>
                    
                </div>
            </div>

        </div>
    );
};

export default FoundPage;
