
import { Link } from 'react-router-dom';
import logo from '../assets/StayFur.png';
export default function Example() {
  return (
    <header className="bg-[#A0522D]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-2">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src={logo}
              alt="StayFur Logo"
              className="h-20 w-auto"
            />
          </Link>
        </div>

        {/* Title Section */}
        <div className="hidden lg:flex lg:flex-1 lg:flex-col lg:justify-center lg:items-center">
          <h1 className="text-black text-2xl font-extrabold text-center">Your top pet hotels in Malaysia</h1>
          <p className="text-black text-sm font-medium text-center">StayFur</p>
        </div>

        {/* Links Section */}
        <div className="flex items-center space-x-6">
          <text className="text-black font-medium hover:text-gray-700">
            <Link to="/about">
              About
            </Link>
          </text>
          <text className="text-black font-medium hover:text-gray-700">
            <Link to="/contact">
              Contact
            </Link>
          </text>
          <button className="bg-black text-white font-medium py-2 px-4 rounded-lg hover:bg-gray-50 hover:text-black">
            <Link to="/login">
              Login/Signup
            </Link>
          </button>
        </div>
      </nav>
    </header>
  );
}
