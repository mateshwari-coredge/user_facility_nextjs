import React, { useState } from "react";
import Image from "next/image";
import { FaChevronDown, FaChevronUp, FaUserCircle } from "react-icons/fa";

const User: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  const name = "Anothony"; // Replace with your dynamic name logic
  const imgUrl = "/path/to/user-image.jpg"; // Replace with your image path

  return (
    <div className="flex items-center border bg-white border-gray-300 px-3 py-1 rounded gap-2 relative">
      {imageError ? (
        <FaUserCircle className="w-8 h-8 text-gray-400" /> // Default avatar icon
      ) : (
        <Image
          src={imgUrl} 
          alt="User"
          width={30}
          height={30}
          className="w-8 h-8 rounded-full"
          priority
          onError={() => setImageError(true)}
        />
      )}
      <span className="text-gray-700 font-[14px]">{name}</span>
      <svg
        className="w-4 h-4 text-green-600 cursor-pointer mt-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        onClick={toggleDropdown}
      >
        {dropdownVisible ? <FaChevronUp /> : <FaChevronDown />}
      </svg>
      {dropdownVisible && (
        <div className="absolute top-full right-0 mt-2 w-40 bg-white border border-gray-300 rounded shadow-lg">
          <ul className="py-1">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Option 1
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Option 2
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Option 3
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Option 4
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default User;
