import Image from "next/image";
import React from "react";
import Building from "../public/Building.png";

interface CircularProgressProps {
  value: number | string;
  color?: string;
  size?: number;
  strokeWidth?: number;
  showText?: boolean;
  placeholderImage?: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  value = 0,
  color = "text-[#005C28]",
  size = 100,
  strokeWidth = 8,
  showText = true,
  placeholderImage = Building,
}) => {
  // Check if value is an empty string
  if (value === "" || value === 0) {
    return (
      <div className="relative inline-flex items-center justify-center">
        <Image
          src={placeholderImage}
          alt="Placeholder"
          className="object-contain "
          style={{ width: 80, height: 80 }}
        />
      </div>
    );
  }

  // Ensure value is a valid number between 1 and 100
  const progressValue = Math.min(100, Math.max(0, Number(value) || 0));
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (progressValue / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg height={size} width={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          className="text-gray-200 dark:text-gray-700"
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          color="#005C28"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className={`${color} transition-all duration-300 ease-in-out`}
        />
      </svg>
      {showText && (
        <div className="absolute flex items-center justify-center">
          <span className="text-[#A19C9C] dark:text-gray-300 font-medium text-lg">
            {Math.round(progressValue)}%
          </span>
        </div>
      )}
    </div>
  );
};

export default CircularProgress;
