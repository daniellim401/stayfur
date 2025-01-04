import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [petsCount, setPetsCount] = useState(1);

  // For size 
  const sizeOptions = [
    { size: 'Small', weightRange: '0 - 15 lbs' },
    { size: 'Medium', weightRange: '16 - 40 lbs' },
    { size: 'Large', weightRange: '41 - 100 lbs' },
    { size: 'Giant', weightRange: '101+ lbs' },
  ];

  // Searching logic
  const [location, setLocation] = useState('');
  const [dropOffDate, setDropOffDate] = useState('');
  const [pickUpDate, setPickUpDate] = useState('');
  const [type, setType] = useState('cat');
  const [selectedSize, setSelectedSize] = useState('Small'); 
  const navigate = useNavigate();

  // Search handler
  const handleSearch = () => {
    // Rn use empty array
    const mockResults = []; 
    console.log(selectedSize)

    if (mockResults.length === 0) {
      // Redirect to No Results page if no results found
      navigate('/no-results', {
        state: { location, dropOffDate, pickUpDate, petsCount, type, selectedSize },
      });
    } else {
      // Redirect to results page (e.g., /search-results) if results are found
      navigate('/search-results', { state: { results: mockResults } });
    }
  };

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
                <label className="block text-lg font-bold text-black">Location</label>
                <input
                  type="text"
                  placeholder="Address"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="block w-full mt-1 p-2 border rounded-lg"
                />
              </div>
              <div className="col-span-5 lg:col-span-2 grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-lg font-bold text-black">Drop off</label>
                  <input
                    type="date"
                    value={dropOffDate}
                    onChange={(e) => setDropOffDate(e.target.value)}
                    className="block w-full mt-1 p-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-lg font-bold text-black">Pick up</label>
                  <input
                    type="date"
                    value={pickUpDate}
                    onChange={(e) => setPickUpDate(e.target.value)}
                    className="block w-full mt-1 p-2 border rounded-lg"
                  />
                </div>
              </div>
              <div className="col-span-5 lg:col-span-1">
                <label className="block text-lg font-bold text-black">Pax</label>
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
                <label className="block text-lg font-bold text-black">Type</label>
                <select 
                  className="block w-full mt-1 p-2 border rounded-lg"
                  value={type}
                  onChange={(e) => setType(e.target.value)}>
                  <option value="cat">Cat</option>
                  <option value="dog">Dog</option>
                </select>
              </div>
            </div>

            <div className="flex justify-between items-center mt-10">
              {sizeOptions.map(({ size, weightRange }, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSize(size)}
                  className={`border rounded-lg px-5 py-4 ${
                    selectedSize === size
                      ? 'bg-[#deb887] text-white'
                      : 'bg-white hover:bg-gray-100'
                  }`}
                >
                  <p className={`font-bold ${selectedSize === size ? 'text-white' : 'text-black'}`}>{size}</p>
                  <p className={`text-sm ${selectedSize === size ? 'text-white' : 'text-gray-600'}`}>
                    {weightRange}
                  </p>
                </button>
              ))}
            </div>

            <div className="text-center mt-12">
              <button 
                className="bg-[#B46B42] text-white font-bold py-2 px-8 rounded-lg shadow hover:bg-[#9f5938]"
                onClick={handleSearch}>
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
