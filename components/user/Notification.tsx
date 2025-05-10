import React from "react";

const Notification: React.FC = () => {
  return (
    <div className="relative border border-gray-300 p-2 rounded cursor-pointer">
      <svg
        className="w-5 h-5 text-gray-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 17h5l-1.405-1.405C18.21 15.21 18 14.702 18 14.17V11c0-2.21-1.343-4.13-3.33-4.828A2 2 0 0013 4a2 2 0 10-4 0c0 .272.036.537.105.791A4.978 4.978 0 006 11v3.17c0 .532-.21 1.04-.595 1.425L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
        />
      </svg>
      <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
        4
      </span>
    </div>
  );
};

export default Notification;
