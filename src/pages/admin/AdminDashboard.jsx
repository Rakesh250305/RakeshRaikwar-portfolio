import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Dashboard() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    projects: 0,
    experience: 0,
    education: 0,
    messages: 0,
  });

  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    axios
      .get(
        `${apiUrl}/admin/stats`,
        "http://localhost:5000/admin/stats",
         {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setStats(res.data))
      .catch(() => navigate("/admin/login"));
  }, [apiUrl, navigate, token]);


  return (
    <div className="min-h-screen flex bg-gray-950 text-white">
      {/* MAIN */}
      <main className="flex-1 p-8 mt-14">
        <h1 className="text-3xl font-bold">Dashboard</h1>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          <StatCard title="Projects" value={stats.projects} />
          <StatCard title="Experience" value={stats.experience} />
          <StatCard title="Education" value={stats.education} />
          <StatCard title="Messages" value={stats.messages} />
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

function StatCard({ title, value }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
      <p className="text-gray-400">{title}</p>
      <h3 className="text-3xl font-bold mt-2">{value}</h3>
    </div>
  );
}
