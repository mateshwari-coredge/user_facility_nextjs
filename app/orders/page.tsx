import Layout from "@/components/layout/Layout";
import DashboardMetrics from "@/components/DashboardMetrics";
import ShipmentsTable from "@/components/ShipmentsTable";

export default function DashboardPage() {
  return (
    <Layout
      title="Orders"
      // subtitle="Supplier Overview"
      headerActions={
        <div className="flex items-center border bg-white border-gray-300 px-3 py-2 rounded w-[400px]">
          <svg
            className="w-5 h-5 text-gray-400 mr-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="outline-none w-full bg-transparent text-gray-600"
          />
        </div>
      }
    >
      <div className="border-[0.2px] border-[#A19C9C] bg-[#F6F6F6]">
        <DashboardMetrics />
        <ShipmentsTable />
      </div>
    </Layout>
  );
}
