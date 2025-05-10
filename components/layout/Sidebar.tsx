import Link from "next/link";
import { useState, useEffect } from "react";
import navItems from "@/data/endpoints.json";
import keycloak from "@/lib/keycloak";
import { FaSignOutAlt } from "react-icons/fa";
import Button from "../Button";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const [activeNav, setActiveNav] = useState<string | null>("Dashboard");

  // Get the current path segments
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(Boolean);
  const currentPath = pathSegments[pathSegments.length - 1];

  useEffect(() => {
    setActiveNav(currentPath); // Set the current path as the active navigation item
  }, [currentPath]);

  const handleLogOut = () => {
    keycloak.logout();
  };

  return (
    <div className="w-[300px] bg-[#F6F6F6] sticky ">
      {/* Sidebar Header */}
      <div className="flex justify-between w-[300px] h-[80px] bg-gray-100 px-3">
        <div className="text-black pt-[53px] mb-4">
          Welcome, <span className="font-bold">Anothony!</span>
        </div>
        <Button
          onClick={handleLogOut}
          value="logout"
          className="relative -top-5"
          backgroundColor="none"
          textColor="black"
          icon={<FaSignOutAlt />}
          iconPosition="right"
        />
      </div>
      {/* Sidebar Logo */}
      <div className="flex justify-center items-center w-[300px] h-[79.826px] p-[10px] gap-[10px] bg-white">
        <h2 className="text-black text-center font-[Inter] text-[25px] font-normal leading-normal">
          Supplier
        </h2>
      </div>
      {/* Sidebar Navigation */}
      <div>
        <nav>
          <ul>
            {navItems.map((item) => (
              <li key={item.name} className="px-2">
                <Link
                  href={item.href}
                  className={`block px-4 py-2 rounded text-black font-[Inter] text-[14px] font-normal leading-normal ${
                    activeNav === item.href.split('/').filter(Boolean).pop()
                      ? "text-[#005C28] font-extrabold bg-[rgba(0,92,40,0.2)]"
                      : ""
                  }`}
                  onClick={() => setActiveNav(item.name)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
