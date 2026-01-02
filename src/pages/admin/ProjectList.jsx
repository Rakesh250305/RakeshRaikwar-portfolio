import { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";

export default function ProjectList() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch projects from backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get(
          `${apiUrl}/admin/projects`
          // "http://localhost:5000/admin/projects"
          , {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
          },
        });
        setProjects(res.data.result);
      } catch (err) {
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Delete project
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;

    try {
      await axios.delete(`http://localhost:5000/admin/projects/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
        },
      });
      setProjects(projects.filter((p) => p._id !== id));
    } catch (err) {
      console.error("Error deleting project:", err);
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-950 text-white">

      <main className="flex-1 p-8 mt-14">
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="text-gray-400 mt-1">Manage all your portfolio projects here.</p>

        {loading ? (
          <p className="mt-6 text-gray-400">Loading projects...</p>
        ) : (
          <div className="mt-6 overflow-auto">
            <table className="min-w-full bg-gray-900 border border-gray-800 rounded-lg">
              <thead className="bg-gray-800 text-gray-300">
                <tr>
                  <th>#</th>
                  <th className="px-4 py-2">Title</th>
                  <th className="px-4 py-2">Tech</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((p,i) => (
                  <tr key={p._id} className="border-b text-left border-gray-800 hover:bg-gray-800">
                    <td className="text-center ">{i+1}</td>
                    <td className="text-center px-4 py-2">{p.title}</td>
                    <td className="text-center px-4 py-2">{p.tech.join(", ")}</td>
                    <td className="text-center px-4 py-2 flex gap-2">
                      <button className="bg-blue-600 hover:bg-blue-500 px-2 py-1 rounded text-white flex items-center gap-1">
                        <FaEdit /> Edit
                      </button>
                      <button
                        onClick={() => handleDelete(p._id)}
                        className="bg-red-600 hover:bg-red-500 px-2 py-1 rounded text-white flex items-center gap-1"
                      >
                        <FaTrash /> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {projects.length === 0 && <p className="mt-4 text-gray-400">No projects found.</p>}
          </div>
        )}
      </main>
    </div>
  );
}
