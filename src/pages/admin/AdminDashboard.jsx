import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("adminAuth");
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen flex bg-gray-950 text-white">
      
      {/* SIDEBAR */}
      <aside className="w-64 bg-gray-900 border-r border-gray-800 p-6 hidden md:block">
        <h2 className="text-xl font-bold text-blue-500">Admin Panel</h2>

        <nav className="mt-8 space-y-4">
          <button className="block text-left w-full text-gray-300 hover:text-white">
            Dashboard
          </button>
          <button className="block text-left w-full text-gray-300 hover:text-white">
            Projects
          </button>
          <button className="block text-left w-full text-gray-300 hover:text-white">
            Skills
          </button>
          <button className="block text-left w-full text-gray-300 hover:text-white">
            Messages
          </button>
        </nav>

        <button
          onClick={logout}
          className="mt-10 text-red-400 hover:text-red-500"
        >
          Logout
        </button>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <p className="text-gray-400">Projects</p>
            <h3 className="text-3xl font-bold mt-2">4</h3>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <p className="text-gray-400">Skills</p>
            <h3 className="text-3xl font-bold mt-2">10</h3>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <p className="text-gray-400">Messages</p>
            <h3 className="text-3xl font-bold mt-2">3</h3>
          </div>
        </div>

        {/* WELCOME */}
        <div className="mt-10 bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h2 className="text-xl font-semibold">Welcome, Admin 👋</h2>
          <p className="text-gray-400 mt-2">
            Manage your portfolio content from this dashboard.
          </p>
        </div>
      </main>
    </div>
  );
}
