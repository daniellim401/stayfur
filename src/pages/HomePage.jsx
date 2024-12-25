import { useState } from 'react';

import SizeSelector from './SizeSelector';

const HomePage = () => {
  const [petsCount, setPetsCount] = useState(1);

  return (
    <div className="bg-azure min-h-screen relative">

      {/* Image */}
      <div className="relative bg-cover bg-center h-[60vh]">
        <img
          src="../src/assets/background-img.jpg"
          alt="Background"
          className="w-full h-[30vh] object-cover"
        />

        {/* Container */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-[#deb887] bg-opacity-25 backdrop-blur-md
           p-8 rounded-lg shadow-lg max-w-5xl w-full mx-5 min-h-[300px]">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
              <div className="col-span-5 lg:col-span-1">
                <label className="block text-sm font-bold text-black">Location</label>
                <input
                  type="text"
                  placeholder="Address"
                  className="block w-full mt-1 p-2 border rounded-lg"
                />
              </div>
              <div className="col-span-5 lg:col-span-2 grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-sm font-bold text-black">Drop off</label>
                  <input
                    type="date"
                    className="block w-full mt-1 p-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-black">Pick up</label>
                  <input
                    type="date"
                    className="block w-full mt-1 p-2 border rounded-lg"
                  />
                </div>
              </div>
              <div className="col-span-5 lg:col-span-1">
                <label className="block text-sm font-bold text-black">Pax</label>
                <div className="flex items-center mt-1">
                  <button
                    onClick={() => setPetsCount(Math.max(1, petsCount - 1))}
                    className="p-2 bg-gray-200 rounded-l-lg"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={petsCount}
                    readOnly
                    className="w-full text-center border-t border-b"
                  />
                  <button
                    onClick={() => setPetsCount(petsCount + 1)}
                    className="p-2 bg-gray-200 rounded-r-lg"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="col-span-5 lg:col-span-1">
                <label className="block text-sm font-bold text-black">Type</label>
                <select className="block w-full mt-1 p-2 border rounded-lg">
                  <option value="cat">Cat</option>
                  <option value="dog">Dog</option>
                </select>
              </div>
            </div>

            <SizeSelector/>

            <div className="text-center mt-12">
              <button className="bg-[#B46B42] text-white font-bold py-2 px-8 rounded-lg shadow hover:bg-[#9f5938]">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Locations Section */}
      <div className="text-center py-10 px-5">
        <h2 className="text-lg font-bold">
          Find the pawfect getaway for your pets while you're on vacation.
        </h2>
        <p className="text-sm text-gray-600">— where comfort and care come first </p>
        <div className="flex justify-center space-x-4 mt-4">
          {['Kuala Lumpur', 'Penang', 'Johor'].map((location, index) => (
            <button
              key={index}
              className="bg-[#B46B42] text-white font-medium py-2 px-4 rounded-full hover:bg-[#9f5938]"
            >
              {location}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
