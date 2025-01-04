import React, { useState } from "react";
import HotelFeaturePage from "./HotelFeaturePage";
import HotelAdditionalSections from "./HotelAdditionalSections";

const HotelPage = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const remainingPhotos = [
    "../src/assets/pethotel_1.jpg",
    "../src/assets/pethotel_1.jpg",
    "../src/assets/pethotel_1.jpg",
    "../src/assets/pethotel_1.jpg",
  ];

  const openPopUp = () => setIsPopUpOpen(true);
  const closePopUp = () => setIsPopUpOpen(false);

  return (
    <div className="ml-6">
      <div className="flex flex-col ">
        <h1 className="text-4xl font-bold">Pet Haven</h1>
        <div className="flex gap-2 mt-2">
          <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Certified
          </span>
          <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Recommended
          </span>
          <p className="text-gray-500">
            66 Jalan Kenari Taman Kenari 43000 Kajang
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
        {/* Images Section */}
        <div>
          <div className="grid grid-cols-3 gap-2">
            <img
              src="../src/assets/pethotel_1.jpg"
              alt="Room"
              className="rounded-lg"
            />
            <img
              src="../src/assets/pethotel_1.jpg"
              alt="Bathing"
              className="rounded-lg"
            />
            <img
              src="../src/assets/pethotel_1.jpg"
              alt="Dogs Swimming"
              className="rounded-lg"
            />
            <img
              src="../src/assets/pethotel_1.jpg"
              alt="Cages"
              className="rounded-lg"
            />
            <img
              src="../src/assets/pethotel_1.jpg"
              alt="Playground"
              className="rounded-lg"
            />
            <button
              onClick={openPopUp}
              className="relative rounded-lg overflow-hidden focus:outline-none"
            >
              <img
                src="../src/assets/pethotel_1.jpg"
                alt="More Dogs"
                className="rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg text-white font-semibold text-lg">
                +4 photos
              </div>
            </button>
          </div>
        </div>

        {/* More photos popup */}
        {isPopUpOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-transparent rounded-lg p-4 max-w-2xl w-full relative">
              <button onClick={closePopUp} className="absolute top-1 right-1">
                &times;
              </button>
              <div className="grid grid-cols-2 gap-4">
                {remainingPhotos.map((photo, index) => (
                  <img
                    key={index}
                    src={photo}
                    alt={`Photo ${index + 1}`}
                    className="rounded-lg"
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Details Section */}
        <div
          className="bg-[#d99425] bg-opacity-25 backdrop-blur-md
           p-8 rounded-lg shadow-lg max-w-5xl mx-5 min-h-[300px]"
        >
          <div className="bg-brown-100 p-4 rounded-lg">
            <h2 className="text-2xl font-bold mb-2">
              From <span className="text-green-700">MYR 25 / night</span>
            </h2>
            <p className="text-gray-600">
              <span className="text-yellow-600">4 Reviews</span> | 99% chat
              respond
            </p>
            <div className="space-y-4 mt-5 mb-10">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-900">
                  Accepted pet types
                </span>
                <span className="text-[#B06B48]">Dogs</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-900">
                  Accepted pet sizes
                </span>
                <span className="text-[#B06B48]">0-15lbs 16-40lbs</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-900">
                  Number of meals provided per day
                </span>
                <span className="text-[#B06B48]">3 meals (Pedigree)</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-900">
                  Number of potty breaks provided per day
                </span>
                <span className="text-[#B06B48]">Full access outside</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-900">
                  Emergency transport
                </span>
                <span className="text-[#B06B48]">Yes</span>
              </div>
            </div>
            <div className=" space-y-4">
              <button className="bg-[#7e982f] hover:bg-[#1e3a5f] transition-colors duration-300 text-white w-full py-2 rounded-lg text-lg">
                Contact now
              </button>

              <button className="bg-[#964912] hover:bg-[#6b340f] transition-colors duration-300 text-white w-full py-2 rounded-lg text-lg">
                Reserve now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <HotelFeaturePage />
      <HotelAdditionalSections />
    </div>
  );
};

export default HotelPage;
