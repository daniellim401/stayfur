import { useState } from 'react';

const SizeSelector = () => {
  const [selectedSize, setSelectedSize] = useState(null);

  const sizeOptions = [
    { size: 'Small', weightRange: '0 - 15 lbs' },
    { size: 'Medium', weightRange: '16 - 40 lbs' },
    { size: 'Large', weightRange: '41 - 100 lbs' },
    { size: 'Giant', weightRange: '101+ lbs' },
  ];

  return (
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
  );
};

export default SizeSelector;