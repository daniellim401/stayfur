import { Link } from 'react-router-dom';
import logo from '../assets/StayFur.png';
import ContactCard from './ContactCard.jsx';
import { useState } from 'react';

const Navbar = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  return (
    <>
      <header className="bg-[#B46B42] shadow-sm shadow-black ">
        <nav className="flex items-center p-2">
          {/* Logo Section */}
          <div className="flex items-center z-10">
            <Link to="/">
              <img
                src={logo}
                alt="StayFur Logo"
                className="h-20 w-auto"
              />
            </Link>
          </div>

          {/* Title Section */}
          <div className="hidden lg:flex lg:flex-1 lg:flex-col lg:justify-center lg:items-center lg:absolute lg:inset-x-0 z-0">
            <h1 className="text-black text-2xl font-extrabold text-center">Your top pet hotels in Malaysia</h1>
            <p className="text-black text-sm font-medium text-center">StayFur</p>
          </div>

          {/* Links Section */}
          <div className="flex items-center space-x-6 flex-1 justify-end z-10">
            <div className="text-black font-medium hover:text-gray-700">
              <Link to="/about">About</Link>
            </div>
            <div
              className="text-black font-medium hover:text-gray-700 cursor-pointer"
              onClick={() => setIsPopUpOpen(true)}
            >
              Contact
            </div>
            <button className="bg-black text-white font-medium py-2 px-4 rounded-lg hover:bg-gray-50 hover:text-black">
              <Link to="/login">Login/Signup</Link>
            </button>
          </div>
        </nav>
      </header>

      {/* Popup */}
      {isPopUpOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <ContactCard onClose={() => setIsPopUpOpen(false)} />
        </div>
      )}
    </>
  );
};

export default Navbar;

