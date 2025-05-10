"use client";

import Header from "./Header";
import Sidebar from "./Sidebar";
import { LayoutProps } from "@/lib/types";

export default function Layout({
  title,
  subtitle,
  children,
  headerActions,
  showSidebar = true,
}: LayoutProps) {
  return (
    <div className="min-h-screen w-full">
      <div className="flex bg-white">
        {showSidebar && <Sidebar />}
        <div className="w-full flex flex-col">
          <Header title={title} subtitle={subtitle} actions={headerActions} />
          <main className="flex-1 p-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
