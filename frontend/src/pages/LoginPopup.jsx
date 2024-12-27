import React from "react";

const LoginPopup = ({ closeLoginPopup }) => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-2">Stay Fur</h2>
      <p className="text-sm text-gray-600 mb-6">
        Don’t have an account?{" "}
        <span className="text-[#B46B42] cursor-pointer font-medium">
          Sign Up
        </span>
      </p>

      {/* Social Login Options */}
      <div className="flex justify-between items-center mb-4">
        {["Facebook", "Google", "Apple", "WeChat"].map((provider, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
              <img
                src={`../src/assets/${provider.toLowerCase()}.svg`}
                alt={provider}
                className="w-6 h-6"
              />
            </div>
            <p className="text-sm mt-1">{provider}</p>
          </div>
        ))}
      </div>
      <p className="text-sm text-gray-500 mb-4">Or log in with</p>

      {/* Email and Password Input */}
      <div className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="block w-full p-3 border rounded-lg text-sm"
        />
        <input
          type="password"
          placeholder="Password"
          className="block w-full p-3 border rounded-lg text-sm"
        />
      </div>

      {/* Forgot Password */}
      <p className="text-sm text-[#B46B42] mt-3 cursor-pointer">
        Forgot Password?
      </p>

      {/* Login Button */}
      <button className="bg-[#B46B42] text-white font-medium py-2 px-6 mt-6 w-full rounded-lg shadow hover:bg-[#9f5938]">
        Log in
      </button>

    </div>
  );
};

export default LoginPopup;
