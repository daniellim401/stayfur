'use client';

export default function ContactCard({ onClose }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
      <h2 className="text-xl font-bold mb-4">How can we help you?</h2>
      <p className="text-gray-700 mb-2">
        <strong>Email:</strong> stayfur@gmail.com
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Contact:</strong> 000-000-000
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Address:</strong> xxx Jalan Baik Bandar Sunway
      </p>
      <p className="text-gray-700 mb-4">
        <strong>Working Hours:</strong> Monday to Saturday, 10:00am to 10:00pm
      </p>
      <div className="flex space-x-4 mb-4">
        <a href="#" className="text-black">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" className="text-black">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="text-black">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );
}

