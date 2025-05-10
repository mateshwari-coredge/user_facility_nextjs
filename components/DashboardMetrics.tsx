"use client"; // Mark this as a Client Component

import { Metric } from "@/lib/types";
import dashboardData from "@/data/dashboard.json";
import CircularProgress from "./CircularProgress";
import Button from "./Button"; 
import { FaPlus } from "react-icons/fa";

export default function DashboardMetrics() {
  const metrics: Metric[] = dashboardData.metrics;

  const handleReceiveShipmentClick = () => {
    console.log("+ Receive Shipment");
  };

  const handleDispatchProductClick = () => {
    console.log("+ Dispatch Product");
  };

  return (
    <div className="p-6 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold mb-4">All Orders</h2>
        <div className="flex justify-between items-center mb-4 gap-4">
          <Button
            onClick={handleReceiveShipmentClick}
            value="Receive Shipment"
            backgroundColor="#005C28"
            textColor="white"
            className="px-4 py-2"
            icon={<FaPlus />} 
          />
          <Button
            onClick={handleDispatchProductClick}
            value="Dispatch Product"
            className="px-4 py-2"
            backgroundColor="#F5D60D"
            textColor="black"
            icon={<FaPlus />}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="bg-gray-50 p-4 rounded flex flex-col items-center"
          >
            <CircularProgress
              value={Number(metric.value) || 0}
              color="#005C28"
              size={80}
              showText={true}
            />
            <p className="text-[#000] font-medium text-center mt-4">
              {metric.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
