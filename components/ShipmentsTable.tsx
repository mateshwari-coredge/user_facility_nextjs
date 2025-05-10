import { Shipment } from '@/lib/types';
import dashboardData from '@/data/dashboard.json';

export default function ShipmentsTable() {
  const shipments: Shipment[] = dashboardData.shipments;

  return (
    <div className=" p-6 rounded-lg mt-6 overflow-x-auto">
      <h2 className="text-lg font-semibold mb-4">Recent Shipments</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S.No:</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Drug Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SSCC</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Batch ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">QTY</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {shipments.map((shipment) => (
            <tr key={shipment.sno}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{shipment.sno}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{shipment.drugName}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{shipment.sscc}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{shipment.batchId}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{shipment.qty}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{shipment.date}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:text-blue-800">
                <button>View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}