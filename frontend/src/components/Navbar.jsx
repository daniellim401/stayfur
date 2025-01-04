import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/StayFur.png';
import LoginPopup from '../pages/LoginPopup';
import profileImg from '../assets/avatar-placeholder.png';
import ContactCard from './ContactCard.jsx';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';

export default function Navbar() {
  const queryClient = useQueryClient();
  const { data: authUser } = useQuery({ queryKey: ["authUser"] });
  // Contact Popup
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  // Login Page Popup
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openLoginPopup = () => {
    setIsModalOpen(true);
  };

  const closeLoginPopup = () => {
    setIsModalOpen(false);
  };

  // Logout Function
  const { mutate: logout } = useMutation({
    mutationFn: async () => {
      try {
        const res = await fetch("/api/auth/logout", {
          method: "POST",
        });
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Something went wrong");
        }
      } catch (error) {
        throw new Error(error);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
    },
    onError: () => {
      toast.error("Logout failed");
    },
  });


  return (
    <header className="bg-[#B46B42] shadow-sm shadow-black">
      <nav className="flex items-center p-2">
        {/* Logo Section */}
        <div className="flex items-center z-10">
          <Link to="/">
            <img src={logo} alt="StayFur Logo" className="h-20 w-auto" />
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
          {authUser ? (
            <div className="text-black font-medium hover:text-gray-700">
              <img
                src={profileImg || authUser?.profileImg}
                alt="User Avatar"
                onClick={(e) => {
                  e.preventDefault()
                  logout();
                }}

                className="w-8 h-8 rounded-full" />
            </div>
          ) : (
            <div
              className="text-black font-medium hover:text-gray-700 cursor-pointer"
            >
              <Link to="/login">Login/SignUp</Link>
            </div>
          )}
        </div>
      </nav>

      {/* Contact Card Popup */}
      {isPopUpOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <ContactCard onClose={() => setIsPopUpOpen(false)} />
        </div>
      )}
    </header>
  );
}
