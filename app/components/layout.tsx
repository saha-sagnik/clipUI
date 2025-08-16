import Sidebar from "../websiteComponents/Sidebar";
import { Header } from "../websiteComponents/Header";

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#181826]">
      {/* Sticky Header/Navbar */}
      <Header />
      
      {/* Sticky Sidebar */}
      <Sidebar />
      
      {/* Main Content Area - with left margin for sidebar */}
      <div className="ml-[280px] min-h-screen bg-[#181826]">
        {children}
      </div>
    </div>
  );
}
