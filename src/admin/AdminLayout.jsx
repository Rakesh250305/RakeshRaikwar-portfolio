import Sidebar from "../components/admin/Sidebar"
import AdminTopNav from "../components/admin/AdminTopNav";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="flex h-screen w-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col transition-all ease-in">
        <AdminTopNav />
        <div className="h-[100vh] scroll-auto">
          <Outlet />
        </div>
        
      </div>
    </div>
  );
}
